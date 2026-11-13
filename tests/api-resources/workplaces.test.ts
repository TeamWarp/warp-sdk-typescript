// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource workplaces', () => {
  smokeCase(
    'workplaces.list:required',
    { operation: 'list', path: '/v1/workplaces' },
    'list: only required params',
    async () => {
      const workplace = await client.workplaces.list({
        limit: 'limit',
      });
    },
  );
  smokeCase(
    'workplaces.list:all',
    { operation: 'list', path: '/v1/workplaces' },
    'list: required and optional params',
    async () => {
      const workplace = await client.workplaces.list({
        limit: 'limit',
        afterId: 'wkp_1234',
        beforeId: 'wkp_1234',
      });
    },
  );
  smokeCase(
    'workplaces.create:single',
    { operation: 'create', path: '/v1/workplaces' },
    'create',
    async () => {
      const workplace = await client.workplaces.create({
        name: 'x',
        type: 'remote',
        address: {
          line1: 'x',
          city: '',
          postalCode: '',
          state: 'AL',
          country: 'US',
        },
      });
    },
  );
  smokeCase(
    'workplaces.update:required',
    { operation: 'update', path: '/v1/workplaces/{id}' },
    'update: only required params',
    async () => {
      const workplace = await client.workplaces.update('wkp_1234', {});
    },
  );
  smokeCase(
    'workplaces.update:all',
    { operation: 'update', path: '/v1/workplaces/{id}' },
    'update: required and optional params',
    async () => {
      const workplace = await client.workplaces.update('wkp_1234', {
        name: '',
      });
    },
  );
});
