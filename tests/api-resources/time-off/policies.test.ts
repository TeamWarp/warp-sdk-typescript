// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource policies', () => {
  smokeCase(
    'timeOff.policies.list:required',
    { operation: 'list', path: '/v1/time_off/policies' },
    'list: only required params',
    async () => {
      const policy = await client.timeOff.policies.list({
        limit: 'limit',
      });
    },
  );
  smokeCase(
    'timeOff.policies.list:all',
    { operation: 'list', path: '/v1/time_off/policies' },
    'list: required and optional params',
    async () => {
      const policy = await client.timeOff.policies.list({
        limit: 'limit',
        afterId: 'top_1234',
        beforeId: 'top_1234',
      });
    },
  );
  smokeCase(
    'timeOff.policies.get:single',
    { operation: 'get', path: '/v1/time_off/policies/{id}' },
    'get',
    async () => {
      const policy = await client.timeOff.policies.get('top_1234');
    },
  );
});
