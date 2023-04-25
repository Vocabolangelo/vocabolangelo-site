import {listItems} from "./ListItem";
import React from "react";
import {ListProps} from "./ListProps";

interface MaybeOrderedListProps<T> extends ListProps<T>{
    isOrdered : boolean
    listStyle?: string
}

export function List<T>(props: MaybeOrderedListProps<T>) {
    const {list, elementKey, elementContent, elementLink, isOrdered, listStyle} = props;

    if(isOrdered) {
        return <ol style={{listStyle: listStyle}}>{listItems(list, elementKey, elementContent, elementLink)}</ol>
    } else {
        return <ul style={{listStyle: listStyle}}>{listItems(list, elementKey, elementContent, elementLink)}</ul>
    }
}

