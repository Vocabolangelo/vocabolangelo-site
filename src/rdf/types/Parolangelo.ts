import {RDFNamedNode} from '../RDFNamedNode'
import {NamedNode} from 'rdflib'
import {Quad_Subject} from 'rdflib/lib/tf-types'
import {RDFStore} from '../RDFStore'
import {dct, lexinfo, schema, scot, skos, vocang} from '../prefixes'
import '../extensions/storeExtensions'
import {requireNotNull} from '../../util/requireNotNull'
import {RDFTriple} from '../RDFTriple'

/**
 * Class representing a Parolangelo.
 */
export class Parolangelo extends RDFNamedNode {
    /**
     * Mapping of http://www.w3.org/2004/02/skos/core#prefLabel.
     */
    private readonly _prefLabel: string
    /**
     * Mapping of http://www.lexinfo.net/ontology/2.0/lexinfo#pronunciation
     */
    private readonly _pronunciation: string | null
    /**
     * Mapping of http://www.w3.org/2004/02/skos/core#definition.
     */
    private readonly _definitions: string[]
    /**
     * Mapping of http://www.w3.org/2004/02/skos/core#example.
     */
    private readonly _examples: string[]
    /**
     * Mapping of https://schema.org/image.
     */
    private readonly _images: string[]
    /**
     * Mapping of https://schema.org/video.
     */
    private readonly _videos: string[]
    /**
     * Mapping of http://purl.org/dc/terms/created.
     */
    private readonly _created: string | null
    /**
     * Mapping of http://www.w3.org/2004/02/skos/core##related.
     */
    private readonly _notes: string[]

    constructor(node: NamedNode){
        super(node)
        const quadSubj = this.node as Quad_Subject
        this._prefLabel = requireNotNull(RDFStore.store.MapAnyToValue(
            new RDFTriple(quadSubj, skos.namespace('prefLabel'), undefined)
        ))
        this._pronunciation = RDFStore.store.MapAnyToValue(
            new RDFTriple(quadSubj, lexinfo.namespace('pronunciation'), undefined)
        )
        this._definitions = RDFStore.store.MapEachToValue(
            new RDFTriple(quadSubj, skos.namespace('definition'), undefined)
        )
        this._examples = RDFStore.store.MapEachToValue(
            new RDFTriple(quadSubj, skos.namespace('example'), undefined)
        )
        this._images = RDFStore.store.MapEachToValue(
            new RDFTriple(quadSubj, schema.namespace('image'), undefined)
        )
        this._videos = RDFStore.store.MapEachToValue(
            new RDFTriple(quadSubj, schema.namespace('video'), undefined)
        )
        this._created = RDFStore.store.MapAnyToValue(
            new RDFTriple(quadSubj, dct.namespace('created'), undefined)
        )
        this._notes = RDFStore.store.MapEachToValue(
            new RDFTriple(quadSubj, skos.namespace('note'), undefined)
        )
    }

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

    public creators(filterFunction: (node:NamedNode) => boolean): () => RDFNamedNode[] {
        const subj = this.node
        return function() : RDFNamedNode[] {
            return RDFStore.store.CollectEach(
                new RDFTriple(subj, dct.namespace('creator'), undefined),
                (node) => filterFunction(node),
                (node) => new RDFNamedNode(node)
            )
        }
    }

    public get images(): string[] {
        return this._images
    }

    public get videos(): string[] {
        return this._videos
    }

    public get synonyms(): () => Parolangelo[] {
        const subj = this.node
        return function() : Parolangelo[] {
            return RDFStore.store.MapEach(
                new RDFTriple(subj, scot.namespace('synonym'), undefined),
                (node) => new Parolangelo(node)
            )
        }
    }

    public get related(): () => Parolangelo[] {
        const subj = this.node
        return function() : Parolangelo[] {
            return RDFStore.store.MapEach(
                new RDFTriple(subj, skos.namespace('related'), undefined),
                (node) => new Parolangelo(node)
            )
        }
    }

    public get created(): string | null {
        return this._created
    }

    public get notes(): string[] {
        return this._notes
    }

    public static async all(): Promise<Parolangelo[]>{
        const nodes = await RDFNamedNode.ofType(vocang.namespace('Parolangelo'))
        return nodes.map((node) => new Parolangelo(node.node))
    }

}
