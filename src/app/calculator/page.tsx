"use client";

import React, { useState } from "react";
import { useCalculator } from "@/hooks/useCalculator";

export const Calculator: React.FC = () => {
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<string>("");
  const [operation, setOperation] = useState<"+" | "-" | "*" | "/">("+");
  const { result, calculate } = useCalculator();

  const handleCalculate = () => {
    calculate(Number(a), Number(b), operation);
  };

  return (
    <div className="p-4">
      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="border p-2 mr-2"
      />
      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value as "+" | "-" | "*" | "/")}
        className="border p-2 mr-2"
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={handleCalculate} className="bg-blue-500 text-white p-2 rounded">
        Calculate
      </button>
      <div className="mt-4">Result: {result}</div>
    </div>
  );
};
