// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as OffersAPI from '../offers';

export class Deductions extends APIResource {
  /**
   * List current payroll benefit deductions. Defaults to active deductions. A deduction whose effectiveEndDate has elapsed is reported and filtered as terminated.
   *
   * @param {DeductionListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DeductionListResponse>} Success
   *
   * @example
   * ```ts
   * const deduction = await client.benefits.deductions.list({
   *   limit: 'limit',
   *   statuses: ['active'],
   * });
   * ```
   */
  list(query: DeductionListParams, options?: RequestOptions): APIPromise<DeductionListResponse> {
    return this._client.get('/v1/benefits/deductions', { query, ...options });
  }

  /**
   * Get the current version of a company benefit deduction by id.
   *
   * @param {string} id - The version-group tag of a payroll benefit deduction. Stable across edits.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PublicBenefitDeduction>} The current version of a stable payroll benefit deduction.
   *
   * @example
   * ```ts
   * const publicBenefitDeduction = await client.benefits.deductions.get('pbdg_1234');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<PublicBenefitDeduction> {
    return this._client.get(__scalarPath`/v1/benefits/deductions/${id}`, options);
  }
}

/**
 * The current version of a stable payroll benefit deduction.
 */
export interface PublicBenefitDeduction {
  /**
   * Stable identifier shared by every internal version of this deduction.
   * @pattern ^pbdg_
   */
  id: string;
  /**
   * Basic identifying information for a worker associated with another resource.
   */
  worker: PublicWorkerReference;
  /**
   * The deduction name shown in payroll and benefits surfaces.
   */
  name: string;
  /**
   * The broad reporting category. The type field identifies the specific payroll deduction.
   */
  category: PublicBenefitDeductionCategory;
  /**
   * The specific payroll deduction type within the broader category.
   */
  type:
    | 'medical'
    | 'dental'
    | 'vision'
    | 'life'
    | 'short_term_disability'
    | 'long_term_disability'
    | '401k'
    | 'roth_401k'
    | '403b'
    | 'roth_403b'
    | '457'
    | 'roth_457'
    | 'hsa'
    | 'fsa_medical'
    | 'fsa_dependent_care'
    | 'transit'
    | 'parking'
    | 'accident'
    | 'cancer'
    | 'critical_illness'
    | 'hospital'
    | 'medical_other'
    | 'simple_ira'
    | 'roth_simple_ira'
    | 'nqdc'
    | 'nontaxable_fringe'
    | 'pucc'
    | 'voluntary'
    | 'post_tax'
    | 'other';
  /**
   * Whether the deduction recurs or applies once.
   */
  recurrence: 'recurring' | 'one_time';
  /**
   * The associated benefit plan, or null for a planless payroll deduction.
   */
  plan: PublicBenefitDeductionPlan | null;
  /**
   * How the employee and employer contributions are calculated.
   */
  calculation: PublicBenefitDeductionCalculation;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveStartDate: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveEndDate: string | null;
  /**
   * The public lifecycle status of the current deduction version.
   */
  status: PublicBenefitDeductionStatus;
  createdAt: string;
  updatedAt: string;
}

/**
 * Basic identifying information for a worker associated with another resource.
 */
export interface PublicWorkerReference {
  /**
   * The worker id.
   * @pattern ^wrk_
   */
  id: string;
  /**
   * The worker first name.
   */
  firstName: string;
  /**
   * The worker last name.
   */
  lastName: string;
}

/**
 * The broad reporting category. The type field identifies the specific payroll deduction.
 */
export type PublicBenefitDeductionCategory =
  | 'health'
  | 'retirement'
  | 'health_savings'
  | 'commuter'
  | 'voluntary'
  | 'post_tax'
  | 'other';

/**
 * The associated benefit plan, or null for a planless payroll deduction.
 */
export type PublicBenefitDeductionPlan =
  | PublicBenefitDeductionPlan.HealthPlanReference
  | PublicBenefitDeductionPlan.RetirementPlanReference
  | null;

export namespace PublicBenefitDeductionPlan {
  export interface HealthPlanReference {
    type: 'health_plan';
    /**
     * The tag of a company health plan.
     * @pattern ^chpl_
     */
    id: string;
    /**
     * The associated health plan name.
     */
    name: string;
  }

