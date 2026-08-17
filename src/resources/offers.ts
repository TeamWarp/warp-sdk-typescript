// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';

export class Offers extends APIResource {
  /**
   * List the candidate offers for your company.
   *
   * @param {OfferListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OfferListResponse>} Success
   *
   * @example
   * ```ts
   * const list = await client.offers.list({
   *   limit: 'limit',
   * });
   * ```
   */
  list(query: OfferListParams, options?: RequestOptions): APIPromise<OfferListResponse> {
    return this._client.get('/v1/offers', { query, ...options });
  }

  /**
   * Create and send a candidate offer. The candidate receives an email with a link to the offer portal.
   *
   * @param {OfferCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OfferCreateResponse>} Success
   *
   * @example
   * ```ts
   * const create = await client.offers.create({
   *   candidate: {
   *     firstName: {},
   *     lastName: {},
   *     email: {},
   *   },
   *   position: {
   *     title: {},
   *     startDate: {},
   *   },
   *   workerType: 'employee',
   *   compensation: {
   *     payBasis: 'year',
   *     payCurrency: 'USD',
   *     payRate: {},
   *   },
   * });
   * ```
   */
  create(body: OfferCreateParams, options?: RequestOptions): APIPromise<OfferCreateResponse> {
    return this._client.post('/v1/offers', { body, ...options });
  }

  /**
   * Void a previously sent offer. Only sent offers can be voided.
   *
   * @param {string} id
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OfferVoidResponse>} Success
   *
   * @example
   * ```ts
   * const void_ = await client.offers.void('id');
   * ```
   */
  void(id: string, options?: RequestOptions): APIPromise<OfferVoidResponse> {
    return this._client.post(__scalarPath`/v1/offers/${id}/void`, options);
  }

  /**
   * Extend the expiration deadline of a sent offer.
   *
   * @param {string} id
   * @param {OfferExtendDeadlineParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OfferExtendDeadlineResponse>} Success
   *
   * @example
   * ```ts
   * const extendDeadline = await client.offers.extendDeadline('id', {
   *   expirationTime: '',
   * });
   * ```
   */
  extendDeadline(
    id: string,
    body: OfferExtendDeadlineParams,
    options?: RequestOptions,
  ): APIPromise<OfferExtendDeadlineResponse> {
    return this._client.post(__scalarPath`/v1/offers/${id}/extend-deadline`, { body, ...options });
  }

  /**
   * Resend the offer email to the candidate for a sent offer.
   *
   * @param {string} id
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OfferResendResponse>} Success
   *
   * @example
   * ```ts
   * const resend = await client.offers.resend('id');
   * ```
   */
  resend(id: string, options?: RequestOptions): APIPromise<OfferResendResponse> {
    return this._client.post(__scalarPath`/v1/offers/${id}/resend`, options);
  }
}

export interface OfferListParams {
  limit: string | null;
  afterId?: string | null;
  beforeId?: string | null;
  statuses?: Array<'draft' | 'sent' | 'accepted' | 'void'> | null;
  workerTypes?: Array<'employee' | 'us_contractor' | 'global_contractor'> | null;
  candidateEmail?: string | null;
}

export interface OfferListResponse {
  hasMore: boolean;
  count: number;
  data: Array<OfferListResponse.Data>;
}

export namespace OfferListResponse {
  export interface Data {
    id: string;
    status: 'draft' | 'sent' | 'accepted' | 'void';
    workerType: 'employee' | 'us_contractor' | 'global_contractor';
    candidate: Data.Candidate;
    position: Data.Position;
    department: Data.Department | null;
    workplace: Data.Workplace | null;
    manager: Data.Manager | null;
    /**
     * Display name of the person or company that sent the offer. Null for offers not yet sent.
     */
    sentBy: string | null;
    compensation: Data.Compensation;
    /**
     * The candidate-facing offer portal URL. Null for offers that have not been sent.
     */
    offerUrl: string | null;
    expirationTime: string | null;
    lastViewedAt: string | null;
    createdAt: string;
  }

  export namespace Data {
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
      signOnBonus: Compensation.SignOnBonus | null;
      relocationBonus: Compensation.RelocationBonus | null;
      stock: Compensation.Stock | null;
    }

    export namespace Compensation {
      export interface BasePay {
        /**
         * A monetary amount with its currency and server-formatted display value.
         */
        amount: BasePay.Amount;
        basis: 'year' | 'month' | 'week' | 'hour' | 'variable';
        type: 'fixed' | 'pay_as_you_go' | null;
        variableRate: BasePay.VariableRate | null;
      }

      export namespace BasePay {
        export interface Amount {
          amount: string;
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

