import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
import { useSelector } from "react-redux";

const LayoutAuthentication = (props) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.email) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  if (user && user.email) return null;
  const { children, heading = "", congratulations } = props;
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
        {congratulations && (
          <svg
            width="69"
            height="70"
            viewBox="0 0 69 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="m-auto mb-5"
          >
            <g clipPath="url(#clip0_2227_13804)">
              <path
                d="M19.5806 45.9159L32.1489 39.3084V52.328H36.8506V39.3084L49.4188 45.9159L46.5694 29.3034L58.6393 17.5384L41.9593 15.1146L34.4998 0L27.0402 15.1146L10.3601 17.5384L22.43 29.3034L19.5806 45.9159Z"
                fill="#FFDA44"
              />
              <path
                d="M25.5165 22.4628L31.7245 21.5606L34.5008 15.9354L37.277 21.5606L43.4849 22.4628L38.9928 26.8416L40.0532 33.0243L34.5008 30.1051L28.9484 33.0243L30.0087 26.8416L25.5165 22.4628Z"
                fill="#FF9811"
              />
              <path
                d="M47.8213 63.2985V49.9772H21.1789V63.2985H16.4772V68H52.5229V63.2985H47.8213Z"
                fill="#FF9811"
              />
              <path
                d="M52.5222 63.2978H16.4764V67.9994H52.5222V63.2978Z"
                fill="#A2001D"
              />
              <path
                d="M39.201 58.5962H29.7977V63.2977H39.201V58.5962Z"
                fill="#FFDA44"
              />
            </g>
            <defs>
              <clipPath id="clip0_2227_13804">
                <rect
                  width="68"
                  height="68"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        )}
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
