// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';
import type * as Shared from './shared';

export class Departments extends APIResource {
  /**
   * List all departments for your company.
   *
   * @param {DepartmentListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DepartmentListResponse>} Success
   *
   * @example
   * ```ts
   * const department = await client.departments.list({
   *   limit: 'limit',
   * });
   * ```
   */
  list(query: DepartmentListParams, options?: RequestOptions): APIPromise<DepartmentListResponse> {
    return this._client.get('/v1/departments', { query, ...options });
  }

  /**
   * Create a new department.
   *
   * @param {DepartmentCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DepartmentCreateResponse>} Success
   *
   * @example
   * ```ts
   * const department = await client.departments.create({
   *   name: 'x',
   * });
   * ```
   */
  create(body: DepartmentCreateParams, options?: RequestOptions): APIPromise<DepartmentCreateResponse> {
    return this._client.post('/v1/departments', { body, ...options });
  }

  /**
   * Update an existing department.
   *
   * @param {string} id
   * @param {DepartmentUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DepartmentUpdateResponse>} Success
   *
   * @example
   * ```ts
   * const department = await client.departments.update('dpt_1234', {});
   * ```
   */
  update(
    id: string,
    body: DepartmentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DepartmentUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/departments/${id}`, { body, ...options });
  }
}

export interface DepartmentListParams {
  limit: string | null;
  /**
   * @pattern ^dpt_
   */
  afterId?: Shared.Union12 | null;
  /**
   * @pattern ^dpt_
   */
  beforeId?: Shared.Union12 | null;
}

export interface DepartmentListResponse {
  hasMore: boolean;
  count: number;
  data: Array<DepartmentListResponse.Data>;
}

export namespace DepartmentListResponse {
  export interface Data {
    /**
     * @pattern ^dpt_
     */
    id: string;
    name: string;
    createdAt: string;
  }
}

export interface DepartmentCreateParams {
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  name: string;
}

export interface DepartmentCreateResponse {
  /**
   * @pattern ^dpt_
   */
  id: string;
  name: string;
  createdAt: string;
}

export interface DepartmentUpdateParams {
  name?: string | null;
}

export interface DepartmentUpdateResponse {
  /**
   * @pattern ^dpt_
   */
  id: string;
  name: string;
  createdAt: string;
}
export declare namespace Departments {
  export {
    type DepartmentListResponse as DepartmentListResponse,
    type DepartmentCreateResponse as DepartmentCreateResponse,
    type DepartmentUpdateResponse as DepartmentUpdateResponse,
    type DepartmentListParams as DepartmentListParams,
    type DepartmentCreateParams as DepartmentCreateParams,
    type DepartmentUpdateParams as DepartmentUpdateParams,
  };
}
