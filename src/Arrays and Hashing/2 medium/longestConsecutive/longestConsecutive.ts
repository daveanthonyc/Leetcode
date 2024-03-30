// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
// Example 1:
// 
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.


export function longestConsecutive(nums: number[]): number {
    const numbers = new Set(nums);
    let maxCount = 0;

    for (const num of numbers) {
        if (!numbers.has(num - 1)) {
            let count = 1;

            while (numbers.has(num + count)) {
                count++;
            }

            maxCount = Math.max(count, maxCount);
        }
    }

    return maxCount;
};

// SLOWER SOLUTION => Apparently O(n^2)
// export function longestConsecutive(nums: number[]) {
//     const numbers = new Set(nums);
//     let maxCount = 0;
// 
//     for (const num of nums) {
//         if (!numbers.has(num - 1)) {
//             let currentNum = num;
//             let count = 1;
// 
//             while (numbers.has(currentNum + 1)) {
//                 currentNum++;
//                 count++;
//             }
// 
//             maxCount = Math.max(count, maxCount);
//         }
//     }
// 
//     return maxCount;
// }

