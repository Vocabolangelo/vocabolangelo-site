export default interface SectionListProps<T, S> {
    list: T[]
    sectionTitle: (element: T) => string
    sublist: (element: T) => S[]
    content: (element: S) => JSX.Element
}
