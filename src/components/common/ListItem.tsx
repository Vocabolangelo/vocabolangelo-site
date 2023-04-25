import React from "react";
import {Link} from "react-router-dom";

export function listItems<T>(
    list: T[],
    elementKey: (node: T) => string,
    elementContent: (node: T) => JSX.Element,
    elementLink?: (node: T) => string
): JSX.Element[] {
    return list?.map(node => {
        return <li key={elementKey(node)}>
            {elementLink === undefined ?
                elementContent(node) :
                <Link to={elementLink(node) as string}>{elementContent(node)}</Link>
            }
        </li>
    })
}