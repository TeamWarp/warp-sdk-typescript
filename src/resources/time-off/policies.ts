// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';

export class Policies extends APIResource {
  /**
   * Get the time off policies for your company
   *
   * @param {PolicyListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PolicyListResponse>} Success
   *
   * @example
   * ```ts
   * const list = await client.timeOff.policies.list({
   *   limit: 'limit',
   * });
   * ```
   */
  list(query: PolicyListParams, options?: RequestOptions): APIPromise<PolicyListResponse> {
    return this._client.get('/v1/time_off/policies', { query, ...options });
  }

  /**
   * Get a specific time off policy by id
   *
   * @param {string} id
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PolicyGetResponse>} Success
   *
   * @example
   * ```ts
   * const get_ = await client.timeOff.policies.get('id');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<PolicyGetResponse> {
    return this._client.get(__scalarPath`/v1/time_off/policies/${id}`, options);
  }
}

export interface PolicyListParams {
  limit: string | null;
  afterId?: string | null;
  beforeId?: string | null;
}

export interface PolicyListResponse {
  hasMore: boolean;
  count: number;
  data: Array<PolicyListResponse.Data>;
}

export namespace PolicyListResponse {
  export interface Data {
    id: string;
    timeOffTypeId: string;
    timeOffTypeName: string;
    paid: boolean;
    isUnlimited: boolean;
    schedule: 'per_hour_worked' | 'monthly' | 'yearly' | 'unlimited';
    unit: 'hour' | 'day';
    name: string;
    description: string | null;
    hoursWorkedPerChunk: Shared.Union10 | null;
    minutesPerChunk: Shared.Union10 | null;
    minutesPerPeriod: Shared.Union10 | null;
  }
}

export interface PolicyGetResponse {
  id: string;
  timeOffTypeId: string;
  timeOffTypeName: string;
  paid: boolean;
  isUnlimited: boolean;
  schedule: 'per_hour_worked' | 'monthly' | 'yearly' | 'unlimited';
  unit: 'hour' | 'day';
  name: string;
  description: string | null;
  hoursWorkedPerChunk: Shared.Union10 | null;
  minutesPerChunk: Shared.Union10 | null;
  minutesPerPeriod: Shared.Union10 | null;
}
export declare namespace Policies {
  export {
    type PolicyListResponse as PolicyListResponse,
    type PolicyGetResponse as PolicyGetResponse,
    type PolicyListParams as PolicyListParams,
  };
}
