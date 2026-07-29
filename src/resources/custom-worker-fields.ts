// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { buildHeaders } from "../internal/headers";
import { path as __scalarPath } from "../internal/utils/path";
import type * as OffersAPI from "./offers";

export class CustomWorkerFields extends APIResource {
  /**
   * List the custom worker field definitions your API key can read. Each field belongs to a worker-data category; fields whose category your key cannot read are omitted unless the key holds workers:custom_fields.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomWorkerFieldListResponse>} Success
   *
   * @example
   * ```ts
   * const list = await client.customWorkerFields.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<CustomWorkerFieldListResponse> {
    return this._client.get("/v1/custom-worker-fields", options);
  }

  /**
   * Create a custom worker field definition. The field type is immutable after creation. Select and multi_select fields can include their initial options. Access to values derives from the field category; requires the workers:custom_fields permission.
   *
   * @param {CustomWorkerFieldCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomWorkerFieldCreateResponse>} Success
   *
   * @example
   * ```ts
   * const create = await client.customWorkerFields.create({
   *   name: "",
   *   type: "text",
   *   category: "info",
   * });
   * ```
   */
  create(body: CustomWorkerFieldCreateParams, options?: RequestOptions): APIPromise<CustomWorkerFieldCreateResponse> {
    return this._client.post("/v1/custom-worker-fields", { body, ...options });
  }

