export default class AlphabetUtility {

    /**
     * @return {string[]} a list containing the letters of the alphabet in lowercase.
     */
    static alphabet(): string[] {
        return 'abcdefghijklmnopqrstuvwxyz'.split('')
    }

    /**
     * Utility function that checks if a string starts with a letter ignoring case.
     * @param str the string to check.
     * @param letter the letter.
     */
    static startsWith(str: string, letter: string): boolean {
        return str.toLowerCase().startsWith(letter.toLowerCase())
    }

}

