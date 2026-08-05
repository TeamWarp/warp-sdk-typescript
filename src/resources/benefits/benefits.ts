// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import * as HealthPlansAPI from "./health-plans";
import { HealthPlans, type HealthPlanBenefitsListResponse, type HealthPlanBenefitsGetResponse, type HealthPlanBenefitsListParams } from "./health-plans";
import * as RetirementPlansAPI from "./retirement-plans";
import { RetirementPlans, type RetirementPlanBenefitsListResponse, type RetirementPlanBenefitsGetResponse, type RetirementPlanBenefitsListParams } from "./retirement-plans";
import * as DeductionsAPI from "./deductions";
import { Deductions, type DeductionBenefitsListResponse, type DeductionBenefitsGetResponse, type DeductionBenefitsListParams } from "./deductions";

export class Benefits extends APIResource {
  healthPlans: HealthPlansAPI.HealthPlans = new HealthPlansAPI.HealthPlans(this._client);
  retirementPlans: RetirementPlansAPI.RetirementPlans = new RetirementPlansAPI.RetirementPlans(this._client);
  deductions: DeductionsAPI.Deductions = new DeductionsAPI.Deductions(this._client);

}

Benefits.HealthPlans = HealthPlans;
Benefits.RetirementPlans = RetirementPlans;
Benefits.Deductions = Deductions;

export declare namespace Benefits {
  export {
    HealthPlans as HealthPlans,
    type HealthPlanBenefitsListResponse as HealthPlanBenefitsListResponse,
    type HealthPlanBenefitsGetResponse as HealthPlanBenefitsGetResponse,
    type HealthPlanBenefitsListParams as HealthPlanBenefitsListParams,
  };

  export {
    RetirementPlans as RetirementPlans,
    type RetirementPlanBenefitsListResponse as RetirementPlanBenefitsListResponse,
    type RetirementPlanBenefitsGetResponse as RetirementPlanBenefitsGetResponse,
    type RetirementPlanBenefitsListParams as RetirementPlanBenefitsListParams,
  };

  export {
    Deductions as Deductions,
    type DeductionBenefitsListResponse as DeductionBenefitsListResponse,
    type DeductionBenefitsGetResponse as DeductionBenefitsGetResponse,
    type DeductionBenefitsListParams as DeductionBenefitsListParams,
  };
}
