// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Endpoints for worker management. "Wokers" include anyone employed by your company, whether US or international, full-time employees or contractors.
 */
export class Workers extends APIResource {
  /**
   * Get a specific worker by id.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WorkerRetrieveResponse> {
    return this._client.get(path`/v1/workers/${id}`, options);
  }

  /**
   * List all workers. Workers includ
   */
  list(
    query: WorkerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WorkerListResponsesCursorPage, WorkerListResponse> {
    return this._client.getAPIList('/v1/workers', CursorPage<WorkerListResponse>, { query, ...options });
  }
}

export type WorkerListResponsesCursorPage = CursorPage<WorkerListResponse>;

export interface WorkerRetrieveResponse {
  /**
   * The id of the worker.
   */
  id: string;

  businessName: string | null;

  /**
   * The department the worker belongs to, or null if unassigned.
   */
  department: WorkerRetrieveResponse.Department | null;

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

  /**
   * The IANA timezone of the worker (e.g., America/New_York).
   */
  timeZone: string | null;

  type: 'employee' | 'contractor';

  /**
   * An email with a reasonably valid regex (shamelessly taken from zod)
   */
  workEmail: string | null;
}

export namespace WorkerRetrieveResponse {
  /**
   * The department the worker belongs to, or null if unassigned.
   */
  export interface Department {
    /**
     * The tag of the department
     */
    id: string;

    name: string;
  }
}

export interface WorkerListResponse {
  /**
   * The id of the worker.
   */
  id: string;

  businessName: string | null;

  /**
   * The department the worker belongs to, or null if unassigned.
   */
  department: WorkerListResponse.Department | null;

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

  /**
   * The IANA timezone of the worker (e.g., America/New_York).
   */
  timeZone: string | null;

  type: 'employee' | 'contractor';

  /**
   * An email with a reasonably valid regex (shamelessly taken from zod)
   */
  workEmail: string | null;
}

export namespace WorkerListResponse {
  /**
   * The department the worker belongs to, or null if unassigned.
   */
  export interface Department {
    /**
     * The tag of the department
     */
    id: string;

    name: string;
  }
}

export interface WorkerListParams extends CursorPageParams {
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
    type WorkerListResponsesCursorPage as WorkerListResponsesCursorPage,
    type WorkerListParams as WorkerListParams,
  };
}
