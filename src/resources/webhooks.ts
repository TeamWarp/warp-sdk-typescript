// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import * as Shared from './shared';
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

export interface TimeOffBalanceAdjustedWebhookEvent {
  /**
   * Unique event identifier (format: `<objectTag>:<uuid>`). Stable across retries.
   */
  id: string;
  /**
   * The event type.
   */
  event_type: 'time_off:balance:adjusted';
  payload: Record<string, unknown>;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Shared.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Payload.Level | null;
    customFields?: Array<
      | Payload.PublicTextWorkerCustomField
      | Payload.PublicNumberWorkerCustomField
      | Payload.PublicDateWorkerCustomField
      | Payload.PublicBooleanWorkerCustomField
      | Payload.PublicCurrencyWorkerCustomField
      | Payload.PublicPercentageWorkerCustomField
      | Payload.PublicSelectWorkerCustomField
      | Payload.PublicMultiSelectWorkerCustomField
    > | null;
  }

  export namespace Payload {
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

    export interface PublicTextWorkerCustomField {
      type: 'text';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s text; null when unset or when the field is redacted for this API key.
       */
      value: string | null;
    }

    export interface PublicNumberWorkerCustomField {
      type: 'number';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s number; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicDateWorkerCustomField {
      type: 'date';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s date; null when unset or when the field is redacted for this API key.
       * @pattern ^\d{4}-\d{2}-\d{2}$
       */
      value: string | null;
    }

    export interface PublicBooleanWorkerCustomField {
      type: 'boolean';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s answer; null when unset or when the field is redacted for this API key.
       */
      value: boolean | null;
    }

    export interface PublicCurrencyWorkerCustomField {
      type: 'currency';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The amount in integer base units of currencyCode (e.g. cents); null when unset or when the field is redacted for this API key.
       */
      amount: number | null;
      /**
       * The amount’s currency; null when unset or when the field is redacted for this API key.
       */
      currencyCode:
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
    }

    export interface PublicPercentageWorkerCustomField {
      type: 'percentage';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s percentage; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicSelectWorkerCustomField {
      type: 'select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected option; null when unset or when the field is redacted for this API key.
       */
      option: PublicSelectWorkerCustomField.Option | null;
    }

    export namespace PublicSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
    }

    export interface PublicMultiSelectWorkerCustomField {
      type: 'multi_select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected options; null when unset or when the field is redacted for this API key.
       */
      options: Array<PublicMultiSelectWorkerCustomField.Option> | null;
    }

    export namespace PublicMultiSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Shared.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Payload.Level | null;
    customFields?: Array<
      | Payload.PublicTextWorkerCustomField
      | Payload.PublicNumberWorkerCustomField
      | Payload.PublicDateWorkerCustomField
      | Payload.PublicBooleanWorkerCustomField
      | Payload.PublicCurrencyWorkerCustomField
      | Payload.PublicPercentageWorkerCustomField
      | Payload.PublicSelectWorkerCustomField
      | Payload.PublicMultiSelectWorkerCustomField
    > | null;
  }

  export namespace Payload {
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

    export interface PublicTextWorkerCustomField {
      type: 'text';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s text; null when unset or when the field is redacted for this API key.
       */
      value: string | null;
    }

    export interface PublicNumberWorkerCustomField {
      type: 'number';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s number; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicDateWorkerCustomField {
      type: 'date';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s date; null when unset or when the field is redacted for this API key.
       * @pattern ^\d{4}-\d{2}-\d{2}$
       */
      value: string | null;
    }

    export interface PublicBooleanWorkerCustomField {
      type: 'boolean';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s answer; null when unset or when the field is redacted for this API key.
       */
      value: boolean | null;
    }

    export interface PublicCurrencyWorkerCustomField {
      type: 'currency';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The amount in integer base units of currencyCode (e.g. cents); null when unset or when the field is redacted for this API key.
       */
      amount: number | null;
      /**
       * The amount’s currency; null when unset or when the field is redacted for this API key.
       */
      currencyCode:
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
    }

    export interface PublicPercentageWorkerCustomField {
      type: 'percentage';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s percentage; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicSelectWorkerCustomField {
      type: 'select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected option; null when unset or when the field is redacted for this API key.
       */
      option: PublicSelectWorkerCustomField.Option | null;
    }

    export namespace PublicSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
    }

    export interface PublicMultiSelectWorkerCustomField {
      type: 'multi_select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected options; null when unset or when the field is redacted for this API key.
       */
      options: Array<PublicMultiSelectWorkerCustomField.Option> | null;
    }

    export namespace PublicMultiSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Shared.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Payload.Level | null;
    customFields?: Array<
      | Payload.PublicTextWorkerCustomField
      | Payload.PublicNumberWorkerCustomField
      | Payload.PublicDateWorkerCustomField
      | Payload.PublicBooleanWorkerCustomField
      | Payload.PublicCurrencyWorkerCustomField
      | Payload.PublicPercentageWorkerCustomField
      | Payload.PublicSelectWorkerCustomField
      | Payload.PublicMultiSelectWorkerCustomField
    > | null;
  }

  export namespace Payload {
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

    export interface PublicTextWorkerCustomField {
      type: 'text';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s text; null when unset or when the field is redacted for this API key.
       */
      value: string | null;
    }

    export interface PublicNumberWorkerCustomField {
      type: 'number';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s number; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicDateWorkerCustomField {
      type: 'date';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s date; null when unset or when the field is redacted for this API key.
       * @pattern ^\d{4}-\d{2}-\d{2}$
       */
      value: string | null;
    }

    export interface PublicBooleanWorkerCustomField {
      type: 'boolean';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s answer; null when unset or when the field is redacted for this API key.
       */
      value: boolean | null;
    }

    export interface PublicCurrencyWorkerCustomField {
      type: 'currency';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The amount in integer base units of currencyCode (e.g. cents); null when unset or when the field is redacted for this API key.
       */
      amount: number | null;
      /**
       * The amount’s currency; null when unset or when the field is redacted for this API key.
       */
      currencyCode:
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
    }

    export interface PublicPercentageWorkerCustomField {
      type: 'percentage';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s percentage; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicSelectWorkerCustomField {
      type: 'select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected option; null when unset or when the field is redacted for this API key.
       */
      option: PublicSelectWorkerCustomField.Option | null;
    }

    export namespace PublicSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
    }

    export interface PublicMultiSelectWorkerCustomField {
      type: 'multi_select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected options; null when unset or when the field is redacted for this API key.
       */
      options: Array<PublicMultiSelectWorkerCustomField.Option> | null;
    }

    export namespace PublicMultiSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Shared.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Payload.Level | null;
    customFields?: Array<
      | Payload.PublicTextWorkerCustomField
      | Payload.PublicNumberWorkerCustomField
      | Payload.PublicDateWorkerCustomField
      | Payload.PublicBooleanWorkerCustomField
      | Payload.PublicCurrencyWorkerCustomField
      | Payload.PublicPercentageWorkerCustomField
      | Payload.PublicSelectWorkerCustomField
      | Payload.PublicMultiSelectWorkerCustomField
    > | null;
  }

  export namespace Payload {
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

    export interface PublicTextWorkerCustomField {
      type: 'text';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s text; null when unset or when the field is redacted for this API key.
       */
      value: string | null;
    }

    export interface PublicNumberWorkerCustomField {
      type: 'number';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s number; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicDateWorkerCustomField {
      type: 'date';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s date; null when unset or when the field is redacted for this API key.
       * @pattern ^\d{4}-\d{2}-\d{2}$
       */
      value: string | null;
    }

    export interface PublicBooleanWorkerCustomField {
      type: 'boolean';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s answer; null when unset or when the field is redacted for this API key.
       */
      value: boolean | null;
    }

    export interface PublicCurrencyWorkerCustomField {
      type: 'currency';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The amount in integer base units of currencyCode (e.g. cents); null when unset or when the field is redacted for this API key.
       */
      amount: number | null;
      /**
       * The amount’s currency; null when unset or when the field is redacted for this API key.
       */
      currencyCode:
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
    }

    export interface PublicPercentageWorkerCustomField {
      type: 'percentage';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s percentage; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicSelectWorkerCustomField {
      type: 'select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected option; null when unset or when the field is redacted for this API key.
       */
      option: PublicSelectWorkerCustomField.Option | null;
    }

    export namespace PublicSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
    }

    export interface PublicMultiSelectWorkerCustomField {
      type: 'multi_select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected options; null when unset or when the field is redacted for this API key.
       */
      options: Array<PublicMultiSelectWorkerCustomField.Option> | null;
    }

    export namespace PublicMultiSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Shared.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Payload.Level | null;
    customFields?: Array<
      | Payload.PublicTextWorkerCustomField
      | Payload.PublicNumberWorkerCustomField
      | Payload.PublicDateWorkerCustomField
      | Payload.PublicBooleanWorkerCustomField
      | Payload.PublicCurrencyWorkerCustomField
      | Payload.PublicPercentageWorkerCustomField
      | Payload.PublicSelectWorkerCustomField
      | Payload.PublicMultiSelectWorkerCustomField
    > | null;
  }

  export namespace Payload {
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

    export interface PublicTextWorkerCustomField {
      type: 'text';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s text; null when unset or when the field is redacted for this API key.
       */
      value: string | null;
    }

    export interface PublicNumberWorkerCustomField {
      type: 'number';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s number; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicDateWorkerCustomField {
      type: 'date';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s date; null when unset or when the field is redacted for this API key.
       * @pattern ^\d{4}-\d{2}-\d{2}$
       */
      value: string | null;
    }

    export interface PublicBooleanWorkerCustomField {
      type: 'boolean';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s answer; null when unset or when the field is redacted for this API key.
       */
      value: boolean | null;
    }

    export interface PublicCurrencyWorkerCustomField {
      type: 'currency';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The amount in integer base units of currencyCode (e.g. cents); null when unset or when the field is redacted for this API key.
       */
      amount: number | null;
      /**
       * The amount’s currency; null when unset or when the field is redacted for this API key.
       */
      currencyCode:
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
    }

    export interface PublicPercentageWorkerCustomField {
      type: 'percentage';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s percentage; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicSelectWorkerCustomField {
      type: 'select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected option; null when unset or when the field is redacted for this API key.
       */
      option: PublicSelectWorkerCustomField.Option | null;
    }

    export namespace PublicSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
    }

    export interface PublicMultiSelectWorkerCustomField {
      type: 'multi_select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected options; null when unset or when the field is redacted for this API key.
       */
      options: Array<PublicMultiSelectWorkerCustomField.Option> | null;
    }

    export namespace PublicMultiSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Shared.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Payload.Level | null;
    customFields?: Array<
      | Payload.PublicTextWorkerCustomField
      | Payload.PublicNumberWorkerCustomField
      | Payload.PublicDateWorkerCustomField
      | Payload.PublicBooleanWorkerCustomField
      | Payload.PublicCurrencyWorkerCustomField
      | Payload.PublicPercentageWorkerCustomField
      | Payload.PublicSelectWorkerCustomField
      | Payload.PublicMultiSelectWorkerCustomField
    > | null;
  }

  export namespace Payload {
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

    export interface PublicTextWorkerCustomField {
      type: 'text';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s text; null when unset or when the field is redacted for this API key.
       */
      value: string | null;
    }

    export interface PublicNumberWorkerCustomField {
      type: 'number';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s number; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicDateWorkerCustomField {
      type: 'date';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s date; null when unset or when the field is redacted for this API key.
       * @pattern ^\d{4}-\d{2}-\d{2}$
       */
      value: string | null;
    }

    export interface PublicBooleanWorkerCustomField {
      type: 'boolean';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s answer; null when unset or when the field is redacted for this API key.
       */
      value: boolean | null;
    }

    export interface PublicCurrencyWorkerCustomField {
      type: 'currency';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The amount in integer base units of currencyCode (e.g. cents); null when unset or when the field is redacted for this API key.
       */
      amount: number | null;
      /**
       * The amount’s currency; null when unset or when the field is redacted for this API key.
       */
      currencyCode:
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
    }

    export interface PublicPercentageWorkerCustomField {
      type: 'percentage';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s percentage; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicSelectWorkerCustomField {
      type: 'select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected option; null when unset or when the field is redacted for this API key.
       */
      option: PublicSelectWorkerCustomField.Option | null;
    }

    export namespace PublicSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
    }

    export interface PublicMultiSelectWorkerCustomField {
      type: 'multi_select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected options; null when unset or when the field is redacted for this API key.
       */
      options: Array<PublicMultiSelectWorkerCustomField.Option> | null;
    }

    export namespace PublicMultiSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Shared.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Payload.Level | null;
    customFields?: Array<
      | Payload.PublicTextWorkerCustomField
      | Payload.PublicNumberWorkerCustomField
      | Payload.PublicDateWorkerCustomField
      | Payload.PublicBooleanWorkerCustomField
      | Payload.PublicCurrencyWorkerCustomField
      | Payload.PublicPercentageWorkerCustomField
      | Payload.PublicSelectWorkerCustomField
      | Payload.PublicMultiSelectWorkerCustomField
    > | null;
  }

  export namespace Payload {
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

    export interface PublicTextWorkerCustomField {
      type: 'text';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s text; null when unset or when the field is redacted for this API key.
       */
      value: string | null;
    }

    export interface PublicNumberWorkerCustomField {
      type: 'number';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s number; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicDateWorkerCustomField {
      type: 'date';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s date; null when unset or when the field is redacted for this API key.
       * @pattern ^\d{4}-\d{2}-\d{2}$
       */
      value: string | null;
    }

    export interface PublicBooleanWorkerCustomField {
      type: 'boolean';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s answer; null when unset or when the field is redacted for this API key.
       */
      value: boolean | null;
    }

    export interface PublicCurrencyWorkerCustomField {
      type: 'currency';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The amount in integer base units of currencyCode (e.g. cents); null when unset or when the field is redacted for this API key.
       */
      amount: number | null;
      /**
       * The amount’s currency; null when unset or when the field is redacted for this API key.
       */
      currencyCode:
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
    }

    export interface PublicPercentageWorkerCustomField {
      type: 'percentage';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s percentage; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicSelectWorkerCustomField {
      type: 'select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected option; null when unset or when the field is redacted for this API key.
       */
      option: PublicSelectWorkerCustomField.Option | null;
    }

    export namespace PublicSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
    }

    export interface PublicMultiSelectWorkerCustomField {
      type: 'multi_select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected options; null when unset or when the field is redacted for this API key.
       */
      options: Array<PublicMultiSelectWorkerCustomField.Option> | null;
    }

    export namespace PublicMultiSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Shared.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Payload.Level | null;
    customFields?: Array<
      | Payload.PublicTextWorkerCustomField
      | Payload.PublicNumberWorkerCustomField
      | Payload.PublicDateWorkerCustomField
      | Payload.PublicBooleanWorkerCustomField
      | Payload.PublicCurrencyWorkerCustomField
      | Payload.PublicPercentageWorkerCustomField
      | Payload.PublicSelectWorkerCustomField
      | Payload.PublicMultiSelectWorkerCustomField
    > | null;
  }

  export namespace Payload {
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

    export interface PublicTextWorkerCustomField {
      type: 'text';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s text; null when unset or when the field is redacted for this API key.
       */
      value: string | null;
    }

    export interface PublicNumberWorkerCustomField {
      type: 'number';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s number; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicDateWorkerCustomField {
      type: 'date';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s date; null when unset or when the field is redacted for this API key.
       * @pattern ^\d{4}-\d{2}-\d{2}$
       */
      value: string | null;
    }

    export interface PublicBooleanWorkerCustomField {
      type: 'boolean';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s answer; null when unset or when the field is redacted for this API key.
       */
      value: boolean | null;
    }

    export interface PublicCurrencyWorkerCustomField {
      type: 'currency';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The amount in integer base units of currencyCode (e.g. cents); null when unset or when the field is redacted for this API key.
       */
      amount: number | null;
      /**
       * The amount’s currency; null when unset or when the field is redacted for this API key.
       */
      currencyCode:
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
    }

    export interface PublicPercentageWorkerCustomField {
      type: 'percentage';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s percentage; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicSelectWorkerCustomField {
      type: 'select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected option; null when unset or when the field is redacted for this API key.
       */
      option: PublicSelectWorkerCustomField.Option | null;
    }

    export namespace PublicSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
    }

    export interface PublicMultiSelectWorkerCustomField {
      type: 'multi_select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected options; null when unset or when the field is redacted for this API key.
       */
      options: Array<PublicMultiSelectWorkerCustomField.Option> | null;
    }

    export namespace PublicMultiSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
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
    department: Payload.Department | null;
    /**
     * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
     */
    compensation: Shared.PublicWorkerCompensation | null;
    /**
     * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Payload.Level | null;
    customFields?: Array<
      | Payload.PublicTextWorkerCustomField
      | Payload.PublicNumberWorkerCustomField
      | Payload.PublicDateWorkerCustomField
      | Payload.PublicBooleanWorkerCustomField
      | Payload.PublicCurrencyWorkerCustomField
      | Payload.PublicPercentageWorkerCustomField
      | Payload.PublicSelectWorkerCustomField
      | Payload.PublicMultiSelectWorkerCustomField
    > | null;
  }

  export namespace Payload {
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

    export interface PublicTextWorkerCustomField {
      type: 'text';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s text; null when unset or when the field is redacted for this API key.
       */
      value: string | null;
    }

    export interface PublicNumberWorkerCustomField {
      type: 'number';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s number; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicDateWorkerCustomField {
      type: 'date';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s date; null when unset or when the field is redacted for this API key.
       * @pattern ^\d{4}-\d{2}-\d{2}$
       */
      value: string | null;
    }

    export interface PublicBooleanWorkerCustomField {
      type: 'boolean';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s answer; null when unset or when the field is redacted for this API key.
       */
      value: boolean | null;
    }

    export interface PublicCurrencyWorkerCustomField {
      type: 'currency';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The amount in integer base units of currencyCode (e.g. cents); null when unset or when the field is redacted for this API key.
       */
      amount: number | null;
      /**
       * The amount’s currency; null when unset or when the field is redacted for this API key.
       */
      currencyCode:
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
    }

    export interface PublicPercentageWorkerCustomField {
      type: 'percentage';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The worker’s percentage; null when unset or when the field is redacted for this API key.
       */
      value: number | 'Infinity' | '-Infinity' | 'NaN' | null;
    }

    export interface PublicSelectWorkerCustomField {
      type: 'select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected option; null when unset or when the field is redacted for this API key.
       */
      option: PublicSelectWorkerCustomField.Option | null;
    }

    export namespace PublicSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
    }

    export interface PublicMultiSelectWorkerCustomField {
      type: 'multi_select';
      /**
       * The tag of a company custom worker field.
       * @pattern ^cf_
       */
      id: string;
      name: string;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value fields are withheld (null), not absent — null does not imply the worker has no value.
       */
      redacted: boolean;
      /**
       * The value rendered as the Warp dashboard displays it; null when unset or redacted.
       */
      display: string | null;
      /**
       * The selected options; null when unset or when the field is redacted for this API key.
       */
      options: Array<PublicMultiSelectWorkerCustomField.Option> | null;
    }

    export namespace PublicMultiSelectWorkerCustomField {
      export interface Option {
        /**
         * The tag of a company custom worker field option.
         * @pattern ^cfo_
         */
        id: string;
        label: string;
        value: string;
        sortOrder: number | 'Infinity' | '-Infinity' | 'NaN';
        status: 'active' | 'archived';
        createdAt: string;
      }
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
    /**
     * The tag of the offer.
     * @pattern ^offr_
     */
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
    /**
     * The offer's job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Payload.Level | null;
  }

  export namespace Payload {
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
  event_type: 'offer:sent';
  payload: OfferSentWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace OfferSentWebhookEvent {
  export interface Payload {
    /**
     * The tag of the offer.
     * @pattern ^offr_
     */
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
    /**
     * The offer's job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Payload.Level | null;
  }

  export namespace Payload {
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
  event_type: 'offer:viewed';
  payload: OfferViewedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace OfferViewedWebhookEvent {
  export interface Payload {
    /**
     * The tag of the offer.
     * @pattern ^offr_
     */
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
    /**
     * The offer's job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Payload.Level | null;
  }

  export namespace Payload {
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
    /**
     * The tag of the offer.
     * @pattern ^offr_
     */
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
    /**
     * The offer's job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Payload.Level | null;
  }

  export namespace Payload {
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
  event_type: 'offer:voided';
  payload: OfferVoidedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace OfferVoidedWebhookEvent {
  export interface Payload {
    /**
     * The tag of the offer.
     * @pattern ^offr_
     */
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
    /**
     * The offer's job level, or null if unassigned. Omitted when job levels are not enabled.
     */
    level?: Payload.Level | null;
  }

  export namespace Payload {
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
