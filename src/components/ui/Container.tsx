import type { ElementType, ReactNode } from "react";

export type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export default function Container({ children, as: Tag = "div", className = "" }: ContainerProps) {
  return <Tag className={`mx-auto w-full max-w-[1920px] px-6 md:px-12 xl:px-20 ${className}`}>{children}</Tag>;
}
