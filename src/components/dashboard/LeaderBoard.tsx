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
        return absoluteContribution(b) - absoluteContribution(a)
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

    function absoluteContribution(p: Person) {
        return p.creatorOf()().length
    }

    function relativeContribution(p: Person) {
        return p.creatorOf()().map(c => 1 / c.personCreators().length).reduce( (x,y) => x+y, 0)
    }

    function PersonEntry(props: PersonEntryProps){
        const p = props.person

        return <tr>
            <td><Link to={`${VOCABOLIERI_ROUTE}/${p.relativeUri(vocang)}`}>{p.fullName()}</Link></td>
            <td>{absoluteContribution(p)}</td>
            <td>{percentageOfConceptLength(absoluteContribution(p))}%</td>
            <td>{decimalFormat(relativeContribution(p))}</td>
            <td>{percentageOfConceptLength(relativeContribution(p))}%</td>
        </tr>
    }

    return <>
        <h2>LeaderBoard</h2>
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th >Vocaboliere</th>
                        <th>Contributo Assoluto</th>
                        <th>% Contributo Assoluto</th>
                        <th>Contributo Relativo</th>
                        <th>% Contributo Relativo</th>
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
    </>

}