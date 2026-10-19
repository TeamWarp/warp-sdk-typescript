// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';
import type * as DeductionsAPI from './benefits/deductions';

export class BankAccounts extends APIResource {
  /**
   * List stored worker bank accounts, newest first. Requires workers banking and profile read scopes.
   *
   * @param {BankAccountListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BankAccountListResponse>} Success
   *
   * @example
   * ```ts
   * const bankAccount = await client.bankAccounts.list({
   *   limit: 'limit',
   * });
   * ```
   */
  list(query: BankAccountListParams, options?: RequestOptions): APIPromise<BankAccountListResponse> {
    return this._client.get('/v1/bank_accounts', { query, ...options });
  }

  /**
   * Get a stored worker bank account. Requires workers banking and profile read scopes.
   *
   * @param {string} id - The tag of the bank account.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PublicBankAccount>}
   *
   * @example
   * ```ts
   * const publicBankAccount = await client.bankAccounts.get('bank_1234');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<PublicBankAccount> {
    return this._client.get(__scalarPath`/v1/bank_accounts/${id}`, options);
  }
}

/**
 * Stored worker bank account metadata without full account numbers, routing details or provider identifiers.
 */
export interface PublicBankAccount {
  /**
   * The tag of the bank account.
   * @pattern ^bank_
   */
  id: string;
  institutionName: string | null;
  accountType: 'checking' | 'savings' | null;
  accountNumberLastFour: string;
  /**
   * Basic identifying information for a worker associated with another resource.
   */
  worker: DeductionsAPI.PublicWorkerReference;
  status: 'verified' | 'pending_verification' | 'needs_address' | 'unverified' | 'blocked';
  /**
   * @format date-time
   */
  createdAt: string;
  /**
   * @format date-time
   */
  updatedAt: string;
}

export interface BankAccountListParams {
  limit: string | null;
  /**
   * The tag of the bank account.
   * @pattern ^bank_
   */
  afterId?: string | null;
  /**
   * The tag of the bank account.
   * @pattern ^bank_
   */
  beforeId?: string | null;
  /**
   * Worker IDs to include as repeated parameters. Omit for all workers. Unknown or foreign IDs contribute no matches.
   * @minItems 1
   */
  workerIds?: Array<string> | null;
  /**
   * Verification states to include as repeated parameters. Omit for all states.
   * @minItems 1
   */
  statuses?: Array<'verified' | 'pending_verification' | 'needs_address' | 'unverified' | 'blocked'> | null;
}

export interface BankAccountListResponse {
  hasMore: boolean;
  count: number;
  data: Array<PublicBankAccount>;
}
export declare namespace BankAccounts {
  export {
    type PublicBankAccount as PublicBankAccount,
    type BankAccountListResponse as BankAccountListResponse,
    type BankAccountListParams as BankAccountListParams,
  };
}
