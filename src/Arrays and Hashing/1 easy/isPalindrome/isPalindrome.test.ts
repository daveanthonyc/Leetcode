import { test, expect } from "vitest";
import { isPalindrome } from "./isPalindrome";

test('palindrome check works', () => {
    expect(isPalindrome('racecar')).toEqual(true);
    expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true);
})
