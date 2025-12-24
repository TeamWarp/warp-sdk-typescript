// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Policies extends APIResource {
  retrieve(id: string, options?: RequestOptions): APIPromise<PolicyRetrieveResponse> {
    return this._client.get(path`/v1/time_off/policies/${id}`, options);
  }

  list(
    query: PolicyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PolicyListResponse> {
    return this._client.get('/v1/time_off/policies', { query, ...options });
  }
}

export interface PolicyRetrieveResponse {
  id: string;

  description: string | null;

  hoursWorkedPerChunk: number | null;

  isUnlimited: boolean;

  minutesPerChunk: number | null;

  minutesPerPeriod: number | null;

  name: string;

  paid: boolean;

  schedule: 'per_hour_worked' | 'monthly' | 'yearly' | 'unlimited';

  timeOffTypeId: string;

  timeOffTypeName: string;

  unit: 'hour' | 'day';
}

export interface PolicyListResponse {
  data: Array<PolicyListResponse.Data>;

  hasMore: boolean;
}

export namespace PolicyListResponse {
  export interface Data {
    id: string;

    description: string | null;

    hoursWorkedPerChunk: number | null;

    isUnlimited: boolean;

    minutesPerChunk: number | null;

    minutesPerPeriod: number | null;

    name: string;

    paid: boolean;

    schedule: 'per_hour_worked' | 'monthly' | 'yearly' | 'unlimited';

    timeOffTypeId: string;

    timeOffTypeName: string;

    unit: 'hour' | 'day';
  }
}

export interface PolicyListParams {
  afterId?: string;

  beforeId?: string;

  /**
   * a number less than or equal to 100
   */
  limit?: string;
}

export declare namespace Policies {
  export {
    type PolicyRetrieveResponse as PolicyRetrieveResponse,
    type PolicyListResponse as PolicyListResponse,
    type PolicyListParams as PolicyListParams,
  };
}
