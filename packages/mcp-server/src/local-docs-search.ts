// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'list_assignments',
    endpoint: '/v1/time_off/assignments',
    httpMethod: 'get',
    summary: '',
    description:
      'Time off assignments are mappings between workers and time off policies. Useful for finding out which policies a worker is assigned to, or which workers are assigned to a given policy.',
    stainlessPath: '(resource) time_off > (method) list_assignments',
    qualified: 'client.timeOff.listAssignments',
    params: [
      'afterId?: string;',
      'beforeId?: string;',
      'limit?: string;',
      'policyIds?: string[];',
      'workerIds?: string[];',
    ],
    response: '{ id: string; assignedAt: string; policyId: string; workerId: string; }',
    markdown:
      "## list_assignments\n\n`client.timeOff.listAssignments(afterId?: string, beforeId?: string, limit?: string, policyIds?: string[], workerIds?: string[]): { id: string; assignedAt: string; policyId: string; workerId: string; }`\n\n**get** `/v1/time_off/assignments`\n\nTime off assignments are mappings between workers and time off policies. Useful for finding out which policies a worker is assigned to, or which workers are assigned to a given policy.\n\n### Parameters\n\n- `afterId?: string`\n\n- `beforeId?: string`\n\n- `limit?: string`\n  a number less than or equal to 100\n\n- `policyIds?: string[]`\n\n- `workerIds?: string[]`\n\n### Returns\n\n- `{ id: string; assignedAt: string; policyId: string; workerId: string; }`\n\n  - `id: string`\n  - `assignedAt: string`\n  - `policyId: string`\n  - `workerId: string`\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\n// Automatically fetches more pages as needed.\nfor await (const timeOffListAssignmentsResponse of client.timeOff.listAssignments()) {\n  console.log(timeOffListAssignmentsResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'time_off list_assignments',
        example: "warp-hr time-off list-assignments \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.TimeOff.ListAssignments',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.TimeOff.ListAssignments(context.TODO(), warphr.TimeOffListAssignmentsParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.joinwarp.com/v1/time_off/assignments \\\n    -H "x-api-key: $WARP_API_KEY"',
      },
      typescript: {
        method: 'client.timeOff.listAssignments',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const timeOffListAssignmentsResponse of client.timeOff.listAssignments()) {\n  console.log(timeOffListAssignmentsResponse.id);\n}",
      },
    },
  },
  {
    name: 'list_balances',
    endpoint: '/v1/time_off/balances',
    httpMethod: 'get',
    summary: '',
    description: 'Get worker remaining time-off balances.',
    stainlessPath: '(resource) time_off > (method) list_balances',
    qualified: 'client.timeOff.listBalances',
    params: [
      'afterId?: string;',
      'beforeId?: string;',
      'endDate?: string;',
      'limit?: string;',
      'policyIds?: string[];',
      'startDate?: string;',
      'workerIds?: string[];',
    ],
    response:
      '{ id: string; accruedLocked: number; accruedUnlocked: number; available: number; holds: number; legacyWorkerId: string; policyId: string; used: number; }',
    markdown:
      "## list_balances\n\n`client.timeOff.listBalances(afterId?: string, beforeId?: string, endDate?: string, limit?: string, policyIds?: string[], startDate?: string, workerIds?: string[]): { id: string; accruedLocked: number; accruedUnlocked: number; available: number; holds: number; legacyWorkerId: string; policyId: string; used: number; }`\n\n**get** `/v1/time_off/balances`\n\nGet worker remaining time-off balances.\n\n### Parameters\n\n- `afterId?: string`\n\n- `beforeId?: string`\n\n- `endDate?: string`\n  a string to be decoded into a Date\n\n- `limit?: string`\n  a number less than or equal to 100\n\n- `policyIds?: string[]`\n\n- `startDate?: string`\n  a string to be decoded into a Date\n\n- `workerIds?: string[]`\n\n### Returns\n\n- `{ id: string; accruedLocked: number; accruedUnlocked: number; available: number; holds: number; legacyWorkerId: string; policyId: string; used: number; }`\n\n  - `id: string`\n  - `accruedLocked: number`\n  - `accruedUnlocked: number`\n  - `available: number`\n  - `holds: number`\n  - `legacyWorkerId: string`\n  - `policyId: string`\n  - `used: number`\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\n// Automatically fetches more pages as needed.\nfor await (const timeOffListBalancesResponse of client.timeOff.listBalances()) {\n  console.log(timeOffListBalancesResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'time_off list_balances',
        example: "warp-hr time-off list-balances \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.TimeOff.ListBalances',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.TimeOff.ListBalances(context.TODO(), warphr.TimeOffListBalancesParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://api.joinwarp.com/v1/time_off/balances \\\n    -H "x-api-key: $WARP_API_KEY"',
      },
      typescript: {
        method: 'client.timeOff.listBalances',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const timeOffListBalancesResponse of client.timeOff.listBalances()) {\n  console.log(timeOffListBalancesResponse.id);\n}",
      },
    },
  },
  {
    name: 'list_requests',
    endpoint: '/v1/time_off/requests',
    httpMethod: 'get',
    summary: '',
    description: 'Get the time off requests that workers in your company have made.',
    stainlessPath: '(resource) time_off > (method) list_requests',
    qualified: 'client.timeOff.listRequests',
    params: [
      'afterId?: string;',
      'beforeId?: string;',
      'endsBefore?: string;',
      'endsOnOrAfter?: string;',
      'limit?: string;',
      'policyIds?: string[];',
      'startsBefore?: string;',
      'startsOnOrAfter?: string;',
      "statuses?: 'pending' | 'approved' | 'denied'[];",
      'workerIds?: string[];',
    ],
    response:
      "{ id: string; createdAt: string; endAt: string; reason: string; requestedMinutes: number; startAt: string; status: 'pending' | 'approved' | 'denied'; timeOffPolicyId: string; timeZone: string; workerId: string; }",
    markdown:
      "## list_requests\n\n`client.timeOff.listRequests(afterId?: string, beforeId?: string, endsBefore?: string, endsOnOrAfter?: string, limit?: string, policyIds?: string[], startsBefore?: string, startsOnOrAfter?: string, statuses?: 'pending' | 'approved' | 'denied'[], workerIds?: string[]): { id: string; createdAt: string; endAt: string; reason: string; requestedMinutes: number; startAt: string; status: 'pending' | 'approved' | 'denied'; timeOffPolicyId: string; timeZone: string; workerId: string; }`\n\n**get** `/v1/time_off/requests`\n\nGet the time off requests that workers in your company have made.\n\n### Parameters\n\n- `afterId?: string`\n\n- `beforeId?: string`\n\n- `endsBefore?: string`\n  a string to be decoded into a Date\n\n- `endsOnOrAfter?: string`\n  a string to be decoded into a Date\n\n- `limit?: string`\n  a number less than or equal to 100\n\n- `policyIds?: string[]`\n\n- `startsBefore?: string`\n  a string to be decoded into a Date\n\n- `startsOnOrAfter?: string`\n  a string to be decoded into a Date\n\n- `statuses?: 'pending' | 'approved' | 'denied'[]`\n\n- `workerIds?: string[]`\n\n### Returns\n\n- `{ id: string; createdAt: string; endAt: string; reason: string; requestedMinutes: number; startAt: string; status: 'pending' | 'approved' | 'denied'; timeOffPolicyId: string; timeZone: string; workerId: string; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `endAt: string`\n  - `reason: string`\n  - `requestedMinutes: number`\n  - `startAt: string`\n  - `status: 'pending' | 'approved' | 'denied'`\n  - `timeOffPolicyId: string`\n  - `timeZone: string`\n  - `workerId: string`\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\n// Automatically fetches more pages as needed.\nfor await (const timeOffListRequestsResponse of client.timeOff.listRequests()) {\n  console.log(timeOffListRequestsResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'time_off list_requests',
        example: "warp-hr time-off list-requests \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.TimeOff.ListRequests',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.TimeOff.ListRequests(context.TODO(), warphr.TimeOffListRequestsParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://api.joinwarp.com/v1/time_off/requests \\\n    -H "x-api-key: $WARP_API_KEY"',
      },
      typescript: {
        method: 'client.timeOff.listRequests',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const timeOffListRequestsResponse of client.timeOff.listRequests()) {\n  console.log(timeOffListRequestsResponse.id);\n}",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/time_off/policies',
    httpMethod: 'get',
    summary: '',
    description: 'Get the time off policies for your company',
    stainlessPath: '(resource) time_off.policies > (method) list',
    qualified: 'client.timeOff.policies.list',
    params: ['afterId?: string;', 'beforeId?: string;', 'limit?: string;'],
    response:
      "{ id: string; description: string; hoursWorkedPerChunk: number; isUnlimited: boolean; minutesPerChunk: number; minutesPerPeriod: number; name: string; paid: boolean; schedule: 'per_hour_worked' | 'monthly' | 'yearly' | 'unlimited'; timeOffTypeId: string; timeOffTypeName: string; unit: 'hour' | 'day'; }",
    markdown:
      "## list\n\n`client.timeOff.policies.list(afterId?: string, beforeId?: string, limit?: string): { id: string; description: string; hoursWorkedPerChunk: number; isUnlimited: boolean; minutesPerChunk: number; minutesPerPeriod: number; name: string; paid: boolean; schedule: 'per_hour_worked' | 'monthly' | 'yearly' | 'unlimited'; timeOffTypeId: string; timeOffTypeName: string; unit: 'hour' | 'day'; }`\n\n**get** `/v1/time_off/policies`\n\nGet the time off policies for your company\n\n### Parameters\n\n- `afterId?: string`\n  a string starting with \"top_\"\n\n- `beforeId?: string`\n  a string starting with \"top_\"\n\n- `limit?: string`\n  a number less than or equal to 100\n\n### Returns\n\n- `{ id: string; description: string; hoursWorkedPerChunk: number; isUnlimited: boolean; minutesPerChunk: number; minutesPerPeriod: number; name: string; paid: boolean; schedule: 'per_hour_worked' | 'monthly' | 'yearly' | 'unlimited'; timeOffTypeId: string; timeOffTypeName: string; unit: 'hour' | 'day'; }`\n\n  - `id: string`\n  - `description: string`\n  - `hoursWorkedPerChunk: number`\n  - `isUnlimited: boolean`\n  - `minutesPerChunk: number`\n  - `minutesPerPeriod: number`\n  - `name: string`\n  - `paid: boolean`\n  - `schedule: 'per_hour_worked' | 'monthly' | 'yearly' | 'unlimited'`\n  - `timeOffTypeId: string`\n  - `timeOffTypeName: string`\n  - `unit: 'hour' | 'day'`\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\n// Automatically fetches more pages as needed.\nfor await (const policyListResponse of client.timeOff.policies.list()) {\n  console.log(policyListResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'policies list',
        example: "warp-hr time-off:policies list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.TimeOff.Policies.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.TimeOff.Policies.List(context.TODO(), warphr.TimeOffPolicyListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://api.joinwarp.com/v1/time_off/policies \\\n    -H "x-api-key: $WARP_API_KEY"',
      },
      typescript: {
        method: 'client.timeOff.policies.list',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const policyListResponse of client.timeOff.policies.list()) {\n  console.log(policyListResponse.id);\n}",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/time_off/policies/{id}',
    httpMethod: 'get',
    summary: '',
    description: 'Get a specific time off policy by id',
    stainlessPath: '(resource) time_off.policies > (method) retrieve',
    qualified: 'client.timeOff.policies.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; description: string; hoursWorkedPerChunk: number; isUnlimited: boolean; minutesPerChunk: number; minutesPerPeriod: number; name: string; paid: boolean; schedule: 'per_hour_worked' | 'monthly' | 'yearly' | 'unlimited'; timeOffTypeId: string; timeOffTypeName: string; unit: 'hour' | 'day'; }",
    markdown:
      "## retrieve\n\n`client.timeOff.policies.retrieve(id: string): { id: string; description: string; hoursWorkedPerChunk: number; isUnlimited: boolean; minutesPerChunk: number; minutesPerPeriod: number; name: string; paid: boolean; schedule: 'per_hour_worked' | 'monthly' | 'yearly' | 'unlimited'; timeOffTypeId: string; timeOffTypeName: string; unit: 'hour' | 'day'; }`\n\n**get** `/v1/time_off/policies/{id}`\n\nGet a specific time off policy by id\n\n### Parameters\n\n- `id: string`\n  a string starting with \"top_\"\n\n### Returns\n\n- `{ id: string; description: string; hoursWorkedPerChunk: number; isUnlimited: boolean; minutesPerChunk: number; minutesPerPeriod: number; name: string; paid: boolean; schedule: 'per_hour_worked' | 'monthly' | 'yearly' | 'unlimited'; timeOffTypeId: string; timeOffTypeName: string; unit: 'hour' | 'day'; }`\n\n  - `id: string`\n  - `description: string`\n  - `hoursWorkedPerChunk: number`\n  - `isUnlimited: boolean`\n  - `minutesPerChunk: number`\n  - `minutesPerPeriod: number`\n  - `name: string`\n  - `paid: boolean`\n  - `schedule: 'per_hour_worked' | 'monthly' | 'yearly' | 'unlimited'`\n  - `timeOffTypeId: string`\n  - `timeOffTypeName: string`\n  - `unit: 'hour' | 'day'`\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\nconst policy = await client.timeOff.policies.retrieve('top_1234');\n\nconsole.log(policy);\n```",
    perLanguage: {
      cli: {
        method: 'policies retrieve',
        example: "warp-hr time-off:policies retrieve \\\n  --api-key 'My API Key' \\\n  --id top_1234",
      },
      go: {
        method: 'client.TimeOff.Policies.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpolicy, err := client.TimeOff.Policies.Get(context.TODO(), "top_1234")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", policy.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.joinwarp.com/v1/time_off/policies/$ID \\\n    -H "x-api-key: $WARP_API_KEY"',
      },
      typescript: {
        method: 'client.timeOff.policies.retrieve',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\nconst policy = await client.timeOff.policies.retrieve('top_1234');\n\nconsole.log(policy.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/workers',
    httpMethod: 'get',
    summary: '',
    description:
      'List all workers. Workers include anyone employed by the company, whether US or international, full-time employees or contractors.',
    stainlessPath: '(resource) workers > (method) list',
    qualified: 'client.workers.list',
    params: [
      'afterId?: string;',
      'beforeId?: string;',
      'limit?: string;',
      "statuses?: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'[];",
      "types?: 'employee' | 'contractor'[];",
      'workEmail?: string;',
    ],
    response:
      "{ id: string; businessName: string; department: { id: string; name: string; }; displayName: string; email: string; endDate: string; firstName: string; isBusiness: boolean; lastName: string; position: string; preferredName: string; startDate: string; status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'; timeZone: string; type: 'employee' | 'contractor'; workEmail: string; }",
    markdown:
      "## list\n\n`client.workers.list(afterId?: string, beforeId?: string, limit?: string, statuses?: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'[], types?: 'employee' | 'contractor'[], workEmail?: string): { id: string; businessName: string; department: object; displayName: string; email: string; endDate: string; firstName: string; isBusiness: boolean; lastName: string; position: string; preferredName: string; startDate: string; status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'; timeZone: string; type: 'employee' | 'contractor'; workEmail: string; }`\n\n**get** `/v1/workers`\n\nList all workers. Workers include anyone employed by the company, whether US or international, full-time employees or contractors.\n\n### Parameters\n\n- `afterId?: string`\n  The id of the worker.\n\n- `beforeId?: string`\n  The id of the worker.\n\n- `limit?: string`\n  a number less than or equal to 100\n\n- `statuses?: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'[]`\n\n- `types?: 'employee' | 'contractor'[]`\n\n- `workEmail?: string`\n\n### Returns\n\n- `{ id: string; businessName: string; department: { id: string; name: string; }; displayName: string; email: string; endDate: string; firstName: string; isBusiness: boolean; lastName: string; position: string; preferredName: string; startDate: string; status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'; timeZone: string; type: 'employee' | 'contractor'; workEmail: string; }`\n\n  - `id: string`\n  - `businessName: string`\n  - `department: { id: string; name: string; }`\n  - `displayName: string`\n  - `email: string`\n  - `endDate: string`\n  - `firstName: string`\n  - `isBusiness: boolean`\n  - `lastName: string`\n  - `position: string`\n  - `preferredName: string`\n  - `startDate: string`\n  - `status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'`\n  - `timeZone: string`\n  - `type: 'employee' | 'contractor'`\n  - `workEmail: string`\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\n// Automatically fetches more pages as needed.\nfor await (const workerListResponse of client.workers.list()) {\n  console.log(workerListResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'workers list',
        example: "warp-hr workers list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Workers.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Workers.List(context.TODO(), warphr.WorkerListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://api.joinwarp.com/v1/workers \\\n    -H "x-api-key: $WARP_API_KEY"',
      },
      typescript: {
        method: 'client.workers.list',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const workerListResponse of client.workers.list()) {\n  console.log(workerListResponse.id);\n}",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/workers/{id}',
    httpMethod: 'get',
    summary: '',
    description: 'Get a specific worker by id.',
    stainlessPath: '(resource) workers > (method) retrieve',
    qualified: 'client.workers.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; businessName: string; department: { id: string; name: string; }; displayName: string; email: string; endDate: string; firstName: string; isBusiness: boolean; lastName: string; position: string; preferredName: string; startDate: string; status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'; timeZone: string; type: 'employee' | 'contractor'; workEmail: string; }",
    markdown:
      "## retrieve\n\n`client.workers.retrieve(id: string): { id: string; businessName: string; department: object; displayName: string; email: string; endDate: string; firstName: string; isBusiness: boolean; lastName: string; position: string; preferredName: string; startDate: string; status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'; timeZone: string; type: 'employee' | 'contractor'; workEmail: string; }`\n\n**get** `/v1/workers/{id}`\n\nGet a specific worker by id.\n\n### Parameters\n\n- `id: string`\n  The id of the worker.\n\n### Returns\n\n- `{ id: string; businessName: string; department: { id: string; name: string; }; displayName: string; email: string; endDate: string; firstName: string; isBusiness: boolean; lastName: string; position: string; preferredName: string; startDate: string; status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'; timeZone: string; type: 'employee' | 'contractor'; workEmail: string; }`\n\n  - `id: string`\n  - `businessName: string`\n  - `department: { id: string; name: string; }`\n  - `displayName: string`\n  - `email: string`\n  - `endDate: string`\n  - `firstName: string`\n  - `isBusiness: boolean`\n  - `lastName: string`\n  - `position: string`\n  - `preferredName: string`\n  - `startDate: string`\n  - `status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'`\n  - `timeZone: string`\n  - `type: 'employee' | 'contractor'`\n  - `workEmail: string`\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\nconst worker = await client.workers.retrieve('wrk_1234');\n\nconsole.log(worker);\n```",
    perLanguage: {
      cli: {
        method: 'workers retrieve',
        example: "warp-hr workers retrieve \\\n  --api-key 'My API Key' \\\n  --id wrk_1234",
      },
      go: {
        method: 'client.Workers.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tworker, err := client.Workers.Get(context.TODO(), "wrk_1234")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", worker.ID)\n}\n',
      },
      http: {
        example: 'curl https://api.joinwarp.com/v1/workers/$ID \\\n    -H "x-api-key: $WARP_API_KEY"',
      },
      typescript: {
        method: 'client.workers.retrieve',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\nconst worker = await client.workers.retrieve('wrk_1234');\n\nconsole.log(worker.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/workers/{id}',
    httpMethod: 'delete',
    summary: '',
    description:
      'Delete a worker. Only workers who have not yet completed onboarding can be deleted. Active workers must be properly offboarded.',
    stainlessPath: '(resource) workers > (method) delete',
    qualified: 'client.workers.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.workers.delete(id: string): void`\n\n**delete** `/v1/workers/{id}`\n\nDelete a worker. Only workers who have not yet completed onboarding can be deleted. Active workers must be properly offboarded.\n\n### Parameters\n\n- `id: string`\n  The id of the worker.\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\nawait client.workers.delete('wrk_1234')\n```",
    perLanguage: {
      cli: {
        method: 'workers delete',
        example: "warp-hr workers delete \\\n  --api-key 'My API Key' \\\n  --id wrk_1234",
      },
      go: {
        method: 'client.Workers.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Workers.Delete(context.TODO(), "wrk_1234")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.joinwarp.com/v1/workers/$ID \\\n    -X DELETE \\\n    -H "x-api-key: $WARP_API_KEY"',
      },
      typescript: {
        method: 'client.workers.delete',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.workers.delete('wrk_1234');",
      },
    },
  },
  {
    name: 'create_employee',
    endpoint: '/v1/workers/employee',
    httpMethod: 'post',
    summary: '',
    description:
      'Create a new US employee. The worker will be created in draft status and must be invited separately via the invite endpoint. If hiring in a state without an existing tax registration, you must specify the stateRegistration field.',
    stainlessPath: '(resource) workers > (method) create_employee',
    qualified: 'client.workers.createEmployee',
    params: [
      "compensation: { amount: number; per: 'hour' | 'year'; };",
      'departmentId: string;',
      'email: string;',
      'firstName: string;',
      'lastName: string;',
      'managerId: string;',
      'position: string;',
      'startDate: string;',
      "workLocation: { type: 'office'; workplaceId: string; } | { state: string; type: 'remote'; };",
      "paySchedule?: 'weekly' | 'biweekly' | 'monthly' | 'semimonthly' | 'quarterly' | 'annually';",
      'requireI9?: boolean;',
      "stateRegistration?: 'self_managed' | 'warp_managed';",
      'stockOptions?: number;',
      'workEmail?: string;',
    ],
    response:
      "{ id: string; businessName: string; department: { id: string; name: string; }; displayName: string; email: string; endDate: string; firstName: string; isBusiness: boolean; lastName: string; position: string; preferredName: string; startDate: string; status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'; timeZone: string; type: 'employee' | 'contractor'; workEmail: string; }",
    markdown:
      "## create_employee\n\n`client.workers.createEmployee(compensation: { amount: number; per: 'hour' | 'year'; }, departmentId: string, email: string, firstName: string, lastName: string, managerId: string, position: string, startDate: string, workLocation: { type: 'office'; workplaceId: string; } | { state: string; type: 'remote'; }, paySchedule?: 'weekly' | 'biweekly' | 'monthly' | 'semimonthly' | 'quarterly' | 'annually', requireI9?: boolean, stateRegistration?: 'self_managed' | 'warp_managed', stockOptions?: number, workEmail?: string): { id: string; businessName: string; department: object; displayName: string; email: string; endDate: string; firstName: string; isBusiness: boolean; lastName: string; position: string; preferredName: string; startDate: string; status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'; timeZone: string; type: 'employee' | 'contractor'; workEmail: string; }`\n\n**post** `/v1/workers/employee`\n\nCreate a new US employee. The worker will be created in draft status and must be invited separately via the invite endpoint. If hiring in a state without an existing tax registration, you must specify the stateRegistration field.\n\n### Parameters\n\n- `compensation: { amount: number; per: 'hour' | 'year'; }`\n  The employee's base compensation.\n  - `amount: number`\n    a positive number\n  - `per: 'hour' | 'year'`\n    Whether the amount is per hour or per year.\n\n- `departmentId: string`\n  The department to assign this employee to.\n\n- `email: string`\n  Personal email address. The invite will be sent here.\n\n- `firstName: string`\n  a non empty string\n\n- `lastName: string`\n  a non empty string\n\n- `managerId: string`\n  The worker id of this employee's direct manager.\n\n- `position: string`\n  The employee's job title.\n\n- `startDate: string`\n  A date string in the form YYYY-MM-DD\n\n- `workLocation: { type: 'office'; workplaceId: string; } | { state: string; type: 'remote'; }`\n  Where the employee will work. Either an existing company workplace or a remote US state.\n\n- `paySchedule?: 'weekly' | 'biweekly' | 'monthly' | 'semimonthly' | 'quarterly' | 'annually'`\n  The employee's pay schedule. Must be a pay schedule that the company has configured.\n\n- `requireI9?: boolean`\n  Whether the employee is required to complete I-9 work authorization. Set to false if the employee has already been verified off-platform. Defaults to true.\n\n- `stateRegistration?: 'self_managed' | 'warp_managed'`\n  How state tax registration is handled for this employee's work state. Required when hiring in a state where your company doesn't have an existing registration. Use 'self_managed' if you've already registered in this state, or 'warp_managed' for Warp to handle registration on your behalf.\n\n- `stockOptions?: number`\n  a non-negative number\n\n- `workEmail?: string`\n  An email with a reasonably valid regex (shamelessly taken from zod)\n\n### Returns\n\n- `{ id: string; businessName: string; department: { id: string; name: string; }; displayName: string; email: string; endDate: string; firstName: string; isBusiness: boolean; lastName: string; position: string; preferredName: string; startDate: string; status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'; timeZone: string; type: 'employee' | 'contractor'; workEmail: string; }`\n\n  - `id: string`\n  - `businessName: string`\n  - `department: { id: string; name: string; }`\n  - `displayName: string`\n  - `email: string`\n  - `endDate: string`\n  - `firstName: string`\n  - `isBusiness: boolean`\n  - `lastName: string`\n  - `position: string`\n  - `preferredName: string`\n  - `startDate: string`\n  - `status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'`\n  - `timeZone: string`\n  - `type: 'employee' | 'contractor'`\n  - `workEmail: string`\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\nconst response = await client.workers.createEmployee({\n  compensation: { amount: 1, per: 'hour' },\n  departmentId: 'dpt_1234',\n  email: 'john@joinwarp.com',\n  firstName: 'Jonathan',\n  lastName: 'Galt',\n  managerId: 'wrk_1234',\n  position: 'Software Engineer',\n  startDate: '2000-01-01',\n  workLocation: { type: 'office', workplaceId: 'wkp_1234' },\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'workers create_employee',
        example:
          "warp-hr workers create-employee \\\n  --api-key 'My API Key' \\\n  --compensation '{amount: 1, per: hour}' \\\n  --department-id dpt_1234 \\\n  --email john@joinwarp.com \\\n  --first-name Jonathan \\\n  --last-name Galt \\\n  --manager-id wrk_1234 \\\n  --position 'Software Engineer' \\\n  --start-date 2000-01-01 \\\n  --work-location '{type: office, workplaceId: wkp_1234}'",
      },
      go: {
        method: 'client.Workers.NewEmployee',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Workers.NewEmployee(context.TODO(), warphr.WorkerNewEmployeeParams{\n\t\tCompensation: warphr.F(warphr.WorkerNewEmployeeParamsCompensation{\n\t\t\tAmount: warphr.F(1.000000),\n\t\t\tPer:    warphr.F(warphr.WorkerNewEmployeeParamsCompensationPerHour),\n\t\t}),\n\t\tDepartmentID: warphr.F("dpt_1234"),\n\t\tEmail:        warphr.F("john@joinwarp.com"),\n\t\tFirstName:    warphr.F("Jonathan"),\n\t\tLastName:     warphr.F("Galt"),\n\t\tManagerID:    warphr.F("wrk_1234"),\n\t\tPosition:     warphr.F("Software Engineer"),\n\t\tStartDate:    warphr.F("2000-01-01"),\n\t\tWorkLocation: warphr.F[warphr.WorkerNewEmployeeParamsWorkLocationUnion](warphr.WorkerNewEmployeeParamsWorkLocationOfficeWorkLocation{\n\t\t\tType:        warphr.F(warphr.WorkerNewEmployeeParamsWorkLocationOfficeWorkLocationTypeOffice),\n\t\t\tWorkplaceID: warphr.F("wkp_1234"),\n\t\t}),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.joinwarp.com/v1/workers/employee \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $WARP_API_KEY" \\\n    -d \'{\n          "compensation": {\n            "amount": 1,\n            "per": "hour"\n          },\n          "departmentId": "dpt_1234",\n          "email": "john@joinwarp.com",\n          "firstName": "Jonathan",\n          "lastName": "Galt",\n          "managerId": "wrk_1234",\n          "position": "Software Engineer",\n          "startDate": "2000-01-01",\n          "workLocation": {\n            "type": "office",\n            "workplaceId": "wkp_1234"\n          }\n        }\'',
      },
      typescript: {
        method: 'client.workers.createEmployee',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.workers.createEmployee({\n  compensation: { amount: 1, per: 'hour' },\n  departmentId: 'dpt_1234',\n  email: 'john@joinwarp.com',\n  firstName: 'Jonathan',\n  lastName: 'Galt',\n  managerId: 'wrk_1234',\n  position: 'Software Engineer',\n  startDate: '2000-01-01',\n  workLocation: { type: 'office', workplaceId: 'wkp_1234' },\n});\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'create_contractor',
    endpoint: '/v1/workers/contractor',
    httpMethod: 'post',
    summary: '',
    description:
      'Create a new contractor. The worker will be created in draft status and must be invited separately via the invite endpoint. For business contractors, the businessName field is required.',
    stainlessPath: '(resource) workers > (method) create_contractor',
    qualified: 'client.workers.createContractor',
    params: [
      'departmentId: string;',
      'email: string;',
      "entityType: 'individual' | 'business';",
      'firstName: string;',
      'lastName: string;',
      'managerId: string;',
      'position: string;',
      'startDate: string;',
      'workCountry: string;',
      'businessName?: string;',
      "compensation?: { amount: number; currency: string; per: 'hour' | 'year' | 'month' | 'week'; };",
      "paySchedule?: 'weekly' | 'biweekly' | 'monthly' | 'semimonthly' | 'quarterly' | 'annually';",
      'scopeOfWork?: string;',
      'workEmail?: string;',
    ],
    response:
      "{ id: string; businessName: string; department: { id: string; name: string; }; displayName: string; email: string; endDate: string; firstName: string; isBusiness: boolean; lastName: string; position: string; preferredName: string; startDate: string; status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'; timeZone: string; type: 'employee' | 'contractor'; workEmail: string; }",
    markdown:
      "## create_contractor\n\n`client.workers.createContractor(departmentId: string, email: string, entityType: 'individual' | 'business', firstName: string, lastName: string, managerId: string, position: string, startDate: string, workCountry: string, businessName?: string, compensation?: { amount: number; currency: string; per: 'hour' | 'year' | 'month' | 'week'; }, paySchedule?: 'weekly' | 'biweekly' | 'monthly' | 'semimonthly' | 'quarterly' | 'annually', scopeOfWork?: string, workEmail?: string): { id: string; businessName: string; department: object; displayName: string; email: string; endDate: string; firstName: string; isBusiness: boolean; lastName: string; position: string; preferredName: string; startDate: string; status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'; timeZone: string; type: 'employee' | 'contractor'; workEmail: string; }`\n\n**post** `/v1/workers/contractor`\n\nCreate a new contractor. The worker will be created in draft status and must be invited separately via the invite endpoint. For business contractors, the businessName field is required.\n\n### Parameters\n\n- `departmentId: string`\n  The department to assign this contractor to.\n\n- `email: string`\n  Personal email address. The invite will be sent here.\n\n- `entityType: 'individual' | 'business'`\n  Whether the contractor is an individual person or a business entity.\n\n- `firstName: string`\n  a non empty string\n\n- `lastName: string`\n  a non empty string\n\n- `managerId: string`\n  The worker id of this contractor's direct manager.\n\n- `position: string`\n  The contractor's role or job title.\n\n- `startDate: string`\n  A date string in the form YYYY-MM-DD\n\n- `workCountry: string`\n\n- `businessName?: string`\n  Required when entityType is \"business\". The legal name of the contractor's business.\n\n- `compensation?: { amount: number; currency: string; per: 'hour' | 'year' | 'month' | 'week'; }`\n  The pay rate for the contractor. Leave this blank if you'd like to pay this contractor on-demand or via invoicing.\n  - `amount: number`\n    a positive number\n  - `currency: string`\n  - `per: 'hour' | 'year' | 'month' | 'week'`\n    The pay period for the compensation amount.\n\n- `paySchedule?: 'weekly' | 'biweekly' | 'monthly' | 'semimonthly' | 'quarterly' | 'annually'`\n  The contractor's pay schedule. Must be a pay schedule that the company has configured.\n\n- `scopeOfWork?: string`\n  A description of the work the contractor will perform.\n\n- `workEmail?: string`\n  An email with a reasonably valid regex (shamelessly taken from zod)\n\n### Returns\n\n- `{ id: string; businessName: string; department: { id: string; name: string; }; displayName: string; email: string; endDate: string; firstName: string; isBusiness: boolean; lastName: string; position: string; preferredName: string; startDate: string; status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'; timeZone: string; type: 'employee' | 'contractor'; workEmail: string; }`\n\n  - `id: string`\n  - `businessName: string`\n  - `department: { id: string; name: string; }`\n  - `displayName: string`\n  - `email: string`\n  - `endDate: string`\n  - `firstName: string`\n  - `isBusiness: boolean`\n  - `lastName: string`\n  - `position: string`\n  - `preferredName: string`\n  - `startDate: string`\n  - `status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'`\n  - `timeZone: string`\n  - `type: 'employee' | 'contractor'`\n  - `workEmail: string`\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\nconst response = await client.workers.createContractor({\n  departmentId: 'dpt_1234',\n  email: 'john@joinwarp.com',\n  entityType: 'individual',\n  firstName: 'Melissa',\n  lastName: 'Jones',\n  managerId: 'wrk_1234',\n  position: 'Design Consultant',\n  startDate: '2000-01-01',\n  workCountry: 'AD',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'workers create_contractor',
        example:
          "warp-hr workers create-contractor \\\n  --api-key 'My API Key' \\\n  --department-id dpt_1234 \\\n  --email john@joinwarp.com \\\n  --entity-type individual \\\n  --first-name Melissa \\\n  --last-name Jones \\\n  --manager-id wrk_1234 \\\n  --position 'Design Consultant' \\\n  --start-date 2000-01-01 \\\n  --work-country AD",
      },
      go: {
        method: 'client.Workers.NewContractor',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Workers.NewContractor(context.TODO(), warphr.WorkerNewContractorParams{\n\t\tDepartmentID: warphr.F("dpt_1234"),\n\t\tEmail:        warphr.F("john@joinwarp.com"),\n\t\tEntityType:   warphr.F(warphr.WorkerNewContractorParamsEntityTypeIndividual),\n\t\tFirstName:    warphr.F("Melissa"),\n\t\tLastName:     warphr.F("Jones"),\n\t\tManagerID:    warphr.F("wrk_1234"),\n\t\tPosition:     warphr.F("Design Consultant"),\n\t\tStartDate:    warphr.F("2000-01-01"),\n\t\tWorkCountry:  warphr.F(warphr.WorkerNewContractorParamsWorkCountryAd),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.joinwarp.com/v1/workers/contractor \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $WARP_API_KEY" \\\n    -d \'{\n          "departmentId": "dpt_1234",\n          "email": "john@joinwarp.com",\n          "entityType": "individual",\n          "firstName": "Melissa",\n          "lastName": "Jones",\n          "managerId": "wrk_1234",\n          "position": "Design Consultant",\n          "startDate": "2000-01-01",\n          "workCountry": "AD"\n        }\'',
      },
      typescript: {
        method: 'client.workers.createContractor',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.workers.createContractor({\n  departmentId: 'dpt_1234',\n  email: 'john@joinwarp.com',\n  entityType: 'individual',\n  firstName: 'Melissa',\n  lastName: 'Jones',\n  managerId: 'wrk_1234',\n  position: 'Design Consultant',\n  startDate: '2000-01-01',\n  workCountry: 'AD',\n});\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'invite',
    endpoint: '/v1/workers/{id}/invite',
    httpMethod: 'post',
    summary: '',
    description:
      'Send or resend the worker invite so they can accept and complete onboarding to Warp. If the worker has already been invited, the invite will be resent with extended validity.',
    stainlessPath: '(resource) workers > (method) invite',
    qualified: 'client.workers.invite',
    params: ['id: string;'],
    response:
      "{ id: string; businessName: string; department: { id: string; name: string; }; displayName: string; email: string; endDate: string; firstName: string; isBusiness: boolean; lastName: string; position: string; preferredName: string; startDate: string; status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'; timeZone: string; type: 'employee' | 'contractor'; workEmail: string; }",
    markdown:
      "## invite\n\n`client.workers.invite(id: string): { id: string; businessName: string; department: object; displayName: string; email: string; endDate: string; firstName: string; isBusiness: boolean; lastName: string; position: string; preferredName: string; startDate: string; status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'; timeZone: string; type: 'employee' | 'contractor'; workEmail: string; }`\n\n**post** `/v1/workers/{id}/invite`\n\nSend or resend the worker invite so they can accept and complete onboarding to Warp. If the worker has already been invited, the invite will be resent with extended validity.\n\n### Parameters\n\n- `id: string`\n  The id of the worker.\n\n### Returns\n\n- `{ id: string; businessName: string; department: { id: string; name: string; }; displayName: string; email: string; endDate: string; firstName: string; isBusiness: boolean; lastName: string; position: string; preferredName: string; startDate: string; status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'; timeZone: string; type: 'employee' | 'contractor'; workEmail: string; }`\n\n  - `id: string`\n  - `businessName: string`\n  - `department: { id: string; name: string; }`\n  - `displayName: string`\n  - `email: string`\n  - `endDate: string`\n  - `firstName: string`\n  - `isBusiness: boolean`\n  - `lastName: string`\n  - `position: string`\n  - `preferredName: string`\n  - `startDate: string`\n  - `status: 'draft' | 'invited' | 'onboarding' | 'active' | 'offboarding' | 'inactive'`\n  - `timeZone: string`\n  - `type: 'employee' | 'contractor'`\n  - `workEmail: string`\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\nconst response = await client.workers.invite('wrk_1234');\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'workers invite',
        example: "warp-hr workers invite \\\n  --api-key 'My API Key' \\\n  --id wrk_1234",
      },
      go: {
        method: 'client.Workers.Invite',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Workers.Invite(context.TODO(), "wrk_1234")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.joinwarp.com/v1/workers/$ID/invite \\\n    -X POST \\\n    -H "x-api-key: $WARP_API_KEY"',
      },
      typescript: {
        method: 'client.workers.invite',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.workers.invite('wrk_1234');\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/departments',
    httpMethod: 'get',
    summary: '',
    description: 'List all departments for your company.',
    stainlessPath: '(resource) departments > (method) list',
    qualified: 'client.departments.list',
    params: ['afterId?: string;', 'beforeId?: string;', 'limit?: string;'],
    response: '{ id: string; createdAt: string; name: string; }',
    markdown:
      "## list\n\n`client.departments.list(afterId?: string, beforeId?: string, limit?: string): { id: string; createdAt: string; name: string; }`\n\n**get** `/v1/departments`\n\nList all departments for your company.\n\n### Parameters\n\n- `afterId?: string`\n  The unique public id of the department\n\n- `beforeId?: string`\n  The unique public id of the department\n\n- `limit?: string`\n  a number less than or equal to 100\n\n### Returns\n\n- `{ id: string; createdAt: string; name: string; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `name: string`\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\n// Automatically fetches more pages as needed.\nfor await (const departmentListResponse of client.departments.list()) {\n  console.log(departmentListResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'departments list',
        example: "warp-hr departments list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Departments.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Departments.List(context.TODO(), warphr.DepartmentListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://api.joinwarp.com/v1/departments \\\n    -H "x-api-key: $WARP_API_KEY"',
      },
      typescript: {
        method: 'client.departments.list',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const departmentListResponse of client.departments.list()) {\n  console.log(departmentListResponse.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/departments',
    httpMethod: 'post',
    summary: '',
    description: 'Create a new department.',
    stainlessPath: '(resource) departments > (method) create',
    qualified: 'client.departments.create',
    params: ['name: string;'],
    response: '{ id: string; createdAt: string; name: string; }',
    markdown:
      "## create\n\n`client.departments.create(name: string): { id: string; createdAt: string; name: string; }`\n\n**post** `/v1/departments`\n\nCreate a new department.\n\n### Parameters\n\n- `name: string`\n  a non empty string\n\n### Returns\n\n- `{ id: string; createdAt: string; name: string; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `name: string`\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\nconst department = await client.departments.create({ name: 'name' });\n\nconsole.log(department);\n```",
    perLanguage: {
      cli: {
        method: 'departments create',
        example: "warp-hr departments create \\\n  --api-key 'My API Key' \\\n  --name name",
      },
      go: {
        method: 'client.Departments.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tdepartment, err := client.Departments.New(context.TODO(), warphr.DepartmentNewParams{\n\t\tName: warphr.F("name"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", department.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.joinwarp.com/v1/departments \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $WARP_API_KEY" \\\n    -d \'{\n          "name": "name"\n        }\'',
      },
      typescript: {
        method: 'client.departments.create',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\nconst department = await client.departments.create({ name: 'name' });\n\nconsole.log(department.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/departments/{id}',
    httpMethod: 'patch',
    summary: '',
    description: 'Update an existing department.',
    stainlessPath: '(resource) departments > (method) update',
    qualified: 'client.departments.update',
    params: ['id: string;', 'name?: string;'],
    response: '{ id: string; createdAt: string; name: string; }',
    markdown:
      "## update\n\n`client.departments.update(id: string, name?: string): { id: string; createdAt: string; name: string; }`\n\n**patch** `/v1/departments/{id}`\n\nUpdate an existing department.\n\n### Parameters\n\n- `id: string`\n  The unique public id of the department\n\n- `name?: string`\n\n### Returns\n\n- `{ id: string; createdAt: string; name: string; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `name: string`\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\nconst department = await client.departments.update('dpt_1234');\n\nconsole.log(department);\n```",
    perLanguage: {
      cli: {
        method: 'departments update',
        example: "warp-hr departments update \\\n  --api-key 'My API Key' \\\n  --id dpt_1234",
      },
      go: {
        method: 'client.Departments.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tdepartment, err := client.Departments.Update(\n\t\tcontext.TODO(),\n\t\t"dpt_1234",\n\t\twarphr.DepartmentUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", department.ID)\n}\n',
      },
      http: {
        example:
          "curl https://api.joinwarp.com/v1/departments/$ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"x-api-key: $WARP_API_KEY\" \\\n    -d '{}'",
      },
      typescript: {
        method: 'client.departments.update',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\nconst department = await client.departments.update('dpt_1234');\n\nconsole.log(department.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/workplaces',
    httpMethod: 'get',
    summary: '',
    description: 'List all workplaces for your company.',
    stainlessPath: '(resource) workplaces > (method) list',
    qualified: 'client.workplaces.list',
    params: ['afterId?: string;', 'beforeId?: string;', 'limit?: string;'],
    response:
      "{ id: string; address: { city: string; country: 'US'; line1: string; postalCode: string; state: string; line2?: string; }; createdAt: string; name: string; status: 'active' | 'archived'; type: 'remote' | 'office'; }",
    markdown:
      "## list\n\n`client.workplaces.list(afterId?: string, beforeId?: string, limit?: string): { id: string; address: object; createdAt: string; name: string; status: 'active' | 'archived'; type: 'remote' | 'office'; }`\n\n**get** `/v1/workplaces`\n\nList all workplaces for your company.\n\n### Parameters\n\n- `afterId?: string`\n  Public workplace identifier\n\n- `beforeId?: string`\n  Public workplace identifier\n\n- `limit?: string`\n  a number less than or equal to 100\n\n### Returns\n\n- `{ id: string; address: { city: string; country: 'US'; line1: string; postalCode: string; state: string; line2?: string; }; createdAt: string; name: string; status: 'active' | 'archived'; type: 'remote' | 'office'; }`\n\n  - `id: string`\n  - `address: { city: string; country: 'US'; line1: string; postalCode: string; state: string; line2?: string; }`\n  - `createdAt: string`\n  - `name: string`\n  - `status: 'active' | 'archived'`\n  - `type: 'remote' | 'office'`\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\n// Automatically fetches more pages as needed.\nfor await (const workplaceListResponse of client.workplaces.list()) {\n  console.log(workplaceListResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'workplaces list',
        example: "warp-hr workplaces list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Workplaces.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Workplaces.List(context.TODO(), warphr.WorkplaceListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://api.joinwarp.com/v1/workplaces \\\n    -H "x-api-key: $WARP_API_KEY"',
      },
      typescript: {
        method: 'client.workplaces.list',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const workplaceListResponse of client.workplaces.list()) {\n  console.log(workplaceListResponse.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/workplaces',
    httpMethod: 'post',
    summary: '',
    description: 'Create a new workplace.',
    stainlessPath: '(resource) workplaces > (method) create',
    qualified: 'client.workplaces.create',
    params: [
      "address: { city: string; country: 'US'; line1: string; postalCode: string; state: string; line2?: string; };",
      'name: string;',
      "type: 'remote' | 'office';",
    ],
    response:
      "{ id: string; address: { city: string; country: 'US'; line1: string; postalCode: string; state: string; line2?: string; }; createdAt: string; name: string; status: 'active' | 'archived'; type: 'remote' | 'office'; }",
    markdown:
      "## create\n\n`client.workplaces.create(address: { city: string; country: 'US'; line1: string; postalCode: string; state: string; line2?: string; }, name: string, type: 'remote' | 'office'): { id: string; address: object; createdAt: string; name: string; status: 'active' | 'archived'; type: 'remote' | 'office'; }`\n\n**post** `/v1/workplaces`\n\nCreate a new workplace.\n\n### Parameters\n\n- `address: { city: string; country: 'US'; line1: string; postalCode: string; state: string; line2?: string; }`\n  A valid US address\n  - `city: string`\n  - `country: 'US'`\n  - `line1: string`\n    a non empty string\n  - `postalCode: string`\n  - `state: string`\n  - `line2?: string`\n\n- `name: string`\n  a non empty string\n\n- `type: 'remote' | 'office'`\n\n### Returns\n\n- `{ id: string; address: { city: string; country: 'US'; line1: string; postalCode: string; state: string; line2?: string; }; createdAt: string; name: string; status: 'active' | 'archived'; type: 'remote' | 'office'; }`\n\n  - `id: string`\n  - `address: { city: string; country: 'US'; line1: string; postalCode: string; state: string; line2?: string; }`\n  - `createdAt: string`\n  - `name: string`\n  - `status: 'active' | 'archived'`\n  - `type: 'remote' | 'office'`\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\nconst workplace = await client.workplaces.create({\n  address: {\n  city: 'city',\n  country: 'US',\n  line1: 'x',\n  postalCode: 'postalCode',\n  state: 'AL',\n},\n  name: 'name',\n  type: 'remote',\n});\n\nconsole.log(workplace);\n```",
    perLanguage: {
      cli: {
        method: 'workplaces create',
        example:
          "warp-hr workplaces create \\\n  --api-key 'My API Key' \\\n  --address '{city: city, country: US, line1: x, postalCode: postalCode, state: AL}' \\\n  --name name \\\n  --type remote",
      },
      go: {
        method: 'client.Workplaces.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tworkplace, err := client.Workplaces.New(context.TODO(), warphr.WorkplaceNewParams{\n\t\tAddress: warphr.F(warphr.WorkplaceNewParamsAddress{\n\t\t\tCity:       warphr.F("city"),\n\t\t\tCountry:    warphr.F(warphr.WorkplaceNewParamsAddressCountryUs),\n\t\t\tLine1:      warphr.F("x"),\n\t\t\tPostalCode: warphr.F("postalCode"),\n\t\t\tState:      warphr.F(warphr.WorkplaceNewParamsAddressStateAl),\n\t\t}),\n\t\tName: warphr.F("name"),\n\t\tType: warphr.F(warphr.WorkplaceNewParamsTypeRemote),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", workplace.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.joinwarp.com/v1/workplaces \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $WARP_API_KEY" \\\n    -d \'{\n          "address": {\n            "city": "city",\n            "country": "US",\n            "line1": "x",\n            "postalCode": "postalCode",\n            "state": "AL"\n          },\n          "name": "name",\n          "type": "remote"\n        }\'',
      },
      typescript: {
        method: 'client.workplaces.create',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\nconst workplace = await client.workplaces.create({\n  address: {\n    city: 'city',\n    country: 'US',\n    line1: 'x',\n    postalCode: 'postalCode',\n    state: 'AL',\n  },\n  name: 'name',\n  type: 'remote',\n});\n\nconsole.log(workplace.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/workplaces/{id}',
    httpMethod: 'patch',
    summary: '',
    description: 'Update an existing workplace.',
    stainlessPath: '(resource) workplaces > (method) update',
    qualified: 'client.workplaces.update',
    params: ['id: string;', 'name?: string;'],
    response:
      "{ id: string; address: { city: string; country: 'US'; line1: string; postalCode: string; state: string; line2?: string; }; createdAt: string; name: string; status: 'active' | 'archived'; type: 'remote' | 'office'; }",
    markdown:
      "## update\n\n`client.workplaces.update(id: string, name?: string): { id: string; address: object; createdAt: string; name: string; status: 'active' | 'archived'; type: 'remote' | 'office'; }`\n\n**patch** `/v1/workplaces/{id}`\n\nUpdate an existing workplace.\n\n### Parameters\n\n- `id: string`\n  Public workplace identifier\n\n- `name?: string`\n\n### Returns\n\n- `{ id: string; address: { city: string; country: 'US'; line1: string; postalCode: string; state: string; line2?: string; }; createdAt: string; name: string; status: 'active' | 'archived'; type: 'remote' | 'office'; }`\n\n  - `id: string`\n  - `address: { city: string; country: 'US'; line1: string; postalCode: string; state: string; line2?: string; }`\n  - `createdAt: string`\n  - `name: string`\n  - `status: 'active' | 'archived'`\n  - `type: 'remote' | 'office'`\n\n### Example\n\n```typescript\nimport Warp from 'warp-hr';\n\nconst client = new Warp();\n\nconst workplace = await client.workplaces.update('wkp_1234');\n\nconsole.log(workplace);\n```",
    perLanguage: {
      cli: {
        method: 'workplaces update',
        example: "warp-hr workplaces update \\\n  --api-key 'My API Key' \\\n  --id wkp_1234",
      },
      go: {
        method: 'client.Workplaces.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tworkplace, err := client.Workplaces.Update(\n\t\tcontext.TODO(),\n\t\t"wkp_1234",\n\t\twarphr.WorkplaceUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", workplace.ID)\n}\n',
      },
      http: {
        example:
          "curl https://api.joinwarp.com/v1/workplaces/$ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"x-api-key: $WARP_API_KEY\" \\\n    -d '{}'",
      },
      typescript: {
        method: 'client.workplaces.update',
        example:
          "import Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\nconst workplace = await client.workplaces.update('wkp_1234');\n\nconsole.log(workplace.id);",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'go',
    content:
      '# Warp Go API Library\n\n<a href="https://pkg.go.dev/github.com/TeamWarp/warp-go-sdk"><img src="https://pkg.go.dev/badge/github.com/TeamWarp/warp-go-sdk.svg" alt="Go Reference"></a>\n\nThe Warp Go library provides convenient access to the [Warp REST API](https://docs.warp.co)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Warp MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=warp-hr-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIndhcnAtaHItbWNwIl0sImVudiI6eyJXQVJQX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22warp-hr-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22warp-hr-mcp%22%5D%2C%22env%22%3A%7B%22WARP_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/TeamWarp/warp-go-sdk" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/TeamWarp/warp-go-sdk@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/TeamWarp/warp-go-sdk"\n\t"github.com/TeamWarp/warp-go-sdk/option"\n)\n\nfunc main() {\n\tclient := warphr.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("WARP_API_KEY")\n\t)\n\tpage, err := client.TimeOff.Policies.List(context.TODO(), warphr.TimeOffPolicyListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.TimeOff.Policies.List(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/TeamWarp/warp-go-sdk/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n```go\niter := client.TimeOff.Policies.ListAutoPaging(context.TODO(), warphr.TimeOffPolicyListParams{})\n// Automatically fetches more pages as needed.\nfor iter.Next() {\n\ttimeOffPolicyListResponse := iter.Current()\n\tfmt.Printf("%+v\\n", timeOffPolicyListResponse)\n}\nif err := iter.Err(); err != nil {\n\tpanic(err.Error())\n}\n```\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n```go\npage, err := client.TimeOff.Policies.List(context.TODO(), warphr.TimeOffPolicyListParams{})\nfor page != nil {\n\tfor _, policy := range page.Data {\n\t\tfmt.Printf("%+v\\n", policy)\n\t}\n\tpage, err = page.GetNextPage()\n}\nif err != nil {\n\tpanic(err.Error())\n}\n```\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.TimeOff.Policies.List(context.TODO(), warphr.TimeOffPolicyListParams{})\nif err != nil {\n\tvar apierr *warphr.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/v1/time_off/policies": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.TimeOff.Policies.List(\n\tctx,\n\twarphr.TimeOffPolicyListParams{},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := warphr.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.TimeOff.Policies.List(\n\tcontext.TODO(),\n\twarphr.TimeOffPolicyListParams{},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\npage, err := client.TimeOff.Policies.List(\n\tcontext.TODO(),\n\twarphr.TimeOffPolicyListParams{},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", page)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/TeamWarp/warp-go-sdk/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Warp TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/warp-hr.svg?label=npm%20(stable))](https://npmjs.org/package/warp-hr) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/warp-hr)\n\nThis library provides convenient access to the Warp REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.warp.co](https://docs.warp.co). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Warp MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=warp-hr-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIndhcnAtaHItbWNwIl0sImVudiI6eyJXQVJQX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22warp-hr-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22warp-hr-mcp%22%5D%2C%22env%22%3A%7B%22WARP_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install warp-hr\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\nconst page = await client.timeOff.policies.list();\nconst policyListResponse = page.data[0];\n\nconsole.log(policyListResponse.id);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Warp from 'warp-hr';\n\nconst client = new Warp({\n  apiKey: process.env['WARP_API_KEY'], // This is the default and can be omitted\n});\n\nconst [policyListResponse]: [Warp.TimeOff.PolicyListResponse] =\n  await client.timeOff.policies.list();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst page = await client.timeOff.policies.list().catch(async (err) => {\n  if (err instanceof Warp.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Warp({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.timeOff.policies.list({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Warp({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.timeOff.policies.list({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n## Auto-pagination\n\nList methods in the Warp API are paginated.\nYou can use the `for await … of` syntax to iterate through items across all pages:\n\n```ts\nasync function fetchAllPolicyListResponses(params) {\n  const allPolicyListResponses = [];\n  // Automatically fetches more pages as needed.\n  for await (const policyListResponse of client.timeOff.policies.list()) {\n    allPolicyListResponses.push(policyListResponse);\n  }\n  return allPolicyListResponses;\n}\n```\n\nAlternatively, you can request a single page at a time:\n\n```ts\nlet page = await client.timeOff.policies.list();\nfor (const policyListResponse of page.data) {\n  console.log(policyListResponse);\n}\n\n// Convenience methods are provided for manually paginating:\nwhile (page.hasNextPage()) {\n  page = await page.getNextPage();\n  // ...\n}\n```\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Warp();\n\nconst response = await client.timeOff.policies.list().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: page, response: raw } = await client.timeOff.policies.list().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nfor await (const policyListResponse of page) {\n  console.log(policyListResponse.id);\n}\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `WARP_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Warp from 'warp-hr';\n\nconst client = new Warp({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Warp from 'warp-hr';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Warp({\n  logger: logger.child({ name: 'Warp' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.timeOff.policies.list({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Warp from 'warp-hr';\nimport fetch from 'my-fetch';\n\nconst client = new Warp({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Warp from 'warp-hr';\n\nconst client = new Warp({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Warp from 'warp-hr';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Warp({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Warp from 'warp-hr';\n\nconst client = new Warp({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Warp from 'npm:warp-hr';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Warp({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/TeamWarp/warp-sdk-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
  {
    language: 'cli',
    content:
      "# Warp CLI\n\nThe official CLI for the [Warp REST API](https://docs.warp.co).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n<!-- x-release-please-start-version -->\n\n## Installation\n\n### Installing with Homebrew\n\n~~~sh\nbrew install TeamWarp/tap/warp-hr\n~~~\n\n### Installing with Go\n\nTo test or install the CLI locally, you need [Go](https://go.dev/doc/install) version 1.22 or later installed.\n\n~~~sh\ngo install 'github.com/TeamWarp/warp-cli/cmd/warp-hr@latest'\n~~~\n\nOnce you have run `go install`, the binary is placed in your Go bin directory:\n\n- **Default location**: `$HOME/go/bin` (or `$GOPATH/bin` if GOPATH is set)\n- **Check your path**: Run `go env GOPATH` to see the base directory\n\nIf commands aren't found after installation, add the Go bin directory to your PATH:\n\n~~~sh\n# Add to your shell profile (.zshrc, .bashrc, etc.)\nexport PATH=\"$PATH:$(go env GOPATH)/bin\"\n~~~\n\n<!-- x-release-please-end -->\n\n### Running Locally\n\nAfter cloning the git repository for this project, you can use the\n`scripts/run` script to run the tool locally:\n\n~~~sh\n./scripts/run args...\n~~~\n\n## Usage\n\nThe CLI follows a resource-based command structure:\n\n~~~sh\nwarp-hr [resource] <command> [flags...]\n~~~\n\n~~~sh\nwarp-hr time-off:policies list \\\n  --api-key 'My API Key'\n~~~\n\nFor details about specific commands, use the `--help` flag.\n\n### Environment variables\n\n| Environment variable | Required |\n| -------------------- | -------- |\n| `WARP_API_KEY`       | yes      |\n\n### Global flags\n\n- `--api-key` (can also be set with `WARP_API_KEY` env var)\n- `--help` - Show command line usage\n- `--debug` - Enable debug logging (includes HTTP request/response details)\n- `--version`, `-v` - Show the CLI version\n- `--base-url` - Use a custom API backend URL\n- `--format` - Change the output format (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--format-error` - Change the output format for errors (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--transform` - Transform the data output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n- `--transform-error` - Transform the error output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n\n### Passing files as arguments\n\nTo pass files to your API, you can use the `@myfile.ext` syntax:\n\n~~~bash\nwarp-hr <command> --arg @abe.jpg\n~~~\n\nFiles can also be passed inside JSON or YAML blobs:\n\n~~~bash\nwarp-hr <command> --arg '{image: \"@abe.jpg\"}'\n# Equivalent:\nwarp-hr <command> <<YAML\narg:\n  image: \"@abe.jpg\"\nYAML\n~~~\n\nIf you need to pass a string literal that begins with an `@` sign, you can\nescape the `@` sign to avoid accidentally passing a file.\n\n~~~bash\nwarp-hr <command> --username '\\@abe'\n~~~\n\n#### Explicit encoding\n\nFor JSON endpoints, the CLI tool does filetype sniffing to determine whether the\nfile contents should be sent as a string literal (for plain text files) or as a\nbase64-encoded string literal (for binary files). If you need to explicitly send\nthe file as either plain text or base64-encoded data, you can use\n`@file://myfile.txt` (for string encoding) or `@data://myfile.dat` (for\nbase64-encoding). Note that absolute paths will begin with `@file://` or\n`@data://`, followed by a third `/` (for example, `@file:///tmp/file.txt`).\n\n~~~bash\nwarp-hr <command> --arg @data://file.txt\n~~~\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
