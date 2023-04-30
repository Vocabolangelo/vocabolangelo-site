import React, {useEffect, useState} from 'react'
import {Person} from '../rdf/types/Person'
import {vocang} from '../rdf/prefixes'
import DefaultLayout from '../components/common/DefaultLayout'
import {AlphabeticList} from '../components/common/AlphabeticList'
import SearchBar from '../components/common/SearchBar'

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

    return <DefaultLayout
        title={'Vocabolieri'}
        subtitle={
            'Ogni Vocaboliere ha inventato almeno una Parolangelo in tutto l\'arco della sua vita.' +
            'Non è ancora stato dimostrato che inventare parolangelo allunghi la vita ma ci stiamo lavorando.'
        }
        content={<>
            <SearchBar onSearch={(search) => setSearchValue(search)}/>
            <AlphabeticList
                list={people}
                elementKey={person => person.relativeUri(vocang)}
                elementContent={person => <p>{person.lastName} {person.firstName}</p>}
                elementLink={person => '/vocabolieri/' + person.relativeUri(vocang)}
                searchString={searchValue}
                searchFilterStrategy={searchFilterStrategy}
                alphabeticStrategy={alphabeticStrategy}
            />
        </>
        }
    />
}
