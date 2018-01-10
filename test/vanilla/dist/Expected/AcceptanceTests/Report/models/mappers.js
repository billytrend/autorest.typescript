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
exports.AutoRestReportServiceGetReportOptionalParams = {
    required: false,
    serializedName: 'GetReportOptions',
    type: {
        name: 'Composite',
        className: 'AutoRestReportServiceGetReportOptionalParams',
        modelProperties: {
            qualifier: {
                required: false,
                serializedName: 'qualifier',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
//# sourceMappingURL=mappers.js.map