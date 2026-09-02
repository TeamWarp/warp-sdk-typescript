// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';
import type * as Shared from './shared';

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
   * @returns {APIPromise<PayRateGetResponse>} A regular or additional pay rate assigned to a worker.
   *
   * @example
   * ```ts
   * const payRate = await client.payRates.get('pyr_1234');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<PayRateGetResponse> {
    return this._client.get(__scalarPath`/v1/pay_rates/${id}`, options);
  }
}

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
  type?: 'regular' | 'additional' | null;
}

export interface PayRateListResponse {
  hasMore: boolean;
  count: number;
  data: Array<PayRateListResponse.Data>;
}

export namespace PayRateListResponse {
  export interface Data {
    /**
     * The pay rate id.
     * @pattern ^pyr_
     */
    id: string;
    /**
     * Basic identifying information for a worker associated with another resource.
     */
    worker: Data.Worker;
    /**
     * Whether the rate is the worker's regular base compensation or an additional rate such as a bonus, commission, or stipend.
     */
    type: 'regular' | 'additional';
    /**
     * The period represented by the pay rate amount.
     */
    per: 'year' | 'month' | 'week' | 'hour';
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
  }
}

export interface PayRateGetResponse {
  /**
   * The pay rate id.
   * @pattern ^pyr_
   */
  id: string;
  /**
   * Basic identifying information for a worker associated with another resource.
   */
  worker: PayRateGetResponse.Worker;
  /**
   * Whether the rate is the worker's regular base compensation or an additional rate such as a bonus, commission, or stipend.
   */
  type: 'regular' | 'additional';
  /**
   * The period represented by the pay rate amount.
   */
  per: 'year' | 'month' | 'week' | 'hour';
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

export namespace PayRateGetResponse {
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
}
export declare namespace PayRates {
  export {
    type PayRateListResponse as PayRateListResponse,
    type PayRateGetResponse as PayRateGetResponse,
    type PayRateListParams as PayRateListParams,
  };
}
