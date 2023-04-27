import React, {useEffect, useState} from 'react'
import {Concept} from '../rdf/types/Concept'
import {vocang} from '../rdf/prefixes'
import '../rdf/extensions/namedNodeExtensions'
import DefaultLayout from '../components/common/DefaultLayout'
import {AlphabeticList} from '../components/common/AlphabeticList'
import SearchBar from '../components/common/SearchBar'

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
        return concept.prefLabel.toLowerCase().includes(str) ||
            concept.definitions.find(d => d.toLowerCase().includes(str)) !== undefined
    }

    return <>
        <DefaultLayout
            title={'Parolangelo'}
            subtitle={
                'Ognuna di queste parole è stata inventata da almeno un vocaboliere. Chiunque può creare nuove parolangelo' +
                'proporre nuove definizioni ed esempi, o fornire materiale mediatico in grado di arricchire questo archivio.'
            }
            content={
                <>
                    <SearchBar onSearch={(search) => setSearchValue(search)}/>
                    <AlphabeticList
                        list={concepts}
                        elementKey={concept => concept.relativeUri(vocang)}
                        elementContent={concept => <> {concept.prefLabel} </>}
                        elementLink={concept => `${PAROLANGELO_ROUTE}/` + concept.relativeUri(vocang)}
                        searchString={searchValue}
                        searchFilterStrategy={searchFilterStrategy}
                        alphabeticStrategy={alphabeticStrategy}
                    />
                </>
            }/>
    </>

}
