import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

// The ComponentProps<'div'> can contain className, so it needs tailwind-merge to default merge correctly
export function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={twMerge("animate-pulse rounded-md bg-zinc-50/10", className)}
      {...props}
    />
  );
}
