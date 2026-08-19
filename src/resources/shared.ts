// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type * as CustomFieldsAPI from './custom-fields';

export interface APIKeyUnauthorizedEncoded {
  _tag: 'ApiKeyUnauthorized';
  message: string;
}
export interface APINotEnabledEncoded {
  _tag: 'ApiNotEnabled';
  message: string;
}
export interface CustomFieldNotFoundErrorEncoded {
  _tag: 'CustomFieldNotFoundError';
  id: string;
  message: string;
}
export interface CustomFieldOptionAlreadyExistsErrorEncoded {
  _tag: 'CustomFieldOptionAlreadyExistsError';
  value: string;
  message: string;
}
export interface CustomFieldOptionNotFoundErrorEncoded {
  _tag: 'CustomFieldOptionNotFoundError';
  id: string;
  message: string;
}
export interface DepartmentNotFoundEncoded {
  _tag: 'DepartmentNotFound';
  id: string;
  message: string;
}
export interface EffectHTTPAPIErrorInternalServerErrorEncoded {
  _tag: 'InternalServerError';
}
export interface InvalidCustomFieldOperationErrorEncoded {
  _tag: 'InvalidCustomFieldOperationError';
  message: string;
}
export interface InvalidOfferStatusErrorEncoded {
  _tag: 'InvalidOfferStatusError';
  id: string;
  status: Union12;
  message: string;
}
export interface ManagerNotFoundErrorEncoded {
  _tag: 'ManagerNotFoundError';
  id: string;
  message: string;
}
export interface MissingRequiredCompanyPermissionsEncoded {
  _tag: 'MissingRequiredCompanyPermissions';
  requiredPermissions: Array<MissingRequiredCompanyPermissionsEncoded.RequiredPermission>;
  message: string;
}

export namespace MissingRequiredCompanyPermissionsEncoded {
  export interface RequiredPermission {
    scope:
      | 'workers:profile'
      | 'workers:global:compensation'
      | 'workers:us:compensation'
      | 'workers:compliance'
      | 'workers:pii'
      | 'workers:banking'
      | 'workers:access'
      | 'workers:dependents'
      | 'workers:dependents:pii'
      | 'workers:custom_fields'
      | 'payrolls:global'
      | 'payrolls:us'
      | 'pay_schedules'
      | 'offers'
      | 'departments'
      | 'levels'
      | 'workplaces'
      | 'time_off'
      | 'time_tracking'
      | 'expenses'
      | 'general_ledger'
      | 'benefits'
      | 'tax_compliance'
      | 'kyb'
      | 'mdm'
      | 'lms'
      | 'authorized_users'
      | 'billing'
      | 'settings'
      | 'developer';
    level: 'read' | 'write' | 'manage';
  }
}
export interface Objects {
  id: string;
  name: string;
  description: Union2 | null;
  type: Union3;
  config: Objects1;
  status: Union4;
  category: Union5;
  accessLevel: Union6;
  inputBy: Union7;
  canWrite: boolean;
  createdAt: string;
  required?: Union8 | null;
}
export type Objects1 = Record<string, unknown>;
export interface Objects3 {
  id: string;
  label: string;
  value: string;
  sortOrder: Union10;
  status: 'active' | 'archived';
  createdAt: string;
}
export interface Objects5 {
  id: string;
  status: Union12;
  workerType: Union13;
  candidate: Objects5.Candidate;
  position: Objects5.Position;
  department: Objects5.Department | null;
  workplace: Objects5.Workplace | null;
  manager: Objects5.Manager | null;
  /**
   * Display name of the person or company that sent the offer. Null for offers not yet sent.
   */
  sentBy: string | null;
  compensation: Objects5.Compensation;
  /**
   * The candidate-facing offer portal URL. Null for offers that have not been sent.
   */
  offerUrl: string | null;
  expirationTime: string | null;
  lastViewedAt: string | null;
  createdAt: string;
}

export namespace Objects5 {
  export interface Candidate {
    firstName: string;
    lastName: string;
    email: string;
    contractorDetails: Candidate.ContractorDetails | null;
  }

  export namespace Candidate {
    export interface ContractorDetails {
      isBusiness: boolean;
      legalBusinessName: string | null;
    }
  }

