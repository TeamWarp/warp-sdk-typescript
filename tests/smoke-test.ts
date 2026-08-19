// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke test: calls every generated operation once to confirm the SDK can reach each endpoint.
// Run it from this repo with `bun tests/smoke-test.ts`. Each case below calls one SDK method
// exactly the way the SDK exposes it (positional params, request body, pagination, streaming).
//
// Two environment variables tune a run:
//   - SCALAR_SMOKE_FILTER: comma-separated needles; only operations whose name or path contains
//     one of them run, so you can smoke-test a subset without editing this file.
//   - SCALAR_SMOKE_REPORT: a file path; when set, the run writes a JSON report there instead of
//     printing a table. The generator uses this to collect per-operation results.
import { writeFileSync } from 'node:fs';

// The package exports the client class. The client reads auth and the base URL from the
// environment, so it needs no constructor options to point at a server.
import Warp from 'warp-hr';

// One shared client runs every case.
const client = new Warp();

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string;
  method: string;
  path: string;
  status: 'passed' | 'failed';
  durationMs: number;
  error?: string;
};

// One entry per generated operation. `run` performs the real SDK call; the other fields are
// metadata used for filtering and reporting. This list is generated, so it stays in sync with
// the SDK surface.
const cases: { operation: string; method: string; path: string; run: () => Promise<unknown> }[] = [
  {
    operation: 'list',
    method: 'GET',
    path: '/v1/benefits/health_plans',
    run: async () => {
      const list = await client.benefits.healthPlans.list({
        limit: 'limit',
        statuses: ['active'],
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/benefits/health_plans/{id}',
    run: async () => {
      const get_ = await client.benefits.healthPlans.get('id');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/benefits/retirement_plans',
    run: async () => {
      const list = await client.benefits.retirementPlans.list({
        limit: 'limit',
        statuses: ['active'],
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/benefits/retirement_plans/{id}',
    run: async () => {
      const get_ = await client.benefits.retirementPlans.get('id');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/benefits/deductions',
    run: async () => {
      const list = await client.benefits.deductions.list({
        limit: 'limit',
        statuses: ['active'],
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/benefits/deductions/{id}',
    run: async () => {
      const retrieve = await client.benefits.deductions.retrieve('id');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/custom_fields',
    run: async () => {
      const list = await client.customFields.list();
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/custom_fields',
    run: async () => {
      const create = await client.customFields.create({
        name: {},
        type: 'text',
        category: 'info',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/custom_fields/{id}',
    run: async () => {
      const get_ = await client.customFields.get('id');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/custom_fields/{id}',
    run: async () => {
      const update = await client.customFields.update('id', {});
    },
  },

  {
    operation: 'archive',
    method: 'POST',
    path: '/v1/custom_fields/{id}/archive',
    run: async () => {
      const archive = await client.customFields.archive('id');
    },
  },

  {
    operation: 'createOption',
    method: 'POST',
    path: '/v1/custom_fields/{id}/options',
    run: async () => {
      const createOption = await client.customFields.createOption('id', {
        label: {},
        value: {},
      });
    },
  },

  {
    operation: 'updateOption',
    method: 'PATCH',
    path: '/v1/custom_field_options/{id}',
    run: async () => {
      const updateOption = await client.customFields.updateOption('id', {});
    },
  },

  {
    operation: 'deleteOption',
    method: 'DELETE',
    path: '/v1/custom_field_options/{id}',
    run: async () => {
      await client.customFields.deleteOption('id');
    },
  },

  {
    operation: 'archiveOption',
    method: 'POST',
    path: '/v1/custom_field_options/{id}/archive',
    run: async () => {
      const archiveOption = await client.customFields.archiveOption('id');
    },
  },

  {
    operation: 'listValues',
    method: 'GET',
    path: '/v1/custom_field_values',
    run: async () => {
      const listValues = await client.customFields.listValues();
    },
  },

  {
    operation: 'upsertValue',
    method: 'PUT',
    path: '/v1/custom_field_values',
    run: async () => {
      const upsertValue = await client.customFields.upsertValue({
        workerId: {},
        fieldId: {},
        value: {
          type: 'text',
          value: '',
        },
      });
    },
  },

  {
    operation: 'clearValue',
    method: 'DELETE',
    path: '/v1/custom_field_values',
    run: async () => {
      await client.customFields.clearValue({
        workerId: {},
        fieldId: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/departments',
    run: async () => {
      const list = await client.departments.list({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/departments',
    run: async () => {
      const create = await client.departments.create({
        name: {},
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/departments/{id}',
    run: async () => {
      const update = await client.departments.update('id', {});
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/offers',
    run: async () => {
      const list = await client.offers.list({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/offers',
    run: async () => {
      const create = await client.offers.create({
        candidate: {
          firstName: {},
          lastName: {},
          email: {},
        },
        position: {
          title: {},
          startDate: {},
        },
        workerType: 'employee',
        compensation: {
          payBasis: 'year',
          payCurrency: 'USD',
          payRate: {},
        },
      });
    },
  },

  {
    operation: 'void',
    method: 'POST',
    path: '/v1/offers/{id}/void',
    run: async () => {
      const void_ = await client.offers.void('id');
    },
  },

  {
    operation: 'extendDeadline',
    method: 'POST',
    path: '/v1/offers/{id}/extend-deadline',
    run: async () => {
      const extendDeadline = await client.offers.extendDeadline('id', {
        expirationTime: '',
      });
    },
  },

  {
    operation: 'resend',
    method: 'POST',
    path: '/v1/offers/{id}/resend',
    run: async () => {
      const resend = await client.offers.resend('id');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/pay_rates',
    run: async () => {
      const list = await client.payRates.list({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/pay_rates/{id}',
    run: async () => {
      const get_ = await client.payRates.get('id');
    },
  },

  {
    operation: 'listAssignments',
    method: 'GET',
    path: '/v1/time_off/assignments',
    run: async () => {
      const listAssignments = await client.timeOff.listAssignments({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'listBalances',
    method: 'GET',
    path: '/v1/time_off/balances',
    run: async () => {
      const listBalances = await client.timeOff.listBalances({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'listRequests',
    method: 'GET',
    path: '/v1/time_off/requests',
    run: async () => {
      const listRequests = await client.timeOff.listRequests({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/time_off/policies',
    run: async () => {
      const list = await client.timeOff.policies.list({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/time_off/policies/{id}',
    run: async () => {
      const get_ = await client.timeOff.policies.get('id');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/workers',
    run: async () => {
      const list = await client.workers.list({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/workers/{id}',
    run: async () => {
      const get_ = await client.workers.get('id');
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/workers/{id}',
    run: async () => {
      await client.workers.delete('id');
    },
  },

  {
    operation: 'createEmployee',
    method: 'POST',
    path: '/v1/workers/employee',
    run: async () => {
      const createEmployee = await client.workers.createEmployee({
        firstName: {},
        lastName: {},
        position: {},
        startDate: {},
        email: {},
        departmentId: {},
        managerId: {},
        workLocation: {
          type: 'office',
          workplaceId: {},
        },
        compensation: {
          amount: {},
          per: 'hour',
        },
      });
    },
  },

  {
    operation: 'createContractor',
    method: 'POST',
    path: '/v1/workers/contractor',
    run: async () => {
      const createContractor = await client.workers.createContractor({
        entityType: 'individual',
        firstName: {},
        lastName: {},
        position: {},
        startDate: {},
        email: {},
        departmentId: {},
        managerId: {},
        workCountry: 'AD',
      });
    },
  },

  {
    operation: 'invite',
    method: 'POST',
    path: '/v1/workers/{id}/invite',
    run: async () => {
      const invite = await client.workers.invite('id');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/workplaces',
    run: async () => {
      const list = await client.workplaces.list({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/workplaces',
    run: async () => {
      const create = await client.workplaces.create({
        name: {},
        type: 'remote',
        address: {
          line1: {},
          city: '',
          postalCode: '',
          state: 'AL',
          country: 'US',
        },
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/workplaces/{id}',
    run: async () => {
      const update = await client.workplaces.update('id', {});
    },
  },
];

const main = async (): Promise<void> => {
  // SCALAR_SMOKE_FILTER (comma-separated) keeps only cases whose operation name or path matches
  // one of the needles, so a caller can smoke-test a subset. With no filter, every case runs.
  const filter = process.env['SCALAR_SMOKE_FILTER'];
  const needles = filter
    ? filter
        .split(',')
        .map((needle) => needle.trim())
        .filter(Boolean)
    : [];
  const selected =
    needles.length > 0
      ? cases.filter((testCase) =>
          needles.some((needle) => testCase.operation.includes(needle) || testCase.path.includes(needle)),
        )
      : cases;

  // Run every selected case concurrently. Promise.allSettled means one failing operation never
  // blocks the others, so a single run reports the status of every endpoint.
  const settled = await Promise.allSettled(
    selected.map(async (testCase): Promise<SmokeResult> => {
      const startedAt = Date.now();
      try {
        await testCase.run();
        return {
          operation: testCase.operation,
          method: testCase.method,
          path: testCase.path,
          status: 'passed',
          durationMs: Date.now() - startedAt,
        };
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error);
        return {
          operation: testCase.operation,
          method: testCase.method,
          path: testCase.path,
          status: 'failed',
          durationMs: Date.now() - startedAt,
          error: message,
        };
      }
    }),
  );

  // allSettled never rejects, but defensively map any rejected slot to a failed result.
  const results: SmokeResult[] = settled.map((result) =>
    result.status === 'fulfilled'
      ? result.value
      : {
          operation: 'unknown',
          method: '',
          path: '',
          status: 'failed',
          durationMs: 0,
          error: String(result.reason),
        },
  );
  const failed = results.filter((result) => result.status === 'failed');

  // With SCALAR_SMOKE_REPORT set, write a machine-readable report; otherwise print a table.
  const reportPath = process.env['SCALAR_SMOKE_REPORT'];
  if (reportPath) {
    writeFileSync(reportPath, JSON.stringify({ total: results.length, failed: failed.length, results }));
  } else {
    for (const result of results) {
      if (result.status === 'passed')
        console.log(`\u2714 ${result.operation} (${result.method} ${result.path}) ${result.durationMs}ms`);
      else
        console.error(`\u2718 ${result.operation} (${result.method} ${result.path})\n${result.error ?? ''}`);
    }
    if (results.length === 0) {
      console.error('No code samples ran (empty SDK or a SCALAR_SMOKE_FILTER that matched nothing).');
    } else {
      console.log(`\n${results.length - failed.length}/${results.length} samples passed`);
    }
  }

  // An empty run (no operations, or a filter that matched nothing) is a failure, not a vacuous pass.
  if (failed.length > 0 || results.length === 0) process.exitCode = 1;
};

void main();
