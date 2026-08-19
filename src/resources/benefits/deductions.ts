// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';

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
   * const list = await client.benefits.deductions.list({
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
   * @param {string} id
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DeductionRetrieveResponse>} The current version of a stable payroll benefit deduction.
   *
   * @example
   * ```ts
   * const retrieve = await client.benefits.deductions.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DeductionRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/benefits/deductions/${id}`, options);
  }
}

export interface DeductionListParams {
  limit: string | null;
  afterId?: string | null;
  beforeId?: string | null;
  workerIds?: Array<string> | null;
  categories?: Array<
    'health' | 'retirement' | 'health_savings' | 'commuter' | 'voluntary' | 'post_tax' | 'other'
  > | null;
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
  statuses: Array<'active' | 'pending' | 'suspended' | 'terminated'> | null;
  healthPlanIds?: Array<string> | null;
  retirementPlanIds?: Array<string> | null;
}

export interface DeductionListResponse {
  hasMore: boolean;
  count: number;
  data: Array<DeductionListResponse.Data>;
}

export namespace DeductionListResponse {
  export interface Data {
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
    effectiveStartDate: string;
    effectiveEndDate: string | null;
    /**
     * The public lifecycle status of the current deduction version.
     */
    status: 'active' | 'pending' | 'suspended' | 'terminated';
    createdAt: string;
    updatedAt: string;
  }

  export namespace Data {
    export interface Worker {
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
      id: string;
      /**
       * The associated health plan name.
       */
      name: string;
    }

    export interface RetirementPlanReference {
      type: 'retirement_plan';
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
      employeeContribution: Shared.PublicMoneyAmount;
      /**
       * A monetary amount with its currency and server-formatted display value.
       */
      employerContribution: Shared.PublicMoneyAmount;
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
        percentage: string | Shared.Union1;
        /**
         * The server-formatted percentage, for example "3%".
         */
        display: string;
      }

      export interface EmployerContribution {
        percentage: string | Shared.Union1;
        /**
         * The server-formatted percentage, for example "3%".
         */
        display: string;
      }
    }
  }
}

export interface DeductionRetrieveResponse {
  id: string;
  /**
   * Basic identifying information for a worker associated with another resource.
   */
  worker: DeductionRetrieveResponse.Worker;
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
  plan:
    | DeductionRetrieveResponse.HealthPlanReference
    | DeductionRetrieveResponse.RetirementPlanReference
    | null;
  /**
   * How the employee and employer contributions are calculated.
   */
  calculation:
    | DeductionRetrieveResponse.FixedAmountBenefitCalculation
    | DeductionRetrieveResponse.PercentageBenefitCalculation;
  effectiveStartDate: string;
  effectiveEndDate: string | null;
  /**
   * The public lifecycle status of the current deduction version.
   */
  status: 'active' | 'pending' | 'suspended' | 'terminated';
  createdAt: string;
  updatedAt: string;
}

export namespace DeductionRetrieveResponse {
  export interface Worker {
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
    id: string;
    /**
     * The associated health plan name.
     */
    name: string;
  }

  export interface RetirementPlanReference {
    type: 'retirement_plan';
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
    employeeContribution: Shared.PublicMoneyAmount;
    /**
     * A monetary amount with its currency and server-formatted display value.
     */
    employerContribution: Shared.PublicMoneyAmount;
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
      percentage: string | Shared.Union1;
      /**
       * The server-formatted percentage, for example "3%".
       */
      display: string;
    }

    export interface EmployerContribution {
      percentage: string | Shared.Union1;
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
    type DeductionRetrieveResponse as DeductionRetrieveResponse,
    type DeductionListParams as DeductionListParams,
  };
}
