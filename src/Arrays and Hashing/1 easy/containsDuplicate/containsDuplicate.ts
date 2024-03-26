// Given an integer array nums, return true if any value appears at least 
// twice in the array, and return false if every element is distinct.

export function containsDuplicate(nums: number[]): boolean {
    const set = new Set();

    for (const val of nums) {
        if (set.has(val)) {
            return true;
        } else {
            set.add(val);
        }
    }

    return false;
}
