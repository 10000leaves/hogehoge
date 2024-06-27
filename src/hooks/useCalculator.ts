import { useState } from "react";

// 演算子の型定義
type Operation = "+" | "-" | "*" | "/";

export const useCalculator = () => {
  // 計算結果を保持するstate
  const [result, setResult] = useState<number>(0);

  // 計算を実行する関数
  const calculate = (a: number, b: number, operation: Operation) => {
    switch (operation) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        // 0での除算をチェック
        if (b !== 0) {
          setResult(a / b);
        } else {
          throw new Error("Division by zero");
        }
        break;
      default:
        // 無効な演算子の場合はエラーをスロー
        throw new Error("Invalid operation");
    }
  };

  // 結果と計算関数を返す
  return { result, calculate };
};