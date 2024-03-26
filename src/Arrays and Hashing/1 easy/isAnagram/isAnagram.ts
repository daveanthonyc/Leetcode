export function isAnagram(s: string, t: string): boolean {
    const comparison: { [key: string]: number } = {};

    if (s.length !== t.length) {
        return false;
    }

    for (let i = 0; i < t.length; i++) {
        comparison[s[i]] = (comparison[s[i]] || 0) + 1;
        comparison[t[i]] = (comparison[t[i]] || 0) - 1;
    }

    for (const key in comparison) {
        if (comparison[key] !== 0) {
            return false;
        }
    }

    return true;
}
