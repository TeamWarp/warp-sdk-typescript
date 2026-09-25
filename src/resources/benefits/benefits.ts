// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as DeductionsAPI from './deductions';
import type * as OffersAPI from '../offers';
import type * as RetirementPlansAPI from './retirement-plans';
import * as HealthPlansAPI from './health-plans';
import {
  HealthPlans,
  type PublicHealthPlan,
  type PublicHealthPlanCarrier,
  type PublicHealthPlanStatus,
  type HealthPlanListResponse,
  type HealthPlanListParams,
} from './health-plans';
import * as RetirementPlansAPI2 from './retirement-plans';
import {
  RetirementPlans,
  type PublicRetirementPlan,
  type PublicRetirementPlanProvider,
  type PublicRetirementPlanStatus,
  type RetirementPlanListResponse,
  type RetirementPlanListParams,
} from './retirement-plans';
import * as DeductionsAPI2 from './deductions';
import {
  Deductions,
  type PublicBenefitDeduction,
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
} from './deductions';

export class Benefits extends APIResource {
  healthPlans: HealthPlansAPI.HealthPlans = new HealthPlansAPI.HealthPlans(this._client);
  retirementPlans: RetirementPlansAPI2.RetirementPlans = new RetirementPlansAPI2.RetirementPlans(
    this._client,
  );
  deductions: DeductionsAPI2.Deductions = new DeductionsAPI2.Deductions(this._client);

  /**
   * Create a benefit deduction for a worker.
   *
   * @param {BenefitCreateDeductionParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BenefitCreateDeductionResponse>} The current version of a stable payroll benefit deduction.
   *
   * @example
   * ```ts
   * const benefit = await client.benefits.createDeduction({
   *   workerId: 'wrk_1234',
   *   type: 'medical',
   *   calculation: {
   *     type: 'fixed_amount',
   *     frequency: 'monthly',
   *     employeeContribution: {
   *       amount: 0,
   *       currency: 'USD',
   *     },
   *     employerContribution: {
   *       amount: 0,
   *       currency: 'USD',
   *     },
   *   },
   *   effectiveStartDate: '',
   * });
   * ```
   */
  createDeduction(
    body: BenefitCreateDeductionParams,
    options?: RequestOptions,
  ): APIPromise<BenefitCreateDeductionResponse> {
    return this._client.post('/v1/benefits/deductions', { body, ...options });
  }

  /**
   * Update a benefit deduction. The calculation type cannot change.
   *
   * @param {string} id - The version-group tag of a payroll benefit deduction. Stable across edits.
   * @param {BenefitUpdateDeductionParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DeductionsAPI.PublicBenefitDeduction>} The current version of a stable payroll benefit deduction.
   *
   * @example
   * ```ts
   * const publicBenefitDeduction = await client.benefits.updateDeduction('pbdg_1234', {});
   * ```
   */
  updateDeduction(
    id: string,
    body: BenefitUpdateDeductionParams,
    options?: RequestOptions,
  ): APIPromise<DeductionsAPI.PublicBenefitDeduction> {
    return this._client.patch(__scalarPath`/v1/benefits/deductions/${id}`, { body, ...options });
  }

  /**
   * Create a retirement plan for a company on the manual retirement channel.
   *
   * @param {BenefitCreateRetirementPlanParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BenefitCreateRetirementPlanResponse>} A company retirement plan available through Warp.
   *
   * @example
   * ```ts
   * const benefit = await client.benefits.createRetirementPlan({
   *   type: '401k',
   *   name: 'x',
   *   effectiveStartDate: '',
   * });
   * ```
   */
  createRetirementPlan(
    body: BenefitCreateRetirementPlanParams,
    options?: RequestOptions,
  ): APIPromise<BenefitCreateRetirementPlanResponse> {
    return this._client.post('/v1/benefits/retirement_plans', { body, ...options });
  }

  /**
   * Update a retirement plan for a company on the manual retirement channel.
   *
   * @param {string} id - The tag of a company retirement plan.
   * @param {BenefitUpdateRetirementPlanParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RetirementPlansAPI.PublicRetirementPlan>} A company retirement plan available through Warp.
   *
   * @example
   * ```ts
   * const publicRetirementPlan = await client.benefits.updateRetirementPlan('crpl_1234', {});
   * ```
   */
  updateRetirementPlan(
    id: string,
    body: BenefitUpdateRetirementPlanParams,
    options?: RequestOptions,
  ): APIPromise<RetirementPlansAPI.PublicRetirementPlan> {
    return this._client.patch(__scalarPath`/v1/benefits/retirement_plans/${id}`, { body, ...options });
  }
}

