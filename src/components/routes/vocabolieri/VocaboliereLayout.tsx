import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {RDFStore} from '../../../rdf/RDFStore'
import {vocang} from '../../../rdf/prefixes'
import Wrapper from '../../common/story/Wrapper'
import {Vocaboliere} from '../../../rdf/types/Vocaboliere'
import ConditionalComponent from '../../common/conditional/ConditionalComponent'
import {NamedSection} from '../../common/NamedSection'
import {List} from '../../common/List'
import {PAROLANGELO_ROUTE} from '../concept/ConceptList'
import {VOCABOLIERI_ROUTE} from './Vocabolieri'
import InnerWrapper from '../../common/story/InnerWrapper'
import {Parolangelo} from '../../../rdf/types/Parolangelo'
import {Organization} from '../../../rdf/types/Organization'
import VocaboliereProps from '../../props/VocaboliereProps'

export function VocaboliereLayout() {

    const [vocaboliere, setVocaboliere] =
        useState<Vocaboliere | undefined>(undefined)
    const params = useParams()

    useEffect(() => {
        RDFStore.safeCall(store => {
            return new Vocaboliere(store.sym(vocang.uri + params.id))
        }).then(vocaboliere =>
            setVocaboliere(vocaboliere)
        )
    }, [params.id])

    if(vocaboliere !== undefined) {
        return <Wrapper>
            <InnerWrapper style={1}>
                <header>
                    <h1> {vocaboliere.fullName()} </h1>
                    {vocaboliere.nick !== undefined && <p>{vocaboliere.nick}</p>}
                </header>
                <div className="index align-left">
                    <Images vocaboliere={vocaboliere}/>
                    <Gender vocaboliere={vocaboliere}/>
                    <Organizations vocaboliere={vocaboliere}/>
                    <Contribution vocaboliere={vocaboliere}/>
                    <Friends vocaboliere={vocaboliere}/>
                    <Siblings vocaboliere={vocaboliere}/>
                    <Partners vocaboliere={vocaboliere}/>
                    <ParolangeloCreated vocaboliere={vocaboliere}/>
                </div>
            </InnerWrapper>
        </Wrapper>
    } else {
        return <> </>
    }
}

function Gender(props: VocaboliereProps){
    const gender = props.vocaboliere.gender
    return <NamedSection title={'Genere'}>
        <p>{Vocaboliere.genderString(gender)}</p>
    </NamedSection>
}

function Organizations(props: VocaboliereProps){
    const organizations = props.vocaboliere.memberOf()().map(
        node => new Organization(node.node)
    )
    return <NamedSection title={'Organizzazioni'}>
        <List
            isOrdered={false}
            list={organizations}
            elementContent={p => <p> {p.toEnum().toString()} </p>}
        />
    </NamedSection>
}

function Friends(props: VocaboliereProps){
    const friends = props.vocaboliere.friends().sort(
        (a, b) => a.lastName.localeCompare(b.lastName)
    )
    return <ConditionalComponent condition={() => friends?.length > 0}>
        <NamedSection title={'Amici'}>
            <List
                isOrdered={false}
                list={friends}
                elementContent={p => {
                    if (p.node.uri !== props.vocaboliere.node.uri ) {
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

function Siblings(props: VocaboliereProps){
    const siblings = props.vocaboliere.siblings().sort(
        (a, b) => a.lastName.localeCompare(b.lastName)
    )
    return <ConditionalComponent condition={() => siblings?.length > 0}>
        <NamedSection title={'Fratelli e Sorelle'}>
            <List
                isOrdered={false}
                list={siblings}
                elementContent={p =>
                    <Link to={`${VOCABOLIERI_ROUTE}/${p.node.RelativeUri(vocang)}`}>
                        <p>{p.fullName()}</p>
                    </Link>
                }
            />
        </NamedSection>
    </ConditionalComponent>
}

function Partners(props: VocaboliereProps){
    const partners = props.vocaboliere.partners().sort(
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

function ParolangeloCreated(props: VocaboliereProps){
    const parolangelo = props.vocaboliere.creatorOf()()
        .map((node) => new Parolangelo(node.node))
        .sort((a, b) => a.prefLabel.localeCompare(b.prefLabel))
    return <ConditionalComponent condition={() => parolangelo?.length > 0}>
        <NamedSection title={'Parolangelo create'}>
            <List
                isOrdered={false}
                list={parolangelo}
                elementContent={c =>
                    <Link to={`${PAROLANGELO_ROUTE}/${c.node.RelativeUri(vocang)}`}>
                        <p>{c.prefLabel}</p>
                    </Link>
                }
            />
        </NamedSection>
    </ConditionalComponent>
}

function Contribution(props: VocaboliereProps){
    const parolangelo = props.vocaboliere.creatorOf()()
    const soloParolangeloCount = parolangelo.filter(
        c => new Parolangelo(c.node).creators((node) =>
            (RDFStore.store.any(node, undefined, vocang.namespace('Vocaboliere')) !== null)
        )().length === 1
    ).length
    return <ConditionalComponent condition={() => parolangelo?.length > 0}>
        <NamedSection title={'Contributo'}>
            <p>Da solo ho inventato: <strong>{soloParolangeloCount}</strong> parolangelo.</p>
            <p>Insieme ad altri ho inventato:
                <strong>{parolangelo.length - soloParolangeloCount}</strong> parolangelo.
            </p>
            <p>In totale ho inventato: <strong>{parolangelo.length}</strong> parolangelo.</p>
        </NamedSection>
    </ConditionalComponent>
}

function Images(props: VocaboliereProps) {
    const images = props.vocaboliere.images
    return <ConditionalComponent condition={() => images?.length > 0}>
        <NamedSection title={'Foto'}>
            <List
                styleNone={true}
                isOrdered={false}
                list={images}
                elementContent={i => <img style={{borderRadius:'50%', maxWidth:'25vw'}} src={i} alt={ props.vocaboliere.fullName()}/>}
            />
        </NamedSection>
    </ConditionalComponent>
}
