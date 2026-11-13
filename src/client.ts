// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIPromise, type APIResponseProps } from './api-promise';
import * as Errors from './error';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON, isEmptyObj } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
import { castToError, isAbortError } from './internal/errors';
import { MAX_ERROR_BODY_BYTES, holdDeadline, readBodyText } from './internal/utils/body';
import { getPlatformHeaders, isRunningInBrowser } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
  redactHeaders,
  redactUrl,
  type LogLevel,
  type Logger,
} from './internal/utils/log';
export type { Logger, LogLevel } from './internal/utils/log';
import type { RequestInit, RequestInfo, BodyInit, Fetch } from './internal/builtin-types';
import { buildHeaders, type HeadersLike, type NullableHeaders } from './internal/headers';
import type { FinalRequestOptions, RequestOptions } from './internal/request-options';
import type { HTTPMethod, FinalizedRequestInit, MergedRequestInit, PromiseOrValue } from './internal/types';
import { stringifyQuery } from './internal/utils/query';
import { toFile } from './core/uploads';
import { VERSION } from './version';
import { Benefits } from './resources/benefits/benefits';
import {
  Company,
  type PublicCompany,
  type PublicCompanyAddress,
  type PublicCompanyBusinessType,
} from './resources/company';
import {
  CustomFields,
  type PublicCustomFieldValueOutput,
  type TextCustomFieldValue,
  type NumberCustomFieldValue,
  type DateCustomFieldValue,
  type BooleanCustomFieldValue,
  type CurrencyCustomFieldValue,
  type PercentageCustomFieldValue,
  type SelectCustomFieldValue,
  type MultiSelectCustomFieldValue,
  type CustomFieldListResponse,
  type CustomFieldCreateResponse,
  type CustomFieldGetResponse,
  type CustomFieldUpdateResponse,
  type CustomFieldArchiveResponse,
  type CustomFieldCreateOptionResponse,
  type CustomFieldUpdateOptionResponse,
  type CustomFieldArchiveOptionResponse,
  type CustomFieldListValuesResponse,
  type CustomFieldUpsertValueResponse,
  type CustomFieldCreateParams,
  type CustomFieldUpdateParams,
  type CustomFieldCreateOptionParams,
  type CustomFieldUpdateOptionParams,
  type CustomFieldListValuesParams,
  type CustomFieldUpsertValueParams,
  type CustomFieldClearValueParams,
} from './resources/custom-fields';
import {
  Departments,
  type DepartmentListResponse,
  type DepartmentCreateResponse,
  type DepartmentUpdateResponse,
  type DepartmentListParams,
  type DepartmentCreateParams,
  type DepartmentUpdateParams,
} from './resources/departments';
import {
  I9Verifications,
  type PublicI9Verification,
  type I9VerificationListResponse,
  type I9VerificationListParams,
} from './resources/i9-verifications';
import {
  BankAccounts,
  type PublicBankAccount,
  type BankAccountListResponse,
  type BankAccountListParams,
} from './resources/bank-accounts';
import { Levels, type LevelListResponse } from './resources/levels';
import {
  Offers,
  type PublicMoneyAmount,
  type OfferListResponse,
  type OfferCreateResponse,
  type OfferVoidResponse,
  type OfferExtendDeadlineResponse,
  type OfferResendResponse,
  type OfferListParams,
  type OfferCreateParams,
  type OfferVoidParams,
  type OfferExtendDeadlineParams,
} from './resources/offers';
import {
  PayRates,
  type PublicPayRate,
  type PublicPayRateType,
  type PublicPayRatePer,
  type PayRateListResponse,
  type PayRateListParams,
} from './resources/pay-rates/pay-rates';
import {
  PaySplits,
  type PublicPaySplit,
  type PublicPercentagePaySplit,
  type PublicAmountPaySplit,
  type PublicPaySplitStatus,
  type PublicPaySplitPercentageAllocation,
  type PublicPaySplitAmountAllocation,
  type PublicBankAccountReference,
  type PublicPaySplitPercentage,
  type PublicPaySplitAllocation,
  type PublicPaySplitFixedAllocation,
  type PublicPaySplitRemainderAllocation,
  type PaySplitListResponse,
  type PaySplitListParams,
} from './resources/pay-splits';
import {
  Payroll,
  type PublicPayrollList,
  type PublicPayrollDetail,
  type PublicPaycheckList,
  type PublicPaycheckDetail,
  type PublicPayrollSummary,
  type PublicPayrollType,
  type PublicPayrollSubtype,
  type PublicPayrollStatus,
  type PublicPayrollCurrency,
  type PublicPayPeriod,
  type PublicPayFrequency,
  type PublicPayrollDetailTotals,
  type PublicPayrollFundingMethod,
  type PublicPayrollTimeline,
  type PublicPaycheckSummary,
  type PublicPaycheckPayroll,
  type PublicPaycheckWorker,
  type PublicPaycheckStatus,
  type PublicPaycheckPaymentMethod,
  type PublicPaycheckDetailTotals,
  type PublicExchangeRate,
  type PublicPaycheckEarning,
  type PublicPaycheckReimbursement,
  type PublicPaycheckDeduction,
  type PublicPaycheckBenefit,
  type PublicPaycheckTax,
  type PublicFundingPayrollTotals,
  type PublicCurrencyMoneyAmount11,
  type PublicCurrencyMoneyAmount,
  type PublicCurrencyMoneyAmount1,
  type PublicCurrencyMoneyAmount2,
  type PublicCurrencyMoneyAmount3,
  type PublicCurrencyMoneyAmount4,
  type PublicCurrencyMoneyAmount5,
  type PublicCurrencyMoneyAmount6,
  type PublicCurrencyMoneyAmount7,
  type PublicCurrencyMoneyAmount8,
  type PublicCurrencyMoneyAmount9,
  type PublicCurrencyMoneyAmount10,
  type PublicPaycheckSummaryTotals,
  type PublicPaycheckCurrencyTotals,
  type PublicExchangeRateValue,
  type PublicPayrollMoneyAmount,
  type PublicHourlyRate,
  type PublicPayrollMoneyAmount1,
  type PublicPaycheckDeductionTaxTreatment,
  type PublicPayrollMoneyAmount2,
  type PublicPayrollMoneyAmount3,
  type PublicPayrollMoneyAmount4,
  type PublicTaxPayer,
  type PublicPayrollMoneyAmount5,
  type PublicPaycheckSummaryCurrencyTotals,
  type PublicCurrencyMoneyAmount13,
  type PublicCurrencyMoneyAmount12,
  type PublicCurrencyMoneyAmount14,
  type PublicCurrencyMoneyAmount15,
  type PublicCurrencyMoneyAmount16,
  type PublicCurrencyMoneyAmount17,
  type PublicCurrencyMoneyAmount18,
  type PublicCurrencyMoneyAmount19,
  type PublicCurrencyMoneyAmount20,
  type PublicHourlyRateAmount,
  type PayrollListParams,
  type PayrollListPaychecksParams,
} from './resources/payroll';
import {
  TimeOff,
  type TimeOffListAssignmentsResponse,
  type TimeOffListBalancesResponse,
  type TimeOffListRequestsResponse,
  type TimeOffListAssignmentsParams,
  type TimeOffListBalancesParams,
  type TimeOffListRequestsParams,
} from './resources/time-off/time-off';
import {
  Workers,
  type PublicWorkerAddress,
  type PublicWorkerManager,
  type PublicWorkerCompensation,
  type PublicWorkerCustomField,
  type PublicWorkerSsn,
  type PublicTextWorkerCustomField,
  type PublicNumberWorkerCustomField,
  type PublicDateWorkerCustomField,
  type PublicBooleanWorkerCustomField,
  type PublicCurrencyWorkerCustomField,
  type PublicPercentageWorkerCustomField,
  type PublicSelectWorkerCustomField,
  type PublicMultiSelectWorkerCustomField,
  type WorkerUpdateResponse,
  type WorkerGetResponse,
  type WorkerRevealSsnResponse,
  type WorkerListResponse,
  type WorkerCreateEmployeeResponse,
  type WorkerCreateContractorResponse,
  type WorkerInviteResponse,
  type WorkerUpdateParams,
  type WorkerRevealSsnParams,
  type WorkerListParams,
  type WorkerCreateEmployeeParams,
  type WorkerCreateContractorParams,
} from './resources/workers';
import {
  Workplaces,
  type WorkplaceListResponse,
  type WorkplaceCreateResponse,
  type WorkplaceUpdateResponse,
  type WorkplaceListParams,
  type WorkplaceCreateParams,
  type WorkplaceUpdateParams,
} from './resources/workplaces';
import {
  Webhooks,
  type TimeOffRequestCreatedWebhookEvent,
  type TimeOffRequestReviewedWebhookEvent,
  type TimeOffRequestDeletedWebhookEvent,
  type TimeOffBalanceAdjustedWebhookEvent,
  type WorkerCreatedWebhookEvent,
  type WorkerUpdatedWebhookEvent,
  type WorkerDeletedWebhookEvent,
  type WorkerInviteSentWebhookEvent,
  type WorkerInviteAcceptedWebhookEvent,
  type WorkerOnboardingCompletedWebhookEvent,
  type WorkerOffboardingStartedWebhookEvent,
  type WorkerOffboardedWebhookEvent,
  type WorkerReactivatedWebhookEvent,
  type OfferCreatedWebhookEvent,
  type OfferSignatureRequestedWebhookEvent,
  type OfferSentWebhookEvent,
  type OfferViewedWebhookEvent,
  type OfferAcceptedWebhookEvent,
  type OfferVoidedWebhookEvent,
  type OfferExpiredWebhookEvent,
  type PayRateCreatedWebhookEvent,
  type PayRateDeletedWebhookEvent,
  type ParsedWebhookEvent,
} from './resources/webhooks';

