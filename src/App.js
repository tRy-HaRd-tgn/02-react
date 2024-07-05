import React, { useState } from "react";
import Counter from "./components/Counter";
function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <Counter></Counter>
      <input
        onChange={(event) => {
          setValue(event.target.value);
        }}
      ></input>
      <h3>{value}</h3>
    </div>
  );
}

export default App;
