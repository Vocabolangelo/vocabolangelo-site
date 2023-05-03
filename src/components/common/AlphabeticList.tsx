import React from 'react'
import {ListProps} from './ListProps'
import {List} from './List'

interface AlphabeticListProps<T> extends ListProps<T>{
    alphabeticStrategy: (node: T, letter: string) => boolean
}

export function AlphabeticList<T>(props: AlphabeticListProps<T>) {
    const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')

    function subListForLetter(letter: string): T[] {
        return props.list
            .filter(obj => props.alphabeticStrategy(obj, letter))
            .filter(obj => props.searchFilterStrategy !== undefined && props.searchString !== undefined
                ? props.searchFilterStrategy(obj, props.searchString)
                : true
            )
    }

    return <>
        {alphabet.filter((letter) => subListForLetter(letter).length > 0).map((letter) => {
            return <section key={letter}>
                <header><h2>{letter.toUpperCase()}</h2></header>
                <List
                    isOrdered={false}
                    list={subListForLetter(letter)}
                    elementContent={props.elementContent}
                    elementLink={props.elementLink}
                />
            </section>
        })}
    </>
}
