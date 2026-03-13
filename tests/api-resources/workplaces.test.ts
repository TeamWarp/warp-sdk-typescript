// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WarpHr from 'warp-hr';

const client = new WarpHr({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workplaces', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.workplaces.create({
      address: {
        city: 'city',
        country: 'US',
        line1: 'x',
        postalCode: 'postalCode',
        state: 'AL',
      },
      name: 'name',
      type: 'remote',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.workplaces.create({
      address: {
        city: 'city',
        country: 'US',
        line1: 'x',
        postalCode: 'postalCode',
        state: 'AL',
        line2: 'line2',
      },
      name: 'name',
      type: 'remote',
    });
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.workplaces.update('wkp_1234', {});
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
    const responsePromise = client.workplaces.list();
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
      client.workplaces.list(
        {
          afterId: 'wkp_1234',
          beforeId: 'wkp_1234',
          limit: 'limit',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WarpHr.NotFoundError);
  });
});
