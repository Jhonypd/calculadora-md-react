/** @format */

import React from "react";

const useDateTime = () => {
  return new Date().toLocaleString();
};

const HelloWorld9 = () => {
  const dateTime = useDateTime();
  return <div>Hello World! - {dateTime}</div>;
};

export default HelloWorld9;