export interface BenefitCreateDeductionParams {
  /**
   * The id of the worker.
   * @pattern ^wrk_
   */
  workerId: string;
  /**
   * The payroll deduction type to create.
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
    | 'simple_ira'
    | 'roth_simple_ira'
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
    | 'nqdc'
    | 'nontaxable_fringe';
  /**
   * Both contributions must be supplied.
   */
  calculation:
    | BenefitCreateDeductionParams.FixedAmountBenefitInput
    | BenefitCreateDeductionParams.PercentageBenefitInput;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveStartDate: string;
  /**
   * A matching company plan, or null for a planless deduction.
   */
  plan?: BenefitCreateDeductionParams.Plan | BenefitCreateDeductionParams.Plan2 | null;
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  name?: string | null;
  recurrence?: 'recurring' | 'one_time' | null;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveEndDate?: string | null;
}

export namespace BenefitCreateDeductionParams {
  export interface FixedAmountBenefitInput {
    type: 'fixed_amount';
    frequency: 'monthly' | 'per_paycheck' | null;
    /**
     * A non-negative amount in cents. Currently only USD is accepted.
     */
    employeeContribution: FixedAmountBenefitInput.EmployeeContribution;
    /**
     * A non-negative amount in cents. Currently only USD is accepted.
     */
    employerContribution: FixedAmountBenefitInput.EmployerContribution;
  }

  export namespace FixedAmountBenefitInput {
    export interface EmployeeContribution {
      /**
       * Amount in the currency base unit, e.g. cents for USD.
       * @minimum 0
       */
      amount: number;
      currency:
        | 'USD'
        | 'AUD'
        | 'BGN'
        | 'BRL'
        | 'CAD'
        | 'CHF'
        | 'CZK'
        | 'DKK'
        | 'EUR'
        | 'GBP'
        | 'HKD'
        | 'HUF'
        | 'IDR'
        | 'INR'
        | 'JPY'
        | 'MYR'
        | 'NOK'
        | 'NZD'
        | 'CNY'
        | 'PLN'
        | 'RON'
        | 'TRY'
        | 'SEK'
        | 'SGD'
        | 'AED'
        | 'ARS'
        | 'BDT'
        | 'BWP'
        | 'CLP'
        | 'COP'
        | 'CRC'
        | 'EGP'
        | 'FJD'
        | 'GEL'
        | 'GHS'
        | 'ILS'
        | 'KES'
        | 'KRW'
        | 'LKR'
        | 'MAD'
        | 'MXN'
        | 'NPR'
        | 'PHP'
        | 'PKR'
        | 'THB'
        | 'UAH'
        | 'UGX'
        | 'UYU'
        | 'VND'
        | 'ZAR'
        | 'ZMW'
        | 'TND'
        | 'NGN'
        | 'RSD'
        | 'TWD'
        | 'GTQ'
        | 'HNL'
        | 'DOP'
        | 'SAR'
        | 'XAF'
        | 'PEN';
    }

    export interface EmployerContribution {
      /**
       * Amount in the currency base unit, e.g. cents for USD.
       * @minimum 0
       */
      amount: number;
      currency:
        | 'USD'
        | 'AUD'
        | 'BGN'
        | 'BRL'
        | 'CAD'
        | 'CHF'
        | 'CZK'
        | 'DKK'
        | 'EUR'
        | 'GBP'
        | 'HKD'
        | 'HUF'
        | 'IDR'
        | 'INR'
        | 'JPY'
        | 'MYR'
        | 'NOK'
        | 'NZD'
        | 'CNY'
        | 'PLN'
        | 'RON'
        | 'TRY'
        | 'SEK'
        | 'SGD'
        | 'AED'
        | 'ARS'
        | 'BDT'
        | 'BWP'
        | 'CLP'
        | 'COP'
        | 'CRC'
        | 'EGP'
        | 'FJD'
        | 'GEL'
        | 'GHS'
        | 'ILS'
        | 'KES'
        | 'KRW'
        | 'LKR'
        | 'MAD'
        | 'MXN'
        | 'NPR'
        | 'PHP'
        | 'PKR'
        | 'THB'
        | 'UAH'
        | 'UGX'
        | 'UYU'
        | 'VND'
        | 'ZAR'
        | 'ZMW'
        | 'TND'
        | 'NGN'
        | 'RSD'
        | 'TWD'
        | 'GTQ'
        | 'HNL'
        | 'DOP'
        | 'SAR'
        | 'XAF'
        | 'PEN';
    }
  }

