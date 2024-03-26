export function isValidParenthesis(s: string): boolean {
    if (s.length === 0) {
        return false;
    }

    const stack: Array<string> = [];

    for (const bracket of s) {
        if ('{[('.includes(bracket)) {
            stack.push(bracket);
        } else {
            const top = stack.pop();
            if (!isValidPair(top, bracket)) {
                return false;
            }
        }
    }

    return (stack.length === 0);
}

export function isValidPair(openBracket: string | undefined, closedBracket: string | undefined) {
    if (!openBracket || !closedBracket) {
        return false;
    } 

    const pair = openBracket+closedBracket;

    return ('{}'.includes(pair) || '[]'.includes(pair) || '()'.includes(pair));
}
