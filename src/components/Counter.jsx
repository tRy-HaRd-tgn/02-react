import React from "react";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decriment
      </button>
      <p>{count}</p>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      ></input>
      <h3>{value}</h3>
    </div>
  );
};
export default Counter;
