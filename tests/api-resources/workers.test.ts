// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource workers', () => {
  smokeCase(
    'workers.update:required',
    { operation: 'update', path: '/v1/workers/{id}' },
    'update: only required params',
    async () => {
      const worker = await client.workers.update('wrk_1234', {});
    },
  );
  smokeCase(
    'workers.update:all',
    { operation: 'update', path: '/v1/workers/{id}' },
    'update: required and optional params',
    async () => {
      const worker = await client.workers.update('wrk_1234', {
        firstName: 'x',
        lastName: 'x',
        preferredName: '',
        tShirtSize: 'XS',
        email: 'john@joinwarp.com',
        workEmail: 'john@joinwarp.com',
        phone: '',
        timeZone: 'America/New_York',
        dateOfBirth: '1990-06-15',
        maritalStatus: 'married',
        biologicalSex: 'male',
        address: {},
        position: 'x',
        departmentId: 'dpt_1234',
        managerId: 'wrk_1234',
        levelId: 'jlvl_1234',
        startDate: '',
        workplaceId: 'wkp_1234',
        stateRegistration: 'self_managed',
      });
    },
  );
  smokeCase('workers.get:single', { operation: 'get', path: '/v1/workers/{id}' }, 'get', async () => {
    const worker = await client.workers.get('wrk_1234');
  });
  smokeCase(
    'workers.delete:single',
    { operation: 'delete', path: '/v1/workers/{id}' },
    'delete',
    async () => {
      await client.workers.delete('wrk_1234');
    },
  );
  smokeCase(
    'workers.revealSsn:single',
    { operation: 'revealSsn', path: '/v1/workers/reveal_ssn' },
    'revealSsn',
    async () => {
      const worker = await client.workers.revealSsn({ workerIds: ['wrk_khac8380c2Lm', 'wrk_q7Vm2pR9xK4c'] });
    },
  );
  smokeCase(
    'workers.list:required',
    { operation: 'list', path: '/v1/workers' },
    'list: only required params',
    async () => {
      const worker = await client.workers.list({
        limit: 'limit',
      });
    },
  );
  smokeCase(
    'workers.list:all',
    { operation: 'list', path: '/v1/workers' },
    'list: required and optional params',
    async () => {
      const worker = await client.workers.list({
        limit: 'limit',
        afterId: 'wrk_1234',
        beforeId: 'wrk_1234',
        statuses: ['draft'],
        types: ['employee'],
        workEmail: 'workEmail',
      });
    },
  );
  smokeCase(
    'workers.createEmployee:required',
    { operation: 'createEmployee', path: '/v1/workers/employee' },
    'createEmployee: only required params',
    async () => {
      const worker = await client.workers.createEmployee({
        firstName: 'Jonathan',
        lastName: 'Galt',
        position: 'Software Engineer',
        startDate: '',
        email: 'john@joinwarp.com',
        departmentId: 'dpt_1234',
        managerId: 'wrk_1234',
        workLocation: {
          type: 'office',
          workplaceId: 'wkp_1234',
        },
        compensation: {
          amount: 85000,
          per: 'hour',
        },
      });
    },
  );
  smokeCase(
    'workers.createEmployee:all',
    { operation: 'createEmployee', path: '/v1/workers/employee' },
    'createEmployee: required and optional params',
    async () => {
      const worker = await client.workers.createEmployee({
        firstName: 'Jonathan',
        lastName: 'Galt',
        position: 'Software Engineer',
        startDate: '',
        email: 'john@joinwarp.com',
        workEmail: 'john@joinwarp.com',
        requireI9: false,
        stateRegistration: 'self_managed',
        departmentId: 'dpt_1234',
        levelId: 'jlvl_1234',
        managerId: 'wrk_1234',
        stockOptions: 10000,
        workLocation: {
          type: 'office',
          workplaceId: 'wkp_1234',
        },
        compensation: {
          amount: 85000,
          per: 'hour',
        },
        paySchedule: 'weekly',
      });
    },
  );
  smokeCase(
    'workers.createContractor:required',
    { operation: 'createContractor', path: '/v1/workers/contractor' },
    'createContractor: only required params',
    async () => {
      const worker = await client.workers.createContractor({
        entityType: 'individual',
        firstName: 'Melissa',
        lastName: 'Jones',
        position: 'Design Consultant',
        startDate: '',
        email: 'john@joinwarp.com',
        departmentId: 'dpt_1234',
        managerId: 'wrk_1234',
        workCountry: 'AD',
      });
    },
  );
  smokeCase(
    'workers.createContractor:all',
    { operation: 'createContractor', path: '/v1/workers/contractor' },
    'createContractor: required and optional params',
    async () => {
      const worker = await client.workers.createContractor({
        entityType: 'individual',
        firstName: 'Melissa',
        lastName: 'Jones',
        position: 'Design Consultant',
        businessName: 'Galt Enterprises, LLC',
        scopeOfWork: 'Frontend development for the customer dashboard',
        startDate: '',
        email: 'john@joinwarp.com',
        workEmail: 'john@joinwarp.com',
        departmentId: 'dpt_1234',
        levelId: 'jlvl_1234',
        managerId: 'wrk_1234',
        workCountry: 'AD',
        compensation: {
          currency: 'USD',
          amount: 5000,
          per: 'year',
        },
        paySchedule: 'weekly',
      });
    },
  );
  smokeCase(
    'workers.invite:single',
    { operation: 'invite', path: '/v1/workers/{id}/invite' },
    'invite',
    async () => {
      const worker = await client.workers.invite('wrk_1234');
    },
  );
});
