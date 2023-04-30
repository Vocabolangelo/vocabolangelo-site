import ChildrenProps from './ChildrenProps'

/**
 * Props of a Section of the STORY Layout.
 */
export default interface StorySectionProps extends ChildrenProps {
    style: number
    optionalModifiers?: string[]
    imageUrl: string
    imageAlt: string
}