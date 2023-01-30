import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layouts/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import { Button } from "components/button";
import { Checkbox } from "components/checkbox";
import { useState } from "react";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });
  const handleSignUp = (values) => {
    if (!isValid) return;
    console.log("🚀 ~ file: SignUpPage.js:14 ~ handleSignUp ~ values", values);
  };
  const [acceptTerm, setAcceptTerm] = useState(false);
  const handleToggleTerm = () => {
    setAcceptTerm(!acceptTerm);
  };
  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border rounded-xl gap-x-3 border-stroke text-text2">
        <img srcSet="/icon-google.png 2x" alt="google" />
        <span>Sign up with google</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center lg:mb-8 text-text2 lg:text-sm">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            type="text"
            name="name"
            placeholder="John Doe"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            type="email"
            name="email"
            placeholder="example@gmail.com"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            type="password"
            name="password"
            placeholder="Create a password"
          ></Input>
        </FormGroup>

        <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
          <p className="flex-1 text-sm text-text2">
            I agree to the{" "}
            <span className="underline text-secondary">Terms of Use</span> and
            have read and understand the{" "}
            <span className="underline text-secondary">Privacy policy.</span>
          </p>
        </Checkbox>
        <Button type="submit" className="w-full bg-primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
