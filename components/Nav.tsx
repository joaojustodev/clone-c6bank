import { memo, useContext, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Button from "./Button";
import { MobileMenuContext } from "../context/MobileMenuContext";
import { List, ArrowUpRight, X } from "phosphor-react";
import useEventListener from "../hooks/useEventListener";

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const { mobileMenuVisible, openMenuMobile, closeMenuMobile } =
    useContext(MobileMenuContext);
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
        onMouseEnter={() => setOverlay(true)}
        onMouseLeave={() => setOverlay(false)}
        className={`fixed top-0 right-0 z-[200]  w-full h-[56px] md:h-[96px] transition-colors ${
          scrollY >= 100 || overlay ? "bg-white" : ""
        }`}
      >
        <div className="max-w-containerLg h-full mx-auto">
          <div className="flex items-center justify-between h-full px-6">
            <div className="flex gap-6 h-full">
              <Logo />
              <NavigationMenu.Root className="h-full lg:flex items-center list-none hidden">
                <NavigationMenu.Item className="pr-6">
                  <NavigationMenu.NavigationMenuTrigger className="text-base text-[#242424] font-bold">
                    Pessoas Físicas
                  </NavigationMenu.NavigationMenuTrigger>
                  <NavigationMenu.Content>
                    <div className="w-[750px] h-[250px] bg-white rounded shadow-3xl absolute z-[210] left-[calc(750px / 1/4)] -bottom-[250px]"></div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item className="px-6">
                  <NavigationMenu.NavigationMenuTrigger className="text-base text-[#242424] font-bold">
                    Pessoas Jurídicas
                  </NavigationMenu.NavigationMenuTrigger>
                  <NavigationMenu.Content>
                    <div className="w-[550px] h-[250px] bg-white rounded shadow-3xl absolute z-[210] left-[calc(550px / 1/4)] -bottom-[250px]"></div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item className="px-6">
                  <NavigationMenu.NavigationMenuTrigger className="text-base text-[#242424] font-bold">
                    C6 MEI
                  </NavigationMenu.NavigationMenuTrigger>
                  <NavigationMenu.Content>
                    <div className="w-[450px] h-[250px] bg-white rounded shadow-3xl absolute z-[210] left-[calc(450px / 1/4)] -bottom-[250px]"></div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item className="px-6">
                  <NavigationMenu.NavigationMenuTrigger className="text-base text-[#242424] font-bold">
                    <NavigationMenu.Link href="#">Blog</NavigationMenu.Link>
                  </NavigationMenu.NavigationMenuTrigger>
                </NavigationMenu.Item>

                <NavigationMenu.Item className="px-6">
                  <NavigationMenu.NavigationMenuTrigger className="text-base text-[#242424] font-bold">
                    <NavigationMenu.Link href="#">
                      Tire suas dúvidas
                    </NavigationMenu.Link>
                  </NavigationMenu.NavigationMenuTrigger>
                </NavigationMenu.Item>
              </NavigationMenu.Root>
            </div>

            <div className="flex items-center justify-center gap-4">
              {scrollY >= 100 || overlay ? (
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

              {mobileMenuVisible ? (
                <button
                  type="button"
                  className="xl:hidden text-white bg-black rounded-full flex items-center justify-center w-8 h-8"
                  onClick={closeMenuMobile}
                >
                  <span className="sr-only">Fechar menu</span>
                  <X size={22} />
                </button>
              ) : (
                <button
                  type="button"
                  className="xl:hidden hover:bg-gray-200 rounded-full flex items-center justify-center w-10 h-10"
                  onClick={openMenuMobile}
                >
                  <span className="sr-only">Abrir menu</span>
                  <List size={22} />
                </button>
              )}
            </div>
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
