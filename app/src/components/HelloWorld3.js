import React, { useEffect, useState } from 'react';

const HelloWorld3 = () => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    setDateTime(new Date().toLocaleString());
  }, []);

  return (
    <div>Hello World! - {dateTime}</div>
  );
};

export default HelloWorld3;
