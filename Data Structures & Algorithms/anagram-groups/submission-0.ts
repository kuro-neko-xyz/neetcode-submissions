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
                const newNode = [...lastNode, cur[1]];
                const newArray = Array.from(acc);
                newArray[acc.length - 1] = newNode;
                return newArray;
            } else {
                const newArray = Array.from(acc);
                newArray[acc.length] = cur;
                return newArray;
            }
        }, [])

        return groupedStrings.map(str => str.slice(1));
    }
}
