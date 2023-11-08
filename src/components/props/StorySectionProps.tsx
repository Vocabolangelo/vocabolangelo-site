import StoryProps from './StoryProps'

/**
 * Props of a Section of the STORY Layout.
 */
export default interface StorySectionProps extends StoryProps {
    style: number
    imageUrl?: string
    imageAlt?: string
}
