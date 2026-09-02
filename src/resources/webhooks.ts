// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import * as PublicMoneyAmountAPI from './offers';
import * as PublicWorkerCompensationAPI from './workers';
import { Webhook } from 'standardwebhooks';

export class Webhooks extends APIResource {
  parsed(
    body: string,
    { headers, key }: { headers: Record<string, string>; key?: string },
  ): ParsedWebhookEvent {
    if (headers !== undefined) {
      const keyStr: string | null = key === undefined ? this._client.webhookSecret : key;
      if (keyStr === null) throw new Error('Webhook key must not be null in order to unwrap');
      const wh = new Webhook(keyStr);
      wh.verify(body, headers);
    }
    return JSON.parse(body) as ParsedWebhookEvent;
  }
}

export interface OfferAcceptedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'offer.accepted';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: OfferAcceptedWebhookEvent.Data;
}

export namespace OfferAcceptedWebhookEvent {
  export interface Data {
    /**
     * The tag of the offer.
     * @pattern ^offr_
     */
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
    /**
     * The offer's job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Data.Level | null;
  }

  export namespace Data {
    export interface Candidate {
      firstName: string;
      lastName: string;
      /**
       * An email with a reasonably valid regex (based on RFC 5321 atext characters)
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
       * The unique public id of the department
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface Workplace {
      /**
       * Public workplace identifier
       * @pattern ^wkp_
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
      signOnBonus: PublicMoneyAmountAPI.PublicMoneyAmount | null;
      relocationBonus: PublicMoneyAmountAPI.PublicMoneyAmount | null;
      stock: Compensation.Stock | null;
    }

    export namespace Compensation {
      export interface BasePay {
        /**
         * A monetary amount with its currency and server-formatted display value.
         */
        amount: PublicMoneyAmountAPI.PublicMoneyAmount;
        basis: 'year' | 'month' | 'week' | 'hour' | 'variable';
        type: 'fixed' | 'pay_as_you_go' | null;
        variableRate: PublicMoneyAmountAPI.PublicMoneyAmount | null;
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

    export interface Level {
      /**
       * The unique public id of the job level
       * @pattern ^jlvl_
       */
      id: string;
      code: string;
      name: string;
      track: 'ic' | 'manager' | 'executive';
    }
  }
}

export interface OfferCreatedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'offer.created';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: OfferCreatedWebhookEvent.Data;
}

export namespace OfferCreatedWebhookEvent {
  export interface Data {
    /**
     * The tag of the offer.
     * @pattern ^offr_
     */
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
    /**
     * The offer's job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Data.Level | null;
  }

  export namespace Data {
    export interface Candidate {
      firstName: string;
      lastName: string;
      /**
       * An email with a reasonably valid regex (based on RFC 5321 atext characters)
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
       * The unique public id of the department
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface Workplace {
      /**
       * Public workplace identifier
       * @pattern ^wkp_
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
      signOnBonus: PublicMoneyAmountAPI.PublicMoneyAmount | null;
      relocationBonus: PublicMoneyAmountAPI.PublicMoneyAmount | null;
      stock: Compensation.Stock | null;
    }

    export namespace Compensation {
      export interface BasePay {
        /**
         * A monetary amount with its currency and server-formatted display value.
         */
        amount: PublicMoneyAmountAPI.PublicMoneyAmount;
        basis: 'year' | 'month' | 'week' | 'hour' | 'variable';
        type: 'fixed' | 'pay_as_you_go' | null;
        variableRate: PublicMoneyAmountAPI.PublicMoneyAmount | null;
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

    export interface Level {
      /**
       * The unique public id of the job level
       * @pattern ^jlvl_
       */
      id: string;
      code: string;
      name: string;
      track: 'ic' | 'manager' | 'executive';
    }
  }
}

export interface OfferSentWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'offer.sent';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: OfferSentWebhookEvent.Data;
}