        export interface VariableRate {
          amount: string;
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
      }

      export interface SignOnBonus {
        amount: string;
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

      export interface RelocationBonus {
        amount: string;
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

      export interface Stock {
        options: string;
        vestingScheduleMonths: string | null;
        cliffMonths: string | null;
      }
    }
  }
}

export interface OfferCreateParams {
  candidate: OfferCreateParams.Candidate;
  position: OfferCreateParams.Position;
  workerType: 'employee' | 'us_contractor' | 'global_contractor';
  compensation: OfferCreateParams.Compensation;
  departmentId?: string | null;
  workplaceId?: string | null;
  managerId?: string | null;
  expirationTime?: string | null;
}

export namespace OfferCreateParams {
  export interface Candidate {
    firstName: string;
    lastName: string;
    email: string;
    contractorDetails?: Candidate.ContractorDetails | null;
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
    country?:
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
      | 'ZW'
      | null;
    scopeOfWork?: string | null;
  }

  export interface Compensation {
    payBasis: 'year' | 'month' | 'week' | 'hour' | 'variable';
    payCurrency:
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
    payRate: unknown;
    payType?: 'fixed' | 'pay_as_you_go' | null;
    payVariableRate?: unknown | null;
    signOnBonus?: unknown | null;
    relocationBonus?: unknown | null;
    stockOptions?: string | null;
    vestingScheduleMonths?: string | null;
    cliffMonths?: string | null;
  }
}

export interface OfferCreateResponse {
  id: string;
  status: 'draft' | 'sent' | 'accepted' | 'void';
  workerType: 'employee' | 'us_contractor' | 'global_contractor';
  candidate: OfferCreateResponse.Candidate;
  position: OfferCreateResponse.Position;
  department: OfferCreateResponse.Department | null;
  workplace: OfferCreateResponse.Workplace | null;
  manager: OfferCreateResponse.Manager | null;
  /**
   * Display name of the person or company that sent the offer. Null for offers not yet sent.
   */
  sentBy: string | null;
  compensation: OfferCreateResponse.Compensation;
  /**
   * The candidate-facing offer portal URL. Null for offers that have not been sent.
   */
  offerUrl: string | null;
  expirationTime: string | null;
  lastViewedAt: string | null;
  createdAt: string;
}

export namespace OfferCreateResponse {
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
    signOnBonus: Compensation.SignOnBonus | null;
    relocationBonus: Compensation.RelocationBonus | null;
    stock: Compensation.Stock | null;
  }

  export namespace Compensation {
    export interface BasePay {
      /**
       * A monetary amount with its currency and server-formatted display value.
       */
      amount: BasePay.Amount;
      basis: 'year' | 'month' | 'week' | 'hour' | 'variable';
      type: 'fixed' | 'pay_as_you_go' | null;
      variableRate: BasePay.VariableRate | null;
    }

    export namespace BasePay {
      export interface Amount {
        amount: string;
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

      export interface VariableRate {
        amount: string;
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
    }

    export interface SignOnBonus {
      amount: string;
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

    export interface RelocationBonus {
      amount: string;
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

    export interface Stock {
      options: string;
      vestingScheduleMonths: string | null;
      cliffMonths: string | null;
    }
  }
}

export interface OfferVoidResponse {
  id: string;
  status: 'draft' | 'sent' | 'accepted' | 'void';
  workerType: 'employee' | 'us_contractor' | 'global_contractor';
  candidate: OfferVoidResponse.Candidate;
  position: OfferVoidResponse.Position;
  department: OfferVoidResponse.Department | null;
  workplace: OfferVoidResponse.Workplace | null;
  manager: OfferVoidResponse.Manager | null;
  /**
   * Display name of the person or company that sent the offer. Null for offers not yet sent.
   */
  sentBy: string | null;
  compensation: OfferVoidResponse.Compensation;
  /**
   * The candidate-facing offer portal URL. Null for offers that have not been sent.
   */
  offerUrl: string | null;
  expirationTime: string | null;
  lastViewedAt: string | null;
  createdAt: string;
}

export namespace OfferVoidResponse {
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
    signOnBonus: Compensation.SignOnBonus | null;
    relocationBonus: Compensation.RelocationBonus | null;
    stock: Compensation.Stock | null;
  }

  export namespace Compensation {
    export interface BasePay {
      /**
       * A monetary amount with its currency and server-formatted display value.
       */
      amount: BasePay.Amount;
      basis: 'year' | 'month' | 'week' | 'hour' | 'variable';
      type: 'fixed' | 'pay_as_you_go' | null;
      variableRate: BasePay.VariableRate | null;
    }

