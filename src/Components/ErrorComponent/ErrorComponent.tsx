/** @format */

import React from "react";
import Error from "../../assets/error.png";

type PorpsType = {
  title?: string;
  description: string;
};

const ErrorComponent = ({ title, description }: PorpsType) => {
  return (
    <div className='rounded-sm max-w-[450px] w-full p-4 bg-gray-100 flex items-center'>
      <section className='w-30 h-30 flex items-center justify-center'>
        <img src={Error} className=' w-20 h-20 ' />
      </section>
      <section className=''>
        <section className='font-bold text-xl text-gray-600'>
          {title || "Ops! Something went wrong"}
        </section>
        <section className='font-light text-sm text-gray-800'>
          {description}
        </section>
      </section>
    </div>
  );
};

export default ErrorComponent;
