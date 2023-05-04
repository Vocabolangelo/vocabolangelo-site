import {List} from './List'
import React from 'react'
import SectionListProps from '../props/SectionListProps'

export function SectionList<T, S>(props: SectionListProps<T, S>) {

    return <>
        {props.list.map((element, index) => {
            return <section key={index}>
                <header><h2>{props.sectionTitle(element)}</h2></header>
                <List
                    isOrdered={false}
                    list={props.sublist(element)}
                    elementContent={props.content}
                />
            </section>
        })}

    </>
}
