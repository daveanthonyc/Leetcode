export function findMin(nums: number[]): number {
    let start = 0;
    let end = nums.length;
    let min = nums[(start + Math.floor((end-start)/2))];

    do {
        const mid = start + Math.floor((end-start)/2);
        const midVal = nums[mid];
        min = Math.min((min || midVal) ,midVal);

        // is rotated
        if (nums[end] < nums[start]) {
            start = mid+1;
        } else {
            end = mid-1;
        }
    } while(start < end);

    return min;
};
