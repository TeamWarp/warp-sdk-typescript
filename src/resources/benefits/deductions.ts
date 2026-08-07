// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Deductions extends APIResource {
  /**
   * List current payroll benefit deductions. Defaults to active deductions. A deduction whose effectiveEndDate has elapsed is reported and filtered as terminated.
   *
   * @param {DeductionListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DeductionListResponse>} Success
   *
   * @example
   * ```ts
   * const list = await client.benefits.deductions.list({
   *   statuses: ['active'],
   * });
   * ```
   */
  list(
    query: DeductionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeductionListResponse> {
    return this._client.get('/v1/benefits/deductions', { query, ...options });
  }

  /**
   * Get the current version of a company benefit deduction by id.
   *
   * @param {string} id - The version-group tag of a payroll benefit deduction. Stable across edits.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DeductionGetResponse>} The current version of a stable payroll benefit deduction.
   *
   * @example
   * ```ts
   * const get_ = await client.benefits.deductions.get('pbdg_1234');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<DeductionGetResponse> {
    return this._client.get(__scalarPath`/v1/benefits/deductions/${id}`, options);
  }
}

export interface DeductionListParams {
  /**
   * a number less than or equal to 100
   */
  limit?: string;
  /**
   * The version-group tag of a payroll benefit deduction. Stable across edits.
   * @pattern ^pbdg_
   */
  afterId?: string;
  /**
   * The version-group tag of a payroll benefit deduction. Stable across edits.
   * @pattern ^pbdg_
   */
  beforeId?: string;
  workerIds?: Array<string>;
  categories?: Array<
    'health' | 'retirement' | 'health_savings' | 'commuter' | 'voluntary' | 'post_tax' | 'other'
  >;
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
  >;
  /**
   * Statuses to include. Defaults to ["active"]. An elapsed effectiveEndDate is reported and filtered as "terminated".
   * @default ["active"]
   */
  statuses?: Array<'active' | 'pending' | 'suspended' | 'terminated'>;
  healthPlanIds?: Array<string>;
  retirementPlanIds?: Array<string>;
}

export interface DeductionListResponse {
  hasMore: boolean;
  /**
   * an integer
   */
  count: number;
  data: Array<DeductionListResponse.Data>;
}

export namespace DeductionListResponse {
  export interface Data {
    /**
     * Stable identifier shared by every internal version of this deduction.
     * @pattern ^pbdg_
     */
    id: string;
    /**
     * Basic identifying information for a worker associated with another resource.
     */
    worker: Data.Worker;
    /**
     * The deduction name shown in payroll and benefits surfaces.
     */
    name: string;
    /**
     * The broad reporting category. The type field identifies the specific payroll deduction.
     */
    category: 'health' | 'retirement' | 'health_savings' | 'commuter' | 'voluntary' | 'post_tax' | 'other';
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
    plan: Data.HealthPlanReference | Data.RetirementPlanReference | null;
    /**
     * How the employee and employer contributions are calculated.
     */
    calculation: Data.FixedAmountBenefitCalculation | Data.PercentageBenefitCalculation;
    /**
     * A date string in the form YYYY-MM-DD
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
    status: 'active' | 'pending' | 'suspended' | 'terminated';
    /**
     * a string to be decoded into a Date
     */
    createdAt: string;
    /**
     * a string to be decoded into a Date
     */
    updatedAt: string;
  }

  export namespace Data {
    export interface Worker {
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

    export interface FixedAmountBenefitCalculation {
      type: 'fixed_amount';
      /**
       * The fixed-amount expression frequency. Null for a one-time deduction.
       */
      frequency: 'per_paycheck' | 'monthly' | null;
      /**
       * A monetary amount with its currency and server-formatted display value.
       */
      employeeContribution: FixedAmountBenefitCalculation.EmployeeContribution;
      /**
       * A monetary amount with its currency and server-formatted display value.
       */
      employerContribution: FixedAmountBenefitCalculation.EmployerContribution;
    }

