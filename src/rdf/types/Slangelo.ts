import {Concept} from './Concept'
import {RDFNamedNode} from '../RDFNamedNode'
import {vocang} from '../prefixes'

/**
 * Class representing a Parolangelo.
 */
export class Slangelo extends Concept {

    public static async all(): Promise<Slangelo[]>{
        const nodes = await RDFNamedNode.ofType(vocang.namespace('Slangelo'))
        return nodes.map((node) => new Slangelo(node.node))
    }

}
