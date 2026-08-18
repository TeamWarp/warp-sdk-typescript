# Changelog

## [0.20.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.19.0...v0.20.0) (2026-08-18)


### ⚠ BREAKING CHANGES

* **api:** 8 breaking changes to the SDK surface.
    - Removed operation `payRates.list` (`GET /v1/pay_rates`).
    - Removed operation `payRates.retrieve` (`GET /v1/pay_rates/{id}`).
    - Removed operation `timeOff.policies.list` (`GET /v1/time_off/policies`).
    - Removed operation `timeOff.policies.get` (`GET /v1/time_off/policies/{id}`).
    - Removed schema `public_pay_rate_type`.
    - Removed schema `public_pay_rate_basis`.
    - Removed schema `public_pay_rate`.
    - Removed schema `pay_rate_not_found_error_encoded`.
* **api:** 7 breaking changes to the SDK surface.
    - Removed operation `timeOff.policies.timeOffGet` (`GET /v1/time_off/policies`).
    - Removed operation `timeOff.policies.timeOffGet2` (`GET /v1/time_off/policies/{id}`).
    - Schema `union_32` shape changed.
    - Added required property `objects_10.compensation`.
    - Schema `union_33` changed from `enum(remote | office)` to `string | null`.
    - Schema `union_34` shape changed.
    - Property `workplace_already_exists_encoded.id` type changed from `union_32` to `union_33`.
* **api:** 3 breaking changes to the SDK surface.
    - Property `objects_6.email` type changed from `string` to `string<email>`.
    - Schema `union_28` shape changed.
    - Property `objects_10.email` type changed from `string` to `string<email>`.
