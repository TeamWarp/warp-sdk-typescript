// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource bankAccounts', () => {
  smokeCase(
    'bankAccounts.list:required',
    { operation: 'list', path: '/v1/bank_accounts' },
    'list: only required params',
    async () => {
      const bankAccount = await client.bankAccounts.list({
        limit: 'limit',
      });
    },
  );
  smokeCase(
    'bankAccounts.list:all',
    { operation: 'list', path: '/v1/bank_accounts' },
    'list: required and optional params',
    async () => {
      const bankAccount = await client.bankAccounts.list({
        limit: 'limit',
        afterId: 'bank_1234',
        beforeId: 'bank_1234',
        workerIds: ['wrk_1234'],
        statuses: ['verified'],
      });
    },
  );
  smokeCase(
    'bankAccounts.get:single',
    { operation: 'get', path: '/v1/bank_accounts/{id}' },
    'get',
    async () => {
      const publicBankAccount = await client.bankAccounts.get('bank_1234');
    },
  );
});
