// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import type * as Shared from '../shared';
import * as PoliciesAPI from './policies';
import { Policies, type PolicyListResponse, type PolicyGetResponse, type PolicyListParams } from './policies';

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
  afterId?: Shared.Union20 | null;
  beforeId?: Shared.Union20 | null;
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
  afterId?: Shared.Union20 | null;
  beforeId?: Shared.Union20 | null;
  policyIds?: Array<string> | null;
  workerIds?: Array<string> | null;
  startDate?: Shared.Union21 | null;
  endDate?: Shared.Union21 | null;
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
    accruedUnlocked: Shared.Union10;
    accruedLocked: Shared.Union10;
    used: Shared.Union10;
    holds: Shared.Union10;
    available: Shared.Union10;
  }
}

export interface TimeOffListRequestsParams {
  limit: string | null;
  afterId?: string | null;
  beforeId?: string | null;
  statuses?: Array<'pending' | 'approved' | 'denied'> | null;
  policyIds?: Array<string> | null;
  workerIds?: Array<string> | null;
  startsOnOrAfter?: Shared.Union21 | null;
  startsBefore?: Shared.Union21 | null;
  endsOnOrAfter?: Shared.Union21 | null;
  endsBefore?: Shared.Union21 | null;
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
    requestedMinutes: Shared.Union10;
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
    type PolicyListResponse as PolicyListResponse,
    type PolicyGetResponse as PolicyGetResponse,
    type PolicyListParams as PolicyListParams,
  };
}
