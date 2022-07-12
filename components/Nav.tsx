import { memo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Button from "./Button";
import { List } from "phosphor-react";
import useEventListener from "../hooks/useEventListener";

const Nav = () => {
  const navRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  useEventListener("scroll", () => setScrollY(window.scrollY));

  const subMenuAnimate = {
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    hidden: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 right-0 z-[200]  w-full h-[56px] md:h-[96px] transition-colors ${
          scrollY >= 100 && "bg-white"
        }`}
      >
        <div className="flex items-center justify-between h-full px-12">
          <div className="flex gap-6 h-full">
            <Logo />
            <div className="hidden xl:block">
              <ul className="flex items-center h-full">
                <motion.li
                  className="flex items-center justify-center h-full relative pr-6 text-base font-semibold"
                  onHoverStart={() => {
                    setOverlay(true);
                    setOpenDropdown("fisica");
                  }}
                  onHoverEnd={() => {
                    setOverlay(false);
                    setOpenDropdown("");
                  }}
                >
                  <a href="#">Pessoas Física</a>

                  <motion.div
                    variants={subMenuAnimate}
                    initial="hidden"
                    animate={openDropdown === "fisica" ? "visible" : "hidden"}
                    className={`absolute z-[210] top-20 left-[20%] w-[600px] h-[233px] bg-white shadow-xl rounded opacity-100`}
                  ></motion.div>
                </motion.li>
                <motion.li
                  className="flex items-center justify-center h-full px-6 text-base font-semibold"
                  onHoverStart={() => {
                    setOverlay(true);
                    setOpenDropdown("juridicas");
                  }}
                  onHoverEnd={() => {
                    setOverlay(false);
                    setOpenDropdown("");
                  }}
                >
                  <a href="#">Pessoas Jurídicas</a>

                  <motion.div
                    variants={subMenuAnimate}
                    initial="hidden"
                    animate={
                      openDropdown === "juridicas" ? "visible" : "hidden"
                    }
                    className="absolute z-[210] top-20 left-[20%] w-[600px] h-[233px] bg-white shadow-xl rounded"
                  ></motion.div>
                </motion.li>
                <motion.li
                  className="flex items-center justify-center h-full px-6 text-base font-semibold"
                  onHoverStart={() => {
                    setOverlay(true);
                    setOpenDropdown("mei");
                  }}
                  onHoverEnd={() => {
                    setOverlay(false);
                    setOpenDropdown("");
                  }}
                >
                  <a href="#">C6 MEI</a>
                  <motion.div
                    variants={subMenuAnimate}
                    initial="hidden"
                    animate={openDropdown === "mei" ? "visible" : "hidden"}
                    className="absolute z-[210] top-20 left-[25%] w-[600px] h-[233px] bg-white shadow-xl rounded"
                  ></motion.div>
                </motion.li>
                <li
                  className="flex items-center justify-center h-full px-6 text-base font-semibold"
                  onMouseEnter={() => setOverlay(true)}
                  onMouseLeave={() => setOverlay(false)}
                >
                  <a href="#">Blog</a>
                </li>
                <li
                  className="flex items-center justify-center h-full px-6 text-base font-semibold"
                  onMouseEnter={() => setOverlay(true)}
                  onMouseLeave={() => setOverlay(false)}
                >
                  <a href="#">Tire suas Dúvidas</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            {scrollY >= 100 ? (
              <Button
                href="#"
                css="w-[142px] h-[28px] xl:w-[290px] xl:h-[42px]"
              >
                <span className="text-xs md:text-sm py-1 text-gray-500">
                  ABRA SUA CONTA
                </span>
              </Button>
            ) : (
              <a
                href="#"
                className="flex items-center justify-center w-[142px] h-[28px] xl:w-[290px] xl:h-[42px] bg-transparent border border-gray-300 rounded-3xl uppercase  transition-colors hover:bg-gray-200"
              >
                <span className="text-xs md:text-sm py-1 text-gray-500">
                  ABRA SUA CONTA
                </span>
              </a>
            )}
            <button type="button" className="xl:hidden">
              <span className="sr-only">Abrir menu</span>
              <List size={16} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`${
          overlay ? "z-[190] opacity-40" : "z-[-190] opacity-0"
        } hidden lg:block fixed min-h-screen top-0 right-0 bottom-0 left-0 bg-black transition-opacity`}
      />
    </>
  );
};

export default memo(Nav);
