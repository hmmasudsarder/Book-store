import React from "react";
import { twMerge } from "tailwind-merge";
interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        " lg:text-[20px] text-[14px]   lg:my-2 my-1  font-poppins font-bold  lg:leading-[30px] leading-[21px] text-gray-700 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Heading;
