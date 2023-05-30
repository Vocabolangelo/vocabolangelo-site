import React, {useEffect, useState} from 'react'
import {Vocaboliere} from '../../../rdf/types/Vocaboliere'
import {vocang} from '../../../rdf/prefixes'
import Wrapper from '../../common/story/Wrapper'
import SearchBar from '../../common/SearchBar'
import InnerWrapper from '../../common/story/InnerWrapper'
import {Link} from 'react-router-dom'
import {SectionList} from '../../common/SectionList'
import {AlphabeticVocaboliereSectionListHelper, GenderVocaboliereSectionListHelper} from '../../../classes/SectionListHelper'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDownAZ, faVenusMars} from '@fortawesome/free-solid-svg-icons'

export const VOCABOLIERI_ROUTE = '/vocabolieri'

export default function Vocabolieri(){

    const emptyVocabolieri: Vocaboliere[] = []
    const [helper, setHelper] = useState(new AlphabeticVocaboliereSectionListHelper())
    const [vocabolieri, setVocabolieri] = useState(emptyVocabolieri)
    const [visibleVocabolieri, setVisibleVocabolieri] = useState(emptyVocabolieri)
    const [searchValue, setSearchValue]= useState<string>('')

    useEffect(() => {
        Vocaboliere.all().then((people) => {
            setVocabolieri(people.sort((a, b) => helper.compareFn(a, b)))
        })}, [])

    useEffect(() => {
        setVisibleVocabolieri(vocabolieri.filter(p => searchFilterStrategy(p, searchValue)))
    }, [vocabolieri, searchValue])

    useEffect(() => {
        setVocabolieri(vocabolieri.sort((a, b) => helper.compareFn(a, b)))
    }, [helper])

    function searchFilterStrategy(vocaboliere: Vocaboliere, str: string): boolean {
        return vocaboliere.fullName().toLowerCase().includes(str.toLowerCase())
    }

    return <Wrapper>
        <InnerWrapper style={1}>
            <header>
                <h1>Vocabolieri</h1>
                <p> Ogni Vocaboliere ha inventato almeno una Parolangelo in tutto l&apos;arco della sua vita. </p>
                <p> Non è ancora stato dimostrato che inventare parolangelo allunghi la vita ma ci stiamo lavorando.</p>
                <SearchBar handle={(search) => setSearchValue(search)}/>
                <p></p>
                <div className="align-center actions">
                    <div
                        onClick={() => setHelper(new AlphabeticVocaboliereSectionListHelper())}
                        className="button"
                    >
                        <FontAwesomeIcon size={'lg'} icon={faArrowDownAZ}/>  Alfabetico
                    </div>
                    <div
                        onClick={() => setHelper(new GenderVocaboliereSectionListHelper())}
                        style={{marginLeft: '1%'}} className="button"
                    >
                        <FontAwesomeIcon size={'lg'} icon={faVenusMars}/>  Genere
                    </div>
                </div>
            </header>
            <div className="index align-left">
                <SectionList
                    list={helper.list(visibleVocabolieri)}
                    sectionTitle={(element) => helper.title(element)}
                    sublist={(element) => helper.sublist(visibleVocabolieri, element)}
                    content={(p: Vocaboliere) =>
                        <Link to={`${VOCABOLIERI_ROUTE}/${p.relativeUri(vocang)}`}>
                            <p> {p.fullName(true)} </p>
                        </Link>}
                />
            </div>
        </InnerWrapper>
    </Wrapper>
}
