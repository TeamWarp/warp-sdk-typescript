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
   * const policy = await client.timeOff.policies.list({
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
   * const policy = await client.timeOff.policies.get('top_1234');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<PolicyGetResponse> {
    return this._client.get(__scalarPath`/v1/time_off/policies/${id}`, options);
  }
}

export interface PolicyListParams {
  limit: string | null;
  /**
   * @pattern ^top_
   */
  afterId?: string | null;
  /**
   * @pattern ^top_
   */
  beforeId?: string | null;
}

export interface PolicyListResponse {
  hasMore: boolean;
  count: number;
  data: Array<PolicyListResponse.Data>;
}

export namespace PolicyListResponse {
  export interface Data {
    /**
     * @pattern ^top_
     */
    id: string;
    /**
     * @pattern ^tot_
     */
    timeOffTypeId: string;
    timeOffTypeName: string;
    paid: boolean;
    isUnlimited: boolean;
    schedule: 'per_hour_worked' | 'monthly' | 'yearly' | 'unlimited';
    unit: 'hour' | 'day';
    name: string;
    description: string | null;
    hoursWorkedPerChunk: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    minutesPerChunk: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    minutesPerPeriod: number | 'Infinity' | '-Infinity' | 'NaN' | null;
  }
}

export interface PolicyGetResponse {
  /**
   * @pattern ^top_
   */
  id: string;
  /**
   * @pattern ^tot_
   */
  timeOffTypeId: string;
  timeOffTypeName: string;
  paid: boolean;
  isUnlimited: boolean;
  schedule: 'per_hour_worked' | 'monthly' | 'yearly' | 'unlimited';
  unit: 'hour' | 'day';
  name: string;
  description: string | null;
  hoursWorkedPerChunk: number | 'Infinity' | '-Infinity' | 'NaN' | null;
  minutesPerChunk: number | 'Infinity' | '-Infinity' | 'NaN' | null;
  minutesPerPeriod: number | 'Infinity' | '-Infinity' | 'NaN' | null;
}
export declare namespace Policies {
  export {
    type PolicyListResponse as PolicyListResponse,
    type PolicyGetResponse as PolicyGetResponse,
    type PolicyListParams as PolicyListParams,
  };
}
