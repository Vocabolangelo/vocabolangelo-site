/**
 * Throw an error if a passed value if null. Return the value otherwise.
 * @template T
 * @param {T | null} t the value to check.
 * return {T}
 */
export function requireNotNull<T>(t: T | null): T {
    if(t !== null) {
        return t
    }
    throw new Error("Found a null value in a critical position.")
}
