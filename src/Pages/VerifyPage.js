import React from "react";
import LayoutAuthentication from "layouts/LayoutAuthentication";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { Button } from "components/button";

const VerifyPage = () => {
  return (
    <LayoutAuthentication heading="Email Verification">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text4 lg:mb-8">
        Please Enter the OTP you receive to{" "}
        <Link to="/sign-in" className="block font-medium underline text-text2">
          minhduy.dev@gmail.com
        </Link>
      </p>
      <div className="flex items-center justify-around gap-x-1">
        <div className="mb-8 rounded-md flex items-center justify-center w-[51px] h-[72px] text-text1 border border-stroke text-lg font-semibold">
          1
        </div>
        <div className="mb-8 rounded-md flex items-center justify-center w-[51px] h-[72px] text-text1 border border-stroke text-lg font-semibold">
          2
        </div>
        <div className="mb-8 rounded-md flex items-center justify-center w-[51px] h-[72px] text-text1 border border-stroke text-lg font-semibold">
          3
        </div>
        <div className="mb-8 rounded-md flex items-center justify-center w-[51px] h-[72px] text-text1 border border-stroke text-lg font-semibold">
          4
        </div>
      </div>
      <Label className="mb-8 text-sm font-semibold text-secondary">
        Resend OTP
      </Label>
      <Button type="button" className="w-full select-none bg-primary">
        Confirm
      </Button>
      <div className="flex items-center mt-8 mb-5 gap-x-3 ">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2227_4850)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7404 16.754L9.56141 11.3644C9.37065 11.198 9.3509 10.9085 9.51729 10.7177C9.53066 10.7024 9.54504 10.688 9.56034 10.6746L15.7393 5.25096C15.9296 5.08398 16.2191 5.10283 16.3861 5.29307C16.4595 5.37669 16.5 5.48416 16.5 5.59542V16.4086C16.5 16.6618 16.2948 16.867 16.0417 16.867C15.9309 16.867 15.8239 16.8269 15.7404 16.754Z"
              fill="#A2A2A8"
            />
            <path
              d="M7.33333 5.5H6.41667C5.91041 5.5 5.5 5.91041 5.5 6.41667V15.5833C5.5 16.0896 5.91041 16.5 6.41667 16.5H7.33333C7.83959 16.5 8.25 16.0896 8.25 15.5833V6.41667C8.25 5.91041 7.83959 5.5 7.33333 5.5Z"
              fill="#A2A2A8"
            />
          </g>
          <defs>
            <clipPath id="clip0_2227_4850">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <Link to="/sign-in" className="text-sm font-semibold text-secondary">
          Back to login
        </Link>
      </div>
    </LayoutAuthentication>
  );
};

export default VerifyPage;
