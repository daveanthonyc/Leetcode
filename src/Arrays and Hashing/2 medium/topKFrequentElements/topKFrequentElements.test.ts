import { test, expect } from "vitest";
import { topKFrequent } from "./topKFrequentElements";

test('map works', () => {
    expect(topKFrequent([1,1,2,3,3,3],3)).toEqual([3,1,2]);
})
