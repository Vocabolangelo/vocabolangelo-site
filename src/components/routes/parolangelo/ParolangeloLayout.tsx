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
import ParolangeloProps from '../../props/ParolangeloProps'

export function ParolangeloLayout() {

    const [parolangelo, setParolangelo] =
        useState<Parolangelo | undefined>(undefined)
    const params = useParams()

    useEffect(() => {
        RDFStore.safeCall(store => {
            return new Parolangelo(store.sym(vocang.uri + params.id))
        }).then(parolangelo =>
            setParolangelo(parolangelo)
        )
    }, [params.id])

    if(parolangelo !== undefined) {
        return <Wrapper optionalModifiers={['divided']}>
            <InnerWrapper style={1}>
                <header>
                    <h1>{parolangelo.prefLabel}</h1>
                    <p>{parolangelo.pronunciation}</p>
                </header>
                <div className="index align-left">
                    <Definitions parolangelo={parolangelo}/>
                    <Examples parolangelo={parolangelo}/>
                    <Images parolangelo={parolangelo}/>
                    <Videos parolangelo={parolangelo}/>
                    <Synonyms parolangelo={parolangelo}/>
                    <Related parolangelo={parolangelo}/>
                    <Note parolangelo={parolangelo}/>
                    <Created parolangelo={parolangelo}/>
                    <Creators parolangelo={parolangelo}/>
                </div>
            </InnerWrapper>
        </Wrapper>
    } else {
        return <></>
    }
}

function Definitions(props: ParolangeloProps){
    return <NamedSection title={'Definizione'}>
        <List
            isOrdered={true}
            list={props.parolangelo.definitions}
            elementContent={def => <p>{def}</p>}
        />
    </NamedSection>
}

function Examples(props: ParolangeloProps){
    return <ConditionalComponent condition={() => props.parolangelo.examples?.length > 0}>
        <NamedSection title={'Esempi'}>
            <List
                isOrdered={false}
                list={props.parolangelo.examples}
                elementContent={ex => <p>{ex}</p>}
            />
        </NamedSection>
    </ConditionalComponent>
}
function Creators(props: ParolangeloProps){
    const creatorId = (creator: Vocaboliere) => creator.node.RelativeUri(vocang)
    return <NamedSection title={'Vocabolieri'}>
        <List
            isOrdered={false}
            list={
                props.parolangelo.creators((node) =>
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

function Images(props: ParolangeloProps){
    return <ConditionalComponent condition={() => props.parolangelo.images?.length > 0}>
        <NamedSection title={'Immagini'}>
            <List
                styleNone={true}
                isOrdered={false}
                list={props.parolangelo.images}
                elementContent={image =>
                    <span className="image left">
                        <img src={image} alt={props.parolangelo.prefLabel}/>
                    </span>
                }
            />
        </NamedSection>
    </ConditionalComponent>
}

function Videos(props: ParolangeloProps){
    return <ConditionalComponent condition={() => props.parolangelo.videos?.length > 0}>
        <NamedSection title={'Video'}>
            <List
                styleNone={true}
                isOrdered={false}
                list={props.parolangelo.videos}
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

function Created(props: ParolangeloProps){
    if(props.parolangelo.created !== null) {
        return <NamedSection title={'Data di creazione'}>
            <p>{DateUtility.toDateString(new Date(props.parolangelo.created.toString()))}</p>
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

function Synonyms(props: ParolangeloProps){
    return <OtherParolangelo
        title={'Parolangelo Sinonimi'}
        condition={() => props.parolangelo.synonyms().length > 0}
        list={props.parolangelo.synonyms()}
    />
}

function Related(props: ParolangeloProps){
    return <OtherParolangelo
        title={'Parolangelo Correllate'}
        condition={() => props.parolangelo.related()?.length > 0}
        list={props.parolangelo.related()}
    />
}

function Note(props: ParolangeloProps){
    return <ConditionalComponent condition={() => props.parolangelo.notes?.length > 0}>
        <NamedSection title={'Note'}>
            <List
                isOrdered={false}
                list={props.parolangelo.notes}
                elementContent={note => <p>{note}</p>}
            />
        </NamedSection>
    </ConditionalComponent>
}
