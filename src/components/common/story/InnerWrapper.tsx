import { useSelector } from 'react-redux'
import { Theme } from '../../../classes/Theme'
import { State } from '../../../state/State'
import StorySectionProps from '../../props/StorySectionProps'

export default function InnerWrapper(props: StorySectionProps) {
    
    const theme: Theme = useSelector((state: State) => state.theme)

    const {style, optionalModifiers} = props
    const modifierString = (optionalModifiers !== undefined ? optionalModifiers.join(' ') : '')
        .concat(theme.toModifiers())
    return <section className={`wrapper style${style} ${modifierString}`}>
        <div className="inner">
            {props.children}
        </div>
    </section>

}