// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PoliciesAPI from './policies';
import {
  Policies,
  PolicyListParams,
  PolicyListResponse,
  PolicyListResponsesCursorPage,
  PolicyRetrieveResponse,
} from './policies';
import { CursorPage, type CursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class TimeOff extends APIResource {
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);

  /**
   * Time off assignments are mappings between workers and time off policies. Useful
   * for finding out which policies a worker is assigned to, or which workers are
   * assigned to a given policy.
   */
  listAssignments(
    query: TimeOffListAssignmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TimeOffListAssignmentsResponsesCursorPage, TimeOffListAssignmentsResponse> {
    return this._client.getAPIList('/v1/time_off/assignments', CursorPage<TimeOffListAssignmentsResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Get worker remaining time-off balances.
   */
  listBalances(
    query: TimeOffListBalancesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TimeOffListBalancesResponsesCursorPage, TimeOffListBalancesResponse> {
    return this._client.getAPIList('/v1/time_off/balances', CursorPage<TimeOffListBalancesResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Get the time off requests that workers in your company have made.
   */
  listRequests(
    query: TimeOffListRequestsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TimeOffListRequestsResponsesCursorPage, TimeOffListRequestsResponse> {
    return this._client.getAPIList('/v1/time_off/requests', CursorPage<TimeOffListRequestsResponse>, {
      query,
      ...options,
    });
  }
}

export type TimeOffListAssignmentsResponsesCursorPage = CursorPage<TimeOffListAssignmentsResponse>;

export type TimeOffListBalancesResponsesCursorPage = CursorPage<TimeOffListBalancesResponse>;

export type TimeOffListRequestsResponsesCursorPage = CursorPage<TimeOffListRequestsResponse>;

export interface TimeOffListAssignmentsResponse {
  id: string;

  /**
   * a string to be decoded into a Date
   */
  assignedAt: string;

  /**
   * a string starting with "top\_"
   */
  policyId: string;

  /**
   * The id of the worker.
   */
  workerId: string;
}

export interface TimeOffListBalancesResponse {
  id: string;

  accruedLocked: number;

  accruedUnlocked: number;

  available: number;

  holds: number;

  legacyWorkerId: string;

  /**
   * a string starting with "top\_"
   */
  policyId: string;

  used: number;
}

export interface TimeOffListRequestsResponse {
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

  /**
   * a string starting with "top\_"
   */
  timeOffPolicyId: string;

  /**
   * The time zone that the worker is requesting time off in.
   */
  timeZone: string | null;

  /**
   * The id of the worker.
   */
  workerId: string;
}

export interface TimeOffListAssignmentsParams extends CursorPageParams {
  /**
   * a number less than or equal to 100
   */
  limit?: string;

  policyIds?: Array<string>;

  workerIds?: Array<string>;
}

export interface TimeOffListBalancesParams extends CursorPageParams {
  /**
   * a string to be decoded into a Date
   */
  endDate?: string;

  /**
   * a number less than or equal to 100
   */
  limit?: string;

  policyIds?: Array<string>;

  /**
   * a string to be decoded into a Date
   */
  startDate?: string;

  workerIds?: Array<string>;
}

export interface TimeOffListRequestsParams extends CursorPageParams {
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
    type TimeOffListAssignmentsResponsesCursorPage as TimeOffListAssignmentsResponsesCursorPage,
    type TimeOffListBalancesResponsesCursorPage as TimeOffListBalancesResponsesCursorPage,
    type TimeOffListRequestsResponsesCursorPage as TimeOffListRequestsResponsesCursorPage,
    type TimeOffListAssignmentsParams as TimeOffListAssignmentsParams,
    type TimeOffListBalancesParams as TimeOffListBalancesParams,
    type TimeOffListRequestsParams as TimeOffListRequestsParams,
  };

  export {
    Policies as Policies,
    type PolicyRetrieveResponse as PolicyRetrieveResponse,
    type PolicyListResponse as PolicyListResponse,
    type PolicyListResponsesCursorPage as PolicyListResponsesCursorPage,
    type PolicyListParams as PolicyListParams,
  };
}
