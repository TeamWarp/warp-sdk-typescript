# Changelog

## [0.20.0](https://github.com/TeamWarp/warp-sdk-typescript/compare/v0.19.0...v0.20.0) (2026-09-03)


### ⚠ BREAKING CHANGES

* **api:** Property `public_worker_compensation.per` type changed from `public_pay_rate_per` to `public_pay_rate_per & string`.
* **api:** Removed webhook `Unwrap` (`offer:voided`).
* **api:** 4 breaking changes to the SDK surface.
    - Response of `payroll.list` changed from `public_payroll_list_response` to `public_payroll_list`.
    - Response of `payroll.listPaychecks` changed from `public_paycheck_list_response` to `public_paycheck_list`.
    - Removed schema `public_payroll_list_response`.
    - Removed schema `public_paycheck_list_response`.
* **api:** 96 breaking changes to the SDK surface.
    - Response of `customFields.update` changed from `objects` to `none`.
    - Response of `customFields.archive` changed from `objects` to `none`.
    - Response of `customFields.updateOption` changed from `objects_3` to `none`.
    - Response of `customFields.archiveOption` changed from `objects_3` to `none`.
    - Response of `customFields.upsertValue` changed from `objects_4` to `none`.
    - Response of `offers.void` changed from `objects_6` to `none`.
    - Response of `offers.extendDeadline` changed from `objects_6` to `none`.
    - Response of `offers.resend` changed from `objects_6` to `none`.
    - Response of `timeOff.policies.get` changed from `objects_10` to `none`.
    - Response of `workers.get` changed from `objects_11` to `none`.
    - Property `public_worker_compensation.currency` type changed from `union_1` to `enum(USD | AUD | BGN | …)`.
    - Property `public_text_worker_custom_field.display` type changed from `union_39` to `string | null`.
    - Property `public_number_worker_custom_field.display` type changed from `union_39` to `string | null`.
    - Property `public_number_worker_custom_field.value` type changed from `union_11 | null` to `number | enum(Infinity | -Infinity | NaN) | null`.
    - Property `public_date_worker_custom_field.display` type changed from `union_39` to `string | null`.
    - Property `public_boolean_worker_custom_field.display` type changed from `union_39` to `string | null`.
    - Property `public_currency_worker_custom_field.display` type changed from `union_39` to `string | null`.
    - Property `public_currency_worker_custom_field.currencyCode` type changed from `union_1 | null` to `enum(USD | AUD | BGN | …) | null`.
    - Property `public_percentage_worker_custom_field.display` type changed from `union_39` to `string | null`.
    - Property `public_percentage_worker_custom_field.value` type changed from `union_11 | null` to `number | enum(Infinity | -Infinity | NaN) | null`.
    - Property `public_select_worker_custom_field.display` type changed from `union_39` to `string | null`.
    - Property `public_select_worker_custom_field.option` type changed from `objects_3 | null` to `object | null`.
    - Property `public_multi_select_worker_custom_field.display` type changed from `union_39` to `string | null`.
    - Property `public_multi_select_worker_custom_field.options` type changed from `Array<objects_3> | null` to `Array<object> | null`.
    - Property `public_money_amount.currency` type changed from `union_1` to `enum(USD | AUD | BGN | …)`.
    - Property `percentage_contribution.percentage` type changed from `number | union_2` to `number | enum(Infinity | -Infinity | NaN)`.
    - Property `number_custom_field_value.value` type changed from `union_11` to `number | enum(Infinity | -Infinity | NaN)`.
    - Property `currency_custom_field_value.currencyCode` type changed from `union_1` to `enum(USD | AUD | BGN | …)`.
    - Property `percentage_custom_field_value.value` type changed from `union_11` to `number | enum(Infinity | -Infinity | NaN)`.
    - Property `select_custom_field_value.option` type changed from `objects_3` to `object`.
    - Property `multi_select_custom_field_value.options` type changed from `Array<objects_3>` to `Array<object>`.
    - Property `department_already_exists_encoded.id` type changed from `union_12` to `string | null`.
    - Property `invalid_offer_status_error_encoded.status` type changed from `union_13` to `enum(draft | sent | accepted | …)`.
    - Property `public_pay_rate.currency` type changed from `union_1` to `enum(USD | AUD | BGN | …)`.
    - Property `public_paycheck_worker.workerType` type changed from `union_22 & string` to `enum(us_w2 | us_1099 | global_contractor)`.
    - Property `public_paycheck_detail_totals.byCurrency` type changed from `string & string` to `string`.
    - Property `time_off_policy_not_found_encoded.id` type changed from `union_23` to `string | number | enum(Infinity | -Infinity | NaN)`.
    - Property `time_off_request_not_found_error_encoded.id` type changed from `string | number | union_2` to `string | number | enum(Infinity | -Infinity | NaN)`.
    - Property `workplace_already_exists_encoded.id` type changed from `union_40` to `string | null`.
    - Property `address_invalid_encoded.suggestedAlternative` type changed from `object | null` to `object | null`.
    - Removed schema `union`.
    - Removed schema `union_1`.
    - Removed schema `union_2`.
    - Removed schema `objects`.
    - Removed schema `union_3`.
    - Removed schema `union_4`.
    - Removed schema `objects_1`.
    - Removed schema `union_5`.
    - Removed schema `union_6`.
    - Removed schema `union_7`.
    - Removed schema `union_8`.
    - Removed schema `union_9`.
    - Removed schema `union_10`.
    - Removed schema `objects_2`.
    - Removed schema `union_11`.
    - Removed schema `objects_3`.
    - Removed schema `objects_4`.
    - Removed schema `union_12`.
    - Removed schema `objects_5`.
    - Removed schema `union_13`.
    - Removed schema `union_14`.
    - Removed schema `objects_7`.
    - Removed schema `union_15`.
    - Removed schema `objects_8`.
    - Removed schema `union_16`.
    - Removed schema `union_17`.
    - Removed schema `union_18`.
    - Removed schema `union_19`.
    - Removed schema `union_20`.
    - Removed schema `objects_9`.
    - Removed schema `objects_6`.
    - Removed schema `union_21`.
    - Removed schema `union_22`.
    - Removed schema `objects_10`.
    - Removed schema `union_23`.
    - Removed schema `union_24`.
    - Removed schema `union_25`.
    - Removed schema `union_26`.
    - Removed schema `union_27`.
    - Removed schema `union_28`.
    - Removed schema `union_29`.
    - Removed schema `union_30`.
    - Removed schema `union_31`.
    - Removed schema `union_32`.
    - Removed schema `union_33`.
    - Removed schema `union_34`.
    - Removed schema `union_35`.
    - Removed schema `union_36`.
    - Removed schema `union_37`.
    - Removed schema `union_39`.
    - Removed schema `union_38`.
    - Removed schema `objects_11`.
    - Removed schema `union_40`.
    - Removed schema `union_41`.
    - Removed schema `union_42`.
    - Removed schema `objects_12`.
