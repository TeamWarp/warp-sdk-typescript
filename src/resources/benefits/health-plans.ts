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
   * const healthPlan = await client.benefits.healthPlans.list({
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
   * @param {string} id - The tag of a company health plan.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PublicHealthPlan>} A company health plan available through Warp.
   *
   * @example
   * ```ts
   * const publicHealthPlan = await client.benefits.healthPlans.get('chpl_1234');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<PublicHealthPlan> {
    return this._client.get(__scalarPath`/v1/benefits/health_plans/${id}`, options);
  }
}

/**
 * A company health plan available through Warp.
 */
export interface PublicHealthPlan {
  /**
   * The tag of a company health plan.
   * @pattern ^chpl_
   */
  id: string;
  /**
   * The insurance carrier underwriting the health plan.
   */
  carrier: PublicHealthPlanCarrier;
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
  status: PublicHealthPlanStatus;
  createdAt: string;
  updatedAt: string;
}

/**
 * The insurance carrier underwriting the health plan.
 */
export interface PublicHealthPlanCarrier {
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

/**
 * The public lifecycle status of a health plan.
 */
export type PublicHealthPlanStatus = 'active' | 'terminated';

export interface HealthPlanListParams {
  limit: string | null;
  /**
   * @pattern ^chpl_
   */
  afterId?: string | null;
  /**
   * @pattern ^chpl_
   */
  beforeId?: string | null;
  types?: Array<
    'medical' | 'dental' | 'vision' | 'life' | 'short_term_disability' | 'long_term_disability'
  > | null;
  statuses: Array<PublicHealthPlanStatus> | null;
  carrierIds?: Array<string> | null;
}

export interface HealthPlanListResponse {
  hasMore: boolean;
  count: number;
  data: Array<PublicHealthPlan>;
}
export declare namespace HealthPlans {
  export {
    type PublicHealthPlan as PublicHealthPlan,
    type PublicHealthPlanCarrier as PublicHealthPlanCarrier,
    type PublicHealthPlanStatus as PublicHealthPlanStatus,
    type HealthPlanListResponse as HealthPlanListResponse,
    type HealthPlanListParams as HealthPlanListParams,
  };
}
