import { useState } from "react";

export const useCalculator = () => {
  const [currentValue, setCurrentValue] = useState("");

  const handleNumberClick = (number) => {
    setCurrentValue((prevValue) => prevValue + number);
  };

  const handleOperatorClick = (operator) => {
    setCurrentValue((prevValue) => prevValue + operator);
  };

  const handleClearClick = () => {
    setCurrentValue("");
  };

  const handleEqualtoClick = () => {
    try {
      setCurrentValue(eval(currentValue).toString());
    } catch (error) {
      setCurrentValue("");
    }
  };

  return {
    currentValue,
    handleNumberClick,
    handleOperatorClick,
    handleClearClick,
    handleEqualtoClick,
  };
};
