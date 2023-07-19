import { Theme } from '../../../classes/Theme'
import StorySectionProps from '../../props/StorySectionProps'
import {selectorTheme} from '../../../state/selectorTheme'

export default function InnerWrapper(props: StorySectionProps) {
    
    const theme: Theme = selectorTheme()

    const {style, optionalModifiers} = props
    const modifierString = (optionalModifiers !== undefined ? optionalModifiers.join(' ') : '')
        .concat(theme.toModifiers())
    return <section className={`wrapper style${style} ${modifierString}`}>
        <div className="inner">
            {props.children}
        </div>
    </section>

}