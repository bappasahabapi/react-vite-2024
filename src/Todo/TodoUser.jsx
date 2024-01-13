import  { useState } from "react";

export default function TodoUser() {
  const [userDetails, setUserDetails] = useState({
    userName: {
      firstName: "bapi",
      lastName: "saha",
    },
    age: 20,
    hobby: "Reading",
    address:{
        location:"thakurgaon",
        city:'D'
    },
  });


  const changeName = () => {
    setUserDetails({
         // copy all other object values
        ...userDetails,
        userName: {
              // recreate the nested object that contains the field to update
            ...userDetails.userName,
             // overwrite the value to update
            firstName: 'bappa',
        },
        address:{
            ...userDetails.address,
            location:'Dhaka'
        }
    });
};


  return (
    <div>
        <hr />
        <b>Change title </b>
      <h4>
        Hello {userDetails.userName.firstName} {userDetails.userName.lastName},form 
        <mark>
        {userDetails.address.location}
        </mark>
      </h4>
   
      <p>
        {userDetails.age} || {userDetails.hobby}
      </p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}