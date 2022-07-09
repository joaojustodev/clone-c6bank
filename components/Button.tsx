import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  css: string;
}

const Button = ({ children, css, ...props }: ButtonProps) => {
  return (
    <a
      className={`${css} bg-yellow-500 bg-gradient-to-br from-yellow-400 to-yellow-500 before:contents before:bg-yellow-500 flex items-center justify-center rounded-3xl uppercase transition-all hover:opacity-90 hover:shadow-3xl`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;
