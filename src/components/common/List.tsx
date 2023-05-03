import React from 'react'
import {ListProps} from '../props/ListProps'
import {Link} from 'react-router-dom'
import IsOrderedListProps from '../props/IsOrderedListProps'


export function List<T>(props: IsOrderedListProps<T>) {
    const {list, elementContent, elementLink, isOrdered, styleNone} = props

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
        return <ol>{listItems(list, elementContent, elementLink)}</ol>
    } else {
        return <ul style={{listStyle: styleNone ? 'none' : ''}}>{listItems(list, elementContent, elementLink)}</ul>
    }
}
