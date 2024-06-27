"use client";

import React, { useState } from "react";
import { useCalculator } from "@/hooks/useCalculator";

export default function Calculator() {
  const [display, setDisplay] = useState<string>("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<"+" | "-" | "*" | "/" | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false);
  const { calculate } = useCalculator();

  const handleNumberClick = (num: number | string) => {
    if (waitingForOperand) {
      setDisplay(num.toString());
      setWaitingForOperand(false);
    } else {
      setDisplay(prevDisplay => {
        if (prevDisplay === "0" && num !== ".") return num.toString();
        if (num === "." && prevDisplay.includes(".")) return prevDisplay;
        return prevDisplay + num;
      });
    }
  };

  const handleOperationClick = (op: "+" | "-" | "*" | "/") => {
    const inputValue = parseFloat(display);
    
    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const newResult = calculate(previousValue, inputValue, operation);
      setPreviousValue(newResult);
      setDisplay(newResult.toString());
    }

    setWaitingForOperand(true);
    setOperation(op);
  };

  const handleEquals = () => {
    if (previousValue !== null && operation) {
      const inputValue = parseFloat(display);
      const newResult = calculate(previousValue, inputValue, operation);
      setDisplay(newResult.toString());
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const getOperationButtonClass = (op: "+" | "-" | "*" | "/") => {
    return `text-white p-2 rounded hover:bg-orange-600 ${
      operation === op ? 'bg-red-500' : 'bg-orange-500'
    }`;
  };

  return (
    <div className="w-72 mx-auto mt-10 bg-gray-600 p-4 rounded-lg shadow-lg">
      <div className="bg-white p-2 mb-4 text-right text-2xl rounded">{display}</div>
      <div className="grid grid-cols-4 gap-2">
        {[7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => handleNumberClick(num)}
            className="bg-gray-300 p-2 rounded hover:bg-gray-400"
          >
            {num}
          </button>
        ))}
        <button 
          onClick={() => handleOperationClick("/")} 
          className={getOperationButtonClass("/")}
        >
          ÷
        </button>
        {[4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => handleNumberClick(num)}
            className="bg-gray-300 p-2 rounded hover:bg-gray-400"
          >
            {num}
          </button>
        ))}
        <button 
          onClick={() => handleOperationClick("*")} 
          className={getOperationButtonClass("*")}
        >
          ×
        </button>
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => handleNumberClick(num)}
            className="bg-gray-300 p-2 rounded hover:bg-gray-400"
          >
            {num}
          </button>
        ))}
        <button 
          onClick={() => handleOperationClick("-")} 
          className={getOperationButtonClass("-")}
        >
          -
        </button>
        <button onClick={() => handleNumberClick(0)} className="bg-gray-300 p-2 rounded hover:bg-gray-400 col-span-2">0</button>
        <button onClick={() => handleNumberClick(".")} className="bg-gray-300 p-2 rounded hover:bg-gray-400">.</button>
        <button 
          onClick={() => handleOperationClick("+")} 
          className={getOperationButtonClass("+")}
        >
          +
        </button>
        <button onClick={handleClear} className="bg-red-500 text-white p-2 rounded hover:bg-red-600 col-span-2">C</button>
        <button onClick={handleEquals} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 col-span-2">=</button>
      </div>
    </div>
  );
}