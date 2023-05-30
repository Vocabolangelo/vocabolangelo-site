import AlphabetUtility from '../util/alphabet'
import {Parolangelo} from '../rdf/types/Parolangelo'
import {Vocaboliere} from '../rdf/types/Vocaboliere'
import {DateUtility} from '../util/DateUtility'

interface SectionListHelper<T, S> {

    /**
     * The list representing the sections.
     * @param elements list of all the elements in the sub-lists.
     */
    list(elements: S[]): T[]

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

    /**
     * Compare function to use to sort elements of sublist.
     */
    compareFn(a: S, b: S): number
}

export class AlphabeticParolangeloSectionListHelper implements SectionListHelper<string, Parolangelo>{

    list(elements: Parolangelo[]): string[] {
        return AlphabetUtility.alphabet().filter((letter) =>
            elements.find((c) => AlphabetUtility.startsWith(c.prefLabel, letter)) !== undefined
        )
    }

    title(element: string): string {
        return element.toUpperCase()
    }

    sublist(list: Parolangelo[], element: string): Parolangelo[] {
        return list.filter(
            (c) => AlphabetUtility.startsWith(c.prefLabel, element)
        )
    }

    compareFn(a: Parolangelo, b: Parolangelo): number {
        return a.prefLabel.localeCompare(b.prefLabel)
    }
}

export class RecentParolangeloSectionListHelper implements SectionListHelper<string, Parolangelo> {

    INVALID_DATE = '1970-01-01'

    list(elements: Parolangelo[]): string[] {
        return Array.from(
            new Set(elements.map((e) => e.created !== null ? e.created : this.INVALID_DATE))
        ).sort((a, b) => DateUtility.compareFnString(a, b))
    }

    title(element: string): string {
        if(element === this.INVALID_DATE) {
            return 'Sconosciuto'
        }
        return DateUtility.toDateString(new Date(element))
    }

    sublist(list: Parolangelo[], element: string): Parolangelo[] {
        return list.filter(
            (c) => c.created === element || (c.created === null && element === this.INVALID_DATE)
        )
    }

    compareFn(a: Parolangelo, b: Parolangelo): number {
        if (!a.created && !b.created) {
            return 0
        }
        if (!a.created) {
            return 1
        }
        if (!b.created) {
            return -1
        }
        return DateUtility.compareFnString(a.created, b.created)
    }
}

export class AlphabeticVocaboliereSectionListHelper implements SectionListHelper<string, Vocaboliere>{

    list(elements: Vocaboliere[]): string[] {
        return AlphabetUtility.alphabet().filter((letter) =>
            elements.find((p) => AlphabetUtility.startsWith(p.lastName, letter)) !== undefined
        )
    }

    title(element: string): string {
        return element.toUpperCase()
    }

    sublist(list: Vocaboliere[], element: string): Vocaboliere[] {
        return list.filter(
            (p) => AlphabetUtility.startsWith(p.lastName, element)
        )
    }

    compareFn(a: Vocaboliere, b: Vocaboliere): number {
        return a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase())
    }
}

export class GenderVocaboliereSectionListHelper implements SectionListHelper<string, Vocaboliere>{

    possibleGenders = ['male', 'female', 'non-binary']

    list(elements: Vocaboliere[]): string[] {
        return this.possibleGenders.filter((gender) =>
            elements.find((p) => p.gender === gender)
        )
    }

    title(element: string): string {
        return Vocaboliere.genderString(element)
    }

    sublist(list: Vocaboliere[], element: string): Vocaboliere[] {
        return list.filter(
            (p) => p.gender === element
        )
    }

    compareFn(a: Vocaboliere, b: Vocaboliere): number {
        return this.possibleGenders.indexOf(a.gender) - this.possibleGenders.indexOf(b.gender)
    }
}