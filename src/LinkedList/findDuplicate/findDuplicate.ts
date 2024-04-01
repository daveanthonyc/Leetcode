function findDuplicate(nums: number[]): number {
    const set = new Set();

    for (const num of nums) {
        if (!set.has(num)) {
            set.add(num);
        } else {
            return num;
        }
    }

    return -1;
};