* **api:** 156 breaking changes to the SDK surface.
    - Response of `offers.void` changed from `objects_5` to `objects_6`.
    - Response of `offers.extendDeadline` changed from `objects_5` to `objects_6`.
    - Response of `offers.resend` changed from `objects_5` to `objects_6`.
    - Response of `timeOff.policies.get` changed from `objects_9` to `objects_10`.
    - Response of `workers.get` changed from `objects_10` to `objects_11`.
    - Property `public_text_worker_custom_field.display` type changed from `union_37` to `union_39`.
    - Property `public_number_worker_custom_field.display` type changed from `union_37` to `union_39`.
    - Property `public_date_worker_custom_field.display` type changed from `union_37` to `union_39`.
    - Property `public_boolean_worker_custom_field.display` type changed from `union_37` to `union_39`.
    - Property `public_currency_worker_custom_field.display` type changed from `union_37` to `union_39`.
    - Property `public_percentage_worker_custom_field.display` type changed from `union_37` to `union_39`.
    - Property `public_select_worker_custom_field.display` type changed from `union_37` to `union_39`.
    - Property `public_multi_select_worker_custom_field.display` type changed from `union_37` to `union_39`.
    - Property `objects_5.id` type changed from `string` to `string`.
    - Added required property `objects_5.code`.
    - Added required property `objects_5.name`.
    - Added required property `objects_5.track`.
    - Removed required property `objects_5.status`.
    - Removed required property `objects_5.workerType`.
    - Removed required property `objects_5.candidate`.
    - Removed required property `objects_5.position`.
    - Removed required property `objects_5.department`.
    - Removed required property `objects_5.workplace`.
    - Removed required property `objects_5.manager`.
    - Removed required property `objects_5.sentBy`.
    - Removed required property `objects_5.compensation`.
    - Removed required property `objects_5.offerUrl`.
    - Removed required property `objects_5.expirationTime`.
    - Removed required property `objects_5.lastViewedAt`.
    - Removed required property `objects_5.createdAt`.
    - Added required property `objects_7.firstName`.
    - Added required property `objects_7.lastName`.
    - Added required property `objects_7.email`.
    - Added required property `objects_7.contractorDetails`.
    - Removed required property `objects_7.title`.
    - Removed required property `objects_7.startDate`.
    - Removed required property `objects_7.country`.
    - Removed required property `objects_7.scopeOfWork`.
    - Added required property `objects_8.title`.
    - Added required property `objects_8.startDate`.
    - Added required property `objects_8.country`.
    - Added required property `objects_8.scopeOfWork`.
    - Removed required property `objects_8.basePay`.
    - Removed required property `objects_8.signOnBonus`.
    - Removed required property `objects_8.relocationBonus`.
    - Removed required property `objects_8.stock`.
    - Schema `union_19` shape changed.
    - Schema `union_20` shape changed.
    - Added required property `objects_9.basePay`.
    - Added required property `objects_9.signOnBonus`.
    - Added required property `objects_9.relocationBonus`.
    - Added required property `objects_9.stock`.
    - Removed required property `objects_9.id`.
    - Removed required property `objects_9.timeOffTypeId`.
    - Removed required property `objects_9.timeOffTypeName`.
    - Removed required property `objects_9.paid`.
    - Removed required property `objects_9.isUnlimited`.
    - Removed required property `objects_9.schedule`.
    - Removed required property `objects_9.unit`.
    - Removed required property `objects_9.name`.
    - Removed required property `objects_9.description`.
    - Removed required property `objects_9.hoursWorkedPerChunk`.
    - Removed required property `objects_9.minutesPerChunk`.
    - Removed required property `objects_9.minutesPerPeriod`.
    - Added required property `objects_6.id`.
    - Added required property `objects_6.status`.
    - Added required property `objects_6.workerType`.
    - Added required property `objects_6.candidate`.
    - Added required property `objects_6.position`.
    - Added required property `objects_6.department`.
    - Added required property `objects_6.workplace`.
    - Added required property `objects_6.manager`.
    - Added required property `objects_6.sentBy`.
    - Added required property `objects_6.compensation`.
    - Added required property `objects_6.offerUrl`.
    - Added required property `objects_6.expirationTime`.
    - Added required property `objects_6.lastViewedAt`.
    - Added required property `objects_6.createdAt`.
    - Removed required property `objects_6.firstName`.
    - Removed required property `objects_6.lastName`.
    - Removed required property `objects_6.email`.
    - Removed required property `objects_6.contractorDetails`.
    - Schema `union_21` changed from `enum(us_w2 | us_1099 | global_contractor)` to `string | null`.
    - Schema `union_22` changed from `string | number | union_2` to `enum(us_w2 | us_1099 | global_contractor)`.
    - Property `public_paycheck_worker.workerType` type changed from `union_21 & string` to `union_22 & string`.
    - Property `objects_10.id` type changed from `string` to `string`.
    - Added required property `objects_10.timeOffTypeId`.
    - Added required property `objects_10.timeOffTypeName`.
    - Added required property `objects_10.paid`.
    - Added required property `objects_10.isUnlimited`.
    - Added required property `objects_10.schedule`.
    - Added required property `objects_10.unit`.
    - Added required property `objects_10.name`.
    - Added required property `objects_10.description`.
    - Added required property `objects_10.hoursWorkedPerChunk`.
    - Added required property `objects_10.minutesPerChunk`.
    - Added required property `objects_10.minutesPerPeriod`.
    - Removed required property `objects_10.position`.
    - Removed required property `objects_10.type`.
    - Removed required property `objects_10.status`.
    - Removed required property `objects_10.startDate`.
    - Removed required property `objects_10.endDate`.
    - Removed required property `objects_10.isBusiness`.
    - Removed required property `objects_10.businessName`.
    - Removed required property `objects_10.firstName`.
    - Removed required property `objects_10.lastName`.
    - Removed required property `objects_10.email`.
    - Removed required property `objects_10.workEmail`.
    - Removed required property `objects_10.preferredName`.
    - Removed required property `objects_10.displayName`.
    - Removed required property `objects_10.timeZone`.
    - Removed required property `objects_10.department`.
    - Removed required property `objects_10.compensation`.
    - Removed optional property `objects_10.customFields`.
    - Schema `union_23` shape changed.
    - Property `time_off_policy_not_found_encoded.id` type changed from `union_22` to `union_23`.
    - Schema `union_24` shape changed.
    - Schema `union_25` changed from `enum(pending | approved | denied)` to `string | null`.
    - Schema `union_26` shape changed.
    - Schema `union_27` shape changed.
    - Schema `union_28` changed from `string | null` to `enum(employee | contractor)`.
    - Schema `union_29` shape changed.
    - Schema `union_30` shape changed.
    - Schema `union_31` shape changed.
    - Schema `union_32` shape changed.
    - Schema `union_34` shape changed.
    - Schema `union_35` shape changed.
    - Schema `union_36` shape changed.
    - Schema `union_37` shape changed.
    - Schema `union_39` changed from `enum(remote | office)` to `string | null`.
    - Schema `union_38` shape changed.
    - Added required property `objects_11.id`.
    - Added required property `objects_11.position`.
    - Added required property `objects_11.type`.
    - Added required property `objects_11.status`.
    - Added required property `objects_11.startDate`.
    - Added required property `objects_11.endDate`.
    - Added required property `objects_11.isBusiness`.
    - Added required property `objects_11.businessName`.
    - Added required property `objects_11.firstName`.
    - Added required property `objects_11.lastName`.
    - Added required property `objects_11.email`.
    - Added required property `objects_11.workEmail`.
    - Added required property `objects_11.preferredName`.
    - Added required property `objects_11.displayName`.
    - Added required property `objects_11.timeZone`.
    - Added required property `objects_11.department`.
    - Added required property `objects_11.compensation`.
    - Removed required property `objects_11.line1`.
    - Removed optional property `objects_11.line2`.
    - Removed required property `objects_11.city`.
    - Removed required property `objects_11.postalCode`.
    - Removed required property `objects_11.state`.
    - Removed required property `objects_11.country`.
    - Schema `union_40` changed from `enum(active | archived)` to `string | null`.
    - Property `workplace_already_exists_encoded.id` type changed from `union_38` to `union_40`.
