import { expect, test } from "vitest";
import { groupAnagrams } from "./groupAnagrams";

test('groupAnagrams Works', () => {
    expect(groupAnagrams(['car'])).toEqual([['car']]);
})
