// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';
import type * as Shared from './shared';

export class Payroll extends APIResource {
  /**
   * List per-worker paycheck summaries newest first with stable cursor ordering. By default, the response includes every worker type visible to the API key, including US W-2 employees, US 1099 contractors, and global contractors; use workerTypes to narrow the results. Payroll type visibility follows the API key permissions. All lifecycle statuses are included unless statuses are provided.
   *
   * @param {PayrollListPaychecksParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PayrollListPaychecksResponse>} A cursor-paginated page of paycheck summaries.
   *
   * @example
   * ```ts
   * const payroll = await client.payroll.listPaychecks({
   *   limit: 'limit',
   * });
   * ```
   */
  listPaychecks(
    query: PayrollListPaychecksParams,
    options?: RequestOptions,
  ): APIPromise<PayrollListPaychecksResponse> {
    return this._client.get('/v1/paychecks', { query, ...options });
  }

  /**
   * Get a paycheck by id. All worker types use the same paycheck schema. Categories that do not apply to a worker are represented by zero-valued totals and empty line-item arrays. For example, a US 1099 contractor with no applicable payroll taxes returns zero `workerTaxes` and `employerTaxes` totals and an empty `taxes` array. Missing, foreign, unauthorized, or unavailable paychecks return 404.
   *
   * @param {string} id - The paycheck ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PayrollGetPaycheckResponse>} A paycheck with currency-specific calculation lines, totals grouped by currency, and authoritative parent-payroll funding-currency totals. Source currencies for expenses, benefits, or other inputs are outside this payroll-calculation resource.
   *
   * @example
   * ```ts
   * const payroll = await client.payroll.getPaycheck('pyc_1234');
   * ```
   */
  getPaycheck(id: string, options?: RequestOptions): APIPromise<PayrollGetPaycheckResponse> {
    return this._client.get(__scalarPath`/v1/paychecks/${id}`, options);
  }

  /**
   * List payroll summaries newest first with stable cursor ordering. Every amount in totals is expressed in fundingCurrency, the currency the employer uses to fund the payroll. Line-derived categories are converted and rounded per paycheck before aggregation, while netPay remains provider-authoritative. Payroll type visibility follows the API key permissions. All lifecycle statuses are included unless statuses are provided.
   *
   * @param {PayrollListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PayrollListResponse>} A cursor-paginated page of payroll summaries.
   *
   * @example
   * ```ts
   * const payroll = await client.payroll.list({
   *   limit: 'limit',
   * });
   * ```
   */
  list(query: PayrollListParams, options?: RequestOptions): APIPromise<PayrollListResponse> {
    return this._client.get('/v1/payrolls', { query, ...options });
  }

