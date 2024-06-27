import "@testing-library/jest-dom"
import { renderHook, act } from "@testing-library/react";
import { useCalculator } from "@/hooks/useCalculator";

// hooksのテスト
describe("useCalculator", () => {
  // 加算のテスト
  it("should perform addition correctly", () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.calculate(2, 3, "+");
    });

    expect(result.current.result).toBe(5);
  });

  // 減算のテスト
  it("should perform subtraction correctly", () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.calculate(5, 3, "-");
    });

    expect(result.current.result).toBe(2);
  });

  // 乗算のテスト
  it("should perform multiplication correctly", () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.calculate(4, 3, "*");
    });

    expect(result.current.result).toBe(12);
  });

  // 除算のテスト
  it("should perform division correctly", () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.calculate(6, 3, "/");
    });

    expect(result.current.result).toBe(2);
  });

  // 0での除算時のエラーテスト
  it("should throw an error when dividing by zero", () => {
    const { result } = renderHook(() => useCalculator());

    expect(() => {
      act(() => {
        result.current.calculate(6, 0, "/");
      });
    }).toThrow("Division by zero");
  });
});
