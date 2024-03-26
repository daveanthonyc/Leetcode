// given a sorted array, find indexes of two numbers that add up to target, assume only 1 solution

export function twoSum(arr: number[], target: number): [number, number] {
    let start = 0;
    let end = arr.length;

    while (start < end) {
        const total = arr[start] + arr[end];

        if (total === target) {
            return [start, end];
        }

        if (total < target) {
            start++;
        } else {
            end--;
        }
    }

    throw new Error("The array does not have a pair of indeces, whose value add up to target");
} 
