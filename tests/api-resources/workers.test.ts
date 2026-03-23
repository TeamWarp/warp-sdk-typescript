// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WarpHr from 'warp-hr';

const client = new WarpHr({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workers', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.workers.retrieve('wrk_1234');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.workers.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workers.list(
        {
          afterId: 'wrk_1234',
          beforeId: 'wrk_1234',
          limit: 'limit',
          statuses: ['draft'],
          types: ['employee'],
          workEmail: 'workEmail',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WarpHr.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.workers.delete('wrk_1234');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createContractor: only required params', async () => {
    const responsePromise = client.workers.createContractor({
      departmentId: 'dpt_1234',
      email: 'john@joinwarp.com',
      entityType: 'individual',
      firstName: 'Melissa',
      lastName: 'Jones',
      managerId: 'wrk_1234',
      position: 'Design Consultant',
      startDate: '2000-01-01',
      workCountry: 'AD',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createContractor: required and optional params', async () => {
    const response = await client.workers.createContractor({
      departmentId: 'dpt_1234',
      email: 'john@joinwarp.com',
      entityType: 'individual',
      firstName: 'Melissa',
      lastName: 'Jones',
      managerId: 'wrk_1234',
      position: 'Design Consultant',
      startDate: '2000-01-01',
      workCountry: 'AD',
      businessName: 'Galt Enterprises, LLC',
      compensation: {
        amount: 1,
        currency: 'USD',
        per: 'hour',
      },
      paySchedule: 'weekly',
      scopeOfWork: 'Frontend development for the customer dashboard',
      workEmail: 'john@joinwarp.com',
    });
  });

  // Mock server tests are disabled
  test.skip('createEmployee: only required params', async () => {
    const responsePromise = client.workers.createEmployee({
      compensation: { amount: 1, per: 'hour' },
      departmentId: 'dpt_1234',
      email: 'john@joinwarp.com',
      firstName: 'Jonathan',
      lastName: 'Galt',
      managerId: 'wrk_1234',
      position: 'Software Engineer',
      startDate: '2000-01-01',
      workLocation: { type: 'office', workplaceId: 'wkp_1234' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createEmployee: required and optional params', async () => {
    const response = await client.workers.createEmployee({
      compensation: { amount: 1, per: 'hour' },
      departmentId: 'dpt_1234',
      email: 'john@joinwarp.com',
      firstName: 'Jonathan',
      lastName: 'Galt',
      managerId: 'wrk_1234',
      position: 'Software Engineer',
      startDate: '2000-01-01',
      workLocation: { type: 'office', workplaceId: 'wkp_1234' },
      paySchedule: 'weekly',
      requireI9: true,
      stateRegistration: 'self_managed',
      stockOptions: 10000,
      workEmail: 'john@joinwarp.com',
    });
  });

  // Mock server tests are disabled
  test.skip('invite', async () => {
    const responsePromise = client.workers.invite('wrk_1234');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
