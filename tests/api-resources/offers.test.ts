// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource offers', () => {
  smokeCase(
    'offers.list:required',
    { operation: 'list', path: '/v1/offers' },
    'list: only required params',
    async () => {
      const offer = await client.offers.list({
        limit: 'limit',
      });
    },
  );
  smokeCase(
    'offers.list:all',
    { operation: 'list', path: '/v1/offers' },
    'list: required and optional params',
    async () => {
      const offer = await client.offers.list({
        limit: 'limit',
        afterId: 'offr_1234',
        beforeId: 'offr_1234',
        statuses: ['draft'],
        workerTypes: ['employee'],
        candidateEmail: 'john@joinwarp.com',
      });
    },
  );
  smokeCase(
    'offers.create:required',
    { operation: 'create', path: '/v1/offers' },
    'create: only required params',
    async () => {
      const offer = await client.offers.create({
        candidate: {
          firstName: 'x',
          lastName: 'x',
          email: 'john@joinwarp.com',
        },
        position: {
          title: 'x',
          startDate: '',
        },
        workerType: 'employee',
        compensation: {
          payBasis: 'year',
          payCurrency: 'USD',
          payRate: 1,
        },
      });
    },
  );
  smokeCase(
    'offers.create:all',
    { operation: 'create', path: '/v1/offers' },
    'create: required and optional params',
    async () => {
      const offer = await client.offers.create({
        candidate: {
          firstName: 'x',
          lastName: 'x',
          email: 'john@joinwarp.com',
        },
        position: {
          title: 'x',
          startDate: '',
        },
        departmentId: 'dpt_1234',
        workplaceId: 'wkp_1234',
        managerId: 'wrk_1234',
        levelId: 'jlvl_1234',
        workerType: 'employee',
        compensation: {
          payBasis: 'year',
          payCurrency: 'USD',
          payRate: 1,
        },
        expirationTime: '',
        backgroundCheckWorkLocation: {
          country: '',
          state: '',
          city: '',
        },
      });
    },
  );
  smokeCase(
    'offers.void:required',
    { operation: 'void', path: '/v1/offers/{id}/void' },
    'void: only required params',
    async () => {
      const offer = await client.offers.void('offr_1234', {
        voidReason: 'candidate_declined',
      });
    },
  );
  smokeCase(
    'offers.void:all',
    { operation: 'void', path: '/v1/offers/{id}/void' },
    'void: required and optional params',
    async () => {
      const offer = await client.offers.void('offr_1234', {
        voidReason: 'candidate_declined',
        voidNotes: '',
      });
    },
  );
  smokeCase(
    'offers.extendDeadline:single',
    { operation: 'extendDeadline', path: '/v1/offers/{id}/extend-deadline' },
    'extendDeadline',
    async () => {
      const offer = await client.offers.extendDeadline('offr_1234', {
        expirationTime: '',
      });
    },
  );
  smokeCase(
    'offers.resend:single',
    { operation: 'resend', path: '/v1/offers/{id}/resend' },
    'resend',
    async () => {
      const offer = await client.offers.resend('offr_1234');
    },
  );
});
