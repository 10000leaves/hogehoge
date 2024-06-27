import "@testing-library/jest-dom"
import { renderHook } from "@testing-library/react";
import { useCalculator } from "@/hooks/useCalculator";

describe("useCalculator", () => {
  it("should perform addition correctly", () => {
    const { result } = renderHook(() => useCalculator());
    expect(result.current.calculate(2, 3, "+")).toBe(5);
  });

  it("should perform subtraction correctly", () => {
    const { result } = renderHook(() => useCalculator());
    expect(result.current.calculate(5, 3, "-")).toBe(2);
  });

  it("should perform multiplication correctly", () => {
    const { result } = renderHook(() => useCalculator());
    expect(result.current.calculate(4, 3, "*")).toBe(12);
  });

  it("should perform division correctly", () => {
    const { result } = renderHook(() => useCalculator());
    expect(result.current.calculate(6, 3, "/")).toBe(2);
  });

  it("should throw an error when dividing by zero", () => {
    const { result } = renderHook(() => useCalculator());
    expect(() => result.current.calculate(6, 0, "/")).toThrow("Division by zero");
  });
});
