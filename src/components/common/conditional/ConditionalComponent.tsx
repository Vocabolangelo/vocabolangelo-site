import React from "react";

interface ConditionalComponentProps {
    condition: () => boolean;
    component: JSX.Element
}

export default function ConditionalComponent(props: ConditionalComponentProps) {
    const {condition, component} = props
    if(condition()) {
        return component
    } else {
        return <></>
    }
}
