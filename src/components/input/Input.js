import React from "react";
import PropTypes from "prop-types";
import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";
import { useController } from "react-hook-form";

const Input = (props) => {
  const { control, name, type = "text", error = "", children, ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <>
      <div className="relative">
        <input
          control={control}
          id={name}
          type={type}
          className={`w-full px-6 py-4 text-sm dark:text-white bg-transparent font-medium border rounded-xl dark:placeholder:text-text2 text-text1 placeholder:text-text4 ${
            error.length > 0
              ? "border-error text-error"
              : "border-stroke text-text1 dark:border-darkStroke"
          } ${children ? "pr-16" : ""}`}
          {...rest}
          {...field}
        />
        {children && (
          <div className="absolute right-6 top-2/4 -translate-y-2/4">
            {children}
          </div>
        )}
      </div>
      {error.length > 0 && (
        <span className="text-sm font-medium pointer-events-none select-none text-error error-input">
          {error}
        </span>
      )}
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any.isRequired,
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
