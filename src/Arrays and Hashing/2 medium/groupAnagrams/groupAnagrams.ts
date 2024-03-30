// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// eat: [eat, tea, ate]
// tan: [tan, nat]
// bat: [bat]

export function groupAnagrams(strgs: string[]): string[][] {
    const anagrams:{[key: string]: (string[])} = {};

    // iterate through strings
    for (const word of strgs) {
        const sortedWord = word.split('').sort().join('');
        const selectedAnagrams = anagrams[sortedWord];

        if (!selectedAnagrams) {
            anagrams[sortedWord] = [word];
        } else {
            selectedAnagrams.push(word);
        }
    }

    return Object.values(anagrams);
}
