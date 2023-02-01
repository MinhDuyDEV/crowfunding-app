import LayoutAuthentication from "layouts/LayoutAuthentication";
import React from "react";
import { Link } from "react-router-dom";

const CongratulationPage = ({ congratulations }) => {
  return (
    <LayoutAuthentication heading="Congratulations!" congratulations>
      <p className="m-auto mt-4 mb-8 text-sm font-normal text-center text-text4">
        Congratulations! You have successfully completed all of the steps for
        this verification process.
      </p>
      <Link
        to="/"
        className="flex items-center justify-center w-full p-4 text-base font-semibold text-white select-none bg-primary border-b-transparent rounded-xl"
      >
        {" "}
        Got to homepage
      </Link>
    </LayoutAuthentication>
  );
};

export default CongratulationPage;
