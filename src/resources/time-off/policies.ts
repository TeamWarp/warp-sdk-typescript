// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Policies extends APIResource {
  /**
   * Get a specific time off policy by id
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PolicyRetrieveResponse> {
    return this._client.get(path`/v1/time_off/policies/${id}`, options);
  }

  /**
   * Get the time off policies for your company
   */
  list(
    query: PolicyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PolicyListResponsesCursorPage, PolicyListResponse> {
    return this._client.getAPIList('/v1/time_off/policies', CursorPage<PolicyListResponse>, {
      query,
      ...options,
    });
  }
}

export type PolicyListResponsesCursorPage = CursorPage<PolicyListResponse>;

export interface PolicyRetrieveResponse {
  /**
   * a string starting with "top\_"
   */
  id: string;

  description: string | null;

  hoursWorkedPerChunk: number | null;

  isUnlimited: boolean;

  minutesPerChunk: number | null;

  minutesPerPeriod: number | null;

  name: string;

  paid: boolean;

  schedule: 'per_hour_worked' | 'monthly' | 'yearly' | 'unlimited';

  /**
   * a string starting with "tot\_"
   */
  timeOffTypeId: string;

  timeOffTypeName: string;

  unit: 'hour' | 'day';
}

export interface PolicyListResponse {
  /**
   * a string starting with "top\_"
   */
  id: string;

  description: string | null;

  hoursWorkedPerChunk: number | null;

  isUnlimited: boolean;

  minutesPerChunk: number | null;

  minutesPerPeriod: number | null;

  name: string;

  paid: boolean;

  schedule: 'per_hour_worked' | 'monthly' | 'yearly' | 'unlimited';

  /**
   * a string starting with "tot\_"
   */
  timeOffTypeId: string;

  timeOffTypeName: string;

  unit: 'hour' | 'day';
}

export interface PolicyListParams extends CursorPageParams {
  /**
   * a number less than or equal to 100
   */
  limit?: string;
}

export declare namespace Policies {
  export {
    type PolicyRetrieveResponse as PolicyRetrieveResponse,
    type PolicyListResponse as PolicyListResponse,
    type PolicyListResponsesCursorPage as PolicyListResponsesCursorPage,
    type PolicyListParams as PolicyListParams,
  };
}
