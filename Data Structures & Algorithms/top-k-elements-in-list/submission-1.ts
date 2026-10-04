class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const sortedNums = nums.sort();

        const map = {
            1: []
        };
        let count = 0;

        for (let i = 0; i < nums.length; i++) {
            if (sortedNums[i] !== sortedNums[i - 1]) {
                map[1].push(sortedNums[i])
                count = 1;
            }
            else {
                map[count + 1] = Array.from(map[count + 1] ?? []);
                map[count + 1].push(sortedNums[i]);
                map[count] = map[count].slice(0, -1);
                count++;
            }
        }

        const array = [];

        for (let key in map) {
            array.push(map[key])
        }

        return array.flat(1).splice(-k);
    }
}
