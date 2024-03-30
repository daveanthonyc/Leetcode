//Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
//Input: nums = [1,1,1,2,2,3], k = 2
//Output: [1,2]
// 1: 3
// 2: 2
// 3: 1
// determine order of which highest
// all unique numbers in array, sorted in most frequent to least -> return slice(0,k)

export function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map();

    // iterate nums
    for (const num of nums) {
        map.set(num, (map.get(num) | 0) + 1);
    }

    return Array.from(map.entries()).sort((a,b) => b[1] - a[1]).slice(0,k).map(num => num[0]);
}
