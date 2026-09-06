// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';
import type * as PayRatesAPI from './pay-rates';

export class Workers extends APIResource {
  /**
   * List all workers. Workers include anyone employed by the company, whether US or international, full-time employees or contractors.
   *
   * @param {WorkerListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkerListResponse>} Success
   *
   * @example
   * ```ts
   * const worker = await client.workers.list({
   *   limit: 'limit',
   * });
   * ```
   */
  list(query: WorkerListParams, options?: RequestOptions): APIPromise<WorkerListResponse> {
    return this._client.get('/v1/workers', { query, ...options });
  }

  /**
   * Get a specific worker by ID.
   *
   * @param {string} id - The id of the worker.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkerGetResponse>} A worker profile, including lifecycle, workplace, profile, and compensation fields.
   *
   * @example
   * ```ts
   * const worker = await client.workers.get('wrk_1234');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<WorkerGetResponse> {
    return this._client.get(__scalarPath`/v1/workers/${id}`, options);
  }

  /**
   * Delete a worker. Only workers who have not yet completed onboarding can be deleted. Active workers must be properly offboarded.
   *
   * @param {string} id - The id of the worker.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns <No Content>
   *
   * @example
   * ```ts
   * await client.workers.delete('wrk_1234');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(__scalarPath`/v1/workers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a new US employee. The worker will be created in draft status and must be invited separately via the invite endpoint. If hiring in a state without an existing tax registration, you must specify the stateRegistration field.
   *
   * @param {WorkerCreateEmployeeParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkerCreateEmployeeResponse>} A worker profile, including lifecycle, workplace, profile, and compensation fields.
   *
   * @example
   * ```ts
   * const worker = await client.workers.createEmployee({
   *   firstName: 'Jonathan',
   *   lastName: 'Galt',
   *   position: 'Software Engineer',
   *   startDate: '',
   *   email: 'john@joinwarp.com',
   *   departmentId: 'dpt_1234',
   *   managerId: 'wrk_1234',
   *   workLocation: {
   *     type: 'office',
   *     workplaceId: 'wkp_1234',
   *   },
   *   compensation: {
   *     amount: 0,
   *     per: 'hour',
   *   },
   * });
   * ```
   */
  createEmployee(
    body: WorkerCreateEmployeeParams,
    options?: RequestOptions,
  ): APIPromise<WorkerCreateEmployeeResponse> {
    return this._client.post('/v1/workers/employee', { body, ...options });
  }

  /**
   * Create a new contractor. The worker will be created in draft status and must be invited separately via the invite endpoint. For business contractors, the businessName field is required.
   *
   * @param {WorkerCreateContractorParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkerCreateContractorResponse>} A worker profile, including lifecycle, workplace, profile, and compensation fields.
   *
   * @example
   * ```ts
   * const worker = await client.workers.createContractor({
   *   entityType: 'individual',
   *   firstName: 'Melissa',
   *   lastName: 'Jones',
   *   position: 'Design Consultant',
   *   startDate: '',
   *   email: 'john@joinwarp.com',
   *   departmentId: 'dpt_1234',
   *   managerId: 'wrk_1234',
   *   workCountry: 'AD',
   * });
   * ```
   */
  createContractor(
    body: WorkerCreateContractorParams,
    options?: RequestOptions,
  ): APIPromise<WorkerCreateContractorResponse> {
    return this._client.post('/v1/workers/contractor', { body, ...options });
  }

  /**
   * Send or resend the worker invite so they can accept and complete onboarding to Warp. If the worker has already been invited, the invite will be resent with extended validity.
   *
   * @param {string} id - The id of the worker.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkerInviteResponse>} A worker profile, including lifecycle, workplace, profile, and compensation fields.
   *
   * @example
   * ```ts
   * const worker = await client.workers.invite('wrk_1234');
   * ```
   */
  invite(id: string, options?: RequestOptions): APIPromise<WorkerInviteResponse> {
    return this._client.post(__scalarPath`/v1/workers/${id}/invite`, options);
  }
}

/**
 * The worker's current regular pay rate. For a worker whose start date is in the future, this is the regular rate effective on their start date. Null when no regular rate applies or when the API key lacks the corresponding US or global compensation read scope.
 */
export interface PublicWorkerCompensation {
  /**
   * The tag of the pay rate.
   * @pattern ^pyr_
   */
  payRateId: string;
  per: PayRatesAPI.PublicPayRatePer & string;
  /**
   * Amount in the currency base unit, e.g. cents for USD.
   * @minimum 0
   */
  amount: number;
  currency:
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
  /**
   * The server-formatted pay rate, including its period.
   */
  display: string;
}

export type PublicWorkerCustomField =
  | PublicWorkerCustomField.PublicTextWorkerCustomField
  | PublicWorkerCustomField.PublicNumberWorkerCustomField
  | PublicWorkerCustomField.PublicDateWorkerCustomField
  | PublicWorkerCustomField.PublicBooleanWorkerCustomField
  | PublicWorkerCustomField.PublicCurrencyWorkerCustomField
  | PublicWorkerCustomField.PublicPercentageWorkerCustomField
  | PublicWorkerCustomField.PublicSelectWorkerCustomField
  | PublicWorkerCustomField.PublicMultiSelectWorkerCustomField;

export namespace PublicWorkerCustomField {
  export interface PublicTextWorkerCustomField {
    type: 'text';
    /**
     * The tag of a company custom worker field.
     * @pattern ^cf_
     */
    id: string;
    name: string;
    /**
     * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
     */
    redacted: boolean;
    /**
     * The value rendered as the Warp dashboard displays it; null when unset or redacted.
     */
    display: string | null;
    /**
     * The worker’s text; null when unset or when the field is redacted for this API key.
     */
    value: string | null;
  }

  export interface PublicNumberWorkerCustomField {
    type: 'number';
    /**
     * The tag of a company custom worker field.
     * @pattern ^cf_
     */
    id: string;
    name: string;
    /**
     * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
     */
    redacted: boolean;
    /**
     * The value rendered as the Warp dashboard displays it; null when unset or redacted.
     */
    display: string | null;
    /**
     * The worker’s number; null when unset or when the field is redacted for this API key.
     */
    value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
  }

  export interface PublicDateWorkerCustomField {
    type: 'date';
    /**
     * The tag of a company custom worker field.
     * @pattern ^cf_
     */
    id: string;
    name: string;
    /**
     * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
     */
    redacted: boolean;
    /**
     * The value rendered as the Warp dashboard displays it; null when unset or redacted.
     */
    display: string | null;
    /**
     * The worker’s date; null when unset or when the field is redacted for this API key.
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    value: string | null;
  }

  export interface PublicBooleanWorkerCustomField {
    type: 'boolean';
    /**
     * The tag of a company custom worker field.
     * @pattern ^cf_
     */
    id: string;
    name: string;
    /**
     * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
     */
    redacted: boolean;
    /**
     * The value rendered as the Warp dashboard displays it; null when unset or redacted.
     */
    display: string | null;
    /**
     * The worker’s answer; null when unset or when the field is redacted for this API key.
     */
    value: boolean | null;
  }

  export interface PublicCurrencyWorkerCustomField {
    type: 'currency';
    /**
     * The tag of a company custom worker field.
     * @pattern ^cf_
     */
    id: string;
    name: string;
    /**
     * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
     */
    redacted: boolean;
    /**
     * The value rendered as the Warp dashboard displays it; null when unset or redacted.
     */
    display: string | null;
    /**
     * The amount in integer base units of currencyCode (e.g. cents); null when unset or when the field is redacted for this API key.
     */
    amount: number | null;
    /**
     * The amount’s currency; null when unset or when the field is redacted for this API key.
     */
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
      | 'PEN'
      | null;
  }

