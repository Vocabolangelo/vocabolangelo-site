import {ListProps} from './ListProps'

export default interface IsOrderedListProps<T> extends ListProps<T>{
    isOrdered : boolean
}