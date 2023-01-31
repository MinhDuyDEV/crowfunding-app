import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";

const LayoutAuthentication = (props) => {
  const { children, heading = "" } = props;
  return (
    <div className="relative w-full min-h-screen p-10 bg-lite dark:bg-dark-bg isolate">
      <img
        srcSet="/ellipse.png"
        alt="bg"
        className="hidden lg:block absolute bottom-0 right-0 pointer-events-none z-[-1]"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img srcSet="/logo.png 2x" alt="crowfunding-app" />
      </Link>
      <div className="w-full bg-white dark:bg-darkSecondary rounded-xl max-w-[556px] px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-2 text-lg font-semibold text-center dark:text-white text-text1 lg:text-xl lg:mb-3">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
