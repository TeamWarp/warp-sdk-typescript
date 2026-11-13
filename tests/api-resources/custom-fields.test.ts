// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource customFields', () => {
  smokeCase(
    'customFields.list:single',
    { operation: 'list', path: '/v1/custom_fields' },
    'list',
    async () => {
      const customField = await client.customFields.list();
    },
  );
  smokeCase(
    'customFields.create:required',
    { operation: 'create', path: '/v1/custom_fields' },
    'create: only required params',
    async () => {
      const customField = await client.customFields.create({
        name: 'x',
        type: 'text',
        category: 'info',
      });
    },
  );
  smokeCase(
    'customFields.create:all',
    { operation: 'create', path: '/v1/custom_fields' },
    'create: required and optional params',
    async () => {
      const customField = await client.customFields.create({
        name: 'x',
        description: '',
        type: 'text',
        config: {},
        category: 'info',
        accessLevel: 'admins',
        inputBy: 'admin',
        required: false,
        options: [
          {
            label: 'x',
            value: 'x',
          },
        ],
      });
    },
  );
  smokeCase(
    'customFields.get:single',
    { operation: 'get', path: '/v1/custom_fields/{id}' },
    'get',
    async () => {
      const customField = await client.customFields.get('cf_1234');
    },
  );
  smokeCase(
    'customFields.update:required',
    { operation: 'update', path: '/v1/custom_fields/{id}' },
    'update: only required params',
    async () => {
      const customField = await client.customFields.update('cf_1234', {});
    },
  );
  smokeCase(
    'customFields.update:all',
    { operation: 'update', path: '/v1/custom_fields/{id}' },
    'update: required and optional params',
    async () => {
      const customField = await client.customFields.update('cf_1234', {
        name: 'x',
        description: '',
        config: {},
        category: 'info',
        accessLevel: 'admins',
        inputBy: 'admin',
        required: false,
      });
    },
  );
  smokeCase(
    'customFields.archive:single',
    { operation: 'archive', path: '/v1/custom_fields/{id}/archive' },
    'archive',
    async () => {
      const customField = await client.customFields.archive('cf_1234');
    },
  );
  smokeCase(
    'customFields.createOption:required',
    { operation: 'createOption', path: '/v1/custom_fields/{id}/options' },
    'createOption: only required params',
    async () => {
      const customField = await client.customFields.createOption('cf_1234', {
        label: 'x',
        value: 'x',
      });
    },
  );
  smokeCase(
    'customFields.createOption:all',
    { operation: 'createOption', path: '/v1/custom_fields/{id}/options' },
    'createOption: required and optional params',
    async () => {
      const customField = await client.customFields.createOption('cf_1234', {
        label: 'x',
        value: 'x',
        sortOrder: 0,
      });
    },
  );
  smokeCase(
    'customFields.updateOption:required',
    { operation: 'updateOption', path: '/v1/custom_field_options/{id}' },
    'updateOption: only required params',
    async () => {
      const customField = await client.customFields.updateOption('cfo_1234', {});
    },
  );
  smokeCase(
    'customFields.updateOption:all',
    { operation: 'updateOption', path: '/v1/custom_field_options/{id}' },
    'updateOption: required and optional params',
    async () => {
      const customField = await client.customFields.updateOption('cfo_1234', {
        label: 'x',
        sortOrder: 0,
      });
    },
  );
  smokeCase(
    'customFields.deleteOption:single',
    { operation: 'deleteOption', path: '/v1/custom_field_options/{id}' },
    'deleteOption',
    async () => {
      await client.customFields.deleteOption('cfo_1234');
    },
  );
  smokeCase(
    'customFields.archiveOption:single',
    { operation: 'archiveOption', path: '/v1/custom_field_options/{id}/archive' },
    'archiveOption',
    async () => {
      const customField = await client.customFields.archiveOption('cfo_1234');
    },
  );
  smokeCase(
    'customFields.listValues:required',
    { operation: 'listValues', path: '/v1/custom_field_values' },
    'listValues: only required params',
    async () => {
      const customField = await client.customFields.listValues();
    },
  );
  smokeCase(
    'customFields.listValues:all',
    { operation: 'listValues', path: '/v1/custom_field_values' },
    'listValues: required and optional params',
    async () => {
      const customField = await client.customFields.listValues({
        workerIds: ['wrk_1234'],
        fieldIds: ['cf_1234'],
      });
    },
  );
  smokeCase(
    'customFields.upsertValue:single',
    { operation: 'upsertValue', path: '/v1/custom_field_values' },
    'upsertValue',
    async () => {
      const customField = await client.customFields.upsertValue({
        workerId: 'wrk_1234',
        fieldId: 'cf_1234',
        value: {
          type: 'text',
          value: '',
        },
      });
    },
  );
  smokeCase(
    'customFields.clearValue:single',
    { operation: 'clearValue', path: '/v1/custom_field_values' },
    'clearValue',
    async () => {
      await client.customFields.clearValue({
        workerId: 'wrk_1234',
        fieldId: 'cf_1234',
      });
    },
  );
});
