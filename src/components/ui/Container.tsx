import React from 'react';
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={twMerge(" mx-auto lg:p-8 p-3", className)}>{children}</div>
  );
};

export default Container;