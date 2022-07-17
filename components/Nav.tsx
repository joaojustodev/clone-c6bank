import { memo, useContext, useState } from "react";
import { motion, Variants } from "framer-motion";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { MobileMenuContext } from "../contexts/MobileMenuContext";
import useEventListener from "../hooks/useEventListener";
import Logo from "./UI/Logo";
import Button from "./UI/Button";
import ButtonOutline from "./UI/ButtonOutline";
import { List, ArrowUpRight, X } from "phosphor-react";

const subMenuAnimate: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [overlay, setOverlay] = useState(false);

  const { mobileMenuVisible, openMenuMobile, closeMenuMobile } =
    useContext(MobileMenuContext);
  useEventListener("scroll", () => setScrollY(window.scrollY));

  return (
    <>
      <motion.nav
        onMouseEnter={() => setOverlay(true)}
        onMouseLeave={() => setOverlay(false)}
        className={`fixed top-0 right-0 z-[200]  w-full h-[56px] md:h-[96px] transition-colors ${
          scrollY > 100 || overlay ? "bg-white" : ""
        }`}
      >
        <div className="max-w-containerLg h-full mx-auto">
          <div className="flex items-center justify-between h-full px-lg">
            <div className="flex gap-lg h-full">
              <div className="opacity-70 flex items-center mr-lg">
                <Logo />
              </div>
              <NavigationMenu.Root className="h-full xl:flex items-center list-none hidden">
                <NavigationMenu.Item className="pr-6">
                  <NavigationMenu.NavigationMenuTrigger className="text-base text-[#242424] font-bold">
                    Pessoas Física
                  </NavigationMenu.NavigationMenuTrigger>
                  <NavigationMenu.Content>
                    <motion.div
                      variants={subMenuAnimate}
                      initial="hidden"
                      animate="visible"
                      className="w-[750px] h-[250px] bg-white rounded shadow-3xl absolute z-[210] left-[calc(750px / 1/4)] -bottom-[250px]"
                    ></motion.div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item className="px-6">
                  <NavigationMenu.NavigationMenuTrigger className="text-base text-[#242424] font-bold">
                    Pessoas Jurídica
                  </NavigationMenu.NavigationMenuTrigger>
                  <NavigationMenu.Content>
                    <motion.div
                      variants={subMenuAnimate}
                      initial="hidden"
                      animate="visible"
                      className="w-[550px] h-[250px] bg-white rounded shadow-3xl absolute z-[210] left-[calc(550px / 1/4)] -bottom-[250px]"
                    ></motion.div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item className="px-6">
                  <NavigationMenu.NavigationMenuTrigger className="text-base text-[#242424] font-bold">
                    C6 MEI
                  </NavigationMenu.NavigationMenuTrigger>
                  <NavigationMenu.Content>
                    <motion.div
                      variants={subMenuAnimate}
                      initial="hidden"
                      animate="visible"
                      className="w-[450px] h-[250px] bg-white rounded shadow-3xl absolute z-[210] left-[calc(450px / 1/4)] -bottom-[250px]"
                    ></motion.div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item className="px-6">
                  <NavigationMenu.NavigationMenuTrigger className="text-base text-[#242424] font-bold">
                    <NavigationMenu.Link
                      href="#"
                      className="flex items-center gap-2 group"
                    >
                      Blog{" "}
                      <ArrowUpRight className="opacity-0 group-hover:opacity-100" />
                    </NavigationMenu.Link>
                  </NavigationMenu.NavigationMenuTrigger>
                </NavigationMenu.Item>

                <NavigationMenu.Item className="px-6">
                  <NavigationMenu.NavigationMenuTrigger className="text-base text-[#242424] font-bold">
                    <NavigationMenu.Link
                      href="#"
                      className="flex items-center gap-2 group"
                    >
                      Tire suas dúvidas
                      <ArrowUpRight className="opacity-0 group-hover:opacity-100" />
                    </NavigationMenu.Link>
                  </NavigationMenu.NavigationMenuTrigger>
                </NavigationMenu.Item>
              </NavigationMenu.Root>
            </div>

            <div className="flex items-center justify-center gap-4">
              {scrollY > 100 || overlay ? (
                <Button
                  href="#"
                  css="w-[142px] h-[28px] xl:w-[290px] xl:h-[42px]"
                >
                  <span className="text-xs md:text-sm py-1 text-gray-500">
                    ABRA SUA CONTA
                  </span>
                </Button>
              ) : (
                <ButtonOutline
                  href="#"
                  css="w-[142px] h-[28px] xl:w-[290px] xl:h-[42px]"
                >
                  <span className="text-xs md:text-sm py-1 text-gray-500">
                    ABRA SUA CONTA
                  </span>
                </ButtonOutline>
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
      </motion.nav>

      <div
        className={`${
          overlay ? "z-[190] opacity-40" : "z-[-190] opacity-0"
        } hidden lg:block fixed min-h-screen top-0 right-0 bottom-0 left-0 bg-black transition-opacity`}
      />
    </>
  );
};

export default memo(Nav);
