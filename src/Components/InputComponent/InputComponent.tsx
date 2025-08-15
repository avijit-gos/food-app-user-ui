/** @format */

import React from "react";
import { Input } from "../ui/input";

type InputPropsType = {
  type: string | number;
  placeholder: string;
  value: string | number;
  className: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputComponent: React.FC<InputPropsType> = ({
  type,
  placeholder,
  value,
  className,
  handleChange,
  ...rest
}) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      className={className}
      onChange={(e) => handleChange(e)}
      {...rest}
    />
  );
};

export default InputComponent;
