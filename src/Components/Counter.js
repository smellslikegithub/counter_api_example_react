import React, { useState } from "react";

const Counter = ({ propsTimesClicked }) => {
  const [count, setCount] = useState(0);
  return <div>{propsTimesClicked}</div>;
};

export default Counter;