  export interface PercentageBenefitInput {
    type: 'percentage';
    employeeContribution: PercentageBenefitInput.EmployeeContribution;
    employerContribution: PercentageBenefitInput.EmployerContribution;
  }

  export namespace PercentageBenefitInput {
    export interface EmployeeContribution {
      percentage: number | 'Infinity' | '-Infinity' | 'NaN';
    }

    export interface EmployerContribution {
      percentage: number | 'Infinity' | '-Infinity' | 'NaN';
    }
  }

  export interface Plan {
    type: 'health_plan';
    /**
     * The tag of a company health plan.
     * @pattern ^chpl_
     */
    id: string;
  }

  export interface Plan2 {
    type: 'retirement_plan';
    /**
     * The tag of a company retirement plan.
     * @pattern ^crpl_
     */
    id: string;
  }
}

export interface BenefitCreateDeductionResponse {
  /**
   * Stable identifier shared by every internal version of this deduction.
   * @pattern ^pbdg_
   */
  id: string;
  /**
   * Basic identifying information for a worker associated with another resource.
   */
  worker: DeductionsAPI.PublicWorkerReference;
  /**
   * The deduction name shown in payroll and benefits surfaces.
   */
  name: string;
  /**
   * The broad reporting category. The type field identifies the specific payroll deduction.
   */
  category: DeductionsAPI.PublicBenefitDeductionCategory;
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
  plan: DeductionsAPI.PublicBenefitDeductionPlan | null;
  /**
   * How the employee and employer contributions are calculated.
   */
  calculation: DeductionsAPI.PublicBenefitDeductionCalculation;
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
  status: DeductionsAPI.PublicBenefitDeductionStatus;
  createdAt: string;
  updatedAt: string;
}

export interface BenefitUpdateDeductionParams {
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  name?: string | null;
  /**
   * Both contributions must be supplied.
   */
  calculation?:
    | BenefitUpdateDeductionParams.FixedAmountBenefitInput
    | BenefitUpdateDeductionParams.PercentageBenefitInput
    | null;
  recurrence?: 'recurring' | 'one_time' | null;
  status?: 'active' | 'terminated' | null;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveEndDate?: string | null;
}

export namespace BenefitUpdateDeductionParams {
  export interface FixedAmountBenefitInput {
    type: 'fixed_amount';
    frequency: 'monthly' | 'per_paycheck' | null;
    /**
     * A non-negative amount in cents. Currently only USD is accepted.
     */
    employeeContribution: FixedAmountBenefitInput.EmployeeContribution;
    /**
     * A non-negative amount in cents. Currently only USD is accepted.
     */
    employerContribution: FixedAmountBenefitInput.EmployerContribution;
  }

  export namespace FixedAmountBenefitInput {
    export interface EmployeeContribution {
      /**
       * Amount in the currency base unit, e.g. cents for USD.
       * @minimum 0
       */
      amount: number;
      currency:
        | 'USD'
        | 'AUD'
        | 'BGN'
        | 'BRL'
        | 'CAD'
        | 'CHF'
        | 'CZK'
        | 'DKK'
        | 'EUR'
        | 'GBP'
        | 'HKD'
        | 'HUF'
        | 'IDR'
        | 'INR'
        | 'JPY'
        | 'MYR'
        | 'NOK'
        | 'NZD'
        | 'CNY'
        | 'PLN'
        | 'RON'
        | 'TRY'
        | 'SEK'
        | 'SGD'
        | 'AED'
        | 'ARS'
        | 'BDT'
        | 'BWP'
        | 'CLP'
        | 'COP'
        | 'CRC'
        | 'EGP'
        | 'FJD'
        | 'GEL'
        | 'GHS'
        | 'ILS'
        | 'KES'
        | 'KRW'
        | 'LKR'
        | 'MAD'
        | 'MXN'
        | 'NPR'
        | 'PHP'
        | 'PKR'
        | 'THB'
        | 'UAH'
        | 'UGX'
        | 'UYU'
        | 'VND'
        | 'ZAR'
        | 'ZMW'
        | 'TND'
        | 'NGN'
        | 'RSD'
        | 'TWD'
        | 'GTQ'
        | 'HNL'
        | 'DOP'
        | 'SAR'
        | 'XAF'
        | 'PEN';
    }

