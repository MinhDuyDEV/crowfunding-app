import useToggleValue from "hooks/useToggleValue";
import React from "react";
import LayoutAuthentication from "../layouts/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeToggle } from "components/icons";
import { Button, ButtonGoogle } from "components/button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { authLogin } from "store/auth/auth-slice";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/,
      {
        message:
          "Your password must have at least uppercase, 1 lowercase and 1 special characters",
      }
    )
    .required("Please enter your password"),
});

const SignInPage = () => {
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const handleSignIn = (values) => {
    dispatch(authLogin(values));
  };
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Don't have an account?{" "}
        <Link to="/register" className="font-medium underline text-primary">
          Register
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            type="email"
            name="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            type={`${showPassword ? "text" : "password"}`}
            name="password"
            placeholder="Enter password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium cursor-pointer text-primary">
              Forgot password
            </span>
          </div>
        </FormGroup>
        <Button type="submit" className="w-full select-none" kind="primary">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