  /**
   * Get a payroll by id. Every amount in totals is expressed in fundingCurrency, the currency the employer uses to fund the payroll. Line-derived categories are converted and rounded per paycheck before aggregation, while netPay remains provider-authoritative. Missing, foreign, unauthorized, or unavailable payrolls return 404.
   *
   * @param {string} id - The payroll ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PayrollGetResponse>} A payroll run with funding and lifecycle details. Every amount in totals is expressed in fundingCurrency; line-derived categories are converted and rounded per paycheck before aggregation, while netPay remains provider-authoritative.
   *
   * @example
   * ```ts
   * const payroll = await client.payroll.get('pay_1234');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<PayrollGetResponse> {
    return this._client.get(__scalarPath`/v1/payrolls/${id}`, options);
  }
}

export interface PayrollListPaychecksParams {
  /**
   * The maximum number of paychecks to return, from 1 to 50.
   */
  limit: string | null;
  /**
   * Return paychecks after this paycheck ID in the stable cursor order. Cannot be used with beforeId.
   * @pattern ^pyc_
   */
  afterId?: string | null;
  /**
   * Return paychecks before this paycheck ID in the stable cursor order. Cannot be used with afterId.
   * @pattern ^pyc_
   */
  beforeId?: string | null;
  /**
   * Payrolls whose paychecks should be included.
   */
  payrollIds?: Array<string> | null;
  /**
   * Workers whose paychecks should be included.
   */
  workerIds?: Array<string> | null;
  /**
   * Worker classifications in effect for the paycheck to include. Omit to include every worker type visible to the API key.
   */
  workerTypes?: Array<'us_w2' | 'us_1099' | 'global_contractor'> | null;
  /**
   * Payroll calculation types to include, subject to the API key permissions.
   */
  payrollTypes?: Array<Shared.PublicPayrollType> | null;
  /**
   * Lifecycle statuses to include. Omit to include every status.
   */
  statuses?: Array<Shared.PublicPaycheckStatus> | null;
  /**
   * Payment methods to include.
   */
  paymentMethods?: Array<Shared.PublicPaycheckPaymentMethod> | null;
  /**
   * Paycheck compensation currencies to include.
   */
  compensationCurrencies?: Array<Shared.PublicPayrollCurrency> | null;
  /**
   * Pay cadences to include.
   */
  payFrequencies?: Array<Shared.PublicPayFrequency> | null;
  /**
   * Inclusive start of the half-open payday range.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  paydayOnOrAfter?: Shared.Union21 | null;
  /**
   * Exclusive end of the half-open payday range.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  paydayBefore?: Shared.Union21 | null;
}

export interface PayrollListPaychecksResponse {
  hasMore: boolean;
  count: number;
  data: string;
}

export interface PayrollGetPaycheckResponse {
  /**
   * @pattern ^pyc_
   */
  id: string;
  payroll: PayrollGetPaycheckResponse.Payroll & string;
  worker: PayrollGetPaycheckResponse.Worker & string;
  status: Shared.PublicPaycheckStatus & string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  payday: string;
  paymentMethod: Shared.PublicPaycheckPaymentMethod & string;
  totals: PayrollGetPaycheckResponse.Totals & string;
  description: string | null;
  exchangeRates: string;
  /**
   * @minimum 0
   */
  reportedHours: number | null;
  earnings: string;
  reimbursements: string;
  deductions: string;
  benefits: string;
  taxes: string;
}

export namespace PayrollGetPaycheckResponse {
  export interface Payroll {
    /**
     * @pattern ^pay_
     */
    id: string;
    type: Shared.PublicPayrollType & string;
    subtype: Shared.PublicPayrollSubtype & string;
    status: Shared.PublicPayrollStatus & string;
    fundingCurrency: Shared.PublicPayrollCurrency & string;
    payPeriod: Shared.PublicPayPeriod & string;
    payFrequency: Shared.PublicPayFrequency | null;
  }

  export interface Worker {
    /**
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
    displayName: string;
    workerType: ('us_w2' | 'us_1099' | 'global_contractor') & string;
  }

  export interface Totals {
    byCurrency: string;
    inFundingCurrency: Totals.InFundingCurrency & string;
  }

  export namespace Totals {
    export interface InFundingCurrency {
      currency: Shared.PublicPayrollCurrency & string;
      /**
       * Gross earnings before worker taxes, deductions, and benefit contributions. Reimbursements are reported separately.
       */
      grossPay: InFundingCurrency.GrossPay;
      /**
       * Calculated net pay after reimbursements, worker taxes, deductions, and benefit contributions. It excludes payment execution fees and may differ from the amount the worker ultimately receives.
       */
      netPay: InFundingCurrency.NetPay;
      /**
       * Amounts reimbursed to the worker in addition to gross pay. Reimbursements increase net pay and employer cost.
       */
      reimbursements: InFundingCurrency.Reimbursements;
      /**
       * Payroll taxes withheld from the worker's pay, reducing net pay.
       */
      workerTaxes: InFundingCurrency.WorkerTaxes;
      /**
       * Payroll taxes paid by the employer in addition to gross pay.
       */
      employerTaxes: InFundingCurrency.EmployerTaxes;
      /**
       * Non-benefit amounts deducted from the worker's pay before taxes, reducing taxable pay and net pay.
       */
      preTaxDeductions: InFundingCurrency.PreTaxDeductions;
      /**
       * Non-benefit amounts deducted from the worker's pay after taxes, reducing net pay.
       */
      postTaxDeductions: InFundingCurrency.PostTaxDeductions;
      /**
       * Amounts the worker pays toward benefits, deducted from their pay.
       */
      workerBenefitContributions: InFundingCurrency.WorkerBenefitContributions;
      /**
       * Amounts the employer pays toward the worker's benefits in addition to gross pay.
       */
      employerBenefitContributions: InFundingCurrency.EmployerBenefitContributions;
    }

