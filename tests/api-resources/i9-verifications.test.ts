// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource i9Verifications', () => {
  smokeCase(
    'i9Verifications.list:required',
    { operation: 'list', path: '/v1/i9_verifications' },
    'list: only required params',
    async () => {
      const i9Verification = await client.i9Verifications.list({
        limit: 'limit',
      });
    },
  );
  smokeCase(
    'i9Verifications.list:all',
    { operation: 'list', path: '/v1/i9_verifications' },
    'list: required and optional params',
    async () => {
      const i9Verification = await client.i9Verifications.list({
        limit: 'limit',
        afterId: 'i9v_1234',
        beforeId: 'i9v_1234',
        workerIds: ['wrk_1234'],
        statuses: ['not_started'],
      });
    },
  );
  smokeCase(
    'i9Verifications.get:single',
    { operation: 'get', path: '/v1/i9_verifications/{id}' },
    'get',
    async () => {
      const publicI9Verification = await client.i9Verifications.get('i9v_1234');
    },
  );
});
