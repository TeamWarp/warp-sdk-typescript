// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource company', () => {
  smokeCase('company.list:single', { operation: 'list', path: '/v1/company' }, 'list', async () => {
    const publicCompany = await client.company.list();
  });
});
