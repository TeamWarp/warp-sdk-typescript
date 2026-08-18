// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Policies extends APIResource {
  /**
   * Get the time off policies for your company
   *
   * @param {PolicyTimeOffGetParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PolicyTimeOffGetResponse>} Success
   *
   * @example
   * ```ts
   * const timeOffGet = await client.timeOff.policies.timeOffGet({
   *   limit: 'limit',
   * });
   * ```
   */
  timeOffGet(query: PolicyTimeOffGetParams, options?: RequestOptions): APIPromise<PolicyTimeOffGetResponse> {
    return this._client.get('/v1/time_off/policies', { query, ...options });
  }

  /**
   * Get a specific time off policy by id
   *
   * @param {string} id
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PolicyTimeOffGet2Response>} Success
   *
   * @example
   * ```ts
   * const timeOffGet2 = await client.timeOff.policies.timeOffGet2('id');
   * ```
   */
  timeOffGet2(id: string, options?: RequestOptions): APIPromise<PolicyTimeOffGet2Response> {
    return this._client.get(__scalarPath`/v1/time_off/policies/${id}`, options);
  }
}

export interface PolicyTimeOffGetParams {
  limit: string | null;
  afterId?: string | null;
  beforeId?: string | null;
}

export interface PolicyTimeOffGetResponse {
  hasMore: boolean;
  count: number;
  data: Array<PolicyTimeOffGetResponse.Data>;
}

export namespace PolicyTimeOffGetResponse {
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
    hoursWorkedPerChunk: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    minutesPerChunk: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    minutesPerPeriod: number | 'Infinity' | '-Infinity' | 'NaN' | null;
  }
}

export interface PolicyTimeOffGet2Response {
  id: string;
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
    type PolicyTimeOffGetResponse as PolicyTimeOffGetResponse,
    type PolicyTimeOffGet2Response as PolicyTimeOffGet2Response,
    type PolicyTimeOffGetParams as PolicyTimeOffGetParams,
  };
}
