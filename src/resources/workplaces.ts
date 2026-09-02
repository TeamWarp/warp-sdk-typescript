// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';
import type * as Shared from './shared';
import type * as CustomFieldsAPI from './custom-fields';

export class Workplaces extends APIResource {
  /**
   * List all workplaces for your company.
   *
   * @param {WorkplaceListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkplaceListResponse>} Success
   *
   * @example
   * ```ts
   * const workplace = await client.workplaces.list({
   *   limit: 'limit',
   * });
   * ```
   */
  list(query: WorkplaceListParams, options?: RequestOptions): APIPromise<WorkplaceListResponse> {
    return this._client.get('/v1/workplaces', { query, ...options });
  }

  /**
   * Create a new workplace.
   *
   * @param {WorkplaceCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkplaceCreateResponse>} Success
   *
   * @example
   * ```ts
   * const workplace = await client.workplaces.create({
   *   name: 'x',
   *   type: 'remote',
   *   address: {
   *     line1: 'x',
   *     city: '',
   *     postalCode: '',
   *     state: 'AL',
   *     country: 'US',
   *   },
   * });
   * ```
   */
  create(body: WorkplaceCreateParams, options?: RequestOptions): APIPromise<WorkplaceCreateResponse> {
    return this._client.post('/v1/workplaces', { body, ...options });
  }

