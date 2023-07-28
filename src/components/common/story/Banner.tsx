import { useSelector } from 'react-redux'
import StorySectionProps from '../../props/StorySectionProps'
import StorySection from './StorySection'
import { State } from '../../../state/State'
import { Theme } from '../../../classes/Theme'

/**
 * Banner element from the Story Layout.
 * @param {StorySectionProps} props the component props.
 */
export default function Banner(props: StorySectionProps) {
    
    const theme: Theme = useSelector((state: State) => state.theme)

    console.log(theme.toModifiers())

    const {style, optionalModifiers, imageUrl, imageAlt} = props
    const modifiers = optionalModifiers !== undefined ? optionalModifiers : []
    return <StorySection
        style={style}
        optionalModifiers={['banner'].concat(modifiers).concat(theme.toModifiers())}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
    >
        {props.children}
    </StorySection>
}