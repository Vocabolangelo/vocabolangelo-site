import React, {useEffect, useState} from 'react'
import {Concept} from '../../../rdf/types/Concept'
import {vocang} from '../../../rdf/prefixes'
import '../../../rdf/extensions/namedNodeExtensions'
import Wrapper from '../../common/story/Wrapper'
import SearchBar from '../../common/SearchBar'
import InnerWrapper from '../../common/story/InnerWrapper'
import {Link} from 'react-router-dom'
import {SectionList} from '../../common/SectionList'
import {AlphabeticConceptSectionListHelper, RecentConceptSectionListHelper} from '../../../classes/SectionListHelper'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarDays, faArrowDownAZ} from '@fortawesome/free-solid-svg-icons'

export const PAROLANGELO_ROUTE = '/parolangelo'

export default function Parolangelo() {

    const [concepts, setConcepts] = useState<Concept[]>([])
    const [visibleConcepts, setVisibleConcepts] = useState<Concept[]>([])
    const [helper, setHelper] = useState(new AlphabeticConceptSectionListHelper())
    const [searchValue, setSearchValue]= useState<string>('')

    useEffect(() => {
        Concept.all().then(nodes => {
            setConcepts(nodes.sort((a, b) => helper.compareFn(a,b)))
        })
    }, [])

    useEffect(() => {
        setVisibleConcepts(concepts.filter((c) => searchFilterStrategy(c, searchValue)))
    },[concepts, searchValue])

    useEffect(() => {
        setConcepts(concepts.sort((a, b) => helper.compareFn(a,b)))
    },[helper])

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
                <p></p>
                <div className="align-center actions">
                    <div
                        onClick={() => setHelper(new AlphabeticConceptSectionListHelper())}
                        className="button"
                    >
                        <FontAwesomeIcon size={'lg'} icon={faArrowDownAZ}/>  Alfabetico
                    </div>
                    <div
                        onClick={() => setHelper(new RecentConceptSectionListHelper())}
                        style={{marginLeft: '1%'}} className="button"
                    >
                        <FontAwesomeIcon size={'lg'} icon={faCalendarDays}/>  Recente
                    </div>
                </div>
            </header>
            <div className="index align-left">
                <SectionList
                    list={helper.list(visibleConcepts)}
                    sectionTitle={(element) => helper.title(element)}
                    sublist={(element) => helper.sublist(visibleConcepts, element) }
                    content={(c: Concept) =>
                        <Link to={`${PAROLANGELO_ROUTE}/${c.relativeUri(vocang)}`}>
                            <p> {c.prefLabel} </p>
                        </Link>
                    }
                />
            </div>
        </InnerWrapper>
    </Wrapper>
}
