// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource timeOff', () => {
  smokeCase(
    'timeOff.listAssignments:required',
    { operation: 'listAssignments', path: '/v1/time_off/assignments' },
    'listAssignments: only required params',
    async () => {
      const timeOff = await client.timeOff.listAssignments({
        limit: 'limit',
      });
    },
  );
  smokeCase(
    'timeOff.listAssignments:all',
    { operation: 'listAssignments', path: '/v1/time_off/assignments' },
    'listAssignments: required and optional params',
    async () => {
      const timeOff = await client.timeOff.listAssignments({
        limit: 'limit',
        afterId: 'wrkasn_1234',
        beforeId: 'wrkasn_1234',
        policyIds: ['top_1234'],
        workerIds: ['wrk_1234'],
      });
    },
  );
  smokeCase(
    'timeOff.listBalances:required',
    { operation: 'listBalances', path: '/v1/time_off/balances' },
    'listBalances: only required params',
    async () => {
      const timeOff = await client.timeOff.listBalances({
        limit: 'limit',
      });
    },
  );
  smokeCase(
    'timeOff.listBalances:all',
    { operation: 'listBalances', path: '/v1/time_off/balances' },
    'listBalances: required and optional params',
    async () => {
      const timeOff = await client.timeOff.listBalances({
        limit: 'limit',
        afterId: 'wrkasn_1234',
        beforeId: 'wrkasn_1234',
        policyIds: ['top_1234'],
        workerIds: ['wrk_1234'],
        startDate: 'startDate',
        endDate: 'endDate',
      });
    },
  );
  smokeCase(
    'timeOff.listRequests:required',
    { operation: 'listRequests', path: '/v1/time_off/requests' },
    'listRequests: only required params',
    async () => {
      const timeOff = await client.timeOff.listRequests({
        limit: 'limit',
      });
    },
  );
  smokeCase(
    'timeOff.listRequests:all',
    { operation: 'listRequests', path: '/v1/time_off/requests' },
    'listRequests: required and optional params',
    async () => {
      const timeOff = await client.timeOff.listRequests({
        limit: 'limit',
        afterId: 'afterId',
        beforeId: 'beforeId',
        statuses: ['pending'],
        policyIds: ['top_1234'],
        workerIds: ['wrk_1234'],
        startsOnOrAfter: 'startsOnOrAfter',
        startsBefore: 'startsBefore',
        endsOnOrAfter: 'endsOnOrAfter',
        endsBefore: 'endsBefore',
      });
    },
  );
});
