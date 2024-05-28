/** @format */

import React, { useState } from "react";
import { buttonValues } from "../../util/buttonValues.ts";
import "./calculator.css";

const AppCalculator = () => {
  const [currentNumber, setCurrentNumber] = useState("");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [restart, setRestart] = useState(false);

  const updateResult = (originClear = false) => {
    return originClear ? "0" : currentNumber.replace(".", ",");
  };

  const addDigit = (digit) => {
    if (digit === "," && (currentNumber.includes(",") || !currentNumber)) return;
    if (restart) {
      setCurrentNumber(digit);
      setRestart(false);
    } else {
      setCurrentNumber(currentNumber + digit);
    }
  };

  const handleOperator = (newOperator) => {
    if (currentNumber) {
      if (firstOperand !== null && operator !== null) {
        calculate(true);
      } else {
        setFirstOperand(parseFloat(currentNumber.replace(",", ".")));
      }
      setOperator(newOperator);
      setRestart(true);
    } else if (firstOperand !== null) {
      setOperator(newOperator);
    }
  };

  const calculate = (continueOperation = false) => {
    if (operator === null || firstOperand === null) return;
    let secondOperand = parseFloat(currentNumber.replace(",", "."));
    let resultValue;

    switch (operator) {
      case "+":
        resultValue = firstOperand + secondOperand;
        break;
      case "-":
        resultValue = firstOperand - secondOperand;
        break;
      case "x":
        resultValue = firstOperand * secondOperand;
        break;
      case "÷":
        resultValue = firstOperand / secondOperand;
        break;
      default:
        return;
    }

    if (resultValue.toString().split(".")[1]?.length > 5) {
      setCurrentNumber(parseFloat(resultValue.toFixed(5)).toString());
    } else {
      setCurrentNumber(resultValue.toString());
    }

    setOperator(continueOperation ? operator : null);
    setFirstOperand(resultValue);
    setRestart(!continueOperation);
  };

  const clearCalculator = () => {
    setCurrentNumber("");
    setFirstOperand(null);
    setOperator(null);
  };

  const percentage = () => {
    if (currentNumber) {
      setCurrentNumber((parseFloat(currentNumber.replace(",", ".")) / 100).toString());
    }
  };

  const changeSign = () => {
    setCurrentNumber((parseFloat(currentNumber || firstOperand) * -1).toString());
  };

  return (
    <div className="AppCalculator">
      <div className="view-result">
        <h1 className="result">{updateResult()}</h1>
      </div>
      <div className="buttons">
        {buttonValues.map((button, index) => (
          <button
            key={index}
            className={`btn-number ${button.className}`}
            value={button.label}
            onClick={() => {
              if (/^[0-9,]+$/.test(button.label)) {
                addDigit(button.label);
              } else if (["+", "-", "x", "÷"].includes(button.label)) {
                handleOperator(button.label);
              } else if (button.label === "=") {
                calculate();
              } else if (button.label === "C") {
                clearCalculator();
              } else if (button.label === "±") {
                changeSign();
              } else if (button.label === "%") {
                percentage();
              }
            }}>
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AppCalculator;
