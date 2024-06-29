import  { useState } from "react";

export default function LoginFive(){
  // Declare the state variables and set their initial values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

   //todo: Function to handle form submission
   const handleSubmit = (event) => {
    event.preventDefault();

    //todo: Your form submission code here...

    //todo: Clear the input fields after submission
    setName('');
    setEmail('');
    setCountry('')
  };
  console.log(name,email,country)


  return (
    <>
      <h4 style={{color:'black', textAlign:'center'}}>Handle and Clear multiple input fields</h4>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          <label>
            Country
            <input
              type="country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );

};

