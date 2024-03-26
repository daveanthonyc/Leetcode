export function isAlphaNumeric(char: string): boolean {
    const alphaNumericRegex = /[a-zA-Z0-9]/;
    return alphaNumericRegex.test(char);
}
