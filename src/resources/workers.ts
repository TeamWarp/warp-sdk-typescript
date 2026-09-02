// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';
import type * as WorkplacesAPI from './workplaces';
import type * as Shared from './shared';
import type * as CustomFieldsAPI from './custom-fields';

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
   * Get a specific worker by id.
   *
   * @param {string} id
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkplacesAPI.Objects11>} Success
   *
   * @example
   * ```ts
   * const objects11 = await client.workers.get('wrk_1234');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<WorkplacesAPI.Objects11> {
    return this._client.get(__scalarPath`/v1/workers/${id}`, options);
  }

  /**
   * Delete a worker. Only workers who have not yet completed onboarding can be deleted. Active workers must be properly offboarded.
   *
   * @param {string} id
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
   * @returns {APIPromise<WorkerCreateEmployeeResponse>} Success
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
   * @returns {APIPromise<WorkerCreateContractorResponse>} Success
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
   * @param {string} id
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkerInviteResponse>} Success
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
 * Employee works from a company workplace.
 */
export interface OfficeWorkLocation {
  type: 'office';
  /**
   * @pattern ^wkp_
   */
  workplaceId: string;
}

/**
 * Employee works remotely from a US state.
 */
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
  statuses?: Array<Shared.Union27> | null;
  types?: Array<Shared.Union28> | null;
  workEmail?: string | null;
}

export interface WorkerListResponse {
  hasMore: boolean;
  count: number;
  data: Array<WorkplacesAPI.Objects11>;
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
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  position: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  startDate: string;
  /**
   * @format email
   */
  email: string;
  /**
   * @pattern ^dpt_
   */
  departmentId: string;
  /**
   * @pattern ^wrk_
   */
  managerId: string;
  /**
   * Where the employee will work. Either an existing company workplace or a remote US state.
   */
  workLocation: OfficeWorkLocation | RemoteWorkLocation;
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
  stockOptions?: number | Shared.Union2 | null;
  paySchedule?: 'weekly' | 'biweekly' | 'monthly' | 'semimonthly' | 'quarterly' | 'annually' | null;
}

export namespace WorkerCreateEmployeeParams {
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
   * @pattern ^wrk_
   */
  id: string;
  position: string;
  type: Shared.Union28;
  status: Shared.Union27;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  startDate: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  endDate: Shared.Union29 | null;
  isBusiness: Shared.Union30 | null;
  businessName: Shared.Union31 | null;
  firstName: string;
  lastName: string;
  /**
   * @format email
   */
  email: string;
  /**
   * @format email
   */
  workEmail: Shared.Union32 | null;
  preferredName: Shared.Union33 | null;
  /**
   * The "ui" name of a worker. If it's a business contractor business name is used. Otherwise we default to preferred name, then first-last.
   */
  displayName: string;
  /**
   * The IANA timezone of the worker (e.g., America/New_York).
   */
  timeZone: Shared.Union34 | null;
  /**
   * The department the worker belongs to, or null if unassigned.
   */
  department: Shared.Union35 | null;
  /**
   * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
   */
  compensation: Shared.PublicWorkerCompensation | null;
  /**
   * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
   */
  level?: Shared.Objects5 | null;
  customFields?: Array<
    | WorkerCreateEmployeeResponse.PublicTextWorkerCustomField
    | WorkerCreateEmployeeResponse.PublicNumberWorkerCustomField
    | WorkerCreateEmployeeResponse.PublicDateWorkerCustomField
    | WorkerCreateEmployeeResponse.PublicBooleanWorkerCustomField
    | WorkerCreateEmployeeResponse.PublicCurrencyWorkerCustomField
    | WorkerCreateEmployeeResponse.PublicPercentageWorkerCustomField
    | WorkerCreateEmployeeResponse.PublicSelectWorkerCustomField
    | WorkerCreateEmployeeResponse.PublicMultiSelectWorkerCustomField
  > | null;
}

export namespace WorkerCreateEmployeeResponse {
  export interface PublicTextWorkerCustomField {
    type: 'text';
    /**
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
    value: Shared.Union11 | null;
  }

  export interface PublicDateWorkerCustomField {
    type: 'date';
    /**
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
    currencyCode: CustomFieldsAPI.Union1 | null;
  }

  export interface PublicPercentageWorkerCustomField {
    type: 'percentage';
    /**
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
    value: Shared.Union11 | null;
  }

  export interface PublicSelectWorkerCustomField {
    type: 'select';
    /**
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
    option: Shared.Objects3 | null;
  }

  export interface PublicMultiSelectWorkerCustomField {
    type: 'multi_select';
    /**
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
    options: Array<Shared.Objects3> | null;
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
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  position: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  startDate: string;
  /**
   * @format email
   */
  email: string;
  /**
   * @pattern ^dpt_
   */
  departmentId: string;
  /**
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
   * @pattern ^wrk_
   */
  id: string;
  position: string;
  type: Shared.Union28;
  status: Shared.Union27;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  startDate: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  endDate: Shared.Union29 | null;
  isBusiness: Shared.Union30 | null;
  businessName: Shared.Union31 | null;
  firstName: string;
  lastName: string;
  /**
   * @format email
   */
  email: string;
  /**
   * @format email
   */
  workEmail: Shared.Union32 | null;
  preferredName: Shared.Union33 | null;
  /**
   * The "ui" name of a worker. If it's a business contractor business name is used. Otherwise we default to preferred name, then first-last.
   */
  displayName: string;
  /**
   * The IANA timezone of the worker (e.g., America/New_York).
   */
  timeZone: Shared.Union34 | null;
  /**
   * The department the worker belongs to, or null if unassigned.
   */
  department: Shared.Union35 | null;
  /**
   * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
   */
  compensation: Shared.PublicWorkerCompensation | null;
  /**
   * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
   */
  level?: Shared.Objects5 | null;
  customFields?: Array<
    | WorkerCreateContractorResponse.PublicTextWorkerCustomField
    | WorkerCreateContractorResponse.PublicNumberWorkerCustomField
    | WorkerCreateContractorResponse.PublicDateWorkerCustomField
    | WorkerCreateContractorResponse.PublicBooleanWorkerCustomField
    | WorkerCreateContractorResponse.PublicCurrencyWorkerCustomField
    | WorkerCreateContractorResponse.PublicPercentageWorkerCustomField
    | WorkerCreateContractorResponse.PublicSelectWorkerCustomField
    | WorkerCreateContractorResponse.PublicMultiSelectWorkerCustomField
  > | null;
}

export namespace WorkerCreateContractorResponse {
  export interface PublicTextWorkerCustomField {
    type: 'text';
    /**
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
    value: Shared.Union11 | null;
  }

  export interface PublicDateWorkerCustomField {
    type: 'date';
    /**
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
    currencyCode: CustomFieldsAPI.Union1 | null;
  }

  export interface PublicPercentageWorkerCustomField {
    type: 'percentage';
    /**
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
    value: Shared.Union11 | null;
  }

  export interface PublicSelectWorkerCustomField {
    type: 'select';
    /**
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
    option: Shared.Objects3 | null;
  }

  export interface PublicMultiSelectWorkerCustomField {
    type: 'multi_select';
    /**
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
    options: Array<Shared.Objects3> | null;
  }
}

export interface WorkerInviteResponse {
  /**
   * @pattern ^wrk_
   */
  id: string;
  position: string;
  type: Shared.Union28;
  status: Shared.Union27;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  startDate: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  endDate: Shared.Union29 | null;
  isBusiness: Shared.Union30 | null;
  businessName: Shared.Union31 | null;
  firstName: string;
  lastName: string;
  /**
   * @format email
   */
  email: string;
  /**
   * @format email
   */
  workEmail: Shared.Union32 | null;
  preferredName: Shared.Union33 | null;
  /**
   * The "ui" name of a worker. If it's a business contractor business name is used. Otherwise we default to preferred name, then first-last.
   */
  displayName: string;
  /**
   * The IANA timezone of the worker (e.g., America/New_York).
   */
  timeZone: Shared.Union34 | null;
  /**
   * The department the worker belongs to, or null if unassigned.
   */
  department: Shared.Union35 | null;
  /**
   * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
   */
  compensation: Shared.PublicWorkerCompensation | null;
  /**
   * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
   */
  level?: Shared.Objects5 | null;
  customFields?: Array<
    | WorkerInviteResponse.PublicTextWorkerCustomField
    | WorkerInviteResponse.PublicNumberWorkerCustomField
    | WorkerInviteResponse.PublicDateWorkerCustomField
    | WorkerInviteResponse.PublicBooleanWorkerCustomField
    | WorkerInviteResponse.PublicCurrencyWorkerCustomField
    | WorkerInviteResponse.PublicPercentageWorkerCustomField
    | WorkerInviteResponse.PublicSelectWorkerCustomField
    | WorkerInviteResponse.PublicMultiSelectWorkerCustomField
  > | null;
}

export namespace WorkerInviteResponse {
  export interface PublicTextWorkerCustomField {
    type: 'text';
    /**
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
    value: Shared.Union11 | null;
  }

  export interface PublicDateWorkerCustomField {
    type: 'date';
    /**
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
    currencyCode: CustomFieldsAPI.Union1 | null;
  }

  export interface PublicPercentageWorkerCustomField {
    type: 'percentage';
    /**
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
    value: Shared.Union11 | null;
  }

  export interface PublicSelectWorkerCustomField {
    type: 'select';
    /**
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
    option: Shared.Objects3 | null;
  }

  export interface PublicMultiSelectWorkerCustomField {
    type: 'multi_select';
    /**
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
    options: Array<Shared.Objects3> | null;
  }
}
export declare namespace Workers {
  export {
    type OfficeWorkLocation as OfficeWorkLocation,
    type RemoteWorkLocation as RemoteWorkLocation,
    type WorkerListResponse as WorkerListResponse,
    type WorkerCreateEmployeeResponse as WorkerCreateEmployeeResponse,
    type WorkerCreateContractorResponse as WorkerCreateContractorResponse,
    type WorkerInviteResponse as WorkerInviteResponse,
    type WorkerListParams as WorkerListParams,
    type WorkerCreateEmployeeParams as WorkerCreateEmployeeParams,
    type WorkerCreateContractorParams as WorkerCreateContractorParams,
  };
}
