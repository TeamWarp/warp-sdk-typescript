// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';
import type * as OffersAPI from './offers';
import type * as CustomFieldsAPI from './custom-fields';

export class Workplaces extends APIResource {
  /**
   * List all workplaces for your company.
   *
   * @param {WorkplaceListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkplaceListResponse>} Success
   *
   * @example
   * ```ts
   * const list = await client.workplaces.list();
   * ```
   */
  list(
    query: WorkplaceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkplaceListResponse> {
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
   *   name: '',
   *   type: 'remote',
   *   address: {
   *     line1: 'x',
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
   * @param {string} id - Public workplace identifier
   * @param {WorkplaceUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkplaceUpdateResponse>} Success
   *
   * @example
   * ```ts
   * const update = await client.workplaces.update('wkp_1234', {});
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

export interface WorkplaceListParams {
  /**
   * a number less than or equal to 100
   */
  limit?: string;
  /**
   * Public workplace identifier
   * @pattern ^wkp_
   */
  afterId?: string;
  /**
   * Public workplace identifier
   * @pattern ^wkp_
   */
  beforeId?: string;
}

export interface WorkplaceListResponse {
  hasMore: boolean;
  /**
   * an integer
   */
  count: number;
  data: Array<WorkplaceListResponse.Data>;
}

export namespace WorkplaceListResponse {
  export interface Data {
    /**
     * Public workplace identifier
     * @pattern ^wkp_
     */
    id: string;
    name: string;
    type: 'remote' | 'office';
    status: 'active' | 'archived';
    /**
     * A valid US address
     */
    address: Data.Address;
    /**
     * a string to be decoded into a Date
     */
    createdAt: OffersAPI.Date;
  }

  export namespace Data {
    export interface Address {
      /**
       * a non empty string
       * @minLength 1
       */
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
  }
}

export interface WorkplaceCreateParams {
  /**
   * a non empty string
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  name: CustomFieldsAPI.Trimmed;
  type: 'remote' | 'office';
  /**
   * A valid US address
   */
  address: WorkplaceCreateParams.Address;
}

export namespace WorkplaceCreateParams {
  export interface Address {
    /**
     * a non empty string
     * @minLength 1
     */
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
}

export interface WorkplaceCreateResponse {
  /**
   * Public workplace identifier
   * @pattern ^wkp_
   */
  id: string;
  name: string;
  type: 'remote' | 'office';
  status: 'active' | 'archived';
  /**
   * A valid US address
   */
  address: WorkplaceCreateResponse.Address;
  /**
   * a string to be decoded into a Date
   */
  createdAt: OffersAPI.Date;
}

export namespace WorkplaceCreateResponse {
  export interface Address {
    /**
     * a non empty string
     * @minLength 1
     */
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
}

export interface WorkplaceUpdateParams {
  name?: string;
}

export interface WorkplaceUpdateResponse {
  /**
   * Public workplace identifier
   * @pattern ^wkp_
   */
  id: string;
  name: string;
  type: 'remote' | 'office';
  status: 'active' | 'archived';
  /**
   * A valid US address
   */
  address: WorkplaceUpdateResponse.Address;
  /**
   * a string to be decoded into a Date
   */
  createdAt: OffersAPI.Date;
}

export namespace WorkplaceUpdateResponse {
  export interface Address {
    /**
     * a non empty string
     * @minLength 1
     */
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
}
export declare namespace Workplaces {
  export {
    type WorkplaceListResponse as WorkplaceListResponse,
    type WorkplaceCreateResponse as WorkplaceCreateResponse,
    type WorkplaceUpdateResponse as WorkplaceUpdateResponse,
    type WorkplaceListParams as WorkplaceListParams,
    type WorkplaceCreateParams as WorkplaceCreateParams,
    type WorkplaceUpdateParams as WorkplaceUpdateParams,
  };
}
