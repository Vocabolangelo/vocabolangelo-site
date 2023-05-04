export interface ListProps<T>{
    list: T[]
    elementContent: (node: T) => JSX.Element
    styleNone?: boolean
}
