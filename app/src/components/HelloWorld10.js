/** @format */

import React, { useReducer, useEffect } from "react";

const dateTimeReducer = (state, action) => {
  switch (action.type) {
    case "setDateTime":
      return new Date().toLocaleString();
    default:
      return state;
  }
};

const HelloWorld10 = () => {
  const [dateTime, dispatch] = useReducer(dateTimeReducer, "");

  useEffect(() => {
    dispatch({ type: "setDateTime" });
  }, []);

  return <div>Hello World! - {dateTime}</div>;
};

export default HelloWorld10;
