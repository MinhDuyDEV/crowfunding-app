import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = (props) => {
  const { control, name, type = "text", error = "", ...rest } = props;
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
          className={`w-full px-6 py-4 text-sm font-medium border rounded-xl text-text1 placeholder:text-text4 ${
            error.length > 0 ? "border-error" : "border-stroke"
          }`}
          {...rest}
          {...field}
        />
      </div>
      {error.length > 0 && (
        <span className="text-sm font-medium text-error">{error}</span>
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

export default Input;