    export namespace InFundingCurrency {
      export interface GrossPay {
        /**
         * @minimum 0
         */
        amount: number;
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }

      export interface NetPay {
        /**
         * @minimum 0
         */
        amount: number;
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }

      export interface Reimbursements {
        /**
         * @minimum 0
         */
        amount: number;
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }

      export interface WorkerTaxes {
        /**
         * @minimum 0
         */
        amount: number;
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }

      export interface EmployerTaxes {
        /**
         * @minimum 0
         */
        amount: number;
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }

      export interface PreTaxDeductions {
        /**
         * @minimum 0
         */
        amount: number;
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }

      export interface PostTaxDeductions {
        /**
         * @minimum 0
         */
        amount: number;
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }

      export interface WorkerBenefitContributions {
        /**
         * @minimum 0
         */
        amount: number;
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }

      export interface EmployerBenefitContributions {
        /**
         * @minimum 0
         */
        amount: number;
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }
    }
  }
}

export interface PayrollListParams {
  /**
   * The maximum number of payrolls to return, from 1 to 50.
   */
  limit: string | null;
  /**
   * Return payrolls after this payroll ID in the stable cursor order. Cannot be used with beforeId.
   * @pattern ^pay_
   */
  afterId?: string | null;
  /**
   * Return payrolls before this payroll ID in the stable cursor order. Cannot be used with afterId.
   * @pattern ^pay_
   */
  beforeId?: string | null;
  /**
   * Payroll calculation types to include.
   */
  types?: Array<Shared.PublicPayrollType> | null;
  /**
   * Payroll subtypes to include.
   */
  subtypes?: Array<Shared.PublicPayrollSubtype> | null;
  /**
   * Lifecycle statuses to include. Omit to include every status.
   */
  statuses?: Array<Shared.PublicPayrollStatus> | null;
  /**
   * Pay cadences to include.
   */
  payFrequencies?: Array<Shared.PublicPayFrequency> | null;
  /**
   * Inclusive start of the half-open payday range.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  paydayOnOrAfter?: Shared.Union21 | null;
  /**
   * Exclusive end of the half-open payday range.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  paydayBefore?: Shared.Union21 | null;
  /**
   * Inclusive start of the half-open pay-period-end range.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  payPeriodEndOnOrAfter?: Shared.Union21 | null;
  /**
   * Exclusive end of the half-open pay-period-end range.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  payPeriodEndBefore?: Shared.Union21 | null;
}

export interface PayrollListResponse {
  hasMore: boolean;
  count: number;
  data: unknown;
}

export interface PayrollGetResponse {
  /**
   * @pattern ^pay_
   */
  id: string;
  type: Shared.PublicPayrollType & string;
  subtype: Shared.PublicPayrollSubtype & string;
  status: Shared.PublicPayrollStatus & string;
  fundingCurrency: Shared.PublicPayrollCurrency & string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  payday: string;
  payPeriod: Shared.PublicPayPeriod & string;
  payFrequency: Shared.PublicPayFrequency | null;
  description: string | null;
  approvalDeadline: string | null;
  /**
   * @minimum 0
   */
  paycheckCount: number;
  totals: PayrollGetResponse.Totals & string;
  fundingMethod: ('ach' | 'wire') & string;
  reopenDeadline: string | null;
  timeline: PayrollGetResponse.Timeline & unknown;
}

