import React from "react";

const sizes = {
  "3xl": "text-[70px] font-bold",
  "2xl": "text-[52px] font-bold leading-[200%]",
  xl: "text-3xl font-semibold leading-[200%]",
  "4xl": "text-[80px] font-bold",
  s: "text-xl font-semibold leading-[200%]",
  md: "text-2xl font-semibold leading-[200%]",
  xs: "text-lg font-semibold",
  lg: "text-[25px] font-semibold",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
