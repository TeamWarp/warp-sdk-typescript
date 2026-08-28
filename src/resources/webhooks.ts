// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import * as Shared from './shared';
import * as Union1API from './custom-fields';
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
  payload: TimeOffBalanceAdjustedWebhookEvent.Payload;
  /**
   * ISO 8601 timestamp of when the event was generated.
   */
  created_at: string;
}

export namespace TimeOffBalanceAdjustedWebhookEvent {
  export interface Payload {
    /**
     * @pattern ^wrk_
     */
    workerId: string;
    /**
     * @pattern ^top_
     */
    policyId: string;
    /**
     * Signed adjustment applied to the balance, in minutes. Omitted when no balance snapshot was captured.
     */
    adjustmentMinutes?: Shared.Union | null;
    /**
     * The date the adjustment takes effect. Omitted when no balance snapshot was captured.
     * @pattern ^\d{4}-\d{2}-\d{2}$
     */
    effectiveDate?: string | null;
    previousBalance?: Union1API.Union1;
    newBalance?: Union1API.Union1;
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
    /**
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
    customFields?: Array<Payload.CustomField> | null;
  }

  export namespace Payload {
    export interface Department {
      /**
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface CustomField {
      /**
       * @pattern ^cf_
       */
      id: string;
      name: string;
      type: 'text' | 'number' | 'date' | 'boolean' | 'currency' | 'percentage' | 'select' | 'multi_select';
      /**
       * The worker’s value; null when unset or when the field is redacted for this API key.
       */
      value:
        | CustomField.Value
        | CustomField.Value2
        | CustomField.Value3
        | CustomField.Value4
        | CustomField.Value5
        | CustomField.Value6
        | CustomField.Value7
        | CustomField.Value8
        | null;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value is withheld, not absent — absence of a value does not imply the worker has none.
       */
      redacted: boolean;
    }

    export namespace CustomField {
      export interface Value {
        type: 'text';
        value: string;
      }

      export interface Value2 {
        type: 'number';
        value: Union1API.Union1;
      }

      export interface Value3 {
        type: 'date';
        /**
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        value: string;
      }

      export interface Value4 {
        type: 'boolean';
        value: boolean;
      }

      export interface Value5 {
        type: 'currency';
        amount: Union1API.Union1;
        currencyCode: Shared.Union;
      }

      export interface Value6 {
        type: 'percentage';
        value: Union1API.Union1;
      }

      export interface Value7 {
        type: 'select';
        option: Shared.Objects;
      }

      export interface Value8 {
        type: 'multi_select';
        options: Array<Shared.Objects>;
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
    customFields?: Array<Payload.CustomField> | null;
  }

  export namespace Payload {
    export interface Department {
      /**
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface CustomField {
      /**
       * @pattern ^cf_
       */
      id: string;
      name: string;
      type: 'text' | 'number' | 'date' | 'boolean' | 'currency' | 'percentage' | 'select' | 'multi_select';
      /**
       * The worker’s value; null when unset or when the field is redacted for this API key.
       */
      value:
        | CustomField.Value
        | CustomField.Value2
        | CustomField.Value3
        | CustomField.Value4
        | CustomField.Value5
        | CustomField.Value6
        | CustomField.Value7
        | CustomField.Value8
        | null;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value is withheld, not absent — absence of a value does not imply the worker has none.
       */
      redacted: boolean;
    }

    export namespace CustomField {
      export interface Value {
        type: 'text';
        value: string;
      }

      export interface Value2 {
        type: 'number';
        value: Union1API.Union1;
      }

