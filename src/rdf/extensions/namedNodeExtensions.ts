import {NamedNode} from "rdflib";
import {Prefix} from "../Prefix";

declare module 'rdflib' {
    interface NamedNode {
        RelativeUri(prefix: Prefix): string;
    }
}

NamedNode.prototype.RelativeUri = function(prefix: Prefix): string {
    return this.uri.slice(prefix.uri.length)
}