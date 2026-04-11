// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Endpoints for worker management. "Workers" include anyone employed by your company, whether US or international, full-time employees or contractors.
 */
export class Workers extends APIResource {
  /**
   * Get a specific worker by id.
   *
   * @example
   * ```ts
   * const worker = await client.workers.retrieve('wrk_1234');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WorkerRetrieveResponse> {
    return this._client.get(path`/v1/workers/${id}`, options);
  }

  /**
   * List all workers. Workers include anyone employed by the company, whether US or
   * international, full-time employees or contractors.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const workerListResponse of client.workers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: WorkerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WorkerListResponsesCursorPage, WorkerListResponse> {
    return this._client.getAPIList('/v1/workers', CursorPage<WorkerListResponse>, { query, ...options });
  }

  /**
   * Delete a worker. Only workers who have not yet completed onboarding can be
   * deleted. Active workers must be properly offboarded.
   *
   * @example
   * ```ts
   * await client.workers.delete('wrk_1234');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/workers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a new contractor. The worker will be created in draft status and must be
   * invited separately via the invite endpoint. For business contractors, the
   * businessName field is required.
   *
   * @example
   * ```ts
   * const response = await client.workers.createContractor({
   *   departmentId: 'dpt_1234',
   *   email: 'john@joinwarp.com',
   *   entityType: 'individual',
   *   firstName: 'Melissa',
   *   lastName: 'Jones',
   *   managerId: 'wrk_1234',
   *   position: 'Design Consultant',
   *   startDate: '2000-01-01',
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
   * Create a new US employee. The worker will be created in draft status and must be
   * invited separately via the invite endpoint. If hiring in a state without an
   * existing tax registration, you must specify the stateRegistration field.
   *
   * @example
   * ```ts
   * const response = await client.workers.createEmployee({
   *   compensation: { amount: 1, per: 'hour' },
   *   departmentId: 'dpt_1234',
   *   email: 'john@joinwarp.com',
   *   firstName: 'Jonathan',
   *   lastName: 'Galt',
   *   managerId: 'wrk_1234',
   *   position: 'Software Engineer',
   *   startDate: '2000-01-01',
   *   workLocation: { type: 'office', workplaceId: 'wkp_1234' },
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
   * Send or resend the worker invite so they can accept and complete onboarding to
   * Warp. If the worker has already been invited, the invite will be resent with
   * extended validity.
   *
   * @example
   * ```ts
   * const response = await client.workers.invite('wrk_1234');
   * ```
   */
  invite(id: string, options?: RequestOptions): APIPromise<WorkerInviteResponse> {
    return this._client.post(path`/v1/workers/${id}/invite`, options);
  }
}

export type WorkerListResponsesCursorPage = CursorPage<WorkerListResponse>;

export interface WorkerRetrieveResponse {
  /**
   * The id of the worker.
   */
  id: string;

  businessName: string | null;

  /**
   * The department the worker belongs to, or null if unassigned.
   */
  department: WorkerRetrieveResponse.Department | null;

  /**
   * The "ui" name of a worker. If it's a business contractor business name is used.
   * Otherwise we default to preferred name, then first-last.
   */
  displayName: string;

  /**
   * An email with a reasonably valid regex (shamelessly taken from zod)
   */
  email: string;

  /**
   * A date string in the form YYYY-MM-DD
   */
  endDate: string | null;

  firstName: string;

  isBusiness: boolean | null;

  lastName: string;

  position: string;

  preferredName: string | null;

  /**
   * A date string in the form YYYY-MM-DD
   */
  startDate: string;

  status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';

  /**
   * The IANA timezone of the worker (e.g., America/New_York).
   */
  timeZone: string | null;

  type: 'employee' | 'contractor';

  /**
   * An email with a reasonably valid regex (shamelessly taken from zod)
   */
  workEmail: string | null;
}

export namespace WorkerRetrieveResponse {
  /**
   * The department the worker belongs to, or null if unassigned.
   */
  export interface Department {
    /**
     * The unique public id of the department
     */
    id: string;

    name: string;
  }
}

export interface WorkerListResponse {
  /**
   * The id of the worker.
   */
  id: string;

  businessName: string | null;

  /**
   * The department the worker belongs to, or null if unassigned.
   */
  department: WorkerListResponse.Department | null;

  /**
   * The "ui" name of a worker. If it's a business contractor business name is used.
   * Otherwise we default to preferred name, then first-last.
   */
  displayName: string;

  /**
   * An email with a reasonably valid regex (shamelessly taken from zod)
   */
  email: string;

  /**
   * A date string in the form YYYY-MM-DD
   */
  endDate: string | null;

  firstName: string;

  isBusiness: boolean | null;

  lastName: string;

  position: string;

  preferredName: string | null;

  /**
   * A date string in the form YYYY-MM-DD
   */
  startDate: string;

