import React, {useEffect, useState} from 'react'
import {Concept} from '../../../rdf/types/Concept'
import {vocang} from '../../../rdf/prefixes'
import '../../../rdf/extensions/namedNodeExtensions'
import Wrapper from '../../common/story/Wrapper'
import SearchBar from '../../common/SearchBar'
import InnerWrapper from '../../common/story/InnerWrapper'
import {Link} from 'react-router-dom'
import {SectionList} from '../../common/SectionList'
import AlphabetUtility from '../../../util/alphabet'

export const PAROLANGELO_ROUTE = '/parolangelo'

export default function Parolangelo() {

    const [concepts, setConcepts] = useState<Concept[]>([])
    const [visibleConcepts, setVisibleConcepts] = useState<Concept[]>([])
    const [searchValue, setSearchValue]= useState<string>('')

    useEffect(() => {
        Concept.all().then(nodes => {
            setConcepts(nodes.sort((a, b) => a.prefLabel.localeCompare(b.prefLabel)))
        })
    }, [])

    useEffect(() => {
        setVisibleConcepts(concepts.filter((c) => searchFilterStrategy(c, searchValue)))
    },[concepts, searchValue])

    function searchFilterStrategy(concept: Concept, str: string): boolean {
        if(str.length > 1) {
            return concept.prefLabel.toLowerCase().includes(str.toLowerCase()) ||
                concept.definitions.find(d => d.toLowerCase().includes(str.toLowerCase())) !== undefined
        }
        return true
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
                <SearchBar handle={(search: string) => setSearchValue(search)}/>
            </header>
            <div className="index align-left">
                <SectionList
                    list={AlphabetUtility.alphabet().filter((letter) =>
                        visibleConcepts.find((c) => AlphabetUtility.startsWith(c.prefLabel, letter)) !== undefined
                    )}
                    sectionTitle={(letter) => letter.toUpperCase()}
                    subListFromElement={(letter) => visibleConcepts.filter(
                        (c) => AlphabetUtility.startsWith(c.prefLabel, letter)
                    )}
                    subListElementToContent={(c: Concept) =>
                        <Link to={`${PAROLANGELO_ROUTE}/${c.relativeUri(vocang)}`}>
                            <p> {c.prefLabel} </p>
                        </Link>
                    }
                />
            </div>
        </InnerWrapper>
    </Wrapper>
}