* **api:** 214 breaking changes to the SDK surface.
    - query param `limit` on `benefits.healthPlans.list` is now required.
    - query param `statuses` on `benefits.healthPlans.list` is now required.
    - Serialization or defaults of query param `statuses` on `benefits.healthPlans.list` changed.
    - `401` error response of `benefits.healthPlans.list` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `benefits.healthPlans.list` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `benefits.healthPlans.get` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `benefits.healthPlans.get` changed from `health_plan_not_found_error` to `health_plan_not_found_error_encoded`.
    - `429` error response of `benefits.healthPlans.get` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `benefits.retirementPlans.list` is now required.
    - query param `statuses` on `benefits.retirementPlans.list` is now required.
    - Serialization or defaults of query param `statuses` on `benefits.retirementPlans.list` changed.
    - `401` error response of `benefits.retirementPlans.list` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `benefits.retirementPlans.list` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `benefits.retirementPlans.get` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `benefits.retirementPlans.get` changed from `retirement_plan_not_found_error` to `retirement_plan_not_found_error_encoded`.
    - `429` error response of `benefits.retirementPlans.get` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `benefits.deductions.list` is now required.
    - query param `statuses` on `benefits.deductions.list` is now required.
    - Serialization or defaults of query param `statuses` on `benefits.deductions.list` changed.
    - `401` error response of `benefits.deductions.list` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `benefits.deductions.list` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `benefits.deductions.get` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `benefits.deductions.get` changed from `benefit_deduction_not_found_error` to `benefit_deduction_not_found_error_encoded`.
    - `429` error response of `benefits.deductions.get` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `customFields.list` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `customFields.list` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `400` error response of `customFields.create` changed from `application/json` to `invalid_custom_field_operation_error_encoded`.
    - `401` error response of `customFields.create` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `customFields.create` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `customFields.retrieve` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `customFields.retrieve` changed from `custom_field_not_found_error` to `custom_field_not_found_error_encoded`.
    - `429` error response of `customFields.retrieve` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `customFields.update` changed from `none` to `objects`.
    - `400` error response of `customFields.update` changed from `application/json` to `invalid_custom_field_operation_error_encoded`.
    - `401` error response of `customFields.update` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `customFields.update` changed from `custom_field_not_found_error` to `custom_field_not_found_error_encoded`.
    - `409` error response of `customFields.update` changed from `custom_field_already_exists_error` to `custom_field_already_exists_error_encoded`.
    - `429` error response of `customFields.update` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `customFields.archive` changed from `none` to `objects`.
    - `401` error response of `customFields.archive` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `customFields.archive` changed from `custom_field_not_found_error` to `custom_field_not_found_error_encoded`.
    - `429` error response of `customFields.archive` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `400` error response of `customFields.createOption` changed from `application/json` to `invalid_custom_field_operation_error_encoded`.
    - `401` error response of `customFields.createOption` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `customFields.createOption` changed from `custom_field_not_found_error` to `custom_field_not_found_error_encoded`.
    - `409` error response of `customFields.createOption` changed from `custom_field_option_already_exists_error` to `custom_field_option_already_exists_error_encoded`.
    - `429` error response of `customFields.createOption` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `customFields.updateOption` changed from `none` to `objects_3`.
    - `400` error response of `customFields.updateOption` changed from `application/json` to `invalid_custom_field_operation_error_encoded`.
    - `401` error response of `customFields.updateOption` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `customFields.updateOption` changed from `custom_field_option_not_found_error` to `custom_field_option_not_found_error_encoded`.
    - `409` error response of `customFields.updateOption` changed from `custom_field_option_already_exists_error` to `custom_field_option_already_exists_error_encoded`.
    - `429` error response of `customFields.updateOption` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `customFields.deleteOption` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `customFields.deleteOption` changed from `custom_field_option_not_found_error` to `custom_field_option_not_found_error_encoded`.
    - `409` error response of `customFields.deleteOption` changed from `custom_field_option_in_use_error` to `custom_field_option_in_use_error_encoded`.
    - `429` error response of `customFields.deleteOption` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `customFields.archiveOption` changed from `none` to `objects_3`.
    - `401` error response of `customFields.archiveOption` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `customFields.archiveOption` changed from `custom_field_option_not_found_error` to `custom_field_option_not_found_error_encoded`.
    - `429` error response of `customFields.archiveOption` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `customFields.listValues` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `customFields.listValues` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `customFields.upsertValue` changed from `none` to `objects_4`.
    - `401` error response of `customFields.upsertValue` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `customFields.upsertValue` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `customFields.clearValue` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `customFields.clearValue` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `departments.list` is now required.
    - `401` error response of `departments.list` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `departments.list` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `departments.create` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `409` error response of `departments.create` changed from `department_already_exists` to `department_already_exists_encoded`.
    - `429` error response of `departments.create` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `departments.update` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `departments.update` changed from `department_not_found` to `department_not_found_encoded`.
    - `409` error response of `departments.update` changed from `department_already_exists` to `department_already_exists_encoded`.
    - `429` error response of `departments.update` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `offers.list` is now required.
    - `401` error response of `offers.list` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `offers.list` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `offers.create` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `422` error response of `offers.create` changed from `invalid_expiration_time_error` to `invalid_expiration_time_error_encoded`.
    - `429` error response of `offers.create` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `offers.void` changed from `none` to `objects_5`.
    - `401` error response of `offers.void` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `offers.void` changed from `offer_not_found_error` to `offer_not_found_error_encoded`.
    - `409` error response of `offers.void` changed from `invalid_offer_status_error` to `invalid_offer_status_error_encoded`.
    - `429` error response of `offers.void` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `offers.extendDeadline` changed from `none` to `objects_5`.
    - `401` error response of `offers.extendDeadline` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `offers.extendDeadline` changed from `offer_not_found_error` to `offer_not_found_error_encoded`.
    - `409` error response of `offers.extendDeadline` changed from `invalid_offer_status_error` to `invalid_offer_status_error_encoded`.
    - `422` error response of `offers.extendDeadline` changed from `invalid_expiration_time_error` to `invalid_expiration_time_error_encoded`.
    - `429` error response of `offers.extendDeadline` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `offers.resend` changed from `none` to `objects_5`.
    - `401` error response of `offers.resend` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `offers.resend` changed from `offer_not_found_error` to `offer_not_found_error_encoded`.
    - `409` error response of `offers.resend` changed from `invalid_offer_status_error` to `invalid_offer_status_error_encoded`.
    - `429` error response of `offers.resend` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `timeOff.listAssignments` is now required.
    - `401` error response of `timeOff.listAssignments` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `timeOff.listAssignments` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `timeOff.listBalances` is now required.
    - `401` error response of `timeOff.listBalances` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `timeOff.listBalances` changed from `time_off_policy_not_found` to `time_off_policy_not_found_encoded`.
    - `429` error response of `timeOff.listBalances` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `timeOff.listRequests` is now required.
    - `401` error response of `timeOff.listRequests` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `timeOff.listRequests` changed from `time_off_request_not_found_error` to `time_off_request_not_found_error_encoded`.
    - `429` error response of `timeOff.listRequests` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `timeOff.policies.timeOffGet` is now required.
    - `401` error response of `timeOff.policies.timeOffGet` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `timeOff.policies.timeOffGet` changed from `time_off_policy_not_found` to `time_off_policy_not_found_encoded`.
    - `429` error response of `timeOff.policies.timeOffGet` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `timeOff.policies.timeOffGet2` changed from `none` to `objects_9`.
    - `401` error response of `timeOff.policies.timeOffGet2` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `timeOff.policies.timeOffGet2` changed from `time_off_policy_not_found` to `time_off_policy_not_found_encoded`.
    - `429` error response of `timeOff.policies.timeOffGet2` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `workers.list` is now required.
    - `401` error response of `workers.list` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `workers.list` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `workers.retrieve` changed from `none` to `objects_10`.
    - `401` error response of `workers.retrieve` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `workers.retrieve` changed from `worker_not_found_error` to `worker_not_found_error_encoded`.
    - `429` error response of `workers.retrieve` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `workers.delete` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `workers.delete` changed from `worker_not_found_error` to `worker_not_found_error_encoded`.
    - `409` error response of `workers.delete` changed from `cannot_delete_worker` to `cannot_delete_worker_encoded`.
    - `429` error response of `workers.delete` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `400` error response of `workers.createEmployee` changed from `application/json` to `state_registration_required_encoded`.
    - `401` error response of `workers.createEmployee` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `workers.createEmployee` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `workers.createContractor` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `workers.createContractor` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `workers.invite` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `workers.invite` changed from `worker_not_found_error` to `worker_not_found_error_encoded`.
    - `429` error response of `workers.invite` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `workplaces.list` is now required.
    - `401` error response of `workplaces.list` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `workplaces.list` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `400` error response of `workplaces.create` changed from `application/json` to `address_invalid_encoded`.
    - `401` error response of `workplaces.create` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `409` error response of `workplaces.create` changed from `workplace_already_exists` to `workplace_already_exists_encoded`.
    - `429` error response of `workplaces.create` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `workplaces.update` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `workplaces.update` changed from `workplace_not_found` to `workplace_not_found_encoded`.
    - `409` error response of `workplaces.update` changed from `workplace_already_exists` to `workplace_already_exists_encoded`.
    - `429` error response of `workplaces.update` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Property `public_money_amount.amount` type changed from `integer` to `string`.
    - Property `public_money_amount.currency` type changed from `enum(USD | AUD | BGN | …)` to `union`.
    - Property `public_health_plan_carrier.id` type changed from `string` to `string`.
    - Property `public_health_plan.id` type changed from `string` to `string`.
    - Property `public_health_plan.effectiveStartDate` type changed from `string` to `string`.
    - Property `public_health_plan.effectiveEndDate` type changed from `string | null` to `string | null`.
    - Property `public_health_plan.createdAt` type changed from `date` to `string`.
    - Property `public_health_plan.updatedAt` type changed from `date` to `string`.
    - Property `public_retirement_plan.id` type changed from `string` to `string`.
    - Property `public_retirement_plan.effectiveStartDate` type changed from `string` to `string`.
    - Property `public_retirement_plan.effectiveEndDate` type changed from `string | null` to `string | null`.
    - Property `public_retirement_plan.createdAt` type changed from `date` to `string`.
    - Property `public_retirement_plan.updatedAt` type changed from `date` to `string`.
    - Property `public_worker_reference.id` type changed from `string` to `string`.
    - Property `health_plan_reference.id` type changed from `string` to `string`.
    - Property `retirement_plan_reference.id` type changed from `string` to `string`.
    - Property `percentage_contribution.percentage` type changed from `number` to `string | union_1`.
    - Property `public_benefit_deduction.id` type changed from `string` to `string`.
    - Property `public_benefit_deduction.effectiveStartDate` type changed from `string` to `string`.
    - Property `public_benefit_deduction.effectiveEndDate` type changed from `string | null` to `string | null`.
    - Property `public_benefit_deduction.createdAt` type changed from `date_from_string` to `string`.
    - Property `public_benefit_deduction.updatedAt` type changed from `date_from_string` to `string`.
    - Property `office_work_location.workplaceId` type changed from `string` to `string`.
    - Removed schema `date`.
    - Removed schema `http_api_decode_error`.
    - Removed schema `issue`.
    - Removed schema `property_key`.
    - Removed schema `internal_server_error`.
    - Removed schema `api_key_unauthorized`.
    - Removed schema `rate_limit_exceeded`.
    - Removed schema `date_time_utc`.
    - Removed schema `missing_required_company_permissions`.
    - Removed schema `api_not_enabled`.
    - Removed schema `health_plan_not_found_error`.
    - Removed schema `retirement_plan_not_found_error`.
    - Removed schema `date_from_string`.
    - Removed schema `benefit_deduction_not_found_error`.
    - Removed schema `trimmed`.
    - Removed schema `non_empty_trimmed_string`.
    - Removed schema `invalid_custom_field_operation_error`.
    - Removed schema `custom_field_already_exists_error`.
    - Removed schema `custom_field_option_already_exists_error`.
    - Removed schema `custom_field_not_found_error`.
    - Removed schema `custom_field_option_not_found_error`.
    - Removed schema `custom_field_option_in_use_error`.
    - Removed schema `invalid_custom_field_value_error`.
    - Removed schema `custom_field_worker_not_found_error`.
    - Removed schema `department_already_exists`.
    - Removed schema `department_not_found`.
    - Removed schema `invalid_expiration_time_error`.
    - Removed schema `workplace_not_found`.
    - Removed schema `manager_not_found_error`.
    - Removed schema `offer_not_found_error`.
    - Removed schema `invalid_offer_status_error`.
    - Removed schema `time_off_policy_not_found`.
    - Removed schema `time_off_request_not_found_error`.
    - Removed schema `worker_not_found_error`.
    - Removed schema `state_registration_required`.
    - Removed schema `pay_schedule_not_configured`.
    - Removed schema `subscription_limit_error`.
    - Removed schema `invalid_worker_status_error`.
    - Removed schema `worker_already_exists_error`.
    - Removed schema `cannot_delete_worker`.
    - Removed schema `address_invalid`.
    - Removed schema `workplace_already_exists`.

