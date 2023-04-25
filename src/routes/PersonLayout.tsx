import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {RDFStore} from "../rdf/RDFStore";
import {vocang} from "../rdf/prefixes";
import DefaultLayout from "../components/common/DefaultLayout";
import {Person} from "../rdf/types/Person";
import ConditionalComponent from "../components/common/conditional/ConditionalComponent";
import {NamedSection} from "../components/common/NamedSection";
import {List} from "../components/common/List";
import {PAROLANGELO_ROUTE} from "./Parolangelo";
import {VOCABOLIERI_ROUTE} from "./Vocabolieri";

export function PersonLayout() {

    const [person, setPerson] =
        useState<Person | undefined>(undefined);
    const params = useParams()

    useEffect(() => {
        RDFStore.safeCall(store => {
            return new Person(store.sym(vocang.uri + params.personId))
        }).then(person =>
            setPerson(person)
        )
    }, [params.personId])

    if(person !== undefined) {
        return <ConditionalComponent
            condition={() => person !== undefined}
            component={
                <DefaultLayout
                    title={person.fullName()}
                    subtitle={null}
                    content = {
                        <>
                            {person.images !== null ?
                                <Images person={person}/>
                                :
                                <></>
                            }
                            <Contribution person={person}/>
                            <Friends person={person}/>
                            <Partners person={person}/>
                            <ConceptsCreated person={person}/>
                        </>
                    }
                />
            }
        />
    } else {
        return <></>
    }
}
interface PersonSubLayoutProps {
    person: Person
}

function Friends(props: PersonSubLayoutProps){
    let friends = props.person.friends().sort(
        (a, b) => a.lastName.localeCompare(b.lastName)
    )
    return <ConditionalComponent
        condition={() => friends?.length > 0}
        component={
        <NamedSection
            title={"Amici"}
            content={
                <List
                    isOrdered={false}
                    list={friends}
                    elementKey={p => p.node.RelativeUri(vocang)}
                    elementContent={p => {
                        if (p.node.uri !== props.person.node.uri ) {
                            return <p>{p.fullName(true)}</p>
                        } else {
                            return <></>
                        }
                    }}
                    elementLink={p =>`${VOCABOLIERI_ROUTE}/${p.node.RelativeUri(vocang)}`}
                />
            }
        />
    }/>
}
function Partners(props: PersonSubLayoutProps){
    let partners = props.person.partners().sort(
        (a, b) => a.lastName.localeCompare(b.lastName)
    )
    return <ConditionalComponent
        condition={() => partners?.length > 0}
        component={
            <NamedSection
                title={"Partner"}
                content={
                    <List
                        isOrdered={false}
                        list={partners}
                        elementKey={p => p.node.RelativeUri(vocang)}
                        elementContent={p => <p>{p.fullName()}</p>}
                        elementLink={p =>`${VOCABOLIERI_ROUTE}/${p.node.RelativeUri(vocang)}`}
                    />
                }
            />
        }/>
}

function ConceptsCreated(props: PersonSubLayoutProps){
    let concepts = props.person.creatorOf()().sort(
        (a, b) => a.prefLabel.localeCompare(b.prefLabel)
    )
    return <ConditionalComponent
        condition={() => concepts?.length > 0}
        component={
            <NamedSection
                title={"Parolangelo create"}
                content={
                    <List
                        isOrdered={false}
                        list={concepts}
                        elementKey={c => c.node.RelativeUri(vocang)}
                        elementContent={c => <p>{c.prefLabel}</p>}
                        elementLink={c =>`${PAROLANGELO_ROUTE}/${c.node.RelativeUri(vocang)}`}
                    />
                }
            />
        }/>
}

function Contribution(props: PersonSubLayoutProps){
    let concepts = props.person.creatorOf()()
    let soloConceptsCount = concepts.filter(c => c.creators().length === 1).length
    return <ConditionalComponent
        condition={() => concepts?.length > 0}
        component={
            <NamedSection
                title={"Contributo"}
                content={
                <>
                    <p>Da solo ho inventato: <strong>{soloConceptsCount}</strong> parolangelo.</p>
                    <p>Insieme ad altri ho inventato:
                        <strong>{concepts.length - soloConceptsCount}</strong> parolangelo.
                    </p>
                    <p>In totale ho inventato: <strong>{concepts.length}</strong> parolangelo.</p>
                </>
                }
            />
        }/>
}

function Images(props: PersonSubLayoutProps) {
    let images = props.person.images
    return <ConditionalComponent
        condition={() => images?.length > 0}
        component={
            <NamedSection
                title={"Foto"}
                content={
                    <List
                        listStyle={"none"}
                        isOrdered={false}
                        list={images}
                        elementKey={i => i}
                        elementContent={i => <img style={{borderRadius:"50%", maxWidth:"25vw"}} src={i} alt={ props.person.fullName()}/>}
                    />
                }
            />

        }/>
}
