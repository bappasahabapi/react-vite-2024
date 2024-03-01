


### npm packages

- `npm install @tailwindcss/typography`
- `npm install react-router-dom`



### Steps:

**1. Basic Project setup and Add routing**

Here I install these two packages.

- `npm install @tailwindcss/typography`
- `npm install react-router-dom`

**2. Set up LoginPage and Header and implement fake Login Logout**

- `npm install react-hook-form`
- make components/auth folder 
- make a `LoginForm` component
- then implement react hook form 
- implement `login` functionality and `navigate` to "/" page



**3. Create Auth Context Provider Route**

- Make the AuthContext and AuthProvider 
- now set the AuthProvider in the `main.js` file.
- Next we make a `hook` using these AuthContext and AuthProvider named `useAuth`-> gives {auth, setAuth}
- next we have to work the logged user information . And the set this data into the AuthContext.
- First make a user object from cloning the formData. 
 `const user ={...formData}` 
  And then set the user as object in setAuth. like `setAuth({user})`
- Then test it to the HomePage component.like

```javascript

const LoginForm = () => {
 
  const submitForm = (formData) => {
    console.log(formData);
    const user ={...formData}
    setAuth({user}) // const [auth, setAuth] = useState({}); same pattern e update korte hbe setAuth
    navigate("/")
  };

import React from 'react'
import { useAuth } from '../hooks/useAuth'

const HomePage = () => {

  const {auth}=useAuth()
  console.log(auth)
  return (
    <div>HomePage</div>
  )
}

export default HomePage
```

- Now based on this part we make Private Route
- implement login logout 

**4. Axios and Jwt**
- `cd backed-server` and `npm install` and then run` npm run dev`
- install axios in frontend for data fetching: `npm install axios`
- Next create `.env` file and keep the base url here.
- Now handle the sumit forn using axios

```javascript
const submitForm = async (formData) => {
    //1. After get the formData
    console.log(formData);

    //todo:2. we make an api call which is post call
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );
      console.log(response);
      if (response.status === 200) {
        //todo:3. and it will return Tokens and logged in user info
        const { token, user } = response.data;

        if (token) {
          const authToken = token.token;
          const refreshToken = token.refreshToken;

          console.log(user, authToken, refreshToken);
          setAuth({ user, authToken, refreshToken });
          navigate("/");
        }
      }
      // const user = { ...formData };
      // setAuth({ user }); // const [auth, setAuth] = useState({}); same pattern e update korte hbe setAuth
      // navigate("/");
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `User with email ${formData.email} is not found`,
      });
    }
  };

```


