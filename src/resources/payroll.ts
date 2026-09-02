// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Payroll extends APIResource {
  /**
   * List payroll summaries newest first with stable cursor ordering. Every amount in totals is expressed in fundingCurrency, the currency the employer uses to fund the payroll. Line-derived categories are converted and rounded per paycheck before aggregation, while netPay remains provider-authoritative. Payroll type visibility follows the API key permissions. All lifecycle statuses are included unless statuses are provided.
   *
   * @param {PayrollListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PublicPayrollList>} A cursor-paginated page of payroll summaries.
   *
   * @example
   * ```ts
   * const publicPayrollList = await client.payroll.list({
   *   limit: 'limit',
   * });
   * ```
   */
  list(query: PayrollListParams, options?: RequestOptions): APIPromise<PublicPayrollList> {
    return this._client.get('/v1/payrolls', { query, ...options });
  }

  /**
   * Get a payroll by id. Every amount in totals is expressed in fundingCurrency, the currency the employer uses to fund the payroll. Line-derived categories are converted and rounded per paycheck before aggregation, while netPay remains provider-authoritative. Missing, foreign, unauthorized, or unavailable payrolls return 404.
   *
   * @param {string} id - The payroll ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PublicPayrollDetail>} A payroll run with funding and lifecycle details. Every amount in totals is expressed in fundingCurrency; line-derived categories are converted and rounded per paycheck before aggregation, while netPay remains provider-authoritative.
   *
   * @example
   * ```ts
   * const publicPayrollDetail = await client.payroll.get('pay_1234');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<PublicPayrollDetail> {
    return this._client.get(__scalarPath`/v1/payrolls/${id}`, options);
  }

  /**
   * List per-worker paycheck summaries newest first with stable cursor ordering. By default, the response includes every worker type visible to the API key, including US W-2 employees, US 1099 contractors, and global contractors; use workerTypes to narrow the results. Payroll type visibility follows the API key permissions. All lifecycle statuses are included unless statuses are provided.
   *
   * @param {PayrollListPaychecksParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PublicPaycheckList>} A cursor-paginated page of paycheck summaries.
   *
   * @example
   * ```ts
   * const publicPaycheckList = await client.payroll.listPaychecks({
   *   limit: 'limit',
   * });
   * ```
   */
  listPaychecks(query: PayrollListPaychecksParams, options?: RequestOptions): APIPromise<PublicPaycheckList> {
    return this._client.get('/v1/paychecks', { query, ...options });
  }

  /**
   * Get a paycheck by id. All worker types use the same paycheck schema. Categories that do not apply to a worker are represented by zero-valued totals and empty line-item arrays. For example, a US 1099 contractor with no applicable payroll taxes returns zero `workerTaxes` and `employerTaxes` totals and an empty `taxes` array. Missing, foreign, unauthorized, or unavailable paychecks return 404.
   *
   * @param {string} id - The paycheck ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PublicPaycheckDetail>} A paycheck with currency-specific calculation lines, totals grouped by currency, and authoritative parent-payroll funding-currency totals. Source currencies for expenses, benefits, or other inputs are outside this payroll-calculation resource.
   *
   * @example
   * ```ts
   * const publicPaycheckDetail = await client.payroll.getPaycheck('pyc_1234');
   * ```
   */
  getPaycheck(id: string, options?: RequestOptions): APIPromise<PublicPaycheckDetail> {
    return this._client.get(__scalarPath`/v1/paychecks/${id}`, options);
  }
}

/**
 * A cursor-paginated page of payroll summaries.
 */
export interface PublicPayrollList {
  hasMore: boolean;
  count: number;
  data: unknown;
}

/**
 * A payroll run with funding and lifecycle details. Every amount in totals is expressed in fundingCurrency; line-derived categories are converted and rounded per paycheck before aggregation, while netPay remains provider-authoritative.
 */
