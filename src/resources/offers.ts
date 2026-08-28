// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';
import type * as Shared from './shared';
import type * as CustomFieldsAPI from './custom-fields';

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
   * const offer = await client.offers.list({
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
   * const offer = await client.offers.create({
   *   candidate: {
   *     firstName: 'x',
   *     lastName: 'x',
   *     email: 'john@joinwarp.com',
   *   },
   *   position: {
   *     title: 'x',
   *     startDate: '',
   *   },
   *   workerType: 'employee',
   *   compensation: {
   *     payBasis: 'year',
   *     payCurrency: 'USD',
   *     payRate: 0,
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
   * @param {OfferVoidParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.Objects5>} Success
   *
   * @example
   * ```ts
   * const objects5 = await client.offers.void('offr_1234', {
   *   voidReason: 'candidate_declined',
   * });
   * ```
   */
  void(id: string, body: OfferVoidParams, options?: RequestOptions): APIPromise<Shared.Objects5> {
    return this._client.post(__scalarPath`/v1/offers/${id}/void`, { body, ...options });
  }

  /**
   * Extend the expiration deadline of a sent offer.
   *
   * @param {string} id
   * @param {OfferExtendDeadlineParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.Objects5>} Success
   *
   * @example
   * ```ts
   * const objects5 = await client.offers.extendDeadline('offr_1234', {
   *   expirationTime: '',
   * });
   * ```
   */
  extendDeadline(
    id: string,
    body: OfferExtendDeadlineParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Objects5> {
    return this._client.post(__scalarPath`/v1/offers/${id}/extend-deadline`, { body, ...options });
  }

  /**
   * Resend the offer email to the candidate for a sent offer.
   *
   * @param {string} id
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.Objects5>} Success
   *
   * @example
   * ```ts
   * const objects5 = await client.offers.resend('offr_1234');
   * ```
   */
  resend(id: string, options?: RequestOptions): APIPromise<Shared.Objects5> {
    return this._client.post(__scalarPath`/v1/offers/${id}/resend`, options);
  }
}

export interface OfferListParams {
  limit: string | null;
  /**
   * @pattern ^offr_
   */
  afterId?: string | null;
  /**
   * @pattern ^offr_
   */
  beforeId?: string | null;
  statuses?: Array<'draft' | 'sent' | 'accepted' | 'void'> | null;
  workerTypes?: Array<'employee' | 'us_contractor' | 'global_contractor'> | null;
  /**
   * @format email
   */
  candidateEmail?: string | null;
}

export interface OfferListResponse {
  hasMore: boolean;
  count: number;
  data: Array<Shared.Objects5>;
}

export interface OfferCreateParams {
  candidate: OfferCreateParams.Candidate;
  position: OfferCreateParams.Position;
  workerType: 'employee' | 'us_contractor' | 'global_contractor';
  compensation: OfferCreateParams.Compensation;
  /**
   * @pattern ^dpt_
   */
  departmentId?: string | null;
  /**
   * @pattern ^wkp_
   */
  workplaceId?: string | null;
  /**
   * @pattern ^wrk_
   */
  managerId?: string | null;
  expirationTime?: string | null;
  backgroundCheckWorkLocation?: OfferCreateParams.BackgroundCheckWorkLocation | null;
}

export namespace OfferCreateParams {
  export interface Candidate {
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
     * @format email
     */
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
    /**
     * @minLength 1
     * @pattern ^\S[\s\S]*\S$|^\S$|^$
     */
    title: string;
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
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
    payRate: number;
    payType?: 'fixed' | 'pay_as_you_go' | null;
    payVariableRate?: number | null;
    signOnBonus?: number | null;
    relocationBonus?: number | null;
    /**
     * @minimum 0
     */
    stockOptions?: number | null;
    /**
     * @minimum 0
     */
    vestingScheduleMonths?: number | null;
    /**
     * @minimum 0
     */
    cliffMonths?: number | null;
  }

  export interface BackgroundCheckWorkLocation {
    country: string;
    state: string;
    city: string;
  }
}

export interface OfferCreateResponse {
  /**
   * @pattern ^offr_
   */
  id: string;
  status: 'draft' | 'sent' | 'accepted' | 'void';
  workerType: 'employee' | 'us_contractor' | 'global_contractor';
  candidate: OfferCreateResponse.Candidate;
  position: OfferCreateResponse.Position;
  department: OfferCreateResponse.Department | null;
  workplace: Shared.Union18 | null;
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
    /**
     * @format email
     */
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
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
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
    /**
     * @pattern ^dpt_
     */
    id: string;
    name: string;
  }

  export interface Manager {
    /**
     * @pattern ^wrk_
     */
    id: string;
    name: string | null;
  }

  export interface Compensation {
    basePay: Compensation.BasePay;
    signOnBonus: Shared.PublicMoneyAmount | null;
    relocationBonus: Shared.PublicMoneyAmount | null;
    stock: Compensation.Stock | null;
  }

  export namespace Compensation {
    export interface BasePay {
      /**
       * A monetary amount with its currency and server-formatted display value.
       */
      amount: Shared.PublicMoneyAmount;
      basis: 'year' | 'month' | 'week' | 'hour' | 'variable';
      type: 'fixed' | 'pay_as_you_go' | null;
      variableRate: Shared.PublicMoneyAmount | null;
    }

    export interface Stock {
      /**
       * @minimum 0
       */
      options: number;
      /**
       * @minimum 0
       */
      vestingScheduleMonths: number | null;
      /**
       * @minimum 0
       */
      cliffMonths: number | null;
    }
  }
}

export interface OfferVoidParams {
  voidReason: 'candidate_declined' | 'other';
  voidNotes?: string | null;
}

export interface OfferExtendDeadlineParams {
  expirationTime: string;
}
export declare namespace Offers {
  export {
    type OfferListResponse as OfferListResponse,
    type OfferCreateResponse as OfferCreateResponse,
    type OfferListParams as OfferListParams,
    type OfferCreateParams as OfferCreateParams,
    type OfferVoidParams as OfferVoidParams,
    type OfferExtendDeadlineParams as OfferExtendDeadlineParams,
  };
}