  export interface PublicPercentageWorkerCustomField {
    type: 'percentage';
    /**
     * The tag of a company custom worker field.
     * @pattern ^cf_
     */
    id: string;
    name: string;
    /**
     * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
     */
    redacted: boolean;
    /**
     * The value rendered as the Warp dashboard displays it; null when unset or redacted.
     */
    display: string | null;
    /**
     * The worker’s percentage; null when unset or when the field is redacted for this API key.
     */
    value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
  }

  export interface PublicSelectWorkerCustomField {
    type: 'select';
    /**
     * The tag of a company custom worker field.
     * @pattern ^cf_
     */
    id: string;
    name: string;
    /**
     * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
     */
    redacted: boolean;
    /**
     * The value rendered as the Warp dashboard displays it; null when unset or redacted.
     */
    display: string | null;
    /**
     * The selected option; null when unset or when the field is redacted for this API key.
     */
    option: PublicSelectWorkerCustomField.Option | null;
  }

  export namespace PublicSelectWorkerCustomField {
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

  export interface PublicMultiSelectWorkerCustomField {
    type: 'multi_select';
    /**
     * The tag of a company custom worker field.
     * @pattern ^cf_
     */
    id: string;
    name: string;
    /**
     * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
     */
    redacted: boolean;
    /**
     * The value rendered as the Warp dashboard displays it; null when unset or redacted.
     */
    display: string | null;
    /**
     * The selected options; null when unset or when the field is redacted for this API key.
     */
    options: Array<PublicMultiSelectWorkerCustomField.Option> | null;
  }

  export namespace PublicMultiSelectWorkerCustomField {
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

export interface PublicTextWorkerCustomField {
  type: 'text';
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  id: string;
  name: string;
  /**
   * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
   */
  redacted: boolean;
  /**
   * The value rendered as the Warp dashboard displays it; null when unset or redacted.
   */
  display: string | null;
  /**
   * The worker’s text; null when unset or when the field is redacted for this API key.
   */
  value: string | null;
}

export interface PublicNumberWorkerCustomField {
  type: 'number';
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  id: string;
  name: string;
  /**
   * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
   */
  redacted: boolean;
  /**
   * The value rendered as the Warp dashboard displays it; null when unset or redacted.
   */
  display: string | null;
  /**
   * The worker’s number; null when unset or when the field is redacted for this API key.
   */
  value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
}

export interface PublicDateWorkerCustomField {
  type: 'date';
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  id: string;
  name: string;
  /**
   * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
   */
  redacted: boolean;
  /**
   * The value rendered as the Warp dashboard displays it; null when unset or redacted.
   */
  display: string | null;
  /**
   * The worker’s date; null when unset or when the field is redacted for this API key.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  value: string | null;
}

export interface PublicBooleanWorkerCustomField {
  type: 'boolean';
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  id: string;
  name: string;
  /**
   * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
   */
  redacted: boolean;
  /**
   * The value rendered as the Warp dashboard displays it; null when unset or redacted.
   */
  display: string | null;
  /**
   * The worker’s answer; null when unset or when the field is redacted for this API key.
   */
  value: boolean | null;
}

export interface PublicCurrencyWorkerCustomField {
  type: 'currency';
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  id: string;
  name: string;
  /**
   * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
   */
  redacted: boolean;
  /**
   * The value rendered as the Warp dashboard displays it; null when unset or redacted.
   */
  display: string | null;
  /**
   * The amount in integer base units of currencyCode (e.g. cents); null when unset or when the field is redacted for this API key.
   */
  amount: number | null;
  /**
   * The amount’s currency; null when unset or when the field is redacted for this API key.
   */
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
    | 'PEN'
    | null;
}

export interface PublicPercentageWorkerCustomField {
  type: 'percentage';
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  id: string;
  name: string;
  /**
   * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
   */
  redacted: boolean;
  /**
   * The value rendered as the Warp dashboard displays it; null when unset or redacted.
   */
  display: string | null;
  /**
   * The worker’s percentage; null when unset or when the field is redacted for this API key.
   */
  value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
}

export interface PublicSelectWorkerCustomField {
  type: 'select';
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  id: string;
  name: string;
  /**
   * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
   */
  redacted: boolean;
  /**
   * The value rendered as the Warp dashboard displays it; null when unset or redacted.
   */
  display: string | null;
  /**
   * The selected option; null when unset or when the field is redacted for this API key.
   */
  option: PublicSelectWorkerCustomField.Option | null;
}

export namespace PublicSelectWorkerCustomField {
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

export interface PublicMultiSelectWorkerCustomField {
  type: 'multi_select';
  /**
   * The tag of a company custom worker field.
   * @pattern ^cf_
   */
  id: string;
  name: string;
  /**
   * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
   */
  redacted: boolean;
  /**
   * The value rendered as the Warp dashboard displays it; null when unset or redacted.
   */
  display: string | null;
  /**
   * The selected options; null when unset or when the field is redacted for this API key.
   */
  options: Array<PublicMultiSelectWorkerCustomField.Option> | null;
}

export namespace PublicMultiSelectWorkerCustomField {
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

export interface WorkerListParams {
  limit: string | null;
  /**
   * @pattern ^wrk_
   */
  afterId?: string | null;
  /**
   * @pattern ^wrk_
   */
  beforeId?: string | null;
  statuses?: Array<'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'> | null;
  types?: Array<'employee' | 'contractor'> | null;
  workEmail?: string | null;
}

export interface WorkerListResponse {
  hasMore: boolean;
  count: number;
  data: Array<WorkerListResponse.Data>;
}

export namespace WorkerListResponse {
  export interface Data {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    startDate: string;
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    /**
     * An email with a reasonably valid regex (based on RFC 5321 atext characters)
     * @format email
     */
    email: string;
    /**
     * @format email
     */
    workEmail: string | null;
    preferredName: string | null;
    /**
     * The worker's biological sex, or null when unavailable.
     */
    biologicalSex: 'male' | 'female' | null;
    /**
     * The worker's marital status, or null when unavailable.
     */
    maritalStatus: 'married' | 'not_married' | null;
    /**
     * The worker's date of birth, or null when unavailable.
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    dateOfBirth: string | null;
    /**
     * The worker's personal phone number, or null when unavailable.
     */
    phone: string | null;
    /**
     * The worker's home address, or null when unavailable.
     */
    address: Data.Address | null;
    /**
     * The "ui" name of a worker. If it's a business contractor business name is used. Otherwise we default to preferred name, then first-last.
     */
    displayName: string;
    /**
     * The IANA timezone of the worker (e.g., America/New_York).
     */
    timeZone: string | null;
    /**
     * The department the worker belongs to, or null if unassigned.
     */
    department: Data.Department | null;
    /**
     * The primary workplace the worker is assigned to, or null if unassigned.
     */
    primaryWorkplace: Data.PrimaryWorkplace | null;
    /**
     * The date the worker was most recently reactivated after an offboarding. This is distinct from startDate and is null if the worker has not been rehired.
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    latestRehireDate: string | null;
    /**
     * The reason the worker was terminated, or null when no termination reason is recorded.
     */
    terminationReason: string | null;
    updatedAt: string;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: PublicWorkerCompensation | null;
    /**
     * The worker's manager, or null if unassigned.
     */
    manager?: Data.Manager | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Data.Level | null;
    customFields?: Array<PublicWorkerCustomField> | null;
  }

