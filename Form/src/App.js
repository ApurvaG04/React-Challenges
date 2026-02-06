import { useState } from "react";
import "./styles.css";

const initialState = {
  userName: "",
  fullName: "",
  age: "",
};

export default function App() {
  const [display, setDisplay] = useState(false);
  const [dataform, setDataform] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const formdata = new FormData(event.target);
    setDisplay(true);
  };

  const updateField = (e) => {
    setDataform({
      ...dataform,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="userName"
              value={dataform.userName || ""}
              onChange={updateField}
            />
          </label>
        </div>
        <div>
          <label htmlFor="fullname">
            Fullname:
            <input
              type="text"
              value={dataform.fullName || ""}
              name="fullName"
              onChange={updateField}
            />
          </label>
        </div>
        <div>
          <label htmlFor="age">
            Age:
            <input
              type="Number"
              value={dataform.age || 0}
              name="age"
              onChange={updateField}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {display && (
        <>
          <h4>Request Sent to DB with below request data</h4>
          <ul>
            <li>UserName: {dataform.userName.toUpperCase()}</li>
            <li>FullName: {dataform.fullName.toUpperCase()}</li>
            <li>Age: {dataform.age}</li>
          </ul>
        </>
      )}
    </div>
  );
}
