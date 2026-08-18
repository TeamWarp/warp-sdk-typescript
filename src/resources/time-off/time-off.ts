// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import * as PoliciesAPI from './policies';
import {
  Policies,
  type PolicyTimeOffGetResponse,
  type PolicyTimeOffGet2Response,
  type PolicyTimeOffGetParams,
} from './policies';

export class TimeOff extends APIResource {
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);

  /**
   * Time off assignments are mappings between workers and time off policies. Useful for finding out which policies a worker is assigned to, or which workers are assigned to a given policy.
   *
   * @param {TimeOffListAssignmentsParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TimeOffListAssignmentsResponse>} Success
   *
   * @example
   * ```ts
   * const listAssignments = await client.timeOff.listAssignments({
   *   limit: 'limit',
   * });
   * ```
   */
  listAssignments(
    query: TimeOffListAssignmentsParams,
    options?: RequestOptions,
  ): APIPromise<TimeOffListAssignmentsResponse> {
    return this._client.get('/v1/time_off/assignments', { query, ...options });
  }

  /**
   * Get worker remaining time-off balances.
   *
   * @param {TimeOffListBalancesParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TimeOffListBalancesResponse>} Success
   *
   * @example
   * ```ts
   * const listBalances = await client.timeOff.listBalances({
   *   limit: 'limit',
   * });
   * ```
   */
  listBalances(
    query: TimeOffListBalancesParams,
    options?: RequestOptions,
  ): APIPromise<TimeOffListBalancesResponse> {
    return this._client.get('/v1/time_off/balances', { query, ...options });
  }

  /**
   * Get the time off requests that workers in your company have made.
   *
   * @param {TimeOffListRequestsParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TimeOffListRequestsResponse>} Success
   *
   * @example
   * ```ts
   * const listRequests = await client.timeOff.listRequests({
   *   limit: 'limit',
   * });
   * ```
   */
  listRequests(
    query: TimeOffListRequestsParams,
    options?: RequestOptions,
  ): APIPromise<TimeOffListRequestsResponse> {
    return this._client.get('/v1/time_off/requests', { query, ...options });
  }
}

export interface TimeOffListAssignmentsParams {
  limit: string | null;
  afterId?: string | null;
  beforeId?: string | null;
  policyIds?: Array<string> | null;
  workerIds?: Array<string> | null;
}

export interface TimeOffListAssignmentsResponse {
  hasMore: boolean;
  count: number;
  data: Array<TimeOffListAssignmentsResponse.Data>;
}

export namespace TimeOffListAssignmentsResponse {
  export interface Data {
    id: string;
    policyId: string;
    workerId: string;
    assignedAt: string;
  }
}

export interface TimeOffListBalancesParams {
  limit: string | null;
  afterId?: string | null;
  beforeId?: string | null;
  policyIds?: Array<string> | null;
  workerIds?: Array<string> | null;
  startDate?: string | null;
  endDate?: string | null;
}

export interface TimeOffListBalancesResponse {
  hasMore: boolean;
  count: number;
  data: Array<TimeOffListBalancesResponse.Data>;
}

export namespace TimeOffListBalancesResponse {
  export interface Data {
    id: string;
    policyId: string;
    legacyWorkerId: string;
    accruedUnlocked: number | 'Infinity' | '-Infinity' | 'NaN';
    accruedLocked: number | 'Infinity' | '-Infinity' | 'NaN';
    used: number | 'Infinity' | '-Infinity' | 'NaN';
    holds: number | 'Infinity' | '-Infinity' | 'NaN';
    available: number | 'Infinity' | '-Infinity' | 'NaN';
  }
}

export interface TimeOffListRequestsParams {
  limit: string | null;
  afterId?: string | null;
  beforeId?: string | null;
  statuses?: Array<'pending' | 'approved' | 'denied'> | null;
  policyIds?: Array<string> | null;
  workerIds?: Array<string> | null;
  startsOnOrAfter?: string | null;
  startsBefore?: string | null;
  endsOnOrAfter?: string | null;
  endsBefore?: string | null;
}

export interface TimeOffListRequestsResponse {
  hasMore: boolean;
  count: number;
  data: Array<TimeOffListRequestsResponse.Data>;
}

export namespace TimeOffListRequestsResponse {
  export interface Data {
    id: string;
    timeOffPolicyId: string;
    workerId: string;
    status: 'pending' | 'approved' | 'denied';
    startAt: string;
    startRangeType: 'date' | 'datetime';
    endAt: string;
    endRangeType: 'date' | 'datetime';
    reason: string | null;
    createdAt: string;
    requestedMinutes: number | 'Infinity' | '-Infinity' | 'NaN';
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
