// eslint-disable-next-line no-unused-vars
import React from "react";
import Display from "./components/display";
import Numbers from "./components/numbers";
import OperatorBtn from "./components/operatorbtn";
import { useCalculator } from "./hooks/useCalculator";

const Calculator = () => {
  const {
    currentValue,
    handleNumberClick,
    handleOperatorClick,
    handleClearClick,
    handleEqualtoClick,
  } = useCalculator();

  const row1 = ["1", "2", "3"];
  const row2 = ["4", "5", "6"];
  const row3 = ["7", "8", "9"];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-10 bg-black rounded-3xl shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-white text-4xl font-sans mb-2">
            Simple Calculator
          </h1>
          <h3 className="text-white text-lg font-sans">
            This is a simple calculator with basic functionalities such as + - *
            /
          </h3>
        </div>

        <Display value={currentValue} className="mb-8" />

        <div className="grid grid-cols-4 gap-4">
          {row1.map((number) => (
            <Numbers
              key={number}
              number={number}
              onClick={() => handleNumberClick(number)}
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-2xl rounded-lg p-4 transition-colors duration-300"
            />
          ))}
          <OperatorBtn
            operator="+"
            onClick={() => handleOperatorClick("+")}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-2xl rounded-lg p-4 transition-colors duration-300"
          />

          {row2.map((number) => (
            <Numbers
              key={number}
              number={number}
              onClick={() => handleNumberClick(number)}
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-2xl rounded-lg p-4 transition-colors duration-300"
            />
          ))}
          <OperatorBtn
            operator="-"
            onClick={() => handleOperatorClick("-")}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-2xl rounded-lg p-4 transition-colors duration-300"
          />

          {row3.map((number) => (
            <Numbers
              key={number}
              number={number}
              onClick={() => handleNumberClick(number)}
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-2xl rounded-lg p-4 transition-colors duration-300"
            />
          ))}
          <OperatorBtn
            operator="x"
            onClick={() => handleOperatorClick("*")}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-2xl rounded-lg p-4 transition-colors duration-300"
          />

          <div className="col-span-1">
            <button
              className="w-full h-16 bg-red-600 hover:bg-red-800 text-white font-bold text-2xl rounded-lg transition-colors duration-300"
              onClick={handleClearClick}
            >
              AC
            </button>
          </div>

          <Numbers
            number="0"
            onClick={() => handleNumberClick("0")}
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-2xl rounded-lg p-4 transition-colors duration-300 col-span-2"
          />
          <div className="col-span-1">
            <button
              className="w-full h-16 bg-green-600 hover:bg-green-800 text-white font-bold text-2xl rounded-lg transition-colors duration-300"
              onClick={handleEqualtoClick}
            >
              =
            </button>
          </div>

          <OperatorBtn
            operator="÷"
            onClick={() => handleOperatorClick("/")}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-2xl rounded-lg p-4 transition-colors duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
