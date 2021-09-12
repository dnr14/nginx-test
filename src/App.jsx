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
      .post("www.mw.r-e.kr/auth", {
        ...state,
      })
      .then(console.log)
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
      </form>
    </div>
  );
}

export default App;
