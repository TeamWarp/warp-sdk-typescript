// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource payroll', () => {
  smokeCase(
    'payroll.list:required',
    { operation: 'list', path: '/v1/payrolls' },
    'list: only required params',
    async () => {
      const publicPayrollList = await client.payroll.list({
        limit: 'limit',
      });
    },
  );
  smokeCase(
    'payroll.list:all',
    { operation: 'list', path: '/v1/payrolls' },
    'list: required and optional params',
    async () => {
      const publicPayrollList = await client.payroll.list({
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
  );
  smokeCase('payroll.get:single', { operation: 'get', path: '/v1/payrolls/{id}' }, 'get', async () => {
    const publicPayrollDetail = await client.payroll.get('pay_1234');
  });
  smokeCase(
    'payroll.listPaychecks:required',
    { operation: 'listPaychecks', path: '/v1/paychecks' },
    'listPaychecks: only required params',
    async () => {
      const publicPaycheckList = await client.payroll.listPaychecks({
        limit: 'limit',
      });
    },
  );
  smokeCase(
    'payroll.listPaychecks:all',
    { operation: 'listPaychecks', path: '/v1/paychecks' },
    'listPaychecks: required and optional params',
    async () => {
      const publicPaycheckList = await client.payroll.listPaychecks({
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
  );
  smokeCase(
    'payroll.getPaycheck:single',
    { operation: 'getPaycheck', path: '/v1/paychecks/{id}' },
    'getPaycheck',
    async () => {
      const publicPaycheckDetail = await client.payroll.getPaycheck('pyc_1234');
    },
  );
});
