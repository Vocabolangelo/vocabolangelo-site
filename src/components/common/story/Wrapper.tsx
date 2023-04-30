import React from 'react'
import {Main} from '../Main'
import StoryProps from '../../props/StoryProps'

export default function Wrapper(props: StoryProps) {
    const modifierString = props.optionalModifiers?.join(' ')
    return <Main>
        <main id={'wrapper'} className={`divided ${modifierString}`}>
            {props.children}
        </main>
    </Main>
}
