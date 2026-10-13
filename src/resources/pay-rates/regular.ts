// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';

export class Regular extends APIResource {
  /**
   * Create an effective-dated regular pay rate for a worker. The API key must have the compensation write scope corresponding to the worker classification. Fixed rates require a nonnegative integer amount in minor currency units, and writes accept only currencies with exactly two ISO 4217 minor-unit digits. Amount is required except for variable pay, and requireHoursSubmission is required for hourly pay. An inactive worker’s rate must start on the worker start date; an active worker’s rate must start on or after that date. An existing future rate blocks creation except for a same-start-date replacement. Currency changes must begin at the current pay-period start, or at the worker start date when the worker is inactive, is a pay-as-you-go contractor, or has a future start date. Variable pay returns a null id and stores no fixed pay-rate row. Replacing a fixed row on the same date emits separate deleted and created webhooks; delivery order is not guaranteed. Creating a fixed rate over variable pay emits only the created webhook because no fixed row existed to delete. There is no pay-rate update event.
   *
   * @param {RegularCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PublicCreateRegularPayRateResponse>} PublicCreateRegularPayRateResponse
   *
   * @example
   * ```ts
   * const publicCreateRegularPayRate = await client.payRates.regular.create({
   *   workerId: 'wrk_khac8380c2Lm',
   *   type: 'salary',
   *   currency: 'USD',
   *   effectiveDate: '',
   * });
   * ```
   */
  create(
    body: RegularCreateParams,
    options?: RequestOptions,
  ): APIPromise<PublicCreateRegularPayRateResponse> {
    return this._client.post('/v1/pay_rates/regular', { body, ...options });
  }

  /**
   * Delete a regular pay rate or variable-pay boundary identified by worker and effective date. The effective date must be strictly after the current UTC date. The API key must have the compensation write scope corresponding to the worker classification. Deletion reopens the predecessor through the deleted range, including when deleting a variable-pay boundary. There is no public PATCH or PUT pay-rate update operation; replace a same-date rate by creating its replacement.
   *
   * @param {RegularDeleteParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns <No Content>
   *
   * @example
   * ```ts
   * await client.payRates.regular.delete({
   *   workerId: 'wrk_khac8380c2Lm',
   *   effectiveDate: '',
   * });
   * ```
   */
  delete(body: RegularDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/v1/pay_rates/regular', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PublicCreateRegularPayRateResponse {
  /**
   * The created pay rate id, or null when variable pay is represented by no active regular rate.
   * @pattern ^pyr_
   */
  id: string | null;
}

export interface RegularCreateParams {
  /**
   * The worker whose regular pay rate will be created.
   * @pattern ^wrk_
   */
  workerId: string;
  /**
   * How the regular pay rate is measured. Salary represents an annual rate. Variable pay creates a dated boundary without a fixed pay-rate row and returns a null id.
   */
  type: 'salary' | 'monthly' | 'weekly' | 'hourly' | 'variable';
  /**
   * The two-decimal ISO 4217 payout currency of the pay rate.
   */
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
    | 'COP'
    | 'CRC'
    | 'EGP'
    | 'FJD'
    | 'GEL'
    | 'GHS'
    | 'ILS'
    | 'KES'
    | 'LKR'
    | 'MAD'
    | 'MXN'
    | 'NPR'
    | 'PHP'
    | 'PKR'
    | 'THB'
    | 'UAH'
    | 'UYU'
    | 'ZAR'
    | 'ZMW'
    | 'NGN'
    | 'RSD'
    | 'TWD'
    | 'GTQ'
    | 'HNL'
    | 'DOP'
    | 'SAR'
    | 'PEN';
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveDate: string;
  /**
   * minor units — cents, e.g. 2345 for $23.45
   * @minimum 0
   */
  amount?: number | null;
  /**
   * Whether the worker must submit hours. Required when type is hourly.
   */
  requireHoursSubmission?: boolean | null;
  /**
   * A human-readable label for the pay rate.
   */
  description?: string | null;
  /**
   * Optional internal notes about the pay rate change.
   */
  notes?: string | null;
}

export interface RegularDeleteParams {
  /**
   * The worker whose future regular pay rate will be deleted.
   * @pattern ^wrk_
   */
  workerId: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  effectiveDate: string;
}
export declare namespace Regular {
  export {
    type PublicCreateRegularPayRateResponse as PublicCreateRegularPayRateResponse,
    type RegularCreateParams as RegularCreateParams,
    type RegularDeleteParams as RegularDeleteParams,
  };
}
