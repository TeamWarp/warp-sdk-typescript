# TimeOff

Types:

- <code><a href="./src/resources/time-off/time-off.ts">TimeOffListAssignmentsResponse</a></code>
- <code><a href="./src/resources/time-off/time-off.ts">TimeOffListBalancesResponse</a></code>
- <code><a href="./src/resources/time-off/time-off.ts">TimeOffListRequestsResponse</a></code>

Methods:

- <code title="get /v1/time_off/assignments">client.timeOff.<a href="./src/resources/time-off/time-off.ts">listAssignments</a>({ ...params }) -> TimeOffListAssignmentsResponse</code>
- <code title="get /v1/time_off/balances">client.timeOff.<a href="./src/resources/time-off/time-off.ts">listBalances</a>({ ...params }) -> TimeOffListBalancesResponse</code>
- <code title="get /v1/time_off/requests">client.timeOff.<a href="./src/resources/time-off/time-off.ts">listRequests</a>({ ...params }) -> TimeOffListRequestsResponse</code>

## Policies

Types:

- <code><a href="./src/resources/time-off/policies.ts">PolicyRetrieveResponse</a></code>
- <code><a href="./src/resources/time-off/policies.ts">PolicyListResponse</a></code>

Methods:

- <code title="get /v1/time_off/policies/{id}">client.timeOff.policies.<a href="./src/resources/time-off/policies.ts">retrieve</a>(id) -> PolicyRetrieveResponse</code>
- <code title="get /v1/time_off/policies">client.timeOff.policies.<a href="./src/resources/time-off/policies.ts">list</a>({ ...params }) -> PolicyListResponse</code>

# Workers

Types:

- <code><a href="./src/resources/workers.ts">WorkerRetrieveResponse</a></code>
- <code><a href="./src/resources/workers.ts">WorkerListResponse</a></code>

Methods:

- <code title="get /v1/workers/{id}">client.workers.<a href="./src/resources/workers.ts">retrieve</a>(id) -> WorkerRetrieveResponse</code>
- <code title="get /v1/workers">client.workers.<a href="./src/resources/workers.ts">list</a>({ ...params }) -> WorkerListResponse</code>
