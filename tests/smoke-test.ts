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
  label?: string;
  status: 'passed' | 'failed';
  durationMs: number;
  error?: string;
};

// One or two entries per generated operation: the first passes only the arguments the method
// requires, the second also fills every optional parameter and body property. `label` says which
// is which, and is absent when the operation has no optional argument and so has only one case.
// `run` performs the real SDK call; the other fields are metadata used for filtering and
// reporting. This list is generated, so it stays in sync with the SDK surface.
const cases: {
  operation: string;
  method: string;
  path: string;
  label?: string;
  run: () => Promise<unknown>;
}[] = [
  {
    operation: 'list',
    method: 'GET',
    path: '/v1/benefits/health_plans',
    label: 'required params',
    run: async () => {
      const healthPlan = await client.benefits.healthPlans.list({
        limit: 'limit',
        statuses: ['active'],
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/benefits/health_plans',
    label: 'all params',
    run: async () => {
      const healthPlan = await client.benefits.healthPlans.list({
        limit: 'limit',
        afterId: 'chpl_1234',
        beforeId: 'chpl_1234',
        types: ['medical'],
        statuses: ['active'],
        carrierIds: ['car_1234'],
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/benefits/health_plans/{id}',
    run: async () => {
      const healthPlan = await client.benefits.healthPlans.get('chpl_1234');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/benefits/retirement_plans',
    label: 'required params',
    run: async () => {
      const retirementPlan = await client.benefits.retirementPlans.list({
        limit: 'limit',
        statuses: ['active'],
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/benefits/retirement_plans',
    label: 'all params',
    run: async () => {
      const retirementPlan = await client.benefits.retirementPlans.list({
        limit: 'limit',
        afterId: 'crpl_1234',
        beforeId: 'crpl_1234',
        types: ['401k'],
        statuses: ['active'],
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/benefits/retirement_plans/{id}',
    run: async () => {
      const retirementPlan = await client.benefits.retirementPlans.get('crpl_1234');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/benefits/deductions',
    label: 'required params',
    run: async () => {
      const deduction = await client.benefits.deductions.list({
        limit: 'limit',
        statuses: ['active'],
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/benefits/deductions',
    label: 'all params',
    run: async () => {
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
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/benefits/deductions/{id}',
    run: async () => {
      const deduction = await client.benefits.deductions.get('pbdg_1234');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/custom_fields',
    run: async () => {
      const customField = await client.customFields.list();
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/custom_fields',
    label: 'required params',
    run: async () => {
      const customField = await client.customFields.create({
        name: 'x',
        type: 'text',
        category: 'info',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/custom_fields',
    label: 'all params',
    run: async () => {
      const customField = await client.customFields.create({
        name: 'x',
        description: '',
        type: 'text',
        config: {},
        category: 'info',
        accessLevel: 'admins',
        inputBy: 'admin',
        required: false,
        options: [],
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/custom_fields/{id}',
    run: async () => {
      const customField = await client.customFields.get('cf_1234');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/custom_fields/{id}',
    label: 'required params',
    run: async () => {
      const objects = await client.customFields.update('cf_1234', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/custom_fields/{id}',
    label: 'all params',
    run: async () => {
      const objects = await client.customFields.update('cf_1234', {
        name: 'x',
        description: '',
        config: {},
        category: 'info',
        accessLevel: 'admins',
        inputBy: 'admin',
        required: false,
      });
    },
  },

  {
    operation: 'archive',
    method: 'POST',
    path: '/v1/custom_fields/{id}/archive',
    run: async () => {
      const objects = await client.customFields.archive('cf_1234');
    },
  },

  {
    operation: 'createOption',
    method: 'POST',
    path: '/v1/custom_fields/{id}/options',
    label: 'required params',
    run: async () => {
      const customField = await client.customFields.createOption('cf_1234', {
        label: 'x',
        value: 'x',
      });
    },
  },

  {
    operation: 'createOption',
    method: 'POST',
    path: '/v1/custom_fields/{id}/options',
    label: 'all params',
    run: async () => {
      const customField = await client.customFields.createOption('cf_1234', {
        label: 'x',
        value: 'x',
        sortOrder: 0,
      });
    },
  },

  {
    operation: 'updateOption',
    method: 'PATCH',
    path: '/v1/custom_field_options/{id}',
    label: 'required params',
    run: async () => {
      const objects3 = await client.customFields.updateOption('cfo_1234', {});
    },
  },

  {
    operation: 'updateOption',
    method: 'PATCH',
    path: '/v1/custom_field_options/{id}',
    label: 'all params',
    run: async () => {
      const objects3 = await client.customFields.updateOption('cfo_1234', {
        label: 'x',
        sortOrder: 0,
      });
    },
  },

  {
    operation: 'deleteOption',
    method: 'DELETE',
    path: '/v1/custom_field_options/{id}',
    run: async () => {
      await client.customFields.deleteOption('cfo_1234');
    },
  },

  {
    operation: 'archiveOption',
    method: 'POST',
    path: '/v1/custom_field_options/{id}/archive',
    run: async () => {
      const objects3 = await client.customFields.archiveOption('cfo_1234');
    },
  },

  {
    operation: 'listValues',
    method: 'GET',
    path: '/v1/custom_field_values',
    label: 'required params',
    run: async () => {
      const customField = await client.customFields.listValues();
    },
  },

  {
    operation: 'listValues',
    method: 'GET',
    path: '/v1/custom_field_values',
    label: 'all params',
    run: async () => {
      const customField = await client.customFields.listValues({
        workerIds: ['wrk_1234'],
        fieldIds: ['cf_1234'],
      });
    },
  },

  {
    operation: 'upsertValue',
    method: 'PUT',
    path: '/v1/custom_field_values',
    run: async () => {
      const customField = await client.customFields.upsertValue({
        workerId: 'wrk_1234',
        fieldId: 'cf_1234',
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
        workerId: 'wrk_1234',
        fieldId: 'cf_1234',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/departments',
    label: 'required params',
    run: async () => {
      const department = await client.departments.list({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/departments',
    label: 'all params',
    run: async () => {
      const department = await client.departments.list({
        limit: 'limit',
        afterId: 'dpt_1234',
        beforeId: 'dpt_1234',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/departments',
    run: async () => {
      const department = await client.departments.create({
        name: 'x',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/departments/{id}',
    label: 'required params',
    run: async () => {
      const department = await client.departments.update('dpt_1234', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/departments/{id}',
    label: 'all params',
    run: async () => {
      const department = await client.departments.update('dpt_1234', {
        name: '',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/offers',
    label: 'required params',
    run: async () => {
      const offer = await client.offers.list({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/offers',
    label: 'all params',
    run: async () => {
      const offer = await client.offers.list({
        limit: 'limit',
        afterId: 'offr_1234',
        beforeId: 'offr_1234',
        statuses: ['draft'],
        workerTypes: ['employee'],
        candidateEmail: 'john@joinwarp.com',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/offers',
    label: 'required params',
    run: async () => {
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
          payRate: 0,
        },
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/offers',
    label: 'all params',
    run: async () => {
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
        workerType: 'employee',
        compensation: {
          payBasis: 'year',
          payCurrency: 'USD',
          payRate: 0,
        },
        expirationTime: '',
        backgroundCheckWorkLocation: {
          country: '',
          state: '',
          city: '',
        },
      });
    },
  },

  {
    operation: 'void',
    method: 'POST',
    path: '/v1/offers/{id}/void',
    label: 'required params',
    run: async () => {
      const objects5 = await client.offers.void('offr_1234', {
        voidReason: 'candidate_declined',
      });
    },
  },

  {
    operation: 'void',
    method: 'POST',
    path: '/v1/offers/{id}/void',
    label: 'all params',
    run: async () => {
      const objects5 = await client.offers.void('offr_1234', {
        voidReason: 'candidate_declined',
        voidNotes: '',
      });
    },
  },

  {
    operation: 'extendDeadline',
    method: 'POST',
    path: '/v1/offers/{id}/extend-deadline',
    run: async () => {
      const objects5 = await client.offers.extendDeadline('offr_1234', {
        expirationTime: '',
      });
    },
  },

  {
    operation: 'resend',
    method: 'POST',
    path: '/v1/offers/{id}/resend',
    run: async () => {
      const objects5 = await client.offers.resend('offr_1234');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/pay_rates',
    label: 'required params',
    run: async () => {
      const payRate = await client.payRates.list({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/pay_rates',
    label: 'all params',
    run: async () => {
      const payRate = await client.payRates.list({
        limit: 'limit',
        afterId: 'pyr_1234',
        beforeId: 'pyr_1234',
        workerId: 'wrk_1234',
        effectiveOnOrAfter: 'effectiveOnOrAfter',
        effectiveBefore: 'effectiveBefore',
        type: 'regular',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/pay_rates/{id}',
    run: async () => {
      const payRate = await client.payRates.get('pyr_1234');
    },
  },

  {
    operation: 'listAssignments',
    method: 'GET',
    path: '/v1/time_off/assignments',
    label: 'required params',
    run: async () => {
      const timeOff = await client.timeOff.listAssignments({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'listAssignments',
    method: 'GET',
    path: '/v1/time_off/assignments',
    label: 'all params',
    run: async () => {
      const timeOff = await client.timeOff.listAssignments({
        limit: 'limit',
        afterId: 'wrkasn_1234',
        beforeId: 'wrkasn_1234',
        policyIds: ['top_1234'],
        workerIds: ['wrk_1234'],
      });
    },
  },

  {
    operation: 'listBalances',
    method: 'GET',
    path: '/v1/time_off/balances',
    label: 'required params',
    run: async () => {
      const timeOff = await client.timeOff.listBalances({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'listBalances',
    method: 'GET',
    path: '/v1/time_off/balances',
    label: 'all params',
    run: async () => {
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
  },

  {
    operation: 'listRequests',
    method: 'GET',
    path: '/v1/time_off/requests',
    label: 'required params',
    run: async () => {
      const timeOff = await client.timeOff.listRequests({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'listRequests',
    method: 'GET',
    path: '/v1/time_off/requests',
    label: 'all params',
    run: async () => {
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
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/time_off/policies',
    label: 'required params',
    run: async () => {
      const policy = await client.timeOff.policies.list({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/time_off/policies',
    label: 'all params',
    run: async () => {
      const policy = await client.timeOff.policies.list({
        limit: 'limit',
        afterId: 'top_1234',
        beforeId: 'top_1234',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/time_off/policies/{id}',
    run: async () => {
      const policy = await client.timeOff.policies.get('top_1234');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/workers',
    label: 'required params',
    run: async () => {
      const worker = await client.workers.list({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/workers',
    label: 'all params',
    run: async () => {
      const worker = await client.workers.list({
        limit: 'limit',
        afterId: 'wrk_1234',
        beforeId: 'wrk_1234',
        statuses: ['draft'],
        types: ['employee'],
        workEmail: 'workEmail',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/workers/{id}',
    run: async () => {
      const worker = await client.workers.get('wrk_1234');
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/workers/{id}',
    run: async () => {
      await client.workers.delete('wrk_1234');
    },
  },

  {
    operation: 'createEmployee',
    method: 'POST',
    path: '/v1/workers/employee',
    label: 'required params',
    run: async () => {
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
          amount: 0,
          per: 'hour',
        },
      });
    },
  },

  {
    operation: 'createEmployee',
    method: 'POST',
    path: '/v1/workers/employee',
    label: 'all params',
    run: async () => {
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
        managerId: 'wrk_1234',
        stockOptions: 0,
        workLocation: {
          type: 'office',
          workplaceId: 'wkp_1234',
        },
        compensation: {
          amount: 0,
          per: 'hour',
        },
        paySchedule: 'weekly',
      });
    },
  },

  {
    operation: 'createContractor',
    method: 'POST',
    path: '/v1/workers/contractor',
    label: 'required params',
    run: async () => {
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
  },

  {
    operation: 'createContractor',
    method: 'POST',
    path: '/v1/workers/contractor',
    label: 'all params',
    run: async () => {
      const worker = await client.workers.createContractor({
        entityType: 'individual',
        firstName: 'Melissa',
        lastName: 'Jones',
        position: 'Design Consultant',
        businessName: 'Galt Enterprises, LLC',
        scopeOfWork: '',
        startDate: '',
        email: 'john@joinwarp.com',
        workEmail: 'john@joinwarp.com',
        departmentId: 'dpt_1234',
        managerId: 'wrk_1234',
        workCountry: 'AD',
        compensation: {
          currency: 'USD',
          amount: 0,
          per: 'year',
        },
        paySchedule: 'weekly',
      });
    },
  },

  {
    operation: 'invite',
    method: 'POST',
    path: '/v1/workers/{id}/invite',
    run: async () => {
      const worker = await client.workers.invite('wrk_1234');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/workplaces',
    label: 'required params',
    run: async () => {
      const workplace = await client.workplaces.list({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/workplaces',
    label: 'all params',
    run: async () => {
      const workplace = await client.workplaces.list({
        limit: 'limit',
        afterId: 'wkp_1234',
        beforeId: 'wkp_1234',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/workplaces',
    run: async () => {
      const workplace = await client.workplaces.create({
        name: 'x',
        type: 'remote',
        address: {
          line1: 'x',
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
    label: 'required params',
    run: async () => {
      const workplace = await client.workplaces.update('wkp_1234', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/workplaces/{id}',
    label: 'all params',
    run: async () => {
      const workplace = await client.workplaces.update('wkp_1234', {
        name: '',
      });
    },
  },

  {
    operation: 'listPaychecks',
    method: 'GET',
    path: '/v1/paychecks',
    label: 'required params',
    run: async () => {
      const payroll = await client.payroll.listPaychecks({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'listPaychecks',
    method: 'GET',
    path: '/v1/paychecks',
    label: 'all params',
    run: async () => {
      const payroll = await client.payroll.listPaychecks({
        limit: 'limit',
        afterId: 'pyc_1234',
        beforeId: 'pyc_1234',
        payrollIds: ['pay_1234'],
        workerIds: ['wrk_1234'],
        workerTypes: ['us_w2'],
        payrollTypes: ['us'],
        statuses: ['processing'],
        paymentMethods: ['direct_deposit'],
        compensationCurrencies: ['USD'],
        payFrequencies: ['semimonthly'],
        paydayOnOrAfter: 'paydayOnOrAfter',
        paydayBefore: 'paydayBefore',
      });
    },
  },

  {
    operation: 'getPaycheck',
    method: 'GET',
    path: '/v1/paychecks/{id}',
    run: async () => {
      const payroll = await client.payroll.getPaycheck('pyc_1234');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/payrolls',
    label: 'required params',
    run: async () => {
      const payroll = await client.payroll.list({
        limit: 'limit',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/payrolls',
    label: 'all params',
    run: async () => {
      const payroll = await client.payroll.list({
        limit: 'limit',
        afterId: 'pay_1234',
        beforeId: 'pay_1234',
        types: ['us'],
        subtypes: ['regular'],
        statuses: ['processing'],
        payFrequencies: ['semimonthly'],
        paydayOnOrAfter: 'paydayOnOrAfter',
        paydayBefore: 'paydayBefore',
        payPeriodEndOnOrAfter: 'payPeriodEndOnOrAfter',
        payPeriodEndBefore: 'payPeriodEndBefore',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/payrolls/{id}',
    run: async () => {
      const payroll = await client.payroll.get('pay_1234');
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
      // `label` distinguishes the required-params run from the all-params run of the same
      // operation; it is omitted entirely when the operation contributed only one case.
      const identity = {
        operation: testCase.operation,
        method: testCase.method,
        path: testCase.path,
        ...(testCase.label ? { label: testCase.label } : {}),
      };
      try {
        await testCase.run();
        return { ...identity, status: 'passed', durationMs: Date.now() - startedAt };
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error);
        return { ...identity, status: 'failed', durationMs: Date.now() - startedAt, error: message };
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
      const suffix = result.label ? ` [${result.label}]` : '';
      if (result.status === 'passed')
        console.log(
          `\u2714 ${result.operation}${suffix} (${result.method} ${result.path}) ${result.durationMs}ms`,
        );
      else
        console.error(
          `\u2718 ${result.operation}${suffix} (${result.method} ${result.path})\n${result.error ?? ''}`,
        );
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
