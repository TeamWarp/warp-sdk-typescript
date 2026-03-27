// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.timeOff.listAssignments',
    fullyQualifiedName: 'timeOff.listAssignments',
    httpMethod: 'get',
    httpPath: '/v1/time_off/assignments',
  },
  {
    clientCallName: 'client.timeOff.listBalances',
    fullyQualifiedName: 'timeOff.listBalances',
    httpMethod: 'get',
    httpPath: '/v1/time_off/balances',
  },
  {
    clientCallName: 'client.timeOff.listRequests',
    fullyQualifiedName: 'timeOff.listRequests',
    httpMethod: 'get',
    httpPath: '/v1/time_off/requests',
  },
  {
    clientCallName: 'client.timeOff.policies.retrieve',
    fullyQualifiedName: 'timeOff.policies.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/time_off/policies/{id}',
  },
  {
    clientCallName: 'client.timeOff.policies.list',
    fullyQualifiedName: 'timeOff.policies.list',
    httpMethod: 'get',
    httpPath: '/v1/time_off/policies',
  },
  {
    clientCallName: 'client.workers.retrieve',
    fullyQualifiedName: 'workers.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/workers/{id}',
  },
  {
    clientCallName: 'client.workers.list',
    fullyQualifiedName: 'workers.list',
    httpMethod: 'get',
    httpPath: '/v1/workers',
  },
  {
    clientCallName: 'client.workers.delete',
    fullyQualifiedName: 'workers.delete',
    httpMethod: 'delete',
    httpPath: '/v1/workers/{id}',
  },
  {
    clientCallName: 'client.workers.createContractor',
    fullyQualifiedName: 'workers.createContractor',
    httpMethod: 'post',
    httpPath: '/v1/workers/contractor',
  },
  {
    clientCallName: 'client.workers.createEmployee',
    fullyQualifiedName: 'workers.createEmployee',
    httpMethod: 'post',
    httpPath: '/v1/workers/employee',
  },
  {
    clientCallName: 'client.workers.invite',
    fullyQualifiedName: 'workers.invite',
    httpMethod: 'post',
    httpPath: '/v1/workers/{id}/invite',
  },
  {
    clientCallName: 'client.departments.create',
    fullyQualifiedName: 'departments.create',
    httpMethod: 'post',
    httpPath: '/v1/departments',
  },
  {
    clientCallName: 'client.departments.update',
    fullyQualifiedName: 'departments.update',
    httpMethod: 'patch',
    httpPath: '/v1/departments/{id}',
  },
  {
    clientCallName: 'client.departments.list',
    fullyQualifiedName: 'departments.list',
    httpMethod: 'get',
    httpPath: '/v1/departments',
  },
  {
    clientCallName: 'client.workplaces.create',
    fullyQualifiedName: 'workplaces.create',
    httpMethod: 'post',
    httpPath: '/v1/workplaces',
  },
  {
    clientCallName: 'client.workplaces.update',
    fullyQualifiedName: 'workplaces.update',
    httpMethod: 'patch',
    httpPath: '/v1/workplaces/{id}',
  },
  {
    clientCallName: 'client.workplaces.list',
    fullyQualifiedName: 'workplaces.list',
    httpMethod: 'get',
    httpPath: '/v1/workplaces',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