export interface PublicPayrollDetail {
  /**
   * The tag of the payroll.
   * @pattern ^pay_
   */
  id: string;
  type: PublicPayrollType & string;
  subtype: PublicPayrollSubtype & string;
  status: PublicPayrollStatus & string;
  fundingCurrency: PublicPayrollCurrency & string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  payday: string;
  payPeriod: PublicPayPeriod & string;
  payFrequency: PublicPayFrequency | null;
  description: string | null;
  approvalDeadline: string | null;
  /**
   * @minimum 0
   */
  paycheckCount: number;
  totals: PublicPayrollDetailTotals & string;
  fundingMethod: PublicPayrollFundingMethod & string;
  reopenDeadline: string | null;
  timeline: PublicPayrollTimeline & unknown;
}

/**
 * A cursor-paginated page of paycheck summaries.
 */
export interface PublicPaycheckList {
  hasMore: boolean;
  count: number;
  data: string;
}

/**
 * A paycheck with currency-specific calculation lines, totals grouped by currency, and authoritative parent-payroll funding-currency totals. Source currencies for expenses, benefits, or other inputs are outside this payroll-calculation resource.
 */
export interface PublicPaycheckDetail {
  /**
   * The tag of the paycheck.
   * @pattern ^pyc_
   */
  id: string;
  payroll: PublicPaycheckPayroll & string;
  worker: PublicPaycheckWorker & string;
  status: PublicPaycheckStatus & string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  payday: string;
  paymentMethod: PublicPaycheckPaymentMethod & string;
  totals: PublicPaycheckDetailTotals & string;
  description: string | null;
  exchangeRates: string;
  /**
   * @minimum 0
   */
  reportedHours: number | null;
  earnings: string;
  reimbursements: string;
  deductions: string;
  benefits: string;
  taxes: string;
}

/**
 * A compact payroll run with employer-facing totals expressed in fundingCurrency, the currency used to fund the payroll.
 */
export interface PublicPayrollSummary {
  /**
   * The tag of the payroll.
   * @pattern ^pay_
   */
  id: string;
  type: PublicPayrollType & string;
  subtype: PublicPayrollSubtype & string;
  status: PublicPayrollStatus & string;
  fundingCurrency: PublicPayrollCurrency & string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  payday: string;
  payPeriod: PublicPayPeriod & string;
  payFrequency: PublicPayFrequency | null;
  description: string | null;
  approvalDeadline: string | null;
  /**
   * @minimum 0
   */
  paycheckCount: number;
  totals: PublicFundingPayrollTotals & string;
}

/**
 * Whether the payroll or paycheck is calculated through US or global payroll.
 */
export type PublicPayrollType = 'us' | 'global';

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
 * The cadence at which workers are paid.
 */
export type PublicPayFrequency = 'weekly' | 'biweekly' | 'monthly' | 'semimonthly' | 'quarterly' | 'annually';

/**
 * Payroll category totals and provider-authoritative funding requirement.
 */
export interface PublicPayrollDetailTotals {
  cashRequirement: PublicCurrencyMoneyAmount11 | null;
  /**
   * Gross earnings before worker taxes, deductions, and benefit contributions. Reimbursements are reported separately.
   */
  grossPay: PublicCurrencyMoneyAmount;
  /**
   * The provider-calculated amount to send for workers: gross pay plus reimbursements, less worker taxes, deductions, and benefit contributions. It excludes payment execution fees and may differ from recomputed totals because of provider and FX rounding.
   */
  netPay: PublicCurrencyMoneyAmount1;
  /**
   * Amounts reimbursed to workers in addition to gross pay. Reimbursements increase net pay and employer cost.
   */
  reimbursements: PublicCurrencyMoneyAmount2;
  /**
   * Payroll taxes withheld from worker pay, reducing net pay.
   */
  workerTaxes: PublicCurrencyMoneyAmount3;
  /**
   * Payroll taxes paid by the employer in addition to gross pay.
   */
  employerTaxes: PublicCurrencyMoneyAmount4;
  /**
   * Non-benefit amounts deducted from worker pay before taxes, reducing taxable pay and net pay.
   */
  preTaxDeductions: PublicCurrencyMoneyAmount5;
  /**
   * Non-benefit amounts deducted from worker pay after taxes, reducing net pay.
   */
  postTaxDeductions: PublicCurrencyMoneyAmount6;
  /**
   * Amounts workers pay toward benefits, deducted from their pay.
   */
  workerBenefitContributions: PublicCurrencyMoneyAmount7;
  /**
   * Amounts the employer pays toward worker benefits in addition to gross pay.
   */
  employerBenefitContributions: PublicCurrencyMoneyAmount8;
  /**
   * Banking and transaction fees paid by the employer to fund and pay the payroll.
   */
  transactionFees: PublicCurrencyMoneyAmount9;
  /**
   * The employer's total payroll cost: gross pay, reimbursements, employer taxes, employer benefit contributions, and transaction fees.
   */
  totalCost: PublicCurrencyMoneyAmount10;
}

