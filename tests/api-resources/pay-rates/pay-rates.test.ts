// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource payRates', () => {
  smokeCase(
    'payRates.list:required',
    { operation: 'list', path: '/v1/pay_rates' },
    'list: only required params',
    async () => {
      const payRate = await client.payRates.list({
        limit: 'limit',
      });
    },
  );
  smokeCase(
    'payRates.list:all',
    { operation: 'list', path: '/v1/pay_rates' },
    'list: required and optional params',
    async () => {
      const payRate = await client.payRates.list({
        limit: 'limit',
        afterId: 'pyr_1234',
        beforeId: 'pyr_1234',
        workerId: 'wrk_1234',
        effectiveOnOrAfter: 'effectiveOnOrAfter',
        effectiveBefore: 'effectiveBefore',
        type: 'regular',
      });
    },
  );
  smokeCase('payRates.get:single', { operation: 'get', path: '/v1/pay_rates/{id}' }, 'get', async () => {
    const publicPayRate = await client.payRates.get('pyr_1234');
  });
});
