import {RDFNamedNode} from "../RDFNamedNode";
import {NamedNode} from "rdflib"
import {Quad_Subject} from "rdflib/lib/tf-types";
import {RDFStore} from "../RDFStore";
import {dct, lexinfo, schema, skos} from "../prefixes";
import "../extensions/storeExtensions"
import {Person} from "./Person";
import {requireNotNull} from "../../util/requireNotNull";

/**
 * Class representing a http://www.w3.org/2004/02/skos/core#Concept.
 */
export class Concept extends RDFNamedNode {
    /**
     * Mapping of http://www.w3.org/2004/02/skos/core#prefLabel.
     */
    private readonly _prefLabel: string ;
    /**
     * Mapping of http://www.lexinfo.net/ontology/2.0/lexinfo#pronunciation
     */
    private readonly _pronunciation: string | null ;
    /**
     * Mapping of http://www.w3.org/2004/02/skos/core#definition.
     */
    private readonly _definitions: string[] ;
    /**
     * Mapping of http://www.w3.org/2004/02/skos/core#example.
     */
    private readonly _examples: string[] ;
    /**
     * Mapping of https://schema.org/image.
     */
    private readonly _images: string[] ;
    /**
     * Mapping of https://schema.org/video.
     */
    private readonly _videos: string[] ;
    /**
     * Mapping of http://purl.org/dc/terms/created.
     */
    private readonly _created: string | null ;
    /**
     * Mapping of http://www.w3.org/2004/02/skos/core##related.
     */
    private readonly _notes: string[] ;

    constructor(node: NamedNode){
        super(node)
        let quadSubj = this.node as Quad_Subject
        this._prefLabel = requireNotNull(
            RDFStore.store.MapAnyToValue(quadSubj, skos.namespace("prefLabel"), undefined)
        )
        this._pronunciation = RDFStore.store.MapAnyToValue(quadSubj, lexinfo.namespace("pronunciation"), undefined)
        this._definitions = RDFStore.store.MapEachToValue(quadSubj, skos.namespace("definition"), undefined)
        this._examples = RDFStore.store.MapEachToValue(quadSubj, skos.namespace("example"), undefined)
        this._images = RDFStore.store.MapEachToValue(quadSubj, schema.namespace("image"), undefined)
        this._videos = RDFStore.store.MapEachToValue(quadSubj, schema.namespace("video"), undefined)
        this._created = RDFStore.store.MapAnyToValue(quadSubj, dct.namespace("created"), undefined)
        this._notes = RDFStore.store.MapEachToValue(quadSubj, skos.namespace("note"), undefined)
    };

    public get prefLabel(): string {
        return this._prefLabel
    }

    public get pronunciation(): string | null {
        return this._pronunciation
    }

    public get definitions(): string[] {
        return this._definitions
    }

    public get examples(): string[] {
        return this._examples
    }

    public get creators(): () => Person[] {
        let subj = this.node
        return function() : Person[] {
            return RDFStore.store.MapEach(
                subj,
                dct.namespace("creator"),
                undefined,
                (node) => new Person(node)
            )
        }
    }

    public get images(): string[] {
        return this._images
    }

    public get videos(): string[] {
        return this._videos
    }

    public get synonyms(): () => Concept[] {
        let subj = this.node
        return function() : Concept[] {
            return RDFStore.store.MapEach(
                subj,
                schema.namespace("synonym"),
                undefined,
                (node) => new Concept(node)
            )
        }
    }

    public get related(): () => Concept[] {
        let subj = this.node
        return function() : Concept[] {
            return RDFStore.store.MapEach(
                subj,
                schema.namespace("synonym"),
                undefined,
                (node) => new Concept(node)
            )
        }
    }

    public get created(): string | null {
        return this._created
    }

    public get notes(): string[] {
        return this._notes
    }

    public static async all(): Promise<Concept[]>{
        let nodes = await RDFNamedNode.ofType(skos.namespace("Concept"))
        return nodes.map((node) => new Concept(node))
    }

}

