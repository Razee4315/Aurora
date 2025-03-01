import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
        "2xl": "h-24 w-24",
      },
      variant: {
        default: "border-2 border-white",
        outline: "border-2 border-aurora-blue",
        ghost: "border-2 border-transparent",
        coral: "border-2 border-aurora-coral",
        glow: "border-2 border-aurora-cyan shadow-glow",
      },
      withAnimation: {
        true: "transition-all duration-300 hover:scale-110",
      },
      withGlow: {
        true: "hover:animate-glow",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  withBadge?: boolean;
  badgePosition?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  badgeColor?: string;
  badgeSize?: number;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({
    className,
    size,
    variant,
    withAnimation,
    withGlow,
    src,
    alt = "",
    fallback,
    withBadge = false,
    badgePosition = "bottom-right",
    badgeColor = "bg-green-500",
    badgeSize = 3,
    ...props
  }, ref) => {
    const [hasError, setHasError] = React.useState(false);

    // Handle image load error
    const handleError = () => setHasError(true);

    // Determine badge position classes
    const getBadgePositionClasses = () => {
      switch (badgePosition) {
        case "top-right":
          return "top-0 right-0";
        case "top-left":
          return "top-0 left-0";
        case "bottom-left":
          return "bottom-0 left-0";
        case "bottom-right":
        default:
          return "bottom-0 right-0";
      }
    };

    return (
      <div
        ref={ref}
        className={avatarVariants({ size, variant, withAnimation, withGlow, className })}
        {...props}
      >
        {src && !hasError ? (
          <img
            src={src}
            alt={alt}
            onError={handleError}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 text-aurora-blue">
            {fallback || (
              <span className="font-sans font-medium">
                {alt
                  ? alt.split(" ").map((n) => n[0]).join("").toUpperCase().substring(0, 2)
                  : "AU"}
              </span>
            )}
          </div>
        )}
        
        {withBadge && (
          <span 
            className={`absolute block rounded-full border-2 border-white ${badgeColor} ${getBadgePositionClasses()}`}
            style={{ width: `${badgeSize}px`, height: `${badgeSize}px` }}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar, avatarVariants };
