import React, {useEffect, useState} from 'react'
import {NamedSection} from '../../common/NamedSection'
import {Link, useParams} from 'react-router-dom'
import {Parolangelo} from '../../../rdf/types/Parolangelo'
import {RDFStore} from '../../../rdf/RDFStore'
import {vocang} from '../../../rdf/prefixes'
import Wrapper from '../../common/story/Wrapper'
import {List} from '../../common/List'
import {Vocaboliere} from '../../../rdf/types/Vocaboliere'
import ConditionalComponent from '../../common/conditional/ConditionalComponent'
import InnerWrapper from '../../common/story/InnerWrapper'
import {DateUtility} from '../../../util/DateUtility'
import ConceptProps from '../../props/ConceptProps'
import {Concept} from '../../../rdf/types/Concept'

export function ConceptLayout() {

    const [concept, setConcept] =
        useState<Concept | undefined>(undefined)
    const params = useParams()

    useEffect(() => {
        RDFStore.safeCall(store => {
            return new Concept(store.sym(vocang.uri + params.id))
        }).then(concept =>
            setConcept(concept)
        )
    }, [params.id])

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

function Definitions(props: ConceptProps){
    return <NamedSection title={'Definizione'}>
        <List
            isOrdered={true}
            list={props.concept.definitions}
            elementContent={def => <p>{def}</p>}
        />
    </NamedSection>
}

function Examples(props: ConceptProps){
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
function Creators(props: ConceptProps){
    const creatorId = (creator: Vocaboliere) => creator.node.RelativeUri(vocang)
    return <NamedSection title={'Vocabolieri'}>
        <List
            isOrdered={false}
            list={
                props.concept.creators((node) =>
                    (RDFStore.store.any(node, undefined, vocang.namespace('Vocaboliere')) !== null)
                )().map((node) => new Vocaboliere(node.node))
            }
            elementContent={creator =>
                <Link to={`/vocabolieri/${creatorId(creator)}`}>
                    <p>{creator.firstName} {creator.lastName}</p>
                </Link>
            }
        />
    </NamedSection>
}

function Images(props: ConceptProps){
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

function Videos(props: ConceptProps){
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

function Created(props: ConceptProps){
    if(props.concept.created !== null) {
        return <NamedSection title={'Data di creazione'}>
            <p>{DateUtility.toDateString(new Date(props.concept.created.toString()))}</p>
        </NamedSection>
    } else {
        return <></>
    }
}

interface OtherParolangeloProps {
    title: string
    condition: () => boolean
    list: Parolangelo[]
}

function OtherParolangelo(props: OtherParolangeloProps){
    const id = (parolangelo: Parolangelo) => parolangelo.node.RelativeUri(vocang)
    return <ConditionalComponent condition={props.condition}>
        <NamedSection title={props.title}>
            <List
                isOrdered={false}
                list={props.list}
                elementContent={parolangelo =>
                    <Link to={`/parolangelo/${id(parolangelo)}`}>
                        <p>{parolangelo.prefLabel}</p>
                    </Link>
                }
            />
        </NamedSection>
    </ConditionalComponent>
}

function Synonyms(props: ConceptProps){
    return <OtherParolangelo
        title={'Sinonimi'}
        condition={() => props.concept.synonyms().length > 0}
        list={props.concept.synonyms()}
    />
}

function Related(props: ConceptProps){
    return <OtherParolangelo
        title={'Correllate'}
        condition={() => props.concept.related()?.length > 0}
        list={props.concept.related()}
    />
}

function Note(props: ConceptProps){
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
