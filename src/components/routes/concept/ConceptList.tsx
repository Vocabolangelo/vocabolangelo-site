import React, {Dispatch, SetStateAction, useEffect, useState} from 'react'
import {Parolangelo} from '../../../rdf/types/Parolangelo'
import {vocang} from '../../../rdf/prefixes'
import '../../../rdf/extensions/namedNodeExtensions'
import Wrapper from '../../common/story/Wrapper'
import SearchBar from '../../common/SearchBar'
import InnerWrapper from '../../common/story/InnerWrapper'
import {Link} from 'react-router-dom'
import {SectionList} from '../../common/SectionList'
import {
    AlphabeticConceptSectionListHelper,
    RecentConceptSectionListHelper,
    SectionListHelper
} from '../../../classes/SectionListHelper'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDownAZ, faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import {Concept} from '../../../rdf/types/Concept'
import RandomConceptButton from './RandomConceptButton'

interface ConceptListProps {
    title: string
    subtitle: string
    effect: (setConcept: Dispatch<SetStateAction<Concept[]>>,
        helper: SectionListHelper<string, Concept>) => void
}

export const PAROLANGELO_ROUTE = '/parolangelo'

export function ConceptList(props: ConceptListProps) {

    const [concepts, setConcepts] = useState<Concept[]>([])
    const [visibleConcepts, setVisibleConcepts] = useState<Concept[]>([])
    const [helper, setHelper] =
        useState<SectionListHelper<string, Concept>>(new AlphabeticConceptSectionListHelper())
    const [searchValue, setSearchValue]= useState<string>('')

    useEffect(() => {
        props.effect(setConcepts, helper)
    }, [])

    useEffect(() => {
        setVisibleConcepts(concepts.filter((c) => searchFilterStrategy(c, searchValue)))
    },[concepts, searchValue])

    useEffect(() => {
        setConcepts(concepts.sort((a, b) => helper.compareFn(a,b)))
    },[helper])

    function searchFilterStrategy(parolangelo: Parolangelo, str: string): boolean {
        if(str.length > 1) {
            return parolangelo.prefLabel.toLowerCase().includes(str.toLowerCase()) ||
                parolangelo.definitions.find(d => d.toLowerCase().includes(str.toLowerCase())) !== undefined
        }
        return true
    }

    return <Wrapper>
        <InnerWrapper style={1}>
            <header>
                <h1> {props.title} </h1>
                <p> {props.subtitle}  </p>
                <SearchBar handle={(search: string) => setSearchValue(search)}/>
                <p></p>
                <div className="align-center actions">
                    <RandomConceptButton concept={concepts[Math.floor(Math.random() * concepts.length)]}/>
                    <div
                        onClick={() => setHelper(new AlphabeticConceptSectionListHelper())}
                        style={{marginLeft: '1%'}} className="button"
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
                    content={(c: Parolangelo) =>
                        <Link to={`${PAROLANGELO_ROUTE}/${c.relativeUri(vocang)}`}>
                            <p> {c.prefLabel} </p>
                        </Link>
                    }
                />
            </div>
        </InnerWrapper>
    </Wrapper>
}
