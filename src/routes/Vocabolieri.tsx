import React, {useEffect, useState} from 'react'
import {Person} from '../rdf/types/Person'
import {vocang} from '../rdf/prefixes'
import Wrapper from '../components/common/story/Wrapper'
import {AlphabeticList} from '../components/common/AlphabeticList'
import SearchBar from '../components/common/SearchBar'
import InnerWrapper from '../components/common/story/InnerWrapper'

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
                    elementKey={person => person.relativeUri(vocang)}
                    elementContent={person => <p>{person.lastName} {person.firstName}</p>}
                    elementLink={person => '/vocabolieri/' + person.relativeUri(vocang)}
                    searchString={searchValue}
                    searchFilterStrategy={searchFilterStrategy}
                    alphabeticStrategy={alphabeticStrategy}
                />
            </div>
        </InnerWrapper>
    </Wrapper>
}
