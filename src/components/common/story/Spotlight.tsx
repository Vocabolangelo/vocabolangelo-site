import { Theme } from '../../../classes/Theme'
import StorySectionProps from '../../props/StorySectionProps'
import StorySection from './StorySection'
import {selectorTheme} from '../../../state/selectorTheme'

/**
 * Spotlight element from the Story Layout.
 * @param {StorySectionProps} props the component props.
 */
export default function Spotlight(props: StorySectionProps) {
    const theme: Theme = selectorTheme()
    
    const {style, optionalModifiers, imageUrl, imageAlt} = props
    const modifiers = optionalModifiers !== undefined ?
        optionalModifiers.concat('spotlight').concat(theme.toModifiers())
        : []
    return <StorySection
        style={style}
        optionalModifiers={modifiers}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
    >
        {props.children}
    </StorySection>
}