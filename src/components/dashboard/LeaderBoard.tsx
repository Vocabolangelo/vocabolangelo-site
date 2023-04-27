import {Person} from '../../rdf/types/Person'
import {Link} from 'react-router-dom'
import {VOCABOLIERI_ROUTE} from '../../routes/Vocabolieri'
import {vocang} from '../../rdf/prefixes'
import {Concept} from '../../rdf/types/Concept'
import {useEffect, useState} from 'react'

interface PersonEntryProps {
    person: Person
}
export default function LeaderBoard() {
    function absoluteComparator(a:Person, b:Person) {
        return absoluteContribution(b.creatorOf()()) - absoluteContribution(a.creatorOf()())
    }

    const [concepts, setConcepts] = useState<Concept[]>([])
    const [people, setPeople] = useState<Person[]>([])

    useEffect(() => {
        Concept.all().then(concepts =>
            setConcepts(concepts)
        )
        Person.all().then(people => {
            setPeople(people)
        })
    }, [])

    function decimalFormat(n: number) {
        return n.toLocaleString(undefined, {maximumFractionDigits:2})
    }

    function percentageOfConceptLength(n: number) {
        return decimalFormat(n / concepts.length * 100)
    }

    function absoluteContribution(c: Concept[]) {
        return c.length
    }

    function relativeContribution(c: Concept[]) {
        return c.map(c => 1 / c.personCreators().length).reduce( (x,y) => x+y, 0)
    }

    function PersonEntry(props: PersonEntryProps){
        const p = props.person
        const creatorOf = p.creatorOf()()
        return <tr>
            <td><Link to={`${VOCABOLIERI_ROUTE}/${p.relativeUri(vocang)}`}>{p.fullName()}</Link></td>
            <td>{absoluteContribution(creatorOf)}</td>
            <td>{percentageOfConceptLength(absoluteContribution(creatorOf))}%</td>
            <td>{decimalFormat(relativeContribution(creatorOf))}</td>
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
                            .map(person => {
                                return <PersonEntry key={person.relativeUri(vocang)} person={person}/>
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