// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters 
// of a different word or phrase, typically using all the original letters exactly once.

export function isAnagram(s: string, t: string): boolean {
    // iterate through both strings, make them s count up, while t count down
    const map = new Map<string, number>();

    for (const char of s) {
        if (map.get(char)) {
            const newVal = map.get(char) as number;
            map.set(char, newVal+1);
        } else {
            map.set(char, 0);
        }
    }

    for (const char of t) {
        if (map.get(char)) {
            const newVal = map.get(char) as number;
            map.set(char, newVal-1);
        } else {
            return false;
        }
    }

    for (const key of map) {
        if (key[1] !== 0) {
            return false;
        }
    }

    return true;
}
