// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";
import type * as CustomFieldsAPI from "./custom-fields";

export class Offers extends APIResource {
  /**
   * List the candidate offers for your company.
   *
   * @param {OfferListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OfferListResponse>} Success
   *
   * @example
   * ```ts
   * const list = await client.offers.list();
   * ```
   */
  list(query: OfferListParams | null | undefined = {}, options?: RequestOptions): APIPromise<OfferListResponse> {
    return this._client.get("/v1/offers", { query, ...options });
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
   *     firstName: "x",
   *     lastName: "x",
   *     email: "john@joinwarp.com",
   *   },
   *   position: {
   *     title: "x",
   *     startDate: "2000-01-01",
   *   },
   *   workerType: "employee",
   *   compensation: {
   *     payBasis: "year",
   *     payCurrency: "USD",
   *     payRate: 0,
   *   },
   * });
   * ```
   */
  create(body: OfferCreateParams, options?: RequestOptions): APIPromise<OfferCreateResponse> {
    return this._client.post("/v1/offers", { body, ...options });
  }

  /**
   * Void a previously sent offer. Only sent offers can be voided.
   *
   * @param {string} id - The tag of the offer.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OfferVoidResponse>} Success
   *
   * @example
   * ```ts
   * const void_ = await client.offers.void("offr_1234");
   * ```
   */
  void(id: string, options?: RequestOptions): APIPromise<OfferVoidResponse> {
    return this._client.post(__scalarPath`/v1/offers/${id}/void`, options);
  }

  /**
   * Extend the expiration deadline of a sent offer.
   *
   * @param {string} id - The tag of the offer.
   * @param {OfferExtendDeadlineParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OfferExtendDeadlineResponse>} Success
   *
   * @example
   * ```ts
   * const extendDeadline = await client.offers.extendDeadline("offr_1234", {
   *   expirationTime: "",
   * });
   * ```
   */
  extendDeadline(id: string, body: OfferExtendDeadlineParams, options?: RequestOptions): APIPromise<OfferExtendDeadlineResponse> {
    return this._client.post(__scalarPath`/v1/offers/${id}/extend-deadline`, { body, ...options });
  }

  /**
   * Resend the offer email to the candidate for a sent offer.
   *
   * @param {string} id - The tag of the offer.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OfferResendResponse>} Success
   *
   * @example
   * ```ts
   * const resend = await client.offers.resend("offr_1234");
   * ```
   */
  resend(id: string, options?: RequestOptions): APIPromise<OfferResendResponse> {
    return this._client.post(__scalarPath`/v1/offers/${id}/resend`, options);
  }
}

/**
 * a string to be decoded into a Date
 */
export type Date = string;

export interface OfferListParams {
  /**
   * a number less than or equal to 100
   */
  limit?: string;
  /**
   * The tag of the offer.
   * @pattern ^offr_
   */
  afterId?: string;
  /**
   * The tag of the offer.
   * @pattern ^offr_
   */
  beforeId?: string;
  statuses?: Array<"draft" | "sent" | "accepted" | "void">;
  workerTypes?: Array<"employee" | "us_contractor" | "global_contractor">;
  /**
   * An email with a reasonably valid regex (based on RFC 5321 atext characters)
   * @pattern ^(?!\.)(?!.*\.\.)([a-z0-9!#$%&'*+/=?^_`{|}~\-.]*)[a-z0-9!#$%&'*+/=?^_`{|}~-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$
   */
  candidateEmail?: string;
}

export interface OfferListResponse {
  hasMore: boolean;
  /**
   * an integer
   */
  count: number;
  data: Array<OfferListResponse.Data>;
}

export namespace OfferListResponse {
  export interface Data {
    /**
     * The tag of the offer.
     * @pattern ^offr_
     */
    id: string;
    status: "draft" | "sent" | "accepted" | "void";
    workerType: "employee" | "us_contractor" | "global_contractor";
    candidate: Data.Candidate;
    position: Data.Position;
    department: Data.Department | null;
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
    expirationTime: Date | null;
    lastViewedAt: Date | null;
    /**
     * a string to be decoded into a Date
     */
    createdAt: Date;
  }

  export namespace Data {
    export interface Candidate {
      firstName: string;
      lastName: string;
      /**
       * An email with a reasonably valid regex (based on RFC 5321 atext characters)
       * @pattern ^(?!\.)(?!.*\.\.)([a-z0-9!#$%&'*+/=?^_`{|}~\-.]*)[a-z0-9!#$%&'*+/=?^_`{|}~-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$
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
       * A date string in the form YYYY-MM-DD
       * @pattern ^\d{4}-\d{2}-\d{2}$
       */
      startDate: string;
      country: "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
      scopeOfWork: string | null;
    }