  status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';

  /**
   * The IANA timezone of the worker (e.g., America/New_York).
   */
  timeZone: string | null;

  type: 'employee' | 'contractor';

  /**
   * An email with a reasonably valid regex (shamelessly taken from zod)
   */
  workEmail: string | null;
}

export namespace WorkerListResponse {
  /**
   * The department the worker belongs to, or null if unassigned.
   */
  export interface Department {
    /**
     * The unique public id of the department
     */
    id: string;

    name: string;
  }
}

export interface WorkerCreateContractorResponse {
  /**
   * The id of the worker.
   */
  id: string;

  businessName: string | null;

  /**
   * The department the worker belongs to, or null if unassigned.
   */
  department: WorkerCreateContractorResponse.Department | null;

  /**
   * The "ui" name of a worker. If it's a business contractor business name is used.
   * Otherwise we default to preferred name, then first-last.
   */
  displayName: string;

  /**
   * An email with a reasonably valid regex (shamelessly taken from zod)
   */
  email: string;

  /**
   * A date string in the form YYYY-MM-DD
   */
  endDate: string | null;

  firstName: string;

  isBusiness: boolean | null;

  lastName: string;

  position: string;

  preferredName: string | null;

  /**
   * A date string in the form YYYY-MM-DD
   */
  startDate: string;

  status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';

  /**
   * The IANA timezone of the worker (e.g., America/New_York).
   */
  timeZone: string | null;

  type: 'employee' | 'contractor';

  /**
   * An email with a reasonably valid regex (shamelessly taken from zod)
   */
  workEmail: string | null;
}

export namespace WorkerCreateContractorResponse {
  /**
   * The department the worker belongs to, or null if unassigned.
   */
  export interface Department {
    /**
     * The unique public id of the department
     */
    id: string;

    name: string;
  }
}

export interface WorkerCreateEmployeeResponse {
  /**
   * The id of the worker.
   */
  id: string;

  businessName: string | null;

  /**
   * The department the worker belongs to, or null if unassigned.
   */
  department: WorkerCreateEmployeeResponse.Department | null;

  /**
   * The "ui" name of a worker. If it's a business contractor business name is used.
   * Otherwise we default to preferred name, then first-last.
   */
  displayName: string;

  /**
   * An email with a reasonably valid regex (shamelessly taken from zod)
   */
  email: string;

  /**
   * A date string in the form YYYY-MM-DD
   */
  endDate: string | null;

  firstName: string;

  isBusiness: boolean | null;

  lastName: string;

  position: string;

  preferredName: string | null;

  /**
   * A date string in the form YYYY-MM-DD
   */
  startDate: string;

  status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';

  /**
   * The IANA timezone of the worker (e.g., America/New_York).
   */
  timeZone: string | null;

  type: 'employee' | 'contractor';

  /**
   * An email with a reasonably valid regex (shamelessly taken from zod)
   */
  workEmail: string | null;
}

export namespace WorkerCreateEmployeeResponse {
  /**
   * The department the worker belongs to, or null if unassigned.
   */
  export interface Department {
    /**
     * The unique public id of the department
     */
    id: string;

    name: string;
  }
}

export interface WorkerInviteResponse {
  /**
   * The id of the worker.
   */
  id: string;

  businessName: string | null;

  /**
   * The department the worker belongs to, or null if unassigned.
   */
  department: WorkerInviteResponse.Department | null;

  /**
   * The "ui" name of a worker. If it's a business contractor business name is used.
   * Otherwise we default to preferred name, then first-last.
   */
  displayName: string;

  /**
   * An email with a reasonably valid regex (shamelessly taken from zod)
   */
  email: string;

  /**
   * A date string in the form YYYY-MM-DD
   */
  endDate: string | null;

  firstName: string;

  isBusiness: boolean | null;

  lastName: string;

  position: string;

  preferredName: string | null;

  /**
   * A date string in the form YYYY-MM-DD
   */
  startDate: string;

  status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';

  /**
   * The IANA timezone of the worker (e.g., America/New_York).
   */
  timeZone: string | null;

  type: 'employee' | 'contractor';

  /**
   * An email with a reasonably valid regex (shamelessly taken from zod)
   */
  workEmail: string | null;
}

export namespace WorkerInviteResponse {
  /**
   * The department the worker belongs to, or null if unassigned.
   */
  export interface Department {
    /**
     * The unique public id of the department
     */
    id: string;

    name: string;
  }
}

export interface WorkerListParams extends CursorPageParams {
  /**
   * a number less than or equal to 100
   */
  limit?: string;

  statuses?: Array<'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'>;

  types?: Array<'employee' | 'contractor'>;

  workEmail?: string;
}

export interface WorkerCreateContractorParams {
  /**
   * The department to assign this contractor to.
   */
  departmentId: string;