### Features

* **api:** remove operation payRates.list (+9 more changes) ([0d8482e](https://github.com/TeamWarp/warp-sdk-typescript/commit/0d8482e7748e3fa00b393a4c88c1484ae76245ed))
* **api:** update property objects_6.email (+2 more changes) ([73e502f](https://github.com/TeamWarp/warp-sdk-typescript/commit/73e502f5361eef7cf20b4a6209f4bd1b486dfc22))
* **api:** update SDK surface (18 changes) ([98642df](https://github.com/TeamWarp/warp-sdk-typescript/commit/98642df617867fec61e3a4cbb6d8ed024cde6dab))
* **api:** update SDK surface (329 changes) ([53cb8a7](https://github.com/TeamWarp/warp-sdk-typescript/commit/53cb8a7a499046a16810558e058d21ec83926ffc))


### Chores

* **api:** regenerate SDK ([834e878](https://github.com/TeamWarp/warp-sdk-typescript/commit/834e87874b89b6868c2762954f43e66dc08fed55))

## [0.19.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.18.0...v0.19.0) (2026-08-07)


### ⚠ BREAKING CHANGES

* **api:** 6 breaking changes to the SDK surface.
    - Removed operation `benefits.healthPlans.benefitsList` (`GET /v1/benefits/health_plans`).
    - Removed operation `benefits.healthPlans.benefitsGet` (`GET /v1/benefits/health_plans/{id}`).
    - Removed operation `benefits.retirementPlans.benefitsList` (`GET /v1/benefits/retirement_plans`).
    - Removed operation `benefits.retirementPlans.benefitsGet` (`GET /v1/benefits/retirement_plans/{id}`).
    - Removed operation `benefits.deductions.benefitsList` (`GET /v1/benefits/deductions`).
    - Removed operation `benefits.deductions.benefitsGet` (`GET /v1/benefits/deductions/{id}`).

### Features

* **api:** update SDK surface (14 changes) ([97b8a7d](https://github.com/TeamWarp/warp-sdk-typescript/commit/97b8a7d9ca6f4a45b7a8507a24ca5a511e570608))

## [0.18.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.17.0...v0.18.0) (2026-08-05)


### ⚠ BREAKING CHANGES

* **api:** Renamed SDK from `WarpApi` to `Warp`.
* **api:** 20 breaking changes to the SDK surface.
    - Removed operation `customWorkerFields.list` (`GET /v1/custom-worker-fields`).
    - Removed operation `customWorkerFields.create` (`POST /v1/custom-worker-fields`).
    - Removed operation `customWorkerFields.retrieve` (`GET /v1/custom-worker-fields/{id}`).
    - Removed operation `customWorkerFields.update` (`PATCH /v1/custom-worker-fields/{id}`).
    - Removed operation `customWorkerFields.archive` (`POST /v1/custom-worker-fields/{id}/archive`).
    - Removed operation `customWorkerFields.createOption` (`POST /v1/custom-worker-fields/{id}/options`).
    - Removed operation `customWorkerFields.updateOption` (`PATCH /v1/custom-worker-field-options/{id}`).
    - Removed operation `customWorkerFields.deleteOption` (`DELETE /v1/custom-worker-field-options/{id}`).
    - Removed operation `customWorkerFields.archiveOption` (`POST /v1/custom-worker-field-options/{id}/archive`).
    - Removed operation `customWorkerFields.listValues` (`GET /v1/worker-custom-field-values`).
    - Removed operation `customWorkerFields.upsertValue` (`PUT /v1/worker-custom-field-values`).
    - Removed operation `customWorkerFields.clearValue` (`DELETE /v1/worker-custom-field-values`).
    - Removed schema `invalid_custom_worker_field_operation`.
    - Removed schema `custom_worker_field_already_exists`.
    - Removed schema `custom_worker_field_option_already_exists`.
    - Removed schema `custom_worker_field_not_found`.
    - Removed schema `custom_worker_field_option_not_found`.
    - Removed schema `custom_worker_field_option_in_use`.
    - Removed schema `invalid_custom_worker_field_value`.
    - Removed schema `custom_worker_field_worker_not_found`.

### Features

* **api:** add operation customFields.list (+20 more changes) ([4e640a8](https://github.com/TeamWarp/warp-sdk-typescript/commit/4e640a8b94de3c3a098868a1dffe691d6b1ba98d))
* **api:** add schema public_money_amount (+1 more change) ([a4d2383](https://github.com/TeamWarp/warp-sdk-typescript/commit/a4d238305d14b17b9b239a8393a4138a4931c14f))
* **api:** remove operation customWorkerFields.list (+19 more changes) ([33ba285](https://github.com/TeamWarp/warp-sdk-typescript/commit/33ba285601f4a24ea49712d2dabdc8021707f942))
* **api:** update SDK name (+27 more changes) ([6dc40aa](https://github.com/TeamWarp/warp-sdk-typescript/commit/6dc40aa24fcbbb294daa1077a65b8b3e52854db3))


### Chores

* **api:** regenerate SDK ([40c9f18](https://github.com/TeamWarp/warp-sdk-typescript/commit/40c9f18ddb53ca7d58a885d0b7d4fc318c169657))

## [0.17.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.15.0...v0.17.0) (2026-07-30)


### Features

* **api:** initial SDK generation ([9bfb894](https://github.com/TeamWarp/warp-sdk-typescript/commit/9bfb894e6ed3d5eac532280bdc046b74af25cb53))


### Chores

* **api:** regenerate SDK ([6e751c6](https://github.com/TeamWarp/warp-sdk-typescript/commit/6e751c6ba8a9d1722af6ef6ff53cb138334c25c8))
* **api:** update generated SDK content ([9d7fd5d](https://github.com/TeamWarp/warp-sdk-typescript/commit/9d7fd5d778cfdcb4ae5a42860a18f1b4067e7747))
* **api:** update generated SDK content ([2027aa2](https://github.com/TeamWarp/warp-sdk-typescript/commit/2027aa2d992ecd830a0bad2c1052e0fbf39ddd5c))
* **api:** update generated SDK content ([807a58e](https://github.com/TeamWarp/warp-sdk-typescript/commit/807a58e492807486106b38541248544f0e95816a))
* release 0.17.0 ([8d786e2](https://github.com/TeamWarp/warp-sdk-typescript/commit/8d786e2f390c6e3da93321b09c914ad103ba8e3b))

## 0.15.0 (2026-03-27)

Full Changelog: [v0.14.0...v0.15.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.14.0...v0.15.0)

### Features

* **api:** update import names to warp ([0516548](https://github.com/TeamWarp/warp-sdk-typescript/commit/05165483de55dde02a71aa8a1c050279696ba2c4))

## 0.14.0 (2026-03-27)

Full Changelog: [v0.13.0...v0.14.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.13.0...v0.14.0)

### Features

* **api:** update contact email ([fdf3472](https://github.com/TeamWarp/warp-sdk-typescript/commit/fdf347290de23b31338961be2e9307e3dd3989e6))

## 0.13.0 (2026-03-27)

Full Changelog: [v0.12.2...v0.13.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.12.2...v0.13.0)

### Features

* **api:** api update ([3571657](https://github.com/TeamWarp/warp-sdk-typescript/commit/3571657ca4f42118fd0cffb7e6a9a9747254d817))

## 0.12.2 (2026-03-27)

Full Changelog: [v0.12.1...v0.12.2](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.12.1...v0.12.2)

### Chores

* configure new SDK language ([4960173](https://github.com/TeamWarp/warp-sdk-typescript/commit/4960173908a0897976b4cd1af0cbb0fef07f910e))

## 0.12.1 (2026-03-25)

Full Changelog: [v0.12.0...v0.12.1](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.12.0...v0.12.1)

### Chores

* **ci:** skip lint on metadata-only changes ([7ea1ebb](https://github.com/TeamWarp/warp-sdk-typescript/commit/7ea1ebbcb6054f3c3933d40ba31c428f8f740731))
* **internal:** update gitignore ([3c732da](https://github.com/TeamWarp/warp-sdk-typescript/commit/3c732dafffa225fdbfe512136af35506fef71059))

## 0.12.0 (2026-03-23)

Full Changelog: [v0.11.0...v0.12.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.11.0...v0.12.0)

### Features

* **api:** api update ([154e6e0](https://github.com/TeamWarp/warp-sdk-typescript/commit/154e6e0a2d02c699ec7a20543e0075a481ed49be))

## 0.11.0 (2026-03-19)

Full Changelog: [v0.10.0...v0.11.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.10.0...v0.11.0)

### Features

* **api:** api update ([611d59d](https://github.com/TeamWarp/warp-sdk-typescript/commit/611d59d14fc9e7bdb1ad14b21b799c942e08c5d1))
* **api:** worker invite endpoints ([47841b2](https://github.com/TeamWarp/warp-sdk-typescript/commit/47841b2efbd1c65723aed00407537091203f7712))


### Chores

* **internal:** tweak CI branches ([d6c7a54](https://github.com/TeamWarp/warp-sdk-typescript/commit/d6c7a54643e740421b41365b944c5a29272826ea))

## 0.10.0 (2026-03-13)

Full Changelog: [v0.9.0...v0.10.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.9.0...v0.10.0)

### Features

* **api:** api update ([0789362](https://github.com/TeamWarp/warp-sdk-typescript/commit/078936253cfe0ba950cf71b9480ffc61aa644f78))
* **api:** workplaces api ([bd204c2](https://github.com/TeamWarp/warp-sdk-typescript/commit/bd204c29f6af128fa333fdf7295143a7f309ca7e))


### Chores

* **internal:** update dependencies to address dependabot vulnerabilities ([200d12e](https://github.com/TeamWarp/warp-sdk-typescript/commit/200d12e6a0f6593475576b88ff1bede12660dd51))

## 0.9.0 (2026-03-09)

Full Changelog: [v0.8.0...v0.9.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.8.0...v0.9.0)

### Features

* **api:** add departments ([59ab2f8](https://github.com/TeamWarp/warp-sdk-typescript/commit/59ab2f87d5173f2f5564c35d06fc2c9b96568510))

## 0.8.0 (2026-03-09)

Full Changelog: [v0.7.0...v0.8.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.7.0...v0.8.0)

### Features

* **api:** api update ([4fd9214](https://github.com/TeamWarp/warp-sdk-typescript/commit/4fd921447c9a244f7ff29a3b0c5ef1b5e9057943))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([0a20277](https://github.com/TeamWarp/warp-sdk-typescript/commit/0a2027791f3ea781c94410ece36aa43970166032))
* **client:** avoid removing abort listener too early ([6334b05](https://github.com/TeamWarp/warp-sdk-typescript/commit/6334b058dc22ad755927ad17c8f9453215787fb8))
* **client:** preserve URL params already embedded in path ([dbeef70](https://github.com/TeamWarp/warp-sdk-typescript/commit/dbeef7072a9991875cce70f08c19602a3476c52c))
* **docs/contributing:** correct pnpm link command ([ba2125e](https://github.com/TeamWarp/warp-sdk-typescript/commit/ba2125e0c1949983495dec1a357ee70154a1b9b2))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([1a21033](https://github.com/TeamWarp/warp-sdk-typescript/commit/1a21033b3b89bb2bae665f1955495f827eafe5e1))
* **ci:** upgrade `actions/github-script` ([f8bb3d6](https://github.com/TeamWarp/warp-sdk-typescript/commit/f8bb3d602a19a79c1216da53affbd4df23c86a17))
* **client:** do not parse responses with empty content-length ([6d95c4f](https://github.com/TeamWarp/warp-sdk-typescript/commit/6d95c4f77551754af115784737d2c589418d4731))
* **client:** restructure abort controller binding ([509a391](https://github.com/TeamWarp/warp-sdk-typescript/commit/509a391ae56e78fe6a7f6526efe8a791e7c2dd10))
* **internal/client:** fix form-urlencoded requests ([3f8035c](https://github.com/TeamWarp/warp-sdk-typescript/commit/3f8035cc0ffd99625e7426fd40c373d824e06747))
* **internal:** avoid type checking errors with ts-reset ([8721da6](https://github.com/TeamWarp/warp-sdk-typescript/commit/8721da6794454aaad9d71636c87a61568dab1e3c))
* **internal:** codegen related update ([2d54d63](https://github.com/TeamWarp/warp-sdk-typescript/commit/2d54d631896105a77d3ad892825de04ea524a315))
* **internal:** codegen related update ([ad0e598](https://github.com/TeamWarp/warp-sdk-typescript/commit/ad0e59898a040d99d27034227ace52850d4aeb61))
* **internal:** fix pagination internals not accepting option promises ([9b48950](https://github.com/TeamWarp/warp-sdk-typescript/commit/9b4895093468ea7c404d9d22ff6d87f12a7eba69))
* **internal:** move stringifyQuery implementation to internal function ([c83ef1d](https://github.com/TeamWarp/warp-sdk-typescript/commit/c83ef1d51da255652f6b3e5437159d441026f8df))
* **internal:** remove mock server code ([91018fa](https://github.com/TeamWarp/warp-sdk-typescript/commit/91018faca5e333f549815977fc9094facea756a9))
* **internal:** update `actions/checkout` version ([5bc4791](https://github.com/TeamWarp/warp-sdk-typescript/commit/5bc4791eee1af12a367d7389ac6de00844533a00))
* **internal:** update lock file ([51232f5](https://github.com/TeamWarp/warp-sdk-typescript/commit/51232f5858352f99b211ecc6ebe4ac52b8f1bdf0))
* **internal:** upgrade babel, qs, js-yaml ([d3679bf](https://github.com/TeamWarp/warp-sdk-typescript/commit/d3679bfd7a2a42d604d1226a3d005a6cde6f417f))
* **internal:** upgrade brace-expansion and @babel/helpers ([e0a6c06](https://github.com/TeamWarp/warp-sdk-typescript/commit/e0a6c06ea13d7e45991831f641f5adc76ab9e4ba))
* **internal:** upgrade pnpm ([3844311](https://github.com/TeamWarp/warp-sdk-typescript/commit/38443118947be431b8c1aab5987f04a019a37d66))
* **internal:** upgrade pnpm version ([9317175](https://github.com/TeamWarp/warp-sdk-typescript/commit/9317175831dc7419fb662062135cb4a7b212d9de))
* update mock server docs ([64c5bcd](https://github.com/TeamWarp/warp-sdk-typescript/commit/64c5bcd7052d0afb0721fca3a52f263944d3eef5))

## 0.7.0 (2026-01-09)

Full Changelog: [v0.6.0...v0.7.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.6.0...v0.7.0)

### Features

* **api:** api update ([a7141ab](https://github.com/TeamWarp/warp-sdk-typescript/commit/a7141ab4a82e94f0c80f8ed42b58eac3b8d47a1a))


### Chores

* break long lines in snippets into multiline ([1c73c3d](https://github.com/TeamWarp/warp-sdk-typescript/commit/1c73c3d81f172c98a3a8f3878a3ad1348d606db6))

## 0.6.0 (2026-01-06)

Full Changelog: [v0.5.0...v0.6.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.5.0...v0.6.0)

### Features

* **api:** api update ([95bb8af](https://github.com/TeamWarp/warp-sdk-typescript/commit/95bb8afac6cddeed767934feaa42eee3ddbf74f8))


### Bug Fixes

* **api:** query settings array format repeat ([b171d95](https://github.com/TeamWarp/warp-sdk-typescript/commit/b171d9587efa085b1065b9e33498dc41dd15c4be))

## 0.5.0 (2026-01-05)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.4.0...v0.5.0)

### Features

* **api:** api update ([2d1d6af](https://github.com/TeamWarp/warp-sdk-typescript/commit/2d1d6afd181b9027ea4859609918dcc32b5cbf59))
* **api:** api update ([70f9d02](https://github.com/TeamWarp/warp-sdk-typescript/commit/70f9d027779b65cbcb0b5d3da304ca6675dc7108))

## 0.4.0 (2025-12-26)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.3.0...v0.4.0)

### Features

* **api:** api update ([ea9020e](https://github.com/TeamWarp/warp-sdk-typescript/commit/ea9020ede4440daf459c8e7f3073b483201dce96))
* **api:** manual updates ([775b5f0](https://github.com/TeamWarp/warp-sdk-typescript/commit/775b5f0cc7545ce3770e201bd9c1f45e53123ff4))

## 0.3.0 (2025-12-26)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.2.0...v0.3.0)

### Features

* **api:** api update ([b631ad9](https://github.com/TeamWarp/warp-sdk-typescript/commit/b631ad9d2e27c422838a8ebebca4c43a73b5517a))
* **api:** pagination configuration ([deb6f49](https://github.com/TeamWarp/warp-sdk-typescript/commit/deb6f49681b2b3c1c417e6866ad03f8ce2878fe8))

## 0.2.0 (2025-12-26)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.1.0...v0.2.0)

### Features

* **api:** api update ([eeaadd0](https://github.com/TeamWarp/warp-sdk-typescript/commit/eeaadd0320da4b747cb7db785ba274b79c2e2873))

## 0.1.0 (2025-12-24)

Full Changelog: [v0.0.2...v0.1.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.0.2...v0.1.0)

### Features

* **api:** api update ([bc90d84](https://github.com/TeamWarp/warp-sdk-typescript/commit/bc90d84aa48470eb689eeb6cc61dc290dca17a4c))

## 0.0.2 (2025-12-24)

Full Changelog: [v0.0.1...v0.0.2](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.0.1...v0.0.2)

### Chores

* update SDK settings ([8fa3b78](https://github.com/TeamWarp/warp-sdk-typescript/commit/8fa3b7824caef5ac0970c820acf2c7fe0c2845b4))
* update SDK settings ([b3d641e](https://github.com/TeamWarp/warp-sdk-typescript/commit/b3d641e8fa826a14a68b20704845a9f51149b6d0))
