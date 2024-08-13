import { Theme } from '../../../classes/Theme'
import StorySectionProps from '../../props/StorySectionProps'
import {selectorTheme} from '../../../state/selectorTheme'

export default function InnerWrapper(props: StorySectionProps) {

    const theme: Theme = selectorTheme()

    const {style, optionalModifiers} = props
    const modifierString = (optionalModifiers !== undefined ? optionalModifiers.join(' ') : '')
    return <section className={`wrapper style${style} ${modifierString} ${theme.toModifiers()}`}>
        <div className="inner">
            {props.children}
        </div>
    </section>

}
