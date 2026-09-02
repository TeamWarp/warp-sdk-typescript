// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';
import type * as Shared from './shared';

export class CustomFields extends APIResource {
  /**
   * List the custom worker field definitions your API key can read. Each field belongs to a worker-data category; fields whose category your key cannot read are omitted unless the key holds workers:custom_fields.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomFieldListResponse>} Success
   *
   * @example
   * ```ts
   * const customField = await client.customFields.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<CustomFieldListResponse> {
    return this._client.get('/v1/custom_fields', options);
  }

  /**
   * Create a custom worker field definition. The field type is immutable after creation. Select and multi_select fields can include their initial options. Access to values derives from the field category; requires the workers:custom_fields permission.
   *
   * @param {CustomFieldCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomFieldCreateResponse>} Success
   *
   * @example
   * ```ts
   * const customField = await client.customFields.create({
   *   name: 'x',
   *   type: 'text',
   *   category: 'info',
   * });
   * ```
   */
  create(body: CustomFieldCreateParams, options?: RequestOptions): APIPromise<CustomFieldCreateResponse> {
    return this._client.post('/v1/custom_fields', { body, ...options });
  }

  /**
   * Get a custom worker field definition, including its select options. Archived options may appear on existing worker values but cannot be newly selected.
   *
   * @param {string} id - The tag of a company custom worker field.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomFieldGetResponse>} Success
   *
   * @example
   * ```ts
   * const customField = await client.customFields.get('cf_1234');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<CustomFieldGetResponse> {
    return this._client.get(__scalarPath`/v1/custom_fields/${id}`, options);
  }

  /**
   * Update a custom worker field definition. The field type cannot be changed; create a new field instead. Requires the workers:custom_fields permission; changing the category, access level, or input source requires the manage level.
   *
   * @param {string} id - The tag of a company custom worker field.
   * @param {CustomFieldUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomFieldUpdateResponse>} Success
   *
   * @example
   * ```ts
   * const customField = await client.customFields.update('cf_1234', {});
   * ```
   */
  update(
    id: string,
    body: CustomFieldUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomFieldUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/custom_fields/${id}`, { body, ...options });
  }

  /**
   * Archive a custom worker field. Archived fields keep their existing worker values but cannot receive new ones. Requires the workers:custom_fields permission at the manage level.
   *
   * @param {string} id - The tag of a company custom worker field.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomFieldArchiveResponse>} Success
   *
   * @example
   * ```ts
   * const customField = await client.customFields.archive('cf_1234');
   * ```
   */
  archive(id: string, options?: RequestOptions): APIPromise<CustomFieldArchiveResponse> {
    return this._client.post(__scalarPath`/v1/custom_fields/${id}/archive`, options);
  }

  /**
   * Add an option to a select or multi_select custom worker field. The option value should be treated as stable; the label can change. Requires the workers:custom_fields permission.
   *
   * @param {string} id - The tag of a company custom worker field.
   * @param {CustomFieldCreateOptionParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomFieldCreateOptionResponse>} Success
   *
   * @example
   * ```ts
   * const customField = await client.customFields.createOption('cf_1234', {
   *   label: 'x',
   *   value: 'x',
   * });
   * ```
   */
  createOption(
    id: string,
    body: CustomFieldCreateOptionParams,
    options?: RequestOptions,
  ): APIPromise<CustomFieldCreateOptionResponse> {
    return this._client.post(__scalarPath`/v1/custom_fields/${id}/options`, { body, ...options });
  }

  /**
   * Update the label or sort order of a custom worker field option. Options of archived fields cannot be edited. Requires the workers:custom_fields permission.
   *
   * @param {string} id - The tag of a company custom worker field option.
   * @param {CustomFieldUpdateOptionParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomFieldUpdateOptionResponse>} Success
   *
   * @example
   * ```ts
   * const customField = await client.customFields.updateOption('cfo_1234', {});
   * ```
   */
  updateOption(
    id: string,
    body: CustomFieldUpdateOptionParams,
    options?: RequestOptions,
  ): APIPromise<CustomFieldUpdateOptionResponse> {
    return this._client.patch(__scalarPath`/v1/custom_field_options/${id}`, { body, ...options });
  }

  /**
   * Delete a custom worker field option that is not applied to any worker. Options in use must be archived instead. Requires the workers:custom_fields permission at the manage level.
   *
   * @param {string} id - The tag of a company custom worker field option.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns <No Content>
   *
   * @example
   * ```ts
   * await client.customFields.deleteOption('cfo_1234');
   * ```
   */
  deleteOption(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(__scalarPath`/v1/custom_field_options/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Archive a custom worker field option. Archived options remain on existing worker values but cannot be newly selected. Requires the workers:custom_fields permission at the manage level.
   *
   * @param {string} id - The tag of a company custom worker field option.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomFieldArchiveOptionResponse>} Success
   *
   * @example
   * ```ts
   * const customField = await client.customFields.archiveOption('cfo_1234');
   * ```
   */
  archiveOption(id: string, options?: RequestOptions): APIPromise<CustomFieldArchiveOptionResponse> {
    return this._client.post(__scalarPath`/v1/custom_field_options/${id}/archive`, options);
  }