  export namespace Data {
    export interface Address {
      line1: string;
      line2: string | null;
      city: string;
      state: string | null;
      postalCode: string | null;
      country:
        | 'AD'
        | 'AE'
        | 'AF'
        | 'AG'
        | 'AI'
        | 'AL'
        | 'AM'
        | 'AO'
        | 'AQ'
        | 'AR'
        | 'AS'
        | 'AT'
        | 'AU'
        | 'AW'
        | 'AX'
        | 'AZ'
        | 'BA'
        | 'BB'
        | 'BD'
        | 'BE'
        | 'BF'
        | 'BG'
        | 'BH'
        | 'BI'
        | 'BJ'
        | 'BL'
        | 'BM'
        | 'BN'
        | 'BO'
        | 'BQ'
        | 'BR'
        | 'BS'
        | 'BT'
        | 'BV'
        | 'BW'
        | 'BY'
        | 'BZ'
        | 'CA'
        | 'CC'
        | 'CD'
        | 'CF'
        | 'CG'
        | 'CH'
        | 'CI'
        | 'CK'
        | 'CL'
        | 'CM'
        | 'CN'
        | 'CO'
        | 'CR'
        | 'CU'
        | 'CV'
        | 'CW'
        | 'CX'
        | 'CY'
        | 'CZ'
        | 'DE'
        | 'DJ'
        | 'DK'
        | 'DM'
        | 'DO'
        | 'DZ'
        | 'EC'
        | 'EE'
        | 'EG'
        | 'EH'
        | 'ER'
        | 'ES'
        | 'ET'
        | 'FI'
        | 'FJ'
        | 'FK'
        | 'FM'
        | 'FO'
        | 'FR'
        | 'GA'
        | 'GB'
        | 'GD'
        | 'GE'
        | 'GF'
        | 'GG'
        | 'GH'
        | 'GI'
        | 'GL'
        | 'GM'
        | 'GN'
        | 'GP'
        | 'GQ'
        | 'GR'
        | 'GS'
        | 'GT'
        | 'GU'
        | 'GW'
        | 'GY'
        | 'HK'
        | 'HM'
        | 'HN'
        | 'HR'
        | 'HT'
        | 'HU'
        | 'ID'
        | 'IE'
        | 'IL'
        | 'IM'
        | 'IN'
        | 'IO'
        | 'IQ'
        | 'IR'
        | 'IS'
        | 'IT'
        | 'JE'
        | 'JM'
        | 'JO'
        | 'JP'
        | 'KE'
        | 'KG'
        | 'KH'
        | 'KI'
        | 'KM'
        | 'KN'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KY'
        | 'KZ'
        | 'LA'
        | 'LB'
        | 'LC'
        | 'LI'
        | 'LK'
        | 'LR'
        | 'LS'
        | 'LT'
        | 'LU'
        | 'LV'
        | 'LY'
        | 'MA'
        | 'MC'
        | 'MD'
        | 'ME'
        | 'MF'
        | 'MG'
        | 'MH'
        | 'MK'
        | 'ML'
        | 'MM'
        | 'MN'
        | 'MO'
        | 'MP'
        | 'MQ'
        | 'MR'
        | 'MS'
        | 'MT'
        | 'MU'
        | 'MV'
        | 'MW'
        | 'MX'
        | 'MY'
        | 'MZ'
        | 'NA'
        | 'NC'
        | 'NE'
        | 'NF'
        | 'NG'
        | 'NI'
        | 'NL'
        | 'NO'
        | 'NP'
        | 'NR'
        | 'NU'
        | 'NZ'
        | 'OM'
        | 'PA'
        | 'PE'
        | 'PF'
        | 'PG'
        | 'PH'
        | 'PK'
        | 'PL'
        | 'PM'
        | 'PN'
        | 'PR'
        | 'PS'
        | 'PT'
        | 'PW'
        | 'PY'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RS'
        | 'RU'
        | 'RW'
        | 'SA'
        | 'SB'
        | 'SC'
        | 'SD'
        | 'SE'
        | 'SG'
        | 'SH'
        | 'SI'
        | 'SJ'
        | 'SK'
        | 'SL'
        | 'SM'
        | 'SN'
        | 'SO'
        | 'SR'
        | 'SS'
        | 'ST'
        | 'SV'
        | 'SX'
        | 'SY'
        | 'SZ'
        | 'TC'
        | 'TD'
        | 'TF'
        | 'TG'
        | 'TH'
        | 'TJ'
        | 'TK'
        | 'TL'
        | 'TM'
        | 'TN'
        | 'TO'
        | 'TR'
        | 'TT'
        | 'TV'
        | 'TW'
        | 'TZ'
        | 'UA'
        | 'UG'
        | 'UM'
        | 'US'
        | 'UY'
        | 'UZ'
        | 'VA'
        | 'VC'
        | 'VE'
        | 'VG'
        | 'VI'
        | 'VN'
        | 'VU'
        | 'WF'
        | 'WS'
        | 'XK'
        | 'YE'
        | 'YT'
        | 'ZA'
        | 'ZM'
        | 'ZW';
    }

    export interface Department {
      /**
       * The unique public id of the department
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface PrimaryWorkplace {
      /**
       * Public workplace identifier
       * @pattern ^wkp_
       */
      id: string;
      name: string;
      type: 'remote' | 'office';
    }

    export interface Manager {
      /**
       * The id of the worker.
       * @pattern ^wrk_
       */
      id: string;
      firstName: string;
      lastName: string;
      displayName: string;
    }