  /**
   * Get a custom worker field definition, including its select options. Archived options may appear on existing worker values but cannot be newly selected.
   *
   * @param {string} id - The tag of a company custom worker field.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomWorkerFieldRetrieveResponse>} Success
   *
   * @example
   * ```ts
   * const retrieve = await client.customWorkerFields.retrieve("cf_1234");
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CustomWorkerFieldRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/custom-worker-fields/${id}`, options);
  }

  /**
   * Update a custom worker field definition. The field type cannot be changed; create a new field instead. Requires the workers:custom_fields permission; changing the category, access level, or input source requires the manage level.
   *
   * @param {string} id - The tag of a company custom worker field.
   * @param {CustomWorkerFieldUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomWorkerFieldUpdateResponse>} Success
   *
   * @example
   * ```ts
   * const update = await client.customWorkerFields.update("cf_1234", {});
   * ```
   */
  update(id: string, body: CustomWorkerFieldUpdateParams, options?: RequestOptions): APIPromise<CustomWorkerFieldUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/custom-worker-fields/${id}`, { body, ...options });
  }

  /**
   * Archive a custom worker field. Archived fields keep their existing worker values but cannot receive new ones. Requires the workers:custom_fields permission at the manage level.
   *
   * @param {string} id - The tag of a company custom worker field.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomWorkerFieldArchiveResponse>} Success
   *
   * @example
   * ```ts
   * const archive = await client.customWorkerFields.archive("cf_1234");
   * ```
   */
  archive(id: string, options?: RequestOptions): APIPromise<CustomWorkerFieldArchiveResponse> {
    return this._client.post(__scalarPath`/v1/custom-worker-fields/${id}/archive`, options);
  }

  /**
   * Add an option to a select or multi_select custom worker field. The option value should be treated as stable; the label can change. Requires the workers:custom_fields permission.
   *
   * @param {string} id - The tag of a company custom worker field.
   * @param {CustomWorkerFieldCreateOptionParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomWorkerFieldCreateOptionResponse>} Success
   *
   * @example
   * ```ts
   * const createOption = await client.customWorkerFields.createOption("cf_1234", {
   *   label: "x",
   *   value: "x",
   * });
   * ```
   */
  createOption(id: string, body: CustomWorkerFieldCreateOptionParams, options?: RequestOptions): APIPromise<CustomWorkerFieldCreateOptionResponse> {
    return this._client.post(__scalarPath`/v1/custom-worker-fields/${id}/options`, { body, ...options });
  }

  /**
   * Update the label or sort order of a custom worker field option. Options of archived fields cannot be edited. Requires the workers:custom_fields permission.
   *
   * @param {string} id - The tag of a company custom worker field option.
   * @param {CustomWorkerFieldUpdateOptionParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomWorkerFieldUpdateOptionResponse>} Success
   *
   * @example
   * ```ts
   * const updateOption = await client.customWorkerFields.updateOption("cfo_1234", {});
   * ```
   */
  updateOption(id: string, body: CustomWorkerFieldUpdateOptionParams, options?: RequestOptions): APIPromise<CustomWorkerFieldUpdateOptionResponse> {
    return this._client.patch(__scalarPath`/v1/custom-worker-field-options/${id}`, { body, ...options });
  }

  /**
   * Delete a custom worker field option that is not applied to any worker. Options in use must be archived instead. Requires the workers:custom_fields permission at the manage level.
   *
   * @param {string} id - The tag of a company custom worker field option.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Success
   *
   * @example
   * ```ts
   * await client.customWorkerFields.deleteOption("cfo_1234");
   * ```
   */
  deleteOption(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(__scalarPath`/v1/custom-worker-field-options/${id}`, { ...options, headers: buildHeaders([{ Accept: "*/*" }, options?.headers]) });
  }

  /**
   * Archive a custom worker field option. Archived options remain on existing worker values but cannot be newly selected. Requires the workers:custom_fields permission at the manage level.
   *
   * @param {string} id - The tag of a company custom worker field option.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomWorkerFieldArchiveOptionResponse>} Success
   *
   * @example
   * ```ts
   * const archiveOption = await client.customWorkerFields.archiveOption("cfo_1234");
   * ```
   */
  archiveOption(id: string, options?: RequestOptions): APIPromise<CustomWorkerFieldArchiveOptionResponse> {
    return this._client.post(__scalarPath`/v1/custom-worker-field-options/${id}/archive`, options);
  }

  /**
   * List custom field values for workers, optionally filtered by worker or field. Values are returned only for fields whose category your API key can read.
   *
   * @param {CustomWorkerFieldListValuesParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomWorkerFieldListValuesResponse>} Success
   *
   * @example
   * ```ts
   * const listValues = await client.customWorkerFields.listValues();
   * ```
   */
  listValues(query: CustomWorkerFieldListValuesParams | null | undefined = {}, options?: RequestOptions): APIPromise<CustomWorkerFieldListValuesResponse> {
    return this._client.get("/v1/worker-custom-field-values", { query, ...options });
  }

  /**
   * Create or replace a worker's value for a custom field. The value shape must match the field type, and your API key must hold write on the field's category.
   *
   * @param {CustomWorkerFieldUpsertValueParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomWorkerFieldUpsertValueResponse>} Success
   *
   * @example
   * ```ts
   * const upsertValue = await client.customWorkerFields.upsertValue({
   *   workerId: "wrk_1234",
   *   fieldId: "cf_1234",
   *   value: {
   *     type: "text",
   *     value: "",
   *   },
   * });
   * ```
   */
  upsertValue(body: CustomWorkerFieldUpsertValueParams, options?: RequestOptions): APIPromise<CustomWorkerFieldUpsertValueResponse> {
    return this._client.put("/v1/worker-custom-field-values", { body, ...options });
  }

  /**
   * Remove a worker's value for a custom field. Your API key must hold write on the field's category.
   *
   * @param {CustomWorkerFieldClearValueParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Success
   *
   * @example
   * ```ts
   * await client.customWorkerFields.clearValue({
   *   workerId: "wrk_1234",
   *   fieldId: "cf_1234",
   * });
   * ```
   */
  clearValue(params: CustomWorkerFieldClearValueParams, options?: RequestOptions): APIPromise<void> {
    const { workerId, fieldId } = params;
    return this._client.delete("/v1/worker-custom-field-values", { query: { workerId, fieldId }, ...options, headers: buildHeaders([{ Accept: "*/*" }, options?.headers]) });
  }
}

/**
 * a string with no leading or trailing whitespace
 */
export type Trimmed = string;

/**
 * a non empty string
 */
export type NonEmptyTrimmedString = string;

export type CustomWorkerFieldListResponse = Array<CustomWorkerFieldListResponse.CustomWorkerFieldListResponseItem>;

export namespace CustomWorkerFieldListResponse {
  export interface CustomWorkerFieldListResponseItem {
    /**
     * The tag of a company custom worker field.
     * @pattern ^cf_
     */
    id: string;
    name: string;
    description: string | null;
    type: "text" | "number" | "date" | "boolean" | "currency" | "percentage" | "select" | "multi_select";
    config: Record<string, unknown>;
    status: "active" | "archived";
    category: "info" | "pii" | "compensation" | "banking" | "it" | "compliance";
    accessLevel: "admins" | "manager" | "worker";
    inputBy: "admin" | "worker";
    canWrite: boolean;
    /**
     * a string to be decoded into a Date
     */
    createdAt: OffersAPI.Date;
    required?: boolean;
  }
}

export interface CustomWorkerFieldCreateParams {
  /**
   * a non empty string
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  name: Trimmed;
  type: "text" | "number" | "date" | "boolean" | "currency" | "percentage" | "select" | "multi_select";
  category: "info" | "pii" | "compensation" | "banking" | "it" | "compliance";
  description?: string | null;
  config?: Record<string, unknown>;
  accessLevel?: "admins" | "manager" | "worker";
  inputBy?: "admin" | "worker";
  required?: boolean;
  options?: Array<CustomWorkerFieldCreateParams.Option>;
}

export namespace CustomWorkerFieldCreateParams {
  export interface Option {
    /**
     * a non empty string
     * @minLength 1
     * @pattern ^\S[\s\S]*\S$|^\S$|^$
     */
    label: NonEmptyTrimmedString;
    /**
     * a non empty string
     * @minLength 1
     * @pattern ^\S[\s\S]*\S$|^\S$|^$
     */
    value: NonEmptyTrimmedString;
    sortOrder?: number;
  }
}

export interface CustomWorkerFieldCreateResponse {
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  id: string;
  name: string;
  description: string | null;
  type: "text" | "number" | "date" | "boolean" | "currency" | "percentage" | "select" | "multi_select";
  config: Record<string, unknown>;
  status: "active" | "archived";
  category: "info" | "pii" | "compensation" | "banking" | "it" | "compliance";
  accessLevel: "admins" | "manager" | "worker";
  inputBy: "admin" | "worker";
  canWrite: boolean;
  /**
   * a string to be decoded into a Date
   */
  createdAt: OffersAPI.Date;
  required?: boolean;
}

export interface CustomWorkerFieldRetrieveResponse {
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  id: string;
  name: string;
  description: string | null;
  type: "text" | "number" | "date" | "boolean" | "currency" | "percentage" | "select" | "multi_select";
  config: Record<string, unknown>;
  status: "active" | "archived";
  category: "info" | "pii" | "compensation" | "banking" | "it" | "compliance";
  accessLevel: "admins" | "manager" | "worker";
  inputBy: "admin" | "worker";
  canWrite: boolean;
  /**
   * a string to be decoded into a Date
   */
  createdAt: OffersAPI.Date;
  options: Array<CustomWorkerFieldRetrieveResponse.Option>;
  required?: boolean;
}

export namespace CustomWorkerFieldRetrieveResponse {
  export interface Option {
    /**
     * The tag of a company custom worker field option.
     * @pattern ^cfo_
     */
    id: string;
    label: string;
    value: string;
    sortOrder: number;
    status: "active" | "archived";
    /**
     * a string to be decoded into a Date
     */
    createdAt: OffersAPI.Date;
  }
}

export interface CustomWorkerFieldUpdateParams {
  /**
   * a non empty string
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  name?: NonEmptyTrimmedString;
  description?: string | null;
  config?: Record<string, unknown>;
  category?: "info" | "pii" | "compensation" | "banking" | "it" | "compliance";
  accessLevel?: "admins" | "manager" | "worker";
  inputBy?: "admin" | "worker";
  required?: boolean;
}

export interface CustomWorkerFieldUpdateResponse {
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  id: string;
  name: string;
  description: string | null;
  type: "text" | "number" | "date" | "boolean" | "currency" | "percentage" | "select" | "multi_select";
  config: Record<string, unknown>;
  status: "active" | "archived";
  category: "info" | "pii" | "compensation" | "banking" | "it" | "compliance";
  accessLevel: "admins" | "manager" | "worker";
  inputBy: "admin" | "worker";
  canWrite: boolean;
  /**
   * a string to be decoded into a Date
   */
  createdAt: OffersAPI.Date;
  required?: boolean;
}

export interface CustomWorkerFieldArchiveResponse {
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  id: string;
  name: string;
  description: string | null;
  type: "text" | "number" | "date" | "boolean" | "currency" | "percentage" | "select" | "multi_select";
  config: Record<string, unknown>;
  status: "active" | "archived";
  category: "info" | "pii" | "compensation" | "banking" | "it" | "compliance";
  accessLevel: "admins" | "manager" | "worker";
  inputBy: "admin" | "worker";
  canWrite: boolean;
  /**
   * a string to be decoded into a Date
   */
  createdAt: OffersAPI.Date;
  required?: boolean;
}

export interface CustomWorkerFieldCreateOptionParams {
  /**
   * a non empty string
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  label: NonEmptyTrimmedString;
  /**
   * a non empty string
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  value: NonEmptyTrimmedString;
  sortOrder?: number;
}

export interface CustomWorkerFieldCreateOptionResponse {
  /**
   * The tag of a company custom worker field option.
   * @pattern ^cfo_
   */
  id: string;
  label: string;
  value: string;
  sortOrder: number;
  status: "active" | "archived";
  /**
   * a string to be decoded into a Date
   */
  createdAt: OffersAPI.Date;
}

export interface CustomWorkerFieldUpdateOptionParams {
  /**
   * a non empty string
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  label?: NonEmptyTrimmedString;
  sortOrder?: number;
}

export interface CustomWorkerFieldUpdateOptionResponse {
  /**
   * The tag of a company custom worker field option.
   * @pattern ^cfo_
   */
  id: string;
  label: string;
  value: string;
  sortOrder: number;
  status: "active" | "archived";
  /**
   * a string to be decoded into a Date
   */
  createdAt: OffersAPI.Date;
}

export interface CustomWorkerFieldArchiveOptionResponse {
  /**
   * The tag of a company custom worker field option.
   * @pattern ^cfo_
   */
  id: string;
  label: string;
  value: string;
  sortOrder: number;
  status: "active" | "archived";
  /**
   * a string to be decoded into a Date
   */
  createdAt: OffersAPI.Date;
}

export interface CustomWorkerFieldListValuesParams {
  workerIds?: Array<string>;
  fieldIds?: Array<string>;
}

export type CustomWorkerFieldListValuesResponse = Array<CustomWorkerFieldListValuesResponse.CustomWorkerFieldListValuesResponseItem>;

export namespace CustomWorkerFieldListValuesResponse {
  export interface CustomWorkerFieldListValuesResponseItem {
    /**
     * The tag of a company custom worker field value.
     * @pattern ^cfv_
     */
    id: string;
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    workerId: string;
    /**
     * The tag of a company custom worker field.
     * @pattern ^cf_
     */
    fieldId: string;
    value: CustomWorkerFieldListValuesResponseItem.Value | CustomWorkerFieldListValuesResponseItem.Value2 | CustomWorkerFieldListValuesResponseItem.Value3 | CustomWorkerFieldListValuesResponseItem.Value4 | CustomWorkerFieldListValuesResponseItem.Value5 | CustomWorkerFieldListValuesResponseItem.Value6 | CustomWorkerFieldListValuesResponseItem.Value7 | CustomWorkerFieldListValuesResponseItem.Value8;
    /**
     * a string to be decoded into a Date
     */
    updatedAt: OffersAPI.Date;
  }

  export namespace CustomWorkerFieldListValuesResponseItem {
    export interface Value {
      type: "text";
      value: string;
    }

    export interface Value2 {
      type: "number";
      value: number;
    }

    export interface Value3 {
      type: "date";
      /**
       * A date string in the form YYYY-MM-DD
       * @pattern ^\d{4}-\d{2}-\d{2}$
       */
      value: string;
    }

    export interface Value4 {
      type: "boolean";
      value: boolean;
    }

    export interface Value5 {
      type: "currency";
      amount: number;
      currencyCode: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
    }

    export interface Value6 {
      type: "percentage";
      value: number;
    }

    export interface Value7 {
      type: "select";
      option: Value7.Option;
    }

    export namespace Value7 {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number;
        status: "active" | "archived";
        /**
         * a string to be decoded into a Date
         */
        createdAt: OffersAPI.Date;
      }
    }

    export interface Value8 {
      type: "multi_select";
      options: Array<Value8.Option>;
    }

    export namespace Value8 {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number;
        status: "active" | "archived";
        /**
         * a string to be decoded into a Date
         */
        createdAt: OffersAPI.Date;
      }
    }
  }
}

export interface CustomWorkerFieldUpsertValueParams {
  /**
   * The id of the worker.
   * @pattern ^wrk_
   */
  workerId: string;
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  fieldId: string;
  value: CustomWorkerFieldUpsertValueParams.Value | CustomWorkerFieldUpsertValueParams.Value2 | CustomWorkerFieldUpsertValueParams.Value3 | CustomWorkerFieldUpsertValueParams.Value4 | CustomWorkerFieldUpsertValueParams.Value5 | CustomWorkerFieldUpsertValueParams.Value6 | CustomWorkerFieldUpsertValueParams.Value7 | CustomWorkerFieldUpsertValueParams.Value8;
}

export namespace CustomWorkerFieldUpsertValueParams {
  export interface Value {
    type: "text";
    value: string;
  }

  export interface Value2 {
    type: "number";
    value: number;
  }

  export interface Value3 {
    type: "date";
    /**
     * A date string in the form YYYY-MM-DD
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    value: string;
  }

  export interface Value4 {
    type: "boolean";
    value: boolean;
  }

  export interface Value5 {
    type: "currency";
    amount: number;
    currencyCode: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
  }

  export interface Value6 {
    type: "percentage";
    value: number;
  }

  export interface Value7 {
    type: "select";
    /**
     * The tag of a company custom worker field option.
     * @pattern ^cfo_
     */
    optionId: string;
  }

  export interface Value8 {
    type: "multi_select";
    optionIds: Array<string>;
  }
}

export interface CustomWorkerFieldUpsertValueResponse {
  /**
   * The tag of a company custom worker field value.
   * @pattern ^cfv_
   */
  id: string;
  /**
   * The id of the worker.
   * @pattern ^wrk_
   */
  workerId: string;
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  fieldId: string;
  value: CustomWorkerFieldUpsertValueResponse.Value | CustomWorkerFieldUpsertValueResponse.Value2 | CustomWorkerFieldUpsertValueResponse.Value3 | CustomWorkerFieldUpsertValueResponse.Value4 | CustomWorkerFieldUpsertValueResponse.Value5 | CustomWorkerFieldUpsertValueResponse.Value6 | CustomWorkerFieldUpsertValueResponse.Value7 | CustomWorkerFieldUpsertValueResponse.Value8;
  /**
   * a string to be decoded into a Date
   */
  updatedAt: OffersAPI.Date;
}

export namespace CustomWorkerFieldUpsertValueResponse {
  export interface Value {
    type: "text";
    value: string;
  }

  export interface Value2 {
    type: "number";
    value: number;
  }

  export interface Value3 {
    type: "date";
    /**
     * A date string in the form YYYY-MM-DD
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    value: string;
  }

  export interface Value4 {
    type: "boolean";
    value: boolean;
  }

  export interface Value5 {
    type: "currency";
    amount: number;
    currencyCode: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
  }

  export interface Value6 {
    type: "percentage";
    value: number;
  }

  export interface Value7 {
    type: "select";
    option: Value7.Option;
  }

  export namespace Value7 {
    export interface Option {
      /**
       * The tag of a company custom worker field option.
       * @pattern ^cfo_
       */
      id: string;
      label: string;
      value: string;
      sortOrder: number;
      status: "active" | "archived";
      /**
       * a string to be decoded into a Date
       */
      createdAt: OffersAPI.Date;
    }
  }

  export interface Value8 {
    type: "multi_select";
    options: Array<Value8.Option>;
  }

  export namespace Value8 {
    export interface Option {
      /**
       * The tag of a company custom worker field option.
       * @pattern ^cfo_
       */
      id: string;
      label: string;
      value: string;
      sortOrder: number;
      status: "active" | "archived";
      /**
       * a string to be decoded into a Date
       */
      createdAt: OffersAPI.Date;
    }
  }
}

export interface CustomWorkerFieldClearValueParams {
  /**
   * The id of the worker.
   * @pattern ^wrk_
   */
  workerId: string;
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  fieldId: string;
}
export declare namespace CustomWorkerFields {
  export {
    type Trimmed as Trimmed,
    type NonEmptyTrimmedString as NonEmptyTrimmedString,
    type CustomWorkerFieldListResponse as CustomWorkerFieldListResponse,
    type CustomWorkerFieldCreateResponse as CustomWorkerFieldCreateResponse,
    type CustomWorkerFieldRetrieveResponse as CustomWorkerFieldRetrieveResponse,
    type CustomWorkerFieldUpdateResponse as CustomWorkerFieldUpdateResponse,
    type CustomWorkerFieldArchiveResponse as CustomWorkerFieldArchiveResponse,
    type CustomWorkerFieldCreateOptionResponse as CustomWorkerFieldCreateOptionResponse,
    type CustomWorkerFieldUpdateOptionResponse as CustomWorkerFieldUpdateOptionResponse,
    type CustomWorkerFieldArchiveOptionResponse as CustomWorkerFieldArchiveOptionResponse,
    type CustomWorkerFieldListValuesResponse as CustomWorkerFieldListValuesResponse,
    type CustomWorkerFieldUpsertValueResponse as CustomWorkerFieldUpsertValueResponse,
    type CustomWorkerFieldCreateParams as CustomWorkerFieldCreateParams,
    type CustomWorkerFieldUpdateParams as CustomWorkerFieldUpdateParams,
    type CustomWorkerFieldCreateOptionParams as CustomWorkerFieldCreateOptionParams,
    type CustomWorkerFieldUpdateOptionParams as CustomWorkerFieldUpdateOptionParams,
    type CustomWorkerFieldListValuesParams as CustomWorkerFieldListValuesParams,
    type CustomWorkerFieldUpsertValueParams as CustomWorkerFieldUpsertValueParams,
    type CustomWorkerFieldClearValueParams as CustomWorkerFieldClearValueParams,
  };
}