      export interface Value3 {
        type: 'date';
        /**
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        value: string;
      }

      export interface Value4 {
        type: 'boolean';
        value: boolean;
      }

      export interface Value5 {
        type: 'currency';
        amount: Union1API.Union1;
        currencyCode: Shared.Union;
      }

      export interface Value6 {
        type: 'percentage';
        value: Union1API.Union1;
      }

      export interface Value7 {
        type: 'select';
        option: Shared.Objects;
      }

      export interface Value8 {
        type: 'multi_select';
        options: Array<Shared.Objects>;
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
    customFields?: Array<Payload.CustomField> | null;
  }

  export namespace Payload {
    export interface Department {
      /**
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface CustomField {
      /**
       * @pattern ^cf_
       */
      id: string;
      name: string;
      type: 'text' | 'number' | 'date' | 'boolean' | 'currency' | 'percentage' | 'select' | 'multi_select';
      /**
       * The worker’s value; null when unset or when the field is redacted for this API key.
       */
      value:
        | CustomField.Value
        | CustomField.Value2
        | CustomField.Value3
        | CustomField.Value4
        | CustomField.Value5
        | CustomField.Value6
        | CustomField.Value7
        | CustomField.Value8
        | null;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value is withheld, not absent — absence of a value does not imply the worker has none.
       */
      redacted: boolean;
    }

    export namespace CustomField {
      export interface Value {
        type: 'text';
        value: string;
      }

      export interface Value2 {
        type: 'number';
        value: Union1API.Union1;
      }

      export interface Value3 {
        type: 'date';
        /**
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        value: string;
      }

      export interface Value4 {
        type: 'boolean';
        value: boolean;
      }

      export interface Value5 {
        type: 'currency';
        amount: Union1API.Union1;
        currencyCode: Shared.Union;
      }

      export interface Value6 {
        type: 'percentage';
        value: Union1API.Union1;
      }

      export interface Value7 {
        type: 'select';
        option: Shared.Objects;
      }

      export interface Value8 {
        type: 'multi_select';
        options: Array<Shared.Objects>;
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
    customFields?: Array<Payload.CustomField> | null;
  }

  export namespace Payload {
    export interface Department {
      /**
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface CustomField {
      /**
       * @pattern ^cf_
       */
      id: string;
      name: string;
      type: 'text' | 'number' | 'date' | 'boolean' | 'currency' | 'percentage' | 'select' | 'multi_select';
      /**
       * The worker’s value; null when unset or when the field is redacted for this API key.
       */
      value:
        | CustomField.Value
        | CustomField.Value2
        | CustomField.Value3
        | CustomField.Value4
        | CustomField.Value5
        | CustomField.Value6
        | CustomField.Value7
        | CustomField.Value8
        | null;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value is withheld, not absent — absence of a value does not imply the worker has none.
       */
      redacted: boolean;
    }

    export namespace CustomField {
      export interface Value {
        type: 'text';
        value: string;
      }

      export interface Value2 {
        type: 'number';
        value: Union1API.Union1;
      }

      export interface Value3 {
        type: 'date';
        /**
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        value: string;
      }

      export interface Value4 {
        type: 'boolean';
        value: boolean;
      }

      export interface Value5 {
        type: 'currency';
        amount: Union1API.Union1;
        currencyCode: Shared.Union;
      }

      export interface Value6 {
        type: 'percentage';
        value: Union1API.Union1;
      }

      export interface Value7 {
        type: 'select';
        option: Shared.Objects;
      }

      export interface Value8 {
        type: 'multi_select';
        options: Array<Shared.Objects>;
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
    customFields?: Array<Payload.CustomField> | null;
  }

  export namespace Payload {
    export interface Department {
      /**
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface CustomField {
      /**
       * @pattern ^cf_
       */
      id: string;
      name: string;
      type: 'text' | 'number' | 'date' | 'boolean' | 'currency' | 'percentage' | 'select' | 'multi_select';
      /**
       * The worker’s value; null when unset or when the field is redacted for this API key.
       */
      value:
        | CustomField.Value
        | CustomField.Value2
        | CustomField.Value3
        | CustomField.Value4
        | CustomField.Value5
        | CustomField.Value6
        | CustomField.Value7
        | CustomField.Value8
        | null;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value is withheld, not absent — absence of a value does not imply the worker has none.
       */
      redacted: boolean;
    }

    export namespace CustomField {
      export interface Value {
        type: 'text';
        value: string;
      }

