// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

export function threeSum(nums: number[]): number[][] {
    const output = [];

    // sorted to be able to do two sum with 2 pointers
    nums.sort((a,b) => a - b);

    // iterate nums[i] so can be added with value in left,right pointer
    for (let i = 0; i < nums.length; i++) {
        // ensure doesn't match index
        let left = i+1;
        let right = nums.length-1;

        if (nums[i] === nums[i-1]) {
            // skip duplicate numbers so that there is no double entry in the output
            continue;
        }

        while (left < right) {
            const TOTAL = nums[i] + nums[left] + nums[right];

            if (TOTAL > 0) {
                right--;
            } else if (TOTAL < 0){
                left++;
            } else {
                output.push([nums[i], nums[left], nums[right]]);
                // there has to be some update with pointer
                left++;
                while (nums[left] === nums[left-1] && left < right) {
                    // similar check to above,to ensure no duplicate, but also ensures X out of bound
                    left++;
                }
            }
        } 
    }

    return output;
};
