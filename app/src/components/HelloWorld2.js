/** @format */

import React, { useState } from "react";

const HelloWorldTwo = () => {
  const [dateTime] = useState(new Date().toLocaleString());

  return <div>Hello World! - {dateTime}</div>;
};

export default HelloWorldTwo;
