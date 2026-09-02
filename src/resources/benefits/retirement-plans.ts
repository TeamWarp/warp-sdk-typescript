// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';

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
   * @returns {APIPromise<RetirementPlanGetResponse>} A company retirement plan available through Warp.
   *
   * @example
   * ```ts
   * const retirementPlan = await client.benefits.retirementPlans.get('crpl_1234');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<RetirementPlanGetResponse> {
    return this._client.get(__scalarPath`/v1/benefits/retirement_plans/${id}`, options);
  }
}

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
  statuses: Array<'active' | 'terminated'> | null;
}

export interface RetirementPlanListResponse {
  hasMore: boolean;
  count: number;
  data: Array<RetirementPlanListResponse.Data>;
}

export namespace RetirementPlanListResponse {
  export interface Data {
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
    provider: 'manual' | 'human_interest' | 'accrue';
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
    status: 'active' | 'terminated';
    createdAt: string;
    updatedAt: string;
  }
}

export interface RetirementPlanGetResponse {
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
  provider: 'manual' | 'human_interest' | 'accrue';
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
  status: 'active' | 'terminated';
  createdAt: string;
  updatedAt: string;
}
export declare namespace RetirementPlans {
  export {
    type RetirementPlanListResponse as RetirementPlanListResponse,
    type RetirementPlanGetResponse as RetirementPlanGetResponse,
    type RetirementPlanListParams as RetirementPlanListParams,
  };
}
