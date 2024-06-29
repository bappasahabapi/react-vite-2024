import { useState } from "react";

export default function LoginTwo() {

  const [enterValues, setEnterValues] =useState({
    email:'',
    password:'',
  })

  //todo: using combined state
  function handleSubmit(event) {
    event.preventDefault();

    console.log(enterValues)
    
  }

  function handleInputChange(identifier,value){
    setEnterValues(preValues=>({
      ...preValues,
      [identifier]:value
    }))
  }

  // function handleEmailChange(event) {
  //   setEmail(event.target.value);
  // }
  // function handlePassChange(event) {
  //   setPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <p className="example">Managing & Getting User Input Generic Handler</p>
      <h2>Login-2</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event)=>handleInputChange('email',event.target.value)}
            value={enterValues.email}
            // onChange={handleEmailChange}
            // value={email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event)=>handleInputChange('password',event.target.value)}
            value={enterValues.password}
            // onChange={handlePassChange}
            // value={password}
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