    export interface Level {
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
}

export interface WorkerGetResponse {
  /**
   * The id of the worker.
   * @pattern ^wrk_
   */
  id: string;
  position: string;
  type: 'employee' | 'contractor';
  status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  startDate: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  endDate: string | null;
  isBusiness: boolean | null;
  businessName: string | null;
  firstName: string;
  lastName: string;
  /**
   * An email with a reasonably valid regex (based on RFC 5321 atext characters)
   * @format email
   */
  email: string;
  /**
   * @format email
   */
  workEmail: string | null;
  preferredName: string | null;
  /**
   * The worker's biological sex, or null when unavailable.
   */
  biologicalSex: 'male' | 'female' | null;
  /**
   * The worker's marital status, or null when unavailable.
   */
  maritalStatus: 'married' | 'not_married' | null;
  /**
   * The worker's date of birth, or null when unavailable.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  dateOfBirth: string | null;
  /**
   * The worker's personal phone number, or null when unavailable.
   */
  phone: string | null;
  /**
   * The worker's home address, or null when unavailable.
   */
  address: WorkerGetResponse.Address | null;
  /**
   * The "ui" name of a worker. If it's a business contractor business name is used. Otherwise we default to preferred name, then first-last.
   */
  displayName: string;
  /**
   * The IANA timezone of the worker (e.g., America/New_York).
   */
  timeZone: string | null;
  /**
   * The department the worker belongs to, or null if unassigned.
   */
  department: WorkerGetResponse.Department | null;
  /**
   * The primary workplace the worker is assigned to, or null if unassigned.
   */
  primaryWorkplace: WorkerGetResponse.PrimaryWorkplace | null;
  /**
   * The date the worker was most recently reactivated after an offboarding. This is distinct from startDate and is null if the worker has not been rehired.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  latestRehireDate: string | null;
  /**
   * The reason the worker was terminated, or null when no termination reason is recorded.
   */
  terminationReason: string | null;
  updatedAt: string;
  /**
   * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
   */
  compensation: PublicWorkerCompensation | null;
  /**
   * The worker's manager, or null if unassigned.
   */
  manager?: WorkerGetResponse.Manager | null;
  /**
   * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
   */
  level?: WorkerGetResponse.Level | null;
  customFields?: Array<PublicWorkerCustomField> | null;
}

export namespace WorkerGetResponse {
  export interface Address {
    line1: string;
    line2: string | null;
    city: string;
    state: string | null;
    postalCode: string | null;
    country:
      | 'AD'
      | 'AE'
      | 'AF'
      | 'AG'
      | 'AI'
      | 'AL'
      | 'AM'
      | 'AO'
      | 'AQ'
      | 'AR'
      | 'AS'
      | 'AT'
      | 'AU'
      | 'AW'
      | 'AX'
      | 'AZ'
      | 'BA'
      | 'BB'
      | 'BD'
      | 'BE'
      | 'BF'
      | 'BG'
      | 'BH'
      | 'BI'
      | 'BJ'
      | 'BL'
      | 'BM'
      | 'BN'
      | 'BO'
      | 'BQ'
      | 'BR'
      | 'BS'
      | 'BT'
      | 'BV'
      | 'BW'
      | 'BY'
      | 'BZ'
      | 'CA'
      | 'CC'
      | 'CD'
      | 'CF'
      | 'CG'
      | 'CH'
      | 'CI'
      | 'CK'
      | 'CL'
      | 'CM'
      | 'CN'
      | 'CO'
      | 'CR'
      | 'CU'
      | 'CV'
      | 'CW'
      | 'CX'
      | 'CY'
      | 'CZ'
      | 'DE'
      | 'DJ'
      | 'DK'
      | 'DM'
      | 'DO'
      | 'DZ'
      | 'EC'
      | 'EE'
      | 'EG'
      | 'EH'
      | 'ER'
      | 'ES'
      | 'ET'
      | 'FI'
      | 'FJ'
      | 'FK'
      | 'FM'
      | 'FO'
      | 'FR'
      | 'GA'
      | 'GB'
      | 'GD'
      | 'GE'
      | 'GF'
      | 'GG'
      | 'GH'
      | 'GI'
      | 'GL'
      | 'GM'
      | 'GN'
      | 'GP'
      | 'GQ'
      | 'GR'
      | 'GS'
      | 'GT'
      | 'GU'
      | 'GW'
      | 'GY'
      | 'HK'
      | 'HM'
      | 'HN'
      | 'HR'
      | 'HT'
      | 'HU'
      | 'ID'
      | 'IE'
      | 'IL'
      | 'IM'
      | 'IN'
      | 'IO'
      | 'IQ'
      | 'IR'
      | 'IS'
      | 'IT'
      | 'JE'
      | 'JM'
      | 'JO'
      | 'JP'
      | 'KE'
      | 'KG'
      | 'KH'
      | 'KI'
      | 'KM'
      | 'KN'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KY'
      | 'KZ'
      | 'LA'
      | 'LB'
      | 'LC'
      | 'LI'
      | 'LK'
      | 'LR'
      | 'LS'
      | 'LT'
      | 'LU'
      | 'LV'
      | 'LY'
      | 'MA'
      | 'MC'
      | 'MD'
      | 'ME'
      | 'MF'
      | 'MG'
      | 'MH'
      | 'MK'
      | 'ML'
      | 'MM'
      | 'MN'
      | 'MO'
      | 'MP'
      | 'MQ'
      | 'MR'
      | 'MS'
      | 'MT'
      | 'MU'
      | 'MV'
      | 'MW'
      | 'MX'
      | 'MY'
      | 'MZ'
      | 'NA'
      | 'NC'
      | 'NE'
      | 'NF'
      | 'NG'
      | 'NI'
      | 'NL'
      | 'NO'
      | 'NP'
      | 'NR'
      | 'NU'
      | 'NZ'
      | 'OM'
      | 'PA'
      | 'PE'
      | 'PF'
      | 'PG'
      | 'PH'
      | 'PK'
      | 'PL'
      | 'PM'
      | 'PN'
      | 'PR'
      | 'PS'
      | 'PT'
      | 'PW'
      | 'PY'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RS'
      | 'RU'
      | 'RW'
      | 'SA'
      | 'SB'
      | 'SC'
      | 'SD'
      | 'SE'
      | 'SG'
      | 'SH'
      | 'SI'
      | 'SJ'
      | 'SK'
      | 'SL'
      | 'SM'
      | 'SN'
      | 'SO'
      | 'SR'
      | 'SS'
      | 'ST'
      | 'SV'
      | 'SX'
      | 'SY'
      | 'SZ'
      | 'TC'
      | 'TD'
      | 'TF'
      | 'TG'
      | 'TH'
      | 'TJ'
      | 'TK'
      | 'TL'
      | 'TM'
      | 'TN'
      | 'TO'
      | 'TR'
      | 'TT'
      | 'TV'
      | 'TW'
      | 'TZ'
      | 'UA'
      | 'UG'
      | 'UM'
      | 'US'
      | 'UY'
      | 'UZ'
      | 'VA'
      | 'VC'
      | 'VE'
      | 'VG'
      | 'VI'
      | 'VN'
      | 'VU'
      | 'WF'
      | 'WS'
      | 'XK'
      | 'YE'
      | 'YT'
      | 'ZA'
      | 'ZM'
      | 'ZW';
  }

  export interface Department {
    /**
     * The unique public id of the department
     * @pattern ^dpt_
     */
    id: string;
    name: string;
  }

  export interface PrimaryWorkplace {
    /**
     * Public workplace identifier
     * @pattern ^wkp_
     */
    id: string;
    name: string;
    type: 'remote' | 'office';
  }

  export interface Manager {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    id: string;
    firstName: string;
    lastName: string;
    displayName: string;
  }

  export interface Level {
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

export interface WorkerCreateEmployeeParams {
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  firstName: string;
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  lastName: string;
  /**
   * The employee's job title.
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  position: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  startDate: string;
  /**
   * Personal email address. The invite will be sent here.
   * @format email
   */
  email: string;
  /**
   * The department to assign this employee to.
   * @pattern ^dpt_
   */
  departmentId: string;
  /**
   * The worker id of this employee's direct manager.
   * @pattern ^wrk_
   */
  managerId: string;
  /**
   * Where the employee will work. Either an existing company workplace or a remote US state.
   */
  workLocation: WorkerCreateEmployeeParams.OfficeWorkLocation | WorkerCreateEmployeeParams.RemoteWorkLocation;
  /**
   * The employee's base compensation.
   */
  compensation: WorkerCreateEmployeeParams.Compensation;
  /**
   * @format email
   */
  workEmail?: string | null;
  requireI9?: boolean | null;
  stateRegistration?: 'self_managed' | 'warp_managed' | null;
  /**
   * The job level to assign this employee to, or null to leave unassigned. Omit this field when job levels are not enabled.
   * @pattern ^jlvl_
   */
  levelId?: string | null;
  stockOptions?: number | 'Infinity' | '-Infinity' | 'NaN' | null;
  paySchedule?: 'weekly' | 'biweekly' | 'monthly' | 'semimonthly' | 'quarterly' | 'annually' | null;
}

export namespace WorkerCreateEmployeeParams {
  export interface OfficeWorkLocation {
    type: 'office';
    /**
     * Public workplace identifier
     * @pattern ^wkp_
     */
    workplaceId: string;
  }

  export interface RemoteWorkLocation {
    type: 'remote';
    /**
     * The US state where the remote employee works. Required for tax purposes.
     */
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
  }

