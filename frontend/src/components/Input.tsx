import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-cyan focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "shadow-sm",
        outline: "border-2 border-aurora-blue",
        ghost: "border-transparent bg-gray-50 hover:bg-gray-100",
        underlined: "rounded-none border-0 border-b-2 border-aurora-blue px-0 focus-visible:ring-0 focus-visible:border-aurora-cyan",
      },
      size: {
        default: "h-10",
        sm: "h-8 text-xs",
        lg: "h-12 text-base",
      },
      fullWidth: {
        true: "w-full",
      },
      withAnimation: {
        true: "focus:scale-[1.02] transition-transform duration-200",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, fullWidth, withAnimation, ...props }, ref) => {
    return (
      <input
        className={inputVariants({ variant, size, fullWidth, withAnimation, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
