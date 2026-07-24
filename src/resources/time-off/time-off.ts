// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import type * as OffersAPI from "../offers";
import * as PoliciesAPI from "./policies";
import { Policies, type PolicyTimeOffGetResponse, type PolicyTimeOffGet2Response, type PolicyTimeOffGetParams } from "./policies";

export class TimeOff extends APIResource {
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);

  /**
   * Time off assignments are mappings between workers and time off policies. Useful for finding out which policies a worker is assigned to, or which workers are assigned to a given policy.
   *
   * @param {TimeOffListAssignmentsParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TimeOffListAssignmentsResponse>} Success
   *
   * @example
   * ```ts
   * const listAssignments = await client.timeOff.listAssignments();
   * ```
   */
  listAssignments(params: TimeOffListAssignmentsParams | null | undefined = {}, options?: RequestOptions): APIPromise<TimeOffListAssignmentsResponse> {
    const { limit, afterId, beforeId, policyIds, workerIds } = params ?? {};
    return this._client.get("/v1/time_off/assignments", { query: { limit: limit, afterId: afterId, beforeId: beforeId, policyIds: policyIds, workerIds: workerIds }, ...options });
  }

  /**
   * Get worker remaining time-off balances.
   *
   * @param {TimeOffListBalancesParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TimeOffListBalancesResponse>} Success
   *
   * @example
   * ```ts
   * const listBalances = await client.timeOff.listBalances();
   * ```
   */
  listBalances(params: TimeOffListBalancesParams | null | undefined = {}, options?: RequestOptions): APIPromise<TimeOffListBalancesResponse> {
    const { limit, afterId, beforeId, policyIds, workerIds, startDate, endDate } = params ?? {};
    return this._client.get("/v1/time_off/balances", { query: { limit: limit, afterId: afterId, beforeId: beforeId, policyIds: policyIds, workerIds: workerIds, startDate: startDate, endDate: endDate }, ...options });
  }

  /**
   * Get the time off requests that workers in your company have made.
   *
   * @param {TimeOffListRequestsParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TimeOffListRequestsResponse>} Success
   *
   * @example
   * ```ts
   * const listRequests = await client.timeOff.listRequests();
   * ```
   */
  listRequests(params: TimeOffListRequestsParams | null | undefined = {}, options?: RequestOptions): APIPromise<TimeOffListRequestsResponse> {
    const { limit, afterId, beforeId, statuses, policyIds, workerIds, startsOnOrAfter, startsBefore, endsOnOrAfter, endsBefore } = params ?? {};
    return this._client.get("/v1/time_off/requests", { query: { limit: limit, afterId: afterId, beforeId: beforeId, statuses: statuses, policyIds: policyIds, workerIds: workerIds, startsOnOrAfter: startsOnOrAfter, startsBefore: startsBefore, endsOnOrAfter: endsOnOrAfter, endsBefore: endsBefore }, ...options });
  }
}

export interface TimeOffListAssignmentsParams {
  /**
   * a number less than or equal to 100
   */
  limit?: string;
  afterId?: string;
  beforeId?: string;
  policyIds?: Array<string>;
  workerIds?: Array<string>;
}

export interface TimeOffListAssignmentsResponse {
  hasMore: boolean;
  /**
   * an integer
   */
  count: number;
  data: Array<TimeOffListAssignmentsResponse.Data>;
}

export namespace TimeOffListAssignmentsResponse {
  export interface Data {
    id: string;
    /**
     * a string starting with "top_"
     * @pattern ^top_
     */
    policyId: string;
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    workerId: string;
    /**
     * a string to be decoded into a Date
     */
    assignedAt: OffersAPI.Date;
  }
}

export interface TimeOffListBalancesParams {
  /**
   * a number less than or equal to 100
   */
  limit?: string;
  afterId?: string;
  beforeId?: string;
  policyIds?: Array<string>;
  workerIds?: Array<string>;
  /**
   * a string to be decoded into a Date
   */
  startDate?: OffersAPI.Date;
  /**
   * a string to be decoded into a Date
   */
  endDate?: OffersAPI.Date;
}

export interface TimeOffListBalancesResponse {
  hasMore: boolean;
  /**
   * an integer
   */
  count: number;
  data: Array<TimeOffListBalancesResponse.Data>;
}

export namespace TimeOffListBalancesResponse {
  export interface Data {
    id: string;
    /**
     * a string starting with "top_"
     * @pattern ^top_
     */
    policyId: string;
    legacyWorkerId: string;
    accruedUnlocked: number;
    accruedLocked: number;
    used: number;
    holds: number;
    available: number;
  }
}

export interface TimeOffListRequestsParams {
  /**
   * a number less than or equal to 100
   */
  limit?: string;
  afterId?: string;
  beforeId?: string;
  statuses?: Array<"pending" | "approved" | "denied">;
  policyIds?: Array<string>;
  workerIds?: Array<string>;
  /**
   * a string to be decoded into a Date
   */
  startsOnOrAfter?: OffersAPI.Date;
  /**
   * a string to be decoded into a Date
   */
  startsBefore?: OffersAPI.Date;
  /**
   * a string to be decoded into a Date
   */
  endsOnOrAfter?: OffersAPI.Date;
  /**
   * a string to be decoded into a Date
   */
  endsBefore?: OffersAPI.Date;
}

export interface TimeOffListRequestsResponse {
  hasMore: boolean;
  /**
   * an integer
   */
  count: number;
  data: Array<TimeOffListRequestsResponse.Data>;
}

export namespace TimeOffListRequestsResponse {
  export interface Data {
    id: string;
    /**
     * a string starting with "top_"
     * @pattern ^top_
     */
    timeOffPolicyId: string;
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    workerId: string;
    status: "pending" | "approved" | "denied";
    /**
     * a string to be decoded into a Date
     */
    startAt: OffersAPI.Date;
    startRangeType: "date" | "datetime";
    /**
     * a string to be decoded into a Date
     */
    endAt: OffersAPI.Date;
    endRangeType: "date" | "datetime";
    reason: string | null;
    /**
     * a string to be decoded into a Date
     */
    createdAt: OffersAPI.Date;
    requestedMinutes: number;
    /**
     * The time zone that the worker is requesting time off in.
     */
    timeZone: string | null;
  }
}
TimeOff.Policies = Policies;

export declare namespace TimeOff {
  export {
    type TimeOffListAssignmentsResponse as TimeOffListAssignmentsResponse,
    type TimeOffListBalancesResponse as TimeOffListBalancesResponse,
    type TimeOffListRequestsResponse as TimeOffListRequestsResponse,
    type TimeOffListAssignmentsParams as TimeOffListAssignmentsParams,
    type TimeOffListBalancesParams as TimeOffListBalancesParams,
    type TimeOffListRequestsParams as TimeOffListRequestsParams,
  };

  export {
    Policies as Policies,
    type PolicyTimeOffGetResponse as PolicyTimeOffGetResponse,
    type PolicyTimeOffGet2Response as PolicyTimeOffGet2Response,
    type PolicyTimeOffGetParams as PolicyTimeOffGetParams,
  };
}
