type Operation = "+" | "-" | "*" | "/";

export const useCalculator = () => {
  const calculate = (a: number, b: number, operation: Operation): number => {
    switch (operation) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b !== 0) {
          return a / b;
        } else {
          throw new Error("Division by zero");
        }
      default:
        throw new Error("Invalid operation");
    }
  };

  return { calculate };
};
