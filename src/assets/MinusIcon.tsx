/** @format */

import React from "react";

type MinusIconProps = React.SVGProps<SVGSVGElement>;

const MinusIcon: React.FC<MinusIconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    stroke-width='2.25'
    stroke-linecap='round'
    stroke-linejoin='round'
    className='lucide lucide-minus-icon lucide-minus'
    {...props}>
    <path d='M5 12h14' />
  </svg>
);

export default MinusIcon;
