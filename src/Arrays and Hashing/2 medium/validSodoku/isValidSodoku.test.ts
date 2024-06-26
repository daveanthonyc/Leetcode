import { test, expect } from "vitest";
import { hasReptetionInLine, isValidBox, isValidSudoku } from "./isValidSodoku";

test('detects repetition', () => {
    const set = new Set<string>();
    expect(hasReptetionInLine(set, ["1", "2", "3"])).toEqual(false);
})

test('detects repetition with dots', () => {
    const set = new Set<string>();
    expect(hasReptetionInLine(set, ["1", ".", ".", ".", "3", "5"])).toEqual(false);
})

test('empty board returns true', () => {
    const board = [
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."]
    ]
    expect(isValidSudoku(board)).toEqual(true);
})

test('1 valid line and 1 valid column is true', () => {
    const board = [
        ["1", ".", "2", ".", "3", ".", ".", "9", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["3", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["5", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["9", ".", ".", ".", ".", ".", ".", ".", "."]
    ]
    expect(isValidSudoku(board)).toEqual(true);
})

test('1 valid row and 1 invalid column returns false', () => {
    const board = [
        ["1", ".", "2", ".", "3", ".", ".", "9", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["3", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["9", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["9", ".", ".", ".", ".", ".", ".", ".", "."]
    ]
    expect(isValidSudoku(board)).toEqual(false);
})


//test('valid columns and invalid 3x3 returns false', () => {
//    const board = [
//        ["1", "4", "2", ".", "3", ".", ".", "9", "."],
//        ["5", "6", "7", ".", ".", ".", ".", ".", "."],
//        ["3", "9", "4", ".", ".", ".", ".", ".", "."],
//        [".", ".", ".", ".", ".", ".", ".", ".", "."],
//        [".", ".", ".", ".", ".", ".", ".", ".", "."],
//        ["9", ".", ".", ".", ".", ".", ".", ".", "."],
//        [".", ".", ".", ".", ".", ".", ".", ".", "."],
//        [".", ".", ".", ".", ".", ".", ".", ".", "."],
//        ["4", ".", ".", ".", ".", ".", ".", ".", "."]
//    ]
//    expect(isValidSudoku(board)).toEqual(false);
//})

test('valid box with all valid nums', () => {
    const board = [
        ["1", "4", "2", ".", "3", ".", ".", "9", "."],
        ["5", "6", "7", ".", ".", ".", ".", ".", "."],
        ["3", "9", "8", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["9", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["4", ".", ".", ".", ".", ".", ".", ".", "."]
    ]
    expect(isValidBox(board, [0,0])).toEqual(true);
})

test('valid box with .', () => {
    const board = [
        ["1", ".", "2", ".", "3", ".", ".", "9", "."],
        ["5", "6", ".", ".", ".", ".", ".", ".", "."],
        ["3", ".", "8", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["9", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["4", ".", ".", ".", ".", ".", ".", ".", "."]
    ]
    expect(isValidBox(board, [0,0])).toEqual(true);
})

test('complete valid sodoku', () => {
    const board = [
        ["1", ".", "2", ".", "3", ".", ".", "9", "."],
        ["5", "6", ".", ".", ".", ".", ".", ".", "."],
        ["3", ".", "8", ".", ".", ".", ".", ".", "1"],
        [".", ".", "4", "1", ".", "3", ".", "2", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["9", ".", ".", "2", "4", ".", ".", ".", "."],
        [".", ".", "9", ".", ".", ".", "1", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["4", ".", ".", ".", "1", ".", ".", ".", "9"]
    ]
    expect(isValidBox(board, [0,0])).toEqual(true);
})

test('complete invalid sodoku', () => {
    const board = [
        ["1", ".", "2", ".", "3", ".", ".", "9", "."],
        ["5", "6", ".", ".", ".", ".", ".", ".", "."],
        ["3", ".", "8", ".", ".", ".", ".", ".", "1"],
        [".", ".", "4", "1", ".", "3", ".", "2", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["9", ".", ".", "2", "4", ".", ".", ".", "."],
        [".", ".", "9", ".", ".", ".", "1", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "1", "."],
        ["4", ".", ".", ".", "1", ".", ".", ".", "9"]
    ]
    expect(isValidBox(board, [6,7])).toEqual(false);
})
