import {RDFNamedNode} from "../RDFNamedNode";
import {NamedNode} from "rdflib"
import {dct, foaf, rel, schema} from "../prefixes";
import {RDFStore} from "../RDFStore";
import {requireNotNull} from "../../util/requireNotNull";
import {Concept} from "./Concept";

/**
 * Class representing a http://xmlns.com/foaf/0.1/Person.
 */
export class Person extends RDFNamedNode {
    /**
     * Mapping of http://xmlns.com/foaf/0.1/firstName.
     */
    private readonly _firstName: string ;
    /**
     * Mapping of http://xmlns.com/foaf/0.1/lastName.
     */
    private readonly _lastName: string ;
    /**
     * Mapping of http://xmlns.com/foaf/0.1/nickname.
     */
    private readonly _nick: string | null;
    /**
     * Mapping of https://schema.org/image.
     */
    private readonly _images: string[];

    constructor(node: NamedNode){
        super(node)
        this._firstName = requireNotNull(
            RDFStore.store.MapAnyToValue(node, foaf.namespace("firstName"), undefined)
        )
        this._lastName = requireNotNull(
            RDFStore.store.MapAnyToValue(node, foaf.namespace("lastName"), undefined)
        )
        this._nick = RDFStore.store.MapAnyToValue(node, foaf.namespace("nick"), undefined)
        this._images = RDFStore.store.MapEachToValue(node, schema.namespace("image"), undefined)
    };

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

    public get images(): string[] {
        return this._images
    }

    public get friends(): () => Person[] {
        let subj = this.node
        return function (): Person[]{
            return RDFStore.store.MapEach(
                subj,
                rel.namespace("friendOf"),
                undefined,
                (node) => new Person(node)
            )
        }
    }

    public get partners(): () => Person[] {
        let subj = this.node
        return function (): Person[] {
            return RDFStore.store.MapEach(
                subj,
                rel.namespace("spouseOf"),
                undefined,
                (node) => new Person(node)
            )
        }
    }

    public creatorOf(): () => Concept[] {
        let subj = this.node
        return function (): Concept[] {
            return RDFStore.store.MapEach(
                undefined,
                dct.namespace("creator"),
                subj,
                (node) => new Concept(node)
            )
        }
    }

    public static async all(): Promise<Person[]>{
        let nodes = await RDFNamedNode.ofType(foaf.namespace("Person"))
        return nodes.map((node) => new Person(node))
    }
}

