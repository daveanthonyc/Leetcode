import { test, expect } from "vitest";
import { binarySearch } from "./binarySearch";

test('binary Search works', () => {
    expect(binarySearch([1,2,3,4], 4)).toBe(3)
    expect(binarySearch([1,2,3,4], 1)).toBe(0);
    expect(binarySearch([1,2,3,4,5], 5)).toBe(4);
    expect(binarySearch([1,2,3,4,5], 1)).toBe(0);
    expect(binarySearch([1,2,3,4,5], 3)).toBe(2);
})

test('out of bounds', () => {
    expect(binarySearch([1,2,3,4,5], 6)).toBe(-1);
    expect(binarySearch([1,2,3,4,5], 0)).toBe(-1);
})

test('missing in middle', () => {
    expect(binarySearch([1,2,4,5], 3)).toBe(-1);
    expect(binarySearch([1,2,4,5,6,9,20], 7)).toBe(-1);
})
