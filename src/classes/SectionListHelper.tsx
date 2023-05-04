import AlphabetUtility from '../util/alphabet'
import {Concept} from '../rdf/types/Concept'
import {Person} from '../rdf/types/Person'

interface SectionListHelper<T, S> {

    /**
     * The title of the section. It will be based on element, this method just serve to format it.
     * @param element the element.
     */
    title(element: T): string

    /**
     * Return the sublists based on element.
     * @param list the complete list to divide in sublists.
     * @param element the discriminator.
     */
    sublist(list:S[], element: T): S[]
}

export class AlphabeticConceptSectionListHelper implements SectionListHelper<string, Concept>{

    title(element: string): string {
        return element.toUpperCase()
    }

    sublist(list: Concept[], element: string): Concept[] {
        return list.filter(
            (c) => AlphabetUtility.startsWith(c.prefLabel, element)
        )
    }
}

export class AlphabeticPersonSectionListHelper implements SectionListHelper<string, Person>{

    title(element: string): string {
        return element.toUpperCase()
    }

    sublist(list: Person[], element: string): Person[] {
        return list.filter(
            (p) => AlphabetUtility.startsWith(p.lastName, element)
        )
    }
}