      export interface Value2 {
        type: 'number';
        value: Union1API.Union1;
      }

      export interface Value3 {
        type: 'date';
        /**
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        value: string;
      }

      export interface Value4 {
        type: 'boolean';
        value: boolean;
      }

      export interface Value5 {
        type: 'currency';
        amount: Union1API.Union1;
        currencyCode: Shared.Union;
      }

      export interface Value6 {
        type: 'percentage';
        value: Union1API.Union1;
      }

      export interface Value7 {
        type: 'select';
        option: Shared.Objects;
      }

      export interface Value8 {
        type: 'multi_select';
        options: Array<Shared.Objects>;
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
    customFields?: Array<Payload.CustomField> | null;
  }

  export namespace Payload {
    export interface Department {
      /**
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface CustomField {
      /**
       * @pattern ^cf_
       */
      id: string;
      name: string;
      type: 'text' | 'number' | 'date' | 'boolean' | 'currency' | 'percentage' | 'select' | 'multi_select';
      /**
       * The worker’s value; null when unset or when the field is redacted for this API key.
       */
      value:
        | CustomField.Value
        | CustomField.Value2
        | CustomField.Value3
        | CustomField.Value4
        | CustomField.Value5
        | CustomField.Value6
        | CustomField.Value7
        | CustomField.Value8
        | null;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value is withheld, not absent — absence of a value does not imply the worker has none.
       */
      redacted: boolean;
    }

    export namespace CustomField {
      export interface Value {
        type: 'text';
        value: string;
      }

      export interface Value2 {
        type: 'number';
        value: Union1API.Union1;
      }

      export interface Value3 {
        type: 'date';
        /**
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        value: string;
      }

      export interface Value4 {
        type: 'boolean';
        value: boolean;
      }

      export interface Value5 {
        type: 'currency';
        amount: Union1API.Union1;
        currencyCode: Shared.Union;
      }

      export interface Value6 {
        type: 'percentage';
        value: Union1API.Union1;
      }

      export interface Value7 {
        type: 'select';
        option: Shared.Objects;
      }

      export interface Value8 {
        type: 'multi_select';
        options: Array<Shared.Objects>;
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
    customFields?: Array<Payload.CustomField> | null;
  }

  export namespace Payload {
    export interface Department {
      /**
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface CustomField {
      /**
       * @pattern ^cf_
       */
      id: string;
      name: string;
      type: 'text' | 'number' | 'date' | 'boolean' | 'currency' | 'percentage' | 'select' | 'multi_select';
      /**
       * The worker’s value; null when unset or when the field is redacted for this API key.
       */
      value:
        | CustomField.Value
        | CustomField.Value2
        | CustomField.Value3
        | CustomField.Value4
        | CustomField.Value5
        | CustomField.Value6
        | CustomField.Value7
        | CustomField.Value8
        | null;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value is withheld, not absent — absence of a value does not imply the worker has none.
       */
      redacted: boolean;
    }

    export namespace CustomField {
      export interface Value {
        type: 'text';
        value: string;
      }

      export interface Value2 {
        type: 'number';
        value: Union1API.Union1;
      }

      export interface Value3 {
        type: 'date';
        /**
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        value: string;
      }

      export interface Value4 {
        type: 'boolean';
        value: boolean;
      }

      export interface Value5 {
        type: 'currency';
        amount: Union1API.Union1;
        currencyCode: Shared.Union;
      }

      export interface Value6 {
        type: 'percentage';
        value: Union1API.Union1;
      }

      export interface Value7 {
        type: 'select';
        option: Shared.Objects;
      }

      export interface Value8 {
        type: 'multi_select';
        options: Array<Shared.Objects>;
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
    customFields?: Array<Payload.CustomField> | null;
  }

  export namespace Payload {
    export interface Department {
      /**
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface CustomField {
      /**
       * @pattern ^cf_
       */
      id: string;
      name: string;
      type: 'text' | 'number' | 'date' | 'boolean' | 'currency' | 'percentage' | 'select' | 'multi_select';
      /**
       * The worker’s value; null when unset or when the field is redacted for this API key.
       */
      value:
        | CustomField.Value
        | CustomField.Value2
        | CustomField.Value3
        | CustomField.Value4
        | CustomField.Value5
        | CustomField.Value6
        | CustomField.Value7
        | CustomField.Value8
        | null;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value is withheld, not absent — absence of a value does not imply the worker has none.
       */
      redacted: boolean;
    }