  export interface Compensation {
    amount: number;
    /**
     * Whether the amount is per hour or per year.
     */
    per: 'hour' | 'year';
  }
}

export interface WorkerCreateEmployeeResponse {
  /**
   * The id of the worker.
   * @pattern ^wrk_
   */
  id: string;
  position: string;
  type: 'employee' | 'contractor';
  status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  startDate: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  endDate: string | null;
  isBusiness: boolean | null;
  businessName: string | null;
  firstName: string;
  lastName: string;
  /**
   * An email with a reasonably valid regex (based on RFC 5321 atext characters)
   * @format email
   */
  email: string;
  /**
   * @format email
   */
  workEmail: string | null;
  preferredName: string | null;
  /**
   * The worker's biological sex, or null when unavailable.
   */
  biologicalSex: 'male' | 'female' | null;
  /**
   * The worker's marital status, or null when unavailable.
   */
  maritalStatus: 'married' | 'not_married' | null;
  /**
   * The worker's date of birth, or null when unavailable.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  dateOfBirth: string | null;
  /**
   * The worker's personal phone number, or null when unavailable.
   */
  phone: string | null;
  /**
   * The worker's home address, or null when unavailable.
   */
  address: WorkerCreateEmployeeResponse.Address | null;
  /**
   * The "ui" name of a worker. If it's a business contractor business name is used. Otherwise we default to preferred name, then first-last.
   */
  displayName: string;
  /**
   * The IANA timezone of the worker (e.g., America/New_York).
   */
  timeZone: string | null;
  /**
   * The department the worker belongs to, or null if unassigned.
   */
  department: WorkerCreateEmployeeResponse.Department | null;
  /**
   * The primary workplace the worker is assigned to, or null if unassigned.
   */
  primaryWorkplace: WorkerCreateEmployeeResponse.PrimaryWorkplace | null;
  /**
   * The date the worker was most recently reactivated after an offboarding. This is distinct from startDate and is null if the worker has not been rehired.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  latestRehireDate: string | null;
  /**
   * The reason the worker was terminated, or null when no termination reason is recorded.
   */
  terminationReason: string | null;
  updatedAt: string;
  /**
   * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
   */
  compensation: PublicWorkerCompensation | null;
  /**
   * The worker's manager, or null if unassigned.
   */
  manager?: WorkerCreateEmployeeResponse.Manager | null;
  /**
   * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
   */
  level?: WorkerCreateEmployeeResponse.Level | null;
  customFields?: Array<PublicWorkerCustomField> | null;
}

export namespace WorkerCreateEmployeeResponse {
  export interface Address {
    line1: string;
    line2: string | null;
    city: string;
    state: string | null;
    postalCode: string | null;
    country:
      | 'AD'
      | 'AE'
      | 'AF'
      | 'AG'
      | 'AI'
      | 'AL'
      | 'AM'
      | 'AO'
      | 'AQ'
      | 'AR'
      | 'AS'
      | 'AT'
      | 'AU'
      | 'AW'
      | 'AX'
      | 'AZ'
      | 'BA'
      | 'BB'
      | 'BD'
      | 'BE'
      | 'BF'
      | 'BG'
      | 'BH'
      | 'BI'
      | 'BJ'
      | 'BL'
      | 'BM'
      | 'BN'
      | 'BO'
      | 'BQ'
      | 'BR'
      | 'BS'
      | 'BT'
      | 'BV'
      | 'BW'
      | 'BY'
      | 'BZ'
      | 'CA'
      | 'CC'
      | 'CD'
      | 'CF'
      | 'CG'
      | 'CH'
      | 'CI'
      | 'CK'
      | 'CL'
      | 'CM'
      | 'CN'
      | 'CO'
      | 'CR'
      | 'CU'
      | 'CV'
      | 'CW'
      | 'CX'
      | 'CY'
      | 'CZ'
      | 'DE'
      | 'DJ'
      | 'DK'
      | 'DM'
      | 'DO'
      | 'DZ'
      | 'EC'
      | 'EE'
      | 'EG'
      | 'EH'
      | 'ER'
      | 'ES'
      | 'ET'
      | 'FI'
      | 'FJ'
      | 'FK'
      | 'FM'
      | 'FO'
      | 'FR'
      | 'GA'
      | 'GB'
      | 'GD'
      | 'GE'
      | 'GF'
      | 'GG'
      | 'GH'
      | 'GI'
      | 'GL'
      | 'GM'
      | 'GN'
      | 'GP'
      | 'GQ'
      | 'GR'
      | 'GS'
      | 'GT'
      | 'GU'
      | 'GW'
      | 'GY'
      | 'HK'
      | 'HM'
      | 'HN'
      | 'HR'
      | 'HT'
      | 'HU'
      | 'ID'
      | 'IE'
      | 'IL'
      | 'IM'
      | 'IN'
      | 'IO'
      | 'IQ'
      | 'IR'
      | 'IS'
      | 'IT'
      | 'JE'
      | 'JM'
      | 'JO'
      | 'JP'
      | 'KE'
      | 'KG'
      | 'KH'
      | 'KI'
      | 'KM'
      | 'KN'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KY'
      | 'KZ'
      | 'LA'
      | 'LB'
      | 'LC'
      | 'LI'
      | 'LK'
      | 'LR'
      | 'LS'
      | 'LT'
      | 'LU'
      | 'LV'
      | 'LY'
      | 'MA'
      | 'MC'
      | 'MD'
      | 'ME'
      | 'MF'
      | 'MG'
      | 'MH'
      | 'MK'
      | 'ML'
      | 'MM'
      | 'MN'
      | 'MO'
      | 'MP'
      | 'MQ'
      | 'MR'
      | 'MS'
      | 'MT'
      | 'MU'
      | 'MV'
      | 'MW'
      | 'MX'
      | 'MY'
      | 'MZ'
      | 'NA'
      | 'NC'
      | 'NE'
      | 'NF'
      | 'NG'
      | 'NI'
      | 'NL'
      | 'NO'
      | 'NP'
      | 'NR'
      | 'NU'
      | 'NZ'
      | 'OM'
      | 'PA'
      | 'PE'
      | 'PF'
      | 'PG'
      | 'PH'
      | 'PK'
      | 'PL'
      | 'PM'
      | 'PN'
      | 'PR'
      | 'PS'
      | 'PT'
      | 'PW'
      | 'PY'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RS'
      | 'RU'
      | 'RW'
      | 'SA'
      | 'SB'
      | 'SC'
      | 'SD'
      | 'SE'
      | 'SG'
      | 'SH'
      | 'SI'
      | 'SJ'
      | 'SK'
      | 'SL'
      | 'SM'
      | 'SN'
      | 'SO'
      | 'SR'
      | 'SS'
      | 'ST'
      | 'SV'
      | 'SX'
      | 'SY'
      | 'SZ'
      | 'TC'
      | 'TD'
      | 'TF'
      | 'TG'
      | 'TH'
      | 'TJ'
      | 'TK'
      | 'TL'
      | 'TM'
      | 'TN'
      | 'TO'
      | 'TR'
      | 'TT'
      | 'TV'
      | 'TW'
      | 'TZ'
      | 'UA'
      | 'UG'
      | 'UM'
      | 'US'
      | 'UY'
      | 'UZ'
      | 'VA'
      | 'VC'
      | 'VE'
      | 'VG'
      | 'VI'
      | 'VN'
      | 'VU'
      | 'WF'
      | 'WS'
      | 'XK'
      | 'YE'
      | 'YT'
      | 'ZA'
      | 'ZM'
      | 'ZW';
  }

  export interface Department {
    /**
     * The unique public id of the department
     * @pattern ^dpt_
     */
    id: string;
    name: string;
  }

