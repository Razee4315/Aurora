import * as React from "react";
import { Input, InputProps } from "./Input";

export interface TextFieldProps extends Omit<InputProps, "id"> {
  id: string;
  label: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  labelClassName?: string;
  containerClassName?: string;
  helperClassName?: string;
  errorClassName?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id,
      label,
      error,
      helperText,
      fullWidth = false,
      className,
      labelClassName,
      containerClassName,
      helperClassName,
      errorClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col space-y-2 ${fullWidth ? "w-full" : ""} ${containerClassName || ""}`}>
        <label
          htmlFor={id}
          className={`text-sm font-sans font-medium text-aurora-blue ${labelClassName || ""}`}
        >
          {label}
        </label>
        <Input
          id={id}
          ref={ref}
          className={className}
          fullWidth={fullWidth}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          {...props}
        />
        {helperText && !error && (
          <p 
            id={`${id}-helper`}
            className={`text-xs text-gray-500 ${helperClassName || ""}`}
          >
            {helperText}
          </p>
        )}
        {error && (
          <p 
            id={`${id}-error`}
            className={`text-xs text-aurora-coral ${errorClassName || ""}`}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";