export namespace OfferSentWebhookEvent {
  export interface Data {
    /**
     * The tag of the offer.
     * @pattern ^offr_
     */
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
    /**
     * The offer's job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Data.Level | null;
  }

  export namespace Data {
    export interface Candidate {
      firstName: string;
      lastName: string;
      /**
       * An email with a reasonably valid regex (based on RFC 5321 atext characters)
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
       * The unique public id of the department
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface Workplace {
      /**
       * Public workplace identifier
       * @pattern ^wkp_
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
      signOnBonus: PublicMoneyAmountAPI.PublicMoneyAmount | null;
      relocationBonus: PublicMoneyAmountAPI.PublicMoneyAmount | null;
      stock: Compensation.Stock | null;
    }

    export namespace Compensation {
      export interface BasePay {
        /**
         * A monetary amount with its currency and server-formatted display value.
         */
        amount: PublicMoneyAmountAPI.PublicMoneyAmount;
        basis: 'year' | 'month' | 'week' | 'hour' | 'variable';
        type: 'fixed' | 'pay_as_you_go' | null;
        variableRate: PublicMoneyAmountAPI.PublicMoneyAmount | null;
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

    export interface Level {
      /**
       * The unique public id of the job level
       * @pattern ^jlvl_
       */
      id: string;
      code: string;
      name: string;
      track: 'ic' | 'manager' | 'executive';
    }
  }
}

export interface OfferViewedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'offer.viewed';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: OfferViewedWebhookEvent.Data;
}

export namespace OfferViewedWebhookEvent {
  export interface Data {
    /**
     * The tag of the offer.
     * @pattern ^offr_
     */
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
    /**
     * The offer's job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Data.Level | null;
  }

  export namespace Data {
    export interface Candidate {
      firstName: string;
      lastName: string;
      /**
       * An email with a reasonably valid regex (based on RFC 5321 atext characters)
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
       * The unique public id of the department
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface Workplace {
      /**
       * Public workplace identifier
       * @pattern ^wkp_
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
      signOnBonus: PublicMoneyAmountAPI.PublicMoneyAmount | null;
      relocationBonus: PublicMoneyAmountAPI.PublicMoneyAmount | null;
      stock: Compensation.Stock | null;
    }

    export namespace Compensation {
      export interface BasePay {
        /**
         * A monetary amount with its currency and server-formatted display value.
         */
        amount: PublicMoneyAmountAPI.PublicMoneyAmount;
        basis: 'year' | 'month' | 'week' | 'hour' | 'variable';
        type: 'fixed' | 'pay_as_you_go' | null;
        variableRate: PublicMoneyAmountAPI.PublicMoneyAmount | null;
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

    export interface Level {
      /**
       * The unique public id of the job level
       * @pattern ^jlvl_
       */
      id: string;
      code: string;
      name: string;
      track: 'ic' | 'manager' | 'executive';
    }
  }
}

export interface OfferVoidedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'offer.voided';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: OfferVoidedWebhookEvent.Data;
}

export namespace OfferVoidedWebhookEvent {
  export interface Data {
    /**
     * The tag of the offer.
     * @pattern ^offr_
     */
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
    /**
     * The offer's job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Data.Level | null;
  }

  export namespace Data {
    export interface Candidate {
      firstName: string;
      lastName: string;
      /**
       * An email with a reasonably valid regex (based on RFC 5321 atext characters)
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
       * The unique public id of the department
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface Workplace {
      /**
       * Public workplace identifier
       * @pattern ^wkp_
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
      signOnBonus: PublicMoneyAmountAPI.PublicMoneyAmount | null;
      relocationBonus: PublicMoneyAmountAPI.PublicMoneyAmount | null;
      stock: Compensation.Stock | null;
    }

    export namespace Compensation {
      export interface BasePay {
        /**
         * A monetary amount with its currency and server-formatted display value.
         */
        amount: PublicMoneyAmountAPI.PublicMoneyAmount;
        basis: 'year' | 'month' | 'week' | 'hour' | 'variable';
        type: 'fixed' | 'pay_as_you_go' | null;
        variableRate: PublicMoneyAmountAPI.PublicMoneyAmount | null;
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

    export interface Level {
      /**
       * The unique public id of the job level
       * @pattern ^jlvl_
       */
      id: string;
      code: string;
      name: string;
      track: 'ic' | 'manager' | 'executive';
    }
  }
}

export interface TimeOffBalanceAdjustedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'time_off.balance.adjusted';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: Record<string, unknown>;
}

export interface TimeOffRequestCreatedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'time_off.request.created';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: TimeOffRequestCreatedWebhookEvent.Data;
}

