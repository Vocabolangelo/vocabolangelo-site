import {Store} from "rdflib";
import {Quad_Object, Quad_Predicate, Quad_Subject} from "rdflib/lib/tf-types";
import {NamedNode} from "rdflib"
import {RDFStore} from "../RDFStore";

declare module 'rdflib' {
    interface Store {

        // @ts-ignore
        // @ts-ignore
        /**
         * Map the resulting array of NamedNode retrieved using the "each" function and map them to instances of T
         * using a mapping function.
         * @template T
         * @param {Quad_Subject} [s=undefined] the Quad_Subject.
         * @param {Quad_Predicate} [p=undefined] the Quad_Predicate.
         * @param {Quad_Object} [o=undefined] the Quad_Object.
         * @param mappingFunction a Mapping function from a NamedNode to a generic T.
         * @returns {T[]}
         */
        MapEach<T>(
            s: Quad_Subject | undefined,
            p: Quad_Predicate | undefined,
            o: Quad_Object | undefined,
            mappingFunction: (node: NamedNode) => T
        ): T[];

        /**
         * Map the resulting array of NamedNode retrieved using the "each" function and map them to instances of a
         * string, accessing their value.
         * @param {Quad_Subject} [s=undefined] the Quad_Subject.
         * @param {Quad_Predicate} [p=undefined] the Quad_Predicate.
         * @param {Quad_Object} [o=undefined] the Quad_Object.
         * @returns {string[]}
         */
        MapEachToValue(
            s: Quad_Subject | undefined,
            p: Quad_Predicate | undefined,
            o: Quad_Object | undefined
        ): string[];

        /**
         * Map the resulting NamedNode retrieved using the "any" function and map it to an instance of T using a mapping
         * function. If a node could not be found, null is returned.
         * @template T
         * @param {Quad_Subject} [s=undefined] the Quad_Subject.
         * @param {Quad_Predicate} [p=undefined] the Quad_Predicate.
         * @param {Quad_Object} [o=undefined] the Quad_Object.
         * @param mappingFunction a Mapping function from a NamedNode to a generic T.
         * @returns {T | null}
         */
        MapAny<T>(
            s: Quad_Subject | undefined,
            p: Quad_Predicate | undefined,
            o: Quad_Object | undefined,
            mappingFunction: (node: NamedNode) => T
        ): T | null

        /**
         * Map the resulting NamedNode retrieved using the "any" function and map it to an instance of a string,
         * accessing its value. If a node could not be found, null is returned.
         * @param {Quad_Subject} [s=undefined] the Quad_Subject.
         * @param {Quad_Predicate} [p=undefined] the Quad_Predicate.
         * @param {Quad_Object} [o=undefined] the Quad_Object.
         * @returns {string}
         */
        MapAnyToValue(
            s: Quad_Subject | undefined,
            p: Quad_Predicate | undefined,
            o: Quad_Object | undefined
        ): string | null
    }
}

Store.prototype.MapEach = function<T>(
    s: Quad_Subject | undefined,
    p: Quad_Predicate | undefined,
    o: Quad_Object | undefined,
    mappingFunction: (node: NamedNode) => T
): T[] {
    return this.each(s, p, o).map(node=> mappingFunction(node as NamedNode))
}

Store.prototype.MapEachToValue = function (
    s: Quad_Subject | undefined,
    p: Quad_Predicate | undefined,
    o: Quad_Predicate | undefined
): string[] {
    return this.MapEach(s, p, o, (node) => node.value)
}

Store.prototype.MapAny = function<T> (
    s: Quad_Subject | undefined,
    p: Quad_Predicate | undefined,
    o: Quad_Object | undefined,
    mappingFunction: (node: NamedNode) => T
): T | null {
    let value = RDFStore.store.any(s, p, o)
    return value === null ? null : mappingFunction(value as NamedNode)
}

Store.prototype.MapAnyToValue = function (
    s: Quad_Subject | undefined,
    p: Quad_Predicate | undefined,
    o: Quad_Object | undefined
): string | null {
    return this.MapAny(s, p, o, (node) => node.value)
}
