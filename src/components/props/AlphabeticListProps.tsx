import {ListProps} from './ListProps'

export default interface AlphabeticListProps<T> extends ListProps<T>{
    alphabeticStrategy: (node: T, letter: string) => boolean
}