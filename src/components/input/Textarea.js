import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const {
    control,
    name,
    placeholder = "Write a short description....",
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      control={control}
      name={name}
      id={name}
      className="w-full px-6 py-4 text-sm font-medium bg-transparent border outline-none dark:text-white rounded-xl dark:placeholder:text-text2 text-text1 placeholder:text-text4 resize-none min-h-[140px]"
      placeholder={placeholder}
      {...field}
      {...rest}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