* **api:** Renamed SDK from `WarpApi` to `Warp`.
* **api:** Property `missing_required_company_permissions_encoded.requiredPermissions` type changed from `Array<object>` to `Array<object>`.
* **api:** URL of environment `production` changed from `https://api.joinwarp.com` to `https://api.joinwarp.com/public`.
* **api:** 51 breaking changes to the SDK surface.
    - Property `objects_4.value` type changed from `union_12` to `public_custom_field_value_output`.
    - Schema `union_12` shape changed.
    - Property `department_already_exists_encoded.id` type changed from `union_13` to `union_12`.
    - Schema `union_13` changed from `string | null` to `enum(draft | sent | accepted | …)`.
    - Schema `union_14` shape changed.
    - Schema `union_15` shape changed.
    - Property `objects_7.country` type changed from `union_16` to `union_15`.
    - Schema `union_16` changed from `enum(AD | AE | AF | …)` to `object | null`.
    - Schema `union_17` shape changed.
    - Schema `union_18` shape changed.
    - Schema `union_19` shape changed.
    - Property `objects_8.basePay` type changed from `object` to `object`.
    - Property `objects_8.signOnBonus` type changed from `union_20` to `union_19`.
    - Property `objects_8.relocationBonus` type changed from `union_20` to `union_19`.
    - Property `objects_5.status` type changed from `union_14` to `union_13`.
    - Property `objects_5.workerType` type changed from `union_15` to `union_14`.
    - Property `objects_5.department` type changed from `union_17` to `union_16`.
    - Property `objects_5.workplace` type changed from `union_18` to `union_17`.
    - Property `objects_5.manager` type changed from `union_19` to `union_18`.
    - Property `invalid_offer_status_error_encoded.status` type changed from `union_14` to `union_13`.
    - Schema `union_20` shape changed.
    - Schema `union_21` changed from `string | null` to `enum(us_w2 | us_1099 | global_contractor)`.
    - Property `public_paycheck_worker.workerType` type changed from `union_22 & string` to `union_21 & string`.
    - Schema `union_22` changed from `enum(us_w2 | us_1099 | global_contractor)` to `string | number | union_2`.
    - Property `time_off_policy_not_found_encoded.id` type changed from `union_23` to `union_22`.
    - Schema `union_23` shape changed.
    - Schema `union_24` shape changed.
    - Schema `union_25` changed from `string | null` to `enum(pending | approved | denied)`.
    - Schema `union_26` shape changed.
    - Schema `union_27` shape changed.
    - Schema `union_28` changed from `enum(employee | contractor)` to `string | null`.
    - Schema `union_29` shape changed.
    - Schema `union_30` shape changed.
    - Schema `union_31` shape changed.
    - Schema `union_32` shape changed.
    - Schema `union_34` shape changed.
    - Schema `union_35` shape changed.
    - Schema `union_37` shape changed.
    - Schema `union_36` shape changed.
    - Property `objects_10.type` type changed from `union_28` to `union_27`.
    - Property `objects_10.status` type changed from `union_27` to `union_26`.
    - Property `objects_10.endDate` type changed from `union_29` to `union_28`.
    - Property `objects_10.isBusiness` type changed from `union_30` to `union_29`.
    - Property `objects_10.businessName` type changed from `union_31` to `union_30`.
    - Property `objects_10.workEmail` type changed from `union_32` to `union_31`.
    - Property `objects_10.preferredName` type changed from `union_33` to `union_32`.
    - Property `objects_10.timeZone` type changed from `union_34` to `union_33`.
    - Property `objects_10.department` type changed from `union_35` to `union_34`.
    - Property `objects_10.compensation` type changed from `union_36` to `union_35`.
    - Property `objects_10.customFields` type changed from `union_37` to `union_36`.
    - Property `address_invalid_encoded.suggestedAlternative` type changed from `object | null` to `object | null`.
