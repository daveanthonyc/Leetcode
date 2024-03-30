//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
//The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//You must write an algorithm that runs in O(n) time and without using the division operation.

//Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// relate key of map to index

export function productExceptSelf(nums: number[]): number[] {
    let n = nums.length;
    let answer = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        answer[i] = nums[i - 1] * answer[i - 1];
    }

    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] = answer[i] * rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
}
