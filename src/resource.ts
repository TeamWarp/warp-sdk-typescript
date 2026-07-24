// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { WarpAPI } from './client';

export abstract class APIResource {
  protected _client: WarpAPI;

  constructor(client: WarpAPI) {
    this._client = client;
  }
}
