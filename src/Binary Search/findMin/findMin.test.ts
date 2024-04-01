import { test, expect } from "vitest";
import { findMin } from "./findMin";

test('works', () => {
    expect(findMin([4,5,1,2,3])).toBe(1);
    expect(findMin([1,2,3,4,5])).toBe(1);
    expect(findMin([2,3,4,5,1])).toBe(1);
})
