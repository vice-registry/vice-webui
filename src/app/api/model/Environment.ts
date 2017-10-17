/**
 * ViCE Image Registry
 * API endpoint of the ViCE Image Registry: search, deploy, and import virtual environments from supported execution environments like OpenStack, Docker, or bwLehrpool.
 *
 * OpenAPI spec version: 0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface Environment {
    id?: string;

    title?: string;

    userid?: string;

    credentials?: models.Credentials;

    runtimetechnology?: models.RuntimeTechnology;

    managementlayer?: models.ManagementLayer;

}
