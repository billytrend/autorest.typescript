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
import * as Models from "../models";
import * as Mappers from "../models/httpFailureMappers";
import { AutoRestHttpInfrastructureTestServiceContext } from "../autoRestHttpInfrastructureTestServiceContext";

/** Class representing a HttpFailure. */
export class HttpFailure {
  private readonly client: AutoRestHttpInfrastructureTestServiceContext;

  /**
   * Create a HttpFailure.
   * @param {AutoRestHttpInfrastructureTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestHttpInfrastructureTestServiceContext) {
    this.client = client;
  }

  /**
   * Get empty error form server
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getEmptyError(): Promise<Models.HttpFailureGetEmptyErrorResponse>;
  getEmptyError(options: msRest.RequestOptionsBase): Promise<Models.HttpFailureGetEmptyErrorResponse>;
  getEmptyError(callback: msRest.ServiceCallback<boolean>): void;
  getEmptyError(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  getEmptyError(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<boolean>): Promise<Models.HttpFailureGetEmptyErrorResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getEmptyErrorOperationSpec,
      callback) as Promise<Models.HttpFailureGetEmptyErrorResponse>;
  }

  /**
   * Get empty error form server
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getNoModelError(): Promise<Models.HttpFailureGetNoModelErrorResponse>;
  getNoModelError(options: msRest.RequestOptionsBase): Promise<Models.HttpFailureGetNoModelErrorResponse>;
  getNoModelError(callback: msRest.ServiceCallback<boolean>): void;
  getNoModelError(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  getNoModelError(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<boolean>): Promise<Models.HttpFailureGetNoModelErrorResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNoModelErrorOperationSpec,
      callback) as Promise<Models.HttpFailureGetNoModelErrorResponse>;
  }

  /**
   * Get empty response from server
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getNoModelEmpty(): Promise<Models.HttpFailureGetNoModelEmptyResponse>;
  getNoModelEmpty(options: msRest.RequestOptionsBase): Promise<Models.HttpFailureGetNoModelEmptyResponse>;
  getNoModelEmpty(callback: msRest.ServiceCallback<boolean>): void;
  getNoModelEmpty(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  getNoModelEmpty(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<boolean>): Promise<Models.HttpFailureGetNoModelEmptyResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNoModelEmptyOperationSpec,
      callback) as Promise<Models.HttpFailureGetNoModelEmptyResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getEmptyErrorOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/failure/emptybody/error",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Boolean"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getNoModelErrorOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/failure/nomodel/error",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Boolean"
        }
      }
    },
    default: {}
  },
  serializer
};

const getNoModelEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/failure/nomodel/empty",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Boolean"
        }
      }
    },
    default: {}
  },
  serializer
};
