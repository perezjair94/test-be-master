import clsx from "clsx";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  children: React.ReactNode;
};

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "w-full flex h-12 justify-center items-center rounded-full bg-red-500 px-4 font-semibold text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className,
      )}
    >
      {children}
    </button>
  );
}
