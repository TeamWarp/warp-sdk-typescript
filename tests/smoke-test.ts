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
import { writeFileSync } from 'node:fs'

// The default export is the client class. The client reads auth and the base URL from the
// environment, so it needs no constructor options to point at a server.
import WarpAPI from "@warp/warp-api"

// One shared client runs every case.
const client = new WarpAPI()

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string
  method: string
  path: string
  status: 'passed' | 'failed'
  durationMs: number
  error?: string
}

// One entry per generated operation. `run` performs the real SDK call; the other fields are
// metadata used for filtering and reporting. This list is generated, so it stays in sync with
// the SDK surface.
const cases: { operation: string; method: string; path: string; run: () => Promise<unknown> }[] = [
  {
    operation: "list",
    method: "GET",
    path: "/v1/custom-worker-fields",
    run: async () => {
      const list = await client.customWorkerFields.list();
    },
  },

  {
    operation: "create",
    method: "POST",
    path: "/v1/custom-worker-fields",
    run: async () => {
      const create = await client.customWorkerFields.create({
        name: "",
        type: "text",
        category: "info",
      });
    },
  },

  {
    operation: "retrieve",
    method: "GET",
    path: "/v1/custom-worker-fields/{id}",
    run: async () => {
      const retrieve = await client.customWorkerFields.retrieve("cf_1234");
    },
  },

  {
    operation: "update",
    method: "PATCH",
    path: "/v1/custom-worker-fields/{id}",
    run: async () => {
      const update = await client.customWorkerFields.update("cf_1234", {});
    },
  },

  {
    operation: "archive",
    method: "POST",
    path: "/v1/custom-worker-fields/{id}/archive",
    run: async () => {
      const archive = await client.customWorkerFields.archive("cf_1234");
    },
  },

  {
    operation: "createOption",
    method: "POST",
    path: "/v1/custom-worker-fields/{id}/options",
    run: async () => {
      const createOption = await client.customWorkerFields.createOption("cf_1234", {
        label: "x",
        value: "x",
      });
    },
  },

  {
    operation: "updateOption",
    method: "PATCH",
    path: "/v1/custom-worker-field-options/{id}",
    run: async () => {
      const updateOption = await client.customWorkerFields.updateOption("cfo_1234", {});
    },
  },

  {
    operation: "deleteOption",
    method: "DELETE",
    path: "/v1/custom-worker-field-options/{id}",
    run: async () => {
      await client.customWorkerFields.deleteOption("cfo_1234");
    },
  },

  {
    operation: "archiveOption",
    method: "POST",
    path: "/v1/custom-worker-field-options/{id}/archive",
    run: async () => {
      const archiveOption = await client.customWorkerFields.archiveOption("cfo_1234");
    },
  },

  {
    operation: "listValues",
    method: "GET",
    path: "/v1/worker-custom-field-values",
    run: async () => {
      const listValues = await client.customWorkerFields.listValues();
    },
  },

  {
    operation: "upsertValue",
    method: "PUT",
    path: "/v1/worker-custom-field-values",
    run: async () => {
      const upsertValue = await client.customWorkerFields.upsertValue({
        workerId: "wrk_1234",
        fieldId: "cf_1234",
        value: {
          type: "text",
          value: "",
        },
      });
    },
  },

  {
    operation: "clearValue",
    method: "DELETE",
    path: "/v1/worker-custom-field-values",
    run: async () => {
      await client.customWorkerFields.clearValue({
        workerId: "wrk_1234",
        fieldId: "cf_1234",
      });
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/departments",
    run: async () => {
      const list = await client.departments.list();
    },
  },

  {
    operation: "create",
    method: "POST",
    path: "/v1/departments",
    run: async () => {
      const create = await client.departments.create({
        name: "",
      });
    },
  },

  {
    operation: "update",
    method: "PATCH",
    path: "/v1/departments/{id}",
    run: async () => {
      const update = await client.departments.update("dpt_1234", {});
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/offers",
    run: async () => {
      const list = await client.offers.list();
    },
  },

  {
    operation: "create",
    method: "POST",
    path: "/v1/offers",
    run: async () => {
      const create = await client.offers.create({
        candidate: {
          firstName: "x",
          lastName: "x",
          email: "john@joinwarp.com",
        },
        position: {
          title: "x",
          startDate: "2000-01-01",
        },
        workerType: "employee",
        compensation: {
          payBasis: "year",
          payCurrency: "USD",
          payRate: 0,
        },
      });
    },
  },

  {
    operation: "void",
    method: "POST",
    path: "/v1/offers/{id}/void",
    run: async () => {
      const void_ = await client.offers.void("offr_1234");
    },
  },

  {
    operation: "extendDeadline",
    method: "POST",
    path: "/v1/offers/{id}/extend-deadline",
    run: async () => {
      const extendDeadline = await client.offers.extendDeadline("offr_1234", {
        expirationTime: "",
      });
    },
  },

  {
    operation: "resend",
    method: "POST",
    path: "/v1/offers/{id}/resend",
    run: async () => {
      const resend = await client.offers.resend("offr_1234");
    },
  },

  {
    operation: "listAssignments",
    method: "GET",
    path: "/v1/time_off/assignments",
    run: async () => {
      const listAssignments = await client.timeOff.listAssignments();
    },
  },

  {
    operation: "listBalances",
    method: "GET",
    path: "/v1/time_off/balances",
    run: async () => {
      const listBalances = await client.timeOff.listBalances();
    },
  },

  {
    operation: "listRequests",
    method: "GET",
    path: "/v1/time_off/requests",
    run: async () => {
      const listRequests = await client.timeOff.listRequests();
    },
  },

  {
    operation: "timeOffGet",
    method: "GET",
    path: "/v1/time_off/policies",
    run: async () => {
      const timeOffGet = await client.timeOff.policies.timeOffGet();
    },
  },

  {
    operation: "timeOffGet2",
    method: "GET",
    path: "/v1/time_off/policies/{id}",
    run: async () => {
      const timeOffGet2 = await client.timeOff.policies.timeOffGet2("top_1234");
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/workers",
    run: async () => {
      const list = await client.workers.list();
    },
  },

  {
    operation: "retrieve",
    method: "GET",
    path: "/v1/workers/{id}",
    run: async () => {
      const retrieve = await client.workers.retrieve("wrk_1234");
    },
  },

  {
    operation: "delete",
    method: "DELETE",
    path: "/v1/workers/{id}",
    run: async () => {
      await client.workers.delete("wrk_1234");
    },
  },

  {
    operation: "createEmployee",
    method: "POST",
    path: "/v1/workers/employee",
    run: async () => {
      const createEmployee = await client.workers.createEmployee({
        firstName: "",
        lastName: "",
        position: "",
        startDate: "2000-01-01",
        email: "john@joinwarp.com",
        departmentId: "dpt_1234",
        managerId: "wrk_1234",
        workLocation: {
          type: "office",
          workplaceId: "wkp_1234",
        },
        compensation: {
          amount: 0,
          per: "hour",
        },
      });
    },
  },

  {
    operation: "createContractor",
    method: "POST",
    path: "/v1/workers/contractor",
    run: async () => {
      const createContractor = await client.workers.createContractor({
        entityType: "individual",
        firstName: "",
        lastName: "",
        position: "",
        startDate: "2000-01-01",
        email: "john@joinwarp.com",
        departmentId: "dpt_1234",
        managerId: "wrk_1234",
        workCountry: "AD",
      });
    },
  },

  {
    operation: "invite",
    method: "POST",
    path: "/v1/workers/{id}/invite",
    run: async () => {
      const invite = await client.workers.invite("wrk_1234");
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/workplaces",
    run: async () => {
      const list = await client.workplaces.list();
    },
  },

  {
    operation: "create",
    method: "POST",
    path: "/v1/workplaces",
    run: async () => {
      const create = await client.workplaces.create({
        name: "",
        type: "remote",
        address: {
          line1: "x",
          city: "",
          postalCode: "",
          state: "AL",
          country: "US",
        },
      });
    },
  },

  {
    operation: "update",
    method: "PATCH",
    path: "/v1/workplaces/{id}",
    run: async () => {
      const update = await client.workplaces.update("wkp_1234", {});
    },
  },

]

const main = async (): Promise<void> => {
  // SCALAR_SMOKE_FILTER (comma-separated) keeps only cases whose operation name or path matches
  // one of the needles, so a caller can smoke-test a subset. With no filter, every case runs.
  const filter = process.env['SCALAR_SMOKE_FILTER']
  const needles = filter ? filter.split(',').map((needle) => needle.trim()).filter(Boolean) : []
  const selected = needles.length > 0 ? cases.filter((testCase) => needles.some((needle) => testCase.operation.includes(needle) || testCase.path.includes(needle))) : cases

  // Run every selected case concurrently. Promise.allSettled means one failing operation never
  // blocks the others, so a single run reports the status of every endpoint.
  const settled = await Promise.allSettled(
    selected.map(async (testCase): Promise<SmokeResult> => {
      const startedAt = Date.now()
      try {
        await testCase.run()
        return { operation: testCase.operation, method: testCase.method, path: testCase.path, status: 'passed', durationMs: Date.now() - startedAt }
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error)
        return { operation: testCase.operation, method: testCase.method, path: testCase.path, status: 'failed', durationMs: Date.now() - startedAt, error: message }
      }
    }),
  )

  // allSettled never rejects, but defensively map any rejected slot to a failed result.
  const results: SmokeResult[] = settled.map((result) => (result.status === 'fulfilled' ? result.value : { operation: 'unknown', method: '', path: '', status: 'failed', durationMs: 0, error: String(result.reason) }))
  const failed = results.filter((result) => result.status === 'failed')

  // With SCALAR_SMOKE_REPORT set, write a machine-readable report; otherwise print a table.
  const reportPath = process.env['SCALAR_SMOKE_REPORT']
  if (reportPath) {
    writeFileSync(reportPath, JSON.stringify({ total: results.length, failed: failed.length, results }))
  } else {
    for (const result of results) {
      if (result.status === 'passed') console.log(`\u2714 ${result.operation} (${result.method} ${result.path}) ${result.durationMs}ms`)
      else console.error(`\u2718 ${result.operation} (${result.method} ${result.path})\n${result.error ?? ''}`)
    }
    if (results.length === 0) {
      console.error('No code samples ran (empty SDK or a SCALAR_SMOKE_FILTER that matched nothing).')
    } else {
      console.log(`\n${results.length - failed.length}/${results.length} samples passed`)
    }
  }

  // An empty run (no operations, or a filter that matched nothing) is a failure, not a vacuous pass.
  if (failed.length > 0 || results.length === 0) process.exitCode = 1
}

void main()
