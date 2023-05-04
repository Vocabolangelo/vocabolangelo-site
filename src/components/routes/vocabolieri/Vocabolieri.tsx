import React, {useEffect, useState} from 'react'
import {Person} from '../../../rdf/types/Person'
import {vocang} from '../../../rdf/prefixes'
import Wrapper from '../../common/story/Wrapper'
import SearchBar from '../../common/SearchBar'
import InnerWrapper from '../../common/story/InnerWrapper'
import {Link} from 'react-router-dom'
import {SectionList} from '../../common/SectionList'
import AlphabetUtility from '../../../util/alphabet'

export const VOCABOLIERI_ROUTE = '/vocabolieri'

export default function Vocabolieri(){

    const noPeople: Person[] = []
    const [people, setPeople] = useState(noPeople)
    const [visiblePeople, setVisiblePeople] = useState(noPeople)
    const [searchValue, setSearchValue]= useState<string>('')

    useEffect(() => {
        Person.all().then(people =>
            setPeople(people.sort(
                (a, b) => a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase()))
            )
        )
    }, [])

    useEffect(() => {
        setVisiblePeople(people.filter(p => searchFilterStrategy(p, searchValue)))
    }, [people, searchValue])

    function searchFilterStrategy(person: Person, str: string): boolean {
        return person.fullName().toLowerCase().includes(str.toLowerCase())
    }

    return <Wrapper>
        <InnerWrapper style={1}>
            <header>
                <h1>Vocabolieri</h1>
                <p> Ogni Vocaboliere ha inventato almeno una Parolangelo in tutto l&apos;arco della sua vita. </p>
                <p> Non è ancora stato dimostrato che inventare parolangelo allunghi la vita ma ci stiamo lavorando.</p>
                <SearchBar handle={(search) => setSearchValue(search)}/>
            </header>
            <div className="index align-left">
                <SectionList
                    list={AlphabetUtility.alphabet().filter((letter) =>
                        visiblePeople.find((p) => AlphabetUtility.startsWith(p.lastName, letter)) !== undefined
                    )}
                    sectionTitle={(letter) => letter.toUpperCase()}
                    subListFromElement={(letter) => visiblePeople.filter(
                        (p) => AlphabetUtility.startsWith(p.lastName, letter)
                    )}
                    subListElementToContent={(p: Person) =>
                        <Link to={`${VOCABOLIERI_ROUTE}/${p.relativeUri(vocang)}`}>
                            <p> {p.fullName(true)} </p>
                        </Link>}
                />
            </div>
        </InnerWrapper>
    </Wrapper>
}
