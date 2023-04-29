import StorySectionProps from '../../props/StorySectionProps'
import StorySection from './StorySection'

/**
 * Banner element from the Story Layout.
 * @param {StorySectionProps} props the component props.
 */
export default function Banner(props: StorySectionProps) {
    const {style, optionalModifiers, imageUrl, imageAlt} = props
    const modifiers = optionalModifiers !== undefined ? optionalModifiers : []
    return <StorySection
        style={style}
        optionalModifiers={['banner'].concat(modifiers)}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
    >
        {props.children}
    </StorySection>
}