/**
 * How the company funds the payroll.
 */
export type PublicPayrollFundingMethod = 'ach' | 'wire';

/**
 * The approval timestamp for a payroll.
 */
export interface PublicPayrollTimeline {
  approvedAt: string | null;
}

/**
 * A compact per-worker paycheck within a payroll.
 */
export interface PublicPaycheckSummary {
  /**
   * The tag of the paycheck.
   * @pattern ^pyc_
   */
  id: string;
  payroll: PublicPaycheckPayroll & string;
  worker: PublicPaycheckWorker & string;
  status: PublicPaycheckStatus & string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  payday: string;
  paymentMethod: PublicPaycheckPaymentMethod & string;
  totals: PublicPaycheckSummaryTotals & string;
}

/**
 * The parent payroll context for a paycheck.
 */
export interface PublicPaycheckPayroll {
  /**
   * The tag of the payroll.
   * @pattern ^pay_
   */
  id: string;
  type: PublicPayrollType & string;
  subtype: PublicPayrollSubtype & string;
  status: PublicPayrollStatus & string;
  fundingCurrency: PublicPayrollCurrency & string;
  payPeriod: PublicPayPeriod & string;
  payFrequency: PublicPayFrequency | null;
}

/**
 * The worker identity and historical classification associated with a paycheck.
 */
export interface PublicPaycheckWorker {
  /**
   * The worker id.
   * @pattern ^wrk_
   */
  id: string;
  /**
   * The worker first name.
   */
  firstName: string;
  /**
   * The worker last name.
   */
  lastName: string;
  displayName: string;
  workerType: 'us_w2' | 'us_1099' | 'global_contractor';
}

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
 * The payroll instruction for provider direct deposit or employer-managed manual payment. This does not confirm payout execution.
 */
export type PublicPaycheckPaymentMethod = 'direct_deposit' | 'manual';

/**
 * Detailed paycheck totals in calculation and payroll funding currencies.
 */
export interface PublicPaycheckDetailTotals {
  byCurrency: string;
  inFundingCurrency: PublicPaycheckCurrencyTotals & string;
}

/**
 * A directed exchange rate where a fromCurrency major-unit amount multiplied by rate equals its toCurrency equivalent.
 */
export interface PublicExchangeRate {
  fromCurrency: PublicPayrollCurrency & string;
  toCurrency: PublicPayrollCurrency & string;
  rate: PublicExchangeRateValue & string;
}

/**
 * One earning calculation line. Lines have no durable public identity.
 */
export interface PublicPaycheckEarning {
  type:
    | 'hourly'
    | 'salaried'
    | 'overtime'
    | 'double_overtime'
    | 'paid_holiday'
    | 'pto'
    | 'sick'
    | 'commission'
    | 'bonus'
    | 'severance'
    | 'non_hourly_regular'
    | 'fixed'
    | 'group_term_life'
    | 'other_imputed';
  /**
   * @pattern ^wkp_
   */
  workplaceId: string | null;
  /**
   * The gross earnings attributed to this line in the amount's currency.
   */
  amount: PublicPayrollMoneyAmount;
  /**
   * @minimum 0
   */
  hours: number | null;
  hourlyRate: PublicHourlyRate | null;
  description: string | null;
}

