class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map();

        nums.forEach((num, index) => {
            if (map.get(num) === undefined) {
                map.set(num, index)
            }
        })

        for (let i = 0; i < nums.length; i++) {
            const summand = target - nums[i];
            const indexFromMap = map.get(summand);

            if (indexFromMap != undefined) {
                if (i < indexFromMap) {
                    return [i, indexFromMap]
                }
                if (i > indexFromMap) {
                    return [indexFromMap, i]
                }

            }
        }
    }
}
