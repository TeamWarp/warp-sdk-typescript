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
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

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
