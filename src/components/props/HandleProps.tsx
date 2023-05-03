/**
 * Props that contains a handle to execute.
 */
export default interface HandleProps<T> {
    handle: (element: T) => void;
}