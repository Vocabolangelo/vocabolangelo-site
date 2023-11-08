import ChildrenProps from './ChildrenProps'

/**
 * Props for a generic Story component that may need optional modifiers.
 */
export default interface StoryProps extends ChildrenProps {
    optionalModifiers?: string[]
}
