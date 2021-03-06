/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Mappers from "../models/pathsMappers";
import * as Parameters from "../models/parameters";
import { AutoRestParameterizedHostTestClientContext } from "../autoRestParameterizedHostTestClientContext";

/** Class representing a Paths. */
export class Paths {
  private readonly client: AutoRestParameterizedHostTestClientContext;

  /**
   * Create a Paths.
   * @param {AutoRestParameterizedHostTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestParameterizedHostTestClientContext) {
    this.client = client;
  }

  /**
   * Get a 200 to test a valid base uri
   * @param accountName Account Name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getEmpty(accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param accountName Account Name
   * @param callback The callback
   */
  getEmpty(accountName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param accountName Account Name
   * @param options The optional parameters
   * @param callback The callback
   */
  getEmpty(accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEmpty(accountName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        accountName,
        options
      },
      getEmptyOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "customuri",
  urlParameters: [
    Parameters.accountName,
    Parameters.host
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
