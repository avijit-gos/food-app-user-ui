/** @format */

import React from "react";
import { Button } from "../ui/button";
import { LuLoaderCircle } from "react-icons/lu";

type ButtonProps = {
  text: string;
  disable?: boolean;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonComp: React.FC<ButtonProps> = ({
  loading,
  disable,
  text,
  ...rest
}) => {
  return (
    <Button disabled={disable || loading} {...rest}>
      {loading ? <LuLoaderCircle className='animate-spin' /> : <>{text}</>}
    </Button>
  );
};

export default ButtonComp;