  export interface PrimaryWorkplace {
    /**
     * Public workplace identifier
     * @pattern ^wkp_
     */
    id: string;
    name: string;
    type: 'remote' | 'office';
  }

  export interface Manager {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    id: string;
    firstName: string;
    lastName: string;
    displayName: string;
  }

  export interface Level {
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

export interface WorkerCreateContractorParams {
  /**
   * Whether the contractor is an individual person or a business entity.
   */
  entityType: 'individual' | 'business';
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  firstName: string;
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  lastName: string;
  /**
   * The contractor's role or job title.
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  position: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  startDate: string;
  /**
   * Personal email address. The invite will be sent here.
   * @format email
   */
  email: string;
  /**
   * The department to assign this contractor to.
   * @pattern ^dpt_
   */
  departmentId: string;
  /**
   * The worker id of this contractor's direct manager.
   * @pattern ^wrk_
   */
  managerId: string;
  workCountry:
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AI'
    | 'AL'
    | 'AM'
    | 'AO'
    | 'AQ'
    | 'AR'
    | 'AS'
    | 'AT'
    | 'AU'
    | 'AW'
    | 'AX'
    | 'AZ'
    | 'BA'
    | 'BB'
    | 'BD'
    | 'BE'
    | 'BF'
    | 'BG'
    | 'BH'
    | 'BI'
    | 'BJ'
    | 'BL'
    | 'BM'
    | 'BN'
    | 'BO'
    | 'BQ'
    | 'BR'
    | 'BS'
    | 'BT'
    | 'BV'
    | 'BW'
    | 'BY'
    | 'BZ'
    | 'CA'
    | 'CC'
    | 'CD'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CR'
    | 'CU'
    | 'CV'
    | 'CW'
    | 'CX'
    | 'CY'
    | 'CZ'
    | 'DE'
    | 'DJ'
    | 'DK'
    | 'DM'
    | 'DO'
    | 'DZ'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'EH'
    | 'ER'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FJ'
    | 'FK'
    | 'FM'
    | 'FO'
    | 'FR'
    | 'GA'
    | 'GB'
    | 'GD'
    | 'GE'
    | 'GF'
    | 'GG'
    | 'GH'
    | 'GI'
    | 'GL'
    | 'GM'
    | 'GN'
    | 'GP'
    | 'GQ'
    | 'GR'
    | 'GS'
    | 'GT'
    | 'GU'
    | 'GW'
    | 'GY'
    | 'HK'
    | 'HM'
    | 'HN'
    | 'HR'
    | 'HT'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IM'
    | 'IN'
    | 'IO'
    | 'IQ'
    | 'IR'
    | 'IS'
    | 'IT'
    | 'JE'
    | 'JM'
    | 'JO'
    | 'JP'
    | 'KE'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KM'
    | 'KN'
    | 'KP'
    | 'KR'
    | 'KW'
    | 'KY'
    | 'KZ'
    | 'LA'
    | 'LB'
    | 'LC'
    | 'LI'
    | 'LK'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'LY'
    | 'MA'
    | 'MC'
    | 'MD'
    | 'ME'
    | 'MF'
    | 'MG'
    | 'MH'
    | 'MK'
    | 'ML'
    | 'MM'
    | 'MN'
    | 'MO'
    | 'MP'
    | 'MQ'
    | 'MR'
    | 'MS'
    | 'MT'
    | 'MU'
    | 'MV'
    | 'MW'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NA'
    | 'NC'
    | 'NE'
    | 'NF'
    | 'NG'
    | 'NI'
    | 'NL'
    | 'NO'
    | 'NP'
    | 'NR'
    | 'NU'
    | 'NZ'
    | 'OM'
    | 'PA'
    | 'PE'
    | 'PF'
    | 'PG'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PM'
    | 'PN'
    | 'PR'
    | 'PS'
    | 'PT'
    | 'PW'
    | 'PY'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RS'
    | 'RU'
    | 'RW'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SD'
    | 'SE'
    | 'SG'
    | 'SH'
    | 'SI'
    | 'SJ'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SO'
    | 'SR'
    | 'SS'
    | 'ST'
    | 'SV'
    | 'SX'
    | 'SY'
    | 'SZ'
    | 'TC'
    | 'TD'
    | 'TF'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TK'
    | 'TL'
    | 'TM'
    | 'TN'
    | 'TO'
    | 'TR'
    | 'TT'
    | 'TV'
    | 'TW'
    | 'TZ'
    | 'UA'
    | 'UG'
    | 'UM'
    | 'US'
    | 'UY'
    | 'UZ'
    | 'VA'
    | 'VC'
    | 'VE'
    | 'VG'
    | 'VI'
    | 'VN'
    | 'VU'
    | 'WF'
    | 'WS'
    | 'XK'
    | 'YE'
    | 'YT'
    | 'ZA'
    | 'ZM'
    | 'ZW';
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  businessName?: string | null;
  scopeOfWork?: string | null;
  /**
   * @format email
   */
  workEmail?: string | null;
  /**
   * The job level to assign this contractor to, or null to leave unassigned. Omit this field when job levels are not enabled.
   * @pattern ^jlvl_
   */
  levelId?: string | null;
  compensation?: WorkerCreateContractorParams.Compensation | null;
  paySchedule?: 'weekly' | 'biweekly' | 'monthly' | 'semimonthly' | 'quarterly' | 'annually' | null;
}

export namespace WorkerCreateContractorParams {
  export interface Compensation {
    currency:
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
    amount: number;
    /**
     * The pay period for the compensation amount.
     */
    per: 'year' | 'month' | 'week' | 'hour';
  }
}

export interface WorkerCreateContractorResponse {
  /**
   * The id of the worker.
   * @pattern ^wrk_
   */
  id: string;
  position: string;
  type: 'employee' | 'contractor';
  status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  startDate: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  endDate: string | null;
  isBusiness: boolean | null;
  businessName: string | null;
  firstName: string;
  lastName: string;
  /**
   * An email with a reasonably valid regex (based on RFC 5321 atext characters)
   * @format email
   */
  email: string;
  /**
   * @format email
   */
  workEmail: string | null;
  preferredName: string | null;
  /**
   * The worker's biological sex, or null when unavailable.
   */
  biologicalSex: 'male' | 'female' | null;
  /**
   * The worker's marital status, or null when unavailable.
   */
  maritalStatus: 'married' | 'not_married' | null;
  /**
   * The worker's date of birth, or null when unavailable.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  dateOfBirth: string | null;
  /**
   * The worker's personal phone number, or null when unavailable.
   */
  phone: string | null;
  /**
   * The worker's home address, or null when unavailable.
   */
  address: WorkerCreateContractorResponse.Address | null;
  /**
   * The "ui" name of a worker. If it's a business contractor business name is used. Otherwise we default to preferred name, then first-last.
   */
  displayName: string;
  /**
   * The IANA timezone of the worker (e.g., America/New_York).
   */
  timeZone: string | null;
  /**
   * The department the worker belongs to, or null if unassigned.
   */
  department: WorkerCreateContractorResponse.Department | null;
  /**
   * The primary workplace the worker is assigned to, or null if unassigned.
   */
  primaryWorkplace: WorkerCreateContractorResponse.PrimaryWorkplace | null;
  /**
   * The date the worker was most recently reactivated after an offboarding. This is distinct from startDate and is null if the worker has not been rehired.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  latestRehireDate: string | null;
  /**
   * The reason the worker was terminated, or null when no termination reason is recorded.
   */
  terminationReason: string | null;
  updatedAt: string;
  /**
   * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
   */
  compensation: PublicWorkerCompensation | null;
  /**
   * The worker's manager, or null if unassigned.
   */
  manager?: WorkerCreateContractorResponse.Manager | null;
  /**
   * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
   */
  level?: WorkerCreateContractorResponse.Level | null;
  customFields?: Array<PublicWorkerCustomField> | null;
}

export namespace WorkerCreateContractorResponse {
  export interface Address {
    line1: string;
    line2: string | null;
    city: string;
    state: string | null;
    postalCode: string | null;
    country:
      | 'AD'
      | 'AE'
      | 'AF'
      | 'AG'
      | 'AI'
      | 'AL'
      | 'AM'
      | 'AO'
      | 'AQ'
      | 'AR'
      | 'AS'
      | 'AT'
      | 'AU'
      | 'AW'
      | 'AX'
      | 'AZ'
      | 'BA'
      | 'BB'
      | 'BD'
      | 'BE'
      | 'BF'
      | 'BG'
      | 'BH'
      | 'BI'
      | 'BJ'
      | 'BL'
      | 'BM'
      | 'BN'
      | 'BO'
      | 'BQ'
      | 'BR'
      | 'BS'
      | 'BT'
      | 'BV'
      | 'BW'
      | 'BY'
      | 'BZ'
      | 'CA'
      | 'CC'
      | 'CD'
      | 'CF'
      | 'CG'
      | 'CH'
      | 'CI'
      | 'CK'
      | 'CL'
      | 'CM'
      | 'CN'
      | 'CO'
      | 'CR'
      | 'CU'
      | 'CV'
      | 'CW'
      | 'CX'
      | 'CY'
      | 'CZ'
      | 'DE'
      | 'DJ'
      | 'DK'
      | 'DM'
      | 'DO'
      | 'DZ'
      | 'EC'
      | 'EE'
      | 'EG'
      | 'EH'
      | 'ER'
      | 'ES'
      | 'ET'
      | 'FI'
      | 'FJ'
      | 'FK'
      | 'FM'
      | 'FO'
      | 'FR'
      | 'GA'
      | 'GB'
      | 'GD'
      | 'GE'
      | 'GF'
      | 'GG'
      | 'GH'
      | 'GI'
      | 'GL'
      | 'GM'
      | 'GN'
      | 'GP'
      | 'GQ'
      | 'GR'
      | 'GS'
      | 'GT'
      | 'GU'
      | 'GW'
      | 'GY'
      | 'HK'
      | 'HM'
      | 'HN'
      | 'HR'
      | 'HT'
      | 'HU'
      | 'ID'
      | 'IE'
      | 'IL'
      | 'IM'
      | 'IN'
      | 'IO'
      | 'IQ'
      | 'IR'
      | 'IS'
      | 'IT'
      | 'JE'
      | 'JM'
      | 'JO'
      | 'JP'
      | 'KE'
      | 'KG'
      | 'KH'
      | 'KI'
      | 'KM'
      | 'KN'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KY'
      | 'KZ'
      | 'LA'
      | 'LB'
      | 'LC'
      | 'LI'
      | 'LK'
      | 'LR'
      | 'LS'
      | 'LT'
      | 'LU'
      | 'LV'
      | 'LY'
      | 'MA'
      | 'MC'
      | 'MD'
      | 'ME'
      | 'MF'
      | 'MG'
      | 'MH'
      | 'MK'
      | 'ML'
      | 'MM'
      | 'MN'
      | 'MO'
      | 'MP'
      | 'MQ'
      | 'MR'
      | 'MS'
      | 'MT'
      | 'MU'
      | 'MV'
      | 'MW'
      | 'MX'
      | 'MY'
      | 'MZ'
      | 'NA'
      | 'NC'
      | 'NE'
      | 'NF'
      | 'NG'
      | 'NI'
      | 'NL'
      | 'NO'
      | 'NP'
      | 'NR'
      | 'NU'
      | 'NZ'
      | 'OM'
      | 'PA'
      | 'PE'
      | 'PF'
      | 'PG'
      | 'PH'
      | 'PK'
      | 'PL'
      | 'PM'
      | 'PN'
      | 'PR'
      | 'PS'
      | 'PT'
      | 'PW'
      | 'PY'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RS'
      | 'RU'
      | 'RW'
      | 'SA'
      | 'SB'
      | 'SC'
      | 'SD'
      | 'SE'
      | 'SG'
      | 'SH'
      | 'SI'
      | 'SJ'
      | 'SK'
      | 'SL'
      | 'SM'
      | 'SN'
      | 'SO'
      | 'SR'
      | 'SS'
      | 'ST'
      | 'SV'
      | 'SX'
      | 'SY'
      | 'SZ'
      | 'TC'
      | 'TD'
      | 'TF'
      | 'TG'
      | 'TH'
      | 'TJ'
      | 'TK'
      | 'TL'
      | 'TM'
      | 'TN'
      | 'TO'
      | 'TR'
      | 'TT'
      | 'TV'
      | 'TW'
      | 'TZ'
      | 'UA'
      | 'UG'
      | 'UM'
      | 'US'
      | 'UY'
      | 'UZ'
      | 'VA'
      | 'VC'
      | 'VE'
      | 'VG'
      | 'VI'
      | 'VN'
      | 'VU'
      | 'WF'
      | 'WS'
      | 'XK'
      | 'YE'
      | 'YT'
      | 'ZA'
      | 'ZM'
      | 'ZW';
  }

