/** @format */

import React, { forwardRef, useImperativeHandle, useRef } from "react";

const HelloWorld8 = forwardRef((props, ref) => {
  const dateTime = new Date().toLocaleString();

  useImperativeHandle(ref, () => ({
    getDateTime: () => dateTime,
  }));

  return <div>Hello World! - {dateTime}</div>;
});

const ParentComponent = () => {
  const ref = useRef();

  return (
    <div>
      <HelloWorld8 ref={ref} />
      <button onClick={() => alert(ref.current.getDateTime())}>Show DateTime</button>
    </div>
  );
};

export default ParentComponent;
