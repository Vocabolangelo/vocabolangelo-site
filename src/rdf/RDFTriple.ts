import {Quad_Object, Quad_Predicate, Quad_Subject} from 'rdflib/lib/tf-types'

/**
 * Since the Vocabolangelo is based on a triple system this utility class is created.
 */
export class RDFTriple {
    constructor(
        public s: Quad_Subject | undefined,
        public p: Quad_Predicate | undefined,
        public o: Quad_Object | undefined
    ){ }
}
