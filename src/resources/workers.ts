// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Workers extends APIResource {
  retrieve(id: string, options?: RequestOptions): APIPromise<WorkerRetrieveResponse> {
    return this._client.get(path`/v1/workers/${id}`, options);
  }

  list(
    query: WorkerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkerListResponse> {
    return this._client.get('/v1/workers', { query, ...options });
  }
}

export interface WorkerRetrieveResponse {
  /**
   * The id of the worker.
   */
  id: string;

  businessName: string | null;

  /**
   * The "ui" name of a worker. If it's a business contractor business name is used.
   * Otherwise we default to preferred name, then first-last.
   */
  displayName: string;

  /**
   * An email with a reasonably valid regex (shamelessly taken from zod)
   */
  email: string;

  /**
   * A date string in the form YYYY-MM-DD
   */
  endDate: string | null;

  firstName: string;

  isBusiness: boolean | null;

  lastName: string;

  position: string;

  preferredName: string | null;

  /**
   * A date string in the form YYYY-MM-DD
   */
  startDate: string;

  status: 'onboarding' | 'active' | 'offboarding' | 'inactive';

  type: 'employee' | 'contractor';

  /**
   * An email with a reasonably valid regex (shamelessly taken from zod)
   */
  workEmail: string | null;
}

export interface WorkerListResponse {
  data: Array<WorkerListResponse.Data>;

  hasMore: boolean;
}

export namespace WorkerListResponse {
  export interface Data {
    /**
     * The id of the worker.
     */
    id: string;

    businessName: string | null;

    /**
     * The "ui" name of a worker. If it's a business contractor business name is used.
     * Otherwise we default to preferred name, then first-last.
     */
    displayName: string;

    /**
     * An email with a reasonably valid regex (shamelessly taken from zod)
     */
    email: string;

    /**
     * A date string in the form YYYY-MM-DD
     */
    endDate: string | null;

    firstName: string;

    isBusiness: boolean | null;

    lastName: string;

    position: string;

    preferredName: string | null;

    /**
     * A date string in the form YYYY-MM-DD
     */
    startDate: string;

    status: 'onboarding' | 'active' | 'offboarding' | 'inactive';

    type: 'employee' | 'contractor';

    /**
     * An email with a reasonably valid regex (shamelessly taken from zod)
     */
    workEmail: string | null;
  }
}

export interface WorkerListParams {
  /**
   * The id of the worker.
   */
  afterId?: string;

  /**
   * The id of the worker.
   */
  beforeId?: string;

  /**
   * a number less than or equal to 100
   */
  limit?: string;

  statuses?: Array<'onboarding' | 'active' | 'offboarding' | 'inactive'>;

  types?: Array<'employee' | 'contractor'>;

  workEmail?: string;
}

export declare namespace Workers {
  export {
    type WorkerRetrieveResponse as WorkerRetrieveResponse,
    type WorkerListResponse as WorkerListResponse,
    type WorkerListParams as WorkerListParams,
  };
}
