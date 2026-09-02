// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';
import type * as DeductionsAPI from './benefits/deductions';

export class PayRates extends APIResource {
  /**
   * List pay rates visible to the API key. Results may be filtered by worker, effective start date, or regular/additional type. US and global worker rates require their corresponding compensation read scopes.
   *
   * @param {PayRateListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PayRateListResponse>} Success
   *
   * @example
   * ```ts
   * const payRate = await client.payRates.list({
   *   limit: 'limit',
   * });
   * ```
   */
  list(query: PayRateListParams, options?: RequestOptions): APIPromise<PayRateListResponse> {
    return this._client.get('/v1/pay_rates', { query, ...options });
  }

  /**
   * Get a specific pay rate by id. The API key must have the compensation read scope corresponding to the worker.
   *
   * @param {string} id - The tag of the pay rate.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PublicPayRate>} A regular or additional pay rate assigned to a worker.
   *
   * @example
   * ```ts
   * const publicPayRate = await client.payRates.get('pyr_1234');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<PublicPayRate> {
    return this._client.get(__scalarPath`/v1/pay_rates/${id}`, options);
  }
}

/**
 * A regular or additional pay rate assigned to a worker.
 */
export interface PublicPayRate {
  /**
   * The pay rate id.
   * @pattern ^pyr_
   */
  id: string;
  /**
   * Basic identifying information for a worker associated with another resource.
   */
  worker: DeductionsAPI.PublicWorkerReference;
  /**
   * Whether the rate is the worker's regular base compensation or an additional rate such as a bonus, commission, or stipend.
   */
  type: PublicPayRateType;
  /**
   * The period represented by the pay rate amount.
   */
  per: PublicPayRatePer;
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
   * The server-formatted pay rate, including its period.
   */
  display: string;
  /**
   * The first date on which the rate applies. Additional rates may have no start date.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveStartDate: string | null;
  /**
   * The first date on which the rate no longer applies, or null when it is open-ended.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveEndDate: string | null;
  /**
   * A human-readable label for the pay rate, when one is configured.
   */
  description: string | null;
}

/**
 * Whether the rate is the worker's regular base compensation or an additional rate such as a bonus, commission, or stipend.
 */
export type PublicPayRateType = 'regular' | 'additional';

/**
 * The period represented by the pay rate amount.
 */
export type PublicPayRatePer = 'year' | 'month' | 'week' | 'hour';

export interface PayRateListParams {
  limit: string | null;
  /**
   * @pattern ^pyr_
   */
  afterId?: string | null;
  /**
   * @pattern ^pyr_
   */
  beforeId?: string | null;
  /**
   * Only return pay rates assigned to this worker.
   * @pattern ^wrk_
   */
  workerId?: string | null;
  /**
   * Only return pay rates whose effective start date is on or after this date.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveOnOrAfter?: string | null;
  /**
   * Only return pay rates whose effective start date is before this date.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveBefore?: string | null;
  /**
   * Only return regular or additional pay rates of this type.
   */
  type?: PublicPayRateType | null;
}

export interface PayRateListResponse {
  hasMore: boolean;
  count: number;
  data: Array<PublicPayRate>;
}
export declare namespace PayRates {
  export {
    type PublicPayRate as PublicPayRate,
    type PublicPayRateType as PublicPayRateType,
    type PublicPayRatePer as PublicPayRatePer,
    type PayRateListResponse as PayRateListResponse,
    type PayRateListParams as PayRateListParams,
  };
}
