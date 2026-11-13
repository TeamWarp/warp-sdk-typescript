// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource healthPlans', () => {
  smokeCase(
    'benefits.healthPlans.list:required',
    { operation: 'list', path: '/v1/benefits/health_plans' },
    'list: only required params',
    async () => {
      const healthPlan = await client.benefits.healthPlans.list({
        limit: 'limit',
        statuses: ['active'],
      });
    },
  );
  smokeCase(
    'benefits.healthPlans.list:all',
    { operation: 'list', path: '/v1/benefits/health_plans' },
    'list: required and optional params',
    async () => {
      const healthPlan = await client.benefits.healthPlans.list({
        limit: 'limit',
        afterId: 'chpl_1234',
        beforeId: 'chpl_1234',
        types: ['medical'],
        statuses: ['active'],
        carrierIds: ['car_1234'],
      });
    },
  );
  smokeCase(
    'benefits.healthPlans.get:single',
    { operation: 'get', path: '/v1/benefits/health_plans/{id}' },
    'get',
    async () => {
      const publicHealthPlan = await client.benefits.healthPlans.get('chpl_1234');
    },
  );
});
