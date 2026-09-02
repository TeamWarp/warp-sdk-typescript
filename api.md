# warp TypeScript API

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
- [`PayRates`](#payrates)
  - [List Pay Rates](#list-pay-rates)
  - [Get Pay Rate](#get-pay-rate)
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
- [`Payroll`](#payroll)
  - [List Paychecks](#list-paychecks)
  - [Get Paycheck](#get-paycheck)
  - [List Payrolls](#list-payrolls)
  - [Get Payroll](#get-payroll)

## Setup

```ts
import Warp from 'warp-hr';

const client = new Warp({
  apiKey: process.env['WARP_API_KEY'], // defaults to the WARP_API_KEY env var
});
```

## `Benefits`

### `Benefits HealthPlans`

Read-only health plans, retirement plans, and payroll benefit deductions.

#### List Health Plans

List company health plans. Defaults to active plans. A plan whose effectiveEndDate has elapsed is reported and filtered as terminated.

| Direction | Type |
| --- | --- |
| Request | [`HealthPlanListParams`](./src/resources/benefits/health-plans.ts) |
| Response | [`HealthPlanListResponse`](./src/resources/benefits/health-plans.ts) |

```ts
const healthPlan = await client.benefits.healthPlans.list({
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
const healthPlan = await client.benefits.healthPlans.get('chpl_1234');
```

### `Benefits RetirementPlans`

Read-only health plans, retirement plans, and payroll benefit deductions.

#### List Retirement Plans

List company retirement plans. Defaults to active plans. A plan whose effectiveEndDate has elapsed is reported and filtered as terminated.

| Direction | Type |
| --- | --- |
| Request | [`RetirementPlanListParams`](./src/resources/benefits/retirement-plans.ts) |
| Response | [`RetirementPlanListResponse`](./src/resources/benefits/retirement-plans.ts) |

```ts
const retirementPlan = await client.benefits.retirementPlans.list({
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
const retirementPlan = await client.benefits.retirementPlans.get('crpl_1234');
```

### `Benefits Deductions`

Read-only health plans, retirement plans, and payroll benefit deductions.

#### List Benefit Deductions

List current payroll benefit deductions. Defaults to active deductions. A deduction whose effectiveEndDate has elapsed is reported and filtered as terminated.

| Direction | Type |
| --- | --- |
| Request | [`DeductionListParams`](./src/resources/benefits/deductions.ts) |
| Response | [`DeductionListResponse`](./src/resources/benefits/deductions.ts) |

```ts
const deduction = await client.benefits.deductions.list({
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
const deduction = await client.benefits.deductions.get('pbdg_1234');
```

## `CustomFields`

Company-defined custom fields for workers. Field definitions are administered with the workers:custom_fields permission; each field belongs to a worker-data category whose read/write grants govern its values.

### List Fields

List the custom worker field definitions your API key can read. Each field belongs to a worker-data category; fields whose category your key cannot read are omitted unless the key holds workers:custom_fields.

| Direction | Type |
| --- | --- |
| Response | [`CustomFieldListResponse`](./src/resources/custom-fields.ts) |

```ts
const customField = await client.customFields.list();
```

### Create Field

Create a custom worker field definition. The field type is immutable after creation. Select and multi_select fields can include their initial options. Access to values derives from the field category; requires the workers:custom_fields permission.

| Direction | Type |
| --- | --- |
| Request | [`CustomFieldCreateParams`](./src/resources/custom-fields.ts) |
| Response | [`CustomFieldCreateResponse`](./src/resources/custom-fields.ts) |

```ts
const customField = await client.customFields.create({
  name: 'x',
  type: 'text',
  category: 'info',
});
```

### Get Field

Get a custom worker field definition, including its select options. Archived options may appear on existing worker values but cannot be newly selected.

| Direction | Type |
| --- | --- |
| Response | [`CustomFieldGetResponse`](./src/resources/custom-fields.ts) |

```ts
const customField = await client.customFields.get('cf_1234');
```

### Update Field

Update a custom worker field definition. The field type cannot be changed; create a new field instead. Requires the workers:custom_fields permission; changing the category, access level, or input source requires the manage level.

| Direction | Type |
| --- | --- |
| Request | [`CustomFieldUpdateParams`](./src/resources/custom-fields.ts) |
| Response | [`Objects`](./src/resources/shared.ts) |

```ts
const objects = await client.customFields.update('cf_1234', {});
```

### Archive Field

Archive a custom worker field. Archived fields keep their existing worker values but cannot receive new ones. Requires the workers:custom_fields permission at the manage level.

| Direction | Type |
| --- | --- |
| Response | [`Objects`](./src/resources/shared.ts) |

```ts
const objects = await client.customFields.archive('cf_1234');
```

### Create Field Option

Add an option to a select or multi_select custom worker field. The option value should be treated as stable; the label can change. Requires the workers:custom_fields permission.

| Direction | Type |
| --- | --- |
| Request | [`CustomFieldCreateOptionParams`](./src/resources/custom-fields.ts) |
| Response | [`CustomFieldCreateOptionResponse`](./src/resources/custom-fields.ts) |

```ts
const customField = await client.customFields.createOption('cf_1234', {
  label: 'x',
  value: 'x',
});
```

### Update Field Option

Update the label or sort order of a custom worker field option. Options of archived fields cannot be edited. Requires the workers:custom_fields permission.

| Direction | Type |
| --- | --- |
| Request | [`CustomFieldUpdateOptionParams`](./src/resources/custom-fields.ts) |
| Response | [`Objects3`](./src/resources/shared.ts) |

```ts
const objects3 = await client.customFields.updateOption('cfo_1234', {});
```

### Delete Unused Field Option

Delete a custom worker field option that is not applied to any worker. Options in use must be archived instead. Requires the workers:custom_fields permission at the manage level.

```ts
await client.customFields.deleteOption('cfo_1234');
```

### Archive Field Option

Archive a custom worker field option. Archived options remain on existing worker values but cannot be newly selected. Requires the workers:custom_fields permission at the manage level.

| Direction | Type |
| --- | --- |
| Response | [`Objects3`](./src/resources/shared.ts) |

```ts
const objects3 = await client.customFields.archiveOption('cfo_1234');
```

### List Field Values

List custom field values for workers, optionally filtered by worker or field. Values are returned only for fields whose category your API key can read.

| Direction | Type |
| --- | --- |
| Request | [`CustomFieldListValuesParams`](./src/resources/custom-fields.ts) |
| Response | [`CustomFieldListValuesResponse`](./src/resources/custom-fields.ts) |

```ts
const customField = await client.customFields.listValues();
```

### Set Field Value

Create or replace a worker's value for a custom field. The value shape must match the field type, and your API key must hold write on the field's category.

| Direction | Type |
| --- | --- |
| Request | [`CustomFieldUpsertValueParams`](./src/resources/custom-fields.ts) |
| Response | [`CustomFieldUpsertValueResponse`](./src/resources/custom-fields.ts) |

```ts
const customField = await client.customFields.upsertValue({
  workerId: 'wrk_1234',
  fieldId: 'cf_1234',
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
  workerId: 'wrk_1234',
  fieldId: 'cf_1234',
});
```

## `Departments`

Endpoints for department management. Create, list, and update departments within your company.

### List Departments

List all departments for your company.

| Direction | Type |
| --- | --- |
| Request | [`DepartmentListParams`](./src/resources/departments.ts) |
| Response | [`DepartmentListResponse`](./src/resources/departments.ts) |

```ts
const department = await client.departments.list({
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
const department = await client.departments.create({
  name: 'x',
});
```

### Update Department

Update an existing department.

| Direction | Type |
| --- | --- |
| Request | [`DepartmentUpdateParams`](./src/resources/departments.ts) |
| Response | [`DepartmentUpdateResponse`](./src/resources/departments.ts) |

```ts
const department = await client.departments.update('dpt_1234', {});
```

## `Offers`

Endpoints for managing candidate offers. Create and send offers, list existing offers, and manage their lifecycle.

### List Offers

List the candidate offers for your company.

| Direction | Type |
| --- | --- |
| Request | [`OfferListParams`](./src/resources/offers.ts) |
| Response | [`OfferListResponse`](./src/resources/offers.ts) |

```ts
const offer = await client.offers.list({
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
const offer = await client.offers.create({
  candidate: {
    firstName: 'x',
    lastName: 'x',
    email: 'john@joinwarp.com',
  },
  position: {
    title: 'x',
    startDate: '',
  },
  workerType: 'employee',
  compensation: {
    payBasis: 'year',
    payCurrency: 'USD',
    payRate: 0,
  },
});
```

### Void Offer

Void a previously sent offer. Only sent offers can be voided.

| Direction | Type |
| --- | --- |
| Request | [`OfferVoidParams`](./src/resources/offers.ts) |
| Response | [`OfferVoidResponse`](./src/resources/offers.ts) |

```ts
const offer = await client.offers.void('offr_1234', {
  voidReason: 'candidate_declined',
});
```

### Extend Offer Deadline

Extend the expiration deadline of a sent offer.

| Direction | Type |
| --- | --- |
| Request | [`OfferExtendDeadlineParams`](./src/resources/offers.ts) |
| Response | [`OfferExtendDeadlineResponse`](./src/resources/offers.ts) |

```ts
const offer = await client.offers.extendDeadline('offr_1234', {
  expirationTime: '',
});
```

### Resend Offer

Resend the offer email to the candidate for a sent offer.

| Direction | Type |
| --- | --- |
| Response | [`OfferResendResponse`](./src/resources/offers.ts) |

```ts
const offer = await client.offers.resend('offr_1234');
```

## `PayRates`

Read regular and additional worker pay rates.

### List Pay Rates

List pay rates visible to the API key. Results may be filtered by worker, effective start date, or regular/additional type. US and global worker rates require their corresponding compensation read scopes.

| Direction | Type |
| --- | --- |
| Request | [`PayRateListParams`](./src/resources/pay-rates.ts) |
| Response | [`PayRateListResponse`](./src/resources/pay-rates.ts) |

```ts
const payRate = await client.payRates.list({
  limit: 'limit',
});
```

### Get Pay Rate

Get a specific pay rate by id. The API key must have the compensation read scope corresponding to the worker.

| Direction | Type |
| --- | --- |
| Response | [`PayRateGetResponse`](./src/resources/pay-rates.ts) |

```ts
const payRate = await client.payRates.get('pyr_1234');
```

## `TimeOff`

Endpoints for worker time off management. See time off requests, which workers are assigned to which policies, or worker remaining balances.

### List Time Off Assignments

Time off assignments are mappings between workers and time off policies. Useful for finding out which policies a worker is assigned to, or which workers are assigned to a given policy.

| Direction | Type |
| --- | --- |
| Request | [`TimeOffListAssignmentsParams`](./src/resources/time-off/time-off.ts) |
| Response | [`TimeOffListAssignmentsResponse`](./src/resources/time-off/time-off.ts) |

```ts
const timeOff = await client.timeOff.listAssignments({
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
const timeOff = await client.timeOff.listBalances({
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
const timeOff = await client.timeOff.listRequests({
  limit: 'limit',
});
```

### `TimeOff Policies`

Endpoints for worker time off management. See time off requests, which workers are assigned to which policies, or worker remaining balances.

#### List Time Off Policies

Get the time off policies for your company

| Direction | Type |
| --- | --- |
| Request | [`PolicyListParams`](./src/resources/time-off/policies.ts) |
| Response | [`PolicyListResponse`](./src/resources/time-off/policies.ts) |

```ts
const policy = await client.timeOff.policies.list({
  limit: 'limit',
});
```

#### Get Time Off Policy

Get a specific time off policy by id

| Direction | Type |
| --- | --- |
| Response | [`PolicyGetResponse`](./src/resources/time-off/policies.ts) |

```ts
const policy = await client.timeOff.policies.get('top_1234');
```

## `Workers`

Endpoints for worker management. "Workers" include anyone employed by your company, whether US or international, full-time employees or contractors.

### List Workers

List all workers. Workers include anyone employed by the company, whether US or international, full-time employees or contractors.

| Direction | Type |
| --- | --- |
| Request | [`WorkerListParams`](./src/resources/workers.ts) |
| Response | [`WorkerListResponse`](./src/resources/workers.ts) |

```ts
const worker = await client.workers.list({
  limit: 'limit',
});
```

### Get Worker

Get a specific worker by id.

```ts
const objects11 = await client.workers.get('wrk_1234');
```

### Delete Worker

Delete a worker. Only workers who have not yet completed onboarding can be deleted. Active workers must be properly offboarded.

```ts
await client.workers.delete('wrk_1234');
```

### Create Employee

Create a new US employee. The worker will be created in draft status and must be invited separately via the invite endpoint. If hiring in a state without an existing tax registration, you must specify the stateRegistration field.

| Direction | Type |
| --- | --- |
| Request | [`WorkerCreateEmployeeParams`](./src/resources/workers.ts) |
| Response | [`WorkerCreateEmployeeResponse`](./src/resources/workers.ts) |

```ts
const worker = await client.workers.createEmployee({
  firstName: 'Jonathan',
  lastName: 'Galt',
  position: 'Software Engineer',
  startDate: '',
  email: 'john@joinwarp.com',
  departmentId: 'dpt_1234',
  managerId: 'wrk_1234',
  workLocation: {
    type: 'office',
    workplaceId: 'wkp_1234',
  },
  compensation: {
    amount: 0,
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
const worker = await client.workers.createContractor({
  entityType: 'individual',
  firstName: 'Melissa',
  lastName: 'Jones',
  position: 'Design Consultant',
  startDate: '',
  email: 'john@joinwarp.com',
  departmentId: 'dpt_1234',
  managerId: 'wrk_1234',
  workCountry: 'AD',
});
```

### Invite Worker

Send or resend the worker invite so they can accept and complete onboarding to Warp. If the worker has already been invited, the invite will be resent with extended validity.

| Direction | Type |
| --- | --- |
| Response | [`WorkerInviteResponse`](./src/resources/workers.ts) |

```ts
const worker = await client.workers.invite('wrk_1234');
```

## `Workplaces`

Endpoints for workplace management. Create, list, and update workplaces within your company.

### List Workplaces

List all workplaces for your company.

| Direction | Type |
| --- | --- |
| Request | [`WorkplaceListParams`](./src/resources/workplaces.ts) |
| Response | [`WorkplaceListResponse`](./src/resources/workplaces.ts) |

```ts
const workplace = await client.workplaces.list({
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
const workplace = await client.workplaces.create({
  name: 'x',
  type: 'remote',
  address: {
    line1: 'x',
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
const workplace = await client.workplaces.update('wkp_1234', {});
```

## `Payroll`

Read-only payrolls and worker-level payroll calculations. Paycheck endpoints use one consistent resource for every worker type; payment execution is outside this API.

### List Paychecks

List per-worker paycheck summaries newest first with stable cursor ordering. By default, the response includes every worker type visible to the API key, including US W-2 employees, US 1099 contractors, and global contractors; use workerTypes to narrow the results. Payroll type visibility follows the API key permissions. All lifecycle statuses are included unless statuses are provided.

| Direction | Type |
| --- | --- |
| Request | [`PayrollListPaychecksParams`](./src/resources/payroll.ts) |
| Response | [`PayrollListPaychecksResponse`](./src/resources/payroll.ts) |

```ts
const payroll = await client.payroll.listPaychecks({
  limit: 'limit',
});
```

### Get Paycheck

Get a paycheck by id. All worker types use the same paycheck schema. Categories that do not apply to a worker are represented by zero-valued totals and empty line-item arrays. For example, a US 1099 contractor with no applicable payroll taxes returns zero `workerTaxes` and `employerTaxes` totals and an empty `taxes` array. Missing, foreign, unauthorized, or unavailable paychecks return 404.

| Direction | Type |
| --- | --- |
| Response | [`PayrollGetPaycheckResponse`](./src/resources/payroll.ts) |

```ts
const payroll = await client.payroll.getPaycheck('pyc_1234');
```

### List Payrolls

List payroll summaries newest first with stable cursor ordering. Every amount in totals is expressed in fundingCurrency, the currency the employer uses to fund the payroll. Line-derived categories are converted and rounded per paycheck before aggregation, while netPay remains provider-authoritative. Payroll type visibility follows the API key permissions. All lifecycle statuses are included unless statuses are provided.

| Direction | Type |
| --- | --- |
| Request | [`PayrollListParams`](./src/resources/payroll.ts) |
| Response | [`PayrollListResponse`](./src/resources/payroll.ts) |

```ts
const payroll = await client.payroll.list({
  limit: 'limit',
});
```

### Get Payroll

Get a payroll by id. Every amount in totals is expressed in fundingCurrency, the currency the employer uses to fund the payroll. Line-derived categories are converted and rounded per paycheck before aggregation, while netPay remains provider-authoritative. Missing, foreign, unauthorized, or unavailable payrolls return 404.

| Direction | Type |
| --- | --- |
| Response | [`PayrollGetResponse`](./src/resources/payroll.ts) |

```ts
const payroll = await client.payroll.get('pay_1234');
```
