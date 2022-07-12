import { memo, useRef, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { List } from "phosphor-react";
import useEventListener from "../hooks/useEventListener";

const Nav = () => {
  const navRef = useRef<HTMLElement>(null);
  const [navOffSetTop, setnavOffSetTop] = useState(0);
  useEventListener("scroll", () => setnavOffSetTop(window.scrollY));
  return (
    <nav
      ref={navRef}
      className={`fixed top-0 right-0 z-[200]  w-full h-[56px] md:h-[96px] transition-colors ${
        navOffSetTop >= 100 && "bg-white"
      }`}
    >
      <div className="flex items-center justify-between h-full px-12">
        <Logo />

        <div className="flex items-center justify-center gap-2">
          {navOffSetTop >= 100 ? (
            <Button href="#" css="w-[142px] h-[28px] md:w-[290px] md:h-[42px]">
              <span className="text-xs md:text-sm py-1 text-gray-500">
                ABRA SUA CONTA
              </span>
            </Button>
          ) : (
            <a
              href="#"
              className="flex items-center justify-center w-[142px] h-[28px] md:w-[290px] md:h-[42px] bg-transparent border border-gray-300 rounded-3xl uppercase  transition-colors hover:bg-gray-200"
            >
              <span className="text-xs md:text-sm py-1 text-gray-500">
                ABRA SUA CONTA
              </span>
            </a>
          )}
          <button type="button" className="md:hidden">
            <span className="sr-only">Abrir menu</span>
            <List size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default memo(Nav);