/**
 * One reimbursement calculation line. Lines have no durable public identity.
 */
export interface PublicPaycheckReimbursement {
  /**
   * The amount reimbursed to the worker on this paycheck in the amount's currency. It may differ from the currency of the original expense.
   */
  amount: PublicPayrollMoneyAmount1;
  description: string | null;
}

/**
 * One non-benefit deduction calculation line. Lines have no durable public identity.
 */
export interface PublicPaycheckDeduction {
  taxTreatment: PublicPaycheckDeductionTaxTreatment & string;
  /**
   * The amount deducted from the worker's pay on this line in the amount's currency.
   */
  amount: PublicPayrollMoneyAmount2;
  description: string | null;
}

/**
 * One benefit contribution calculation line. Lines have no durable public identity.
 */
export interface PublicPaycheckBenefit {
  name: string;
  /**
   * @pattern ^pbdg_
   */
  benefitDeductionId: string | null;
  category:
    | 'health'
    | 'retirement'
    | 'health_savings'
    | 'commuter'
    | 'voluntary'
    | 'post_tax'
    | 'other'
    | null;
  type:
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
    | 'other'
    | null;
  /**
   * The amount the worker pays toward this benefit on the paycheck in the amount's currency.
   */
  workerContribution: PublicPayrollMoneyAmount3;
  /**
   * The amount the employer pays toward this benefit on the paycheck in the amount's currency.
   */
  employerContribution: PublicPayrollMoneyAmount4;
}

/**
 * One tax calculation line. Lines have no durable public identity.
 */
export interface PublicPaycheckTax {
  payer: PublicTaxPayer & string;
  /**
   * The tax amount attributed to the party identified by payer, expressed in the amount's currency.
   */
  amount: PublicPayrollMoneyAmount5;
  description: string | null;
}

/**
 * Payroll totals expressed in the parent payroll funding currency. Line-derived categories are subtotaled per paycheck in calculation currency, converted once per category, rounded to funding-currency minor units, and then summed. Net pay remains provider-authoritative.
 */
export interface PublicFundingPayrollTotals {
  /**
   * Gross earnings before worker taxes, deductions, and benefit contributions. Reimbursements are reported separately.
   */
  grossPay: PublicCurrencyMoneyAmount;
  /**
   * The provider-calculated amount to send for workers: gross pay plus reimbursements, less worker taxes, deductions, and benefit contributions. It excludes payment execution fees and may differ from recomputed totals because of provider and FX rounding.
   */
  netPay: PublicCurrencyMoneyAmount1;
  /**
   * Amounts reimbursed to workers in addition to gross pay. Reimbursements increase net pay and employer cost.
   */
  reimbursements: PublicCurrencyMoneyAmount2;
  /**
   * Payroll taxes withheld from worker pay, reducing net pay.
   */
  workerTaxes: PublicCurrencyMoneyAmount3;
  /**
   * Payroll taxes paid by the employer in addition to gross pay.
   */
  employerTaxes: PublicCurrencyMoneyAmount4;
  /**
   * Non-benefit amounts deducted from worker pay before taxes, reducing taxable pay and net pay.
   */
  preTaxDeductions: PublicCurrencyMoneyAmount5;
  /**
   * Non-benefit amounts deducted from worker pay after taxes, reducing net pay.
   */
  postTaxDeductions: PublicCurrencyMoneyAmount6;
  /**
   * Amounts workers pay toward benefits, deducted from their pay.
   */
  workerBenefitContributions: PublicCurrencyMoneyAmount7;
  /**
   * Amounts the employer pays toward worker benefits in addition to gross pay.
   */
  employerBenefitContributions: PublicCurrencyMoneyAmount8;
  /**
   * Banking and transaction fees paid by the employer to fund and pay the payroll.
   */
  transactionFees: PublicCurrencyMoneyAmount9;
  /**
   * The employer's total payroll cost: gross pay, reimbursements, employer taxes, employer benefit contributions, and transaction fees.
   */
  totalCost: PublicCurrencyMoneyAmount10;
}

