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

export interface ManagementLayer {
    type?: ManagementLayer.TypeEnum;

    software?: string;

    version?: string;

}
export namespace ManagementLayer {
    export enum TypeEnum {
        Basic = <any> 'basic',
        Cloudcomputing = <any> 'cloudcomputing',
        Containercluster = <any> 'containercluster',
        Jobscheduler = <any> 'jobscheduler'
    }
}