export namespace TimeOffRequestCreatedWebhookEvent {
  export interface Data {
    id: string;
    /**
     * @pattern ^top_
     */
    timeOffPolicyId: string;
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    workerId: string;
    status: 'pending' | 'approved' | 'denied';
    startAt: string;
    startRangeType: 'date' | 'datetime';
    endAt: string;
    endRangeType: 'date' | 'datetime';
    reason: string | null;
    createdAt: string;
    requestedMinutes: number | 'Infinity' | '-Infinity' | 'NaN';
    /**
     * The time zone that the worker is requesting time off in.
     */
    timeZone: string | null;
  }
}

export interface TimeOffRequestDeletedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'time_off.request.deleted';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: TimeOffRequestDeletedWebhookEvent.Data;
}

export namespace TimeOffRequestDeletedWebhookEvent {
  export interface Data {
    id: string;
    /**
     * @pattern ^top_
     */
    timeOffPolicyId: string;
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    workerId: string;
    status: 'pending' | 'approved' | 'denied';
    startAt: string;
    startRangeType: 'date' | 'datetime';
    endAt: string;
    endRangeType: 'date' | 'datetime';
    reason: string | null;
    createdAt: string;
    requestedMinutes: number | 'Infinity' | '-Infinity' | 'NaN';
    /**
     * The time zone that the worker is requesting time off in.
     */
    timeZone: string | null;
  }
}

export interface TimeOffRequestReviewedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'time_off.request.reviewed';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: TimeOffRequestReviewedWebhookEvent.Data;
}

export namespace TimeOffRequestReviewedWebhookEvent {
  export interface Data {
    id: string;
    /**
     * @pattern ^top_
     */
    timeOffPolicyId: string;
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    workerId: string;
    status: 'pending' | 'approved' | 'denied';
    startAt: string;
    startRangeType: 'date' | 'datetime';
    endAt: string;
    endRangeType: 'date' | 'datetime';
    reason: string | null;
    createdAt: string;
    requestedMinutes: number | 'Infinity' | '-Infinity' | 'NaN';
    /**
     * The time zone that the worker is requesting time off in.
     */
    timeZone: string | null;
  }
}

export interface WorkerCreatedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'worker.created';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: WorkerCreatedWebhookEvent.Data;
}

export namespace WorkerCreatedWebhookEvent {
  export interface Data {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    startDate: string;
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    /**
     * An email with a reasonably valid regex (based on RFC 5321 atext characters)
     * @format email
     */
    email: string;
    /**
     * @format email
     */
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
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: PublicWorkerCompensationAPI.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Data.Level | null;
    customFields?: Array<PublicWorkerCompensationAPI.PublicWorkerCustomField> | null;
  }

  export namespace Data {
    export interface Department {
      /**
       * The unique public id of the department
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface Level {
      /**
       * The unique public id of the job level
       * @pattern ^jlvl_
       */
      id: string;
      code: string;
      name: string;
      track: 'ic' | 'manager' | 'executive';
    }
  }
}

export interface WorkerDeletedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'worker.deleted';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: WorkerDeletedWebhookEvent.Data;
}

export namespace WorkerDeletedWebhookEvent {
  export interface Data {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    startDate: string;
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    /**
     * An email with a reasonably valid regex (based on RFC 5321 atext characters)
     * @format email
     */
    email: string;
    /**
     * @format email
     */
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
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: PublicWorkerCompensationAPI.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Data.Level | null;
    customFields?: Array<PublicWorkerCompensationAPI.PublicWorkerCustomField> | null;
  }

  export namespace Data {
    export interface Department {
      /**
       * The unique public id of the department
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface Level {
      /**
       * The unique public id of the job level
       * @pattern ^jlvl_
       */
      id: string;
      code: string;
      name: string;
      track: 'ic' | 'manager' | 'executive';
    }
  }
}

export interface WorkerInviteAcceptedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'worker.invite_accepted';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: WorkerInviteAcceptedWebhookEvent.Data;
}

export namespace WorkerInviteAcceptedWebhookEvent {
  export interface Data {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    startDate: string;
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    /**
     * An email with a reasonably valid regex (based on RFC 5321 atext characters)
     * @format email
     */
    email: string;
    /**
     * @format email
     */
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
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: PublicWorkerCompensationAPI.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Data.Level | null;
    customFields?: Array<PublicWorkerCompensationAPI.PublicWorkerCustomField> | null;
  }

