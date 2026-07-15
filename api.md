# Warp TypeScript API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`TimeOff`](#timeoff)
  - [List time off assignments](#list-time-off-assignments)
  - [List time off balances](#list-time-off-balances)
  - [List time off requests](#list-time-off-requests)
  - [`TimeOff Policies`](#timeoff-policies)
    - [List time off policies](#list-time-off-policies)
    - [Get time off policy](#get-time-off-policy)
- [`Workers`](#workers)
  - [List workers](#list-workers)
  - [Get worker](#get-worker)
  - [Delete worker](#delete-worker)
  - [Create employee](#create-employee)
  - [Create contractor](#create-contractor)
  - [Invite worker](#invite-worker)
- [`Departments`](#departments)
  - [List departments](#list-departments)
  - [Create department](#create-department)
  - [Update department](#update-department)
- [`Workplaces`](#workplaces)
  - [List workplaces](#list-workplaces)
  - [Create workplace](#create-workplace)
  - [Update workplace](#update-workplace)

## Setup

```ts
import client from "warp-hr";

const client = new client({
  apiKey: process.env["WARP_API_KEY"], // defaults to the WARP_API_KEY env var
});
```

## `TimeOff`

### List time off assignments

Time off assignments are mappings between workers and time off policies. Useful for finding out which policies a worker is assigned to, or which workers are assigned to a given policy.

| Direction | Type |
| --- | --- |
| Request | [`TimeOffListAssignmentsParams`](./src/resources/time-off/time-off.ts) |
| Response | [`TimeOffListAssignmentsResponse`](./src/resources/time-off/time-off.ts) |

```ts
const listAssignments = await client.timeOff.listAssignments();
```

### List time off balances

Get worker remaining time-off balances.

| Direction | Type |
| --- | --- |
| Request | [`TimeOffListBalancesParams`](./src/resources/time-off/time-off.ts) |
| Response | [`TimeOffListBalancesResponse`](./src/resources/time-off/time-off.ts) |

```ts
const listBalances = await client.timeOff.listBalances();
```

### List time off requests

Get the time off requests that workers in your company have made.

| Direction | Type |
| --- | --- |
| Request | [`TimeOffListRequestsParams`](./src/resources/time-off/time-off.ts) |
| Response | [`TimeOffListRequestsResponse`](./src/resources/time-off/time-off.ts) |

```ts
const listRequests = await client.timeOff.listRequests();
```

### `TimeOff Policies`

#### List time off policies

Get the time off policies for your company

| Direction | Type |
| --- | --- |
| Request | [`PolicyListParams`](./src/resources/time-off/policies.ts) |
| Response | [`PolicyListResponse`](./src/resources/time-off/policies.ts) |

```ts
const list = await client.timeOff.policies.list();
```

#### Get time off policy

Get a specific time off policy by id

| Direction | Type |
| --- | --- |
| Response | [`PolicyRetrieveResponse`](./src/resources/time-off/policies.ts) |

```ts
const retrieve = await client.timeOff.policies.retrieve("top_1234");
```

## `Workers`

### List workers

List all workers. Workers include anyone employed by the company, whether US or international, full-time employees or contractors.

| Direction | Type |
| --- | --- |
| Request | [`WorkerListParams`](./src/resources/workers.ts) |
| Response | [`WorkerListResponse`](./src/resources/workers.ts) |

```ts
const list = await client.workers.list();
```

### Get worker

Get a specific worker by id.

| Direction | Type |
| --- | --- |
| Response | [`WorkerRetrieveResponse`](./src/resources/workers.ts) |

```ts
const retrieve = await client.workers.retrieve("wrk_1234");
```

### Delete worker

Delete a worker. Only workers who have not yet completed onboarding can be deleted. Active workers must be properly offboarded.

```ts
await client.workers.delete("wrk_1234");
```

### Create employee

Create a new US employee. The worker will be created in draft status and must be invited separately via the invite endpoint. If hiring in a state without an existing tax registration, you must specify the stateRegistration field.

| Direction | Type |
| --- | --- |
| Request | [`WorkerCreateEmployeeParams`](./src/resources/workers.ts) |
| Response | [`WorkerCreateEmployeeResponse`](./src/resources/workers.ts) |

```ts
const createEmployee = await client.workers.createEmployee({
  firstName: "",
  lastName: "",
  position: "",
  startDate: "2000-01-01",
  email: "john@joinwarp.com",
  departmentId: "dpt_1234",
  managerId: "wrk_1234",
  workLocation: {
    type: "office",
    workplaceId: "wkp_1234",
  },
  compensation: {
    amount: 0,
    per: "hour",
  },
});
```

### Create contractor

Create a new contractor. The worker will be created in draft status and must be invited separately via the invite endpoint. For business contractors, the businessName field is required.

| Direction | Type |
| --- | --- |
| Request | [`WorkerCreateContractorParams`](./src/resources/workers.ts) |
| Response | [`WorkerCreateContractorResponse`](./src/resources/workers.ts) |

```ts
const createContractor = await client.workers.createContractor({
  entityType: "individual",
  firstName: "",
  lastName: "",
  position: "",
  startDate: "2000-01-01",
  email: "john@joinwarp.com",
  departmentId: "dpt_1234",
  managerId: "wrk_1234",
  workCountry: "AD",
});
```

### Invite worker

Send or resend the worker invite so they can accept and complete onboarding to Warp. If the worker has already been invited, the invite will be resent with extended validity.

| Direction | Type |
| --- | --- |
| Response | [`WorkerInviteResponse`](./src/resources/workers.ts) |

```ts
const invite = await client.workers.invite("wrk_1234");
```

## `Departments`

### List departments

List all departments for your company.

| Direction | Type |
| --- | --- |
| Request | [`DepartmentListParams`](./src/resources/departments.ts) |
| Response | [`DepartmentListResponse`](./src/resources/departments.ts) |

```ts
const list = await client.departments.list();
```

### Create department

Create a new department.

| Direction | Type |
| --- | --- |
| Request | [`DepartmentCreateParams`](./src/resources/departments.ts) |
| Response | [`DepartmentCreateResponse`](./src/resources/departments.ts) |

```ts
const create = await client.departments.create({
  name: "",
});
```

### Update department

Update an existing department.

| Direction | Type |
| --- | --- |
| Request | [`DepartmentUpdateParams`](./src/resources/departments.ts) |
| Response | [`DepartmentUpdateResponse`](./src/resources/departments.ts) |

```ts
const update = await client.departments.update("dpt_1234", {});
```

## `Workplaces`

### List workplaces

List all workplaces for your company.

| Direction | Type |
| --- | --- |
| Request | [`WorkplaceListParams`](./src/resources/workplaces.ts) |
| Response | [`WorkplaceListResponse`](./src/resources/workplaces.ts) |

```ts
const list = await client.workplaces.list();
```

### Create workplace

Create a new workplace.

| Direction | Type |
| --- | --- |
| Request | [`WorkplaceCreateParams`](./src/resources/workplaces.ts) |
| Response | [`WorkplaceCreateResponse`](./src/resources/workplaces.ts) |

```ts
const create = await client.workplaces.create({
  name: "",
  type: "remote",
  address: {
    line1: "x",
    city: "",
    postalCode: "",
    state: "AL",
    country: "US",
  },
});
```

### Update workplace

Update an existing workplace.

| Direction | Type |
| --- | --- |
| Request | [`WorkplaceUpdateParams`](./src/resources/workplaces.ts) |
| Response | [`WorkplaceUpdateResponse`](./src/resources/workplaces.ts) |

```ts
const update = await client.workplaces.update("wkp_1234", {});
```
