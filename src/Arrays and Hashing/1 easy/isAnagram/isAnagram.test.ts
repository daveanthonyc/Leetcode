import { test, expect } from "vitest";
import { isAnagram } from "./isAnagram";

test('success', () => {
    expect(isAnagram('abcdef', 'adcbfe')).toBe(true);
    expect(isAnagram('a', 'a')).toBe(true);
})

test('fail', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
    expect(isAnagram('a', 'ab')).toBe(false);
    expect(isAnagram('abc', 'ab')).toBe(false);
})
