// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";
import type * as OffersAPI from "../offers";

export class RetirementPlans extends APIResource {
  /**
   * List company retirement plans. Defaults to active plans. A plan whose effectiveEndDate has elapsed is reported and filtered as terminated.
   *
   * @param {RetirementPlanBenefitsListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RetirementPlanBenefitsListResponse>} Success
   *
   * @example
   * ```ts
   * const benefitsList = await client.benefits.retirementPlans.benefitsList({
   *   statuses: ["active"],
   * });
   * ```
   */
  benefitsList(query: RetirementPlanBenefitsListParams | null | undefined = {}, options?: RequestOptions): APIPromise<RetirementPlanBenefitsListResponse> {
    return this._client.get("/v1/benefits/retirement_plans", { query, ...options });
  }

  /**
   * Get a company retirement plan by id, regardless of status.
   *
   * @param {string} id - The tag of a company retirement plan.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RetirementPlanBenefitsGetResponse>} A company retirement plan available through Warp.
   *
   * @example
   * ```ts
   * const benefitsGet = await client.benefits.retirementPlans.benefitsGet("crpl_1234");
   * ```
   */
  benefitsGet(id: string, options?: RequestOptions): APIPromise<RetirementPlanBenefitsGetResponse> {
    return this._client.get(__scalarPath`/v1/benefits/retirement_plans/${id}`, options);
  }
}

export interface RetirementPlanBenefitsListParams {
  /**
   * a number less than or equal to 100
   */
  limit?: string;
  /**
   * The tag of a company retirement plan.
   * @pattern ^crpl_
   */
  afterId?: string;
  /**
   * The tag of a company retirement plan.
   * @pattern ^crpl_
   */
  beforeId?: string;
  types?: Array<"401k" | "roth_401k" | "403b" | "roth_403b" | "457" | "roth_457" | "simple_ira" | "roth_simple_ira">;
  /**
   * Statuses to include. Defaults to ["active"]. An elapsed effectiveEndDate is reported and filtered as "terminated".
   * @default ["active"]
   */
  statuses?: Array<"active" | "terminated">;
}

export interface RetirementPlanBenefitsListResponse {
  hasMore: boolean;
  /**
   * an integer
   */
  count: number;
  data: Array<RetirementPlanBenefitsListResponse.Data>;
}

export namespace RetirementPlanBenefitsListResponse {
  export interface Data {
    /**
     * The tag of a company retirement plan.
     * @pattern ^crpl_
     */
    id: string;
    /**
     * The retirement plan type.
     */
    type: "401k" | "roth_401k" | "403b" | "roth_403b" | "457" | "roth_457" | "simple_ira" | "roth_simple_ira";
    /**
     * The company-facing plan name.
     */
    name: string;
    /**
     * The system administering the plan. Manual plans are administered by the company outside a connected provider.
     */
    provider: "manual" | "human_interest" | "accrue";
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
     * The public lifecycle status of a retirement plan.
     */
    status: "active" | "terminated";
    /**
     * a string to be decoded into a Date
     */
    createdAt: OffersAPI.Date;
    /**
     * a string to be decoded into a Date
     */
    updatedAt: OffersAPI.Date;
  }
}

export interface RetirementPlanBenefitsGetResponse {
  /**
   * The tag of a company retirement plan.
   * @pattern ^crpl_
   */
  id: string;
  /**
   * The retirement plan type.
   */
  type: "401k" | "roth_401k" | "403b" | "roth_403b" | "457" | "roth_457" | "simple_ira" | "roth_simple_ira";
  /**
   * The company-facing plan name.
   */
  name: string;
  /**
   * The system administering the plan. Manual plans are administered by the company outside a connected provider.
   */
  provider: "manual" | "human_interest" | "accrue";
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
   * The public lifecycle status of a retirement plan.
   */
  status: "active" | "terminated";
  /**
   * a string to be decoded into a Date
   */
  createdAt: OffersAPI.Date;
  /**
   * a string to be decoded into a Date
   */
  updatedAt: OffersAPI.Date;
}
export declare namespace RetirementPlans {
  export {
    type RetirementPlanBenefitsListResponse as RetirementPlanBenefitsListResponse,
    type RetirementPlanBenefitsGetResponse as RetirementPlanBenefitsGetResponse,
    type RetirementPlanBenefitsListParams as RetirementPlanBenefitsListParams,
  };
}