* **api:** 52 breaking changes to the SDK surface.
    - Schema `union_12` shape changed.
    - Property `objects_4.value` type changed from `object | object | object | object | object | object | object | object` to `union_12`.
    - Schema `union_13` changed from `enum(draft | sent | accepted | …)` to `string | null`.
    - Property `department_already_exists_encoded.id` type changed from `union_12` to `union_13`.
    - Schema `union_14` shape changed.
    - Schema `union_15` shape changed.
    - Schema `union_16` changed from `object | null` to `enum(AD | AE | AF | …)`.
    - Property `objects_7.country` type changed from `union_15` to `union_16`.
    - Schema `union_17` shape changed.
    - Schema `union_18` shape changed.
    - Schema `union_19` shape changed.
    - Schema `union_20` shape changed.
    - Property `objects_8.basePay` type changed from `object` to `object`.
    - Property `objects_8.signOnBonus` type changed from `union_19` to `union_20`.
    - Property `objects_8.relocationBonus` type changed from `union_19` to `union_20`.
    - Property `objects_5.status` type changed from `union_13` to `union_14`.
    - Property `objects_5.workerType` type changed from `union_14` to `union_15`.
    - Property `objects_5.department` type changed from `union_16` to `union_17`.
    - Property `objects_5.workplace` type changed from `union_17` to `union_18`.
    - Property `objects_5.manager` type changed from `union_18` to `union_19`.
    - Property `invalid_offer_status_error_encoded.status` type changed from `union_13` to `union_14`.
    - Schema `union_21` changed from `enum(us_w2 | us_1099 | global_contractor)` to `string | null`.
    - Schema `union_22` changed from `string | number | union_2` to `enum(us_w2 | us_1099 | global_contractor)`.
    - Property `public_paycheck_worker.workerType` type changed from `union_21 & string` to `union_22 & string`.
    - Schema `union_23` shape changed.
    - Property `time_off_policy_not_found_encoded.id` type changed from `union_22` to `union_23`.
    - Schema `union_24` shape changed.
    - Schema `union_25` changed from `enum(pending | approved | denied)` to `string | null`.
    - Schema `union_26` shape changed.
    - Schema `union_27` shape changed.
    - Schema `union_28` changed from `string | null` to `enum(employee | contractor)`.
    - Schema `union_29` shape changed.
    - Schema `union_30` shape changed.
    - Schema `union_31` shape changed.
    - Schema `union_32` shape changed.
    - Schema `union_34` shape changed.
    - Schema `union_35` shape changed.
    - Schema `union_36` shape changed.
    - Schema `union_37` changed from `enum(remote | office)` to `Array<object> | null`.
    - Property `objects_10.type` type changed from `union_27` to `union_28`.
    - Property `objects_10.status` type changed from `union_26` to `union_27`.
    - Property `objects_10.endDate` type changed from `union_28` to `union_29`.
    - Property `objects_10.isBusiness` type changed from `union_29` to `union_30`.
    - Property `objects_10.businessName` type changed from `union_30` to `union_31`.
    - Property `objects_10.workEmail` type changed from `union_31` to `union_32`.
    - Property `objects_10.preferredName` type changed from `union_32` to `union_33`.
    - Property `objects_10.timeZone` type changed from `union_33` to `union_34`.
    - Property `objects_10.department` type changed from `union_34` to `union_35`.
    - Property `objects_10.compensation` type changed from `union_35` to `union_36`.
    - Schema `union_38` changed from `enum(active | archived)` to `string | null`.
    - Property `workplace_already_exists_encoded.id` type changed from `union_36` to `union_38`.
    - Property `address_invalid_encoded.suggestedAlternative` type changed from `object | null` to `object | null`.