    export namespace CustomField {
      export interface Value {
        type: 'text';
        value: string;
      }

      export interface Value2 {
        type: 'number';
        value: Union1API.Union1;
      }

      export interface Value3 {
        type: 'date';
        /**
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        value: string;
      }

      export interface Value4 {
        type: 'boolean';
        value: boolean;
      }

      export interface Value5 {
        type: 'currency';
        amount: Union1API.Union1;
        currencyCode: Shared.Union;
      }

      export interface Value6 {
        type: 'percentage';
        value: Union1API.Union1;
      }

      export interface Value7 {
        type: 'select';
        option: Shared.Objects;
      }

      export interface Value8 {
        type: 'multi_select';
        options: Array<Shared.Objects>;
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
    customFields?: Array<Payload.CustomField> | null;
  }

  export namespace Payload {
    export interface Department {
      /**
       * @pattern ^dpt_
       */
      id: string;
      name: string;
    }

    export interface CustomField {
      /**
       * @pattern ^cf_
       */
      id: string;
      name: string;
      type: 'text' | 'number' | 'date' | 'boolean' | 'currency' | 'percentage' | 'select' | 'multi_select';
      /**
       * The worker’s value; null when unset or when the field is redacted for this API key.
       */
      value:
        | CustomField.Value
        | CustomField.Value2
        | CustomField.Value3
        | CustomField.Value4
        | CustomField.Value5
        | CustomField.Value6
        | CustomField.Value7
        | CustomField.Value8
        | null;
      /**
       * True when this API key’s permission scopes cannot read the field’s category. The value is withheld, not absent — absence of a value does not imply the worker has none.
       */
      redacted: boolean;
    }

    export namespace CustomField {
      export interface Value {
        type: 'text';
        value: string;
      }

      export interface Value2 {
        type: 'number';
        value: Union1API.Union1;
      }

      export interface Value3 {
        type: 'date';
        /**
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        value: string;
      }

      export interface Value4 {
        type: 'boolean';
        value: boolean;
      }

      export interface Value5 {
        type: 'currency';
        amount: Union1API.Union1;
        currencyCode: Shared.Union;
      }

      export interface Value6 {
        type: 'percentage';
        value: Union1API.Union1;
      }

      export interface Value7 {
        type: 'select';
        option: Shared.Objects;
      }

      export interface Value8 {
        type: 'multi_select';
        options: Array<Shared.Objects>;
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
  }

  export namespace Payload {
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

    export interface Workplace {
      /**
       * @pattern ^wkp_
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
      signOnBonus: Shared.Union;
      relocationBonus: Shared.Union;
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
        variableRate: Shared.Union;
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
  }

  export namespace Payload {
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

    export interface Workplace {
      /**
       * @pattern ^wkp_
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
      signOnBonus: Shared.Union;
      relocationBonus: Shared.Union;
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
        variableRate: Shared.Union;
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
  }

  export namespace Payload {
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

    export interface Workplace {
      /**
       * @pattern ^wkp_
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
      signOnBonus: Shared.Union;
      relocationBonus: Shared.Union;
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
        variableRate: Shared.Union;
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
  }

  export namespace Payload {
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

    export interface Workplace {
      /**
       * @pattern ^wkp_
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
      signOnBonus: Shared.Union;
      relocationBonus: Shared.Union;
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
        variableRate: Shared.Union;
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
  }

  export namespace Payload {
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

    export interface Workplace {
      /**
       * @pattern ^wkp_
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
      signOnBonus: Shared.Union;
      relocationBonus: Shared.Union;
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
        variableRate: Shared.Union;
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
