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

export interface Image {
    id?: string;

    title?: string;

    userid?: string;

    imagetype?: Image.ImagetypeEnum;

    contenttype?: Image.ContenttypeEnum;

    imported?: boolean;

    originEnvironment?: models.Environment;

    environmentReference?: string;

    specifics?: any;

}
export namespace Image {
    export enum ImagetypeEnum {
        Implicit = <any> 'implicit',
        Declarative = <any> 'declarative'
    }
    export enum ContenttypeEnum {
        DiskRaw = <any> 'disk-raw',
        DiskQcow2 = <any> 'disk-qcow2',
        DiskVmdk = <any> 'disk-vmdk',
        DockerFile = <any> 'docker-file',
        DockerImage = <any> 'docker-image',
        Packerfile = <any> 'packerfile'
    }
}
