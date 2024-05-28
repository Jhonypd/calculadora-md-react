/** @format */

import React from "react";
import "./btn-number.css";

const Buttons = ({
  buttonValues,
  addDigit,
  handleOperator,
  calculate,
  clearCalculator,
  percentage,
  changeSign,
}) => {
  return (
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
  );
};

export default Buttons;
