import React from 'react';

const withDateTime = (Component) => {
  return () => {
    const dateTime = new Date().toLocaleString();
    return <Component dateTime={dateTime} />;
  };
};

const HelloWorldBase = ({ dateTime }) => <div>Hello World! - {dateTime}</div>;

const HelloWorld7 = withDateTime(HelloWorldBase);

export default HelloWorld7;