* **api:** 2 breaking changes to the SDK surface.
    - Removed operation `payroll.retrievePaycheck` (`GET /v1/paychecks/{id}`).
    - Removed operation `payroll.retrieve` (`GET /v1/payrolls/{id}`).
* **api:** 131 breaking changes to the SDK surface.
    - Schema `union` shape changed.
    - Schema `union_1` shape changed.
    - Property `public_worker_compensation.payRateId` type changed from `string` to `string`.
    - Property `public_worker_compensation.amount` type changed from `string` to `integer`.
    - Property `public_worker_compensation.currency` type changed from `union` to `union_1`.
    - Property `public_money_amount.amount` type changed from `string` to `integer`.
    - Property `public_money_amount.currency` type changed from `union` to `union_1`.
    - Property `public_health_plan_carrier.id` type changed from `string` to `string`.
    - Property `public_health_plan.id` type changed from `string` to `string`.
    - Property `public_health_plan.effectiveStartDate` type changed from `string` to `string`.
    - Property `public_health_plan.effectiveEndDate` type changed from `string | null` to `string | null`.
    - Property `health_plan_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `public_retirement_plan.id` type changed from `string` to `string`.
    - Property `public_retirement_plan.effectiveStartDate` type changed from `string` to `string`.
    - Property `public_retirement_plan.effectiveEndDate` type changed from `string | null` to `string | null`.
    - Property `retirement_plan_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `public_worker_reference.id` type changed from `string` to `string`.
    - Property `health_plan_reference.id` type changed from `string` to `string`.
    - Property `retirement_plan_reference.id` type changed from `string` to `string`.
    - Schema `union_2` changed from `string | null` to `enum(Infinity | -Infinity | NaN)`.
    - Property `percentage_contribution.percentage` type changed from `string | union_1` to `number | union_2`.
    - Property `public_benefit_deduction.id` type changed from `string` to `string`.
    - Property `public_benefit_deduction.effectiveStartDate` type changed from `string` to `string`.
    - Property `public_benefit_deduction.effectiveEndDate` type changed from `string | null` to `string | null`.
    - Property `benefit_deduction_not_found_error_encoded.id` type changed from `string` to `string`.
    - Schema `union_3` changed from `enum(text | number | date | …)` to `string | null`.
    - Schema `union_4` shape changed.
    - Schema `union_5` shape changed.
    - Schema `union_6` shape changed.
    - Schema `union_7` shape changed.
    - Schema `union_8` changed from `boolean | null` to `enum(admin | worker)`.
    - Schema `union_9` shape changed.
    - Property `objects.id` type changed from `string` to `string`.
    - Property `objects.description` type changed from `union_2` to `union_3`.
    - Property `objects.type` type changed from `union_3` to `union_4`.
    - Property `objects.status` type changed from `union_4` to `union_5`.
    - Property `objects.category` type changed from `union_5` to `union_6`.
    - Property `objects.accessLevel` type changed from `union_6` to `union_7`.
    - Property `objects.inputBy` type changed from `union_7` to `union_8`.
    - Property `objects.required` type changed from `union_8` to `union_9`.
    - Schema `union_10` shape changed.
    - Property `objects_2.label` type changed from `string & string` to `string`.
    - Property `objects_2.value` type changed from `string & string` to `string`.
    - Property `objects_2.sortOrder` type changed from `number | union_1 | null` to `number | union_2 | null`.
    - Schema `union_11` shape changed.
    - Property `objects_3.id` type changed from `string` to `string`.
    - Property `objects_3.sortOrder` type changed from `union_10` to `union_11`.
    - Property `custom_field_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `custom_field_option_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `custom_field_option_in_use_error_encoded.id` type changed from `string` to `string`.
    - Property `objects_4.id` type changed from `string` to `string`.
    - Property `objects_4.workerId` type changed from `string` to `string`.
    - Property `objects_4.fieldId` type changed from `string` to `string`.
    - Property `objects_4.value` type changed from `object | object | object | object | object | object | object | object` to `object | object | object | object | object | object | object | object`.
    - Property `custom_field_worker_not_found_error_encoded.id` type changed from `string` to `string`.
    - Schema `union_12` changed from `enum(draft | sent | accepted | …)` to `string | null`.
    - Property `department_already_exists_encoded.id` type changed from `union_11` to `union_12`.
    - Property `department_not_found_encoded.id` type changed from `string` to `string`.
    - Schema `union_13` shape changed.
    - Schema `union_14` shape changed.
    - Property `objects_6.email` type changed from `string<email>` to `string<email>`.
    - Schema `union_15` changed from `object | null` to `enum(AD | AE | AF | …)`.
    - Property `objects_7.startDate` type changed from `string` to `string`.
    - Property `objects_7.country` type changed from `union_14` to `union_15`.
    - Schema `union_16` shape changed.
    - Schema `union_17` shape changed.
    - Schema `union_18` shape changed.
    - Schema `union_19` shape changed.
    - Property `objects_8.basePay` type changed from `object` to `object`.
    - Property `objects_8.signOnBonus` type changed from `union_18` to `union_19`.
    - Property `objects_8.relocationBonus` type changed from `union_18` to `union_19`.
    - Property `objects_8.stock` type changed from `object | null` to `object | null`.
    - Property `objects_5.id` type changed from `string` to `string`.
    - Property `objects_5.status` type changed from `union_12` to `union_13`.
    - Property `objects_5.workerType` type changed from `union_13` to `union_14`.
    - Property `objects_5.department` type changed from `union_15` to `union_16`.
    - Property `objects_5.workplace` type changed from `union_16` to `union_17`.
    - Property `objects_5.manager` type changed from `union_17` to `union_18`.
    - Property `workplace_not_found_encoded.id` type changed from `string` to `string`.
    - Property `manager_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `offer_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `invalid_offer_status_error_encoded.id` type changed from `string` to `string`.
    - Property `invalid_offer_status_error_encoded.status` type changed from `union_12` to `union_13`.
    - Property `public_pay_rate.id` type changed from `string` to `string`.
    - Property `public_pay_rate.amount` type changed from `string` to `integer`.
    - Property `public_pay_rate.currency` type changed from `union` to `union_1`.
    - Property `public_pay_rate.effectiveStartDate` type changed from `string | null` to `string | null`.
    - Property `public_pay_rate.effectiveEndDate` type changed from `string | null` to `string | null`.
    - Property `pay_rate_not_found_error_encoded.id` type changed from `string` to `string`.
    - Schema `union_20` shape changed.
    - Schema `union_21` changed from `string | null` to `enum(us_w2 | us_1099 | global_contractor)`.
    - Property `objects_9.id` type changed from `string` to `string`.
    - Property `objects_9.timeOffTypeId` type changed from `string` to `string`.
    - Property `objects_9.hoursWorkedPerChunk` type changed from `union_10 | null` to `union_11 | null`.
    - Property `objects_9.minutesPerChunk` type changed from `union_10 | null` to `union_11 | null`.
    - Property `objects_9.minutesPerPeriod` type changed from `union_10 | null` to `union_11 | null`.
    - Schema `union_22` changed from `enum(pending | approved | denied)` to `string | number | union_2`.
    - Property `time_off_policy_not_found_encoded.id` type changed from `union_19` to `union_22`.
    - Schema `union_23` changed from `enum(draft | invited | onboarding | …)` to `string | null`.
    - Schema `union_24` changed from `enum(employee | contractor)` to `string | null`.
    - Schema `union_25` changed from `string | null` to `enum(pending | approved | denied)`.
    - Property `time_off_request_not_found_error_encoded.id` type changed from `string | number | union_1` to `string | number | union_2`.
    - Schema `union_26` changed from `boolean | null` to `enum(draft | invited | onboarding | …)`.
    - Schema `union_27` changed from `string | null` to `enum(employee | contractor)`.
    - Schema `union_28` shape changed.
    - Schema `union_29` shape changed.
    - Schema `union_31` shape changed.
    - Schema `union_32` shape changed.
    - Schema `union_33` shape changed.
    - Schema `union_34` changed from `enum(remote | office)` to `object | null`.
    - Schema `union_35` changed from `enum(active | archived)` to `public_worker_compensation | null`.
    - Property `objects_10.id` type changed from `string` to `string`.
    - Property `objects_10.type` type changed from `union_24` to `union_27`.
    - Property `objects_10.status` type changed from `union_23` to `union_26`.
    - Property `objects_10.startDate` type changed from `string` to `string`.
    - Property `objects_10.endDate` type changed from `union_25` to `union_28`.
    - Property `objects_10.isBusiness` type changed from `union_26` to `union_29`.
    - Property `objects_10.businessName` type changed from `union_27` to `union_30`.
    - Property `objects_10.email` type changed from `string<email>` to `string<email>`.
    - Property `objects_10.workEmail` type changed from `union_28` to `union_31`.
    - Property `objects_10.preferredName` type changed from `union_29` to `union_32`.
    - Property `objects_10.timeZone` type changed from `union_30` to `union_33`.
    - Property `objects_10.department` type changed from `union_31` to `union_34`.
    - Property `objects_10.compensation` type changed from `union_32` to `union_35`.
    - Property `worker_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `office_work_location.workplaceId` type changed from `string` to `string`.
    - Property `invalid_worker_status_error_encoded.id` type changed from `string` to `string`.
    - Property `cannot_delete_worker_encoded.id` type changed from `string` to `string`.
    - Property `objects_11.line1` type changed from `string` to `string`.
    - Property `workplace_already_exists_encoded.id` type changed from `union_33` to `union_36`.
    - Property `address_invalid_encoded.suggestedAlternative` type changed from `object | null` to `object | null`.
* **api:** 8 breaking changes to the SDK surface.
    - Property `missing_required_company_permissions_encoded.requiredPermissions` type changed from `Array<object>` to `Array<object>`.
    - Property `objects_4.value` type changed from `object | object | object | object | object | object | object | object` to `object | object | object | object | object | object | object | object`.
    - Property `objects_6.contractorDetails` type changed from `object | null` to `object | null`.
    - Schema `union_15` shape changed.
    - Schema `union_16` shape changed.
    - Schema `union_17` shape changed.
    - Property `objects_8.basePay` type changed from `object` to `object`.
    - Property `address_invalid_encoded.suggestedAlternative` type changed from `object | null` to `object | null`.
* **api:** `422` error response of `offers.create` changed from `invalid_expiration_time_error_encoded` to `application/json`.
* **api:** 2 breaking changes to the SDK surface.
    - Added required body field `voidReason` to `offers.void`.
    - Added required request body to `offers.void`.
* **api:** 8 breaking changes to the SDK surface.
    - Property `missing_required_company_permissions_encoded.requiredPermissions` type changed from `Array<object>` to `Array<object>`.
    - Property `objects_4.value` type changed from `object | object | object | object | object | object | object | object` to `object | object | object | object | object | object | object | object`.
    - Property `objects_6.contractorDetails` type changed from `object | null` to `object | null`.
    - Schema `union_15` shape changed.
    - Schema `union_16` shape changed.
    - Schema `union_17` shape changed.
    - Property `objects_8.basePay` type changed from `object` to `object`.
    - Property `address_invalid_encoded.suggestedAlternative` type changed from `object | null` to `object | null`.
* **api:** Schema `union_20` shape changed.
* **api:** 5 breaking changes to the SDK surface.
    - Added required property `public_worker_compensation.per`.
    - Removed required property `public_worker_compensation.basis`.
    - Added required property `public_pay_rate.per`.
    - Removed required property `public_pay_rate.basis`.
    - Removed schema `public_pay_rate_basis`.
* **api:** 2 breaking changes to the SDK surface.
    - Renamed SDK from `Warp` to `WarpApi`.
    - Removed operation `benefits.deductions.retrieve` (`GET /v1/benefits/deductions/{id}`).
* **api:** Removed operation `benefits.deductions.get` (`GET /v1/benefits/deductions/{id}`).
* **api:** 2 breaking changes to the SDK surface.
    - Schema `public_pay_rate_basis` shape changed.
    - Added required property `public_worker_compensation.basis`.
* **api:** 4 breaking changes to the SDK surface.
    - Removed operation `customFields.retrieve` (`GET /v1/custom_fields/{id}`).
    - Removed operation `timeOff.policies.timeOffGet` (`GET /v1/time_off/policies`).
    - Removed operation `timeOff.policies.timeOffGet2` (`GET /v1/time_off/policies/{id}`).
    - Removed operation `workers.retrieve` (`GET /v1/workers/{id}`).
* **api:** 2 breaking changes to the SDK surface.
    - Added required property `public_pay_rate.worker`.
    - Removed required property `public_pay_rate.workerId`.
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

* **api:** add body field voidReason on offers.void (+2 more changes) ([53522f6](https://github.com/TeamWarp/warp-sdk-typescript/commit/53522f6cd97c63030e3016a64efa93daf8c88a10))
* **api:** add operation levels.list ([dec1400](https://github.com/TeamWarp/warp-sdk-typescript/commit/dec14004234c215874aacc716d82b64097756874))
* **api:** add operation payRates.list (+5 more changes) ([aabbb52](https://github.com/TeamWarp/warp-sdk-typescript/commit/aabbb524d0ee87a43602ccc5d8245bbbb18e4921))
* **api:** add operation payroll.listPaychecks (+46 more changes) ([2e25b32](https://github.com/TeamWarp/warp-sdk-typescript/commit/2e25b3235bf161aa4a1e89d3745f2ef36e8a931c))
* **api:** add property public_pay_rate.worker (+1 more change) ([20060d4](https://github.com/TeamWarp/warp-sdk-typescript/commit/20060d4dc6eac31c906ef5678aba23f4a87e3559))
* **api:** remove operation benefits.deductions.get (+1 more change) ([b69924d](https://github.com/TeamWarp/warp-sdk-typescript/commit/b69924de531e2baae0c1d8c0a24d135bd8b86b38))
* **api:** remove operation customFields.retrieve (+7 more changes) ([47fbce1](https://github.com/TeamWarp/warp-sdk-typescript/commit/47fbce19f3462cfaa2af81317097b81715299d62))
* **api:** remove operation payRates.list (+9 more changes) ([0d8482e](https://github.com/TeamWarp/warp-sdk-typescript/commit/0d8482e7748e3fa00b393a4c88c1484ae76245ed))
* **api:** remove operation payroll.retrievePaycheck (+3 more changes) ([3b85593](https://github.com/TeamWarp/warp-sdk-typescript/commit/3b85593d1fa0e960d97b2fd0764e3d6c40c83a75))
* **api:** remove webhook Unwrap (+18 more changes) ([dce5cfd](https://github.com/TeamWarp/warp-sdk-typescript/commit/dce5cfd5bb86f845ae3aef4c9f64a97872ca5659))
* **api:** update 422 error response on offers.create (+2 more changes) ([fa1372f](https://github.com/TeamWarp/warp-sdk-typescript/commit/fa1372fd8793694bd70cfae8676866a7c9714580))
* **api:** update environment production ([7f025fa](https://github.com/TeamWarp/warp-sdk-typescript/commit/7f025fa8442554f3a279bec77a3994a2b4ef78f9))
* **api:** update property objects_4.value (+68 more changes) ([7a0bfe0](https://github.com/TeamWarp/warp-sdk-typescript/commit/7a0bfe0277c76375dc2f81fa0df5c7719db20ebc))
* **api:** update property objects_6.email (+2 more changes) ([73e502f](https://github.com/TeamWarp/warp-sdk-typescript/commit/73e502f5361eef7cf20b4a6209f4bd1b486dfc22))
* **api:** update response of customFields.update (+95 more changes) ([2d8aba9](https://github.com/TeamWarp/warp-sdk-typescript/commit/2d8aba92aaaae402799fc7825ac3aebe739182f5))
* **api:** update response of offers.void (+166 more changes) ([b0a6c7c](https://github.com/TeamWarp/warp-sdk-typescript/commit/b0a6c7ce251bf50e6004c465410d2fd9351e17c7))
* **api:** update response of payroll.list (+27 more changes) ([44e9f6d](https://github.com/TeamWarp/warp-sdk-typescript/commit/44e9f6d2045951c36dc276846fdfd7ee865df894))
* **api:** update schema public_pay_rate_basis (+1 more change) ([b04a6ef](https://github.com/TeamWarp/warp-sdk-typescript/commit/b04a6ef538bcd23ea51b446f1266b980fa9a8269))
* **api:** update schema union (+134 more changes) ([4e613c6](https://github.com/TeamWarp/warp-sdk-typescript/commit/4e613c6b0cedb2224cfe578898b4185d6b86f69d))
* **api:** update schema union_12 (+55 more changes) ([b99dfd6](https://github.com/TeamWarp/warp-sdk-typescript/commit/b99dfd6a21169b7da742a8f13ee5c1baf0d3c57c))
* **api:** update schema union_20 ([a10a45b](https://github.com/TeamWarp/warp-sdk-typescript/commit/a10a45b67882e855367f428715b79cb0af1734ee))
* **api:** update SDK name (+1 more change) ([5fb97e6](https://github.com/TeamWarp/warp-sdk-typescript/commit/5fb97e6ce6dbe048b92f5ec687f3d91d1a31f6ce))
* **api:** update SDK name (+2 more changes) ([5210bc5](https://github.com/TeamWarp/warp-sdk-typescript/commit/5210bc5927a05b9f6f5bd6d68fb862faa55ea898))
* **api:** update SDK surface (18 changes) ([98642df](https://github.com/TeamWarp/warp-sdk-typescript/commit/98642df617867fec61e3a4cbb6d8ed024cde6dab))
* **api:** update SDK surface (2 changes) ([5ffc3e6](https://github.com/TeamWarp/warp-sdk-typescript/commit/5ffc3e693ef026deba41e69a1ebc53d27c997b61))
* **api:** update SDK surface (2 changes) ([0cd8d5c](https://github.com/TeamWarp/warp-sdk-typescript/commit/0cd8d5c3ecde4e2f14fb12071f00ecf2a7b85934))
* **api:** update SDK surface (329 changes) ([53cb8a7](https://github.com/TeamWarp/warp-sdk-typescript/commit/53cb8a7a499046a16810558e058d21ec83926ffc))
* **api:** update SDK surface (7 changes) ([28d609c](https://github.com/TeamWarp/warp-sdk-typescript/commit/28d609c26231040b451164c794037632c1abd687))
* **api:** update SDK surface (8 changes) ([e98d327](https://github.com/TeamWarp/warp-sdk-typescript/commit/e98d327ec15f1fc91b9fc9d6eba1ea2036ddffb8))
* **api:** update SDK surface (9 changes) ([ed00f1e](https://github.com/TeamWarp/warp-sdk-typescript/commit/ed00f1efd83e9baf552e8e1e453d087e77b289a1))


### Chores

* **api:** regenerate SDK ([66a41a7](https://github.com/TeamWarp/warp-sdk-typescript/commit/66a41a7d37de06a6a18e2b4e4e51202d951dff90))
* **api:** regenerate SDK ([fdb2dbf](https://github.com/TeamWarp/warp-sdk-typescript/commit/fdb2dbf07da982ddafd76f91e0d09802a4fb885e))
* **api:** regenerate SDK ([834e878](https://github.com/TeamWarp/warp-sdk-typescript/commit/834e87874b89b6868c2762954f43e66dc08fed55))
* **api:** update generated SDK content ([134c66a](https://github.com/TeamWarp/warp-sdk-typescript/commit/134c66a32e701f5686502389631ce0340bdc6584))
* **api:** update generated SDK content ([525b53e](https://github.com/TeamWarp/warp-sdk-typescript/commit/525b53e6af77febdacbb46ba2828658eda28e457))
* **api:** update generated SDK content ([69218bb](https://github.com/TeamWarp/warp-sdk-typescript/commit/69218bb8856674a961778d2ceb21d450f29ea3aa))
* **api:** update generated SDK content ([db680e4](https://github.com/TeamWarp/warp-sdk-typescript/commit/db680e4dd9fdfd7d4be9c5d3938bb4085cb59faf))
* **api:** update generated SDK content ([082f58d](https://github.com/TeamWarp/warp-sdk-typescript/commit/082f58d848719b023b914955b43fdbf1e723975b))
* **api:** update generated SDK content ([6b47dda](https://github.com/TeamWarp/warp-sdk-typescript/commit/6b47ddafd1c30ab22b6f9bccd441741f5c60efe7))

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
