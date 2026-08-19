// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';
import type * as Shared from './shared';

export class Workplaces extends APIResource {
  /**
   * List all workplaces for your company.
   *
   * @param {WorkplaceListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkplaceListResponse>} Success
   *
   * @example
   * ```ts
   * const list = await client.workplaces.list({
   *   limit: 'limit',
   * });
   * ```
   */
  list(query: WorkplaceListParams, options?: RequestOptions): APIPromise<WorkplaceListResponse> {
    return this._client.get('/v1/workplaces', { query, ...options });
  }

  /**
   * Create a new workplace.
   *
   * @param {WorkplaceCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkplaceCreateResponse>} Success
   *
   * @example
   * ```ts
   * const create = await client.workplaces.create({
   *   name: {},
   *   type: 'remote',
   *   address: {
   *     line1: {},
   *     city: '',
   *     postalCode: '',
   *     state: 'AL',
   *     country: 'US',
   *   },
   * });
   * ```
   */
  create(body: WorkplaceCreateParams, options?: RequestOptions): APIPromise<WorkplaceCreateResponse> {
    return this._client.post('/v1/workplaces', { body, ...options });
  }

  /**
   * Update an existing workplace.
   *
   * @param {string} id
   * @param {WorkplaceUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkplaceUpdateResponse>} Success
   *
   * @example
   * ```ts
   * const update = await client.workplaces.update('id', {});
   * ```
   */
  update(
    id: string,
    body: WorkplaceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkplaceUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/workplaces/${id}`, { body, ...options });
  }
}

/**
 * A valid US address
 */
export interface Objects11 {
  line1: string;
  city: string;
  postalCode: string;
  state:
    | 'AL'
    | 'AK'
    | 'AZ'
    | 'AR'
    | 'CA'
    | 'CO'
    | 'CT'
    | 'DC'
    | 'DE'
    | 'FL'
    | 'GA'
    | 'HI'
    | 'ID'
    | 'IL'
    | 'IN'
    | 'IA'
    | 'KS'
    | 'KY'
    | 'LA'
    | 'ME'
    | 'MD'
    | 'MA'
    | 'MI'
    | 'MN'
    | 'MS'
    | 'MO'
    | 'MT'
    | 'NE'
    | 'NV'
    | 'NH'
    | 'NJ'
    | 'NM'
    | 'NY'
    | 'NC'
    | 'ND'
    | 'OH'
    | 'OK'
    | 'OR'
    | 'PA'
    | 'RI'
    | 'SC'
    | 'SD'
    | 'TN'
    | 'TX'
    | 'UT'
    | 'VT'
    | 'VA'
    | 'WA'
    | 'WV'
    | 'WI'
    | 'WY';
  country: 'US';
  line2?: string | null;
}

export interface WorkplaceListParams {
  limit: string | null;
  afterId?: Shared.Union33 | null;
  beforeId?: Shared.Union33 | null;
}

export interface WorkplaceListResponse {
  hasMore: boolean;
  count: number;
  data: Array<WorkplaceListResponse.Data>;
}

export namespace WorkplaceListResponse {
  export interface Data {
    id: string;
    name: string;
    type: Shared.Union34;
    status: Shared.Union35;
    /**
     * A valid US address
     */
    address: Objects11;
    createdAt: string;
  }
}

export interface WorkplaceCreateParams {
  name: string;
  type: 'remote' | 'office';
  /**
   * A valid US address
   */
  address: Objects11;
}

export interface WorkplaceCreateResponse {
  id: string;
  name: string;
  type: Shared.Union34;
  status: Shared.Union35;
  /**
   * A valid US address
   */
  address: Objects11;
  createdAt: string;
}

export interface WorkplaceUpdateParams {
  name?: string | null;
}

export interface WorkplaceUpdateResponse {
  id: string;
  name: string;
  type: Shared.Union34;
  status: Shared.Union35;
  /**
   * A valid US address
   */
  address: Objects11;
  createdAt: string;
}
export declare namespace Workplaces {
  export {
    type Objects11 as Objects11,
    type WorkplaceListResponse as WorkplaceListResponse,
    type WorkplaceCreateResponse as WorkplaceCreateResponse,
    type WorkplaceUpdateResponse as WorkplaceUpdateResponse,
    type WorkplaceListParams as WorkplaceListParams,
    type WorkplaceCreateParams as WorkplaceCreateParams,
    type WorkplaceUpdateParams as WorkplaceUpdateParams,
  };
}