  /**
   * Update an existing workplace.
   *
   * @param {string} id
   * @param {WorkplaceUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WorkplaceUpdateResponse>} Success
   *
   * @example
   * ```ts
   * const workplace = await client.workplaces.update('wkp_1234', {});
   * ```
   */
  update(
    id: string,
    body: WorkplaceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkplaceUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/workplaces/${id}`, { body, ...options });
  }
}

export interface Objects11 {
  /**
   * @pattern ^wrk_
   */
  id: string;
  position: string;
  type: Shared.Union28;
  status: Shared.Union27;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  startDate: string;
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  endDate: Shared.Union29 | null;
  isBusiness: Shared.Union30 | null;
  businessName: Shared.Union31 | null;
  firstName: string;
  lastName: string;
  /**
   * @format email
   */
  email: string;
  /**
   * @format email
   */
  workEmail: Shared.Union32 | null;
  preferredName: Shared.Union33 | null;
  /**
   * The "ui" name of a worker. If it's a business contractor business name is used. Otherwise we default to preferred name, then first-last.
   */
  displayName: string;
  /**
   * The IANA timezone of the worker (e.g., America/New_York).
   */
  timeZone: Shared.Union34 | null;
  /**
   * The department the worker belongs to, or null if unassigned.
   */
  department: Shared.Union35 | null;
  /**
   * The worker's current regular compensation, or the rate effective on a future start date. Null when the worker has no applicable regular pay rate or the API key lacks the corresponding compensation read scope.
   */
  compensation: Shared.PublicWorkerCompensation | null;
  /**
   * The worker's assigned job level, or null if unassigned. Omitted when job levels are not enabled.
   */
  level?: Shared.Objects5 | null;
  customFields?: Array<
    | Objects11.PublicTextWorkerCustomField
    | Objects11.PublicNumberWorkerCustomField
    | Objects11.PublicDateWorkerCustomField
    | Objects11.PublicBooleanWorkerCustomField
    | Objects11.PublicCurrencyWorkerCustomField
    | Objects11.PublicPercentageWorkerCustomField
    | Objects11.PublicSelectWorkerCustomField
    | Objects11.PublicMultiSelectWorkerCustomField
  > | null;
}

export namespace Objects11 {
  export interface PublicTextWorkerCustomField {
    type: 'text';
    /**
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
    value: Shared.Union11 | null;
  }

  export interface PublicDateWorkerCustomField {
    type: 'date';
    /**
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
    currencyCode: CustomFieldsAPI.Union1 | null;
  }

  export interface PublicPercentageWorkerCustomField {
    type: 'percentage';
    /**
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
    value: Shared.Union11 | null;
  }

  export interface PublicSelectWorkerCustomField {
    type: 'select';
    /**
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
    option: Shared.Objects3 | null;
  }

  export interface PublicMultiSelectWorkerCustomField {
    type: 'multi_select';
    /**
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
    options: Array<Shared.Objects3> | null;
  }
}

export interface WorkplaceListParams {
  limit: string | null;
  /**
   * @pattern ^wkp_
   */
  afterId?: string | null;
  /**
   * @pattern ^wkp_
   */
  beforeId?: string | null;
}

export interface WorkplaceListResponse {
  hasMore: boolean;
  count: number;
  data: Array<WorkplaceListResponse.Data>;
}

export namespace WorkplaceListResponse {
  export interface Data {
    /**
     * @pattern ^wkp_
     */
    id: string;
    name: string;
    type: 'remote' | 'office';
    status: 'active' | 'archived';
    /**
     * A valid US address
     */
    address: Data.Address;
    createdAt: string;
  }

  export namespace Data {
    export interface Address {
      /**
       * @minLength 1
       */
      line1: string;
      city: string;
      postalCode: string;
      state:
        | 'AL'
        | 'AK'
        | 'AZ'
        | 'AR'
        | 'CA'
        | 'CO'
        | 'CT'
        | 'DC'
        | 'DE'
        | 'FL'
        | 'GA'
        | 'HI'
        | 'ID'
        | 'IL'
        | 'IN'
        | 'IA'
        | 'KS'
        | 'KY'
        | 'LA'
        | 'ME'
        | 'MD'
        | 'MA'
        | 'MI'
        | 'MN'
        | 'MS'
        | 'MO'
        | 'MT'
        | 'NE'
        | 'NV'
        | 'NH'
        | 'NJ'
        | 'NM'
        | 'NY'
        | 'NC'
        | 'ND'
        | 'OH'
        | 'OK'
        | 'OR'
        | 'PA'
        | 'RI'
        | 'SC'
        | 'SD'
        | 'TN'
        | 'TX'
        | 'UT'
        | 'VT'
        | 'VA'
        | 'WA'
        | 'WV'
        | 'WI'
        | 'WY';
      country: 'US';
      line2?: string | null;
    }
  }
}

export interface WorkplaceCreateParams {
  /**
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  name: string;
  type: 'remote' | 'office';
  /**
   * A valid US address
   */
  address: WorkplaceCreateParams.Address;
}

export namespace WorkplaceCreateParams {
  export interface Address {
    /**
     * @minLength 1
     */
    line1: string;
    city: string;
    postalCode: string;
    state:
      | 'AL'
      | 'AK'
      | 'AZ'
      | 'AR'
      | 'CA'
      | 'CO'
      | 'CT'
      | 'DC'
      | 'DE'
      | 'FL'
      | 'GA'
      | 'HI'
      | 'ID'
      | 'IL'
      | 'IN'
      | 'IA'
      | 'KS'
      | 'KY'
      | 'LA'
      | 'ME'
      | 'MD'
      | 'MA'
      | 'MI'
      | 'MN'
      | 'MS'
      | 'MO'
      | 'MT'
      | 'NE'
      | 'NV'
      | 'NH'
      | 'NJ'
      | 'NM'
      | 'NY'
      | 'NC'
      | 'ND'
      | 'OH'
      | 'OK'
      | 'OR'
      | 'PA'
      | 'RI'
      | 'SC'
      | 'SD'
      | 'TN'
      | 'TX'
      | 'UT'
      | 'VT'
      | 'VA'
      | 'WA'
      | 'WV'
      | 'WI'
      | 'WY';
    country: 'US';
    line2?: string | null;
  }
}

export interface WorkplaceCreateResponse {
  /**
   * @pattern ^wkp_
   */
  id: string;
  name: string;
  type: 'remote' | 'office';
  status: 'active' | 'archived';
  /**
   * A valid US address
   */
  address: WorkplaceCreateResponse.Address;
  createdAt: string;
}

export namespace WorkplaceCreateResponse {
  export interface Address {
    /**
     * @minLength 1
     */
    line1: string;
    city: string;
    postalCode: string;
    state:
      | 'AL'
      | 'AK'
      | 'AZ'
      | 'AR'
      | 'CA'
      | 'CO'
      | 'CT'
      | 'DC'
      | 'DE'
      | 'FL'
      | 'GA'
      | 'HI'
      | 'ID'
      | 'IL'
      | 'IN'
      | 'IA'
      | 'KS'
      | 'KY'
      | 'LA'
      | 'ME'
      | 'MD'
      | 'MA'
      | 'MI'
      | 'MN'
      | 'MS'
      | 'MO'
      | 'MT'
      | 'NE'
      | 'NV'
      | 'NH'
      | 'NJ'
      | 'NM'
      | 'NY'
      | 'NC'
      | 'ND'
      | 'OH'
      | 'OK'
      | 'OR'
      | 'PA'
      | 'RI'
      | 'SC'
      | 'SD'
      | 'TN'
      | 'TX'
      | 'UT'
      | 'VT'
      | 'VA'
      | 'WA'
      | 'WV'
      | 'WI'
      | 'WY';
    country: 'US';
    line2?: string | null;
  }
}

export interface WorkplaceUpdateParams {
  name?: string | null;
}

export interface WorkplaceUpdateResponse {
  /**
   * @pattern ^wkp_
   */
  id: string;
  name: string;
  type: 'remote' | 'office';
  status: 'active' | 'archived';
  /**
   * A valid US address
   */
  address: WorkplaceUpdateResponse.Address;
  createdAt: string;
}

export namespace WorkplaceUpdateResponse {
  export interface Address {
    /**
     * @minLength 1
     */
    line1: string;
    city: string;
    postalCode: string;
    state:
      | 'AL'
      | 'AK'
      | 'AZ'
      | 'AR'
      | 'CA'
      | 'CO'
      | 'CT'
      | 'DC'
      | 'DE'
      | 'FL'
      | 'GA'
      | 'HI'
      | 'ID'
      | 'IL'
      | 'IN'
      | 'IA'
      | 'KS'
      | 'KY'
      | 'LA'
      | 'ME'
      | 'MD'
      | 'MA'
      | 'MI'
      | 'MN'
      | 'MS'
      | 'MO'
      | 'MT'
      | 'NE'
      | 'NV'
      | 'NH'
      | 'NJ'
      | 'NM'
      | 'NY'
      | 'NC'
      | 'ND'
      | 'OH'
      | 'OK'
      | 'OR'
      | 'PA'
      | 'RI'
      | 'SC'
      | 'SD'
      | 'TN'
      | 'TX'
      | 'UT'
      | 'VT'
      | 'VA'
      | 'WA'
      | 'WV'
      | 'WI'
      | 'WY';
    country: 'US';
    line2?: string | null;
  }
}
export declare namespace Workplaces {
  export {
    type Objects11 as Objects11,
    type WorkplaceListResponse as WorkplaceListResponse,
    type WorkplaceCreateResponse as WorkplaceCreateResponse,
    type WorkplaceUpdateResponse as WorkplaceUpdateResponse,
    type WorkplaceListParams as WorkplaceListParams,
    type WorkplaceCreateParams as WorkplaceCreateParams,
    type WorkplaceUpdateParams as WorkplaceUpdateParams,
  };
}
