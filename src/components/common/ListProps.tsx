export interface ListProps<T>{
    list: T[]
    elementKey: (node: T) => string
    elementContent: (node: T) => JSX.Element
    elementLink?: (node: T) => string
}