// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class I9Verifications extends APIResource {
  /**
   * List current and retained company I-9 verifications in all workflow states, newest first. Requires workers:compliance read access. Filters combine with AND across parameters and OR within each array. Count covers all matches before pagination. Use either afterId or beforeId; a missing or filter-mismatched cursor returns 400, so restart pagination if a filtered cursor changes state. Only verifications linked to a canonical company worker are returned.
   *
   * @param {I9VerificationListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<I9VerificationListResponse>} Success
   *
   * @example
   * ```ts
   * const i9Verification = await client.i9Verifications.list({
   *   limit: 'limit',
   * });
   * ```
   */
  list(query: I9VerificationListParams, options?: RequestOptions): APIPromise<I9VerificationListResponse> {
    return this._client.get('/v1/i9-verifications', { query, ...options });
  }

  /**
   * Get a current or retained I-9 verification by its i9v_ ID. Requires workers:compliance read access. Returns the same metadata as the list endpoint. Missing verifications and verifications outside the company or without a canonical worker return 404.
   *
   * @param {string} id - The tag of the i9 verification.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<I9VerificationRetrieveResponse>} I-9 workflow metadata without document contents, identity details, or file links.
   *
   * @example
   * ```ts
   * const i9Verification = await client.i9Verifications.retrieve('i9v_1234');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<I9VerificationRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/i9-verifications/${id}`, options);
  }
}

export interface I9VerificationListParams {
  limit: string | null;
  /**
   * @pattern ^i9v_
   */
  afterId?: string | null;
  /**
   * @pattern ^i9v_
   */
  beforeId?: string | null;
  /**
   * Worker IDs to include, supplied as repeated parameters. Omit for all workers. Unknown or foreign IDs contribute no matches.
   * @minItems 1
   */
  workerIds?: Array<string> | null;
  /**
   * Statuses to include, supplied as repeated parameters. Omit for all workflow states.
   * @minItems 1
   */
  statuses?: Array<'not_started' | 'awaiting_worker' | 'awaiting_admin' | 'verified'> | null;
}

export interface I9VerificationListResponse {
  hasMore: boolean;
  count: number;
  data: Array<I9VerificationListResponse.Data>;
}

export namespace I9VerificationListResponse {
  export interface Data {
    /**
     * The tag of the i9 verification.
     * @pattern ^i9v_
     */
    id: string;
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    workerId: string;
    status: 'not_started' | 'awaiting_worker' | 'awaiting_admin' | 'verified';
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    startDate: string;
    /**
     * @format date-time
     */
    verifiedAt: string | null;
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    retentionUntil: string | null;
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    dueDate: string | null;
  }
}

export interface I9VerificationRetrieveResponse {
  /**
   * The tag of the i9 verification.
   * @pattern ^i9v_
   */
  id: string;
  /**
   * The id of the worker.
   * @pattern ^wrk_
   */
  workerId: string;
  status: 'not_started' | 'awaiting_worker' | 'awaiting_admin' | 'verified';
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  startDate: string;
  /**
   * @format date-time
   */
  verifiedAt: string | null;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  retentionUntil: string | null;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  dueDate: string | null;
}
export declare namespace I9Verifications {
  export {
    type I9VerificationListResponse as I9VerificationListResponse,
    type I9VerificationRetrieveResponse as I9VerificationRetrieveResponse,
    type I9VerificationListParams as I9VerificationListParams,
  };
}
