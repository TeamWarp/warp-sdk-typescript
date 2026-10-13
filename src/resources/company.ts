// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class Company extends APIResource {
  /**
   * Get the company associated with your API key, including its unmasked EIN. Requires settings read permission or higher. No parameters are required. The response is the company object directly, and unavailable incorporation dates are null.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PublicCompany>} Basic identity, contact, address, and incorporation information for your company.
   *
   * @example
   * ```ts
   * const publicCompany = await client.company.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<PublicCompany> {
    return this._client.get('/v1/company', options);
  }
}

/**
 * Basic identity, contact, address, and incorporation information for your company.
 */
export interface PublicCompany {
  /**
   * The tag of the company.
   * @pattern ^com_
   */
  id: string;
  /**
   * An Employer Identification Number (EIN) is assigned to a US corporation by the IRS to identify them for tax purposes
   * @minLength 9
   * @maxLength 9
   * @pattern ^\d+$
   */
  ein: string;
  /**
   * The company’s display name.
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  displayName: string;
  /**
   * The company’s legal business name.
   * @minLength 1
   * @pattern ^\S[\s\S]*\S$|^\S$|^$
   */
  legalName: string;
  /**
   * @pattern ^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$
   */
  website: string;
  phone: string;
  /**
   * An email with a reasonably valid regex (based on RFC 5321 atext characters)
   * @format email
   */
  contactEmail: string;
  /**
   * The company’s business description.
   */
  description: string;
  businessAddress: PublicCompanyAddress & unknown;
  mailingAddress: PublicCompanyAddress & unknown;
  /**
   * The company’s US business type.
   */
  businessType: PublicCompanyBusinessType;
  incorporationState:
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
  /**
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  incorporationDate: string | null;
}

/**
 * A US company address. The second address line is null when not provided.
 */
export interface PublicCompanyAddress {
  /**
   * @minLength 1
   */
  line1: string;
  line2: string | null;
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
}

/**
 * The company’s US business type.
 */
export type PublicCompanyBusinessType =
  | 'c_corporation'
  | 's_corporation'
  | 'llc'
  | 'sole_proprietorship'
  | 'partnership';
export declare namespace Company {
  export {
    type PublicCompany as PublicCompany,
    type PublicCompanyAddress as PublicCompanyAddress,
    type PublicCompanyBusinessType as PublicCompanyBusinessType,
  };
}
