import React, { ButtonHTMLAttributes } from "react";

import { cn } from "@/libs/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (
  { children, className, type = "button", ...rest },
  ref
) => {
  return (
    <button
      className={cn(
        `
        w-auto
        rounded-full
        bg-main
        border-transparent
        px-5
        py-3
        disabled:cursor-not-allowed
        disabled:opacity-50
        text-white
        font-semibold
        hover:opacity-50
        transition
        `,
        className
      )}
      //   ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