  export interface Department {
    /**
     * The unique public id of the department
     * @pattern ^dpt_
     */
    id: string;
    name: string;
  }

  export interface PrimaryWorkplace {
    /**
     * Public workplace identifier
     * @pattern ^wkp_
     */
    id: string;
    name: string;
    type: 'remote' | 'office';
  }

  export interface Manager {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    id: string;
    firstName: string;
    lastName: string;
    displayName: string;
  }

  export interface Level {
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

export interface WorkerInviteResponse {
  /**
   * The id of the worker.
   * @pattern ^wrk_
   */
  id: string;
  position: string;
  type: 'employee' | 'contractor';
  status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  startDate: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  endDate: string | null;
  isBusiness: boolean | null;
  businessName: string | null;
  firstName: string;
  lastName: string;
  /**
   * An email with a reasonably valid regex (based on RFC 5321 atext characters)
   * @format email
   */
  email: string;
  /**
   * @format email
   */
  workEmail: string | null;
  preferredName: string | null;
  /**
   * The worker's biological sex, or null when unavailable.
   */
  biologicalSex: 'male' | 'female' | null;
  /**
   * The worker's marital status, or null when unavailable.
   */
  maritalStatus: 'married' | 'not_married' | null;
  /**
   * The worker's date of birth, or null when unavailable.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  dateOfBirth: string | null;
  /**
   * The worker's personal phone number, or null when unavailable.
   */
  phone: string | null;
  /**
   * The worker's home address, or null when unavailable.
   */
  address: WorkerInviteResponse.Address | null;
  /**
   * The "ui" name of a worker. If it's a business contractor business name is used. Otherwise we default to preferred name, then first-last.
   */
  displayName: string;
  /**
   * The IANA timezone of the worker (e.g., America/New_York).
   */
  timeZone: string | null;
  /**
   * The department the worker belongs to, or null if unassigned.
   */
  department: WorkerInviteResponse.Department | null;
  /**
   * The primary workplace the worker is assigned to, or null if unassigned.
   */
  primaryWorkplace: WorkerInviteResponse.PrimaryWorkplace | null;
  /**
   * The date the worker was most recently reactivated after an offboarding. This is distinct from startDate and is null if the worker has not been rehired.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  latestRehireDate: string | null;
  /**
   * The reason the worker was terminated, or null when no termination reason is recorded.
   */
  terminationReason: string | null;
  updatedAt: string;
  /**
   * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
   */
  compensation: PublicWorkerCompensation | null;
  /**
   * The worker's manager, or null if unassigned.
   */
  manager?: WorkerInviteResponse.Manager | null;
  /**
   * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
   */
  level?: WorkerInviteResponse.Level | null;
  customFields?: Array<PublicWorkerCustomField> | null;
}

export namespace WorkerInviteResponse {
  export interface Address {
    line1: string;
    line2: string | null;
    city: string;
    state: string | null;
    postalCode: string | null;
    country:
      | 'AD'
      | 'AE'
      | 'AF'
      | 'AG'
      | 'AI'
      | 'AL'
      | 'AM'
      | 'AO'
      | 'AQ'
      | 'AR'
      | 'AS'
      | 'AT'
      | 'AU'
      | 'AW'
      | 'AX'
      | 'AZ'
      | 'BA'
      | 'BB'
      | 'BD'
      | 'BE'
      | 'BF'
      | 'BG'
      | 'BH'
      | 'BI'
      | 'BJ'
      | 'BL'
      | 'BM'
      | 'BN'
      | 'BO'
      | 'BQ'
      | 'BR'
      | 'BS'
      | 'BT'
      | 'BV'
      | 'BW'
      | 'BY'
      | 'BZ'
      | 'CA'
      | 'CC'
      | 'CD'
      | 'CF'
      | 'CG'
      | 'CH'
      | 'CI'
      | 'CK'
      | 'CL'
      | 'CM'
      | 'CN'
      | 'CO'
      | 'CR'
      | 'CU'
      | 'CV'
      | 'CW'
      | 'CX'
      | 'CY'
      | 'CZ'
      | 'DE'
      | 'DJ'
      | 'DK'
      | 'DM'
      | 'DO'
      | 'DZ'
      | 'EC'
      | 'EE'
      | 'EG'
      | 'EH'
      | 'ER'
      | 'ES'
      | 'ET'
      | 'FI'
      | 'FJ'
      | 'FK'
      | 'FM'
      | 'FO'
      | 'FR'
      | 'GA'
      | 'GB'
      | 'GD'
      | 'GE'
      | 'GF'
      | 'GG'
      | 'GH'
      | 'GI'
      | 'GL'
      | 'GM'
      | 'GN'
      | 'GP'
      | 'GQ'
      | 'GR'
      | 'GS'
      | 'GT'
      | 'GU'
      | 'GW'
      | 'GY'
      | 'HK'
      | 'HM'
      | 'HN'
      | 'HR'
      | 'HT'
      | 'HU'
      | 'ID'
      | 'IE'
      | 'IL'
      | 'IM'
      | 'IN'
      | 'IO'
      | 'IQ'
      | 'IR'
      | 'IS'
      | 'IT'
      | 'JE'
      | 'JM'
      | 'JO'
      | 'JP'
      | 'KE'
      | 'KG'
      | 'KH'
      | 'KI'
      | 'KM'
      | 'KN'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KY'
      | 'KZ'
      | 'LA'
      | 'LB'
      | 'LC'
      | 'LI'
      | 'LK'
      | 'LR'
      | 'LS'
      | 'LT'
      | 'LU'
      | 'LV'
      | 'LY'
      | 'MA'
      | 'MC'
      | 'MD'
      | 'ME'
      | 'MF'
      | 'MG'
      | 'MH'
      | 'MK'
      | 'ML'
      | 'MM'
      | 'MN'
      | 'MO'
      | 'MP'
      | 'MQ'
      | 'MR'
      | 'MS'
      | 'MT'
      | 'MU'
      | 'MV'
      | 'MW'
      | 'MX'
      | 'MY'
      | 'MZ'
      | 'NA'
      | 'NC'
      | 'NE'
      | 'NF'
      | 'NG'
      | 'NI'
      | 'NL'
      | 'NO'
      | 'NP'
      | 'NR'
      | 'NU'
      | 'NZ'
      | 'OM'
      | 'PA'
      | 'PE'
      | 'PF'
      | 'PG'
      | 'PH'
      | 'PK'
      | 'PL'
      | 'PM'
      | 'PN'
      | 'PR'
      | 'PS'
      | 'PT'
      | 'PW'
      | 'PY'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RS'
      | 'RU'
      | 'RW'
      | 'SA'
      | 'SB'
      | 'SC'
      | 'SD'
      | 'SE'
      | 'SG'
      | 'SH'
      | 'SI'
      | 'SJ'
      | 'SK'
      | 'SL'
      | 'SM'
      | 'SN'
      | 'SO'
      | 'SR'
      | 'SS'
      | 'ST'
      | 'SV'
      | 'SX'
      | 'SY'
      | 'SZ'
      | 'TC'
      | 'TD'
      | 'TF'
      | 'TG'
      | 'TH'
      | 'TJ'
      | 'TK'
      | 'TL'
      | 'TM'
      | 'TN'
      | 'TO'
      | 'TR'
      | 'TT'
      | 'TV'
      | 'TW'
      | 'TZ'
      | 'UA'
      | 'UG'
      | 'UM'
      | 'US'
      | 'UY'
      | 'UZ'
      | 'VA'
      | 'VC'
      | 'VE'
      | 'VG'
      | 'VI'
      | 'VN'
      | 'VU'
      | 'WF'
      | 'WS'
      | 'XK'
      | 'YE'
      | 'YT'
      | 'ZA'
      | 'ZM'
      | 'ZW';
  }

