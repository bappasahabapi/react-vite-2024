import React from "react";
import Field from "../common/Field";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import axios from "axios";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const navigate = useNavigate();
  const { setAuth } = useAuth();

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
      if(response.status===200){

        //todo:3. and it will return Tokens and logged in user info
        const {token, users}=response.data;
        const authToken =token.token;
        const refreshToken =token.refreshToken

        console.log(users,authToken,refreshToken);
        setAuth({users,authToken,refreshToken});
        navigate("/")

      }
      // const user = { ...formData };
      // setAuth({ user }); // const [auth, setAuth] = useState({}); same pattern e update korte hbe setAuth
      // navigate("/");
    } catch (error) {
      console.error(error);
      setError('root.random',{
        type:'random',
        message:`User with email ${formData.email} is not found`
      })
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
    >
      <Field label="Email" error={errors.email}>
        <input
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-400"
          }`}
          {...register("email", { required: "Email id is required" })}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
        />
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          className={`auth-input ${
            errors.password ? "border-red-500" : "border-gray-400"
          }`}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password must be at least 5 characters",
            },
          })}
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
      </Field>
          {/* showing the global error */}
          <p>{errors?.root?.random?.message}</p>
      <Field>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </Field>
    </form>
  );
};

export default LoginForm;
