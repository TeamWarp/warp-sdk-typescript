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
  /**
   * @pattern ^cf_
   */
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
  /**
   * @pattern ^cfo_
   */
  id: string;
  message: string;
}
export interface DepartmentNotFoundEncoded {
  _tag: 'DepartmentNotFound';
  /**
   * @pattern ^dpt_
   */
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
  /**
   * @pattern ^offr_
   */
  id: string;
  status: Union13;
  message: string;
}
export interface ManagerNotFoundErrorEncoded {
  _tag: 'ManagerNotFoundError';
  /**
   * @pattern ^wrk_
   */
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
      | 'performance'
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
  /**
   * @pattern ^cf_
   */
  id: string;
  name: string;
  description: Union3 | null;
  type: Union4;
  config: Objects1;
  status: Union5;
  category: Union6;
  accessLevel: Union7;
  inputBy: Union8;
  canWrite: boolean;
  createdAt: string;
  required?: CustomFieldsAPI.Union9 | null;
}
export type Objects1 = Record<string, unknown>;
export interface Objects3 {
  /**
   * @pattern ^cfo_
   */
  id: string;
  label: string;
  value: string;
  sortOrder: Union11;
  status: 'active' | 'archived';
  createdAt: string;
}
export interface Objects5 {
  /**
   * @pattern ^jlvl_
   */
  id: string;
  code: string;
  name: string;
  track: 'ic' | 'manager' | 'executive';
}
export interface OfferNotFoundErrorEncoded {
  _tag: 'OfferNotFoundError';
  /**
   * @pattern ^offr_
   */
  id: string;
  message: string;
}
/**
 * A monetary amount with its currency and server-formatted display value.
 */
export interface PublicMoneyAmount {
  /**
   * @minimum 0
   */
  amount: number;
  currency: CustomFieldsAPI.Union1;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}
/**
 * The payroll instruction for provider direct deposit or employer-managed manual payment. This does not confirm payout execution.
 */
export type PublicPaycheckPaymentMethod = 'direct_deposit' | 'manual';
/**
 * The current public lifecycle status of a paycheck.
 */
export type PublicPaycheckStatus =
  | 'draft'
  | 'pending'
  | 'processing'
  | 'debited'
  | 'credited'
  | 'partially_paid'
  | 'processed'
  | 'failed'
  | 'voided';
/**
 * The cadence at which workers are paid.
 */
export type PublicPayFrequency = 'weekly' | 'biweekly' | 'monthly' | 'semimonthly' | 'quarterly' | 'annually';
/**
 * The inclusive calendar boundaries of a payroll reporting period.
 */
export interface PublicPayPeriod {
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  startDate: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  endDate: string;
}
/**
 * An ISO 4217 currency supported by payroll read resources.
 */
export type PublicPayrollCurrency =
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
  | 'BOB';
/**
 * The current public lifecycle status of a payroll.
 */
export type PublicPayrollStatus =
  | 'draft'
  | 'pending'
  | 'processing'
  | 'partially_paid'
  | 'processed'
  | 'failed'
  | 'voided';
/**
 * The purpose or processing category of the payroll run.
 */
export type PublicPayrollSubtype =
  | 'regular'
  | 'off_cycle'
  | 'bonus'
  | 'invoice'
  | 'contractor'
  | 'dismissal'
  | 'reimbursement'
  | 'manual';
/**
 * Whether the payroll or paycheck is calculated through US or global payroll.
 */
export type PublicPayrollType = 'us' | 'global';
/**
 * The worker's current regular pay rate. For a worker whose start date is in the future, this is the regular rate effective on their start date. Null when no regular rate applies or when the API key lacks the corresponding US or global compensation read scope.
 */
export interface PublicWorkerCompensation {
  /**
   * @pattern ^pyr_
   */
  payRateId: string;
  /**
   * The period represented by the pay rate amount.
   */
  per: 'year' | 'month' | 'week' | 'hour';
  /**
   * @minimum 0
   */
  amount: number;
  currency: CustomFieldsAPI.Union1;
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
  id: Union23;
  message: string;
}
export type Union =
  | 'medical'
  | 'dental'
  | 'vision'
  | 'life'
  | 'short_term_disability'
  | 'long_term_disability'
  | '401k'
  | 'roth_401k'
  | '403b'
  | 'roth_403b'
  | '457'
  | 'roth_457'
  | 'hsa'
  | 'fsa_medical'
  | 'fsa_dependent_care'
  | 'transit'
  | 'parking'
  | 'accident'
  | 'cancer'
  | 'critical_illness'
  | 'hospital'
  | 'medical_other'
  | 'simple_ira'
  | 'roth_simple_ira'
  | 'nqdc'
  | 'nontaxable_fringe'
  | 'pucc'
  | 'voluntary'
  | 'post_tax'
  | 'other';
export type Union10 = Record<string, unknown> | null;
export type Union11 = number | Union2;
export type Union12 = string | null;
export type Union13 = 'draft' | 'sent' | 'accepted' | 'void';
export interface Union18 {
  /**
   * @pattern ^wrk_
   */
  id: string;
  name: string | null;
}
export type Union2 = 'Infinity' | '-Infinity' | 'NaN';
export interface Union20 {
  /**
   * @minimum 0
   */
  amount: number;
  currency: CustomFieldsAPI.Union1;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}
export type Union21 = string | null;
export type Union23 = number | Union2 | (string & {});
export type Union24 = string | null;
export type Union25 = string | null;
export type Union26 = 'pending' | 'approved' | 'denied';
export type Union27 = 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
export type Union28 = 'employee' | 'contractor';
export type Union29 = string | null;
export type Union3 = string | null;
export type Union30 = boolean | null;
export type Union31 = string | null;
export type Union32 = string | null;
export type Union33 = string | null;
/**
 * The IANA timezone of the worker (e.g., America/New_York).
 */
export type Union34 = string | null;
/**
 * The department the worker belongs to, or null if unassigned.
 */
export interface Union35 {
  /**
   * @pattern ^dpt_
   */
  id: string;
  name: string;
}
export type Union4 =
  | 'text'
  | 'number'
  | 'date'
  | 'boolean'
  | 'currency'
  | 'percentage'
  | 'select'
  | 'multi_select';
export type Union5 = 'active' | 'archived';
export type Union6 = 'info' | 'pii' | 'compensation' | 'banking' | 'it' | 'compliance';
export type Union7 = 'admins' | 'manager' | 'worker';
export type Union8 = 'admin' | 'worker';
export interface WorkerNotFoundErrorEncoded {
  _tag: 'WorkerNotFoundError';
  /**
   * @pattern ^wrk_
   */
  id: string;
  message: string;
}
export interface WorkplaceNotFoundEncoded {
  _tag: 'WorkplaceNotFound';
  /**
   * @pattern ^wkp_
   */
  id: string;
  message: string;
}
