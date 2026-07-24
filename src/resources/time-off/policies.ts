// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class Policies extends APIResource {
  /**
   * Get the time off policies for your company
   *
   * @param {PolicyTimeOffGetParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PolicyTimeOffGetResponse>} Success
   *
   * @example
   * ```ts
   * const timeOffGet = await client.timeOff.policies.timeOffGet();
   * ```
   */
  timeOffGet(params: PolicyTimeOffGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<PolicyTimeOffGetResponse> {
    const { limit, afterId, beforeId } = params ?? {};
    return this._client.get("/v1/time_off/policies", { query: { limit: limit, afterId: afterId, beforeId: beforeId }, ...options });
  }

  /**
   * Get a specific time off policy by id
   *
   * @param {string} id - a string starting with "top_"
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PolicyTimeOffGet2Response>} Success
   *
   * @example
   * ```ts
   * const timeOffGet2 = await client.timeOff.policies.timeOffGet2("top_1234");
   * ```
   */
  timeOffGet2(id: string, options?: RequestOptions): APIPromise<PolicyTimeOffGet2Response> {
    return this._client.get(__scalarPath`/v1/time_off/policies/${id}`, options);
  }
}

export interface PolicyTimeOffGetParams {
  /**
   * a number less than or equal to 100
   */
  limit?: string;
  /**
   * a string starting with "top_"
   * @pattern ^top_
   */
  afterId?: string;
  /**
   * a string starting with "top_"
   * @pattern ^top_
   */
  beforeId?: string;
}

export interface PolicyTimeOffGetResponse {
  hasMore: boolean;
  /**
   * an integer
   */
  count: number;
  data: Array<PolicyTimeOffGetResponse.Data>;
}

export namespace PolicyTimeOffGetResponse {
  export interface Data {
    /**
     * a string starting with "top_"
     * @pattern ^top_
     */
    id: string;
    /**
     * a string starting with "tot_"
     * @pattern ^tot_
     */
    timeOffTypeId: string;
    timeOffTypeName: string;
    paid: boolean;
    isUnlimited: boolean;
    schedule: "per_hour_worked" | "monthly" | "yearly" | "unlimited";
    unit: "hour" | "day";
    name: string;
    description: string | null;
    hoursWorkedPerChunk: number | null;
    minutesPerChunk: number | null;
    minutesPerPeriod: number | null;
  }
}

export interface PolicyTimeOffGet2Response {
  /**
   * a string starting with "top_"
   * @pattern ^top_
   */
  id: string;
  /**
   * a string starting with "tot_"
   * @pattern ^tot_
   */
  timeOffTypeId: string;
  timeOffTypeName: string;
  paid: boolean;
  isUnlimited: boolean;
  schedule: "per_hour_worked" | "monthly" | "yearly" | "unlimited";
  unit: "hour" | "day";
  name: string;
  description: string | null;
  hoursWorkedPerChunk: number | null;
  minutesPerChunk: number | null;
  minutesPerPeriod: number | null;
}
export declare namespace Policies {
  export {
    type PolicyTimeOffGetResponse as PolicyTimeOffGetResponse,
    type PolicyTimeOffGet2Response as PolicyTimeOffGet2Response,
    type PolicyTimeOffGetParams as PolicyTimeOffGetParams,
  };
}
