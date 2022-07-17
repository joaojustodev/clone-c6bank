import { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonOutlineProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  css: string;
}

const ButtonOutline = ({ children, css, ...props }: ButtonOutlineProps) => {
  return (
    <a
      className={`${css} tracking-wide bg-transparent border border-gray-300 rounded-3xl uppercase  transition-colors hover:bg-gray-200 flex items-center justify-center`}
      {...props}
    >
      {children}
    </a>
  );
};

export default ButtonOutline;
