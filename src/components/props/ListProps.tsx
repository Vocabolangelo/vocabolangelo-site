export interface ListProps<T>{
    list: T[]
    elementContent: (node: T) => JSX.Element
    searchString?: string
    searchFilterStrategy?: (node: T, str: string) => boolean
    styleNone?: boolean
}
