# Changelog

## [0.2.0-next.3](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.2.0-next.2...v0.2.0-next.3) (2026-07-29)


### Chores

* **api:** regenerate SDK ([71ea20a](https://github.com/TeamWarp/warp-sdk-typescript/commit/71ea20a0f9bcde2b85a3507d3b355facd5cbf1c7))

## [0.2.0-next.2](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.2.0-next.1...v0.2.0-next.2) (2026-07-24)


### Chores

* **api:** update generated SDK content ([245dac5](https://github.com/TeamWarp/warp-sdk-typescript/commit/245dac5755923d85e5430315f60d3adeaf856a49))

## [0.2.0-next.1](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.2.0-next...v0.2.0-next.1) (2026-07-24)


### ⚠ BREAKING CHANGES

* **api:** 168 breaking changes to the SDK surface.
    - `400` error response of `customWorkerFields.list` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `customWorkerFields.list` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `customWorkerFields.list` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `401` error response of `customWorkerFields.create` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `customWorkerFields.create` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `customWorkerFields.retrieve` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `customWorkerFields.retrieve` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `customWorkerFields.retrieve` changed from `CustomWorkerFieldNotFound` to `custom_worker_field_not_found`.
    - `429` error response of `customWorkerFields.retrieve` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `401` error response of `customWorkerFields.update` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `customWorkerFields.update` changed from `CustomWorkerFieldNotFound` to `custom_worker_field_not_found`.
    - `409` error response of `customWorkerFields.update` changed from `CustomWorkerFieldAlreadyExists` to `custom_worker_field_already_exists`.
    - `429` error response of `customWorkerFields.update` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `customWorkerFields.archive` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `customWorkerFields.archive` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `customWorkerFields.archive` changed from `CustomWorkerFieldNotFound` to `custom_worker_field_not_found`.
    - `429` error response of `customWorkerFields.archive` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `401` error response of `customWorkerFields.createOption` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `customWorkerFields.createOption` changed from `CustomWorkerFieldNotFound` to `custom_worker_field_not_found`.
    - `409` error response of `customWorkerFields.createOption` changed from `CustomWorkerFieldOptionAlreadyExists` to `custom_worker_field_option_already_exists`.
    - `429` error response of `customWorkerFields.createOption` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `401` error response of `customWorkerFields.updateOption` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `customWorkerFields.updateOption` changed from `CustomWorkerFieldOptionNotFound` to `custom_worker_field_option_not_found`.
    - `409` error response of `customWorkerFields.updateOption` changed from `CustomWorkerFieldOptionAlreadyExists` to `custom_worker_field_option_already_exists`.
    - `429` error response of `customWorkerFields.updateOption` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `customWorkerFields.deleteOption` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `customWorkerFields.deleteOption` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `customWorkerFields.deleteOption` changed from `CustomWorkerFieldOptionNotFound` to `custom_worker_field_option_not_found`.
    - `409` error response of `customWorkerFields.deleteOption` changed from `CustomWorkerFieldOptionInUse` to `custom_worker_field_option_in_use`.
    - `429` error response of `customWorkerFields.deleteOption` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `customWorkerFields.archiveOption` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `customWorkerFields.archiveOption` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `customWorkerFields.archiveOption` changed from `CustomWorkerFieldOptionNotFound` to `custom_worker_field_option_not_found`.
    - `429` error response of `customWorkerFields.archiveOption` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `customWorkerFields.listValues` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `customWorkerFields.listValues` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `customWorkerFields.listValues` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `401` error response of `customWorkerFields.upsertValue` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `customWorkerFields.upsertValue` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `customWorkerFields.clearValue` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `customWorkerFields.clearValue` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `customWorkerFields.clearValue` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `departments.list` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `departments.list` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `departments.list` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `departments.create` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `departments.create` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `409` error response of `departments.create` changed from `DepartmentAlreadyExists` to `department_already_exists`.
    - `429` error response of `departments.create` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `departments.update` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `departments.update` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `departments.update` changed from `DepartmentNotFound` to `department_not_found`.
    - `409` error response of `departments.update` changed from `DepartmentAlreadyExists` to `department_already_exists`.
    - `429` error response of `departments.update` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `offers.list` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `offers.list` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `offers.list` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `offers.create` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `offers.create` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `422` error response of `offers.create` changed from `InvalidExpirationTimeError` to `invalid_expiration_time_error`.
    - `429` error response of `offers.create` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `offers.void` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `offers.void` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `offers.void` changed from `OfferNotFoundError` to `offer_not_found_error`.
    - `409` error response of `offers.void` changed from `InvalidOfferStatusError` to `invalid_offer_status_error`.
    - `429` error response of `offers.void` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `offers.extendDeadline` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `offers.extendDeadline` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `offers.extendDeadline` changed from `OfferNotFoundError` to `offer_not_found_error`.
    - `409` error response of `offers.extendDeadline` changed from `InvalidOfferStatusError` to `invalid_offer_status_error`.
    - `422` error response of `offers.extendDeadline` changed from `InvalidExpirationTimeError` to `invalid_expiration_time_error`.
    - `429` error response of `offers.extendDeadline` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `offers.resend` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `offers.resend` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `offers.resend` changed from `OfferNotFoundError` to `offer_not_found_error`.
    - `409` error response of `offers.resend` changed from `InvalidOfferStatusError` to `invalid_offer_status_error`.
    - `429` error response of `offers.resend` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `timeOff.listAssignments` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `timeOff.listAssignments` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `timeOff.listAssignments` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `timeOff.listBalances` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `timeOff.listBalances` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `timeOff.listBalances` changed from `TimeOffPolicyNotFound` to `time_off_policy_not_found`.
    - `429` error response of `timeOff.listBalances` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `timeOff.listRequests` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `timeOff.listRequests` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `timeOff.listRequests` changed from `TimeOffRequestNotFoundError` to `time_off_request_not_found_error`.
    - `429` error response of `timeOff.listRequests` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `timeOff.policies.timeOffGet` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `timeOff.policies.timeOffGet` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `timeOff.policies.timeOffGet` changed from `TimeOffPolicyNotFound` to `time_off_policy_not_found`.
    - `429` error response of `timeOff.policies.timeOffGet` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `timeOff.policies.timeOffGet2` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `timeOff.policies.timeOffGet2` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `timeOff.policies.timeOffGet2` changed from `TimeOffPolicyNotFound` to `time_off_policy_not_found`.
    - `429` error response of `timeOff.policies.timeOffGet2` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `workers.list` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `workers.list` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `workers.list` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `workers.retrieve` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `workers.retrieve` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `workers.retrieve` changed from `WorkerNotFoundError` to `worker_not_found_error`.
    - `429` error response of `workers.retrieve` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `workers.delete` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `workers.delete` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `workers.delete` changed from `WorkerNotFoundError` to `worker_not_found_error`.
    - `409` error response of `workers.delete` changed from `CannotDeleteWorker` to `cannot_delete_worker`.
    - `429` error response of `workers.delete` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `401` error response of `workers.createEmployee` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `workers.createEmployee` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `workers.createContractor` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `workers.createContractor` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `workers.createContractor` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `workers.invite` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `workers.invite` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `workers.invite` changed from `WorkerNotFoundError` to `worker_not_found_error`.
    - `429` error response of `workers.invite` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `workplaces.list` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `workplaces.list` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `workplaces.list` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `401` error response of `workplaces.create` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `409` error response of `workplaces.create` changed from `WorkplaceAlreadyExists` to `workplace_already_exists`.
    - `429` error response of `workplaces.create` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `workplaces.update` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `workplaces.update` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `workplaces.update` changed from `WorkplaceNotFound` to `workplace_not_found`.
    - `409` error response of `workplaces.update` changed from `WorkplaceAlreadyExists` to `workplace_already_exists`.
    - `429` error response of `workplaces.update` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - Removed schema `Date`.
    - Removed schema `HttpApiDecodeError`.
    - Removed schema `Issue`.
    - Removed schema `PropertyKey`.
    - Removed schema `InternalServerError`.
    - Removed schema `ApiKeyUnauthorized`.
    - Removed schema `RateLimitExceeded`.
    - Removed schema `DateTimeUtc`.
    - Removed schema `MissingRequiredCompanyPermissions`.
    - Removed schema `ApiNotEnabled`.
    - Removed schema `Trimmed`.
    - Removed schema `NonEmptyTrimmedString`.
    - Removed schema `InvalidCustomWorkerFieldOperation`.
    - Removed schema `CustomWorkerFieldAlreadyExists`.
    - Removed schema `CustomWorkerFieldOptionAlreadyExists`.
    - Removed schema `CustomWorkerFieldNotFound`.
    - Removed schema `CustomWorkerFieldOptionNotFound`.
    - Removed schema `CustomWorkerFieldOptionInUse`.
    - Removed schema `InvalidCustomWorkerFieldValue`.
    - Removed schema `CustomWorkerFieldWorkerNotFound`.
    - Removed schema `DepartmentAlreadyExists`.
    - Removed schema `DepartmentNotFound`.
    - Removed schema `InvalidExpirationTimeError`.
    - Removed schema `ManagerNotFoundError`.
    - Removed schema `OfferNotFoundError`.
    - Removed schema `InvalidOfferStatusError`.
    - Removed schema `TimeOffPolicyNotFound`.
    - Removed schema `TimeOffRequestNotFoundError`.
    - Removed schema `WorkerNotFoundError`.
    - Removed schema `OfficeWorkLocation`.
    - Removed schema `RemoteWorkLocation`.
    - Removed schema `StateRegistrationRequired`.
    - Removed schema `WorkplaceNotFound`.
    - Removed schema `PayScheduleNotConfigured`.
    - Removed schema `SubscriptionLimitError`.
    - Removed schema `InvalidWorkerStatusError`.
    - Removed schema `WorkerAlreadyExistsError`.
    - Removed schema `CannotDeleteWorker`.
    - Removed schema `AddressInvalid`.
    - Removed schema `WorkplaceAlreadyExists`.
* **api:** 3 breaking changes to the SDK surface.
    - Renamed SDK from `Warp` to `WarpApi`.
    - Removed operation `timeOff.policies.list` (`GET /v1/time_off/policies`).
    - Removed operation `timeOff.policies.retrieve` (`GET /v1/time_off/policies/{id}`).
* **api:** Property `MissingRequiredCompanyPermissions.requiredPermissions` type changed from `Array<object>` to `Array<object>`.

### Features

* **api:** update SDK name (+33 more changes) ([5cc3134](https://github.com/TeamWarp/warp-sdk-typescript/commit/5cc31340ab491cd30864b527939c4235c7b7cef1))
* **api:** update SDK surface (2 changes) ([19239a5](https://github.com/TeamWarp/warp-sdk-typescript/commit/19239a5d7c69b1d2ea59f8c414b9cf6f28217f60))
* **api:** update SDK surface (209 changes) ([5b7f247](https://github.com/TeamWarp/warp-sdk-typescript/commit/5b7f24747374fd6acfc9ddb8af695307b743ad46))


### Chores

* **api:** regenerate SDK ([c25c9c2](https://github.com/TeamWarp/warp-sdk-typescript/commit/c25c9c2b09b62687f53c8ae142873b599841c1c9))
* **api:** regenerate SDK ([4b039df](https://github.com/TeamWarp/warp-sdk-typescript/commit/4b039df26b96ed1ec160738018efdf0d76843ada))
* **api:** update generated SDK content ([c0371f6](https://github.com/TeamWarp/warp-sdk-typescript/commit/c0371f6eaa7ec3d3299e56fdf5496298f2a136f1))
* **api:** update generated SDK content ([47837d3](https://github.com/TeamWarp/warp-sdk-typescript/commit/47837d3fa8984d98d73959246e726efce271de38))
* **api:** update generated SDK content ([add0758](https://github.com/TeamWarp/warp-sdk-typescript/commit/add0758c373fbf836da391278032f022340c83ac))

## [0.2.0-next](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.1.0...v0.2.0-next) (2026-07-20)


### Features

* **api:** initial SDK generation ([63a9252](https://github.com/TeamWarp/warp-sdk-typescript/commit/63a9252b90d5df21d497fec809a2612c504ea884))
