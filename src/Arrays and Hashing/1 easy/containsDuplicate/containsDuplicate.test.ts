import { test, expect } from "vitest";
import { containsDuplicate } from "./containsDuplicate";

test('returns true if there is duplicate', () => {
    expect(containsDuplicate([1,2,3,1])).toEqual(true);
    expect(containsDuplicate([1,1])).toEqual(true);
})

test('returns false if there is no duplicate', () => {
    expect(containsDuplicate([1,2,3])).toEqual(false);
    expect(containsDuplicate([1])).toEqual(false);
    expect(containsDuplicate([4,2,5])).toEqual(false);
})
