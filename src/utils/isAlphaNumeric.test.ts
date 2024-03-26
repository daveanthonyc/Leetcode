import { expect, test } from "vitest";
import { isAlphaNumeric } from "./isAlphaNumeric";

test('alpha numeric test works ', () => {
    expect(isAlphaNumeric('a')).toBe(true);
    expect(isAlphaNumeric('b')).toBe(true);
    expect(isAlphaNumeric('p')).toBe(true);
    expect(isAlphaNumeric('y')).toBe(true);
    expect(isAlphaNumeric('z')).toBe(true);
    expect(isAlphaNumeric('1')).toBe(true);
    expect(isAlphaNumeric('0')).toBe(true);
    expect(isAlphaNumeric('5')).toBe(true);
    expect(isAlphaNumeric('9')).toBe(true);
    expect(isAlphaNumeric('A')).toBe(true);
    expect(isAlphaNumeric('B')).toBe(true);
    expect(isAlphaNumeric('P')).toBe(true);
    expect(isAlphaNumeric('Y')).toBe(true);
    expect(isAlphaNumeric('Z')).toBe(true);
})

test('reject non alpha numeric ', () => {
    expect(isAlphaNumeric('@')).toBe(false);
    expect(isAlphaNumeric(' ')).toBe(false);
    expect(isAlphaNumeric('!')).toBe(false);
})
