export function binarySearch(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length-1;

    if (nums.length === 0) {
        return -1;
    }

    if (target < nums[0] || target > nums[nums.length-1]) {
        return -1
    }

    do {
        const mid = start + Math.floor((end-start)/2);
        const midVal = nums[mid];

        if (midVal === target) {
            return mid;
        }

        if (target < midVal) {
            end = mid-1;
        } else {
            start = mid+1;
        }
    } while (start <= end);

    return -1;
}
