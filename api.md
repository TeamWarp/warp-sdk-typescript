# Warp TypeScript API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`Benefits`](#benefits)
  - [`Benefits HealthPlans`](#benefits-healthplans)
    - [List Health Plans](#list-health-plans)
    - [Get Health Plan](#get-health-plan)
  - [`Benefits RetirementPlans`](#benefits-retirementplans)
    - [List Retirement Plans](#list-retirement-plans)
    - [Get Retirement Plan](#get-retirement-plan)
  - [`Benefits Deductions`](#benefits-deductions)
    - [List Benefit Deductions](#list-benefit-deductions)
    - [Get Benefit Deduction](#get-benefit-deduction)
- [`CustomFields`](#customfields)
  - [List Fields](#list-fields)
  - [Create Field](#create-field)
  - [Get Field](#get-field)
  - [Update Field](#update-field)
  - [Archive Field](#archive-field)
  - [Create Field Option](#create-field-option)
  - [Update Field Option](#update-field-option)
  - [Delete Unused Field Option](#delete-unused-field-option)
  - [Archive Field Option](#archive-field-option)
  - [List Field Values](#list-field-values)
  - [Set Field Value](#set-field-value)
  - [Clear Field Value](#clear-field-value)
- [`Departments`](#departments)
  - [List Departments](#list-departments)
  - [Create Department](#create-department)
  - [Update Department](#update-department)
- [`Offers`](#offers)
  - [List Offers](#list-offers)
  - [Create Offer](#create-offer)
  - [Void Offer](#void-offer)
  - [Extend Offer Deadline](#extend-offer-deadline)
  - [Resend Offer](#resend-offer)
- [`TimeOff`](#timeoff)
  - [List Time Off Assignments](#list-time-off-assignments)
  - [List Time Off Balances](#list-time-off-balances)
  - [List Time Off Requests](#list-time-off-requests)
  - [`TimeOff Policies`](#timeoff-policies)
    - [List Time Off Policies](#list-time-off-policies)
    - [Get Time Off Policy](#get-time-off-policy)
- [`Workers`](#workers)
  - [List Workers](#list-workers)
  - [Get Worker](#get-worker)
  - [Delete Worker](#delete-worker)
  - [Create Employee](#create-employee)
  - [Create Contractor](#create-contractor)
  - [Invite Worker](#invite-worker)
- [`Workplaces`](#workplaces)
  - [List Workplaces](#list-workplaces)
  - [Create Workplace](#create-workplace)
  - [Update Workplace](#update-workplace)

## Setup

```ts
import Warp from 'warp-hr';

const client = new Warp({
  apiKey: process.env['WARP_API_KEY'], // defaults to the WARP_API_KEY env var
});
```

## `Benefits`

### `Benefits HealthPlans`

#### List Health Plans

List company health plans. Defaults to active plans. A plan whose effectiveEndDate has elapsed is reported and filtered as terminated.

| Direction | Type |
| --- | --- |
| Request | [`HealthPlanListParams`](./src/resources/benefits/health-plans.ts) |
| Response | [`HealthPlanListResponse`](./src/resources/benefits/health-plans.ts) |

```ts
const list = await client.benefits.healthPlans.list({
  limit: 'limit',
  statuses: ['active'],
});
```

#### Get Health Plan

Get a publicly visible company health plan by id.

| Direction | Type |
| --- | --- |
| Response | [`HealthPlanGetResponse`](./src/resources/benefits/health-plans.ts) |

```ts
const get_ = await client.benefits.healthPlans.get('id');
```

### `Benefits RetirementPlans`

#### List Retirement Plans

List company retirement plans. Defaults to active plans. A plan whose effectiveEndDate has elapsed is reported and filtered as terminated.

| Direction | Type |
| --- | --- |
| Request | [`RetirementPlanListParams`](./src/resources/benefits/retirement-plans.ts) |
| Response | [`RetirementPlanListResponse`](./src/resources/benefits/retirement-plans.ts) |

```ts
const list = await client.benefits.retirementPlans.list({
  limit: 'limit',
  statuses: ['active'],
});
```

#### Get Retirement Plan

Get a company retirement plan by id, regardless of status.

| Direction | Type |
| --- | --- |
| Response | [`RetirementPlanGetResponse`](./src/resources/benefits/retirement-plans.ts) |

```ts
const get_ = await client.benefits.retirementPlans.get('id');
```

### `Benefits Deductions`

#### List Benefit Deductions

List current payroll benefit deductions. Defaults to active deductions. A deduction whose effectiveEndDate has elapsed is reported and filtered as terminated.

| Direction | Type |
| --- | --- |
| Request | [`DeductionListParams`](./src/resources/benefits/deductions.ts) |
| Response | [`DeductionListResponse`](./src/resources/benefits/deductions.ts) |

```ts
const list = await client.benefits.deductions.list({
  limit: 'limit',
  statuses: ['active'],
});
```

#### Get Benefit Deduction

Get the current version of a company benefit deduction by id.

| Direction | Type |
| --- | --- |
| Response | [`DeductionGetResponse`](./src/resources/benefits/deductions.ts) |

```ts
const get_ = await client.benefits.deductions.get('id');
```

## `CustomFields`

### List Fields

List the custom worker field definitions your API key can read. Each field belongs to a worker-data category; fields whose category your key cannot read are omitted unless the key holds workers:custom_fields.

| Direction | Type |
| --- | --- |
| Response | [`CustomFieldListResponse`](./src/resources/custom-fields.ts) |

```ts
const list = await client.customFields.list();
```

### Create Field

Create a custom worker field definition. The field type is immutable after creation. Select and multi_select fields can include their initial options. Access to values derives from the field category; requires the workers:custom_fields permission.

| Direction | Type |
| --- | --- |
| Request | [`CustomFieldCreateParams`](./src/resources/custom-fields.ts) |
| Response | [`CustomFieldCreateResponse`](./src/resources/custom-fields.ts) |

```ts
const create = await client.customFields.create({
  name: {},
  type: 'text',
  category: 'info',
});
```

### Get Field

Get a custom worker field definition, including its select options. Archived options may appear on existing worker values but cannot be newly selected.

| Direction | Type |
| --- | --- |
| Response | [`CustomFieldRetrieveResponse`](./src/resources/custom-fields.ts) |

```ts
const retrieve = await client.customFields.retrieve('id');
```

### Update Field

Update a custom worker field definition. The field type cannot be changed; create a new field instead. Requires the workers:custom_fields permission; changing the category, access level, or input source requires the manage level.

| Direction | Type |
| --- | --- |
| Request | [`CustomFieldUpdateParams`](./src/resources/custom-fields.ts) |
| Response | [`CustomFieldUpdateResponse`](./src/resources/custom-fields.ts) |

```ts
const update = await client.customFields.update('id', {});
```

### Archive Field

Archive a custom worker field. Archived fields keep their existing worker values but cannot receive new ones. Requires the workers:custom_fields permission at the manage level.

| Direction | Type |
| --- | --- |
| Response | [`CustomFieldArchiveResponse`](./src/resources/custom-fields.ts) |

```ts
const archive = await client.customFields.archive('id');
```

### Create Field Option

Add an option to a select or multi_select custom worker field. The option value should be treated as stable; the label can change. Requires the workers:custom_fields permission.

| Direction | Type |
| --- | --- |
| Request | [`CustomFieldCreateOptionParams`](./src/resources/custom-fields.ts) |
| Response | [`CustomFieldCreateOptionResponse`](./src/resources/custom-fields.ts) |

```ts
const createOption = await client.customFields.createOption('id', {
  label: {},
  value: {},
});
```

### Update Field Option

Update the label or sort order of a custom worker field option. Options of archived fields cannot be edited. Requires the workers:custom_fields permission.

| Direction | Type |
| --- | --- |
| Request | [`CustomFieldUpdateOptionParams`](./src/resources/custom-fields.ts) |
| Response | [`CustomFieldUpdateOptionResponse`](./src/resources/custom-fields.ts) |

```ts
const updateOption = await client.customFields.updateOption('id', {});
```

### Delete Unused Field Option

Delete a custom worker field option that is not applied to any worker. Options in use must be archived instead. Requires the workers:custom_fields permission at the manage level.

```ts
await client.customFields.deleteOption('id');
```

### Archive Field Option

Archive a custom worker field option. Archived options remain on existing worker values but cannot be newly selected. Requires the workers:custom_fields permission at the manage level.

| Direction | Type |
| --- | --- |
| Response | [`CustomFieldArchiveOptionResponse`](./src/resources/custom-fields.ts) |

```ts
const archiveOption = await client.customFields.archiveOption('id');
```

### List Field Values

List custom field values for workers, optionally filtered by worker or field. Values are returned only for fields whose category your API key can read.

| Direction | Type |
| --- | --- |
| Request | [`CustomFieldListValuesParams`](./src/resources/custom-fields.ts) |
| Response | [`CustomFieldListValuesResponse`](./src/resources/custom-fields.ts) |

```ts
const listValues = await client.customFields.listValues();
```

### Set Field Value

Create or replace a worker's value for a custom field. The value shape must match the field type, and your API key must hold write on the field's category.

| Direction | Type |
| --- | --- |
| Request | [`CustomFieldUpsertValueParams`](./src/resources/custom-fields.ts) |
| Response | [`CustomFieldUpsertValueResponse`](./src/resources/custom-fields.ts) |

```ts
const upsertValue = await client.customFields.upsertValue({
  workerId: {},
  fieldId: {},
  value: {
    type: 'text',
    value: '',
  },
});
```

### Clear Field Value

Remove a worker's value for a custom field. Your API key must hold write on the field's category.

| Direction | Type |
| --- | --- |
| Request | [`CustomFieldClearValueParams`](./src/resources/custom-fields.ts) |

```ts
await client.customFields.clearValue({
  workerId: {},
  fieldId: {},
});
```

## `Departments`

### List Departments

List all departments for your company.

| Direction | Type |
| --- | --- |
| Request | [`DepartmentListParams`](./src/resources/departments.ts) |
| Response | [`DepartmentListResponse`](./src/resources/departments.ts) |

```ts
const list = await client.departments.list({
  limit: 'limit',
});
```

### Create Department

Create a new department.

| Direction | Type |
| --- | --- |
| Request | [`DepartmentCreateParams`](./src/resources/departments.ts) |
| Response | [`DepartmentCreateResponse`](./src/resources/departments.ts) |

```ts
const create = await client.departments.create({
  name: {},
});
```

### Update Department

Update an existing department.

| Direction | Type |
| --- | --- |
| Request | [`DepartmentUpdateParams`](./src/resources/departments.ts) |
| Response | [`DepartmentUpdateResponse`](./src/resources/departments.ts) |

```ts
const update = await client.departments.update('id', {});
```

## `Offers`

### List Offers

List the candidate offers for your company.

| Direction | Type |
| --- | --- |
| Request | [`OfferListParams`](./src/resources/offers.ts) |
| Response | [`OfferListResponse`](./src/resources/offers.ts) |

```ts
const list = await client.offers.list({
  limit: 'limit',
});
```

### Create Offer

Create and send a candidate offer. The candidate receives an email with a link to the offer portal.

| Direction | Type |
| --- | --- |
| Request | [`OfferCreateParams`](./src/resources/offers.ts) |
| Response | [`OfferCreateResponse`](./src/resources/offers.ts) |

```ts
const create = await client.offers.create({
  candidate: {
    firstName: {},
    lastName: {},
    email: {},
  },
  position: {
    title: {},
    startDate: {},
  },
  workerType: 'employee',
  compensation: {
    payBasis: 'year',
    payCurrency: 'USD',
    payRate: {},
  },
});
```

### Void Offer

Void a previously sent offer. Only sent offers can be voided.

| Direction | Type |
| --- | --- |
| Response | [`OfferVoidResponse`](./src/resources/offers.ts) |

```ts
const void_ = await client.offers.void('id');
```

### Extend Offer Deadline

Extend the expiration deadline of a sent offer.

| Direction | Type |
| --- | --- |
| Request | [`OfferExtendDeadlineParams`](./src/resources/offers.ts) |
| Response | [`OfferExtendDeadlineResponse`](./src/resources/offers.ts) |

```ts
const extendDeadline = await client.offers.extendDeadline('id', {
  expirationTime: '',
});
```

### Resend Offer

Resend the offer email to the candidate for a sent offer.

| Direction | Type |
| --- | --- |
| Response | [`OfferResendResponse`](./src/resources/offers.ts) |

```ts
const resend = await client.offers.resend('id');
```

## `TimeOff`

### List Time Off Assignments

Time off assignments are mappings between workers and time off policies. Useful for finding out which policies a worker is assigned to, or which workers are assigned to a given policy.

| Direction | Type |
| --- | --- |
| Request | [`TimeOffListAssignmentsParams`](./src/resources/time-off/time-off.ts) |
| Response | [`TimeOffListAssignmentsResponse`](./src/resources/time-off/time-off.ts) |

```ts
const listAssignments = await client.timeOff.listAssignments({
  limit: 'limit',
});
```

### List Time Off Balances

Get worker remaining time-off balances.

| Direction | Type |
| --- | --- |
| Request | [`TimeOffListBalancesParams`](./src/resources/time-off/time-off.ts) |
| Response | [`TimeOffListBalancesResponse`](./src/resources/time-off/time-off.ts) |

```ts
const listBalances = await client.timeOff.listBalances({
  limit: 'limit',
});
```

### List Time Off Requests

Get the time off requests that workers in your company have made.

| Direction | Type |
| --- | --- |
| Request | [`TimeOffListRequestsParams`](./src/resources/time-off/time-off.ts) |
| Response | [`TimeOffListRequestsResponse`](./src/resources/time-off/time-off.ts) |

```ts
const listRequests = await client.timeOff.listRequests({
  limit: 'limit',
});
```

### `TimeOff Policies`

#### List Time Off Policies

Get the time off policies for your company

| Direction | Type |
| --- | --- |
| Request | [`PolicyTimeOffGetParams`](./src/resources/time-off/policies.ts) |
| Response | [`PolicyTimeOffGetResponse`](./src/resources/time-off/policies.ts) |

```ts
const timeOffGet = await client.timeOff.policies.timeOffGet({
  limit: 'limit',
});
```

#### Get Time Off Policy

Get a specific time off policy by id

| Direction | Type |
| --- | --- |
| Response | [`PolicyTimeOffGet2Response`](./src/resources/time-off/policies.ts) |

```ts
const timeOffGet2 = await client.timeOff.policies.timeOffGet2('id');
```

## `Workers`

### List Workers

List all workers. Workers include anyone employed by the company, whether US or international, full-time employees or contractors.

| Direction | Type |
| --- | --- |
| Request | [`WorkerListParams`](./src/resources/workers.ts) |
| Response | [`WorkerListResponse`](./src/resources/workers.ts) |

```ts
const list = await client.workers.list({
  limit: 'limit',
});
```

### Get Worker

Get a specific worker by id.

| Direction | Type |
| --- | --- |
| Response | [`WorkerRetrieveResponse`](./src/resources/workers.ts) |

```ts
const retrieve = await client.workers.retrieve('id');
```

### Delete Worker

Delete a worker. Only workers who have not yet completed onboarding can be deleted. Active workers must be properly offboarded.

```ts
await client.workers.delete('id');
```

### Create Employee

Create a new US employee. The worker will be created in draft status and must be invited separately via the invite endpoint. If hiring in a state without an existing tax registration, you must specify the stateRegistration field.

| Direction | Type |
| --- | --- |
| Request | [`WorkerCreateEmployeeParams`](./src/resources/workers.ts) |
| Response | [`WorkerCreateEmployeeResponse`](./src/resources/workers.ts) |

```ts
const createEmployee = await client.workers.createEmployee({
  firstName: {},
  lastName: {},
  position: {},
  startDate: {},
  email: {},
  departmentId: {},
  managerId: {},
  workLocation: {
    type: 'office',
    workplaceId: {},
  },
  compensation: {
    amount: {},
    per: 'hour',
  },
});
```

### Create Contractor

Create a new contractor. The worker will be created in draft status and must be invited separately via the invite endpoint. For business contractors, the businessName field is required.

| Direction | Type |
| --- | --- |
| Request | [`WorkerCreateContractorParams`](./src/resources/workers.ts) |
| Response | [`WorkerCreateContractorResponse`](./src/resources/workers.ts) |

```ts
const createContractor = await client.workers.createContractor({
  entityType: 'individual',
  firstName: {},
  lastName: {},
  position: {},
  startDate: {},
  email: {},
  departmentId: {},
  managerId: {},
  workCountry: 'AD',
});
```

### Invite Worker

Send or resend the worker invite so they can accept and complete onboarding to Warp. If the worker has already been invited, the invite will be resent with extended validity.

| Direction | Type |
| --- | --- |
| Response | [`WorkerInviteResponse`](./src/resources/workers.ts) |

```ts
const invite = await client.workers.invite('id');
```

## `Workplaces`

### List Workplaces

List all workplaces for your company.

| Direction | Type |
| --- | --- |
| Request | [`WorkplaceListParams`](./src/resources/workplaces.ts) |
| Response | [`WorkplaceListResponse`](./src/resources/workplaces.ts) |

```ts
const list = await client.workplaces.list({
  limit: 'limit',
});
```

### Create Workplace

Create a new workplace.

| Direction | Type |
| --- | --- |
| Request | [`WorkplaceCreateParams`](./src/resources/workplaces.ts) |
| Response | [`WorkplaceCreateResponse`](./src/resources/workplaces.ts) |

```ts
const create = await client.workplaces.create({
  name: {},
  type: 'remote',
  address: {
    line1: {},
    city: '',
    postalCode: '',
    state: 'AL',
    country: 'US',
  },
});
```

### Update Workplace

Update an existing workplace.

| Direction | Type |
| --- | --- |
| Request | [`WorkplaceUpdateParams`](./src/resources/workplaces.ts) |
| Response | [`WorkplaceUpdateResponse`](./src/resources/workplaces.ts) |

```ts
const update = await client.workplaces.update('id', {});
```
