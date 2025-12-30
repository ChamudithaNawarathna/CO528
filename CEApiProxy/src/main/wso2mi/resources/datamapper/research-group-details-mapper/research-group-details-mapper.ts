import * as dmUtils from "./dm-utils";
declare var DM_PROPERTIES: any;

/*
* title : "root",
* inputType : "JSON",
*/
interface Root {
    status: string
    data: {
        code: string
        name: string
        metadata: {
            description: string
            primary_contact_person: string
            maintainer: string
            page: string
            website: string
        }
    }
}

/*
* title : "root",
* outputType : "JSON",
*/
interface OutputRoot {
    status: string
    data: {
        code: string
        name: string
        description: string
        primary_contact_person: string
        maintainer: string
        page: string
        website: string
    }
}



/**
 * functionName : map_S_root_S_root
 * inputVariable : inputroot
*/
export function mapFunction(input: Root): OutputRoot {
    return {
        data: {
            website: input.data.metadata.website,
            page: input.data.metadata.page,
            maintainer: input.data.metadata.maintainer,
            primary_contact_person: input.data.metadata.primary_contact_person,
            description: input.data.metadata.description,
            name: input.data.name,
            code: input.data.code,
        },
        status: input.status,
    }
}

