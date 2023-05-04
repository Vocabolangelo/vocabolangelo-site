import React, {useEffect, useState} from 'react'
import {NamedSection} from '../../common/NamedSection'
import {Link, useParams} from 'react-router-dom'
import {Concept} from '../../../rdf/types/Concept'
import {RDFStore} from '../../../rdf/RDFStore'
import {vocang} from '../../../rdf/prefixes'
import Wrapper from '../../common/story/Wrapper'
import {List} from '../../common/List'
import {Person} from '../../../rdf/types/Person'
import ConditionalComponent from '../../common/conditional/ConditionalComponent'
import InnerWrapper from '../../common/story/InnerWrapper'
import {DateUtility} from '../../../util/DateUtility'

export function ConceptLayout() {

    const [concept, setConcept] =
        useState<Concept | undefined>(undefined)
    const params = useParams()

    useEffect(() => {
        RDFStore.safeCall(store => {
            return new Concept(store.sym(vocang.uri + params.conceptId))
        }).then(concept =>
            setConcept(concept)
        )
    }, [params.conceptId])

    if(concept !== undefined) {
        return <Wrapper optionalModifiers={['divided']}>
            <InnerWrapper style={1}>
                <header>
                    <h1>{concept.prefLabel}</h1>
                    <p>{concept.pronunciation}</p>
                </header>
                <div className="index align-left">
                    <Definitions concept={concept}/>
                    <Examples concept={concept}/>
                    <Images concept={concept}/>
                    <Videos concept={concept}/>
                    <Synonyms concept={concept}/>
                    <Related concept={concept}/>
                    <Note concept={concept}/>
                    <Created concept={concept}/>
                    <Creators concept={concept}/>
                </div>
            </InnerWrapper>
        </Wrapper>
    } else {
        return <></>
    }
}

interface ConceptSubLayoutProps {
    concept: Concept
}

function Definitions(props: ConceptSubLayoutProps){
    return <NamedSection title={'Definizione'}>
        <List
            isOrdered={true}
            list={props.concept.definitions}
            elementContent={def => <p>{def}</p>}
        />
    </NamedSection>
}

function Examples(props: ConceptSubLayoutProps){
    return <ConditionalComponent condition={() => props.concept.examples?.length > 0}>
        <NamedSection title={'Esempi'}>
            <List
                isOrdered={false}
                list={props.concept.examples}
                elementContent={ex => <p>{ex}</p>}
            />
        </NamedSection>
    </ConditionalComponent>
}
function Creators(props: ConceptSubLayoutProps){
    const creatorId = (creator: Person) => creator.node.RelativeUri(vocang)
    return <NamedSection title={'Vocabolieri'}>
        <List
            isOrdered={false}
            list={props.concept.personCreators().map((node) => new Person(node.node))}
            elementContent={creator =>
                <Link to={`/vocabolieri/${creatorId(creator)}`}>
                    <p>{creator.firstName} {creator.lastName}</p>
                </Link>
            }
        />
    </NamedSection>
}

function Images(props: ConceptSubLayoutProps){
    return <ConditionalComponent condition={() => props.concept.images?.length > 0}>
        <NamedSection title={'Immagini'}>
            <List
                styleNone={true}
                isOrdered={false}
                list={props.concept.images}
                elementContent={image =>
                    <span className="image left">
                        <img src={image} alt={props.concept.prefLabel}/>
                    </span>
                }
            />
        </NamedSection>
    </ConditionalComponent>
}

function Videos(props: ConceptSubLayoutProps){
    return <ConditionalComponent condition={() => props.concept.videos?.length > 0}>
        <NamedSection title={'Video'}>
            <List
                styleNone={true}
                isOrdered={false}
                list={props.concept.videos}
                elementContent={video =>
                    <span className="image left">
                        <video width="50%" height="auto" autoPlay muted loop>
                            <source src={video} type="video/mp4"/>
                            Riproduzione del video non supportata dal tuo browser.
                        </video>
                    </span>
                }
            />
        </NamedSection>
    </ConditionalComponent>
}

function Created(props: ConceptSubLayoutProps){
    if(props.concept.created !== null) {
        return <NamedSection title={'Data di creazione'}>
            <p>{DateUtility.toDateString(new Date(props.concept.created.toString()))}</p>
        </NamedSection>
    } else {
        return <></>
    }
}

interface OtherConceptProps {
    title: string
    condition: () => boolean
    list: Concept[]
}
function OtherConcept(props: OtherConceptProps){
    const conceptId = (concept: Concept) => concept.node.RelativeUri(vocang)
    return <ConditionalComponent condition={props.condition}>
        <NamedSection title={props.title}>
            <List
                isOrdered={false}
                list={props.list}
                elementContent={concept =>
                    <Link to={`/parolangelo/${conceptId(concept)}`}>
                        <p>{concept.prefLabel}</p>
                    </Link>
                }
            />
        </NamedSection>
    </ConditionalComponent>
}

function Synonyms(props: ConceptSubLayoutProps){
    return <OtherConcept
        title={'Parolangelo Sinonimi'}
        condition={() => props.concept.synonyms().length > 0}
        list={props.concept.synonyms()}
    />
}

function Related(props: ConceptSubLayoutProps){
    return <OtherConcept
        title={'Parolangelo Correllate'}
        condition={() => props.concept.related()?.length > 0}
        list={props.concept.related()}
    />
}

function Note(props: ConceptSubLayoutProps){
    return <ConditionalComponent condition={() => props.concept.notes?.length > 0}>
        <NamedSection title={'Note'}>
            <List
                isOrdered={false}
                list={props.concept.notes}
                elementContent={note => <p>{note}</p>}
            />
        </NamedSection>
    </ConditionalComponent>
}
