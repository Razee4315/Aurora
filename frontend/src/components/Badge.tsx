import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-aurora-cyan focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-aurora-blue text-white hover:bg-aurora-blue/80",
        primary: "bg-aurora-blue text-white hover:bg-aurora-blue/80",
        secondary: "bg-aurora-cyan text-aurora-blue hover:bg-aurora-cyan/80",
        outline: "text-aurora-blue border border-aurora-blue hover:bg-aurora-blue hover:text-white",
        coral: "bg-aurora-coral text-white hover:bg-aurora-coral/80",
        ghost: "bg-gray-100 text-gray-800 hover:bg-gray-200",
        success: "bg-green-500 text-white hover:bg-green-600",
        warning: "bg-yellow-500 text-white hover:bg-yellow-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
        info: "bg-blue-500 text-white hover:bg-blue-600",
      },
      size: {
        default: "text-xs px-2.5 py-0.5",
        sm: "text-xs px-2 py-0.5 text-[10px]",
        lg: "text-sm px-3 py-1",
      },
      withAnimation: {
        true: "transform transition-transform hover:scale-105",
      },
      withPulse: {
        true: "animate-pulse-slow",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({
  className,
  variant,
  size,
  withAnimation,
  withPulse,
  ...props
}: BadgeProps) {
  return (
    <div
      className={badgeVariants({ variant, size, withAnimation, withPulse, className })}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
