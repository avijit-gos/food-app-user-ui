/** @format */

import React from "react";
import { LoaderCircle } from "lucide-react";

const Loader = () => {
  return (
    <div className='w-15 h-15 flex items-center justify-center animate-spin'>
      <LoaderCircle size={50} />
    </div>
  );
};

export default Loader;