    export interface EmployerContribution {
      /**
       * Amount in the currency base unit, e.g. cents for USD.
       * @minimum 0
       */
      amount: number;
      currency:
        | 'USD'
        | 'AUD'
        | 'BGN'
        | 'BRL'
        | 'CAD'
        | 'CHF'
        | 'CZK'
        | 'DKK'
        | 'EUR'
        | 'GBP'
        | 'HKD'
        | 'HUF'
        | 'IDR'
        | 'INR'
        | 'JPY'
        | 'MYR'
        | 'NOK'
        | 'NZD'
        | 'CNY'
        | 'PLN'
        | 'RON'
        | 'TRY'
        | 'SEK'
        | 'SGD'
        | 'AED'
        | 'ARS'
        | 'BDT'
        | 'BWP'
        | 'CLP'
        | 'COP'
        | 'CRC'
        | 'EGP'
        | 'FJD'
        | 'GEL'
        | 'GHS'
        | 'ILS'
        | 'KES'
        | 'KRW'
        | 'LKR'
        | 'MAD'
        | 'MXN'
        | 'NPR'
        | 'PHP'
        | 'PKR'
        | 'THB'
        | 'UAH'
        | 'UGX'
        | 'UYU'
        | 'VND'
        | 'ZAR'
        | 'ZMW'
        | 'TND'
        | 'NGN'
        | 'RSD'
        | 'TWD'
        | 'GTQ'
        | 'HNL'
        | 'DOP'
        | 'SAR'
        | 'XAF'
        | 'PEN';
    }
  }

  export interface PercentageBenefitInput {
    type: 'percentage';
    employeeContribution: PercentageBenefitInput.EmployeeContribution;
    employerContribution: PercentageBenefitInput.EmployerContribution;
  }

  export namespace PercentageBenefitInput {
    export interface EmployeeContribution {
      percentage: number | 'Infinity' | '-Infinity' | 'NaN';
    }

    export interface EmployerContribution {
      percentage: number | 'Infinity' | '-Infinity' | 'NaN';
    }
  }
}

export interface BenefitCreateRetirementPlanParams {
  type: '401k' | 'roth_401k' | '403b' | 'roth_403b' | '457' | 'roth_457' | 'simple_ira' | 'roth_simple_ira';
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  name: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveStartDate: string;
}

export interface BenefitCreateRetirementPlanResponse {
  /**
   * The tag of a company retirement plan.
   * @pattern ^crpl_
   */
  id: string;
  /**
   * The retirement plan type.
   */
  type: '401k' | 'roth_401k' | '403b' | 'roth_403b' | '457' | 'roth_457' | 'simple_ira' | 'roth_simple_ira';
  /**
   * The company-facing plan name.
   */
  name: string;
  /**
   * The system administering the plan. Manual plans are administered by the company outside a connected provider.
   */
  provider: RetirementPlansAPI.PublicRetirementPlanProvider;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveStartDate: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveEndDate: string | null;
  /**
   * The public lifecycle status of a retirement plan.
   */
  status: RetirementPlansAPI.PublicRetirementPlanStatus;
  createdAt: string;
  updatedAt: string;
}

export interface BenefitUpdateRetirementPlanParams {
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  name?: string | null;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveStartDate?: string | null;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveEndDate?: string | null;
}
Benefits.HealthPlans = HealthPlans;
Benefits.RetirementPlans = RetirementPlans;
Benefits.Deductions = Deductions;

export declare namespace Benefits {
  export {
    type BenefitCreateDeductionResponse as BenefitCreateDeductionResponse,
    type BenefitCreateRetirementPlanResponse as BenefitCreateRetirementPlanResponse,
    type BenefitCreateDeductionParams as BenefitCreateDeductionParams,
    type BenefitUpdateDeductionParams as BenefitUpdateDeductionParams,
    type BenefitCreateRetirementPlanParams as BenefitCreateRetirementPlanParams,
    type BenefitUpdateRetirementPlanParams as BenefitUpdateRetirementPlanParams,
  };

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
    type PublicRetirementPlanProvider as PublicRetirementPlanProvider,
    type PublicRetirementPlanStatus as PublicRetirementPlanStatus,
    type RetirementPlanListResponse as RetirementPlanListResponse,
    type RetirementPlanListParams as RetirementPlanListParams,
  };

  export {
    Deductions as Deductions,
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
