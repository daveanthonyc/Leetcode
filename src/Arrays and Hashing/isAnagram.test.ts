import { test, expect } from "vitest";
import { isAnagram } from "./isAnagram";

test('returns true if t is anagram of s', () => {
    expect(isAnagram("a", "a")).toEqual(true);
})

test('returns false if t is not anagram of s', () => {
    expect(isAnagram("a", "b")).toEqual(false);
})
