import { test, expect } from "vitest";
import { isValidPair, isValidParenthesis } from "./isValidParenthesis";

test('valid parenthesis', () => {
    expect(isValidParenthesis('(){}[]')).toEqual(true);
    expect(isValidParenthesis('()')).toEqual(true);
    expect(isValidParenthesis('({[]})')).toEqual(true);

    expect(isValidParenthesis('(){}[')).toEqual(false);
    expect(isValidParenthesis('(')).toEqual(false);
    expect(isValidParenthesis(')')).toEqual(false);
    expect(isValidParenthesis('({)}')).toEqual(false);
    expect(isValidParenthesis('')).toEqual(false);
})

test('valid pair', () => {
    expect(isValidPair('{', '}')).toEqual(true);
    expect(isValidPair('[', ']')).toEqual(true);
    expect(isValidPair('(', ')')).toEqual(true);
    expect(isValidPair('{', ']')).toEqual(false);
    expect(isValidPair('[', ')')).toEqual(false);
    expect(isValidPair('(', '}')).toEqual(false);
})
