import React from "react";
import { twMerge } from "tailwind-merge";
interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className })=> {
  return (
    <div
      className={twMerge(
        "lg:text-[17px] text-[14px]  font-poppins font-normal text-secondary  lg:leading-[28px] leading-[22px] ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Paragraph;
