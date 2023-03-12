import { ReactNode } from "react";

interface ButtonPrimaryProps {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (() => void) | ((e: any) => Promise<void>);
}

export function ButtonPrimary({
  children,
  className,
  onClick,
}: ButtonPrimaryProps) {
  return (
    <button
      className={`
      hover:bg-primary-600 
      bg-primary-500 
      font-semibold 
      text-white 
      py-2 
      px-4 
      border 
      transition-colors
      border-primary-500 
      hover:border-transparent 
      rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
