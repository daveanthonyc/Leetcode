import { test, expect } from "vitest";
import { twoSum } from "./twoSum";

test('twoSum finds indeces successfully', () => {
    expect(twoSum([1,3,4,6], 9)).toEqual([1,3]);
    expect(twoSum([1,2], 3)).toEqual([0,1]);
})
