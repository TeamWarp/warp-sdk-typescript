// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class RetirementPlans extends APIResource {
  /**
   * List company retirement plans. Defaults to active plans. A plan whose effectiveEndDate has elapsed is reported and filtered as terminated.
   *
   * @param {RetirementPlanListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RetirementPlanListResponse>} Success
   *
   * @example
   * ```ts
   * const retirementPlan = await client.benefits.retirementPlans.list({
   *   limit: 'limit',
   *   statuses: ['active'],
   * });
   * ```
   */
  list(query: RetirementPlanListParams, options?: RequestOptions): APIPromise<RetirementPlanListResponse> {
    return this._client.get('/v1/benefits/retirement_plans', { query, ...options });
  }

  /**
   * Get a company retirement plan by id, regardless of status.
   *
   * @param {string} id - The tag of a company retirement plan.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PublicRetirementPlan>} A company retirement plan available through Warp.
   *
   * @example
   * ```ts
   * const publicRetirementPlan = await client.benefits.retirementPlans.get('crpl_1234');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<PublicRetirementPlan> {
    return this._client.get(__scalarPath`/v1/benefits/retirement_plans/${id}`, options);
  }
}

/**
 * A company retirement plan available through Warp.
 */
export interface PublicRetirementPlan {
  /**
   * The tag of a company retirement plan.
   * @pattern ^crpl_
   */
  id: string;
  /**
   * The retirement plan type.
   */
  type: '401k' | 'roth_401k' | '403b' | 'roth_403b' | '457' | 'roth_457' | 'simple_ira' | 'roth_simple_ira';
  /**
   * The company-facing plan name.
   */
  name: string;
  /**
   * The system administering the plan. Manual plans are administered by the company outside a connected provider.
   */
  provider: PublicRetirementPlanProvider;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveStartDate: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveEndDate: string | null;
  /**
   * The public lifecycle status of a retirement plan.
   */
  status: PublicRetirementPlanStatus;
  createdAt: string;
  updatedAt: string;
}

/**
 * The system administering the plan. Manual plans are administered by the company outside a connected provider.
 */
export type PublicRetirementPlanProvider = 'manual' | 'human_interest' | 'accrue';

/**
 * The public lifecycle status of a retirement plan.
 */
export type PublicRetirementPlanStatus = 'active' | 'terminated';

export interface RetirementPlanListParams {
  limit: string | null;
  /**
   * @pattern ^crpl_
   */
  afterId?: string | null;
  /**
   * @pattern ^crpl_
   */
  beforeId?: string | null;
  types?: Array<
    '401k' | 'roth_401k' | '403b' | 'roth_403b' | '457' | 'roth_457' | 'simple_ira' | 'roth_simple_ira'
  > | null;
  statuses: Array<PublicRetirementPlanStatus> | null;
}

export interface RetirementPlanListResponse {
  hasMore: boolean;
  count: number;
  data: Array<PublicRetirementPlan>;
}
export declare namespace RetirementPlans {
  export {
    type PublicRetirementPlan as PublicRetirementPlan,
    type PublicRetirementPlanProvider as PublicRetirementPlanProvider,
    type PublicRetirementPlanStatus as PublicRetirementPlanStatus,
    type RetirementPlanListResponse as RetirementPlanListResponse,
    type RetirementPlanListParams as RetirementPlanListParams,
  };
}
