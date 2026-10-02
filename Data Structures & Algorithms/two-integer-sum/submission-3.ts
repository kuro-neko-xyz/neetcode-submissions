class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (let i = 0; i < nums.length; i++) {
            const summand = target - nums[i];
            const otherIndex = nums.indexOf(summand, i + 1);
            if (otherIndex > -1) {
                return [i, otherIndex];
            }
        }

        return [0, 0];
    }
}
