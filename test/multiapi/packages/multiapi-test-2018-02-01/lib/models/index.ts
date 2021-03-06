/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [status]
   */
  status?: number;
  /**
   * @member {string} [message]
   */
  message?: string;
}

/**
 * @interface
 * An interface representing PathsGetEmptyOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PathsGetEmptyOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [keyVersion] The key version. Default value 'v1'. Default
   * value: 'v1' .
   */
  keyVersion?: string;
}

/**
 * @interface
 * An interface representing AutoRestParameterizedCustomHostTestClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface AutoRestParameterizedCustomHostTestClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [dnsSuffix] A string value that is used as a global part
   * of the parameterized host. Default value 'host'. Default value: 'host' .
   */
  dnsSuffix?: string;
}

