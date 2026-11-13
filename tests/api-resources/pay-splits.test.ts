// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource paySplits', () => {
  smokeCase(
    'paySplits.list:required',
    { operation: 'list', path: '/v1/pay_splits' },
    'list: only required params',
    async () => {
      const paySplit = await client.paySplits.list({
        limit: 'limit',
        statuses: ['active'],
      });
    },
  );
  smokeCase(
    'paySplits.list:all',
    { operation: 'list', path: '/v1/pay_splits' },
    'list: required and optional params',
    async () => {
      const paySplit = await client.paySplits.list({
        limit: 'limit',
        afterId: 'nps_1234',
        beforeId: 'nps_1234',
        workerIds: ['wrk_1234'],
        types: ['percentage'],
        statuses: ['active'],
      });
    },
  );
  smokeCase('paySplits.get:single', { operation: 'get', path: '/v1/pay_splits/{id}' }, 'get', async () => {
    const publicPaySplit = await client.paySplits.get('nps_1234');
  });
});
