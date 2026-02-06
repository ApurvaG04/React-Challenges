import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState(10);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    if (time <= 0) {
      clearTimeout(timer);
    }
  }, [time]);

  const handleClick = () => {
    setClicks((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h2>No of clicks until timer expire</h2>
      <div className="Container">
        <h1>{clicks}</h1>
        <h2>Time left: {time} sec</h2>
        {time ? <button onClick={handleClick}>+</button> : <></>}
      </div>
    </div>
  );
}
