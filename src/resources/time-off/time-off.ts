// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PoliciesAPI from './policies';
import { Policies, PolicyListParams, PolicyListResponse, PolicyRetrieveResponse } from './policies';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class TimeOff extends APIResource {
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);

  listAssignments(
    query: TimeOffListAssignmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeOffListAssignmentsResponse> {
    return this._client.get('/v1/time_off/assignments', { query, ...options });
  }

  listBalances(
    query: TimeOffListBalancesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeOffListBalancesResponse> {
    return this._client.get('/v1/time_off/balances', { query, ...options });
  }

  listRequests(
    query: TimeOffListRequestsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeOffListRequestsResponse> {
    return this._client.get('/v1/time_off/requests', { query, ...options });
  }
}

export interface TimeOffListAssignmentsResponse {
  data: Array<TimeOffListAssignmentsResponse.Data>;

  hasMore: boolean;
}

export namespace TimeOffListAssignmentsResponse {
  export interface Data {
    id: string;

    /**
     * a string to be decoded into a Date
     */
    assignedAt: string;

    policyId: string;

    /**
     * The id of the worker.
     */
    workerId: string;
  }
}

export interface TimeOffListBalancesResponse {
  data: Array<TimeOffListBalancesResponse.Data>;

  hasMore: boolean;
}

export namespace TimeOffListBalancesResponse {
  export interface Data {
    accruedLocked: number;

    accruedUnlocked: number;

    available: number;

    holds: number;

    legacyWorkerId: string;

    policyId: string;

    used: number;
  }
}

export interface TimeOffListRequestsResponse {
  data: Array<TimeOffListRequestsResponse.Data>;

  hasMore: boolean;
}

export namespace TimeOffListRequestsResponse {
  export interface Data {
    id: string;

    /**
     * a string to be decoded into a Date
     */
    createdAt: string;

    /**
     * a string to be decoded into a Date
     */
    endAt: string;

    reason: string | null;

    requestedMinutes: number;

    /**
     * a string to be decoded into a Date
     */
    startAt: string;

    status: 'pending' | 'approved' | 'denied';

    timeOffPolicyId: string;

    /**
     * The id of the worker.
     */
    workerId: string;
  }
}

export interface TimeOffListAssignmentsParams {
  afterId?: string;

  beforeId?: string;

  /**
   * a number less than or equal to 100
   */
  limit?: string;

  policyIds?: Array<string>;

  workerIds?: Array<string>;
}

export interface TimeOffListBalancesParams {
  /**
   * a string to be decoded into a Date
   */
  endDate?: string;

  policyIds?: Array<string>;

  /**
   * a string to be decoded into a Date
   */
  startDate?: string;

  workerIds?: Array<string>;
}

export interface TimeOffListRequestsParams {
  afterId?: string;

  beforeId?: string;

  /**
   * a string to be decoded into a Date
   */
  endsBefore?: string;

  /**
   * a string to be decoded into a Date
   */
  endsOnOrAfter?: string;

  /**
   * a number less than or equal to 100
   */
  limit?: string;

  policyIds?: Array<string>;

  /**
   * a string to be decoded into a Date
   */
  startsBefore?: string;

  /**
   * a string to be decoded into a Date
   */
  startsOnOrAfter?: string;

  statuses?: Array<'pending' | 'approved' | 'denied'>;

  workerIds?: Array<string>;
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
    type PolicyRetrieveResponse as PolicyRetrieveResponse,
    type PolicyListResponse as PolicyListResponse,
    type PolicyListParams as PolicyListParams,
  };
}
