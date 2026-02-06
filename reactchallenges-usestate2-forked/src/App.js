import { useState } from "react";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow((prev) => !prev)}>Show/Hide</button>
      {show && <h1>Welcome to React Challenges</h1>}
    </div>
  );
}
