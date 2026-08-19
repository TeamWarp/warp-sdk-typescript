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
   * const list = await client.payRates.list({
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
   * @param {string} id
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PayRateGetResponse>} A regular or additional pay rate assigned to a worker.
   *
   * @example
   * ```ts
   * const get_ = await client.payRates.get('id');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<PayRateGetResponse> {
    return this._client.get(__scalarPath`/v1/pay_rates/${id}`, options);
  }
}

export interface PayRateListParams {
  limit: string | null;
  afterId?: string | null;
  beforeId?: string | null;
  /**
   * Only return pay rates assigned to this worker.
   */
  workerId?: string | null;
  /**
   * Only return pay rates whose effective start date is on or after this date.
   */
  effectiveOnOrAfter?: string | null;
  /**
   * Only return pay rates whose effective start date is before this date.
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
     * The period for the pay rate.
     */
    basis: 'yearly' | 'monthly' | 'weekly' | 'hourly';
    amount: string;
    currency: Shared.Union;
    /**
     * The server-formatted pay rate, including its period.
     */
    display: string;
    /**
     * The first date on which the rate applies. Additional rates may have no start date.
     */
    effectiveStartDate: string | null;
    /**
     * The first date on which the rate no longer applies, or null when it is open-ended.
     */
    effectiveEndDate: string | null;
    /**
     * A human-readable label for the pay rate, when one is configured.
     */
    description: string | null;
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
  }
}

export interface PayRateGetResponse {
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
   * The period for the pay rate.
   */
  basis: 'yearly' | 'monthly' | 'weekly' | 'hourly';
  amount: string;
  currency: Shared.Union;
  /**
   * The server-formatted pay rate, including its period.
   */
  display: string;
  /**
   * The first date on which the rate applies. Additional rates may have no start date.
   */
  effectiveStartDate: string | null;
  /**
   * The first date on which the rate no longer applies, or null when it is open-ended.
   */
  effectiveEndDate: string | null;
  /**
   * A human-readable label for the pay rate, when one is configured.
   */
  description: string | null;
}

export namespace PayRateGetResponse {
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
}
export declare namespace PayRates {
  export {
    type PayRateListResponse as PayRateListResponse,
    type PayRateGetResponse as PayRateGetResponse,
    type PayRateListParams as PayRateListParams,
  };
}