    export interface Department {
      /**
       * The unique public id of the department
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface Manager {
      /**
       * The id of the worker.
       * @pattern ^wrk_
       */
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
        amount: BasePay.Amount;
        basis: "year" | "month" | "week" | "hour" | "variable";
        type: "fixed" | "pay_as_you_go" | null;
        variableRate: BasePay.VariableRate | null;
      }

      export namespace BasePay {
        export interface Amount {
          /**
           * Amount in the currency base unit, e.g. cents for USD.
           * @minimum 0
           */
          amount: number;
          currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
          /**
           * The server-formatted display string for the amount in its currency.
           */
          display: string;
        }

        export interface VariableRate {
          /**
           * Amount in the currency base unit, e.g. cents for USD.
           * @minimum 0
           */
          amount: number;
          currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
          /**
           * The server-formatted display string for the amount in its currency.
           */
          display: string;
        }
      }

      export interface SignOnBonus {
        /**
         * Amount in the currency base unit, e.g. cents for USD.
         * @minimum 0
         */
        amount: number;
        currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }

      export interface RelocationBonus {
        /**
         * Amount in the currency base unit, e.g. cents for USD.
         * @minimum 0
         */
        amount: number;
        currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }

      export interface Stock {
        /**
         * a non-negative number
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
}

export interface OfferCreateParams {
  candidate: OfferCreateParams.Candidate;
  position: OfferCreateParams.Position;
  workerType: "employee" | "us_contractor" | "global_contractor";
  compensation: OfferCreateParams.Compensation;
  /**
   * @pattern ^dpt_
   */
  departmentId?: string | null;
  /**
   * @pattern ^wrk_
   */
  managerId?: string | null;
  expirationTime?: Date | null;
}

export namespace OfferCreateParams {
  export interface Candidate {
    /**
     * a non empty string
     * @minLength 1
     * @pattern ^\S[\s\S]*\S$|^\S$|^$
     */
    firstName: CustomFieldsAPI.NonEmptyTrimmedString;
    /**
     * a non empty string
     * @minLength 1
     * @pattern ^\S[\s\S]*\S$|^\S$|^$
     */
    lastName: CustomFieldsAPI.NonEmptyTrimmedString;
    /**
     * An email with a reasonably valid regex (based on RFC 5321 atext characters)
     * @pattern ^(?!\.)(?!.*\.\.)([a-z0-9!#$%&'*+/=?^_`{|}~\-.]*)[a-z0-9!#$%&'*+/=?^_`{|}~-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$
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
     * a non empty string
     * @minLength 1
     * @pattern ^\S[\s\S]*\S$|^\S$|^$
     */
    title: CustomFieldsAPI.NonEmptyTrimmedString;
    /**
     * A date string in the form YYYY-MM-DD
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    startDate: string;
    /**
     * Required when workerType is global_contractor. Ignored for employee and us_contractor offers.
     */
    country?: "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW" | null;
    scopeOfWork?: string | null;
  }

  export interface Compensation {
    payBasis: "year" | "month" | "week" | "hour" | "variable";
    payCurrency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
    /**
     * a positive number
     */
    payRate: number;
    payType?: "fixed" | "pay_as_you_go" | null;
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
}

export interface OfferCreateResponse {
  /**
   * The tag of the offer.
   * @pattern ^offr_
   */
  id: string;
  status: "draft" | "sent" | "accepted" | "void";
  workerType: "employee" | "us_contractor" | "global_contractor";
  candidate: OfferCreateResponse.Candidate;
  position: OfferCreateResponse.Position;
  department: OfferCreateResponse.Department | null;
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
  expirationTime: Date | null;
  lastViewedAt: Date | null;
  /**
   * a string to be decoded into a Date
   */
  createdAt: Date;
}

export namespace OfferCreateResponse {
  export interface Candidate {
    firstName: string;
    lastName: string;
    /**
     * An email with a reasonably valid regex (based on RFC 5321 atext characters)
     * @pattern ^(?!\.)(?!.*\.\.)([a-z0-9!#$%&'*+/=?^_`{|}~\-.]*)[a-z0-9!#$%&'*+/=?^_`{|}~-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$
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
     * A date string in the form YYYY-MM-DD
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    startDate: string;
    country: "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
    scopeOfWork: string | null;
  }

  export interface Department {
    /**
     * The unique public id of the department
     * @pattern ^dpt_
     */
    id: string;
    name: string;
  }

