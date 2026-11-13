// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource departments', () => {
  smokeCase(
    'departments.list:required',
    { operation: 'list', path: '/v1/departments' },
    'list: only required params',
    async () => {
      const department = await client.departments.list({
        limit: 'limit',
      });
    },
  );
  smokeCase(
    'departments.list:all',
    { operation: 'list', path: '/v1/departments' },
    'list: required and optional params',
    async () => {
      const department = await client.departments.list({
        limit: 'limit',
        afterId: 'dpt_1234',
        beforeId: 'dpt_1234',
      });
    },
  );
  smokeCase(
    'departments.create:single',
    { operation: 'create', path: '/v1/departments' },
    'create',
    async () => {
      const department = await client.departments.create({
        name: 'x',
      });
    },
  );
  smokeCase(
    'departments.update:required',
    { operation: 'update', path: '/v1/departments/{id}' },
    'update: only required params',
    async () => {
      const department = await client.departments.update('dpt_1234', {});
    },
  );
  smokeCase(
    'departments.update:all',
    { operation: 'update', path: '/v1/departments/{id}' },
    'update: required and optional params',
    async () => {
      const department = await client.departments.update('dpt_1234', {
        name: '',
      });
    },
  );
});
