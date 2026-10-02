class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sString = [...s].sort().join("");
        const tString = [...t].sort().join("");

        return sString === tString;
    }
}
