// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { WarpHr } from '../client';

export abstract class APIResource {
  protected _client: WarpHr;

  constructor(client: WarpHr) {
    this._client = client;
  }
}
