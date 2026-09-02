// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class Levels extends APIResource {
  /**
   * List the active standard job levels available to your company.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LevelListResponse>} Success
   *
   * @example
   * ```ts
   * const level = await client.levels.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<LevelListResponse> {
    return this._client.get('/v1/levels', options);
  }
}

export type LevelListResponse = Array<LevelListResponse.LevelListResponseItem>;

export namespace LevelListResponse {
  export interface LevelListResponseItem {
    /**
     * The unique public id of the job level
     * @pattern ^jlvl_
     */
    id: string;
    code: string;
    name: string;
    track: 'ic' | 'manager' | 'executive';
  }
}
export declare namespace Levels {
  export { type LevelListResponse as LevelListResponse };
}
