import React, { useRef } from 'react';

const HelloWorld5 = () => {
  const dateTimeRef = useRef(new Date().toLocaleString());

  return (
    <div>Hello World! - {dateTimeRef.current}</div>
  );
};

export default HelloWorld5;
