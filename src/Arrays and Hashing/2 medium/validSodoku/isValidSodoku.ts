// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
//     Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

export function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < board.length; i++) {
        const rowSet = new Set<string>();
        const columnSet = new Set<string>();

        const row = board[i];
        const column = [
            board[0][i],
            board[1][i],
            board[2][i],
            board[3][i],
            board[4][i],
            board[5][i],
            board[6][i],
            board[7][i],
            board[8][i],
        ]

        if (hasReptetionInLine(rowSet, row) || hasReptetionInLine(columnSet, column)) {
            return false;
        }
    }

    for (let i = 0; i < board.length; i+= 3) {
        for (let j = 0; j < board.length; j+= 3) {
            if (!isValidBox(board, [i,j])) {
                return false;
            }
        }
    }

    return true;
};

export function hasReptetionInLine(numSet: Set<string>, row: string[]): boolean {
    for (const num of row) {
        if (numSet.has(num) && num !== ".") {
            return true;
        } else if (num !== ".") {
            numSet.add(num);
        }
    }

    return false;
}

export function isValidBox(board: string[][], topLeftRootIndex: [number, number]) {
    const set = new Set();

    for (let i = topLeftRootIndex[0]; i < topLeftRootIndex[0]+3; i++) {
        for (let j = topLeftRootIndex[1]; j < topLeftRootIndex[1]+3; j++) {
            if (set.has(board[i][j])) {
                return false;
            }

            if (board[i][j] !== ".") {
                set.add(board[i][j]);
            }
        }
    }

    return true;
}
