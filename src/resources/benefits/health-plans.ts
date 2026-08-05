// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";
import type * as OffersAPI from "../offers";

export class HealthPlans extends APIResource {
  /**
   * List company health plans. Defaults to active plans. A plan whose effectiveEndDate has elapsed is reported and filtered as terminated.
   *
   * @param {HealthPlanBenefitsListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<HealthPlanBenefitsListResponse>} Success
   *
   * @example
   * ```ts
   * const benefitsList = await client.benefits.healthPlans.benefitsList({
   *   statuses: ["active"],
   * });
   * ```
   */
  benefitsList(query: HealthPlanBenefitsListParams | null | undefined = {}, options?: RequestOptions): APIPromise<HealthPlanBenefitsListResponse> {
    return this._client.get("/v1/benefits/health_plans", { query, ...options });
  }

  /**
   * Get a publicly visible company health plan by id.
   *
   * @param {string} id - The tag of a company health plan.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<HealthPlanBenefitsGetResponse>} A company health plan available through Warp.
   *
   * @example
   * ```ts
   * const benefitsGet = await client.benefits.healthPlans.benefitsGet("chpl_1234");
   * ```
   */
  benefitsGet(id: string, options?: RequestOptions): APIPromise<HealthPlanBenefitsGetResponse> {
    return this._client.get(__scalarPath`/v1/benefits/health_plans/${id}`, options);
  }
}

export interface HealthPlanBenefitsListParams {
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
  types?: Array<"medical" | "dental" | "vision" | "life" | "short_term_disability" | "long_term_disability">;
  /**
   * Statuses to include. Defaults to ["active"]. An elapsed effectiveEndDate is reported and filtered as "terminated".
   * @default ["active"]
   */
  statuses?: Array<"active" | "terminated">;
  carrierIds?: Array<string>;
}

export interface HealthPlanBenefitsListResponse {
  hasMore: boolean;
  /**
   * an integer
   */
  count: number;
  data: Array<HealthPlanBenefitsListResponse.Data>;
}

export namespace HealthPlanBenefitsListResponse {
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
    type: "medical" | "dental" | "vision" | "life" | "short_term_disability" | "long_term_disability";
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
    networkType: "hmo" | "ppo" | "epo" | "pos" | "hdhp" | "indemnity" | null;
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

export interface HealthPlanBenefitsGetResponse {
  /**
   * The tag of a company health plan.
   * @pattern ^chpl_
   */
  id: string;
  /**
   * The insurance carrier underwriting the health plan.
   */
  carrier: HealthPlanBenefitsGetResponse.Carrier;
  /**
   * The health coverage type.
   */
  type: "medical" | "dental" | "vision" | "life" | "short_term_disability" | "long_term_disability";
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
  networkType: "hmo" | "ppo" | "epo" | "pos" | "hdhp" | "indemnity" | null;
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

export namespace HealthPlanBenefitsGetResponse {
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
    type HealthPlanBenefitsListResponse as HealthPlanBenefitsListResponse,
    type HealthPlanBenefitsGetResponse as HealthPlanBenefitsGetResponse,
    type HealthPlanBenefitsListParams as HealthPlanBenefitsListParams,
  };
}
