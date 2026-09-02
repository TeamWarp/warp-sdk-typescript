// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import type * as Shared from './shared';

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

export type LevelListResponse = Array<Shared.Objects5>;
export declare namespace Levels {
  export { type LevelListResponse as LevelListResponse };
}
