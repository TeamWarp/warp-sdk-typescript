// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';
import type * as DeductionsAPI from './benefits/deductions';

export class PaySplits extends APIResource {
  /**
   * List stored pay-split configurations, newest first. Defaults to active. Requires workers banking and profile read scopes plus the applicable US or global compensation read scope.
   *
   * @param {PaySplitListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PaySplitListResponse>} Success
   *
   * @example
   * ```ts
   * const paySplit = await client.paySplits.list({
   *   limit: 'limit',
   *   statuses: ['active'],
   * });
   * ```
   */
  list(query: PaySplitListParams, options?: RequestOptions): APIPromise<PaySplitListResponse> {
    return this._client.get('/v1/pay_splits', { query, ...options });
  }

  /**
   * Get a stored pay-split configuration, including retained inactive configurations. Requires workers banking and profile read scopes plus the applicable US or global compensation read scope.
   *
   * @param {string} id - The tag of the bank account pay split.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PublicPaySplit>} A stored worker pay-split configuration, not a guarantee of executed payroll routing. Fixed amounts are in USD cents, and the final allocation of an amount split receives the remaining net pay. Allocations may reference archived bank accounts.
   *
   * @example
   * ```ts
   * const publicPaySplit = await client.paySplits.get('nps_1234');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<PublicPaySplit> {
    return this._client.get(__scalarPath`/v1/pay_splits/${id}`, options);
  }
}

/**
 * A stored worker pay-split configuration, not a guarantee of executed payroll routing. Fixed amounts are in USD cents, and the final allocation of an amount split receives the remaining net pay. Allocations may reference archived bank accounts.
 */
export type PublicPaySplit = PublicPaySplit.PublicPercentagePaySplit | PublicPaySplit.PublicAmountPaySplit;

export namespace PublicPaySplit {
  export interface PublicPercentagePaySplit {
    /**
     * The tag of the bank account pay split.
     * @pattern ^nps_
     */
    id: string;
    /**
     * Basic identifying information for a worker associated with another resource.
     */
    worker: DeductionsAPI.PublicWorkerReference;
    status: PublicPaySplitStatus & unknown;
    /**
     * @format date-time
     */
    createdAt: string;
    /**
     * @format date-time
     */
    updatedAt: string;
    type: 'percentage';
    /**
     * @minItems 1
     */
    allocations: Array<PublicPaySplitPercentageAllocation>;
  }

