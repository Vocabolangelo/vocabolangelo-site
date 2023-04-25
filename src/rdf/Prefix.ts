import {Namespace} from "rdflib";

export class Prefix {
    constructor(public uri: string){
    };

    get namespace() {
        return Namespace(this.uri)
    }
}

