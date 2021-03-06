/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
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
 * An interface representing ParameterGroupingPostRequiredParameters.
 * Additional parameters for postRequired operation.
 *
 */
export interface ParameterGroupingPostRequiredParameters {
  /**
   * @member {number} body
   */
  body: number;
  /**
   * @member {string} [customHeader]
   */
  customHeader?: string;
  /**
   * @member {number} [query] Query parameter with default. Default value: 30 .
   */
  query?: number;
  /**
   * @member {string} path Path parameter
   */
  path: string;
}

/**
 * @interface
 * An interface representing ParameterGroupingPostOptionalParameters.
 * Additional parameters for postOptional operation.
 *
 */
export interface ParameterGroupingPostOptionalParameters {
  /**
   * @member {string} [customHeader]
   */
  customHeader?: string;
  /**
   * @member {number} [query] Query parameter with default. Default value: 30 .
   */
  query?: number;
}

/**
 * @interface
 * An interface representing FirstParameterGroup.
 * Additional parameters for a set of operations, such as:
 * ParameterGrouping_postMultiParamGroups,
 * ParameterGrouping_postSharedParameterGroupObject.
 *
 */
export interface FirstParameterGroup {
  /**
   * @member {string} [headerOne]
   */
  headerOne?: string;
  /**
   * @member {number} [queryOne] Query parameter with default. Default value:
   * 30 .
   */
  queryOne?: number;
}

/**
 * @interface
 * An interface representing ParameterGroupingPostMultiParamGroupsSecondParamGroup.
 * Additional parameters for postMultiParamGroups operation.
 *
 */
export interface ParameterGroupingPostMultiParamGroupsSecondParamGroup {
  /**
   * @member {string} [headerTwo]
   */
  headerTwo?: string;
  /**
   * @member {number} [queryTwo] Query parameter with default. Default value:
   * 30 .
   */
  queryTwo?: number;
}

/**
 * @interface
 * An interface representing ParameterGroupingPostOptionalOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ParameterGroupingPostOptionalOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {ParameterGroupingPostOptionalParameters}
   * [parameterGroupingPostOptionalParameters] Additional parameters for the
   * operation
   */
  parameterGroupingPostOptionalParameters?: ParameterGroupingPostOptionalParameters;
}

/**
 * @interface
 * An interface representing ParameterGroupingPostMultiParamGroupsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ParameterGroupingPostMultiParamGroupsOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {FirstParameterGroup} [firstParameterGroup] Additional parameters
   * for the operation
   */
  firstParameterGroup?: FirstParameterGroup;
  /**
   * @member {ParameterGroupingPostMultiParamGroupsSecondParamGroup}
   * [parameterGroupingPostMultiParamGroupsSecondParamGroup] Additional
   * parameters for the operation
   */
  parameterGroupingPostMultiParamGroupsSecondParamGroup?: ParameterGroupingPostMultiParamGroupsSecondParamGroup;
}

/**
 * @interface
 * An interface representing ParameterGroupingPostSharedParameterGroupObjectOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ParameterGroupingPostSharedParameterGroupObjectOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {FirstParameterGroup} [firstParameterGroup] Additional parameters
   * for the operation
   */
  firstParameterGroup?: FirstParameterGroup;
}

/**
 * @interface
 * An interface representing AutoRestParameterGroupingTestServiceOptions.
 * @extends AzureServiceClientOptions
 */
export interface AutoRestParameterGroupingTestServiceOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

