import "./App.css";
import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  const [state, setState] = useState(0);

  let light2 = "OFF";

  return (
    <>
      <div>
        {/* <h1>{light}</h1> */}
        <Bulb />
        <Counter />
      </div>
    </>
  );
}

export default App;
