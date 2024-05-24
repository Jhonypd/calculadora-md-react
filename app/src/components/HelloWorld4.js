/** @format */

import React, { createContext, useContext } from "react";

const DateTimeContext = createContext();

const HelloWorld4Provider = ({ children }) => {
  const dateTime = new Date().toLocaleString();
  return <DateTimeContext.Provider value={dateTime}>{children}</DateTimeContext.Provider>;
};

const HelloWorld4 = () => {
  const dateTime = useContext(DateTimeContext);
  return <div>Hello World! - {dateTime}</div>;
};

export { HelloWorld4Provider, HelloWorld4 };