  export interface Manager {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
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
      amount: BasePay.Amount;
      basis: "year" | "month" | "week" | "hour" | "variable";
      type: "fixed" | "pay_as_you_go" | null;
      variableRate: BasePay.VariableRate | null;
    }

    export namespace BasePay {
      export interface Amount {
        /**
         * Amount in the currency base unit, e.g. cents for USD.
         * @minimum 0
         */
        amount: number;
        currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }

      export interface VariableRate {
        /**
         * Amount in the currency base unit, e.g. cents for USD.
         * @minimum 0
         */
        amount: number;
        currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }
    }

    export interface SignOnBonus {
      /**
       * Amount in the currency base unit, e.g. cents for USD.
       * @minimum 0
       */
      amount: number;
      currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface RelocationBonus {
      /**
       * Amount in the currency base unit, e.g. cents for USD.
       * @minimum 0
       */
      amount: number;
      currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface Stock {
      /**
       * a non-negative number
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

export interface OfferVoidResponse {
  /**
   * The tag of the offer.
   * @pattern ^offr_
   */
  id: string;
  status: "draft" | "sent" | "accepted" | "void";
  workerType: "employee" | "us_contractor" | "global_contractor";
  candidate: OfferVoidResponse.Candidate;
  position: OfferVoidResponse.Position;
  department: OfferVoidResponse.Department | null;
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
  expirationTime: Date | null;
  lastViewedAt: Date | null;
  /**
   * a string to be decoded into a Date
   */
  createdAt: Date;
}

export namespace OfferVoidResponse {
  export interface Candidate {
    firstName: string;
    lastName: string;
    /**
     * An email with a reasonably valid regex (based on RFC 5321 atext characters)
     * @pattern ^(?!\.)(?!.*\.\.)([a-z0-9!#$%&'*+/=?^_`{|}~\-.]*)[a-z0-9!#$%&'*+/=?^_`{|}~-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$
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
     * A date string in the form YYYY-MM-DD
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    startDate: string;
    country: "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
    scopeOfWork: string | null;
  }

  export interface Department {
    /**
     * The unique public id of the department
     * @pattern ^dpt_
     */
    id: string;
    name: string;
  }

  export interface Manager {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
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
      amount: BasePay.Amount;
      basis: "year" | "month" | "week" | "hour" | "variable";
      type: "fixed" | "pay_as_you_go" | null;
      variableRate: BasePay.VariableRate | null;
    }

    export namespace BasePay {
      export interface Amount {
        /**
         * Amount in the currency base unit, e.g. cents for USD.
         * @minimum 0
         */
        amount: number;
        currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }

      export interface VariableRate {
        /**
         * Amount in the currency base unit, e.g. cents for USD.
         * @minimum 0
         */
        amount: number;
        currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }
    }

    export interface SignOnBonus {
      /**
       * Amount in the currency base unit, e.g. cents for USD.
       * @minimum 0
       */
      amount: number;
      currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface RelocationBonus {
      /**
       * Amount in the currency base unit, e.g. cents for USD.
       * @minimum 0
       */
      amount: number;
      currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface Stock {
      /**
       * a non-negative number
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

export interface OfferExtendDeadlineParams {
  /**
   * a string to be decoded into a Date
   */
  expirationTime: Date;
}

export interface OfferExtendDeadlineResponse {
  /**
   * The tag of the offer.
   * @pattern ^offr_
   */
  id: string;
  status: "draft" | "sent" | "accepted" | "void";
  workerType: "employee" | "us_contractor" | "global_contractor";
  candidate: OfferExtendDeadlineResponse.Candidate;
  position: OfferExtendDeadlineResponse.Position;
  department: OfferExtendDeadlineResponse.Department | null;
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
  expirationTime: Date | null;
  lastViewedAt: Date | null;
  /**
   * a string to be decoded into a Date
   */
  createdAt: Date;
}

export namespace OfferExtendDeadlineResponse {
  export interface Candidate {
    firstName: string;
    lastName: string;
    /**
     * An email with a reasonably valid regex (based on RFC 5321 atext characters)
     * @pattern ^(?!\.)(?!.*\.\.)([a-z0-9!#$%&'*+/=?^_`{|}~\-.]*)[a-z0-9!#$%&'*+/=?^_`{|}~-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$
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
     * A date string in the form YYYY-MM-DD
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    startDate: string;
    country: "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
    scopeOfWork: string | null;
  }

  export interface Department {
    /**
     * The unique public id of the department
     * @pattern ^dpt_
     */
    id: string;
    name: string;
  }

  export interface Manager {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
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
      amount: BasePay.Amount;
      basis: "year" | "month" | "week" | "hour" | "variable";
      type: "fixed" | "pay_as_you_go" | null;
      variableRate: BasePay.VariableRate | null;
    }

    export namespace BasePay {
      export interface Amount {
        /**
         * Amount in the currency base unit, e.g. cents for USD.
         * @minimum 0
         */
        amount: number;
        currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }

      export interface VariableRate {
        /**
         * Amount in the currency base unit, e.g. cents for USD.
         * @minimum 0
         */
        amount: number;
        currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }
    }

    export interface SignOnBonus {
      /**
       * Amount in the currency base unit, e.g. cents for USD.
       * @minimum 0
       */
      amount: number;
      currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface RelocationBonus {
      /**
       * Amount in the currency base unit, e.g. cents for USD.
       * @minimum 0
       */
      amount: number;
      currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface Stock {
      /**
       * a non-negative number
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

export interface OfferResendResponse {
  /**
   * The tag of the offer.
   * @pattern ^offr_
   */
  id: string;
  status: "draft" | "sent" | "accepted" | "void";
  workerType: "employee" | "us_contractor" | "global_contractor";
  candidate: OfferResendResponse.Candidate;
  position: OfferResendResponse.Position;
  department: OfferResendResponse.Department | null;
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
  expirationTime: Date | null;
  lastViewedAt: Date | null;
  /**
   * a string to be decoded into a Date
   */
  createdAt: Date;
}

export namespace OfferResendResponse {
  export interface Candidate {
    firstName: string;
    lastName: string;
    /**
     * An email with a reasonably valid regex (based on RFC 5321 atext characters)
     * @pattern ^(?!\.)(?!.*\.\.)([a-z0-9!#$%&'*+/=?^_`{|}~\-.]*)[a-z0-9!#$%&'*+/=?^_`{|}~-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$
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
     * A date string in the form YYYY-MM-DD
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    startDate: string;
    country: "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
    scopeOfWork: string | null;
  }

  export interface Department {
    /**
     * The unique public id of the department
     * @pattern ^dpt_
     */
    id: string;
    name: string;
  }

  export interface Manager {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
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
      amount: BasePay.Amount;
      basis: "year" | "month" | "week" | "hour" | "variable";
      type: "fixed" | "pay_as_you_go" | null;
      variableRate: BasePay.VariableRate | null;
    }

    export namespace BasePay {
      export interface Amount {
        /**
         * Amount in the currency base unit, e.g. cents for USD.
         * @minimum 0
         */
        amount: number;
        currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }

      export interface VariableRate {
        /**
         * Amount in the currency base unit, e.g. cents for USD.
         * @minimum 0
         */
        amount: number;
        currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
        /**
         * The server-formatted display string for the amount in its currency.
         */
        display: string;
      }
    }

    export interface SignOnBonus {
      /**
       * Amount in the currency base unit, e.g. cents for USD.
       * @minimum 0
       */
      amount: number;
      currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface RelocationBonus {
      /**
       * Amount in the currency base unit, e.g. cents for USD.
       * @minimum 0
       */
      amount: number;
      currency: "USD" | "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "INR" | "JPY" | "MYR" | "NOK" | "NZD" | "CNY" | "PLN" | "RON" | "TRY" | "SEK" | "SGD" | "AED" | "ARS" | "BDT" | "BWP" | "CLP" | "COP" | "CRC" | "EGP" | "FJD" | "GEL" | "GHS" | "ILS" | "KES" | "KRW" | "LKR" | "MAD" | "MXN" | "NPR" | "PHP" | "PKR" | "THB" | "UAH" | "UGX" | "UYU" | "VND" | "ZAR" | "ZMW" | "TND" | "NGN" | "RSD" | "TWD" | "GTQ" | "HNL" | "DOP" | "SAR" | "XAF" | "PEN";
      /**
       * The server-formatted display string for the amount in its currency.
       */
      display: string;
    }

    export interface Stock {
      /**
       * a non-negative number
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
export declare namespace Offers {
  export {
    type Date as Date,
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
