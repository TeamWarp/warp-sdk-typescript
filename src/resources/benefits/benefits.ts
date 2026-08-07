// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import * as HealthPlansAPI from './health-plans';
import {
  HealthPlans,
  type HealthPlanListResponse,
  type HealthPlanGetResponse,
  type HealthPlanListParams,
} from './health-plans';
import * as RetirementPlansAPI from './retirement-plans';
import {
  RetirementPlans,
  type RetirementPlanListResponse,
  type RetirementPlanGetResponse,
  type RetirementPlanListParams,
} from './retirement-plans';
import * as DeductionsAPI from './deductions';
import {
  Deductions,
  type DeductionListResponse,
  type DeductionGetResponse,
  type DeductionListParams,
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
    type HealthPlanListResponse as HealthPlanListResponse,
    type HealthPlanGetResponse as HealthPlanGetResponse,
    type HealthPlanListParams as HealthPlanListParams,
  };

  export {
    RetirementPlans as RetirementPlans,
    type RetirementPlanListResponse as RetirementPlanListResponse,
    type RetirementPlanGetResponse as RetirementPlanGetResponse,
    type RetirementPlanListParams as RetirementPlanListParams,
  };

  export {
    Deductions as Deductions,
    type DeductionListResponse as DeductionListResponse,
    type DeductionGetResponse as DeductionGetResponse,
    type DeductionListParams as DeductionListParams,
  };
}