  export interface RetirementPlanReference {
    type: 'retirement_plan';
    /**
     * The tag of a company retirement plan.
     * @pattern ^crpl_
     */
    id: string;
    /**
     * The associated retirement plan name.
     */
    name: string;
  }
}

/**
 * How the employee and employer contributions are calculated.
 */
export type PublicBenefitDeductionCalculation =
  | PublicBenefitDeductionCalculation.FixedAmountBenefitCalculation
  | PublicBenefitDeductionCalculation.PercentageBenefitCalculation;

export namespace PublicBenefitDeductionCalculation {
  export interface FixedAmountBenefitCalculation {
    type: 'fixed_amount';
    /**
     * The fixed-amount expression frequency. Null for a one-time deduction.
     */
    frequency: 'per_paycheck' | 'monthly' | null;
    /**
     * A monetary amount with its currency and server-formatted display value.
     */
    employeeContribution: OffersAPI.PublicMoneyAmount;
    /**
     * A monetary amount with its currency and server-formatted display value.
     */
    employerContribution: OffersAPI.PublicMoneyAmount;
  }

  export interface PercentageBenefitCalculation {
    type: 'percentage';
    /**
     * A contribution expressed as a percentage of eligible earnings.
     */
    employeeContribution: PercentageContribution;
    /**
     * A contribution expressed as a percentage of eligible earnings.
     */
    employerContribution: PercentageContribution;
  }
}

/**
 * The public lifecycle status of the current deduction version.
 */
export type PublicBenefitDeductionStatus = 'active' | 'pending' | 'suspended' | 'terminated';

/**
 * The health plan associated with the deduction.
 */
export interface HealthPlanReference {
  type: 'health_plan';
  /**
   * The tag of a company health plan.
   * @pattern ^chpl_
   */
  id: string;
  /**
   * The associated health plan name.
   */
  name: string;
}

/**
 * The retirement plan associated with the deduction.
 */
export interface RetirementPlanReference {
  type: 'retirement_plan';
  /**
   * The tag of a company retirement plan.
   * @pattern ^crpl_
   */
  id: string;
  /**
   * The associated retirement plan name.
   */
  name: string;
}

/**
 * Employee and employer contributions expressed as fixed monetary amounts.
 */
export interface FixedAmountBenefitCalculation {
  type: 'fixed_amount';
  /**
   * The fixed-amount expression frequency. Null for a one-time deduction.
   */
  frequency: 'per_paycheck' | 'monthly' | null;
  /**
   * A monetary amount with its currency and server-formatted display value.
   */
  employeeContribution: OffersAPI.PublicMoneyAmount;
  /**
   * A monetary amount with its currency and server-formatted display value.
   */
  employerContribution: OffersAPI.PublicMoneyAmount;
}

/**
 * Employee and employer contributions expressed as percentages of eligible earnings.
 */
export interface PercentageBenefitCalculation {
  type: 'percentage';
  /**
   * A contribution expressed as a percentage of eligible earnings.
   */
  employeeContribution: PercentageContribution;
  /**
   * A contribution expressed as a percentage of eligible earnings.
   */
  employerContribution: PercentageContribution;
}

/**
 * A contribution expressed as a percentage of eligible earnings.
 */
export interface PercentageContribution {
  percentage: number | 'Infinity' | '-Infinity' | 'NaN';
  /**
   * The server-formatted percentage, for example "3%".
   */
  display: string;
}

export interface DeductionListParams {
  limit: string | null;
  /**
   * @pattern ^pbdg_
   */
  afterId?: string | null;
  /**
   * @pattern ^pbdg_
   */
  beforeId?: string | null;
  workerIds?: Array<string> | null;
  categories?: Array<PublicBenefitDeductionCategory> | null;
  types?: Array<
    | 'medical'
    | 'dental'
    | 'vision'
    | 'life'
    | 'short_term_disability'
    | 'long_term_disability'
    | '401k'
    | 'roth_401k'
    | '403b'
    | 'roth_403b'
    | '457'
    | 'roth_457'
    | 'hsa'
    | 'fsa_medical'
    | 'fsa_dependent_care'
    | 'transit'
    | 'parking'
    | 'accident'
    | 'cancer'
    | 'critical_illness'
    | 'hospital'
    | 'medical_other'
    | 'simple_ira'
    | 'roth_simple_ira'
    | 'nqdc'
    | 'nontaxable_fringe'
    | 'pucc'
    | 'voluntary'
    | 'post_tax'
    | 'other'
  > | null;
  statuses: Array<PublicBenefitDeductionStatus> | null;
  healthPlanIds?: Array<string> | null;
  retirementPlanIds?: Array<string> | null;
}

export interface DeductionListResponse {
  hasMore: boolean;
  count: number;
  data: Array<PublicBenefitDeduction>;
}
export declare namespace Deductions {
  export {
    type PublicBenefitDeduction as PublicBenefitDeduction,
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
  };
}
