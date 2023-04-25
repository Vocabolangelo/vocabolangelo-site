
import {NamedNode} from "rdflib"
import {Quad_Object} from "rdflib/lib/tf-types";
import {RDFStore} from "./RDFStore";
import {rdf} from "./prefixes";
import {Prefix} from "./Prefix";

/**
 * A class representing an RDF Node. It can be extended by other classes and be enriched.
 */
export class RDFNamedNode {
    constructor(public node: NamedNode){
    };

    relativeUri(prefix: Prefix): string {
        return this.node.RelativeUri(prefix)
    }

    static ofType(namedNode: Quad_Object): Promise<NamedNode[]> {
        return RDFStore.safeCall<NamedNode[]>((store) => {
            return store.each(undefined, rdf.namespace("type"), namedNode) as NamedNode[]
        })
    }
}

