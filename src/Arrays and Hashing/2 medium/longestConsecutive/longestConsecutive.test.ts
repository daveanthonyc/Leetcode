import { test, expect } from "vitest";
import { longestConsecutive } from "./longestConsecutive";

test('longest consecutive works', () => {
    expect(longestConsecutive([1,2,3,4])).toBe(4);
})

test('longest consecutive works', () => {
    expect(longestConsecutive([1,3,-1,0,1])).toBe(3);
})

test('longest consecutive works', () => {
    expect(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6])).toBe(7);
})

test('longest consecutive works', () => {
    expect(longestConsecutive([1,2,0,1])).toBe(3);
})
