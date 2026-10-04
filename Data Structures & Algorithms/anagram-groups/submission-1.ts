class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const sortedStrings = strs.map(str => [
            Array.from(str).sort().join(""),
            str
        ]).sort();

        const groupedStrings = sortedStrings.reduce((acc: string[][], cur) => {
            const mutter = cur[0];
            const lastNode = acc[acc.length - 1];

            if (lastNode && (mutter === lastNode[0])) {
                acc[acc.length - 1].push(cur[1])
                return acc;
            } else {
                acc[acc.length] = cur;
                return acc;
            }
        }, [])

        return groupedStrings.map(str => str.slice(1));
    }
}
