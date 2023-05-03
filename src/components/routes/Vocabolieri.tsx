import React, {useEffect, useState} from 'react'
import {Person} from '../../rdf/types/Person'
import {vocang} from '../../rdf/prefixes'
import Wrapper from '../common/story/Wrapper'
import {AlphabeticList} from '../common/AlphabeticList'
import SearchBar from '../common/SearchBar'
import InnerWrapper from '../common/story/InnerWrapper'

export const VOCABOLIERI_ROUTE = '/vocabolieri'

export default function Vocabolieri(){

    const noPeople: Person[] = []
    const [people, setPeople] = useState(noPeople)
    const [searchValue, setSearchValue]= useState<string>('')

    useEffect(() => {
        Person.all().then(people =>
            setPeople(people)
        )
    }, [])

    function alphabeticStrategy(person: Person, letter: string){
        return person.lastName.charAt(0).toLowerCase() === letter
    }

    function searchFilterStrategy(person: Person, str: string): boolean {
        return person.fullName().toLowerCase().includes(str.toLowerCase())
    }

    return <Wrapper>
        <InnerWrapper style={1}>
            <header>
                <h1>Vocabolieri</h1>
                <p> Ogni Vocaboliere ha inventato almeno una Parolangelo in tutto l&apos;arco della sua vita. </p>
                <p> Non è ancora stato dimostrato che inventare parolangelo allunghi la vita ma ci stiamo lavorando.</p>
                <SearchBar onSearch={(search) => setSearchValue(search)}/>
            </header>
            <div className="index align-left">
                <AlphabeticList
                    list={people}
                    elementContent={person => <p>{person.lastName} {person.firstName}</p>}
                    elementLink={person => VOCABOLIERI_ROUTE + '/' + person.relativeUri(vocang)}
                    searchString={searchValue}
                    searchFilterStrategy={searchFilterStrategy}
                    alphabeticStrategy={alphabeticStrategy}
                />
            </div>
        </InnerWrapper>
    </Wrapper>
}
