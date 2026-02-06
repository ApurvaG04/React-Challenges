import React from "react";
import "./styles.css";
import ProgressBar from "./ProgressBar";
import { useState } from "react";

/* Visit www.reactchallenges.live */

/* Instructions: 
   Create a Progress Bar that should fill based on the input percentage value
*/

export default function App() {
  const [val, setVal] = useState(10);

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar width={val} />
        <form>
          <label htmlFor="html">Input Percentage:</label>
          <input
            type="number"
            onChange={(e) => setVal(Number(e.target.value))}
          />
        </form>
      </div>
    </>
  );
}
