// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

export class CustomWorkerFields extends APIResource {
}

/**
 * a string with no leading or trailing whitespace
 */
export type Trimmed = string;

/**
 * a non empty string
 */
export type NonEmptyTrimmedString = string;
export declare namespace CustomWorkerFields {
  export {
    type Trimmed as Trimmed,
    type NonEmptyTrimmedString as NonEmptyTrimmedString,
  };
}