  export interface PublicAmountPaySplit {
    /**
     * The tag of the bank account pay split.
     * @pattern ^nps_
     */
    id: string;
    /**
     * Basic identifying information for a worker associated with another resource.
     */
    worker: DeductionsAPI.PublicWorkerReference;
    status: PublicPaySplitStatus & unknown;
    /**
     * @format date-time
     */
    createdAt: string;
    /**
     * @format date-time
     */
    updatedAt: string;
    type: 'amount';
    /**
     * @minItems 1
     */
    allocations: Array<PublicPaySplitAmountAllocation>;
  }
}

export interface PublicPercentagePaySplit {
  /**
   * The tag of the bank account pay split.
   * @pattern ^nps_
   */
  id: string;
  /**
   * Basic identifying information for a worker associated with another resource.
   */
  worker: DeductionsAPI.PublicWorkerReference;
  status: PublicPaySplitStatus & unknown;
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  type: 'percentage';
  /**
   * @minItems 1
   */
  allocations: Array<PublicPaySplitPercentageAllocation>;
}

export interface PublicAmountPaySplit {
  /**
   * The tag of the bank account pay split.
   * @pattern ^nps_
   */
  id: string;
  /**
   * Basic identifying information for a worker associated with another resource.
   */
  worker: DeductionsAPI.PublicWorkerReference;
  status: PublicPaySplitStatus & unknown;
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format date-time
   */
  updatedAt: string;
  type: 'amount';
  /**
   * @minItems 1
   */
  allocations: Array<PublicPaySplitAmountAllocation>;
}

export type PublicPaySplitStatus = 'active' | 'inactive';

export interface PublicPaySplitPercentageAllocation {
  bankAccount: PublicBankAccountReference;
  /**
   * @minimum 0
   */
  priority: number;
  /**
   * A stored percentage from 0 to 100 with at most four decimal places and its server-formatted display. Values are preserved, not normalized to total 100 or predicted from provider execution.
   */
  percentage: PublicPaySplitPercentage;
}

export interface PublicPaySplitAmountAllocation {
  bankAccount: PublicBankAccountReference;
  /**
   * @minimum 0
   */
  priority: number;
  /**
   * A fixed amount, or the net pay remaining after earlier allocations. The final allocation of an amount split always receives the remainder.
   */
  allocation: PublicPaySplitAllocation;
}

export interface PublicBankAccountReference {
  /**
   * The tag of the bank account.
   * @pattern ^bank_
   */
  id: string;
  institutionName: string | null;
  accountType: 'checking' | 'savings' | null;
  accountNumberLastFour: string;
}

/**
 * A stored percentage from 0 to 100 with at most four decimal places and its server-formatted display. Values are preserved, not normalized to total 100 or predicted from provider execution.
 */
export interface PublicPaySplitPercentage {
  percentage: number | 'Infinity' | '-Infinity' | 'NaN';
  display: string;
}

/**
 * A fixed amount, or the net pay remaining after earlier allocations. The final allocation of an amount split always receives the remainder.
 */
export type PublicPaySplitAllocation =
  | PublicPaySplitAllocation.PublicPaySplitFixedAllocation
  | PublicPaySplitAllocation.PublicPaySplitRemainderAllocation;

export namespace PublicPaySplitAllocation {
  export interface PublicPaySplitFixedAllocation {
    type: 'amount';
    /**
     * minor units — cents, e.g. 2345 for $23.45
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

  export interface PublicPaySplitRemainderAllocation {
    type: 'remainder';
  }
}

export interface PublicPaySplitFixedAllocation {
  type: 'amount';
  /**
   * minor units — cents, e.g. 2345 for $23.45
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

export interface PublicPaySplitRemainderAllocation {
  type: 'remainder';
}

export interface PaySplitListParams {
  limit: string | null;
  /**
   * The tag of the bank account pay split.
   * @pattern ^nps_
   */
  afterId?: string | null;
  /**
   * The tag of the bank account pay split.
   * @pattern ^nps_
   */
  beforeId?: string | null;
  /**
   * Worker IDs as repeated parameters. Omit for all workers. Unknown or foreign IDs contribute no matches.
   * @minItems 1
   */
  workerIds?: Array<string> | null;
  /**
   * Configuration types as repeated parameters. Omit for all types.
   * @minItems 1
   */
  types?: Array<'percentage' | 'amount'> | null;
  /**
   * Statuses as repeated parameters. Defaults to active; explicitly request inactive or both to include retained configurations.
   * @minItems 1
   */
  statuses: Array<PublicPaySplitStatus> | null;
}

export interface PaySplitListResponse {
  hasMore: boolean;
  count: number;
  data: Array<PublicPaySplit>;
}
export declare namespace PaySplits {
  export {
    type PublicPaySplit as PublicPaySplit,
    type PublicPercentagePaySplit as PublicPercentagePaySplit,
    type PublicAmountPaySplit as PublicAmountPaySplit,
    type PublicPaySplitStatus as PublicPaySplitStatus,
    type PublicPaySplitPercentageAllocation as PublicPaySplitPercentageAllocation,
    type PublicPaySplitAmountAllocation as PublicPaySplitAmountAllocation,
    type PublicBankAccountReference as PublicBankAccountReference,
    type PublicPaySplitPercentage as PublicPaySplitPercentage,
    type PublicPaySplitAllocation as PublicPaySplitAllocation,
    type PublicPaySplitFixedAllocation as PublicPaySplitFixedAllocation,
    type PublicPaySplitRemainderAllocation as PublicPaySplitRemainderAllocation,
    type PaySplitListResponse as PaySplitListResponse,
    type PaySplitListParams as PaySplitListParams,
  };
}
