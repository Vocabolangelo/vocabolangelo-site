import ConceptList from '../concept/ConceptList'
import {Parolangelo} from '../../../rdf/types/Parolangelo'

export default function ParolangeloList() {
    return <ConceptList
        title={'Parolangelo'}
        subtitle={
            `Ognuna di queste parole è stata inventata da almeno un vocaboliere.\n
                Chiunque può creare nuove parolangelo, proporre nuove definizioni ed esempi,
                o fornire materiale mediatico in grado di arricchire questo archivio.`
        }
        effect={ (setConcept, helper) =>
            Parolangelo.all().then(nodes => {
                setConcept(nodes.sort((a, b) => helper.compareFn(a,b)))
            })
        }
    />
}

