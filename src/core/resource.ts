// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Warp } from '../client';

export abstract class APIResource {
  protected _client: Warp;

  constructor(client: Warp) {
    this._client = client;
  }
}
