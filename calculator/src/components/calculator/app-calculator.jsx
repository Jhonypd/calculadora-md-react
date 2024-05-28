/** @format */

import React, { useState, useEffect } from "react";
import { buttonValues } from "../../util/buttonValues.ts";
import "./calculator.css";
import VisorContainer from "../visor/visor.jsx";
import Buttons from "../buttons/buttons.jsx";

const AppCalculator = () => {
  const [currentNumber, setCurrentNumber] = useState("");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      if (/^[0-9]$/.test(key)) {
        addDigit(key);
      } else if (key === "," || key === ".") {
        addDigit(",");
      } else if (["+", "-", "x", "/", "*"].includes(key)) {
        handleOperator(key === "*" ? "x" : key === "/" ? "÷" : key);
      } else if (key === "Enter" || key === "=") {
        calculate();
      } else if (key === "Backspace") {
        setCurrentNumber(currentNumber.slice(0, -1));
      } else if (key === "Escape") {
        clearCalculator();
      } else if (key === "%") {
        percentage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentNumber, firstOperand, operator]);

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
      <VisorContainer result={updateResult()} />
      <Buttons
        buttonValues={buttonValues}
        addDigit={addDigit}
        calculate={calculate}
        changeSign={changeSign}
        clearCalculator={clearCalculator}
        handleOperator={handleOperator}
        percentage={percentage}
      />
    </div>
  );
};

export default AppCalculator;
