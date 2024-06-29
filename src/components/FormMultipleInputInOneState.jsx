import { useState } from "react";

function FormMultipleInputInOneState() {
  const [details, setDetails] = useState({
    name: "",
    country: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    // console.log(e.target);
    // const name =e.target.name;
    // const value =e.target.value;
    // console.log(name,value)

    const { name, value } = e.target;
    setDetails((preVal) => {
      console.log("Previous State:", preVal);
      const updatedState = { ...preVal, [name]: value };
      console.log("update:", updatedState);
      return updatedState;
      // return { ...preVal, [name]: value };
    });
  };
  // console.log(details);

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    console.log(details);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmitBtn}
        style={{ border: "1px solid black", backgroundColor: "#80EEF3" }}
      >
        <h4>Name:</h4> <input type="text" onChange={handleChange} name="name" />
        <h4>Country</h4>{" "}
        <input type="text" onChange={handleChange} name="country" />
        <h4>Email:</h4>{" "}
        <input type="email" onChange={handleChange} name="email" />
        <h4>Password:</h4>{" "}
        <input type="password" onChange={handleChange} name="password" />
        <h4>Address:</h4> <textarea onChange={handleChange} name="address" />
        <br />
        <br />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default FormMultipleInputInOneState;
