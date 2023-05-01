import React from 'react'
import ChildrenProps from '../../props/ChildrenProps'

interface ConditionalComponentProps extends ChildrenProps{
    condition: () => boolean
}

export default function ConditionalComponent(props: ConditionalComponentProps) {
    if(props.condition()) {
        return <> {props.children} </>
    } else {
        return <></>
    }
}
