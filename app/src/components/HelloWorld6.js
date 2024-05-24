/** @format */

import React from "react";

const DateTimeRenderProp = ({ render }) => {
  const dateTime = new Date().toLocaleString();
  return render(dateTime);
};

const HelloWorld6 = () => (
  <DateTimeRenderProp render={(dateTime) => <div>Hello World! - {dateTime}</div>} />
);

export default HelloWorld6;
