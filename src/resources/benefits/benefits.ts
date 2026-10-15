// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import * as HealthPlansAPI from './health-plans';
import {
  HealthPlans,
  type PublicHealthPlan,
  type PublicHealthPlanCarrier,
  type PublicHealthPlanStatus,
  type HealthPlanListResponse,
  type HealthPlanListParams,
} from './health-plans';
import * as RetirementPlansAPI from './retirement-plans';
import {
  RetirementPlans,
  type PublicRetirementPlan,
  type PublicRetirementPlan1,
  type PublicRetirementPlanProvider,
  type PublicRetirementPlanStatus,
  type RetirementPlanListResponse,
  type RetirementPlanListParams,
  type RetirementPlanCreateParams,
  type RetirementPlanUpdateParams,
} from './retirement-plans';
import * as DeductionsAPI from './deductions';
import {
  Deductions,
  type PublicBenefitDeduction,
  type PublicBenefitDeduction1,
  type PublicWorkerReference,
  type PublicBenefitDeductionCategory,
  type PublicBenefitDeductionPlan,
  type PublicBenefitDeductionCalculation,
  type PublicBenefitDeductionStatus,
  type HealthPlanReference,
  type RetirementPlanReference,
  type FixedAmountBenefitCalculation,
  type PercentageBenefitCalculation,
  type PercentageContribution,
  type DeductionListResponse,
  type DeductionListParams,
  type DeductionCreateParams,
  type DeductionUpdateParams,
} from './deductions';

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
    type PublicHealthPlan as PublicHealthPlan,
    type PublicHealthPlanCarrier as PublicHealthPlanCarrier,
    type PublicHealthPlanStatus as PublicHealthPlanStatus,
    type HealthPlanListResponse as HealthPlanListResponse,
    type HealthPlanListParams as HealthPlanListParams,
  };

  export {
    RetirementPlans as RetirementPlans,
    type PublicRetirementPlan as PublicRetirementPlan,
    type PublicRetirementPlan1 as PublicRetirementPlan1,
    type PublicRetirementPlanProvider as PublicRetirementPlanProvider,
    type PublicRetirementPlanStatus as PublicRetirementPlanStatus,
    type RetirementPlanListResponse as RetirementPlanListResponse,
    type RetirementPlanListParams as RetirementPlanListParams,
    type RetirementPlanCreateParams as RetirementPlanCreateParams,
    type RetirementPlanUpdateParams as RetirementPlanUpdateParams,
  };

  export {
    Deductions as Deductions,
    type PublicBenefitDeduction as PublicBenefitDeduction,
    type PublicBenefitDeduction1 as PublicBenefitDeduction1,
    type PublicWorkerReference as PublicWorkerReference,
    type PublicBenefitDeductionCategory as PublicBenefitDeductionCategory,
    type PublicBenefitDeductionPlan as PublicBenefitDeductionPlan,
    type PublicBenefitDeductionCalculation as PublicBenefitDeductionCalculation,
    type PublicBenefitDeductionStatus as PublicBenefitDeductionStatus,
    type HealthPlanReference as HealthPlanReference,
    type RetirementPlanReference as RetirementPlanReference,
    type FixedAmountBenefitCalculation as FixedAmountBenefitCalculation,
    type PercentageBenefitCalculation as PercentageBenefitCalculation,
    type PercentageContribution as PercentageContribution,
    type DeductionListResponse as DeductionListResponse,
    type DeductionListParams as DeductionListParams,
    type DeductionCreateParams as DeductionCreateParams,
    type DeductionUpdateParams as DeductionUpdateParams,
  };
}
