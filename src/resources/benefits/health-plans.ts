// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class HealthPlans extends APIResource {
  /**
   * List company health plans. Defaults to active plans. A plan whose effectiveEndDate has elapsed is reported and filtered as terminated.
   *
   * @param {HealthPlanListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<HealthPlanListResponse>} Success
   *
   * @example
   * ```ts
   * const list = await client.benefits.healthPlans.list({
   *   limit: 'limit',
   *   statuses: ['active'],
   * });
   * ```
   */
  list(query: HealthPlanListParams, options?: RequestOptions): APIPromise<HealthPlanListResponse> {
    return this._client.get('/v1/benefits/health_plans', { query, ...options });
  }

  /**
   * Get a publicly visible company health plan by id.
   *
   * @param {string} id
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<HealthPlanGetResponse>} A company health plan available through Warp.
   *
   * @example
   * ```ts
   * const get_ = await client.benefits.healthPlans.get('id');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<HealthPlanGetResponse> {
    return this._client.get(__scalarPath`/v1/benefits/health_plans/${id}`, options);
  }
}

export interface HealthPlanListParams {
  limit: string | null;
  afterId?: string | null;
  beforeId?: string | null;
  types?: Array<
    'medical' | 'dental' | 'vision' | 'life' | 'short_term_disability' | 'long_term_disability'
  > | null;
  statuses: Array<'active' | 'terminated'> | null;
  carrierIds?: Array<string> | null;
}

export interface HealthPlanListResponse {
  hasMore: boolean;
  count: number;
  data: Array<HealthPlanListResponse.Data>;
}

export namespace HealthPlanListResponse {
  export interface Data {
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
    effectiveStartDate: string;
    effectiveEndDate: string | null;
    /**
     * The public lifecycle status of a health plan.
     */
    status: 'active' | 'terminated';
    createdAt: string;
    updatedAt: string;
  }

  export namespace Data {
    export interface Carrier {
      id: string;
      /**
       * The carrier name.
       */
      name: string;
    }
  }
}

export interface HealthPlanGetResponse {
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
  effectiveStartDate: string;
  effectiveEndDate: string | null;
  /**
   * The public lifecycle status of a health plan.
   */
  status: 'active' | 'terminated';
  createdAt: string;
  updatedAt: string;
}

export namespace HealthPlanGetResponse {
  export interface Carrier {
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