export type AuthTokenProvider = () => string | Promise<string>;

export interface ClientOptions {
  /**
   * The API key for header authorization.
   */
  apiKey?: string | AuthTokenProvider | undefined;

  /**
   * Secret used to verify incoming webhook signatures.
   */
  webhookSecret?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env["WARP_BASE_URL"].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;

  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   *
   * The client passes `redirect: 'manual'` and follows redirects itself, dropping credentials when
   * a redirect leaves the API's origin. A custom `fetch` must honor that option: one that follows
   * redirects on its own would re-send API keys and cookies to whatever host a redirect names, and
   * a response it reports as `redirected` is refused for that reason. Every hop of a redirect goes
   * through this function, so a wrapper that adds a credential itself must add it only for the
   * API's own origin. A request whose `fetchOptions` set `redirect: 'manual'` gets its 3xx answer
   * back unfollowed, so a caller can read a signed URL from `Location`; `'error'` is kept too.
   *
   * In a browser or a browser worker, which hide a manual redirect's target, a request whose only
   * credentials are ones the browser itself keeps on the origin (`Authorization`, cookies) is sent
   * with `redirect: 'follow'`. A request carrying an API key header is not, so a redirect it meets
   * fails with an `APIConnectionError` rather than handing that key to another host.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env["WARP_LOG"] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

export type WarpOptions = ClientOptions;

/**
 * API Client for interfacing with the Warp API.
 */
export class Warp {
  apiKey: string | AuthTokenProvider;
  webhookSecret: string | null;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;
  /**
   * The `fetch` implementation every request is sent through: the `fetch` client option, or the
   * platform default. A replacement must honor the same contract as that option.
   */
  fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _baseURLOverridden: boolean;
  private _defaultBaseURL: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Warp API.
   *
   * @param {string | AuthTokenProvider | undefined} [opts.apiKey=process.env["WARP_API_KEY"] ?? undefined]
   * @param {string | null | undefined} [opts.webhookSecret=process.env["WARP_WEBHOOK_SECRET"] ?? null]
   * @param {string} [opts.baseURL=process.env["WARP_BASE_URL"] ?? https://api.joinwarp.com/public] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('WARP_BASE_URL'),
    apiKey = readEnv('WARP_API_KEY'),
    webhookSecret = readEnv('WARP_WEBHOOK_SECRET') ?? null,
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.WarpError(
        "The WARP_API_KEY environment variable is missing or empty; either provide it, or instantiate the Warp client with an apiKey option, like new Warp({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      webhookSecret,
      ...opts,
      baseURL: baseURL || 'https://api.joinwarp.com/public',
    };
    const baseURLOverridden = baseURL !== null && baseURL !== undefined && baseURL !== '';
    const defaultBaseURL = 'https://api.joinwarp.com/public';
    this.baseURL = options.baseURL || defaultBaseURL;
    this.timeout = options.timeout ?? Warp.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('WARP_LOG'), 'process.env["WARP_LOG"]', this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    const customHeadersEnv = readEnv('WARP_CUSTOM_HEADERS');
    if (customHeadersEnv) {
      const parsed: Record<string, string> = {};
      for (const line of customHeadersEnv.split('\n')) {
        const colon = line.indexOf(':');
        if (colon >= 0) {
          parsed[line.substring(0, colon).trim()] = line.substring(colon + 1).trim();
        }
      }
      options.defaultHeaders = { ...parsed, ...options.defaultHeaders };
    }

    this._options = { ...options, baseURL: baseURLOverridden ? this.baseURL : undefined };
    this._baseURLOverridden = baseURLOverridden;
    this._defaultBaseURL = defaultBaseURL;

    this.apiKey = apiKey;
    this.webhookSecret = webhookSecret;
  }

  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as new (props: ClientOptions) => this)({
      ...this._options,
      ...(this.#baseURLOverridden() ? { baseURL: this.baseURL } : {}),
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      webhookSecret: this.webhookSecret,
      ...options,
    });
    return client;
  }

