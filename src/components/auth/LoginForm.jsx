import React from "react";
import Field from "../common/Field";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const navigate =useNavigate()

  const submitForm = (formData) => {
    console.log(formData);
    navigate("/")
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
