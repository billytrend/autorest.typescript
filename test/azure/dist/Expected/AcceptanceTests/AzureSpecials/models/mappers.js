"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ms_rest_azure_js_1 = require("ms-rest-azure-js");
exports.CloudError = ms_rest_azure_js_1.CloudErrorMapper;
exports.BaseResource = ms_rest_azure_js_1.BaseResourceMapper;
exports.ErrorModel = {
    required: false,
    serializedName: 'Error',
    type: {
        name: 'Composite',
        className: 'ErrorModel',
        modelProperties: {
            status: {
                required: false,
                serializedName: 'status',
                type: {
                    name: 'Number'
                }
            },
            constantId: {
                required: true,
                isConstant: true,
                serializedName: 'constantId',
                defaultValue: 1,
                type: {
                    name: 'Number'
                }
            },
            message: {
                required: false,
                serializedName: 'message',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
exports.OdataFilter = {
    required: false,
    serializedName: 'OdataFilter',
    type: {
        name: 'Composite',
        className: 'OdataFilter',
        modelProperties: {
            id: {
                required: false,
                serializedName: 'id',
                type: {
                    name: 'Number'
                }
            },
            name: {
                required: false,
                serializedName: 'name',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
exports.HeaderCustomNamedRequestIdParamGroupingParameters = {
    required: false,
    type: {
        name: 'Composite',
        className: 'HeaderCustomNamedRequestIdParamGroupingParameters',
        modelProperties: {
            fooClientRequestId: {
                required: true,
                type: {
                    name: 'String'
                }
            }
        }
    }
};
exports.ApiVersionLocalGetMethodLocalNullOptionalParams = {
    required: false,
    serializedName: 'GetMethodLocalNullOptions',
    type: {
        name: 'Composite',
        className: 'ApiVersionLocalGetMethodLocalNullOptionalParams',
        modelProperties: {
            apiVersion: {
                required: false,
                serializedName: 'api-version',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
exports.SkipUrlEncodingGetMethodQueryNullOptionalParams = {
    required: false,
    serializedName: 'GetMethodQueryNullOptions',
    type: {
        name: 'Composite',
        className: 'SkipUrlEncodingGetMethodQueryNullOptionalParams',
        modelProperties: {
            q1: {
                required: false,
                serializedName: 'q1',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
exports.OdataGetWithFilterOptionalParams = {
    required: false,
    serializedName: 'GetWithFilterOptions',
    type: {
        name: 'Composite',
        className: 'OdataGetWithFilterOptionalParams',
        modelProperties: {
            filter: {
                required: false,
                serializedName: '$filter',
                type: {
                    name: 'String'
                }
            },
            top: {
                required: false,
                serializedName: '$top',
                type: {
                    name: 'Number'
                }
            },
            orderby: {
                required: false,
                serializedName: '$orderby',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
//# sourceMappingURL=mappers.js.map