import React, {useEffect, useState} from 'react'
import {Parolangelo} from '../../../rdf/types/Parolangelo'
import {vocang} from '../../../rdf/prefixes'
import '../../../rdf/extensions/namedNodeExtensions'
import Wrapper from '../../common/story/Wrapper'
import SearchBar from '../../common/SearchBar'
import InnerWrapper from '../../common/story/InnerWrapper'
import {Link} from 'react-router-dom'
import {SectionList} from '../../common/SectionList'
import {AlphabeticParolangeloSectionListHelper, RecentParolangeloSectionListHelper} from '../../../classes/SectionListHelper'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarDays, faArrowDownAZ} from '@fortawesome/free-solid-svg-icons'

export const PAROLANGELO_ROUTE = '/parolangelo'

export default function ParolangeloList() {

    const [parolangelo, setParolangelo] = useState<Parolangelo[]>([])
    const [visibleParolangelo, setVisibleParolangelo] = useState<Parolangelo[]>([])
    const [helper, setHelper] = useState(new AlphabeticParolangeloSectionListHelper())
    const [searchValue, setSearchValue]= useState<string>('')

    useEffect(() => {
        Parolangelo.all().then(nodes => {
            setParolangelo(nodes.sort((a, b) => helper.compareFn(a,b)))
        })
    }, [])

    useEffect(() => {
        setVisibleParolangelo(parolangelo.filter((c) => searchFilterStrategy(c, searchValue)))
    },[parolangelo, searchValue])

    useEffect(() => {
        setParolangelo(parolangelo.sort((a, b) => helper.compareFn(a,b)))
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
                        onClick={() => setHelper(new AlphabeticParolangeloSectionListHelper())}
                        className="button"
                    >
                        <FontAwesomeIcon size={'lg'} icon={faArrowDownAZ}/>  Alfabetico
                    </div>
                    <div
                        onClick={() => setHelper(new RecentParolangeloSectionListHelper())}
                        style={{marginLeft: '1%'}} className="button"
                    >
                        <FontAwesomeIcon size={'lg'} icon={faCalendarDays}/>  Recente
                    </div>
                </div>
            </header>
            <div className="index align-left">
                <SectionList
                    list={helper.list(visibleParolangelo)}
                    sectionTitle={(element) => helper.title(element)}
                    sublist={(element) => helper.sublist(visibleParolangelo, element) }
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
