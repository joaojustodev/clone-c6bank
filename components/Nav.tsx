import Logo from "./Logo";
import Image from "next/image";
import { List } from "phosphor-react";
import { HTMLAttributes, memo, useEffect, useRef, useState } from "react";
import Button from "./Button";

const Nav = () => {
  const navRef = useRef<HTMLElement>(null);
  const [navOffSetTop, setnavOffSetTop] = useState(0);
  useEffect(() => {
    const pageScroll = () => {
      setnavOffSetTop(window.scrollY);
    };

    window.addEventListener("scroll", pageScroll);

    return () => window.removeEventListener("scroll", pageScroll);
  }, []);
  return (
    <nav
      ref={navRef}
      className={`fixed z-[200] top-0 left-0 w-full h-[56px] transition-colors ${
        navOffSetTop >= 200 && "bg-white"
      }`}
    >
      <div className="flex items-center justify-between h-full px-4">
        <div className="w-[80px] h-[20px] flex items-center">
          <Logo />
        </div>
        <div className="flex items-center justify-center gap-2">
          {navOffSetTop >= 200 ? (
            <Button href="#" css="w-[142px] h-[28px]">
              <span className="text-[12px] py-1 text-gray-500">
                ABRA SUA CONTA
              </span>
            </Button>
          ) : (
            <a
              href="#"
              className="flex items-center justify-center w-[142px] h-[28px] bg-transparent border border-gray-300 rounded-3xl uppercase  transition-colors hover:bg-gray-200"
            >
              <span className="text-[12px] py-1 text-gray-500">
                ABRA SUA CONTA
              </span>
            </a>
          )}
          <div className="cursor-pointer">
            <List size={16} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Nav);
