// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";
import type * as OffersAPI from "./offers";
import type * as CustomWorkerFieldsAPI from "./custom-worker-fields";

export class Departments extends APIResource {
  /**
   * List all departments for your company.
   *
   * @param {DepartmentListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DepartmentListResponse>} Success
   *
   * @example
   * ```ts
   * const list = await client.departments.list();
   * ```
   */
  list(query: DepartmentListParams | null | undefined = {}, options?: RequestOptions): APIPromise<DepartmentListResponse> {
    return this._client.get("/v1/departments", { query, ...options });
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
   * const create = await client.departments.create({
   *   name: "",
   * });
   * ```
   */
  create(body: DepartmentCreateParams, options?: RequestOptions): APIPromise<DepartmentCreateResponse> {
    return this._client.post("/v1/departments", { body, ...options });
  }

  /**
   * Update an existing department.
   *
   * @param {string} id - The unique public id of the department
   * @param {DepartmentUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DepartmentUpdateResponse>} Success
   *
   * @example
   * ```ts
   * const update = await client.departments.update("dpt_1234", {});
   * ```
   */
  update(id: string, body: DepartmentUpdateParams, options?: RequestOptions): APIPromise<DepartmentUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/departments/${id}`, { body, ...options });
  }
}

export interface DepartmentListParams {
  /**
   * a number less than or equal to 100
   */
  limit?: string;
  /**
   * The unique public id of the department
   * @pattern ^dpt_
   */
  afterId?: string;
  /**
   * The unique public id of the department
   * @pattern ^dpt_
   */
  beforeId?: string;
}

export interface DepartmentListResponse {
  hasMore: boolean;
  /**
   * an integer
   */
  count: number;
  data: Array<DepartmentListResponse.Data>;
}

export namespace DepartmentListResponse {
  export interface Data {
    /**
     * The unique public id of the department
     * @pattern ^dpt_
     */
    id: string;
    name: string;
    /**
     * a string to be decoded into a Date
     */
    createdAt: OffersAPI.Date;
  }
}

export interface DepartmentCreateParams {
  /**
   * a non empty string
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  name: CustomWorkerFieldsAPI.Trimmed;
}

export interface DepartmentCreateResponse {
  /**
   * The unique public id of the department
   * @pattern ^dpt_
   */
  id: string;
  name: string;
  /**
   * a string to be decoded into a Date
   */
  createdAt: OffersAPI.Date;
}

export interface DepartmentUpdateParams {
  name?: string;
}

export interface DepartmentUpdateResponse {
  /**
   * The unique public id of the department
   * @pattern ^dpt_
   */
  id: string;
  name: string;
  /**
   * a string to be decoded into a Date
   */
  createdAt: OffersAPI.Date;
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
