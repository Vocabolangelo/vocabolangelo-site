import React from 'react'
import IsOrderedListProps from '../props/IsOrderedListProps'

export function List<T>(props: IsOrderedListProps<T>) {

    function listItems<T>(list: T[], elementContent: (node: T) => JSX.Element): JSX.Element[] {
        return list.sort()?.map((node, index) => {
            return <li key={index}>{elementContent(node)}</li>
        })
    }

    if(props.isOrdered) {
        return <ol>{listItems(props.list, props.elementContent)}</ol>
    } else {
        return <ul style={{listStyle: props.styleNone ? 'none' : ''}}>{listItems(props.list, props.elementContent)}</ul>
    }
}
