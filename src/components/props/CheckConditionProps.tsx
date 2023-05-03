import ChildrenProps from './ChildrenProps'

/**
 * Props that contains a condition to check.
 */
export default interface CheckConditionProps extends ChildrenProps{
    condition: () => boolean
}