    export namespace FixedAmountBenefitCalculation {
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
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
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
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }
    }

    export interface PercentageBenefitCalculation {
      type: 'percentage';
      /**
       * A contribution expressed as a percentage of eligible earnings.
       */
      employeeContribution: PercentageBenefitCalculation.EmployeeContribution;
      /**
       * A contribution expressed as a percentage of eligible earnings.
       */
      employerContribution: PercentageBenefitCalculation.EmployerContribution;
    }

    export namespace PercentageBenefitCalculation {
      export interface EmployeeContribution {
        /**
         * a number between 0 and 100
         * @minimum 0
         * @maximum 100
         */
        percentage: number;
        /**
         * The server-formatted percentage, for example "3%".
         */
        display: string;
      }

      export interface EmployerContribution {
        /**
         * a number between 0 and 100
         * @minimum 0
         * @maximum 100
         */
        percentage: number;
        /**
         * The server-formatted percentage, for example "3%".
         */
        display: string;
      }
    }
  }
}

export interface DeductionGetResponse {
  /**
   * Stable identifier shared by every internal version of this deduction.
   * @pattern ^pbdg_
   */
  id: string;
  /**
   * Basic identifying information for a worker associated with another resource.
   */
  worker: DeductionGetResponse.Worker;
  /**
   * The deduction name shown in payroll and benefits surfaces.
   */
  name: string;
  /**
   * The broad reporting category. The type field identifies the specific payroll deduction.
   */
  category: 'health' | 'retirement' | 'health_savings' | 'commuter' | 'voluntary' | 'post_tax' | 'other';
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
  plan: DeductionGetResponse.HealthPlanReference | DeductionGetResponse.RetirementPlanReference | null;
  /**
   * How the employee and employer contributions are calculated.
   */
  calculation:
    | DeductionGetResponse.FixedAmountBenefitCalculation
    | DeductionGetResponse.PercentageBenefitCalculation;
  /**
   * A date string in the form YYYY-MM-DD
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
  status: 'active' | 'pending' | 'suspended' | 'terminated';
  /**
   * a string to be decoded into a Date
   */
  createdAt: string;
  /**
   * a string to be decoded into a Date
   */
  updatedAt: string;
}

export namespace DeductionGetResponse {
  export interface Worker {
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

  export interface FixedAmountBenefitCalculation {
    type: 'fixed_amount';
    /**
     * The fixed-amount expression frequency. Null for a one-time deduction.
     */
    frequency: 'per_paycheck' | 'monthly' | null;
    /**
     * A monetary amount with its currency and server-formatted display value.
     */
    employeeContribution: FixedAmountBenefitCalculation.EmployeeContribution;
    /**
     * A monetary amount with its currency and server-formatted display value.
     */
    employerContribution: FixedAmountBenefitCalculation.EmployerContribution;
  }

  export namespace FixedAmountBenefitCalculation {
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
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
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
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }
  }

  export interface PercentageBenefitCalculation {
    type: 'percentage';
    /**
     * A contribution expressed as a percentage of eligible earnings.
     */
    employeeContribution: PercentageBenefitCalculation.EmployeeContribution;
    /**
     * A contribution expressed as a percentage of eligible earnings.
     */
    employerContribution: PercentageBenefitCalculation.EmployerContribution;
  }

  export namespace PercentageBenefitCalculation {
    export interface EmployeeContribution {
      /**
       * a number between 0 and 100
       * @minimum 0
       * @maximum 100
       */
      percentage: number;
      /**
       * The server-formatted percentage, for example "3%".
       */
      display: string;
    }

    export interface EmployerContribution {
      /**
       * a number between 0 and 100
       * @minimum 0
       * @maximum 100
       */
      percentage: number;
      /**
       * The server-formatted percentage, for example "3%".
       */
      display: string;
    }
  }
}
export declare namespace Deductions {
  export {
    type DeductionListResponse as DeductionListResponse,
    type DeductionGetResponse as DeductionGetResponse,
    type DeductionListParams as DeductionListParams,
  };
}
