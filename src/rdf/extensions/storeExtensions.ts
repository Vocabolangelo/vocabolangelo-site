import {Store} from 'rdflib'
import {NamedNode} from 'rdflib'
import {RDFStore} from '../RDFStore'
import {RDFTriple} from '../RDFTriple'

declare module 'rdflib' {
    interface Store {

        /**
         * Map the resulting array of NamedNode retrieved using the "each" function and map them to instances of T
         * using a mapping function.
         * @template T
         * @param {RDFTriple} [t] the RDFTriple.
         * @param {(node: NamedNode) => T} [mappingFunction]  a Mapping function from a NamedNode to a generic T.
         * @returns {T[]}
         */
        MapEach<T>(t: RDFTriple, mappingFunction: (node: NamedNode) => T): T[];

        /**
         * Map the resulting array of NamedNode retrieved using the "each" function and map them to instances of a
         * string, accessing their value.
         * @param {RDFTriple} [t] the RDFTriple.
         * @returns {string[]}
         */
        MapEachToValue(t: RDFTriple): string[];

        /**
         * Map the resulting NamedNode retrieved using the "any" function and map it to an instance of T using a mapping
         * function. If a node could not be found, null is returned.
         * @template T
         * @param {RDFTriple} [t] the RDFTriple.
         * @param {(node: NamedNode) => T} [mappingFunction] a Mapping function from a NamedNode to a generic T.
         * @returns {T | null}
         */
        MapAny<T>(t: RDFTriple, mappingFunction: (node: NamedNode) => T): T | null

        /**
         * Map the resulting NamedNode retrieved using the "any" function and map it to an instance of a string,
         * accessing its value. If a node could not be found, null is returned.
         * @param {RDFTriple} [t] the RDFTriple.
         * @returns {string}
         */
        MapAnyToValue(t: RDFTriple): string | null

        /**
         * Map the resulting array of NamedNode retrieved using the "each" function and map them to instances of T
         * using a mapping function, but only if filterFunction is valid for each object.
         * @template T
         * @param {RDFTriple} [t] the RDFTriple.
         * @param filterFunction a Filtering function from a NamedNode to a boolean.
         * @param mappingFunction a Mapping function from a NamedNode to a generic T.
         * @returns {T[]}
         */
        CollectEach<T>(
            t: RDFTriple,
            filterFunction: (node: NamedNode) => boolean,
            mappingFunction: (node: NamedNode) => T
        ): T[];
    }
}

Store.prototype.MapEach = function<T>(
    t: RDFTriple,
    mappingFunction: (node: NamedNode) => T
): T[] {
    return this.CollectEach(t, () => true, mappingFunction)
}

Store.prototype.MapEachToValue = function (t: RDFTriple): string[] {
    return this.MapEach(t, (node) => node.value)
}

Store.prototype.MapAny = function MapAny<T> (t: RDFTriple, mappingFunction: (node: NamedNode) => T): T | null {
    const value = RDFStore.store.any(t.s, t.p, t.o)
    return value === null ? null : mappingFunction(value as NamedNode)
}

Store.prototype.MapAnyToValue = function (t: RDFTriple): string | null {
    return this.MapAny(t, (node) => node.value)
}

Store.prototype.CollectEach = function<T> (
    t: RDFTriple,
    filterFunction: (node: NamedNode) => boolean,
    mappingFunction: (node: NamedNode) => T
): T[] {
    return this.each(t.s, t.p, t.o)
        .filter(node => filterFunction(node as NamedNode))
        .map(node=> mappingFunction(node as NamedNode))
}
