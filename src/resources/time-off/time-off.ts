// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PoliciesAPI from './policies';
import { Policies, PolicyListResponse, PolicyRetrieveResponse } from './policies';
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

export type TimeOffListAssignmentsResponse =
  Array<TimeOffListAssignmentsResponse.TimeOffListAssignmentsResponseItem>;

export namespace TimeOffListAssignmentsResponse {
  export interface TimeOffListAssignmentsResponseItem {
    /**
     * a string to be decoded into a Date
     */
    assignedAt: string;

    legacyWorkerId: string;

    policyId: string;
  }
}

export type TimeOffListBalancesResponse = Array<TimeOffListBalancesResponse.TimeOffListBalancesResponseItem>;

export namespace TimeOffListBalancesResponse {
  export interface TimeOffListBalancesResponseItem {
    accruedLocked: number;

    accruedUnlocked: number;

    available: number;

    holds: number;

    legacyWorkerId: string;

    policyId: string;

    used: number;
  }
}

export type TimeOffListRequestsResponse = Array<TimeOffListRequestsResponse.TimeOffListRequestsResponseItem>;

export namespace TimeOffListRequestsResponse {
  export interface TimeOffListRequestsResponseItem {
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
  /**
   * a string to be decoded into a Date
   */
  endsBefore?: string;

  /**
   * a string to be decoded into a Date
   */
  endsOnOrAfter?: string;

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
  };
}
