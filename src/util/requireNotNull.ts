/**
 * Throw an error if a passed value if null. Return the value otherwise.
 * @template T
 * @param {T | null} t the value to check.
 * @param {string} additionalInfo an additional description of the Error.
 * return {T}
 */
export function requireNotNull<T>(t: T | null, additionalInfo = ''): T {
    if(t !== null) {
        return t
    }
    throw new Error(`Found a null value in a critical position. ${additionalInfo}`)
}
