// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Endpoints for workplace management. Create, list, and update workplaces within your company.
 */
export class Workplaces extends APIResource {
  /**
   * Create a new workplace.
   */
  create(body: WorkplaceCreateParams, options?: RequestOptions): APIPromise<WorkplaceCreateResponse> {
    return this._client.post('/v1/workplaces', { body, ...options });
  }

  /**
   * Update an existing workplace.
   */
  update(
    id: string,
    body: WorkplaceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkplaceUpdateResponse> {
    return this._client.patch(path`/v1/workplaces/${id}`, { body, ...options });
  }

  /**
   * List all workplaces for your company.
   */
  list(
    query: WorkplaceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WorkplaceListResponsesCursorPage, WorkplaceListResponse> {
    return this._client.getAPIList('/v1/workplaces', CursorPage<WorkplaceListResponse>, {
      query,
      ...options,
    });
  }
}

export type WorkplaceListResponsesCursorPage = CursorPage<WorkplaceListResponse>;

export interface WorkplaceCreateResponse {
  /**
   * Public workplace identifier
   */
  id: string;

  /**
   * A valid US address
   */
  address: WorkplaceCreateResponse.Address;

  /**
   * a string to be decoded into a Date
   */
  createdAt: string;

  name: string;

  status: 'active' | 'archived';

  type: 'remote' | 'office';
}

export namespace WorkplaceCreateResponse {
  /**
   * A valid US address
   */
  export interface Address {
    city: string;

    country: 'US';

    /**
     * a non empty string
     */
    line1: string;

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

    line2?: string | null;
  }
}

export interface WorkplaceUpdateResponse {
  /**
   * Public workplace identifier
   */
  id: string;

  /**
   * A valid US address
   */
  address: WorkplaceUpdateResponse.Address;

  /**
   * a string to be decoded into a Date
   */
  createdAt: string;

  name: string;

  status: 'active' | 'archived';

  type: 'remote' | 'office';
}

export namespace WorkplaceUpdateResponse {
  /**
   * A valid US address
   */
  export interface Address {
    city: string;

    country: 'US';

    /**
     * a non empty string
     */
    line1: string;

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

    line2?: string | null;
  }
}

export interface WorkplaceListResponse {
  /**
   * Public workplace identifier
   */
  id: string;

  /**
   * A valid US address
   */
  address: WorkplaceListResponse.Address;

  /**
   * a string to be decoded into a Date
   */
  createdAt: string;

  name: string;

  status: 'active' | 'archived';

  type: 'remote' | 'office';
}

export namespace WorkplaceListResponse {
  /**
   * A valid US address
   */
  export interface Address {
    city: string;

    country: 'US';

    /**
     * a non empty string
     */
    line1: string;

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

    line2?: string | null;
  }
}

export interface WorkplaceCreateParams {
  /**
   * A valid US address
   */
  address: WorkplaceCreateParams.Address;

  /**
   * a non empty string
   */
  name: string;

  type: 'remote' | 'office';
}

export namespace WorkplaceCreateParams {
  /**
   * A valid US address
   */
  export interface Address {
    city: string;

    country: 'US';

    /**
     * a non empty string
     */
    line1: string;

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

    line2?: string | null;
  }
}

export interface WorkplaceUpdateParams {
  name?: string;
}

export interface WorkplaceListParams extends CursorPageParams {
  /**
   * a number less than or equal to 100
   */
  limit?: string;
}

export declare namespace Workplaces {
  export {
    type WorkplaceCreateResponse as WorkplaceCreateResponse,
    type WorkplaceUpdateResponse as WorkplaceUpdateResponse,
    type WorkplaceListResponse as WorkplaceListResponse,
    type WorkplaceListResponsesCursorPage as WorkplaceListResponsesCursorPage,
    type WorkplaceCreateParams as WorkplaceCreateParams,
    type WorkplaceUpdateParams as WorkplaceUpdateParams,
    type WorkplaceListParams as WorkplaceListParams,
  };
}
