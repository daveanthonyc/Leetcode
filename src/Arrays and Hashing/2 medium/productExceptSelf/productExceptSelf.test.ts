import { test, expect } from "vitest";
import { productExceptSelf } from "./productExceptSelf";

//Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

test('works', () => {
    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
    expect(productExceptSelf([-1,1,0,-3,3])).toEqual([0,0,9,0,0]);
})
