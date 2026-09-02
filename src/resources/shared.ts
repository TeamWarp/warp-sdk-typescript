// File generated from our OpenAPI spec by Scalar. See README.md for details.

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
   * The tag of a company custom worker field.
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
   * The tag of a company custom worker field option.
   * @pattern ^cfo_
   */
  id: string;
  message: string;
}
export interface DepartmentNotFoundEncoded {
  _tag: 'DepartmentNotFound';
  /**
   * The unique public id of the department
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
   * The tag of the offer.
   * @pattern ^offr_
   */
  id: string;
  status: 'draft' | 'sent' | 'accepted' | 'void';
  message: string;
}
export interface ManagerNotFoundErrorEncoded {
  _tag: 'ManagerNotFoundError';
  /**
   * The id of the worker.
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
export interface OfferNotFoundErrorEncoded {
  _tag: 'OfferNotFoundError';
  /**
   * The tag of the offer.
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
   * The id of the regular pay rate represented here.
   * @pattern ^pyr_
   */
  payRateId: string;
  /**
   * The period represented by the pay rate amount.
   */
  per: 'year' | 'month' | 'week' | 'hour';
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
export interface RateLimitExceededEncoded {
  _tag: 'RateLimitExceeded';
  retryAt: string;
  message: string;
}
export interface TimeOffPolicyNotFoundEncoded {
  _tag: 'TimeOffPolicyNotFound';
  id: number | 'Infinity' | '-Infinity' | 'NaN' | (string & {});
  message: string;
}
export interface WorkerNotFoundErrorEncoded {
  _tag: 'WorkerNotFoundError';
  /**
   * The id of the worker.
   * @pattern ^wrk_
   */
  id: string;
  message: string;
}
export interface WorkplaceNotFoundEncoded {
  _tag: 'WorkplaceNotFound';
  /**
   * Public workplace identifier
   * @pattern ^wkp_
   */
  id: string;
  message: string;
}
