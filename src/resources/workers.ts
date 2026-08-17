// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

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
   * const list = await client.workers.list({
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
   * @returns {APIPromise<WorkerRetrieveResponse>} Success
   *
   * @example
   * ```ts
   * const retrieve = await client.workers.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WorkerRetrieveResponse> {
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
   * await client.workers.delete('id');
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
   * const createEmployee = await client.workers.createEmployee({
   *   firstName: {},
   *   lastName: {},
   *   position: {},
   *   startDate: {},
   *   email: {},
   *   departmentId: {},
   *   managerId: {},
   *   workLocation: {
   *     type: 'office',
   *     workplaceId: {},
   *   },
   *   compensation: {
   *     amount: {},
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
   * const createContractor = await client.workers.createContractor({
   *   entityType: 'individual',
   *   firstName: {},
   *   lastName: {},
   *   position: {},
   *   startDate: {},
   *   email: {},
   *   departmentId: {},
   *   managerId: {},
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
   * const invite = await client.workers.invite('id');
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
  afterId?: string | null;
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
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    startDate: string;
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    email: string;
    workEmail: string | null;
    preferredName: string | null;
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
  }

  export namespace Data {
    export interface Department {
      id: string;
      name: string;
    }
  }
}

export interface WorkerRetrieveResponse {
  id: string;
  position: string;
  type: 'employee' | 'contractor';
  status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
  startDate: string;
  endDate: string | null;
  isBusiness: boolean | null;
  businessName: string | null;
  firstName: string;
  lastName: string;
  email: string;
  workEmail: string | null;
  preferredName: string | null;
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
  department: WorkerRetrieveResponse.Department | null;
}

export namespace WorkerRetrieveResponse {
  export interface Department {
    id: string;
    name: string;
  }
}

export interface WorkerCreateEmployeeParams {
  firstName: string;
  lastName: string;
  position: string;
  startDate: string;
  email: string;
  departmentId: string;
  managerId: string;
  /**
   * Where the employee will work. Either an existing company workplace or a remote US state.
   */
  workLocation: OfficeWorkLocation | RemoteWorkLocation;
  /**
   * The employee's base compensation.
   */
  compensation: WorkerCreateEmployeeParams.Compensation;
  workEmail?: string | null;
  requireI9?: boolean | null;
  stateRegistration?: 'self_managed' | 'warp_managed' | null;
  stockOptions?: string | 'Infinity' | '-Infinity' | 'NaN' | null;
  paySchedule?: 'weekly' | 'biweekly' | 'monthly' | 'semimonthly' | 'quarterly' | 'annually' | null;
}

export namespace WorkerCreateEmployeeParams {
  export interface Compensation {
    amount: unknown;
    /**
     * Whether the amount is per hour or per year.
     */
    per: 'hour' | 'year';
  }
}

export interface WorkerCreateEmployeeResponse {
  id: string;
  position: string;
  type: 'employee' | 'contractor';
  status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
  startDate: string;
  endDate: string | null;
  isBusiness: boolean | null;
  businessName: string | null;
  firstName: string;
  lastName: string;
  email: string;
  workEmail: string | null;
  preferredName: string | null;
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
}

export namespace WorkerCreateEmployeeResponse {
  export interface Department {
    id: string;
    name: string;
  }
}

export interface WorkerCreateContractorParams {
  /**
   * Whether the contractor is an individual person or a business entity.
   */
  entityType: 'individual' | 'business';
  firstName: string;
  lastName: string;
  position: string;
  startDate: string;
  email: string;
  departmentId: string;
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
  businessName?: string | null;
  scopeOfWork?: string | null;
  workEmail?: string | null;
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
    amount: unknown;
    /**
     * The pay period for the compensation amount.
     */
    per: 'hour' | 'year' | 'month' | 'week';
  }
}

export interface WorkerCreateContractorResponse {
  id: string;
  position: string;
  type: 'employee' | 'contractor';
  status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
  startDate: string;
  endDate: string | null;
  isBusiness: boolean | null;
  businessName: string | null;
  firstName: string;
  lastName: string;
  email: string;
  workEmail: string | null;
  preferredName: string | null;
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
}

export namespace WorkerCreateContractorResponse {
  export interface Department {
    id: string;
    name: string;
  }
}

export interface WorkerInviteResponse {
  id: string;
  position: string;
  type: 'employee' | 'contractor';
  status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
  startDate: string;
  endDate: string | null;
  isBusiness: boolean | null;
  businessName: string | null;
  firstName: string;
  lastName: string;
  email: string;
  workEmail: string | null;
  preferredName: string | null;
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
}

export namespace WorkerInviteResponse {
  export interface Department {
    id: string;
    name: string;
  }
}
export declare namespace Workers {
  export {
    type OfficeWorkLocation as OfficeWorkLocation,
    type RemoteWorkLocation as RemoteWorkLocation,
    type WorkerListResponse as WorkerListResponse,
    type WorkerRetrieveResponse as WorkerRetrieveResponse,
    type WorkerCreateEmployeeResponse as WorkerCreateEmployeeResponse,
    type WorkerCreateContractorResponse as WorkerCreateContractorResponse,
    type WorkerInviteResponse as WorkerInviteResponse,
    type WorkerListParams as WorkerListParams,
    type WorkerCreateEmployeeParams as WorkerCreateEmployeeParams,
    type WorkerCreateContractorParams as WorkerCreateContractorParams,
  };
}
