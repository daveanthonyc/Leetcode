import { test, expect } from "vitest";
import { threeSum } from "./threeSum";

test('works', () => {
    expect(threeSum([-1, 0, 1,2,-1,4])).toBe(
        [
            [-1,0,1],
            [-1,-1,1],
        ]
    );
})
