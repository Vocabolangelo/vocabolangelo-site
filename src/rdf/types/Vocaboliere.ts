import {RDFNamedNode} from '../RDFNamedNode'
import {NamedNode} from 'rdflib'
import {dct, foaf, org, rel, schema, vocang} from '../prefixes'
import {RDFStore} from '../RDFStore'
import {requireNotNull} from '../../util/requireNotNull'
import {RDFTriple} from '../RDFTriple'

/**
 * Class representing a Vocaboliere .
 */
export class Vocaboliere extends RDFNamedNode {
    /**
     * Mapping of http://xmlns.com/foaf/0.1/firstName.
     */
    private readonly _firstName: string
    /**
     * Mapping of http://xmlns.com/foaf/0.1/lastName.
     */
    private readonly _lastName: string
    /**
     * Mapping of http://xmlns.com/foaf/0.1/nickname.
     */
    private readonly _nick: string | null
    /**
     * Mapping of http://xmlns.com/foaf/0.1/gender.
     */
    private readonly _gender: string
    /**
     * Mapping of https://schema.org/image.
     */
    private readonly _images: string[]

    constructor(node: NamedNode){
        super(node)
        this._firstName = requireNotNull(
            RDFStore.store.MapAnyToValue(new RDFTriple(node, foaf.namespace('firstName'), undefined)),
            `foaf:firstName can not be null for node ${node.uri}`
        )
        this._lastName = requireNotNull(
            RDFStore.store.MapAnyToValue(new RDFTriple(node, foaf.namespace('lastName'), undefined)),
            `foaf:lastName can not be null for node ${node.uri}`
        )
        this._nick = RDFStore.store.MapAnyToValue(new RDFTriple(node, foaf.namespace('nick'), undefined))
        this._gender = requireNotNull(
            RDFStore.store.MapAnyToValue(new RDFTriple(node, foaf.namespace('gender'), undefined))
        )
        this._images = RDFStore.store.MapEachToValue(new RDFTriple(node, schema.namespace('image'), undefined))
    }

    public get firstName(): string {
        return this._firstName
    }

    public get lastName(): string {
        return this._lastName
    }

    public fullName(isLastNameBefore = false): string {
        if (isLastNameBefore) {
            return `${this._lastName} ${this._firstName}`
        } else {
            return `${this._firstName} ${this._lastName}`
        }
    }

    public get nick(): string | null {
        return this._nick
    }

    public get gender(): string {
        return this._gender
    }

    static genderString(g: string): string {
        if (g === 'male') {
            return 'Maschile'
        } else if (g === 'female') {
            return 'Femminile'
        } else {
            return 'Non binario'
        }
    }

    public get images(): string[] {
        return this._images
    }

    public get friends(): () => Vocaboliere[] {
        const subj = this.node
        return function (): Vocaboliere[]{
            return RDFStore.store.MapEach(
                new RDFTriple(subj, rel.namespace('friendOf'), undefined),
                (node) => new Vocaboliere(node)
            )
        }
    }

    public get partners(): () => Vocaboliere[] {
        const subj = this.node
        return function (): Vocaboliere[] {
            return RDFStore.store.MapEach(
                new RDFTriple(subj, rel.namespace('spouseOf'), undefined),
                (node) => new Vocaboliere(node)
            )
        }
    }

    public get siblings(): () => Vocaboliere[] {
        const subj = this.node
        return function (): Vocaboliere[] {
            return RDFStore.store.MapEach(
                new RDFTriple(subj, rel.namespace('siblingOf'), undefined),
                (node) => new Vocaboliere(node)
            )
        }
    }

    public creatorOf(): () => RDFNamedNode[] {
        const subj = this.node
        return function (): RDFNamedNode[] {
            return RDFStore.store.MapEach(
                new RDFTriple(undefined, dct.namespace('creator'), subj),
                (node) => new RDFNamedNode(node)
            )
        }
    }

    /**
     * Mapping of http://www.w3.org/ns/org#memberOf.
     */
    public memberOf(): () => RDFNamedNode[] {
        const subj = this.node
        return function (): RDFNamedNode[] {
            return RDFStore.store.MapEach(
                new RDFTriple(subj, org.namespace('memberOf'), undefined),
                (node) => new RDFNamedNode(node)
            )
        }
    }

    public static async all(): Promise<Vocaboliere[]>{
        const nodes = await RDFNamedNode.ofType(vocang.namespace('Vocaboliere'))
        return nodes.map((node) => new Vocaboliere(node.node))
    }

}
