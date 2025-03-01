import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-cyan focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-aurora-blue text-white hover:bg-opacity-90 shadow-md hover:shadow-lg",
        primary: "bg-aurora-blue text-white hover:bg-opacity-90 shadow-md hover:shadow-lg",
        secondary: "bg-aurora-cyan text-aurora-blue hover:bg-opacity-90 shadow-md hover:shadow-lg",
        outline: "border-2 border-aurora-blue text-aurora-blue bg-transparent hover:bg-aurora-blue hover:text-white",
        ghost: "bg-transparent hover:bg-gray-100 text-aurora-blue hover:text-aurora-coral",
        coral: "bg-aurora-coral text-white hover:bg-opacity-90 shadow-md hover:shadow-lg",
        link: "underline-offset-4 hover:underline text-aurora-blue hover:text-aurora-coral bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-6",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
      withAnimation: {
        true: "transform transition-transform hover:scale-105 active:scale-95",
      },
      withGlow: {
        true: "hover:animate-glow",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      withAnimation: true,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, withAnimation, withGlow, asChild = false, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, withAnimation, withGlow, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
