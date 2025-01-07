import "./Reset.css";
import "./App.css";
import { useState } from "react";
import { Menu } from "./Components/Menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu />
    </>
  );
}

export default App;
