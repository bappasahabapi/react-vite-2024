import { useState } from "react";

export default function LoginOne() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //todo: using combined state

  function handleSubmit(event) {
    event.preventDefault();
    console.log("userEmail:" + email);
    console.log("userPassword:" + password);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePassChange(event) {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="example">Using UseState() Hook</p>
      <h2>Login-1</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handlePassChange}
            value={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
        {/* <button className="button" type="submit" onClick={handleSubmit}>
          Login
        </button> */}
        {/* <button className="button" type="button" onClick={handleSubmit}>
          Login
        </button> */}
      </p>
    </form>
  );
}
