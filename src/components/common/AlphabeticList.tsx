import {listItems} from "./ListItem";
import React from "react";
import {ListProps} from "./ListProps";

interface AlphabeticListProps<T> extends ListProps<T>{
    alphabeticStrategy: (node: T, letter: string) => boolean
}

export function AlphabeticList<T>(props: AlphabeticListProps<T>) {
    const {list, elementKey, elementContent, elementLink, alphabeticStrategy} = props;
    const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

    function subListForLetter(letter: string): T[] {
        return list.filter(obj => alphabeticStrategy(obj, letter))
    }

    return <>
        {alphabet.filter((letter) => subListForLetter(letter).length > 0).map((letter) => {
            return <section key={letter}>
                <header><h2>{letter.toUpperCase()}</h2></header>
                <ul>
                    {listItems(subListForLetter(letter), elementKey, elementContent, elementLink)}
                </ul>
            </section>
        })}
    </>
}

