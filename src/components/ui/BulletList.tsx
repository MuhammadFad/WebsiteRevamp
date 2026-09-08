import React from "react";
import { cn } from "@/lib/utils";

interface BulletListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: string[];
  className?: string;
}

export const BulletList: React.FC<BulletListProps> = ({
  items,
  className,
  ...props
}) => {
  return (
    <ul className={cn("space-y-2.5", className)} {...props}>
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-2.5 text-sm md:text-base text-slate-600"
        >
          <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};