  export interface Position {
    title: string;
    startDate: string;
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
    scopeOfWork: string | null;
  }

  export interface Department {
    id: string;
    name: string;
  }

  export interface Workplace {
    id: string;
    name: string;
  }

  export interface Manager {
    id: string;
    name: string | null;
  }

  export interface Compensation {
    basePay: Compensation.BasePay;
    signOnBonus: PublicMoneyAmount | null;
    relocationBonus: PublicMoneyAmount | null;
    stock: Compensation.Stock | null;
  }

  export namespace Compensation {
    export interface BasePay {
      /**
       * A monetary amount with its currency and server-formatted display value.
       */
      amount: PublicMoneyAmount;
      basis: 'year' | 'month' | 'week' | 'hour' | 'variable';
      type: 'fixed' | 'pay_as_you_go' | null;
      variableRate: PublicMoneyAmount | null;
    }

    export interface Stock {
      options: string;
      vestingScheduleMonths: string | null;
      cliffMonths: string | null;
    }
  }
}
export interface OfferNotFoundErrorEncoded {
  _tag: 'OfferNotFoundError';
  id: string;
  message: string;
}
/**
 * A monetary amount with its currency and server-formatted display value.
 */
export interface PublicMoneyAmount {
  amount: string;
  currency: Union;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}
/**
 * The worker's current regular pay rate. For a worker whose start date is in the future, this is the regular rate effective on their start date. Null when no regular rate applies or when the API key lacks the corresponding US or global compensation read scope.
 */
export interface PublicWorkerCompensation {
  payRateId: string;
  /**
   * The period for the pay rate.
   */
  basis: 'yearly' | 'monthly' | 'weekly' | 'hourly';
  amount: string;
  currency: Union;
  /**
   * The server-formatted pay rate, including its period.
   */
  display: string;
}
export interface RateLimitExceededEncoded {
  _tag: 'RateLimitExceeded';
  retryAt: string;
  message: string;
}
export interface TimeOffPolicyNotFoundEncoded {
  _tag: 'TimeOffPolicyNotFound';
  id: string | number | CustomFieldsAPI.Union1;
  message: string;
}
export type Union =
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
export type Union10 = number | CustomFieldsAPI.Union1;
export type Union11 = string | null;
export type Union12 = 'draft' | 'sent' | 'accepted' | 'void';
export type Union13 = 'employee' | 'us_contractor' | 'global_contractor';
export interface Union18 {
  amount: string;
  currency: Union;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}
export type Union2 = string | null;
export type Union20 = string | null;
export type Union21 = string | null;
export type Union23 = 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
export type Union24 = 'employee' | 'contractor';
export type Union25 = string | null;
export type Union26 = boolean | null;
export type Union27 = string | null;
export type Union28 = string | null;
export type Union29 = string | null;
export type Union3 =
  | 'text'
  | 'number'
  | 'date'
  | 'boolean'
  | 'currency'
  | 'percentage'
  | 'select'
  | 'multi_select';
/**
 * The IANA timezone of the worker (e.g., America/New_York).
 */
export type Union30 = string | null;
/**
 * The department the worker belongs to, or null if unassigned.
 */
export interface Union31 {
  id: string;
  name: string;
}
/**
 * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
 */
export interface Union32 {
  payRateId: string;
  /**
   * The period for the pay rate.
   */
  basis: 'yearly' | 'monthly' | 'weekly' | 'hourly';
  amount: string;
  currency: Union;
  /**
   * The server-formatted pay rate, including its period.
   */
  display: string;
}
export type Union33 = string | null;
export type Union34 = 'remote' | 'office';
export type Union35 = 'active' | 'archived';
export type Union4 = 'active' | 'archived';
export type Union5 = 'info' | 'pii' | 'compensation' | 'banking' | 'it' | 'compliance';
export type Union6 = 'admins' | 'manager' | 'worker';
export type Union7 = 'admin' | 'worker';
export type Union8 = boolean | null;
export interface WorkerNotFoundErrorEncoded {
  _tag: 'WorkerNotFoundError';
  id: string;
  message: string;
}
export interface WorkplaceNotFoundEncoded {
  _tag: 'WorkplaceNotFound';
  id: string;
  message: string;
}
