// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as OffersAPI from '../offers';

export class HealthPlans extends APIResource {
  /**
   * List company health plans. Defaults to active plans. A plan whose effectiveEndDate has elapsed is reported and filtered as terminated.
   *
   * @param {HealthPlanListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<HealthPlanListResponse>} Success
   *
   * @example
   * ```ts
   * const list = await client.benefits.healthPlans.list({
   *   statuses: ['active'],
   * });
   * ```
   */
  list(
    query: HealthPlanListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HealthPlanListResponse> {
    return this._client.get('/v1/benefits/health_plans', { query, ...options });
  }

  /**
   * Get a publicly visible company health plan by id.
   *
   * @param {string} id - The tag of a company health plan.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<HealthPlanGetResponse>} A company health plan available through Warp.
   *
   * @example
   * ```ts
   * const get_ = await client.benefits.healthPlans.get('chpl_1234');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<HealthPlanGetResponse> {
    return this._client.get(__scalarPath`/v1/benefits/health_plans/${id}`, options);
  }
}

export interface HealthPlanListParams {
  /**
   * a number less than or equal to 100
   */
  limit?: string;
  /**
   * The tag of a company health plan.
   * @pattern ^chpl_
   */
  afterId?: string;
  /**
   * The tag of a company health plan.
   * @pattern ^chpl_
   */
  beforeId?: string;
  types?: Array<'medical' | 'dental' | 'vision' | 'life' | 'short_term_disability' | 'long_term_disability'>;
  /**
   * Statuses to include. Defaults to ["active"]. An elapsed effectiveEndDate is reported and filtered as "terminated".
   * @default ["active"]
   */
  statuses?: Array<'active' | 'terminated'>;
  carrierIds?: Array<string>;
}

export interface HealthPlanListResponse {
  hasMore: boolean;
  /**
   * an integer
   */
  count: number;
  data: Array<HealthPlanListResponse.Data>;
}

export namespace HealthPlanListResponse {
  export interface Data {
    /**
     * The tag of a company health plan.
     * @pattern ^chpl_
     */
    id: string;
    /**
     * The insurance carrier underwriting the health plan.
     */
    carrier: Data.Carrier;
    /**
     * The health coverage type.
     */
    type: 'medical' | 'dental' | 'vision' | 'life' | 'short_term_disability' | 'long_term_disability';
    /**
     * The company-facing plan name.
     */
    name: string;
    /**
     * The carrier-assigned group number.
     */
    groupNumber: string | null;
    /**
     * The plan network structure.
     */
    networkType: 'hmo' | 'ppo' | 'epo' | 'pos' | 'hdhp' | 'indemnity' | null;
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
     * The public lifecycle status of a health plan.
     */
    status: 'active' | 'terminated';
    /**
     * a string to be decoded into a Date
     */
    createdAt: OffersAPI.Date;
    /**
     * a string to be decoded into a Date
     */
    updatedAt: OffersAPI.Date;
  }

  export namespace Data {
    export interface Carrier {
      /**
       * The tag of a carrier.
       * @pattern ^car_
       */
      id: string;
      /**
       * The carrier name.
       */
      name: string;
    }
  }
}

export interface HealthPlanGetResponse {
  /**
   * The tag of a company health plan.
   * @pattern ^chpl_
   */
  id: string;
  /**
   * The insurance carrier underwriting the health plan.
   */
  carrier: HealthPlanGetResponse.Carrier;
  /**
   * The health coverage type.
   */
  type: 'medical' | 'dental' | 'vision' | 'life' | 'short_term_disability' | 'long_term_disability';
  /**
   * The company-facing plan name.
   */
  name: string;
  /**
   * The carrier-assigned group number.
   */
  groupNumber: string | null;
  /**
   * The plan network structure.
   */
  networkType: 'hmo' | 'ppo' | 'epo' | 'pos' | 'hdhp' | 'indemnity' | null;
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
   * The public lifecycle status of a health plan.
   */
  status: 'active' | 'terminated';
  /**
   * a string to be decoded into a Date
   */
  createdAt: OffersAPI.Date;
  /**
   * a string to be decoded into a Date
   */
  updatedAt: OffersAPI.Date;
}

export namespace HealthPlanGetResponse {
  export interface Carrier {
    /**
     * The tag of a carrier.
     * @pattern ^car_
     */
    id: string;
    /**
     * The carrier name.
     */
    name: string;
  }
}
export declare namespace HealthPlans {
  export {
    type HealthPlanListResponse as HealthPlanListResponse,
    type HealthPlanGetResponse as HealthPlanGetResponse,
    type HealthPlanListParams as HealthPlanListParams,
  };
}
