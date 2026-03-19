# TimeOff

Types:

- <code><a href="./src/resources/time-off/time-off.ts">TimeOffListAssignmentsResponse</a></code>
- <code><a href="./src/resources/time-off/time-off.ts">TimeOffListBalancesResponse</a></code>
- <code><a href="./src/resources/time-off/time-off.ts">TimeOffListRequestsResponse</a></code>

Methods:

- <code title="get /v1/time_off/assignments">client.timeOff.<a href="./src/resources/time-off/time-off.ts">listAssignments</a>({ ...params }) -> TimeOffListAssignmentsResponsesCursorPage</code>
- <code title="get /v1/time_off/balances">client.timeOff.<a href="./src/resources/time-off/time-off.ts">listBalances</a>({ ...params }) -> TimeOffListBalancesResponsesCursorPage</code>
- <code title="get /v1/time_off/requests">client.timeOff.<a href="./src/resources/time-off/time-off.ts">listRequests</a>({ ...params }) -> TimeOffListRequestsResponsesCursorPage</code>

## Policies

Types:

- <code><a href="./src/resources/time-off/policies.ts">PolicyRetrieveResponse</a></code>
- <code><a href="./src/resources/time-off/policies.ts">PolicyListResponse</a></code>

Methods:

- <code title="get /v1/time_off/policies/{id}">client.timeOff.policies.<a href="./src/resources/time-off/policies.ts">retrieve</a>(id) -> PolicyRetrieveResponse</code>
- <code title="get /v1/time_off/policies">client.timeOff.policies.<a href="./src/resources/time-off/policies.ts">list</a>({ ...params }) -> PolicyListResponsesCursorPage</code>

# Workers

Types:

- <code><a href="./src/resources/workers.ts">WorkerRetrieveResponse</a></code>
- <code><a href="./src/resources/workers.ts">WorkerListResponse</a></code>
- <code><a href="./src/resources/workers.ts">WorkerCreateContractorResponse</a></code>
- <code><a href="./src/resources/workers.ts">WorkerCreateEmployeeResponse</a></code>
- <code><a href="./src/resources/workers.ts">WorkerInviteResponse</a></code>

Methods:

- <code title="get /v1/workers/{id}">client.workers.<a href="./src/resources/workers.ts">retrieve</a>(id) -> WorkerRetrieveResponse</code>
- <code title="get /v1/workers">client.workers.<a href="./src/resources/workers.ts">list</a>({ ...params }) -> WorkerListResponsesCursorPage</code>
- <code title="delete /v1/workers/{id}">client.workers.<a href="./src/resources/workers.ts">delete</a>(id) -> void</code>
- <code title="post /v1/workers/contractor">client.workers.<a href="./src/resources/workers.ts">createContractor</a>({ ...params }) -> WorkerCreateContractorResponse</code>
- <code title="post /v1/workers/employee">client.workers.<a href="./src/resources/workers.ts">createEmployee</a>({ ...params }) -> WorkerCreateEmployeeResponse</code>
- <code title="post /v1/workers/{id}/invite">client.workers.<a href="./src/resources/workers.ts">invite</a>(id) -> WorkerInviteResponse</code>

# Departments

Types:

- <code><a href="./src/resources/departments.ts">DepartmentCreateResponse</a></code>
- <code><a href="./src/resources/departments.ts">DepartmentUpdateResponse</a></code>
- <code><a href="./src/resources/departments.ts">DepartmentListResponse</a></code>

Methods:

- <code title="post /v1/departments">client.departments.<a href="./src/resources/departments.ts">create</a>({ ...params }) -> DepartmentCreateResponse</code>
- <code title="patch /v1/departments/{id}">client.departments.<a href="./src/resources/departments.ts">update</a>(id, { ...params }) -> DepartmentUpdateResponse</code>
- <code title="get /v1/departments">client.departments.<a href="./src/resources/departments.ts">list</a>({ ...params }) -> DepartmentListResponsesCursorPage</code>

# Workplaces

Types:

- <code><a href="./src/resources/workplaces.ts">WorkplaceCreateResponse</a></code>
- <code><a href="./src/resources/workplaces.ts">WorkplaceUpdateResponse</a></code>
- <code><a href="./src/resources/workplaces.ts">WorkplaceListResponse</a></code>

Methods:

- <code title="post /v1/workplaces">client.workplaces.<a href="./src/resources/workplaces.ts">create</a>({ ...params }) -> WorkplaceCreateResponse</code>
- <code title="patch /v1/workplaces/{id}">client.workplaces.<a href="./src/resources/workplaces.ts">update</a>(id, { ...params }) -> WorkplaceUpdateResponse</code>
- <code title="get /v1/workplaces">client.workplaces.<a href="./src/resources/workplaces.ts">list</a>({ ...params }) -> WorkplaceListResponsesCursorPage</code>
