import {useEffect, useState} from 'react'
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
import {faCalendarDays, faArrowDownAZ} from '@fortawesome/free-solid-svg-icons'
import {Concept} from '../../../rdf/types/Concept'

export const PAROLANGELO_ROUTE = '/parolangelo'
export const SLANGELO_ROUTE = '/slangelo'

interface ConceptListProps {
    title: string
    subtitle: string
    effect: (setConcept: React.Dispatch<React.SetStateAction<Concept[]>>,
        helper: SectionListHelper<string, Concept>) => void
}
export default function ConceptList(props: ConceptListProps) {

    const [concept, setConcept] = useState<Concept[]>([])
    const [visibleConcept, setVisibleConcept] = useState<Concept[]>([])
    const [helper, setHelper] =
        useState<SectionListHelper<string, Concept>>(new AlphabeticConceptSectionListHelper())
    const [searchValue, setSearchValue]= useState<string>('')

    useEffect(() => {
        props.effect(setConcept, helper)
    }, [])

    useEffect(() => {
        setVisibleConcept(concept.filter((c) => searchFilterStrategy(c, searchValue)))
    },[concept, searchValue])

    useEffect(() => {
        setConcept(concept.sort((a, b) => helper.compareFn(a,b)))
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
                    list={helper.list(visibleConcept)}
                    sectionTitle={(element) => helper.title(element)}
                    sublist={(element) => helper.sublist(visibleConcept, element) }
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