export namespace PayrollGetResponse {
  export interface Totals {
    cashRequirement: Totals.CashRequirement | null;
    /**
     * Gross earnings before worker taxes, deductions, and benefit contributions. Reimbursements are reported separately.
     */
    grossPay: Totals.GrossPay;
    /**
     * The provider-calculated amount to send for workers: gross pay plus reimbursements, less worker taxes, deductions, and benefit contributions. It excludes payment execution fees and may differ from recomputed totals because of provider and FX rounding.
     */
    netPay: Totals.NetPay;
    /**
     * Amounts reimbursed to workers in addition to gross pay. Reimbursements increase net pay and employer cost.
     */
    reimbursements: Totals.Reimbursements;
    /**
     * Payroll taxes withheld from worker pay, reducing net pay.
     */
    workerTaxes: Totals.WorkerTaxes;
    /**
     * Payroll taxes paid by the employer in addition to gross pay.
     */
    employerTaxes: Totals.EmployerTaxes;
    /**
     * Non-benefit amounts deducted from worker pay before taxes, reducing taxable pay and net pay.
     */
    preTaxDeductions: Totals.PreTaxDeductions;
    /**
     * Non-benefit amounts deducted from worker pay after taxes, reducing net pay.
     */
    postTaxDeductions: Totals.PostTaxDeductions;
    /**
     * Amounts workers pay toward benefits, deducted from their pay.
     */
    workerBenefitContributions: Totals.WorkerBenefitContributions;
    /**
     * Amounts the employer pays toward worker benefits in addition to gross pay.
     */
    employerBenefitContributions: Totals.EmployerBenefitContributions;
    /**
     * Banking and transaction fees paid by the employer to fund and pay the payroll.
     */
    transactionFees: Totals.TransactionFees;
    /**
     * The employer's total payroll cost: gross pay, reimbursements, employer taxes, employer benefit contributions, and transaction fees.
     */
    totalCost: Totals.TotalCost;
  }

  export namespace Totals {
    export interface CashRequirement {
      /**
       * @minimum 0
       */
      amount: number;
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface GrossPay {
      /**
       * @minimum 0
       */
      amount: number;
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface NetPay {
      /**
       * @minimum 0
       */
      amount: number;
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface Reimbursements {
      /**
       * @minimum 0
       */
      amount: number;
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface WorkerTaxes {
      /**
       * @minimum 0
       */
      amount: number;
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface EmployerTaxes {
      /**
       * @minimum 0
       */
      amount: number;
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface PreTaxDeductions {
      /**
       * @minimum 0
       */
      amount: number;
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface PostTaxDeductions {
      /**
       * @minimum 0
       */
      amount: number;
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface WorkerBenefitContributions {
      /**
       * @minimum 0
       */
      amount: number;
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface EmployerBenefitContributions {
      /**
       * @minimum 0
       */
      amount: number;
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface TransactionFees {
      /**
       * @minimum 0
       */
      amount: number;
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface TotalCost {
      /**
       * @minimum 0
       */
      amount: number;
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }
  }

  export interface Timeline {
    approvedAt: string | null;
  }
}
export declare namespace Payroll {
  export {
    type PayrollListPaychecksResponse as PayrollListPaychecksResponse,
    type PayrollGetPaycheckResponse as PayrollGetPaycheckResponse,
    type PayrollListResponse as PayrollListResponse,
    type PayrollGetResponse as PayrollGetResponse,
    type PayrollListPaychecksParams as PayrollListPaychecksParams,
    type PayrollListParams as PayrollListParams,
  };
}
