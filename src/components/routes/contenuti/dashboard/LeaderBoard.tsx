import {Vocaboliere} from '../../../../rdf/types/Vocaboliere'
import {vocang} from '../../../../rdf/prefixes'
import {Parolangelo} from '../../../../rdf/types/Parolangelo'
import {useEffect, useState} from 'react'
import {decimalFormat} from '../../../../util/decimalFormat'
import PersonProps from '../../../props/PersonProps'
import {Link} from 'react-router-dom'
import {VOCABOLIERI_ROUTE} from '../../vocabolieri/Vocabolieri'
import {RDFNamedNode} from '../../../../rdf/RDFNamedNode'
import {RDFStore} from '../../../../rdf/RDFStore'

export default function LeaderBoard() {
    function absoluteComparator(a:RDFNamedNode, b:RDFNamedNode) {
        return absoluteContribution(
            new Vocaboliere(b.node).creatorOf()()) - absoluteContribution(new Vocaboliere(a.node).creatorOf()()
        )
    }

    const [concepts, setConcepts] = useState<Parolangelo[]>([])
    const [people, setPeople] = useState<Vocaboliere[]>([])

    useEffect(() => {
        Parolangelo.all().then(concepts =>
            setConcepts(concepts)
        )
        Vocaboliere.all().then(people => {
            setPeople(people)
        })
    }, [])

    function percentageOfConceptLength(n: number) {
        return decimalFormat(n / concepts.length * 100, 2)
    }

    function absoluteContribution(c: RDFNamedNode[]) {
        return c.length
    }
    function relativeContribution(c: RDFNamedNode[]) {
        return c.map(c => 1 / new Parolangelo(c.node).creators((node) =>
            (RDFStore.store.any(node, undefined, vocang.namespace('Vocaboliere')) !== null)
        ).length).reduce( (x,y) => x+y, 0)
    }

    function LeaderBoardEntry(props: PersonProps){
        const person = props.person
        const creatorOf = person.creatorOf()()

        return <tr>
            <td>
                <Link to={`${VOCABOLIERI_ROUTE}/${person.relativeUri(vocang)}`}>
                    {person.fullName()}
                </Link>
            </td>
            <td>{absoluteContribution(creatorOf)}</td>
            <td>{percentageOfConceptLength(absoluteContribution(creatorOf))}%</td>
            <td>{decimalFormat(relativeContribution(creatorOf),2)}</td>
            <td>{percentageOfConceptLength(relativeContribution(creatorOf))}%</td>
        </tr>
    }

    return <section className="wrapper style1 align-left">
        <div className="inner">
            <h2>LeaderBoard</h2>
            <p>Qui è possibile analizzare maggiori statistiche riguardo i Vocabolieri.</p>
            <ul>
                <li><strong>Vocaboliere</strong>: Il nome del Vocaboliere.</li>
                <li>
                    <strong>Contributo Assoluto</strong>: Quanto Vocaboliere ha contribuito in termini di Parolangelo inventate.
                    Anche le Parolangelo create in comune vengono conteggiate in questo calcolo.
                </li>
                <li>
                    <strong>Perc. Contributo Assoluto</strong>: Il valore percentale che si ottiene dividendo il Contributo Assoluto
                    per il numero delle Parolangelo totali.
                </li>
                <li>
                    <strong>Contributo Relativo</strong>: Quanto Vocaboliere ha contribuito in termini di Parolangelo inventate.
                    In questo caso le Parolangelo create in comune vengono spartite equamente, ad esempio attribuendo un punteggio di 0.5
                    se gli autori sono due.
                </li>
                <li><strong>Perc. Contributo Relativo</strong>: Il valore percentale che si ottiene dividendo il Contributo Relativo
                    per il numero delle Parolangelo totali.</li>
            </ul>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th >Vocaboliere</th>
                            <th>Contributo Assoluto</th>
                            <th>Perc. Contributo Assoluto</th>
                            <th>Contributo Relativo</th>
                            <th>Perc. Contributo Relativo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people
                            .sort(absoluteComparator)
                            .map((person, index) => {
                                return <LeaderBoardEntry key={index} person={person}/>
                            })
                        }
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
        </div>
    </section>
}
