import React, {useEffect, useState} from 'react'
import {Person} from '../../../rdf/types/Person'
import {vocang} from '../../../rdf/prefixes'
import Wrapper from '../../common/story/Wrapper'
import SearchBar from '../../common/SearchBar'
import InnerWrapper from '../../common/story/InnerWrapper'
import {Link} from 'react-router-dom'
import {SectionList} from '../../common/SectionList'
import {AlphabeticPersonSectionListHelper} from '../../../classes/SectionListHelper'

export const VOCABOLIERI_ROUTE = '/vocabolieri'

export default function Vocabolieri(){

    const noPeople: Person[] = []
    const [helper, setHelper] = useState(new AlphabeticPersonSectionListHelper())
    const [people, setPeople] = useState(noPeople)
    const [visiblePeople, setVisiblePeople] = useState(noPeople)
    const [searchValue, setSearchValue]= useState<string>('')

    useEffect(() => {
        Person.all().then((people) => {
            setPeople(people.sort((a, b) => helper.compareFn(a, b)))
        })}, [])

    useEffect(() => {
        setVisiblePeople(people.filter(p => searchFilterStrategy(p, searchValue)))
    }, [people, searchValue])

    useEffect(() => {
        setPeople(people.sort((a, b) => helper.compareFn(a, b)))
    }, [helper])

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
                    list={helper.list(visiblePeople)}
                    sectionTitle={(element) => helper.title(element)}
                    sublist={(element) => helper.sublist(visiblePeople, element)}
                    content={(p: Person) =>
                        <Link to={`${VOCABOLIERI_ROUTE}/${p.relativeUri(vocang)}`}>
                            <p> {p.fullName(true)} </p>
                        </Link>}
                />
            </div>
        </InnerWrapper>
    </Wrapper>
}
