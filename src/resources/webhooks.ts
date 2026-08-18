// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { Webhook } from 'standardwebhooks';

export class Webhooks extends APIResource {
  unwrap(
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

export interface TimeOffRequestCreatedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  event_type: 'time_off:request:created';
  payload: TimeOffRequestCreatedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace TimeOffRequestCreatedWebhookEvent {
  export interface Payload {
    id: string;
    timeOffPolicyId: string;
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
  event_type: 'time_off:request:reviewed';
  payload: TimeOffRequestReviewedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace TimeOffRequestReviewedWebhookEvent {
  export interface Payload {
    id: string;
    timeOffPolicyId: string;
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
  event_type: 'time_off:request:deleted';
  payload: TimeOffRequestDeletedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace TimeOffRequestDeletedWebhookEvent {
  export interface Payload {
    id: string;
    timeOffPolicyId: string;
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

export interface TimeOffBalanceAdjustedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  event_type: 'time_off:balance:adjusted';
  payload: TimeOffBalanceAdjustedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace TimeOffBalanceAdjustedWebhookEvent {
  export interface Payload {
    workerId: string;
    policyId: string;
    /**
     * Signed adjustment applied to the balance, in minutes. Omitted when no balance snapshot was captured.
     */
    adjustmentMinutes?:
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
      | null;
    /**
     * The date the adjustment takes effect. Omitted when no balance snapshot was captured.
     */
    effectiveDate?: string | null;
    previousBalance?: 'Infinity' | '-Infinity' | 'NaN';
    newBalance?: 'Infinity' | '-Infinity' | 'NaN';
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
  event_type: 'worker:created';
  payload: WorkerCreatedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace WorkerCreatedWebhookEvent {
  export interface Payload {
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    startDate: string;
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    email: string;
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Payload.Compensation | null;
  }

  export namespace Payload {
    export interface Department {
      id: string;
      name: string;
    }

    export interface Compensation {
      payRateId: string;
      /**
       * The period for the pay rate.
       */
      basis: 'yearly' | 'monthly' | 'weekly' | 'hourly';
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
       * The server-formatted pay rate, including its period.
       */
      display: string;
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
  event_type: 'worker:updated';
  payload: WorkerUpdatedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace WorkerUpdatedWebhookEvent {
  export interface Payload {
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    startDate: string;
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    email: string;
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Payload.Compensation | null;
  }

  export namespace Payload {
    export interface Department {
      id: string;
      name: string;
    }

    export interface Compensation {
      payRateId: string;
      /**
       * The period for the pay rate.
       */
      basis: 'yearly' | 'monthly' | 'weekly' | 'hourly';
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
       * The server-formatted pay rate, including its period.
       */
      display: string;
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
  event_type: 'worker:deleted';
  payload: WorkerDeletedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace WorkerDeletedWebhookEvent {
  export interface Payload {
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    startDate: string;
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    email: string;
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Payload.Compensation | null;
  }

  export namespace Payload {
    export interface Department {
      id: string;
      name: string;
    }

    export interface Compensation {
      payRateId: string;
      /**
       * The period for the pay rate.
       */
      basis: 'yearly' | 'monthly' | 'weekly' | 'hourly';
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
       * The server-formatted pay rate, including its period.
       */
      display: string;
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
  event_type: 'worker:invite_sent';
  payload: WorkerInviteSentWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace WorkerInviteSentWebhookEvent {
  export interface Payload {
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    startDate: string;
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    email: string;
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Payload.Compensation | null;
  }

  export namespace Payload {
    export interface Department {
      id: string;
      name: string;
    }

    export interface Compensation {
      payRateId: string;
      /**
       * The period for the pay rate.
       */
      basis: 'yearly' | 'monthly' | 'weekly' | 'hourly';
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
       * The server-formatted pay rate, including its period.
       */
      display: string;
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
  event_type: 'worker:invite_accepted';
  payload: WorkerInviteAcceptedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace WorkerInviteAcceptedWebhookEvent {
  export interface Payload {
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    startDate: string;
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    email: string;
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Payload.Compensation | null;
  }

  export namespace Payload {
    export interface Department {
      id: string;
      name: string;
    }

    export interface Compensation {
      payRateId: string;
      /**
       * The period for the pay rate.
       */
      basis: 'yearly' | 'monthly' | 'weekly' | 'hourly';
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
       * The server-formatted pay rate, including its period.
       */
      display: string;
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
  event_type: 'worker:onboarding_completed';
  payload: WorkerOnboardingCompletedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace WorkerOnboardingCompletedWebhookEvent {
  export interface Payload {
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    startDate: string;
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    email: string;
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Payload.Compensation | null;
  }

  export namespace Payload {
    export interface Department {
      id: string;
      name: string;
    }

    export interface Compensation {
      payRateId: string;
      /**
       * The period for the pay rate.
       */
      basis: 'yearly' | 'monthly' | 'weekly' | 'hourly';
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
       * The server-formatted pay rate, including its period.
       */
      display: string;
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
  event_type: 'worker:offboarding_started';
  payload: WorkerOffboardingStartedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace WorkerOffboardingStartedWebhookEvent {
  export interface Payload {
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    startDate: string;
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    email: string;
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Payload.Compensation | null;
  }

  export namespace Payload {
    export interface Department {
      id: string;
      name: string;
    }

    export interface Compensation {
      payRateId: string;
      /**
       * The period for the pay rate.
       */
      basis: 'yearly' | 'monthly' | 'weekly' | 'hourly';
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
       * The server-formatted pay rate, including its period.
       */
      display: string;
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
  event_type: 'worker:offboarded';
  payload: WorkerOffboardedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace WorkerOffboardedWebhookEvent {
  export interface Payload {
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    startDate: string;
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    email: string;
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Payload.Compensation | null;
  }

  export namespace Payload {
    export interface Department {
      id: string;
      name: string;
    }

    export interface Compensation {
      payRateId: string;
      /**
       * The period for the pay rate.
       */
      basis: 'yearly' | 'monthly' | 'weekly' | 'hourly';
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
       * The server-formatted pay rate, including its period.
       */
      display: string;
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
  event_type: 'worker:reactivated';
  payload: WorkerReactivatedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace WorkerReactivatedWebhookEvent {
  export interface Payload {
    id: string;
    position: string;
    type: 'employee' | 'contractor';
    status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive';
    startDate: string;
    endDate: string | null;
    isBusiness: boolean | null;
    businessName: string | null;
    firstName: string;
    lastName: string;
    email: string;
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Payload.Compensation | null;
  }

  export namespace Payload {
    export interface Department {
      id: string;
      name: string;
    }

    export interface Compensation {
      payRateId: string;
      /**
       * The period for the pay rate.
       */
      basis: 'yearly' | 'monthly' | 'weekly' | 'hourly';
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
       * The server-formatted pay rate, including its period.
       */
      display: string;
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
  event_type: 'offer:created';
  payload: OfferCreatedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace OfferCreatedWebhookEvent {
  export interface Payload {
    id: string;
    status: 'draft' | 'sent' | 'accepted' | 'void';
    workerType: 'employee' | 'us_contractor' | 'global_contractor';
    candidate: Payload.Candidate;
    position: Payload.Position;
    department: Payload.Department | null;
    workplace: Payload.Workplace | null;
    manager: Payload.Manager | null;
    /**
     * Display name of the person or company that sent the offer. Null for offers not yet sent.
     */
    sentBy: string | null;
    compensation: Payload.Compensation;
    /**
     * The candidate-facing offer portal URL. Null for offers that have not been sent.
     */
    offerUrl: string | null;
    expirationTime: string | null;
    lastViewedAt: string | null;
    createdAt: string;
  }

  export namespace Payload {
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
      signOnBonus:
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
      relocationBonus:
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
        variableRate:
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
      }

      export interface Stock {
        options: string;
        vestingScheduleMonths: string | null;
        cliffMonths: string | null;
      }
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
  event_type: 'offer:sent';
  payload: OfferSentWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace OfferSentWebhookEvent {
  export interface Payload {
    id: string;
    status: 'draft' | 'sent' | 'accepted' | 'void';
    workerType: 'employee' | 'us_contractor' | 'global_contractor';
    candidate: Payload.Candidate;
    position: Payload.Position;
    department: Payload.Department | null;
    workplace: Payload.Workplace | null;
    manager: Payload.Manager | null;
    /**
     * Display name of the person or company that sent the offer. Null for offers not yet sent.
     */
    sentBy: string | null;
    compensation: Payload.Compensation;
    /**
     * The candidate-facing offer portal URL. Null for offers that have not been sent.
     */
    offerUrl: string | null;
    expirationTime: string | null;
    lastViewedAt: string | null;
    createdAt: string;
  }

  export namespace Payload {
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
      signOnBonus:
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
      relocationBonus:
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
        variableRate:
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
      }

      export interface Stock {
        options: string;
        vestingScheduleMonths: string | null;
        cliffMonths: string | null;
      }
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
  event_type: 'offer:viewed';
  payload: OfferViewedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace OfferViewedWebhookEvent {
  export interface Payload {
    id: string;
    status: 'draft' | 'sent' | 'accepted' | 'void';
    workerType: 'employee' | 'us_contractor' | 'global_contractor';
    candidate: Payload.Candidate;
    position: Payload.Position;
    department: Payload.Department | null;
    workplace: Payload.Workplace | null;
    manager: Payload.Manager | null;
    /**
     * Display name of the person or company that sent the offer. Null for offers not yet sent.
     */
    sentBy: string | null;
    compensation: Payload.Compensation;
    /**
     * The candidate-facing offer portal URL. Null for offers that have not been sent.
     */
    offerUrl: string | null;
    expirationTime: string | null;
    lastViewedAt: string | null;
    createdAt: string;
  }

  export namespace Payload {
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
      signOnBonus:
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
      relocationBonus:
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
        variableRate:
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
      }

      export interface Stock {
        options: string;
        vestingScheduleMonths: string | null;
        cliffMonths: string | null;
      }
    }
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
  event_type: 'offer:accepted';
  payload: OfferAcceptedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace OfferAcceptedWebhookEvent {
  export interface Payload {
    id: string;
    status: 'draft' | 'sent' | 'accepted' | 'void';
    workerType: 'employee' | 'us_contractor' | 'global_contractor';
    candidate: Payload.Candidate;
    position: Payload.Position;
    department: Payload.Department | null;
    workplace: Payload.Workplace | null;
    manager: Payload.Manager | null;
    /**
     * Display name of the person or company that sent the offer. Null for offers not yet sent.
     */
    sentBy: string | null;
    compensation: Payload.Compensation;
    /**
     * The candidate-facing offer portal URL. Null for offers that have not been sent.
     */
    offerUrl: string | null;
    expirationTime: string | null;
    lastViewedAt: string | null;
    createdAt: string;
  }

  export namespace Payload {
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
      signOnBonus:
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
      relocationBonus:
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
        variableRate:
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
      }

      export interface Stock {
        options: string;
        vestingScheduleMonths: string | null;
        cliffMonths: string | null;
      }
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
  event_type: 'offer:voided';
  payload: OfferVoidedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace OfferVoidedWebhookEvent {
  export interface Payload {
    id: string;
    status: 'draft' | 'sent' | 'accepted' | 'void';
    workerType: 'employee' | 'us_contractor' | 'global_contractor';
    candidate: Payload.Candidate;
    position: Payload.Position;
    department: Payload.Department | null;
    workplace: Payload.Workplace | null;
    manager: Payload.Manager | null;
    /**
     * Display name of the person or company that sent the offer. Null for offers not yet sent.
     */
    sentBy: string | null;
    compensation: Payload.Compensation;
    /**
     * The candidate-facing offer portal URL. Null for offers that have not been sent.
     */
    offerUrl: string | null;
    expirationTime: string | null;
    lastViewedAt: string | null;
    createdAt: string;
  }

  export namespace Payload {
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
      signOnBonus:
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
      relocationBonus:
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
        variableRate:
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
      }

      export interface Stock {
        options: string;
        vestingScheduleMonths: string | null;
        cliffMonths: string | null;
      }
    }
  }
}

export type ParsedWebhookEvent =
  | TimeOffRequestCreatedWebhookEvent
  | TimeOffRequestReviewedWebhookEvent
  | TimeOffRequestDeletedWebhookEvent
  | TimeOffBalanceAdjustedWebhookEvent
  | WorkerCreatedWebhookEvent
  | WorkerUpdatedWebhookEvent
  | WorkerDeletedWebhookEvent
  | WorkerInviteSentWebhookEvent
  | WorkerInviteAcceptedWebhookEvent
  | WorkerOnboardingCompletedWebhookEvent
  | WorkerOffboardingStartedWebhookEvent
  | WorkerOffboardedWebhookEvent
  | WorkerReactivatedWebhookEvent
  | OfferCreatedWebhookEvent
  | OfferSentWebhookEvent
  | OfferViewedWebhookEvent
  | OfferAcceptedWebhookEvent
  | OfferVoidedWebhookEvent;

export declare namespace Webhooks {
  export {
    type TimeOffRequestCreatedWebhookEvent as TimeOffRequestCreatedWebhookEvent,
    type TimeOffRequestReviewedWebhookEvent as TimeOffRequestReviewedWebhookEvent,
    type TimeOffRequestDeletedWebhookEvent as TimeOffRequestDeletedWebhookEvent,
    type TimeOffBalanceAdjustedWebhookEvent as TimeOffBalanceAdjustedWebhookEvent,
    type WorkerCreatedWebhookEvent as WorkerCreatedWebhookEvent,
    type WorkerUpdatedWebhookEvent as WorkerUpdatedWebhookEvent,
    type WorkerDeletedWebhookEvent as WorkerDeletedWebhookEvent,
    type WorkerInviteSentWebhookEvent as WorkerInviteSentWebhookEvent,
    type WorkerInviteAcceptedWebhookEvent as WorkerInviteAcceptedWebhookEvent,
    type WorkerOnboardingCompletedWebhookEvent as WorkerOnboardingCompletedWebhookEvent,
    type WorkerOffboardingStartedWebhookEvent as WorkerOffboardingStartedWebhookEvent,
    type WorkerOffboardedWebhookEvent as WorkerOffboardedWebhookEvent,
    type WorkerReactivatedWebhookEvent as WorkerReactivatedWebhookEvent,
    type OfferCreatedWebhookEvent as OfferCreatedWebhookEvent,
    type OfferSentWebhookEvent as OfferSentWebhookEvent,
    type OfferViewedWebhookEvent as OfferViewedWebhookEvent,
    type OfferAcceptedWebhookEvent as OfferAcceptedWebhookEvent,
    type OfferVoidedWebhookEvent as OfferVoidedWebhookEvent,
    type ParsedWebhookEvent as ParsedWebhookEvent,
  };
}
