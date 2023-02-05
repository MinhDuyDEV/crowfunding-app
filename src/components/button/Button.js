import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-8 h-8 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
  ) : (
    children
  );
  let defaultClassName =
    "flex items-center justify-center p-4 text-base border-b-transparent font-semibold rounded-xl max-h-[56px]";
  switch (rest.kind) {
    case "primary":
      defaultClassName = defaultClassName + " text-white bg-primary";
      break;
    case "secondary":
      defaultClassName = defaultClassName + " text-white bg-secondary";
      break;
    case "ghost":
      defaultClassName = defaultClassName + " text-secondary bg-[#EEEAFD]";
      break;
    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={`${defaultClassName} ${className}`}>
        {child}
      </Link>
    );

  return (
    <button
      className={`${defaultClassName} ${className} ${
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      }`}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default Button;