    export namespace BasePay {
      export interface Amount {
        amount: string;
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

      export interface VariableRate {
        amount: string;
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
    }

    export interface SignOnBonus {
      amount: string;
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

    export interface RelocationBonus {
      amount: string;
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

    export interface Stock {
      options: string;
      vestingScheduleMonths: string | null;
      cliffMonths: string | null;
    }
  }
}

export interface OfferExtendDeadlineParams {
  expirationTime: string;
}

export interface OfferExtendDeadlineResponse {
  id: string;
  status: 'draft' | 'sent' | 'accepted' | 'void';
  workerType: 'employee' | 'us_contractor' | 'global_contractor';
  candidate: OfferExtendDeadlineResponse.Candidate;
  position: OfferExtendDeadlineResponse.Position;
  department: OfferExtendDeadlineResponse.Department | null;
  workplace: OfferExtendDeadlineResponse.Workplace | null;
  manager: OfferExtendDeadlineResponse.Manager | null;
  /**
   * Display name of the person or company that sent the offer. Null for offers not yet sent.
   */
  sentBy: string | null;
  compensation: OfferExtendDeadlineResponse.Compensation;
  /**
   * The candidate-facing offer portal URL. Null for offers that have not been sent.
   */
  offerUrl: string | null;
  expirationTime: string | null;
  lastViewedAt: string | null;
  createdAt: string;
}

export namespace OfferExtendDeadlineResponse {
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
    signOnBonus: Compensation.SignOnBonus | null;
    relocationBonus: Compensation.RelocationBonus | null;
    stock: Compensation.Stock | null;
  }

  export namespace Compensation {
    export interface BasePay {
      /**
       * A monetary amount with its currency and server-formatted display value.
       */
      amount: BasePay.Amount;
      basis: 'year' | 'month' | 'week' | 'hour' | 'variable';
      type: 'fixed' | 'pay_as_you_go' | null;
      variableRate: BasePay.VariableRate | null;
    }

    export namespace BasePay {
      export interface Amount {
        amount: string;
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

      export interface VariableRate {
        amount: string;
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
    }

    export interface SignOnBonus {
      amount: string;
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

    export interface RelocationBonus {
      amount: string;
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

    export interface Stock {
      options: string;
      vestingScheduleMonths: string | null;
      cliffMonths: string | null;
    }
  }
}

export interface OfferResendResponse {
  id: string;
  status: 'draft' | 'sent' | 'accepted' | 'void';
  workerType: 'employee' | 'us_contractor' | 'global_contractor';
  candidate: OfferResendResponse.Candidate;
  position: OfferResendResponse.Position;
  department: OfferResendResponse.Department | null;
  workplace: OfferResendResponse.Workplace | null;
  manager: OfferResendResponse.Manager | null;
  /**
   * Display name of the person or company that sent the offer. Null for offers not yet sent.
   */
  sentBy: string | null;
  compensation: OfferResendResponse.Compensation;
  /**
   * The candidate-facing offer portal URL. Null for offers that have not been sent.
   */
  offerUrl: string | null;
  expirationTime: string | null;
  lastViewedAt: string | null;
  createdAt: string;
}

export namespace OfferResendResponse {
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
    signOnBonus: Compensation.SignOnBonus | null;
    relocationBonus: Compensation.RelocationBonus | null;
    stock: Compensation.Stock | null;
  }

  export namespace Compensation {
    export interface BasePay {
      /**
       * A monetary amount with its currency and server-formatted display value.
       */
      amount: BasePay.Amount;
      basis: 'year' | 'month' | 'week' | 'hour' | 'variable';
      type: 'fixed' | 'pay_as_you_go' | null;
      variableRate: BasePay.VariableRate | null;
    }

    export namespace BasePay {
      export interface Amount {
        amount: string;
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

      export interface VariableRate {
        amount: string;
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
    }

    export interface SignOnBonus {
      amount: string;
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

    export interface RelocationBonus {
      amount: string;
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

    export interface Stock {
      options: string;
      vestingScheduleMonths: string | null;
      cliffMonths: string | null;
    }
  }
}
export declare namespace Offers {
  export {
    type OfferListResponse as OfferListResponse,
    type OfferCreateResponse as OfferCreateResponse,
    type OfferVoidResponse as OfferVoidResponse,
    type OfferExtendDeadlineResponse as OfferExtendDeadlineResponse,
    type OfferResendResponse as OfferResendResponse,
    type OfferListParams as OfferListParams,
    type OfferCreateParams as OfferCreateParams,
    type OfferExtendDeadlineParams as OfferExtendDeadlineParams,
  };
}
