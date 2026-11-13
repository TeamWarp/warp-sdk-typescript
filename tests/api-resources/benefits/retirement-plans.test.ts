// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource retirementPlans', () => {
  smokeCase(
    'benefits.retirementPlans.list:required',
    { operation: 'list', path: '/v1/benefits/retirement_plans' },
    'list: only required params',
    async () => {
      const retirementPlan = await client.benefits.retirementPlans.list({
        limit: 'limit',
        statuses: ['active'],
      });
    },
  );
  smokeCase(
    'benefits.retirementPlans.list:all',
    { operation: 'list', path: '/v1/benefits/retirement_plans' },
    'list: required and optional params',
    async () => {
      const retirementPlan = await client.benefits.retirementPlans.list({
        limit: 'limit',
        afterId: 'crpl_1234',
        beforeId: 'crpl_1234',
        types: ['401k'],
        statuses: ['active'],
      });
    },
  );
  smokeCase(
    'benefits.retirementPlans.create:single',
    { operation: 'create', path: '/v1/benefits/retirement_plans' },
    'create',
    async () => {
      const publicRetirementPlan1 = await client.benefits.retirementPlans.create({
        type: '401k',
        name: 'x',
        effectiveStartDate: '',
      });
    },
  );
  smokeCase(
    'benefits.retirementPlans.get:single',
    { operation: 'get', path: '/v1/benefits/retirement_plans/{id}' },
    'get',
    async () => {
      const publicRetirementPlan = await client.benefits.retirementPlans.get('crpl_1234');
    },
  );
  smokeCase(
    'benefits.retirementPlans.update:required',
    { operation: 'update', path: '/v1/benefits/retirement_plans/{id}' },
    'update: only required params',
    async () => {
      const publicRetirementPlan = await client.benefits.retirementPlans.update('crpl_1234', {});
    },
  );
  smokeCase(
    'benefits.retirementPlans.update:all',
    { operation: 'update', path: '/v1/benefits/retirement_plans/{id}' },
    'update: required and optional params',
    async () => {
      const publicRetirementPlan = await client.benefits.retirementPlans.update('crpl_1234', {
        name: 'x',
        effectiveStartDate: '',
        effectiveEndDate: '',
      });
    },
  );
});
