import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div
    className={`
    container
    relative
    space-y-24
    mb-24
    lg:mb-32
    lg:space-y-32
  `}
  >
    {children}
  </div>
);
