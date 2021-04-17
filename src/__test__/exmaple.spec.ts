import example from "./example";

describe("example test write in typescript", () => {
  it("test x + y = z", () => {
    expect(example(1, 2)).toBe(3);
  });
});
