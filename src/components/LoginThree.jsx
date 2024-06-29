import { useRef, useState } from "react";

export default function LoginThree() {

  const email =useRef();
  const password =useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail =email.current.value;
    const enteredPassword =password.current.value;

    console.log(enteredEmail, enteredPassword);
    email.current.value = '';

    
  }


  return (
    <form onSubmit={handleSubmit}>
      <p className="example">Getting user input using useRef() Hook</p>
      <h2>Login-3</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            // type="email"
            name="email"
            ref={email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">Reset</button>
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
