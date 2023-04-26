import {Quad_Object, Quad_Predicate, Quad_Subject} from 'rdflib/lib/tf-types'

export class RDFTriple {
    constructor(public s: Quad_Subject, public p: Quad_Predicate, public o: Quad_Object){
    }
}
