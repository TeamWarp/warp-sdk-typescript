// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource regular', () => {
  smokeCase(
    'payRates.regular.create:required',
    { operation: 'create', path: '/v1/pay_rates/regular' },
    'create: only required params',
    async () => {
      const publicCreateRegularPayRate = await client.payRates.regular.create({
        workerId: 'wrk_khac8380c2Lm',
        type: 'salary',
        currency: 'USD',
        effectiveDate: '',
      });
    },
  );
  smokeCase(
    'payRates.regular.create:all',
    { operation: 'create', path: '/v1/pay_rates/regular' },
    'create: required and optional params',
    async () => {
      const publicCreateRegularPayRate = await client.payRates.regular.create({
        workerId: 'wrk_khac8380c2Lm',
        type: 'salary',
        amount: 12500000,
        currency: 'USD',
        effectiveDate: '',
        requireHoursSubmission: false,
        description: '',
        notes: '',
      });
    },
  );
  smokeCase(
    'payRates.regular.delete:single',
    { operation: 'delete', path: '/v1/pay_rates/regular' },
    'delete',
    async () => {
      await client.payRates.regular.delete({
        workerId: 'wrk_khac8380c2Lm',
        effectiveDate: '',
      });
    },
  );
});
