import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {RDFStore} from '../../../rdf/RDFStore'
import {vocang} from '../../../rdf/prefixes'
import Wrapper from '../../common/story/Wrapper'
import {Person} from '../../../rdf/types/Person'
import ConditionalComponent from '../../common/conditional/ConditionalComponent'
import {NamedSection} from '../../common/NamedSection'
import {List} from '../../common/List'
import {PAROLANGELO_ROUTE} from '../parolangelo/Parolangelo'
import {VOCABOLIERI_ROUTE} from './Vocabolieri'
import InnerWrapper from '../../common/story/InnerWrapper'
import {Concept} from '../../../rdf/types/Concept'

export function PersonLayout() {

    const [person, setPerson] =
        useState<Person | undefined>(undefined)
    const params = useParams()

    useEffect(() => {
        RDFStore.safeCall(store => {
            return new Person(store.sym(vocang.uri + params.personId))
        }).then(person =>
            setPerson(person)
        )
    }, [params.personId])

    if(person !== undefined) {
        return <Wrapper>
            <InnerWrapper style={1}>
                <header>
                    <h1> {person.fullName()} </h1>
                    {person.nick !== undefined && <p>{person.nick}</p>}
                </header>
                <div className="index align-left">
                    <Images person={person}/>
                    <Contribution person={person}/>
                    <Friends person={person}/>
                    <Partners person={person}/>
                    <ConceptsCreated person={person}/>
                </div>
            </InnerWrapper>
        </Wrapper>
    } else {
        return <> </>
    }
}
interface PersonSubLayoutProps {
    person: Person
}

function Friends(props: PersonSubLayoutProps){
    const friends = props.person.friends().sort(
        (a, b) => a.lastName.localeCompare(b.lastName)
    )
    return <ConditionalComponent condition={() => friends?.length > 0}>
        <NamedSection title={'Amici'}>
            <List
                isOrdered={false}
                list={friends}
                elementContent={p => {
                    if (p.node.uri !== props.person.node.uri ) {
                        return <Link to={`${VOCABOLIERI_ROUTE}/${p.node.RelativeUri(vocang)}`}>
                            <p>{p.fullName(true)}</p>
                        </Link>
                    } else {
                        return <></>
                    }
                }}
            />
        </NamedSection>
    </ConditionalComponent>
}
function Partners(props: PersonSubLayoutProps){
    const partners = props.person.partners().sort(
        (a, b) => a.lastName.localeCompare(b.lastName)
    )
    return <ConditionalComponent condition={() => partners?.length > 0}>
        <NamedSection title={'Partner'}>
            <List
                isOrdered={false}
                list={partners}
                elementContent={p =>
                    <Link to={`${VOCABOLIERI_ROUTE}/${p.node.RelativeUri(vocang)}`}>
                        <p>{p.fullName()}</p>
                    </Link>
                }
            />
        </NamedSection>
    </ConditionalComponent>
}

function ConceptsCreated(props: PersonSubLayoutProps){
    const concepts = props.person.creatorOf()()
        .map((node) => new Concept(node.node))
        .sort((a, b) => a.prefLabel.localeCompare(b.prefLabel))
    return <ConditionalComponent condition={() => concepts?.length > 0}>
        <NamedSection title={'Parolangelo create'}>
            <List
                isOrdered={false}
                list={concepts}
                elementContent={c =>
                    <Link to={`${PAROLANGELO_ROUTE}/${c.node.RelativeUri(vocang)}`}>
                        <p>{c.prefLabel}</p>
                    </Link>
                }
            />
        </NamedSection>
    </ConditionalComponent>
}

function Contribution(props: PersonSubLayoutProps){
    const concepts = props.person.creatorOf()()
    const soloConceptsCount = concepts.filter(
        c => new Concept(c.node).personCreators().length === 1
    ).length
    return <ConditionalComponent condition={() => concepts?.length > 0}>
        <NamedSection title={'Contributo'}>
            <p>Da solo ho inventato: <strong>{soloConceptsCount}</strong> parolangelo.</p>
            <p>Insieme ad altri ho inventato:
                <strong>{concepts.length - soloConceptsCount}</strong> parolangelo.
            </p>
            <p>In totale ho inventato: <strong>{concepts.length}</strong> parolangelo.</p>
        </NamedSection>
    </ConditionalComponent>
}

function Images(props: PersonSubLayoutProps) {
    const images = props.person.images
    return <ConditionalComponent condition={() => images?.length > 0}>
        <NamedSection title={'Foto'}>
            <List
                styleNone={true}
                isOrdered={false}
                list={images}
                elementContent={i => <img style={{borderRadius:'50%', maxWidth:'25vw'}} src={i} alt={ props.person.fullName()}/>}
            />
        </NamedSection>
    </ConditionalComponent>
}
