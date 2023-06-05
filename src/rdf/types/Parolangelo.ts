import {RDFNamedNode} from '../RDFNamedNode'
import {vocang} from '../prefixes'
import '../extensions/storeExtensions'
import {Concept} from './Concept'

/**
 * Class representing a Parolangelo.
 */
export class Parolangelo extends Concept {

    public static async all(): Promise<Parolangelo[]>{
        const nodes = await RDFNamedNode.ofType(vocang.namespace('Parolangelo'))
        return nodes.map((node) => new Parolangelo(node.node))
    }

}