  export interface Department {
    /**
     * The unique public id of the department
     * @pattern ^dpt_
     */
    id: string;
    name: string;
  }

  export interface PrimaryWorkplace {
    /**
     * Public workplace identifier
     * @pattern ^wkp_
     */
    id: string;
    name: string;
    type: 'remote' | 'office';
  }

  export interface Manager {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    id: string;
    firstName: string;
    lastName: string;
    displayName: string;
  }

  export interface Level {
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
export declare namespace Workers {
  export {
    type PublicWorkerCompensation as PublicWorkerCompensation,
    type PublicWorkerCustomField as PublicWorkerCustomField,
    type PublicTextWorkerCustomField as PublicTextWorkerCustomField,
    type PublicNumberWorkerCustomField as PublicNumberWorkerCustomField,
    type PublicDateWorkerCustomField as PublicDateWorkerCustomField,
    type PublicBooleanWorkerCustomField as PublicBooleanWorkerCustomField,
    type PublicCurrencyWorkerCustomField as PublicCurrencyWorkerCustomField,
    type PublicPercentageWorkerCustomField as PublicPercentageWorkerCustomField,
    type PublicSelectWorkerCustomField as PublicSelectWorkerCustomField,
    type PublicMultiSelectWorkerCustomField as PublicMultiSelectWorkerCustomField,
    type WorkerListResponse as WorkerListResponse,
    type WorkerGetResponse as WorkerGetResponse,
    type WorkerCreateEmployeeResponse as WorkerCreateEmployeeResponse,
    type WorkerCreateContractorResponse as WorkerCreateContractorResponse,
    type WorkerInviteResponse as WorkerInviteResponse,
    type WorkerListParams as WorkerListParams,
    type WorkerCreateEmployeeParams as WorkerCreateEmployeeParams,
    type WorkerCreateContractorParams as WorkerCreateContractorParams,
  };
}