  #baseURLOverridden(): boolean {
    // A named environment selects a default URL; only explicit overrides should bypass per-request defaults.
    return this._baseURLOverridden || this.baseURL !== this._defaultBaseURL;
  }

  /**
   * The client as `JSON.stringify` sees it: every credential masked, and the resource accessors,
   * which point back at the client, left out.
   */
  toJSON(): Record<string, unknown> {
    const view: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(this)) {
      if (typeof value === 'object' && value !== null && (value as { _client?: unknown })._client === this)
        continue;
      view[key] = redactClientField(key, value);
    }
    return view;
  }

  /** What `console.log` and `util.inspect` print for the client: the masked view `toJSON` builds. */
  [Symbol.for('nodejs.util.inspect.custom')](): Record<string, unknown> {
    return this.toJSON();
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected stringifyQuery(query: object | Record<string, unknown>): string {
    return stringifyQuery(query);
  }

  private getUserAgent(): string {
    return `Warp/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `scalar-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: object | undefined,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    // Guarantee exactly one "/" between baseURL and path so that bases without a trailing slash
    // and paths without a leading slash do not fuse into a malformed URL (e.g. ".../v1" + "widgets").
    const url = isAbsoluteURL(path)
      ? new URL(path)
      : new URL(
          (baseURL.endsWith('/') ? baseURL : baseURL + '/') + (path.startsWith('/') ? path.slice(1) : path),
        );

    const defaultQuery = this.defaultQuery();
    const pathQuery = Object.fromEntries(url.searchParams);
    if (!isEmptyObj(defaultQuery) || !isEmptyObj(pathQuery)) {
      query = { ...pathQuery, ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts } as FinalRequestOptions;
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    // The deadline stays armed until the body is read, not just until headers arrive, so a server
    // that answers quickly and then trickles its body is still cut off at `timeout`.
    const { release: releaseDeadline, unref: unrefDeadline } = this.#armDeadline(
      req.signal,
      timeout,
      controller,
    );
    // A subclass's own `fetchWithTimeout` sends the request; the deadline above still covers the body.
    const viaOverride = this.fetchWithTimeout !== Warp.prototype.fetchWithTimeout;
    const response = await (viaOverride
      ? Promise.resolve().then(() => this.fetchWithTimeout(url, req, timeout, controller))
      : this.#fetchFollowingRedirects(url, req, controller)
    ).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      releaseDeadline();
      // A redirect the SDK refused to follow fails the same way on every attempt, so it is not retried.
      if (isRefusedRedirect(response)) throw response;
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      // The signal the request was sent with, so an aborted `fetchOptions.signal` reads as a cancel too.
      if (req.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID, req.signal);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${redactUrl(url)} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        releaseDeadline();
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          req.signal,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      // Only the first 64 KiB of an error body is read: enough for any message, and a hostile or
      // broken server cannot make the client buffer more. The read still runs under the deadline.
      const errText = await readBodyText(response, MAX_ERROR_BODY_BYTES, 'truncate').catch(
        (err: any) => castToError(err).message,
      );
      releaseDeadline();
      const errJSON = safeJSON(errText) as any;
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    // A streamed or binary body is the caller's to read at its own pace, so the deadline ends with
    // the headers there; a buffered body keeps it until `defaultParseResponse` has read it.
    if (options.stream || options.__binaryResponse) releaseDeadline();
    else {
      // Unreferenced so a response nobody parses (a call never awaited) cannot hold the process
      // open until the deadline; a body being read keeps it alive through its own socket.
      unrefDeadline();
      holdDeadline(controller, releaseDeadline);
    }

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  /**
   * Sends one request with a deadline on its response headers, following redirects as the client
   * does.
   *
   * Override it in a subclass to wrap every HTTP request this client sends to its API, retries included;
   * call `super.fetchWithTimeout` to send, which keeps the client's redirect handling. When a redirect
   * leaves the origin that drops the client's own credential headers, but a header an override adds
   * goes on to the redirect target, so a secret belongs in a client option rather than added here.
   * A client that does not override it skips this method and sends directly.
   *
   * The SDK's own deadline aborts `controller` and stays armed until a buffered body is read, so it
   * cuts off an override that sends through `super` or passes `controller.signal` on; a larger `ms`
   * passed to `super` cannot extend it, so set the `timeout` option instead.
   */
  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const deadline = this.#armDeadline(init?.signal, ms, controller);
    try {
      return await this.#fetchFollowingRedirects(url, init, controller);
    } finally {
      deadline.release();
    }
  }

  /**
   * Starts the request deadline on `controller` and forwards the caller's abort signal to it.
   *
   * `release` disarms the deadline. `unref` stops it alone from keeping a Node process alive, for
   * the stretch where it waits on a body nobody may ever read.
   */
  #armDeadline(
    signal: RequestInit['signal'],
    ms: number,
    controller: AbortController,
  ): { release: () => void; unref: () => void } {
    const abort = this._makeAbort(controller);
    if (signal?.aborted) abort();
    else if (signal) signal.addEventListener('abort', abort, { once: true });

    const timeout = setTimeout(abort, ms);
    return {
      release: () => clearTimeout(timeout),
      unref: () => (timeout as { unref?: () => void } | undefined)?.unref?.(),
    };
  }

  /**
   * Sends one request, following its redirects here rather than in `fetch`.
   *
   * Platform `fetch` strips only `Authorization` when a redirect leaves the origin, so it would hand
   * a header API key, cookies and a 307 body to whatever host the API names. Following here, where
   * the client knows which headers carry credentials, keeps them on the API's own origin.
   */
  async #fetchFollowingRedirects(
    url: RequestInfo,
    init: RequestInit | undefined,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    const isReadableBody = isOneShotBody(options.body);
    const request = typeof url === 'string' || url instanceof URL ? undefined : url;
    const carriesUnguardedCredential = [...new Headers(options.headers ?? request?.headers).keys()].some(
      (name) => CREDENTIAL_HEADERS.includes(name) && !BROWSER_GUARDED_HEADERS.includes(name),
    );
    const browserFollows = hidesRedirectTargets() && !carriesUnguardedCredential;
    const callerRedirect =
      options.redirect === 'error' || options.redirect === 'manual' ? options.redirect : undefined;

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
      redirect: callerRedirect ?? (browserFollows ? 'follow' : 'manual'),
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    // use undefined this binding; fetch errors if bound to something else in browsers and edge runtimes / workers
    let response = await this.fetch.call(undefined, url, fetchOptions);
    let current = request ? request.url : String(url);
    let hop: RequestInit = {
      ...fetchOptions,
      headers: new Headers(fetchOptions.headers ?? request?.headers),
    };
    // Once a hop leaves the origin, credentials stay dropped for the rest of the chain, even if a
    // later hop comes back: the foreign host chose where that hop goes.
    let leftOrigin = false;
    for (let redirects = 0; ; redirects++) {
      if (callerRedirect) return response;
      if (hop.redirect === 'manual' && response.redirected) {
        throw refuseRedirect(
          "The fetch implementation followed a redirect itself although the client asked it not to, so its response was not used. A custom fetch must honor redirect: 'manual'.",
        );
      }
      if (response.type === 'opaqueredirect') {
        // Browsers answer a manual redirect with an opaque response that hides its target, so there
        // is nothing safe to follow; it is refused rather than mistaken for the API's answer.
        throw refuseRedirect(
          carriesUnguardedCredential
            ? 'The server answered with a redirect, which this request does not follow: the platform hides the target from the SDK, and the request carries an API key header that could reach another host. Call the redirect target directly, or send the request from a server.'
            : 'The server answered with a redirect whose target this platform hides from the SDK, so it was not followed. Call the redirect target directly, or send the request from a server.',
        );
      }
      const location = REDIRECT_STATUSES.includes(response.status)
        ? response.headers.get('location')?.trim()
        : undefined;
      if (!location) return response;
      await Shims.CancelReadableStream(response.body);
      if (redirects >= MAX_REDIRECTS) throw refuseRedirect(`Maximum redirects exceeded (${MAX_REDIRECTS}).`);

      const from = new URL(current);
      let target: URL;
      try {
        target = new URL(location, from);
      } catch {
        throw refuseRedirect('The server redirected to a URL that cannot be parsed.');
      }
      if (target.protocol !== 'https:' && target.protocol !== 'http:') {
        throw refuseRedirect(`Refusing to follow a redirect to a ${target.protocol} URL.`);
      }
      if (from.protocol === 'https:' && target.protocol === 'http:') {
        throw refuseRedirect('Refusing to follow a redirect from https to http.');
      }

      const headers = new Headers(hop.headers);
      let nextMethod = hop.method ?? 'GET';
      let body = hop.body ?? request?.body ?? undefined;
      // A 303 (but for HEAD), and a 301 or 302 answering a POST, re-ask with a bodiless GET, as
      // browsers do. Every other redirect repeats the request, so its body has to be sent again.
      if (
        (response.status === 303 && nextMethod !== 'HEAD') ||
        ((response.status === 301 || response.status === 302) && nextMethod === 'POST')
      ) {
        nextMethod = 'GET';
        body = undefined;
        for (const name of [...headers.keys()]) if (name.startsWith('content-')) headers.delete(name);
      } else if (body != null && isOneShotBody(body)) {
        throw refuseRedirect(
          `Refusing to follow a ${response.status} redirect: the request body was a stream, which cannot be sent again.`,
        );
      }

      if (target.origin !== from.origin) leftOrigin = true;
      if (leftOrigin) {
        for (const name of CREDENTIAL_HEADERS) headers.delete(name);
      } else {
        // A `Location` the server spelled does not repeat our query credentials, so a same-origin
        // hop carries them over; appended rather than set so the target's own query keeps its bytes.
        for (const name of CREDENTIAL_QUERY) {
          const value = from.searchParams.get(name);
          if (value === null || target.searchParams.has(name)) continue;
          target.search =
            (target.search ? target.search + '&' : '?') +
            encodeURIComponent(name) +
            '=' +
            encodeURIComponent(value);
        }
      }

      hop = { ...hop, method: nextMethod, headers };
      if (body == null) {
        delete hop.body;
        delete (hop as { duplex?: unknown }).duplex;
      } else {
        hop.body = body;
      }
      current = target.href;
      response = await this.fetch.call(undefined, current, hop);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    signal: RequestInit['signal'],
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time, just do what it says,
    // but cap server-provided delays at 60s so an oversized or malformed Retry-After
    // (e.g. `retry-after-ms: 999999999`, a past HTTP-date, or a value that Date.parse
    // failed on) cannot block retries for an unbounded amount of time. Otherwise fall
    // back to the default exponential-backoff calculation.
    const maxRetryAfterMillis = 60 * 1000;
    if (
      timeoutMillis === undefined ||
      !Number.isFinite(timeoutMillis) ||
      timeoutMillis <= 0 ||
      timeoutMillis > maxRetryAfterMillis
    ) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    // Cancelling during the backoff ends the call now, rather than after the delay and one more request.
    await sleep(timeoutMillis, signal);
    if (signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    // Headers read the caller's own options, not the copy defaulted above: `X-Scalar-Timeout`
    // reports an explicit per-request timeout, and the idempotency key written back here has to
    // land where the retry can see it.
    const reqHeaders = await this.buildHeaders({
      options: inputOptions,
      method,
      bodyHeaders,
      retryCount,
      url,
    });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      // `buildBody` already collapses no-body into `undefined`; here we only need to drop that
      // sentinel. A truthiness spread would also strip an intentional empty-string body.
      ...(body !== undefined && { body }),
      ...((this.fetchOptions as any) ?? {}),
      // The call's own signal beats the client's `fetchOptions.signal`; the call's `fetchOptions` beats both.
      ...(options.signal && { signal: options.signal }),
      ...((options.fetchOptions as any) ?? {}),
    };
    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
    url,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
    url: string;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Scalar-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Scalar-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);
    appendAuthCookies(headers.values, await this.authCookiesAsync());

    this.validateAuth(url, headers.values, options);
    // Last, so a subclass sees the headers as they leave here, after the SDK has checked the auth.
    await this.validateHeaders(headers);

    return headers.values;
  }

  /**
   * Runs once for every HTTP request built from the client's headers, at the end of header building,
   * with the headers it will be sent with: `values` holds them and `nulls` the names the call removed
   * with a `null`.
   * Throwing, or rejecting from an `async` override, which is awaited, rejects the request before it
   * is sent. Does nothing unless a subclass overrides it.
   * `fetchOptions.headers` and `prepareRequest` are applied afterwards, so the hook does not see them.
   */
  protected validateHeaders({ values, nulls }: NullableHeaders): void {}

  private _makeAbort(controller: AbortController) {
    // note: we can't just inline this method inside `#armDeadline()` because then the closure
    //       would capture all request options, and cause a memory leak.
    return () => controller.abort();
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    // Skip only `null`/`undefined` so an intentional empty-string (or 0/false) payload still
    // reaches the encoder. A plain `!body` check would silently drop those falsy-but-valid bodies,
    // and `null` must be excluded here too because the iterator check below uses `in`, which
    // throws on null.
    if (body == null) {
      return { bodyHeaders: undefined, body: undefined };
    }
    // A `content-type` from either header bag says how the body is already encoded; the request's
    // own wins over the client-wide default, as it does on the wire.
    const headers = buildHeaders([this._options.defaultHeaders, rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      // A string is only already-encoded when something has said what it is encoded as.
      // Generated call sites state the declared request media type, so a `text/plain` or
      // ndjson payload reaches the wire byte-for-byte. A string with no `content-type` came
      // from a body the document declared as JSON — `{ "type": "string" }` — and encoding it
      // below is what puts the quotes the server parses for around it.
      (typeof body === 'string' && headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else if (
      typeof body === 'object' &&
      headers.values.get('content-type') === 'application/x-www-form-urlencoded'
    ) {
      return {
        bodyHeaders: { 'content-type': 'application/x-www-form-urlencoded' },
        body: this.stringifyQuery(body),
      };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  protected validateAuth(url: string, headers: Headers, options: FinalRequestOptions): void {
    if (headers.has('x-api-key')) return;
    if (headerExplicitlyOmitted(options.headers, 'x-api-key')) return;
    throw new Errors.AuthenticationError(
      401,
      undefined,
      'Could not resolve authentication method. Expected the apiKey to be set. Or for the "x-api-key" headers to be explicitly omitted',
      headers,
    );
  }

  authHeadersSync(): Record<string, string> {
    const headers: Record<string, string> = {};
    const apiKey = this.resolveAuthOptionSync('apiKey', this.apiKey);
    if (apiKey) headers['x-api-key'] = apiKey;
    return headers;
  }

  webSocketAuthHeaders(): Record<string, string> {
    const apiKey = this.resolveAuthOptionSync('apiKey', this.apiKey);
    if (apiKey) return { 'x-api-key': apiKey };
    return {};
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    const apiKey = await this.resolveAuthOption('apiKey', this.apiKey);
    if (apiKey == null) {
      return undefined;
    }
    return buildHeaders([{ 'x-api-key': apiKey }]);
  }

  private async authQueryAsync(): Promise<Record<string, string>> {
    const query: Record<string, string> = {};
    return query;
  }

  private async authCookiesAsync(): Promise<Record<string, string>> {
    const cookies: Record<string, string> = {};
    return cookies;
  }

  private async resolveAuthOption(
    optionName: string,
    value: string | AuthTokenProvider | null | undefined,
  ): Promise<string | undefined> {
    if (value == null) return undefined;
    const token = typeof value === 'function' ? await value() : value;
    if (!token) throw new Errors.WarpError(`Expected '${optionName}' to resolve to a non-empty string.`);
    return token;
  }

  private resolveAuthOptionSync(
    optionName: string,
    value: string | AuthTokenProvider | null | undefined,
  ): string | undefined {
    if (value == null) return undefined;
    const token = typeof value === 'function' ? value() : value;
    if (typeof token !== 'string' || !token)
      throw new Errors.WarpError(`Expected '${optionName}' to resolve to a non-empty string.`);
    return token;
  }

  static Warp = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static WarpError = Errors.WarpError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = toFile;

  benefits: Benefits = new Benefits(this);
  company: Company = new Company(this);
  customFields: CustomFields = new CustomFields(this);
  departments: Departments = new Departments(this);
  i9Verifications: I9Verifications = new I9Verifications(this);
  bankAccounts: BankAccounts = new BankAccounts(this);
  levels: Levels = new Levels(this);
  offers: Offers = new Offers(this);
  payRates: PayRates = new PayRates(this);
  paySplits: PaySplits = new PaySplits(this);
  payroll: Payroll = new Payroll(this);
  timeOff: TimeOff = new TimeOff(this);
  workers: Workers = new Workers(this);
  workplaces: Workplaces = new Workplaces(this);
  webhooks: Webhooks = new Webhooks(this);
}

Warp.Benefits = Benefits;
Warp.Company = Company;
Warp.CustomFields = CustomFields;
Warp.Departments = Departments;
Warp.I9Verifications = I9Verifications;
Warp.BankAccounts = BankAccounts;
Warp.Levels = Levels;
Warp.Offers = Offers;
Warp.PayRates = PayRates;
Warp.PaySplits = PaySplits;
Warp.Payroll = Payroll;
Warp.TimeOff = TimeOff;
Warp.Workers = Workers;
Warp.Workplaces = Workplaces;
Warp.Webhooks = Webhooks;

export declare namespace Warp {
  export type RequestOptions = Opts.RequestOptions;
  export { Benefits as Benefits };

  export {
    Company as Company,
    type PublicCompany as PublicCompany,
    type PublicCompanyAddress as PublicCompanyAddress,
    type PublicCompanyBusinessType as PublicCompanyBusinessType,
  };

  export {
    CustomFields as CustomFields,
    type PublicCustomFieldValueOutput as PublicCustomFieldValueOutput,
    type TextCustomFieldValue as TextCustomFieldValue,
    type NumberCustomFieldValue as NumberCustomFieldValue,
    type DateCustomFieldValue as DateCustomFieldValue,
    type BooleanCustomFieldValue as BooleanCustomFieldValue,
    type CurrencyCustomFieldValue as CurrencyCustomFieldValue,
    type PercentageCustomFieldValue as PercentageCustomFieldValue,
    type SelectCustomFieldValue as SelectCustomFieldValue,
    type MultiSelectCustomFieldValue as MultiSelectCustomFieldValue,
    type CustomFieldListResponse as CustomFieldListResponse,
    type CustomFieldCreateResponse as CustomFieldCreateResponse,
    type CustomFieldGetResponse as CustomFieldGetResponse,
    type CustomFieldUpdateResponse as CustomFieldUpdateResponse,
    type CustomFieldArchiveResponse as CustomFieldArchiveResponse,
    type CustomFieldCreateOptionResponse as CustomFieldCreateOptionResponse,
    type CustomFieldUpdateOptionResponse as CustomFieldUpdateOptionResponse,
    type CustomFieldArchiveOptionResponse as CustomFieldArchiveOptionResponse,
    type CustomFieldListValuesResponse as CustomFieldListValuesResponse,
    type CustomFieldUpsertValueResponse as CustomFieldUpsertValueResponse,
    type CustomFieldCreateParams as CustomFieldCreateParams,
    type CustomFieldUpdateParams as CustomFieldUpdateParams,
    type CustomFieldCreateOptionParams as CustomFieldCreateOptionParams,
    type CustomFieldUpdateOptionParams as CustomFieldUpdateOptionParams,
    type CustomFieldListValuesParams as CustomFieldListValuesParams,
    type CustomFieldUpsertValueParams as CustomFieldUpsertValueParams,
    type CustomFieldClearValueParams as CustomFieldClearValueParams,
  };

  export {
    Departments as Departments,
    type DepartmentListResponse as DepartmentListResponse,
    type DepartmentCreateResponse as DepartmentCreateResponse,
    type DepartmentUpdateResponse as DepartmentUpdateResponse,
    type DepartmentListParams as DepartmentListParams,
    type DepartmentCreateParams as DepartmentCreateParams,
    type DepartmentUpdateParams as DepartmentUpdateParams,
  };

  export {
    I9Verifications as I9Verifications,
    type PublicI9Verification as PublicI9Verification,
    type I9VerificationListResponse as I9VerificationListResponse,
    type I9VerificationListParams as I9VerificationListParams,
  };

  export {
    BankAccounts as BankAccounts,
    type PublicBankAccount as PublicBankAccount,
    type BankAccountListResponse as BankAccountListResponse,
    type BankAccountListParams as BankAccountListParams,
  };

  export { Levels as Levels, type LevelListResponse as LevelListResponse };

  export {
    Offers as Offers,
    type PublicMoneyAmount as PublicMoneyAmount,
    type OfferListResponse as OfferListResponse,
    type OfferCreateResponse as OfferCreateResponse,
    type OfferVoidResponse as OfferVoidResponse,
    type OfferExtendDeadlineResponse as OfferExtendDeadlineResponse,
    type OfferResendResponse as OfferResendResponse,
    type OfferListParams as OfferListParams,
    type OfferCreateParams as OfferCreateParams,
    type OfferVoidParams as OfferVoidParams,
    type OfferExtendDeadlineParams as OfferExtendDeadlineParams,
  };

  export {
    PayRates as PayRates,
    type PublicPayRate as PublicPayRate,
    type PublicPayRateType as PublicPayRateType,
    type PublicPayRatePer as PublicPayRatePer,
    type PayRateListResponse as PayRateListResponse,
    type PayRateListParams as PayRateListParams,
  };

  export {
    PaySplits as PaySplits,
    type PublicPaySplit as PublicPaySplit,
    type PublicPercentagePaySplit as PublicPercentagePaySplit,
    type PublicAmountPaySplit as PublicAmountPaySplit,
    type PublicPaySplitStatus as PublicPaySplitStatus,
    type PublicPaySplitPercentageAllocation as PublicPaySplitPercentageAllocation,
    type PublicPaySplitAmountAllocation as PublicPaySplitAmountAllocation,
    type PublicBankAccountReference as PublicBankAccountReference,
    type PublicPaySplitPercentage as PublicPaySplitPercentage,
    type PublicPaySplitAllocation as PublicPaySplitAllocation,
    type PublicPaySplitFixedAllocation as PublicPaySplitFixedAllocation,
    type PublicPaySplitRemainderAllocation as PublicPaySplitRemainderAllocation,
    type PaySplitListResponse as PaySplitListResponse,
    type PaySplitListParams as PaySplitListParams,
  };

  export {
    Payroll as Payroll,
    type PublicPayrollList as PublicPayrollList,
    type PublicPayrollDetail as PublicPayrollDetail,
    type PublicPaycheckList as PublicPaycheckList,
    type PublicPaycheckDetail as PublicPaycheckDetail,
    type PublicPayrollSummary as PublicPayrollSummary,
    type PublicPayrollType as PublicPayrollType,
    type PublicPayrollSubtype as PublicPayrollSubtype,
    type PublicPayrollStatus as PublicPayrollStatus,
    type PublicPayrollCurrency as PublicPayrollCurrency,
    type PublicPayPeriod as PublicPayPeriod,
    type PublicPayFrequency as PublicPayFrequency,
    type PublicPayrollDetailTotals as PublicPayrollDetailTotals,
    type PublicPayrollFundingMethod as PublicPayrollFundingMethod,
    type PublicPayrollTimeline as PublicPayrollTimeline,
    type PublicPaycheckSummary as PublicPaycheckSummary,
    type PublicPaycheckPayroll as PublicPaycheckPayroll,
    type PublicPaycheckWorker as PublicPaycheckWorker,
    type PublicPaycheckStatus as PublicPaycheckStatus,
    type PublicPaycheckPaymentMethod as PublicPaycheckPaymentMethod,
    type PublicPaycheckDetailTotals as PublicPaycheckDetailTotals,
    type PublicExchangeRate as PublicExchangeRate,
    type PublicPaycheckEarning as PublicPaycheckEarning,
    type PublicPaycheckReimbursement as PublicPaycheckReimbursement,
    type PublicPaycheckDeduction as PublicPaycheckDeduction,
    type PublicPaycheckBenefit as PublicPaycheckBenefit,
    type PublicPaycheckTax as PublicPaycheckTax,
    type PublicFundingPayrollTotals as PublicFundingPayrollTotals,
    type PublicCurrencyMoneyAmount11 as PublicCurrencyMoneyAmount11,
    type PublicCurrencyMoneyAmount as PublicCurrencyMoneyAmount,
    type PublicCurrencyMoneyAmount1 as PublicCurrencyMoneyAmount1,
    type PublicCurrencyMoneyAmount2 as PublicCurrencyMoneyAmount2,
    type PublicCurrencyMoneyAmount3 as PublicCurrencyMoneyAmount3,
    type PublicCurrencyMoneyAmount4 as PublicCurrencyMoneyAmount4,
    type PublicCurrencyMoneyAmount5 as PublicCurrencyMoneyAmount5,
    type PublicCurrencyMoneyAmount6 as PublicCurrencyMoneyAmount6,
    type PublicCurrencyMoneyAmount7 as PublicCurrencyMoneyAmount7,
    type PublicCurrencyMoneyAmount8 as PublicCurrencyMoneyAmount8,
    type PublicCurrencyMoneyAmount9 as PublicCurrencyMoneyAmount9,
    type PublicCurrencyMoneyAmount10 as PublicCurrencyMoneyAmount10,
    type PublicPaycheckSummaryTotals as PublicPaycheckSummaryTotals,
    type PublicPaycheckCurrencyTotals as PublicPaycheckCurrencyTotals,
    type PublicExchangeRateValue as PublicExchangeRateValue,
    type PublicPayrollMoneyAmount as PublicPayrollMoneyAmount,
    type PublicHourlyRate as PublicHourlyRate,
    type PublicPayrollMoneyAmount1 as PublicPayrollMoneyAmount1,
    type PublicPaycheckDeductionTaxTreatment as PublicPaycheckDeductionTaxTreatment,
    type PublicPayrollMoneyAmount2 as PublicPayrollMoneyAmount2,
    type PublicPayrollMoneyAmount3 as PublicPayrollMoneyAmount3,
    type PublicPayrollMoneyAmount4 as PublicPayrollMoneyAmount4,
    type PublicTaxPayer as PublicTaxPayer,
    type PublicPayrollMoneyAmount5 as PublicPayrollMoneyAmount5,
    type PublicPaycheckSummaryCurrencyTotals as PublicPaycheckSummaryCurrencyTotals,
    type PublicCurrencyMoneyAmount13 as PublicCurrencyMoneyAmount13,
    type PublicCurrencyMoneyAmount12 as PublicCurrencyMoneyAmount12,
    type PublicCurrencyMoneyAmount14 as PublicCurrencyMoneyAmount14,
    type PublicCurrencyMoneyAmount15 as PublicCurrencyMoneyAmount15,
    type PublicCurrencyMoneyAmount16 as PublicCurrencyMoneyAmount16,
    type PublicCurrencyMoneyAmount17 as PublicCurrencyMoneyAmount17,
    type PublicCurrencyMoneyAmount18 as PublicCurrencyMoneyAmount18,
    type PublicCurrencyMoneyAmount19 as PublicCurrencyMoneyAmount19,
    type PublicCurrencyMoneyAmount20 as PublicCurrencyMoneyAmount20,
    type PublicHourlyRateAmount as PublicHourlyRateAmount,
    type PayrollListParams as PayrollListParams,
    type PayrollListPaychecksParams as PayrollListPaychecksParams,
  };

  export {
    TimeOff as TimeOff,
    type TimeOffListAssignmentsResponse as TimeOffListAssignmentsResponse,
    type TimeOffListBalancesResponse as TimeOffListBalancesResponse,
    type TimeOffListRequestsResponse as TimeOffListRequestsResponse,
    type TimeOffListAssignmentsParams as TimeOffListAssignmentsParams,
    type TimeOffListBalancesParams as TimeOffListBalancesParams,
    type TimeOffListRequestsParams as TimeOffListRequestsParams,
  };

  export {
    Workers as Workers,
    type PublicWorkerAddress as PublicWorkerAddress,
    type PublicWorkerManager as PublicWorkerManager,
    type PublicWorkerCompensation as PublicWorkerCompensation,
    type PublicWorkerCustomField as PublicWorkerCustomField,
    type PublicWorkerSsn as PublicWorkerSsn,
    type PublicTextWorkerCustomField as PublicTextWorkerCustomField,
    type PublicNumberWorkerCustomField as PublicNumberWorkerCustomField,
    type PublicDateWorkerCustomField as PublicDateWorkerCustomField,
    type PublicBooleanWorkerCustomField as PublicBooleanWorkerCustomField,
    type PublicCurrencyWorkerCustomField as PublicCurrencyWorkerCustomField,
    type PublicPercentageWorkerCustomField as PublicPercentageWorkerCustomField,
    type PublicSelectWorkerCustomField as PublicSelectWorkerCustomField,
    type PublicMultiSelectWorkerCustomField as PublicMultiSelectWorkerCustomField,
    type WorkerUpdateResponse as WorkerUpdateResponse,
    type WorkerGetResponse as WorkerGetResponse,
    type WorkerRevealSsnResponse as WorkerRevealSsnResponse,
    type WorkerListResponse as WorkerListResponse,
    type WorkerCreateEmployeeResponse as WorkerCreateEmployeeResponse,
    type WorkerCreateContractorResponse as WorkerCreateContractorResponse,
    type WorkerInviteResponse as WorkerInviteResponse,
    type WorkerUpdateParams as WorkerUpdateParams,
    type WorkerRevealSsnParams as WorkerRevealSsnParams,
    type WorkerListParams as WorkerListParams,
    type WorkerCreateEmployeeParams as WorkerCreateEmployeeParams,
    type WorkerCreateContractorParams as WorkerCreateContractorParams,
  };

  export {
    Workplaces as Workplaces,
    type WorkplaceListResponse as WorkplaceListResponse,
    type WorkplaceCreateResponse as WorkplaceCreateResponse,
    type WorkplaceUpdateResponse as WorkplaceUpdateResponse,
    type WorkplaceListParams as WorkplaceListParams,
    type WorkplaceCreateParams as WorkplaceCreateParams,
    type WorkplaceUpdateParams as WorkplaceUpdateParams,
  };

  export {
    Webhooks as Webhooks,
    type TimeOffRequestCreatedWebhookEvent as TimeOffRequestCreatedWebhookEvent,
    type TimeOffRequestReviewedWebhookEvent as TimeOffRequestReviewedWebhookEvent,
    type TimeOffRequestDeletedWebhookEvent as TimeOffRequestDeletedWebhookEvent,
    type TimeOffBalanceAdjustedWebhookEvent as TimeOffBalanceAdjustedWebhookEvent,
    type WorkerCreatedWebhookEvent as WorkerCreatedWebhookEvent,
    type WorkerUpdatedWebhookEvent as WorkerUpdatedWebhookEvent,
    type WorkerDeletedWebhookEvent as WorkerDeletedWebhookEvent,
    type WorkerInviteSentWebhookEvent as WorkerInviteSentWebhookEvent,
    type WorkerInviteAcceptedWebhookEvent as WorkerInviteAcceptedWebhookEvent,
    type WorkerOnboardingCompletedWebhookEvent as WorkerOnboardingCompletedWebhookEvent,
    type WorkerOffboardingStartedWebhookEvent as WorkerOffboardingStartedWebhookEvent,
    type WorkerOffboardedWebhookEvent as WorkerOffboardedWebhookEvent,
    type WorkerReactivatedWebhookEvent as WorkerReactivatedWebhookEvent,
    type OfferCreatedWebhookEvent as OfferCreatedWebhookEvent,
    type OfferSignatureRequestedWebhookEvent as OfferSignatureRequestedWebhookEvent,
    type OfferSentWebhookEvent as OfferSentWebhookEvent,
    type OfferViewedWebhookEvent as OfferViewedWebhookEvent,
    type OfferAcceptedWebhookEvent as OfferAcceptedWebhookEvent,
    type OfferVoidedWebhookEvent as OfferVoidedWebhookEvent,
    type OfferExpiredWebhookEvent as OfferExpiredWebhookEvent,
    type PayRateCreatedWebhookEvent as PayRateCreatedWebhookEvent,
    type PayRateDeletedWebhookEvent as PayRateDeletedWebhookEvent,
    type ParsedWebhookEvent as ParsedWebhookEvent,
  };
}

const headerExplicitlyOmitted = (source: HeadersLike | undefined, name: string): boolean => {
  if (!source || Array.isArray(source) || source instanceof Headers) return false;
  const target = name.toLowerCase();
  return Object.entries(source).some(([key, value]) => key.toLowerCase() === target && value === null);
};

const appendAuthCookies = (headers: Headers, cookies: Record<string, string>): void => {
  for (const [name, value] of Object.entries(cookies)) {
    if (cookieHeaderHas(headers.get('Cookie'), name)) continue;
    const cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    const existing = headers.get('Cookie');
    headers.set('Cookie', existing ? existing + '; ' + cookie : cookie);
  }
};

const cookieHeaderHas = (value: string | null, name: string): boolean => {
  if (!value) return false;
  const target = encodeURIComponent(name) + '=';
  return value.split(';').some((cookie) => cookie.trim().startsWith(target));
};

/** Client fields holding a secret, masked whenever the client is printed or serialized. */
const SECRET_CLIENT_FIELDS: readonly string[] = ['apiKey', 'webhookSecret'];

/**
 * One field of the client (or of its stored options) as a printed client shows it. Credentials are
 * masked outright; header bags go through the log redaction, which knows every header this SDK
 * authenticates with; a base URL loses any userinfo or query credential it carries.
 */
const redactClientField = (key: string, value: unknown): unknown => {
  if (value === null || value === undefined) return value;
  if (SECRET_CLIENT_FIELDS.includes(key)) return '***';
  if (key === 'baseURL' && typeof value === 'string') return redactUrl(value);
  if (key === 'defaultHeaders') {
    if (value instanceof Headers) return redactHeaders(value);
    if (typeof value !== 'object' || Array.isArray(value)) return '***';
    const redactValue = (name: string, field: unknown): unknown => {
      if (typeof field === 'string') return redactHeaders({ [name]: field })[name];
      if (Array.isArray(field)) return field.map((entry) => redactValue(name, entry));
      return field === null || field === undefined ? field : '***';
    };
    return Object.fromEntries(Object.entries(value).map(([name, field]) => [name, redactValue(name, field)]));
  }
  if (typeof value !== 'object') return value;
  if (key === 'fetchOptions') {
    const { headers: _headers, ...rest } = value as Record<string, unknown>;
    return _headers === undefined ? rest : { ...rest, headers: '***' };
  }
  if (key === '_options') {
    return Object.fromEntries(
      Object.entries(value).map(([name, field]) => [name, redactClientField(name, field)]),
    );
  }
  return value;
};

/** Statuses the client follows when they carry a `Location`; any other 3xx is the server's answer. */
const REDIRECT_STATUSES: readonly number[] = [301, 302, 303, 307, 308];

/** The most redirects one request follows, the same cap the platform `fetch` uses. */
const MAX_REDIRECTS = 20;

/**
 * Headers that carry a credential: the platform's own and every header this API's security schemes
 * place. A redirect that leaves the origin drops each of them, wherever it was set.
 */
const CREDENTIAL_HEADERS: readonly string[] = ['authorization', 'cookie', 'proxy-authorization', 'x-api-key'];

/** Query parameters this API's security schemes place, carried only to a same-origin redirect target. */
const CREDENTIAL_QUERY: readonly string[] = [];

/**
 * Credential headers a browser keeps on the origin itself: it drops `Authorization` from a
 * cross-origin redirect and never lets script set the other two.
 */
const BROWSER_GUARDED_HEADERS: readonly string[] = ['authorization', 'cookie', 'proxy-authorization'];

/**
 * Whether this runtime's fetch answers a manual redirect opaquely, hiding its target: a browser
 * page, or a dedicated, shared or service worker in one. A worker scope alone is not enough,
 * since edge runtimes model theirs on it while returning the real 3xx; a browser user agent is.
 */
const hidesRedirectTargets = (): boolean => {
  if (isRunningInBrowser()) return true;
  if (typeof (globalThis as { WorkerGlobalScope?: unknown }).WorkerGlobalScope === 'undefined') return false;
  const agent: unknown = (globalThis as any).navigator?.userAgent;
  return typeof agent === 'string' && agent.startsWith('Mozilla/');
};

/** Marks the error for a redirect the client refused to follow, which `makeRequest` does not retry. */
const REFUSED_REDIRECT = Symbol('refusedRedirect');

/** Marks `error` as a redirect refusal, which no retry layer repeats. */
const markRefusedRedirect = (error: Errors.APIConnectionError): Errors.APIConnectionError => {
  (error as { [REFUSED_REDIRECT]?: true })[REFUSED_REDIRECT] = true;
  return error;
};

/** A connection error for a redirect the client will not follow. */
const refuseRedirect = (message: string): Errors.APIConnectionError =>
  markRefusedRedirect(new Errors.APIConnectionError({ message }));

/** Whether `error` is a redirect refusal from {@link refuseRedirect}. */
const isRefusedRedirect = (error: unknown): boolean =>
  typeof error === 'object' &&
  error !== null &&
  (error as { [REFUSED_REDIRECT]?: true })[REFUSED_REDIRECT] === true;

/** Whether a request body can be read only once, so a redirect that repeats the request cannot resend it. */
const isOneShotBody = (body: unknown): boolean =>
  !!(
    ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream) ||
    (typeof body === 'object' && body !== null && Symbol.asyncIterator in body)
  );
