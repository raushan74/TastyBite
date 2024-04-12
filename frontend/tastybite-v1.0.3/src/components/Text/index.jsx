import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  lg: "text-xl font-normal leading-[200%]",
  s: "text-sm font-normal leading-[200%]",
  "2xl": "text-3xl font-light leading-[200%]",
  "3xl": "text-[40px] font-normal",
  xl: "text-[25px] font-medium leading-[200%]",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900_cc font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
