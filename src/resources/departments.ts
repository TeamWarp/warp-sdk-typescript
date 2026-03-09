// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Endpoints for department management. Create, list, and update departments within your company.
 */
export class Departments extends APIResource {
  /**
   * Create a new department.
   */
  create(body: DepartmentCreateParams, options?: RequestOptions): APIPromise<DepartmentCreateResponse> {
    return this._client.post('/v1/departments', { body, ...options });
  }

  /**
   * Update an existing department.
   */
  update(
    id: string,
    body: DepartmentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DepartmentUpdateResponse> {
    return this._client.patch(path`/v1/departments/${id}`, { body, ...options });
  }

  /**
   * List all departments for your company.
   */
  list(
    query: DepartmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DepartmentListResponsesCursorPage, DepartmentListResponse> {
    return this._client.getAPIList('/v1/departments', CursorPage<DepartmentListResponse>, {
      query,
      ...options,
    });
  }
}

export type DepartmentListResponsesCursorPage = CursorPage<DepartmentListResponse>;

export interface DepartmentCreateResponse {
  /**
   * The tag of the department
   */
  id: string;

  /**
   * a string to be decoded into a Date
   */
  createdAt: string;

  name: string;
}

export interface DepartmentUpdateResponse {
  /**
   * The tag of the department
   */
  id: string;

  /**
   * a string to be decoded into a Date
   */
  createdAt: string;

  name: string;
}

export interface DepartmentListResponse {
  /**
   * The tag of the department
   */
  id: string;

  /**
   * a string to be decoded into a Date
   */
  createdAt: string;

  name: string;
}

export interface DepartmentCreateParams {
  /**
   * a non empty string
   */
  name: string;
}

export interface DepartmentUpdateParams {
  name?: string;
}

export interface DepartmentListParams extends CursorPageParams {
  /**
   * a number less than or equal to 100
   */
  limit?: string;
}

export declare namespace Departments {
  export {
    type DepartmentCreateResponse as DepartmentCreateResponse,
    type DepartmentUpdateResponse as DepartmentUpdateResponse,
    type DepartmentListResponse as DepartmentListResponse,
    type DepartmentListResponsesCursorPage as DepartmentListResponsesCursorPage,
    type DepartmentCreateParams as DepartmentCreateParams,
    type DepartmentUpdateParams as DepartmentUpdateParams,
    type DepartmentListParams as DepartmentListParams,
  };
}
