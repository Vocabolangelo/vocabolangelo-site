import React from 'react'
import CheckConditionProps from '../../props/CheckConditionProps'

export default function ConditionalComponent(props: CheckConditionProps) {
    if(props.condition()) {
        return <> {props.children} </>
    } else {
        return <></>
    }
}