/**
 * The provider-reported amount the employer must fund for the payroll, when available.
 */
export interface PublicCurrencyMoneyAmount11 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Gross earnings before worker taxes, deductions, and benefit contributions. Reimbursements are reported separately.
 */
export interface PublicCurrencyMoneyAmount {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * The provider-calculated amount to send for workers: gross pay plus reimbursements, less worker taxes, deductions, and benefit contributions. It excludes payment execution fees and may differ from recomputed totals because of provider and FX rounding.
 */
export interface PublicCurrencyMoneyAmount1 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Amounts reimbursed to workers in addition to gross pay. Reimbursements increase net pay and employer cost.
 */
export interface PublicCurrencyMoneyAmount2 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Payroll taxes withheld from worker pay, reducing net pay.
 */
export interface PublicCurrencyMoneyAmount3 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Payroll taxes paid by the employer in addition to gross pay.
 */
export interface PublicCurrencyMoneyAmount4 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Non-benefit amounts deducted from worker pay before taxes, reducing taxable pay and net pay.
 */
export interface PublicCurrencyMoneyAmount5 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Non-benefit amounts deducted from worker pay after taxes, reducing net pay.
 */
export interface PublicCurrencyMoneyAmount6 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Amounts workers pay toward benefits, deducted from their pay.
 */
export interface PublicCurrencyMoneyAmount7 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Amounts the employer pays toward worker benefits in addition to gross pay.
 */
export interface PublicCurrencyMoneyAmount8 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Banking and transaction fees paid by the employer to fund and pay the payroll.
 */
export interface PublicCurrencyMoneyAmount9 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * The employer's total payroll cost: gross pay, reimbursements, employer taxes, employer benefit contributions, and transaction fees.
 */
export interface PublicCurrencyMoneyAmount10 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Compact paycheck totals in calculation and payroll funding currencies.
 */
export interface PublicPaycheckSummaryTotals {
  byCurrency: string;
  inFundingCurrency: PublicPaycheckSummaryCurrencyTotals & string;
}

/**
 * Paycheck category totals in one currency. Every category is present, including zero-valued categories.
 */
export interface PublicPaycheckCurrencyTotals {
  currency: PublicPayrollCurrency & string;
  /**
   * Gross earnings before worker taxes, deductions, and benefit contributions. Reimbursements are reported separately.
   */
  grossPay: PublicCurrencyMoneyAmount13;
  /**
   * Calculated net pay after reimbursements, worker taxes, deductions, and benefit contributions. It excludes payment execution fees and may differ from the amount the worker ultimately receives.
   */
  netPay: PublicCurrencyMoneyAmount12;
  /**
   * Amounts reimbursed to the worker in addition to gross pay. Reimbursements increase net pay and employer cost.
   */
  reimbursements: PublicCurrencyMoneyAmount14;
  /**
   * Payroll taxes withheld from the worker's pay, reducing net pay.
   */
  workerTaxes: PublicCurrencyMoneyAmount15;
  /**
   * Payroll taxes paid by the employer in addition to gross pay.
   */
  employerTaxes: PublicCurrencyMoneyAmount16;
  /**
   * Non-benefit amounts deducted from the worker's pay before taxes, reducing taxable pay and net pay.
   */
  preTaxDeductions: PublicCurrencyMoneyAmount17;
  /**
   * Non-benefit amounts deducted from the worker's pay after taxes, reducing net pay.
   */
  postTaxDeductions: PublicCurrencyMoneyAmount18;
  /**
   * Amounts the worker pays toward benefits, deducted from their pay.
   */
  workerBenefitContributions: PublicCurrencyMoneyAmount19;
  /**
   * Amounts the employer pays toward the worker's benefits in addition to gross pay.
   */
  employerBenefitContributions: PublicCurrencyMoneyAmount20;
}

/**
 * A positive base-10 decimal string with up to 18 integer and 18 fractional digits. Scientific notation is not accepted.
 */
export type PublicExchangeRateValue = string;

/**
 * The gross earnings attributed to this line in the amount's currency.
 */
export interface PublicPayrollMoneyAmount {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  currency: PublicPayrollCurrency & string;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * A non-negative major-unit hourly rate. The earning amount remains authoritative.
 */
export interface PublicHourlyRate {
  amount: PublicHourlyRateAmount & string;
  currency: PublicPayrollCurrency & string;
  per: 'hour';
}

/**
 * The amount reimbursed to the worker on this paycheck in the amount's currency. It may differ from the currency of the original expense.
 */
export interface PublicPayrollMoneyAmount1 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  currency: PublicPayrollCurrency & string;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Whether the deduction is applied before or after taxes.
 */
export type PublicPaycheckDeductionTaxTreatment = 'pre_tax' | 'post_tax';

/**
 * The amount deducted from the worker's pay on this line in the amount's currency.
 */
export interface PublicPayrollMoneyAmount2 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  currency: PublicPayrollCurrency & string;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * The amount the worker pays toward this benefit on the paycheck in the amount's currency.
 */
export interface PublicPayrollMoneyAmount3 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  currency: PublicPayrollCurrency & string;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * The amount the employer pays toward this benefit on the paycheck in the amount's currency.
 */
export interface PublicPayrollMoneyAmount4 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  currency: PublicPayrollCurrency & string;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * The party responsible for the tax.
 */
export type PublicTaxPayer = 'worker' | 'employer';

/**
 * The tax amount attributed to the party identified by payer, expressed in the amount's currency.
 */
export interface PublicPayrollMoneyAmount5 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  currency: PublicPayrollCurrency & string;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Compact paycheck totals in one calculation currency.
 */
export interface PublicPaycheckSummaryCurrencyTotals {
  currency: PublicPayrollCurrency & string;
  /**
   * Calculated net pay after reimbursements, worker taxes, deductions, and benefit contributions. It excludes payment execution fees and may differ from the amount the worker ultimately receives.
   */
  netPay: PublicCurrencyMoneyAmount12;
}

/**
 * Gross earnings before worker taxes, deductions, and benefit contributions. Reimbursements are reported separately.
 */
export interface PublicCurrencyMoneyAmount13 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Calculated net pay after reimbursements, worker taxes, deductions, and benefit contributions. It excludes payment execution fees and may differ from the amount the worker ultimately receives.
 */
export interface PublicCurrencyMoneyAmount12 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Amounts reimbursed to the worker in addition to gross pay. Reimbursements increase net pay and employer cost.
 */
export interface PublicCurrencyMoneyAmount14 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Payroll taxes withheld from the worker's pay, reducing net pay.
 */
export interface PublicCurrencyMoneyAmount15 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Payroll taxes paid by the employer in addition to gross pay.
 */
export interface PublicCurrencyMoneyAmount16 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Non-benefit amounts deducted from the worker's pay before taxes, reducing taxable pay and net pay.
 */
export interface PublicCurrencyMoneyAmount17 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Non-benefit amounts deducted from the worker's pay after taxes, reducing net pay.
 */
export interface PublicCurrencyMoneyAmount18 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Amounts the worker pays toward benefits, deducted from their pay.
 */
export interface PublicCurrencyMoneyAmount19 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * Amounts the employer pays toward the worker's benefits in addition to gross pay.
 */
export interface PublicCurrencyMoneyAmount20 {
  /**
   * The amount in ISO 4217 minor units. For USD, 300000 represents $3,000.00.
   * @minimum 0
   */
  amount: number;
  /**
   * The server-formatted display string for the amount in its currency.
   */
  display: string;
}

/**
 * A non-negative base-10 decimal string with up to 18 integer and 18 fractional digits. Scientific notation is not accepted.
 */
export type PublicHourlyRateAmount = string;

export interface PayrollListParams {
  /**
   * The maximum number of payrolls to return, from 1 to 50.
   */
  limit: string | null;
  /**
   * Return payrolls after this payroll ID in the stable cursor order. Cannot be used with beforeId.
   * @pattern ^pay_
   */
  afterId?: string | null;
  /**
   * Return payrolls before this payroll ID in the stable cursor order. Cannot be used with afterId.
   * @pattern ^pay_
   */
  beforeId?: string | null;
  /**
   * Payroll calculation types to include.
   */
  types?: Array<PublicPayrollType> | null;
  /**
   * Payroll subtypes to include.
   */
  subtypes?: Array<PublicPayrollSubtype> | null;
  /**
   * Lifecycle statuses to include. Omit to include every status.
   */
  statuses?: Array<PublicPayrollStatus> | null;
  /**
   * Pay cadences to include.
   */
  payFrequencies?: Array<PublicPayFrequency> | null;
  /**
   * Inclusive start of the half-open payday range.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  paydayOnOrAfter?: string | null;
  /**
   * Exclusive end of the half-open payday range.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  paydayBefore?: string | null;
  /**
   * Inclusive start of the half-open pay-period-end range.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  payPeriodEndOnOrAfter?: string | null;
  /**
   * Exclusive end of the half-open pay-period-end range.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  payPeriodEndBefore?: string | null;
}

export interface PayrollListPaychecksParams {
  /**
   * The maximum number of paychecks to return, from 1 to 50.
   */
  limit: string | null;
  /**
   * Return paychecks after this paycheck ID in the stable cursor order. Cannot be used with beforeId.
   * @pattern ^pyc_
   */
  afterId?: string | null;
  /**
   * Return paychecks before this paycheck ID in the stable cursor order. Cannot be used with afterId.
   * @pattern ^pyc_
   */
  beforeId?: string | null;
  /**
   * Payrolls whose paychecks should be included.
   */
  payrollIds?: Array<string> | null;
  /**
   * Workers whose paychecks should be included.
   */
  workerIds?: Array<string> | null;
  /**
   * Worker classifications in effect for the paycheck to include. Omit to include every worker type visible to the API key.
   */
  workerTypes?: Array<'us_w2' | 'us_1099' | 'global_contractor'> | null;
  /**
   * Payroll calculation types to include, subject to the API key permissions.
   */
  payrollTypes?: Array<PublicPayrollType> | null;
  /**
   * Lifecycle statuses to include. Omit to include every status.
   */
  statuses?: Array<PublicPaycheckStatus> | null;
  /**
   * Payment methods to include.
   */
  paymentMethods?: Array<PublicPaycheckPaymentMethod> | null;
  /**
   * Paycheck compensation currencies to include.
   */
  compensationCurrencies?: Array<PublicPayrollCurrency> | null;
  /**
   * Pay cadences to include.
   */
  payFrequencies?: Array<PublicPayFrequency> | null;
  /**
   * Inclusive start of the half-open payday range.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  paydayOnOrAfter?: string | null;
  /**
   * Exclusive end of the half-open payday range.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  paydayBefore?: string | null;
}
export declare namespace Payroll {
  export {
    type PublicPayrollList as PublicPayrollList,
    type PublicPayrollDetail as PublicPayrollDetail,
    type PublicPaycheckList as PublicPaycheckList,
    type PublicPaycheckDetail as PublicPaycheckDetail,
    type PublicPayrollSummary as PublicPayrollSummary,
    type PublicPayrollType as PublicPayrollType,
    type PublicPayrollSubtype as PublicPayrollSubtype,
    type PublicPayrollStatus as PublicPayrollStatus,
    type PublicPayrollCurrency as PublicPayrollCurrency,
    type PublicPayPeriod as PublicPayPeriod,
    type PublicPayFrequency as PublicPayFrequency,
    type PublicPayrollDetailTotals as PublicPayrollDetailTotals,
    type PublicPayrollFundingMethod as PublicPayrollFundingMethod,
    type PublicPayrollTimeline as PublicPayrollTimeline,
    type PublicPaycheckSummary as PublicPaycheckSummary,
    type PublicPaycheckPayroll as PublicPaycheckPayroll,
    type PublicPaycheckWorker as PublicPaycheckWorker,
    type PublicPaycheckStatus as PublicPaycheckStatus,
    type PublicPaycheckPaymentMethod as PublicPaycheckPaymentMethod,
    type PublicPaycheckDetailTotals as PublicPaycheckDetailTotals,
    type PublicExchangeRate as PublicExchangeRate,
    type PublicPaycheckEarning as PublicPaycheckEarning,
    type PublicPaycheckReimbursement as PublicPaycheckReimbursement,
    type PublicPaycheckDeduction as PublicPaycheckDeduction,
    type PublicPaycheckBenefit as PublicPaycheckBenefit,
    type PublicPaycheckTax as PublicPaycheckTax,
    type PublicFundingPayrollTotals as PublicFundingPayrollTotals,
    type PublicCurrencyMoneyAmount11 as PublicCurrencyMoneyAmount11,
    type PublicCurrencyMoneyAmount as PublicCurrencyMoneyAmount,
    type PublicCurrencyMoneyAmount1 as PublicCurrencyMoneyAmount1,
    type PublicCurrencyMoneyAmount2 as PublicCurrencyMoneyAmount2,
    type PublicCurrencyMoneyAmount3 as PublicCurrencyMoneyAmount3,
    type PublicCurrencyMoneyAmount4 as PublicCurrencyMoneyAmount4,
    type PublicCurrencyMoneyAmount5 as PublicCurrencyMoneyAmount5,
    type PublicCurrencyMoneyAmount6 as PublicCurrencyMoneyAmount6,
    type PublicCurrencyMoneyAmount7 as PublicCurrencyMoneyAmount7,
    type PublicCurrencyMoneyAmount8 as PublicCurrencyMoneyAmount8,
    type PublicCurrencyMoneyAmount9 as PublicCurrencyMoneyAmount9,
    type PublicCurrencyMoneyAmount10 as PublicCurrencyMoneyAmount10,
    type PublicPaycheckSummaryTotals as PublicPaycheckSummaryTotals,
    type PublicPaycheckCurrencyTotals as PublicPaycheckCurrencyTotals,
    type PublicExchangeRateValue as PublicExchangeRateValue,
    type PublicPayrollMoneyAmount as PublicPayrollMoneyAmount,
    type PublicHourlyRate as PublicHourlyRate,
    type PublicPayrollMoneyAmount1 as PublicPayrollMoneyAmount1,
    type PublicPaycheckDeductionTaxTreatment as PublicPaycheckDeductionTaxTreatment,
    type PublicPayrollMoneyAmount2 as PublicPayrollMoneyAmount2,
    type PublicPayrollMoneyAmount3 as PublicPayrollMoneyAmount3,
    type PublicPayrollMoneyAmount4 as PublicPayrollMoneyAmount4,
    type PublicTaxPayer as PublicTaxPayer,
    type PublicPayrollMoneyAmount5 as PublicPayrollMoneyAmount5,
    type PublicPaycheckSummaryCurrencyTotals as PublicPaycheckSummaryCurrencyTotals,
    type PublicCurrencyMoneyAmount13 as PublicCurrencyMoneyAmount13,
    type PublicCurrencyMoneyAmount12 as PublicCurrencyMoneyAmount12,
    type PublicCurrencyMoneyAmount14 as PublicCurrencyMoneyAmount14,
    type PublicCurrencyMoneyAmount15 as PublicCurrencyMoneyAmount15,
    type PublicCurrencyMoneyAmount16 as PublicCurrencyMoneyAmount16,
    type PublicCurrencyMoneyAmount17 as PublicCurrencyMoneyAmount17,
    type PublicCurrencyMoneyAmount18 as PublicCurrencyMoneyAmount18,
    type PublicCurrencyMoneyAmount19 as PublicCurrencyMoneyAmount19,
    type PublicCurrencyMoneyAmount20 as PublicCurrencyMoneyAmount20,
    type PublicHourlyRateAmount as PublicHourlyRateAmount,
    type PayrollListParams as PayrollListParams,
    type PayrollListPaychecksParams as PayrollListPaychecksParams,
  };
}