  /**
   * Personal email address. The invite will be sent here.
   */
  email: string;

  /**
   * Whether the contractor is an individual person or a business entity.
   */
  entityType: 'individual' | 'business';

  /**
   * a non empty string
   */
  firstName: string;

  /**
   * a non empty string
   */
  lastName: string;

  /**
   * The worker id of this contractor's direct manager.
   */
  managerId: string;

  /**
   * The contractor's role or job title.
   */
  position: string;

  /**
   * A date string in the form YYYY-MM-DD
   */
  startDate: string;

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
   * Required when entityType is "business". The legal name of the contractor's
   * business.
   */
  businessName?: string;

  /**
   * The pay rate for the contractor. Leave this blank if you'd like to pay this
   * contractor on-demand or via invoicing.
   */
  compensation?: WorkerCreateContractorParams.Compensation | null;

  /**
   * The contractor's pay schedule. Must be a pay schedule that the company has
   * configured.
   */
  paySchedule?: 'weekly' | 'biweekly' | 'monthly' | 'semimonthly' | 'quarterly' | 'annually' | null;

  /**
   * A description of the work the contractor will perform.
   */
  scopeOfWork?: string | null;

  /**
   * An email with a reasonably valid regex (shamelessly taken from zod)
   */
  workEmail?: string | null;
}

export namespace WorkerCreateContractorParams {
  /**
   * The pay rate for the contractor. Leave this blank if you'd like to pay this
   * contractor on-demand or via invoicing.
   */
  export interface Compensation {
    /**
     * a positive number
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
     * The pay period for the compensation amount.
     */
    per: 'hour' | 'year' | 'month' | 'week';
  }
}

export interface WorkerCreateEmployeeParams {
  /**
   * The employee's base compensation.
   */
  compensation: WorkerCreateEmployeeParams.Compensation;

  /**
   * The department to assign this employee to.
   */
  departmentId: string;

  /**
   * Personal email address. The invite will be sent here.
   */
  email: string;

  /**
   * a non empty string
   */
  firstName: string;

  /**
   * a non empty string
   */
  lastName: string;

  /**
   * The worker id of this employee's direct manager.
   */
  managerId: string;

  /**
   * The employee's job title.
   */
  position: string;

  /**
   * A date string in the form YYYY-MM-DD
   */
  startDate: string;

  /**
   * Where the employee will work. Either an existing company workplace or a remote
   * US state.
   */
  workLocation: WorkerCreateEmployeeParams.OfficeWorkLocation | WorkerCreateEmployeeParams.RemoteWorkLocation;

  /**
   * The employee's pay schedule. Must be a pay schedule that the company has
   * configured.
   */
  paySchedule?: 'weekly' | 'biweekly' | 'monthly' | 'semimonthly' | 'quarterly' | 'annually' | null;

  /**
   * Whether the employee is required to complete I-9 work authorization. Set to
   * false if the employee has already been verified off-platform. Defaults to true.
   */
  requireI9?: boolean;

  /**
   * How state tax registration is handled for this employee's work state. Required
   * when hiring in a state where your company doesn't have an existing registration.
   * Use 'self_managed' if you've already registered in this state, or 'warp_managed'
   * for Warp to handle registration on your behalf.
   */
  stateRegistration?: 'self_managed' | 'warp_managed';

  /**
   * a non-negative number
   */
  stockOptions?: number | null;

  /**
   * An email with a reasonably valid regex (shamelessly taken from zod)
   */
  workEmail?: string | null;
}

export namespace WorkerCreateEmployeeParams {
  /**
   * The employee's base compensation.
   */
  export interface Compensation {
    /**
     * a positive number
     */
    amount: number;

    /**
     * Whether the amount is per hour or per year.
     */
    per: 'hour' | 'year';
  }

  /**
   * Employee works from a company workplace.
   */
  export interface OfficeWorkLocation {
    type: 'office';

    /**
     * Public workplace identifier
     */
    workplaceId: string;
  }

  /**
   * Employee works remotely from a US state.
   */
  export interface RemoteWorkLocation {
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

    type: 'remote';
  }
}

export declare namespace Workers {
  export {
    type WorkerRetrieveResponse as WorkerRetrieveResponse,
    type WorkerListResponse as WorkerListResponse,
    type WorkerCreateContractorResponse as WorkerCreateContractorResponse,
    type WorkerCreateEmployeeResponse as WorkerCreateEmployeeResponse,
    type WorkerInviteResponse as WorkerInviteResponse,
    type WorkerListResponsesCursorPage as WorkerListResponsesCursorPage,
    type WorkerListParams as WorkerListParams,
    type WorkerCreateContractorParams as WorkerCreateContractorParams,
    type WorkerCreateEmployeeParams as WorkerCreateEmployeeParams,
  };
}
