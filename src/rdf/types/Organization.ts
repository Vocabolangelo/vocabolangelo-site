import {RDFNamedNode} from '../RDFNamedNode'
import {vocang} from '../prefixes'

/**
 * Enum for the Vocabolangelo organizations.
 */
enum Organizations {
    VOCABOLADMIN = 'Vocaboladmin',
    VOCABOLIERE = 'Vocaboliere'
}

/**
 * Mapping of http://www.w3.org/ns/org#Organization.
 */
export class Organization extends RDFNamedNode {

    public toEnum(): Organizations {
        switch (this.node.RelativeUri(vocang)) {
        case 'vocaboladminOrg':
            return Organizations.VOCABOLADMIN
        case 'vocabolieriOrg':
            return Organizations.VOCABOLIERE
        }
        throw new Error('Unknown organization ')
    }

}