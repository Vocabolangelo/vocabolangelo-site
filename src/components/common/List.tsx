import React from 'react'
import IsOrderedListProps from '../props/IsOrderedListProps'


export function List<T>(props: IsOrderedListProps<T>) {
    const {list, elementContent, isOrdered, styleNone} = props

    function listItems<T>(list: T[], elementContent: (node: T) => JSX.Element): JSX.Element[] {
        return list?.map((node, index) => {
            return <li key={index}>{elementContent(node)}</li>
        })
    }


    if(isOrdered) {
        return <ol>{listItems(list, elementContent)}</ol>
    } else {
        return <ul style={{listStyle: styleNone ? 'none' : ''}}>{listItems(list, elementContent)}</ul>
    }
}
