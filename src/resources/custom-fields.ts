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
   * @param {string} id
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
   * @param {string} id
   * @param {CustomFieldUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.Objects>} Success
   *
   * @example
   * ```ts
   * const objects = await client.customFields.update('cf_1234', {});
   * ```
   */
  update(id: string, body: CustomFieldUpdateParams, options?: RequestOptions): APIPromise<Shared.Objects> {
    return this._client.patch(__scalarPath`/v1/custom_fields/${id}`, { body, ...options });
  }

  /**
   * Archive a custom worker field. Archived fields keep their existing worker values but cannot receive new ones. Requires the workers:custom_fields permission at the manage level.
   *
   * @param {string} id
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.Objects>} Success
   *
   * @example
   * ```ts
   * const objects = await client.customFields.archive('cf_1234');
   * ```
   */
  archive(id: string, options?: RequestOptions): APIPromise<Shared.Objects> {
    return this._client.post(__scalarPath`/v1/custom_fields/${id}/archive`, options);
  }

  /**
   * Add an option to a select or multi_select custom worker field. The option value should be treated as stable; the label can change. Requires the workers:custom_fields permission.
   *
   * @param {string} id
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
   * @param {string} id
   * @param {CustomFieldUpdateOptionParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.Objects3>} Success
   *
   * @example
   * ```ts
   * const objects3 = await client.customFields.updateOption('cfo_1234', {});
   * ```
   */
  updateOption(
    id: string,
    body: CustomFieldUpdateOptionParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Objects3> {
    return this._client.patch(__scalarPath`/v1/custom_field_options/${id}`, { body, ...options });
  }

  /**
   * Delete a custom worker field option that is not applied to any worker. Options in use must be archived instead. Requires the workers:custom_fields permission at the manage level.
   *
   * @param {string} id
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
   * @param {string} id
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.Objects3>} Success
   *
   * @example
   * ```ts
   * const objects3 = await client.customFields.archiveOption('cfo_1234');
   * ```
   */
  archiveOption(id: string, options?: RequestOptions): APIPromise<Shared.Objects3> {
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

export type Union9 = boolean | null;

export interface Objects2 {
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
  sortOrder?: number | Shared.Union2 | null;
}

export type Union1 =
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

export type CustomFieldListResponse = Array<Shared.Objects>;

export interface CustomFieldCreateParams {
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  name: string;
  type: 'text' | 'number' | 'date' | 'boolean' | 'currency' | 'percentage' | 'select' | 'multi_select';
  category: 'info' | 'pii' | 'compensation' | 'banking' | 'it' | 'compliance';
  description?: string | null;
  config?: Shared.Objects1 | null;
  accessLevel?: 'admins' | 'manager' | 'worker' | null;
  inputBy?: 'admin' | 'worker' | null;
  required?: boolean | null;
  options?: Array<Objects2> | null;
}

export interface CustomFieldCreateResponse {
  /**
   * @pattern ^cf_
   */
  id: string;
  name: string;
  description: Shared.Union3 | null;
  type: Shared.Union4;
  config: Shared.Objects1;
  status: Shared.Union5;
  category: Shared.Union6;
  accessLevel: Shared.Union7;
  inputBy: Shared.Union8;
  canWrite: boolean;
  createdAt: string;
  required?: Union9 | null;
}

export interface CustomFieldGetResponse {
  /**
   * @pattern ^cf_
   */
  id: string;
  name: string;
  description: Shared.Union3 | null;
  type: Shared.Union4;
  config: Shared.Objects1;
  status: Shared.Union5;
  category: Shared.Union6;
  accessLevel: Shared.Union7;
  inputBy: Shared.Union8;
  canWrite: boolean;
  createdAt: string;
  options: Array<Shared.Objects3>;
  required?: Union9 | null;
}

export interface CustomFieldUpdateParams {
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  name?: string | null;
  description?: string | null;
  config?: Shared.Objects1 | null;
  category?: 'info' | 'pii' | 'compensation' | 'banking' | 'it' | 'compliance' | null;
  accessLevel?: 'admins' | 'manager' | 'worker' | null;
  inputBy?: 'admin' | 'worker' | null;
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
  sortOrder?: number | Shared.Union2 | null;
}

export interface CustomFieldCreateOptionResponse {
  /**
   * @pattern ^cfo_
   */
  id: string;
  label: string;
  value: string;
  sortOrder: Shared.Union11;
  status: 'active' | 'archived';
  createdAt: string;
}

export interface CustomFieldUpdateOptionParams {
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  label?: string | null;
  sortOrder?: number | Shared.Union2 | null;
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
     * @pattern ^cfv_
     */
    id: string;
    /**
     * @pattern ^wrk_
     */
    workerId: string;
    /**
     * @pattern ^cf_
     */
    fieldId: string;
    value: Shared.Union12;
    updatedAt: string;
  }
}

export interface CustomFieldUpsertValueParams {
  /**
   * @pattern ^wrk_
   */
  workerId: string;
  /**
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
    value: number | Shared.Union2;
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
    amount: number | Shared.Union2;
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
    value: number | Shared.Union2;
  }

  export interface Value7 {
    type: 'select';
    /**
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
   * @pattern ^cfv_
   */
  id: string;
  /**
   * @pattern ^wrk_
   */
  workerId: string;
  /**
   * @pattern ^cf_
   */
  fieldId: string;
  value: Shared.Union12;
  updatedAt: string;
}

export interface CustomFieldClearValueParams {
  /**
   * @pattern ^wrk_
   */
  workerId: string;
  /**
   * @pattern ^cf_
   */
  fieldId: string;
}
export declare namespace CustomFields {
  export {
    type Union9 as Union9,
    type Objects2 as Objects2,
    type Union1 as Union1,
    type CustomFieldListResponse as CustomFieldListResponse,
    type CustomFieldCreateResponse as CustomFieldCreateResponse,
    type CustomFieldGetResponse as CustomFieldGetResponse,
    type CustomFieldCreateOptionResponse as CustomFieldCreateOptionResponse,
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
