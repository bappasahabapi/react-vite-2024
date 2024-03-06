


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

- What we get from useAuth hook is
const {auth}= useAuth()

```json
{
    user:{
        avatar: "uploads/avatar/avatar-1708849386635-121791126.png"
        bio:""
        email: "saadh392@mail.com"
        firstName: "Saad"
        lastName: "Hasan"
        id: "6fd3ed42-2275-4d5f-a436-e5a3bf586c56"
    },
    authToken:'jdjflsdjf',
    refreshToken:'jdjflsd'
}
```

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
- Here we dont install jwt package and dot env package . 
- For access the `.env` file we use `import.meta.env.`
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

- Next we extend axios. in api folder
- Auth token is added to header if and only if by useing interceptors in axios.
- next we add the authToken to the header for authorization.
- Thats why we make `useAxios` hook 

-What we get from `auth{} ` is 

```json
{
    user:{
        avatar: "uploads/avatar/avatar-1708849386635-121791126.png"
        bio:"something"
        email: "saadh392@mail.com"
        firstName: "Saad"
        lastName: "Hasan"
        id: "6fd3ed42-2275-4d5f-a436-e5a3bf586c56"
    },
    authToken:'jdjflsdjf',
    refreshToken:'jdjflsd'
}
```
- now make the profile page component


**5. Profile Page Bio and Image Handle**

- Implement all state lavel variables to using Reducer
- Maintain all state lavel variables to `use Reducer.`
- We make context, provider, hook for profile page .

  - profile actions, profile reducer,profile context, profile provider
- Through context and provider we pass data using reducer.
- Next we make profile folder and under the profile folder we make components

