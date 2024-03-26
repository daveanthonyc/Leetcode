import { isAlphaNumeric } from "../../../utils/isAlphaNumeric";

// convert lower case
// remove spaces and alphanumeric characters

export function isPalindrome(s: string): boolean {
    let start = 0;
    let end = s.length-1;
    const lowerCase = s.toLowerCase();

    while (start < end) {
        const startVal = lowerCase[start];
        const endVal = lowerCase[end];

        if (!isAlphaNumeric(startVal)) {
            start++;
            continue;
        }

        if (!isAlphaNumeric(endVal)) {
            end--;
            continue;
        }

        // both are alphanumeric and can be compared
        if (startVal !== endVal) {
            return false;
        }

        start++;
        end--
    }

    return true;
}
