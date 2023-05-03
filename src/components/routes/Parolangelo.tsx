import React, {useEffect, useState} from 'react'
import {Concept} from '../../rdf/types/Concept'
import {vocang} from '../../rdf/prefixes'
import '../../rdf/extensions/namedNodeExtensions'
import Wrapper from '../common/story/Wrapper'
import {AlphabeticList} from '../common/AlphabeticList'
import SearchBar from '../common/SearchBar'
import InnerWrapper from '../common/story/InnerWrapper'

export const PAROLANGELO_ROUTE = '/parolangelo'

export default function Parolangelo() {

    const [concepts, setConcepts] = useState<Concept[]>([])
    const [searchValue, setSearchValue]= useState<string>('')
    useEffect(() => {
        Concept.all().then(nodes => {
            setConcepts(nodes.sort((a, b) => a.prefLabel.localeCompare(b.prefLabel)))
        })
    }, [])

    function alphabeticStrategy(concept: Concept, letter: string){
        return concept.prefLabel.charAt(0).toLowerCase() === letter
    }

    function searchFilterStrategy(concept: Concept, str: string): boolean {
        const strLowerCase = str.toLowerCase()
        return concept.prefLabel.toLowerCase().includes(strLowerCase) ||
            concept.definitions.find(d => d.toLowerCase().includes(strLowerCase)) !== undefined
    }

    return <Wrapper>
        <InnerWrapper style={1}>
            <header>
                <h1> Parolangelo </h1>
                <p> Ognuna di queste parole è stata inventata da almeno un vocaboliere. </p>
                <p>
                    Chiunque può creare nuove parolangelo proporre nuove definizioni ed esempi,
                    o fornire materiale mediatico in grado di arricchire questo archivio.
                </p>
                <SearchBar onSearch={(search) => setSearchValue(search)}/>
            </header>
            <div className="index align-left">
                <AlphabeticList
                    list={concepts}
                    elementContent={concept => <> {concept.prefLabel} </>}
                    elementLink={concept => PAROLANGELO_ROUTE + '/' + concept.relativeUri(vocang)}
                    searchString={searchValue}
                    searchFilterStrategy={searchFilterStrategy}
                    alphabeticStrategy={alphabeticStrategy}
                />
            </div>
        </InnerWrapper>
    </Wrapper>
}
