/* tslint:disable */
/* eslint-disable */
/**
 * Nessie API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Tag
 */
export interface Tag {
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    hash?: string;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    name?: string;
}

export function TagFromJSON(json: any): Tag {
    return TagFromJSONTyped(json, false);
}

export function TagFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function TagToJSON(value?: Tag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hash': value.hash,
        'name': value.name,
    };
}

