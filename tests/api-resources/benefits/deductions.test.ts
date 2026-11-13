// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource deductions', () => {
  smokeCase(
    'benefits.deductions.list:required',
    { operation: 'list', path: '/v1/benefits/deductions' },
    'list: only required params',
    async () => {
      const deduction = await client.benefits.deductions.list({
        limit: 'limit',
        statuses: ['active'],
      });
    },
  );
  smokeCase(
    'benefits.deductions.list:all',
    { operation: 'list', path: '/v1/benefits/deductions' },
    'list: required and optional params',
    async () => {
      const deduction = await client.benefits.deductions.list({
        limit: 'limit',
        afterId: 'pbdg_1234',
        beforeId: 'pbdg_1234',
        workerIds: ['wrk_1234'],
        categories: ['health'],
        types: ['medical'],
        statuses: ['active'],
        healthPlanIds: ['chpl_1234'],
        retirementPlanIds: ['crpl_1234'],
      });
    },
  );
  smokeCase(
    'benefits.deductions.create:required',
    { operation: 'create', path: '/v1/benefits/deductions' },
    'create: only required params',
    async () => {
      const publicBenefitDeduction1 = await client.benefits.deductions.create({
        workerId: 'wrk_1234',
        type: 'medical',
        calculation: {
          type: 'fixed_amount',
          frequency: 'monthly',
          employeeContribution: {
            amount: 0,
            currency: 'USD',
          },
          employerContribution: {
            amount: 0,
            currency: 'USD',
          },
        },
        effectiveStartDate: '',
      });
    },
  );
  smokeCase(
    'benefits.deductions.create:all',
    { operation: 'create', path: '/v1/benefits/deductions' },
    'create: required and optional params',
    async () => {
      const publicBenefitDeduction1 = await client.benefits.deductions.create({
        workerId: 'wrk_1234',
        type: 'medical',
        plan: {
          type: 'health_plan',
          id: 'chpl_1234',
        },
        name: 'x',
        calculation: {
          type: 'fixed_amount',
          frequency: 'monthly',
          employeeContribution: {
            amount: 0,
            currency: 'USD',
          },
          employerContribution: {
            amount: 0,
            currency: 'USD',
          },
        },
        recurrence: 'recurring',
        effectiveStartDate: '',
        effectiveEndDate: '',
      });
    },
  );
  smokeCase(
    'benefits.deductions.get:single',
    { operation: 'get', path: '/v1/benefits/deductions/{id}' },
    'get',
    async () => {
      const publicBenefitDeduction = await client.benefits.deductions.get('pbdg_1234');
    },
  );
  smokeCase(
    'benefits.deductions.update:required',
    { operation: 'update', path: '/v1/benefits/deductions/{id}' },
    'update: only required params',
    async () => {
      const publicBenefitDeduction = await client.benefits.deductions.update('pbdg_1234', {});
    },
  );
  smokeCase(
    'benefits.deductions.update:all',
    { operation: 'update', path: '/v1/benefits/deductions/{id}' },
    'update: required and optional params',
    async () => {
      const publicBenefitDeduction = await client.benefits.deductions.update('pbdg_1234', {
        name: 'x',
        calculation: {
          type: 'fixed_amount',
          frequency: 'monthly',
          employeeContribution: {
            amount: 0,
            currency: 'USD',
          },
          employerContribution: {
            amount: 0,
            currency: 'USD',
          },
        },
        recurrence: 'recurring',
        status: 'active',
        effectiveEndDate: '',
      });
    },
  );
});
