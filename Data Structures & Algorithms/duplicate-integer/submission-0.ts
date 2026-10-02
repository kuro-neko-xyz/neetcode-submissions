class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        for (let n = 0; n < nums.length; n++) {
            if (n !== nums.indexOf(nums[n])) {
                return true;
            }
        }
        return false;
    }
}