  /**
   * List custom field values for workers, optionally filtered by worker or field. Values are returned only for fields whose category your API key can read.
   *
   * @param {CustomFieldListValuesParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomFieldListValuesResponse>} Success
   *
   * @example
   * ```ts
   * const customField = await client.customFields.listValues();
   * ```
   */
  listValues(
    query: CustomFieldListValuesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomFieldListValuesResponse> {
    return this._client.get('/v1/custom_field_values', { query, ...options });
  }

  /**
   * Create or replace a worker's value for a custom field. The value shape must match the field type, and your API key must hold write on the field's category.
   *
   * @param {CustomFieldUpsertValueParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomFieldUpsertValueResponse>} Success
   *
   * @example
   * ```ts
   * const customField = await client.customFields.upsertValue({
   *   workerId: 'wrk_1234',
   *   fieldId: 'cf_1234',
   *   value: {
   *     type: 'text',
   *     value: '',
   *   },
   * });
   * ```
   */
  upsertValue(
    body: CustomFieldUpsertValueParams,
    options?: RequestOptions,
  ): APIPromise<CustomFieldUpsertValueResponse> {
    return this._client.put('/v1/custom_field_values', { body, ...options });
  }

  /**
   * Remove a worker's value for a custom field. Your API key must hold write on the field's category.
   *
   * @param {CustomFieldClearValueParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns <No Content>
   *
   * @example
   * ```ts
   * await client.customFields.clearValue({
   *   workerId: 'wrk_1234',
   *   fieldId: 'cf_1234',
   * });
   * ```
   */
  clearValue(params: CustomFieldClearValueParams, options?: RequestOptions): APIPromise<void> {
    const { workerId, fieldId } = params;
    return this._client.delete('/v1/custom_field_values', {
      query: { workerId, fieldId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type CustomFieldListResponse = Array<CustomFieldListResponse.CustomFieldListResponseItem>;

export namespace CustomFieldListResponse {
  export interface CustomFieldListResponseItem {
    /**
     * The tag of a company custom worker field.
     * @pattern ^cf_
     */
    id: string;
    name: string;
    description: string | null;
    type: 'text' | 'number' | 'date' | 'boolean' | 'currency' | 'percentage' | 'select' | 'multi_select';
    config: Record<string, unknown>;
    status: 'active' | 'archived';
    category: 'info' | 'pii' | 'compensation' | 'banking' | 'it' | 'compliance';
    accessLevel: 'admins' | 'manager' | 'worker';
    inputBy: 'admin' | 'worker';
    canWrite: boolean;
    createdAt: string;
    required?: boolean | null;
  }
}

export interface CustomFieldCreateParams {
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  name: string;
  type: 'text' | 'number' | 'date' | 'boolean' | 'currency' | 'percentage' | 'select' | 'multi_select';
  category: 'info' | 'pii' | 'compensation' | 'banking' | 'it' | 'compliance';
  description?: string | null;
  config?: Record<string, unknown> | null;
  accessLevel?: 'admins' | 'manager' | 'worker' | null;
  inputBy?: 'admin' | 'worker' | null;
  required?: boolean | null;
  options?: Array<CustomFieldCreateParams.Option> | null;
}

export namespace CustomFieldCreateParams {
  export interface Option {
    /**
     * @minLength 1
     * @pattern ^\S[\s\S]*\S$|^\S$|^$
     */
    label: string;
    /**
     * @minLength 1
     * @pattern ^\S[\s\S]*\S$|^\S$|^$
     */
    value: string;
    sortOrder?: number | 'Infinity' | '-Infinity' | 'NaN' | null;
  }
}

export interface CustomFieldCreateResponse {
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  id: string;
  name: string;
  description: string | null;
  type: 'text' | 'number' | 'date' | 'boolean' | 'currency' | 'percentage' | 'select' | 'multi_select';
  config: Record<string, unknown>;
  status: 'active' | 'archived';
  category: 'info' | 'pii' | 'compensation' | 'banking' | 'it' | 'compliance';
  accessLevel: 'admins' | 'manager' | 'worker';
  inputBy: 'admin' | 'worker';
  canWrite: boolean;
  createdAt: string;
  required?: boolean | null;
}

export interface CustomFieldGetResponse {
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  id: string;
  name: string;
  description: string | null;
  type: 'text' | 'number' | 'date' | 'boolean' | 'currency' | 'percentage' | 'select' | 'multi_select';
  config: Record<string, unknown>;
  status: 'active' | 'archived';
  category: 'info' | 'pii' | 'compensation' | 'banking' | 'it' | 'compliance';
  accessLevel: 'admins' | 'manager' | 'worker';
  inputBy: 'admin' | 'worker';
  canWrite: boolean;
  createdAt: string;
  options: Array<CustomFieldGetResponse.Option>;
  required?: boolean | null;
}

export namespace CustomFieldGetResponse {
  export interface Option {
    /**
     * The tag of a company custom worker field option.
     * @pattern ^cfo_
     */
    id: string;
    label: string;
    value: string;
    sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
    status: 'active' | 'archived';
    createdAt: string;
  }
}

export interface CustomFieldUpdateParams {
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  name?: string | null;
  description?: string | null;
  config?: Record<string, unknown> | null;
  category?: 'info' | 'pii' | 'compensation' | 'banking' | 'it' | 'compliance' | null;
  accessLevel?: 'admins' | 'manager' | 'worker' | null;
  inputBy?: 'admin' | 'worker' | null;
  required?: boolean | null;
}

export interface CustomFieldUpdateResponse {
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  id: string;
  name: string;
  description: string | null;
  type: 'text' | 'number' | 'date' | 'boolean' | 'currency' | 'percentage' | 'select' | 'multi_select';
  config: Record<string, unknown>;
  status: 'active' | 'archived';
  category: 'info' | 'pii' | 'compensation' | 'banking' | 'it' | 'compliance';
  accessLevel: 'admins' | 'manager' | 'worker';
  inputBy: 'admin' | 'worker';
  canWrite: boolean;
  createdAt: string;
  required?: boolean | null;
}

export interface CustomFieldArchiveResponse {
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  id: string;
  name: string;
  description: string | null;
  type: 'text' | 'number' | 'date' | 'boolean' | 'currency' | 'percentage' | 'select' | 'multi_select';
  config: Record<string, unknown>;
  status: 'active' | 'archived';
  category: 'info' | 'pii' | 'compensation' | 'banking' | 'it' | 'compliance';
  accessLevel: 'admins' | 'manager' | 'worker';
  inputBy: 'admin' | 'worker';
  canWrite: boolean;
  createdAt: string;
  required?: boolean | null;
}

export interface CustomFieldCreateOptionParams {
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  label: string;
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  value: string;
  sortOrder?: number | 'Infinity' | '-Infinity' | 'NaN' | null;
}

export interface CustomFieldCreateOptionResponse {
  /**
   * The tag of a company custom worker field option.
   * @pattern ^cfo_
   */
  id: string;
  label: string;
  value: string;
  sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
  status: 'active' | 'archived';
  createdAt: string;
}

export interface CustomFieldUpdateOptionParams {
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  label?: string | null;
  sortOrder?: number | 'Infinity' | '-Infinity' | 'NaN' | null;
}

export interface CustomFieldUpdateOptionResponse {
  /**
   * The tag of a company custom worker field option.
   * @pattern ^cfo_
   */
  id: string;
  label: string;
  value: string;
  sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
  status: 'active' | 'archived';
  createdAt: string;
}

export interface CustomFieldArchiveOptionResponse {
  /**
   * The tag of a company custom worker field option.
   * @pattern ^cfo_
   */
  id: string;
  label: string;
  value: string;
  sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
  status: 'active' | 'archived';
  createdAt: string;
}

export interface CustomFieldListValuesParams {
  workerIds?: Array<string> | null;
  fieldIds?: Array<string> | null;
}

export type CustomFieldListValuesResponse =
  Array<CustomFieldListValuesResponse.CustomFieldListValuesResponseItem>;

export namespace CustomFieldListValuesResponse {
  export interface CustomFieldListValuesResponseItem {
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
    value:
      | CustomFieldListValuesResponseItem.TextCustomFieldValue
      | CustomFieldListValuesResponseItem.NumberCustomFieldValue
      | CustomFieldListValuesResponseItem.DateCustomFieldValue
      | CustomFieldListValuesResponseItem.BooleanCustomFieldValue
      | CustomFieldListValuesResponseItem.CurrencyCustomFieldValue
      | CustomFieldListValuesResponseItem.PercentageCustomFieldValue
      | CustomFieldListValuesResponseItem.SelectCustomFieldValue
      | CustomFieldListValuesResponseItem.MultiSelectCustomFieldValue;
    updatedAt: string;
  }

  export namespace CustomFieldListValuesResponseItem {
    export interface TextCustomFieldValue {
      type: 'text';
      value: string;
    }

    export interface NumberCustomFieldValue {
      type: 'number';
      value: number | 'Infinity' | '-Infinity' | 'NaN';
    }

    export interface DateCustomFieldValue {
      type: 'date';
      /**
       * @pattern ^\d{4}-\d{2}-\d{2}$
       */
      value: string;
    }

    export interface BooleanCustomFieldValue {
      type: 'boolean';
      value: boolean;
    }

    export interface CurrencyCustomFieldValue {
      type: 'currency';
      /**
       * Integer base units of currencyCode (e.g. cents).
       */
      amount: number;
      currencyCode:
        | 'USD'
        | 'AUD'
        | 'BGN'
        | 'BRL'
        | 'CAD'
        | 'CHF'
        | 'CZK'
        | 'DKK'
        | 'EUR'
        | 'GBP'
        | 'HKD'
        | 'HUF'
        | 'IDR'
        | 'INR'
        | 'JPY'
        | 'MYR'
        | 'NOK'
        | 'NZD'
        | 'CNY'
        | 'PLN'
        | 'RON'
        | 'TRY'
        | 'SEK'
        | 'SGD'
        | 'AED'
        | 'ARS'
        | 'BDT'
        | 'BWP'
        | 'CLP'
        | 'COP'
        | 'CRC'
        | 'EGP'
        | 'FJD'
        | 'GEL'
        | 'GHS'
        | 'ILS'
        | 'KES'
        | 'KRW'
        | 'LKR'
        | 'MAD'
        | 'MXN'
        | 'NPR'
        | 'PHP'
        | 'PKR'
        | 'THB'
        | 'UAH'
        | 'UGX'
        | 'UYU'
        | 'VND'
        | 'ZAR'
        | 'ZMW'
        | 'TND'
        | 'NGN'
        | 'RSD'
        | 'TWD'
        | 'GTQ'
        | 'HNL'
        | 'DOP'
        | 'SAR'
        | 'XAF'
        | 'PEN';
    }

    export interface PercentageCustomFieldValue {
      type: 'percentage';
      value: number | 'Infinity' | '-Infinity' | 'NaN';
    }

    export interface SelectCustomFieldValue {
      type: 'select';
      option: SelectCustomFieldValue.Option;
    }

    export namespace SelectCustomFieldValue {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
    }

    export interface MultiSelectCustomFieldValue {
      type: 'multi_select';
      options: Array<MultiSelectCustomFieldValue.Option>;
    }

    export namespace MultiSelectCustomFieldValue {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
    }
  }
}

export interface CustomFieldUpsertValueParams {
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
  value:
    | CustomFieldUpsertValueParams.Value
    | CustomFieldUpsertValueParams.Value2
    | CustomFieldUpsertValueParams.Value3
    | CustomFieldUpsertValueParams.Value4
    | CustomFieldUpsertValueParams.Value5
    | CustomFieldUpsertValueParams.Value6
    | CustomFieldUpsertValueParams.Value7
    | CustomFieldUpsertValueParams.Value8;
}

export namespace CustomFieldUpsertValueParams {
  export interface Value {
    type: 'text';
    value: string;
  }

  export interface Value2 {
    type: 'number';
    value: number | 'Infinity' | '-Infinity' | 'NaN';
  }

  export interface Value3 {
    type: 'date';
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    value: string;
  }

  export interface Value4 {
    type: 'boolean';
    value: boolean;
  }

  export interface Value5 {
    type: 'currency';
    /**
     * Integer base units of currencyCode (e.g. cents).
     */
    amount: number;
    currencyCode:
      | 'USD'
      | 'AUD'
      | 'BGN'
      | 'BRL'
      | 'CAD'
      | 'CHF'
      | 'CZK'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'HKD'
      | 'HUF'
      | 'IDR'
      | 'INR'
      | 'JPY'
      | 'MYR'
      | 'NOK'
      | 'NZD'
      | 'CNY'
      | 'PLN'
      | 'RON'
      | 'TRY'
      | 'SEK'
      | 'SGD'
      | 'AED'
      | 'ARS'
      | 'BDT'
      | 'BWP'
      | 'CLP'
      | 'COP'
      | 'CRC'
      | 'EGP'
      | 'FJD'
      | 'GEL'
      | 'GHS'
      | 'ILS'
      | 'KES'
      | 'KRW'
      | 'LKR'
      | 'MAD'
      | 'MXN'
      | 'NPR'
      | 'PHP'
      | 'PKR'
      | 'THB'
      | 'UAH'
      | 'UGX'
      | 'UYU'
      | 'VND'
      | 'ZAR'
      | 'ZMW'
      | 'TND'
      | 'NGN'
      | 'RSD'
      | 'TWD'
      | 'GTQ'
      | 'HNL'
      | 'DOP'
      | 'SAR'
      | 'XAF'
      | 'PEN';
  }

  export interface Value6 {
    type: 'percentage';
    value: number | 'Infinity' | '-Infinity' | 'NaN';
  }

  export interface Value7 {
    type: 'select';
    /**
     * The tag of a company custom worker field option.
     * @pattern ^cfo_
     */
    optionId: string;
  }

  export interface Value8 {
    type: 'multi_select';
    optionIds: Array<string>;
  }
}

export interface CustomFieldUpsertValueResponse {
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
  value:
    | CustomFieldUpsertValueResponse.TextCustomFieldValue
    | CustomFieldUpsertValueResponse.NumberCustomFieldValue
    | CustomFieldUpsertValueResponse.DateCustomFieldValue
    | CustomFieldUpsertValueResponse.BooleanCustomFieldValue
    | CustomFieldUpsertValueResponse.CurrencyCustomFieldValue
    | CustomFieldUpsertValueResponse.PercentageCustomFieldValue
    | CustomFieldUpsertValueResponse.SelectCustomFieldValue
    | CustomFieldUpsertValueResponse.MultiSelectCustomFieldValue;
  updatedAt: string;
}

export namespace CustomFieldUpsertValueResponse {
  export interface TextCustomFieldValue {
    type: 'text';
    value: string;
  }

  export interface NumberCustomFieldValue {
    type: 'number';
    value: number | 'Infinity' | '-Infinity' | 'NaN';
  }

  export interface DateCustomFieldValue {
    type: 'date';
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    value: string;
  }

  export interface BooleanCustomFieldValue {
    type: 'boolean';
    value: boolean;
  }

  export interface CurrencyCustomFieldValue {
    type: 'currency';
    /**
     * Integer base units of currencyCode (e.g. cents).
     */
    amount: number;
    currencyCode:
      | 'USD'
      | 'AUD'
      | 'BGN'
      | 'BRL'
      | 'CAD'
      | 'CHF'
      | 'CZK'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'HKD'
      | 'HUF'
      | 'IDR'
      | 'INR'
      | 'JPY'
      | 'MYR'
      | 'NOK'
      | 'NZD'
      | 'CNY'
      | 'PLN'
      | 'RON'
      | 'TRY'
      | 'SEK'
      | 'SGD'
      | 'AED'
      | 'ARS'
      | 'BDT'
      | 'BWP'
      | 'CLP'
      | 'COP'
      | 'CRC'
      | 'EGP'
      | 'FJD'
      | 'GEL'
      | 'GHS'
      | 'ILS'
      | 'KES'
      | 'KRW'
      | 'LKR'
      | 'MAD'
      | 'MXN'
      | 'NPR'
      | 'PHP'
      | 'PKR'
      | 'THB'
      | 'UAH'
      | 'UGX'
      | 'UYU'
      | 'VND'
      | 'ZAR'
      | 'ZMW'
      | 'TND'
      | 'NGN'
      | 'RSD'
      | 'TWD'
      | 'GTQ'
      | 'HNL'
      | 'DOP'
      | 'SAR'
      | 'XAF'
      | 'PEN';
  }

  export interface PercentageCustomFieldValue {
    type: 'percentage';
    value: number | 'Infinity' | '-Infinity' | 'NaN';
  }

  export interface SelectCustomFieldValue {
    type: 'select';
    option: SelectCustomFieldValue.Option;
  }

  export namespace SelectCustomFieldValue {
    export interface Option {
      /**
       * The tag of a company custom worker field option.
       * @pattern ^cfo_
       */
      id: string;
      label: string;
      value: string;
      sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
      status: 'active' | 'archived';
      createdAt: string;
    }
  }

  export interface MultiSelectCustomFieldValue {
    type: 'multi_select';
    options: Array<MultiSelectCustomFieldValue.Option>;
  }

  export namespace MultiSelectCustomFieldValue {
    export interface Option {
      /**
       * The tag of a company custom worker field option.
       * @pattern ^cfo_
       */
      id: string;
      label: string;
      value: string;
      sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
      status: 'active' | 'archived';
      createdAt: string;
    }
  }
}

export interface CustomFieldClearValueParams {
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
export declare namespace CustomFields {
  export {
    type CustomFieldListResponse as CustomFieldListResponse,
    type CustomFieldCreateResponse as CustomFieldCreateResponse,
    type CustomFieldGetResponse as CustomFieldGetResponse,
    type CustomFieldUpdateResponse as CustomFieldUpdateResponse,
    type CustomFieldArchiveResponse as CustomFieldArchiveResponse,
    type CustomFieldCreateOptionResponse as CustomFieldCreateOptionResponse,
    type CustomFieldUpdateOptionResponse as CustomFieldUpdateOptionResponse,
    type CustomFieldArchiveOptionResponse as CustomFieldArchiveOptionResponse,
    type CustomFieldListValuesResponse as CustomFieldListValuesResponse,
    type CustomFieldUpsertValueResponse as CustomFieldUpsertValueResponse,
    type CustomFieldCreateParams as CustomFieldCreateParams,
    type CustomFieldUpdateParams as CustomFieldUpdateParams,
    type CustomFieldCreateOptionParams as CustomFieldCreateOptionParams,
    type CustomFieldUpdateOptionParams as CustomFieldUpdateOptionParams,
    type CustomFieldListValuesParams as CustomFieldListValuesParams,
    type CustomFieldUpsertValueParams as CustomFieldUpsertValueParams,
    type CustomFieldClearValueParams as CustomFieldClearValueParams,
  };
}
