// 74. Search a 2D Matrix
// You are given an m x n integer matrix matrix with the following two properties:
//     Each row is sorted in non-decreasing order.
//     The first integer of each row is greater than the last integer of the previous row.
// 
// Given an integer target, return true if target is in matrix or false otherwise.
// 
// You must write a solution in O(log(m * n)) time complexity.

export function searchMatrix(matrix: number[][], target: number): boolean {
    let start = 0;
    // get total length of combined rows
    const rowLength = matrix[0].length;
    const columnLength = matrix.length;
    const combinedRowsLength = rowLength * columnLength;

    let end = combinedRowsLength-1;

    do {
        const midIndex = start + Math.floor((end - start) / 2);
        const row = Math.floor(midIndex / rowLength);
        const column = midIndex % rowLength;
        const midVal = matrix[row][column];

        if (midVal === target) {
            return true;
        } 

        if (target < midVal) {
            end = midIndex - 1;
        } else {
            start = midIndex + 1;
        }
    } while (start <= end);

    return false;
};
