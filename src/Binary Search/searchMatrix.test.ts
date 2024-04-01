import { test, expect } from "vitest";
import { searchMatrix } from "./searchMatrix";

const matrix = [
    [1,2,3,4],
    [6,7,8,9],
    [10,11,12,13],
]
const matrixWithGaps = [
    [1,3,4],
    [6,7,9],
    [11,12,24],
]

test('search works', () => {
    expect(searchMatrix(matrix, 4)).toBe(true);
})

test('edge cases', () => {
    expect(searchMatrix(matrix, 1)).toBe(true);
    expect(searchMatrix(matrix, 4)).toBe(true);
    expect(searchMatrix(matrix, 6)).toBe(true);
    expect(searchMatrix(matrix, 8)).toBe(true);
    expect(searchMatrix(matrix, 9)).toBe(true);
    expect(searchMatrix(matrix, 10)).toBe(true);
    expect(searchMatrix(matrix, 13)).toBe(true);
    expect(searchMatrix(matrixWithGaps, 12)).toBe(true);
})

test('not found', () => {
    expect(searchMatrix(matrix, 14)).toBe(false);
    expect(searchMatrix(matrixWithGaps, 10)).toBe(false);
})