  export namespace Data {
    export interface Department {
      /**
       * The unique public id of the department
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface Level {
      /**
       * The unique public id of the job level
       * @pattern ^jlvl_
       */
      id: string;
      code: string;
      name: string;
      track: 'ic' | 'manager' | 'executive';
    }
  }
}

export interface WorkerInviteSentWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'worker.invite_sent';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: WorkerInviteSentWebhookEvent.Data;
}

export namespace WorkerInviteSentWebhookEvent {
  export interface Data {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    startDate: string;
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    /**
     * An email with a reasonably valid regex (based on RFC 5321 atext characters)
     * @format email
     */
    email: string;
    /**
     * @format email
     */
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
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: PublicWorkerCompensationAPI.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Data.Level | null;
    customFields?: Array<PublicWorkerCompensationAPI.PublicWorkerCustomField> | null;
  }

  export namespace Data {
    export interface Department {
      /**
       * The unique public id of the department
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface Level {
      /**
       * The unique public id of the job level
       * @pattern ^jlvl_
       */
      id: string;
      code: string;
      name: string;
      track: 'ic' | 'manager' | 'executive';
    }
  }
}

export interface WorkerOffboardedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'worker.offboarded';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: WorkerOffboardedWebhookEvent.Data;
}

export namespace WorkerOffboardedWebhookEvent {
  export interface Data {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    startDate: string;
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    /**
     * An email with a reasonably valid regex (based on RFC 5321 atext characters)
     * @format email
     */
    email: string;
    /**
     * @format email
     */
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
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: PublicWorkerCompensationAPI.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Data.Level | null;
    customFields?: Array<PublicWorkerCompensationAPI.PublicWorkerCustomField> | null;
  }

  export namespace Data {
    export interface Department {
      /**
       * The unique public id of the department
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface Level {
      /**
       * The unique public id of the job level
       * @pattern ^jlvl_
       */
      id: string;
      code: string;
      name: string;
      track: 'ic' | 'manager' | 'executive';
    }
  }
}

export interface WorkerOffboardingStartedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'worker.offboarding_started';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: WorkerOffboardingStartedWebhookEvent.Data;
}

export namespace WorkerOffboardingStartedWebhookEvent {
  export interface Data {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    startDate: string;
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    /**
     * An email with a reasonably valid regex (based on RFC 5321 atext characters)
     * @format email
     */
    email: string;
    /**
     * @format email
     */
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
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: PublicWorkerCompensationAPI.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Data.Level | null;
    customFields?: Array<PublicWorkerCompensationAPI.PublicWorkerCustomField> | null;
  }

  export namespace Data {
    export interface Department {
      /**
       * The unique public id of the department
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface Level {
      /**
       * The unique public id of the job level
       * @pattern ^jlvl_
       */
      id: string;
      code: string;
      name: string;
      track: 'ic' | 'manager' | 'executive';
    }
  }
}

export interface WorkerOnboardingCompletedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'worker.onboarding_completed';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: WorkerOnboardingCompletedWebhookEvent.Data;
}

export namespace WorkerOnboardingCompletedWebhookEvent {
  export interface Data {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    startDate: string;
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    /**
     * An email with a reasonably valid regex (based on RFC 5321 atext characters)
     * @format email
     */
    email: string;
    /**
     * @format email
     */
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
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: PublicWorkerCompensationAPI.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Data.Level | null;
    customFields?: Array<PublicWorkerCompensationAPI.PublicWorkerCustomField> | null;
  }

  export namespace Data {
    export interface Department {
      /**
       * The unique public id of the department
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface Level {
      /**
       * The unique public id of the job level
       * @pattern ^jlvl_
       */
      id: string;
      code: string;
      name: string;
      track: 'ic' | 'manager' | 'executive';
    }
  }
}

export interface WorkerReactivatedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'worker.reactivated';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: WorkerReactivatedWebhookEvent.Data;
}

export namespace WorkerReactivatedWebhookEvent {
  export interface Data {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    startDate: string;
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    /**
     * An email with a reasonably valid regex (based on RFC 5321 atext characters)
     * @format email
     */
    email: string;
    /**
     * @format email
     */
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
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: PublicWorkerCompensationAPI.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Data.Level | null;
    customFields?: Array<PublicWorkerCompensationAPI.PublicWorkerCustomField> | null;
  }

