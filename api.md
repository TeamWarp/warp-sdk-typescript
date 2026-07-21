# Warp TypeScript API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`CustomWorkerFields`](#customworkerfields)
  - [List custom worker fields](#list-custom-worker-fields)
  - [Create custom worker field](#create-custom-worker-field)
  - [Get custom worker field](#get-custom-worker-field)
  - [Update custom worker field](#update-custom-worker-field)
  - [Archive custom worker field](#archive-custom-worker-field)
  - [Create field option](#create-field-option)
  - [Update field option](#update-field-option)
  - [Delete unused field option](#delete-unused-field-option)
  - [Archive field option](#archive-field-option)
  - [List worker custom field values](#list-worker-custom-field-values)
  - [Set worker custom field value](#set-worker-custom-field-value)
  - [Clear worker custom field value](#clear-worker-custom-field-value)
- [`Departments`](#departments)
  - [List departments](#list-departments)
  - [Create department](#create-department)
  - [Update department](#update-department)
- [`Offers`](#offers)
  - [List offers](#list-offers)
  - [Create offer](#create-offer)
  - [Void offer](#void-offer)
  - [Extend offer deadline](#extend-offer-deadline)
  - [Resend offer](#resend-offer)
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
- [`Workplaces`](#workplaces)
  - [List workplaces](#list-workplaces)
  - [Create workplace](#create-workplace)
  - [Update workplace](#update-workplace)

## Setup

```ts
import WarpAPI from "@warp/warp-api";

const client = new WarpAPI({
  apiKey: process.env["API_KEY"], // defaults to the API_KEY env var
});
```

## `CustomWorkerFields`

### List custom worker fields

List the custom worker field definitions your API key can read. Each field belongs to a worker-data category; fields whose category your key cannot read are omitted unless the key holds workers:custom_fields.

| Direction | Type |
| --- | --- |
| Response | [`CustomWorkerFieldListResponse`](./src/resources/custom-worker-fields.ts) |

```ts
const list = await client.customWorkerFields.list();
```

### Create custom worker field

Create a custom worker field definition. The field type is immutable after creation. Select and multi_select fields can include their initial options. Access to values derives from the field category; requires the workers:custom_fields permission.

| Direction | Type |
| --- | --- |
| Request | [`CustomWorkerFieldCreateParams`](./src/resources/custom-worker-fields.ts) |
| Response | [`CustomWorkerFieldCreateResponse`](./src/resources/custom-worker-fields.ts) |

```ts
const create = await client.customWorkerFields.create({
  name: "",
  type: "text",
  category: "info",
});
```

### Get custom worker field

Get a custom worker field definition, including its select options. Archived options may appear on existing worker values but cannot be newly selected.

| Direction | Type |
| --- | --- |
| Response | [`CustomWorkerFieldRetrieveResponse`](./src/resources/custom-worker-fields.ts) |

```ts
const retrieve = await client.customWorkerFields.retrieve("cf_1234");
```

### Update custom worker field

Update a custom worker field definition. The field type cannot be changed; create a new field instead. Requires the workers:custom_fields permission; changing the category, access level, or input source requires the manage level.

| Direction | Type |
| --- | --- |
| Request | [`CustomWorkerFieldUpdateParams`](./src/resources/custom-worker-fields.ts) |
| Response | [`CustomWorkerFieldUpdateResponse`](./src/resources/custom-worker-fields.ts) |

```ts
const update = await client.customWorkerFields.update("cf_1234", {});
```

### Archive custom worker field

Archive a custom worker field. Archived fields keep their existing worker values but cannot receive new ones. Requires the workers:custom_fields permission at the manage level.

| Direction | Type |
| --- | --- |
| Response | [`CustomWorkerFieldArchiveResponse`](./src/resources/custom-worker-fields.ts) |

```ts
const archive = await client.customWorkerFields.archive("cf_1234");
```

### Create field option

Add an option to a select or multi_select custom worker field. The option value should be treated as stable; the label can change. Requires the workers:custom_fields permission.

| Direction | Type |
| --- | --- |
| Request | [`CustomWorkerFieldCreateOptionParams`](./src/resources/custom-worker-fields.ts) |
| Response | [`CustomWorkerFieldCreateOptionResponse`](./src/resources/custom-worker-fields.ts) |

```ts
const createOption = await client.customWorkerFields.createOption("cf_1234", {
  label: "x",
  value: "x",
});
```

### Update field option

Update the label or sort order of a custom worker field option. Options of archived fields cannot be edited. Requires the workers:custom_fields permission.

| Direction | Type |
| --- | --- |
| Request | [`CustomWorkerFieldUpdateOptionParams`](./src/resources/custom-worker-fields.ts) |
| Response | [`CustomWorkerFieldUpdateOptionResponse`](./src/resources/custom-worker-fields.ts) |

```ts
const updateOption = await client.customWorkerFields.updateOption("cfo_1234", {});
```

### Delete unused field option

Delete a custom worker field option that is not applied to any worker. Options in use must be archived instead. Requires the workers:custom_fields permission at the manage level.

```ts
await client.customWorkerFields.deleteOption("cfo_1234");
```

### Archive field option

Archive a custom worker field option. Archived options remain on existing worker values but cannot be newly selected. Requires the workers:custom_fields permission at the manage level.

| Direction | Type |
| --- | --- |
| Response | [`CustomWorkerFieldArchiveOptionResponse`](./src/resources/custom-worker-fields.ts) |

```ts
const archiveOption = await client.customWorkerFields.archiveOption("cfo_1234");
```

### List worker custom field values

List custom field values for workers, optionally filtered by worker or field. Values are returned only for fields whose category your API key can read.

| Direction | Type |
| --- | --- |
| Request | [`CustomWorkerFieldListValuesParams`](./src/resources/custom-worker-fields.ts) |
| Response | [`CustomWorkerFieldListValuesResponse`](./src/resources/custom-worker-fields.ts) |

```ts
const listValues = await client.customWorkerFields.listValues();
```

### Set worker custom field value

Create or replace a worker's value for a custom field. The value shape must match the field type, and your API key must hold write on the field's category.

| Direction | Type |
| --- | --- |
| Request | [`CustomWorkerFieldUpsertValueParams`](./src/resources/custom-worker-fields.ts) |
| Response | [`CustomWorkerFieldUpsertValueResponse`](./src/resources/custom-worker-fields.ts) |

```ts
const upsertValue = await client.customWorkerFields.upsertValue({
  workerId: "wrk_1234",
  fieldId: "cf_1234",
  value: {
    type: "text",
    value: "",
  },
});
```

### Clear worker custom field value

Remove a worker's value for a custom field. Your API key must hold write on the field's category.

| Direction | Type |
| --- | --- |
| Request | [`CustomWorkerFieldClearValueParams`](./src/resources/custom-worker-fields.ts) |

```ts
await client.customWorkerFields.clearValue({
  workerId: "wrk_1234",
  fieldId: "cf_1234",
});
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

## `Offers`

### List offers

List the candidate offers for your company.

| Direction | Type |
| --- | --- |
| Request | [`OfferListParams`](./src/resources/offers.ts) |
| Response | [`OfferListResponse`](./src/resources/offers.ts) |

```ts
const list = await client.offers.list();
```

### Create offer

Create and send a candidate offer. The candidate receives an email with a link to the offer portal.

| Direction | Type |
| --- | --- |
| Request | [`OfferCreateParams`](./src/resources/offers.ts) |
| Response | [`OfferCreateResponse`](./src/resources/offers.ts) |

```ts
const create = await client.offers.create({
  candidate: {
    firstName: "x",
    lastName: "x",
    email: "john@joinwarp.com",
  },
  position: {
    title: "x",
    startDate: "2000-01-01",
  },
  workerType: "employee",
  compensation: {
    payBasis: "year",
    payCurrency: "USD",
    payRate: 0,
  },
});
```

### Void offer

Void a previously sent offer. Only sent offers can be voided.

| Direction | Type |
| --- | --- |
| Response | [`OfferVoidResponse`](./src/resources/offers.ts) |

```ts
const void_ = await client.offers.void("offr_1234");
```

### Extend offer deadline

Extend the expiration deadline of a sent offer.

| Direction | Type |
| --- | --- |
| Request | [`OfferExtendDeadlineParams`](./src/resources/offers.ts) |
| Response | [`OfferExtendDeadlineResponse`](./src/resources/offers.ts) |

```ts
const extendDeadline = await client.offers.extendDeadline("offr_1234", {
  expirationTime: "",
});
```

### Resend offer

Resend the offer email to the candidate for a sent offer.

| Direction | Type |
| --- | --- |
| Response | [`OfferResendResponse`](./src/resources/offers.ts) |

```ts
const resend = await client.offers.resend("offr_1234");
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
| Request | [`PolicyTimeOffGetParams`](./src/resources/time-off/policies.ts) |
| Response | [`PolicyTimeOffGetResponse`](./src/resources/time-off/policies.ts) |

```ts
const timeOffGet = await client.timeOff.policies.timeOffGet();
```

#### Get time off policy

Get a specific time off policy by id

| Direction | Type |
| --- | --- |
| Response | [`PolicyTimeOffGet2Response`](./src/resources/time-off/policies.ts) |

```ts
const timeOffGet2 = await client.timeOff.policies.timeOffGet2("top_1234");
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
