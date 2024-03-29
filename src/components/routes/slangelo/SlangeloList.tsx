import {Slangelo} from '../../../rdf/types/Slangelo'
import {ConceptList} from '../concept/ConceptList'

export const SLANGELO_ROUTE = '/slangelo'

export function SlangeloList() {
    return <ConceptList
        title={'Slangelo'}
        subtitle={
            `Ognuno di questi slangelo è stato inventata da almeno un vocaboliere.\n
            Quasi tutti i vocabolieri in realtà odiano a morte gli Slangelo, ma non possono fare a meno di crearli per qualche motivo.\n
            Chiunque può creare nuovi slangelo, proporre nuove definizioni ed esempi,
            o fornire materiale mediatico in grado di arricchire questo archivio.`
        }
        effect={ (setConcept, helper) =>
            Slangelo.all().then(nodes => {
                setConcept(nodes.sort((a, b) => helper.compareFn(a,b)))
            })}
    />
}
