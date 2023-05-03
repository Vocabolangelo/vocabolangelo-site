import React from 'react'
import {ListProps} from './ListProps'
import {Link} from 'react-router-dom'

interface MaybeOrderedListProps<T> extends ListProps<T>{
    isOrdered : boolean
    listStyle?: string
}


export function List<T>(props: MaybeOrderedListProps<T>) {
    const {list, elementContent, elementLink, isOrdered, listStyle} = props

    function listItems<T>(
        list: T[],
        elementContent: (node: T) => JSX.Element,
        elementLink?: (node: T) => string
    ): JSX.Element[] {
        return list?.map((node, index) => {
            return <li key={index}>
                {elementLink === undefined ?
                    elementContent(node) :
                    <Link to={elementLink(node) as string}>{elementContent(node)}</Link>
                }
            </li>
        })
    }


    if(isOrdered) {
        return <ol style={{listStyle: listStyle}}>{listItems(list, elementContent, elementLink)}</ol>
    } else {
        return <ul style={{listStyle: listStyle}}>{listItems(list, elementContent, elementLink)}</ul>
    }
}
