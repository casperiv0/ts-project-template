import { hello } from "../src/index";
import { expect, it, describe } from "vitest";

describe("`hello` function", () => {
  it("should return the provided greeting", () => {
    expect(hello("world")).toBe("hello world!");
  });
});
