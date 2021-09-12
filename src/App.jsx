import axios from "axios";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState({
    id: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth", {
        ...state,
      })
      .then(console.log)
      .catch(console.log);
  };

  const handleSubmit2 = (e) => {
    axios
      .get("/auth/me")
      .then((v) => {
        console.log(v.data);
        setState({ ...v.data });
      })
      .catch(console.log);
  };

  const hanldeChanhge = (e) => {
    setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div>회원가입</div>
      <form onSubmit={handleSubmit}>
        <div>
          <span>id:</span>
          <input type="text" name="id" onChange={hanldeChanhge} value={state.id} />
        </div>
        <div>
          <span>passowrd:</span>
          <input type="text" name="password" onChange={hanldeChanhge} value={state.password} />
        </div>
        <button type="submit">전송</button>
        <div>
          <button type="button" onClick={handleSubmit2}>
            get axios
          </button>
        </div>
      </form>
      <div>
        <div>id:{state.id}</div>
        <div>password:{state.password}</div>
      </div>
    </div>
  );
}

export default App;