  export namespace Data {
    export interface Department {
      /**
       * The unique public id of the department
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface Level {
      /**
       * The unique public id of the job level
       * @pattern ^jlvl_
       */
      id: string;
      code: string;
      name: string;
      track: 'ic' | 'manager' | 'executive';
    }
  }
}

export interface WorkerUpdatedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  type: 'worker.updated';
  /**
   * ISO 8601 timestamp of when the event occurred. Unchanged across retries.
   */
  timestamp: string;
  data: WorkerUpdatedWebhookEvent.Data;
}

export namespace WorkerUpdatedWebhookEvent {
  export interface Data {
    /**
     * The id of the worker.
     * @pattern ^wrk_
     */
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    startDate: string;
    /**
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    /**
     * An email with a reasonably valid regex (based on RFC 5321 atext characters)
     * @format email
     */
    email: string;
    /**
     * @format email
     */
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
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: PublicWorkerCompensationAPI.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Data.Level | null;
    customFields?: Array<PublicWorkerCompensationAPI.PublicWorkerCustomField> | null;
  }

  export namespace Data {
    export interface Department {
      /**
       * The unique public id of the department
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface Level {
      /**
       * The unique public id of the job level
       * @pattern ^jlvl_
       */
      id: string;
      code: string;
      name: string;
      track: 'ic' | 'manager' | 'executive';
    }
  }
}

export type ParsedWebhookEvent =
  | OfferAcceptedWebhookEvent
  | OfferCreatedWebhookEvent
  | OfferSentWebhookEvent
  | OfferViewedWebhookEvent
  | OfferVoidedWebhookEvent
  | TimeOffBalanceAdjustedWebhookEvent
  | TimeOffRequestCreatedWebhookEvent
  | TimeOffRequestDeletedWebhookEvent
  | TimeOffRequestReviewedWebhookEvent
  | WorkerCreatedWebhookEvent
  | WorkerDeletedWebhookEvent
  | WorkerInviteAcceptedWebhookEvent
  | WorkerInviteSentWebhookEvent
  | WorkerOffboardedWebhookEvent
  | WorkerOffboardingStartedWebhookEvent
  | WorkerOnboardingCompletedWebhookEvent
  | WorkerReactivatedWebhookEvent
  | WorkerUpdatedWebhookEvent;

export declare namespace Webhooks {
  export {
    type OfferAcceptedWebhookEvent as OfferAcceptedWebhookEvent,
    type OfferCreatedWebhookEvent as OfferCreatedWebhookEvent,
    type OfferSentWebhookEvent as OfferSentWebhookEvent,
    type OfferViewedWebhookEvent as OfferViewedWebhookEvent,
    type OfferVoidedWebhookEvent as OfferVoidedWebhookEvent,
    type TimeOffBalanceAdjustedWebhookEvent as TimeOffBalanceAdjustedWebhookEvent,
    type TimeOffRequestCreatedWebhookEvent as TimeOffRequestCreatedWebhookEvent,
    type TimeOffRequestDeletedWebhookEvent as TimeOffRequestDeletedWebhookEvent,
    type TimeOffRequestReviewedWebhookEvent as TimeOffRequestReviewedWebhookEvent,
    type WorkerCreatedWebhookEvent as WorkerCreatedWebhookEvent,
    type WorkerDeletedWebhookEvent as WorkerDeletedWebhookEvent,
    type WorkerInviteAcceptedWebhookEvent as WorkerInviteAcceptedWebhookEvent,
    type WorkerInviteSentWebhookEvent as WorkerInviteSentWebhookEvent,
    type WorkerOffboardedWebhookEvent as WorkerOffboardedWebhookEvent,
    type WorkerOffboardingStartedWebhookEvent as WorkerOffboardingStartedWebhookEvent,
    type WorkerOnboardingCompletedWebhookEvent as WorkerOnboardingCompletedWebhookEvent,
    type WorkerReactivatedWebhookEvent as WorkerReactivatedWebhookEvent,
    type WorkerUpdatedWebhookEvent as WorkerUpdatedWebhookEvent,
    type ParsedWebhookEvent as ParsedWebhookEvent,
  };
}
