import { test, expect } from "vitest";
import { maxArea } from "./maxArea";

test('works', () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
})
