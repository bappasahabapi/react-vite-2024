import { useState } from "react";
import CustomInput from "./CustomInput";

export default function SignUp() {

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
      <p className="example">Using CustomInput comonent</p>
      <h2>SignUp </h2>

      <div className="control-row">
      <CustomInput
        label='Email'
        id='email'
        type='email'
        name='email'
        onBlur={()=>{}}
        onChange={()=>{}}
        value={''}
        required='false'
      />

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event)=>handleInputChange('password',event.target.value)}
            value={enterValues.password}
          />
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">Reset</button>
        <button className="button">Login</button>

      </p>
    </form>
  );
}
