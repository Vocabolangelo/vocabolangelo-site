import {List} from './List'
import React from 'react'

interface SectionListProps<T, S> {
    list: T[]
    sectionTitle: (element: T) => string
    subListFromElement: (element: T) => S[]
    subListElementToContent: (element: S) => JSX.Element
}

export function SectionList<T, S>(props: SectionListProps<T, S>) {

    return <>
        {props.list.map((element, index) => {
            return <section key={index}>
                <header><h2>{props.sectionTitle(element)}</h2></header>
                <List
                    isOrdered={false}
                    list={props.subListFromElement(element)}
                    elementContent={props.subListElementToContent}
                />
            </section>
        })}

    </>
}
