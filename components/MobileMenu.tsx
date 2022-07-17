import { useContext, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, Variants } from "framer-motion";
import { MobileMenuContext } from "../contexts/MobileMenuContext";
import { CaretDown } from "phosphor-react";

const MobileMenuAnimate: Variants = {
  hidden: {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  },
  visible: {
    opacity: 1,
    display: "block",
    transition: {
      duration: 0.1,
    },
  },
};

const OpenAccordionContentAnimate: Variants = {
  hidden: {
    height: 0,
  },
  visible: {
    height: "var(--radix-accordion-content-height)",
    transition: {
      duration: 0.2,
    },
  },
};

const MobileMenu = () => {
  const { mobileMenuVisible } = useContext(MobileMenuContext);

  return (
    <motion.div
      variants={MobileMenuAnimate}
      initial="hidden"
      animate={mobileMenuVisible ? "visible" : "hidden"}
      className="xl:hidden fixed overflow-auto top-0 right-0 z-[190] left-0 bottom-0 h-screen bg-white"
    >
      <div className="pt-[60px]"></div>
      <nav className="px-6 py-8">
        <Accordion.Root type="single" collapsible>
          <Accordion.Item value="pessoas-fisica">
            <Accordion.Header></Accordion.Header>
            <Accordion.Trigger className="flex w-full justify-between item-center py-sm border-b border-gray-100 group transition-opacity  data-state-open:opacity-90">
              <span className="text-lg">Pessoa Física</span>{" "}
              <CaretDown
                aria-hidden
                size={18}
                className="transition-transform data-state-opened:rotate-180"
              />{" "}
            </Accordion.Trigger>
            <Accordion.Content className="h-[200px] my-sm">
              <motion.div
                variants={OpenAccordionContentAnimate}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-full bg-gray-400"
              ></motion.div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="pessoas-juridica">
            <Accordion.Header></Accordion.Header>
            <Accordion.Trigger className="flex w-full justify-between item-center py-sm border-b border-gray-100 group transition-opacity  data-state-open:opacity-90">
              <span className="text-lg">Pessoa Jurídica</span>{" "}
              <CaretDown
                aria-hidden
                size={18}
                className="transition-transform data-state-opened:rotate-180"
              />{" "}
            </Accordion.Trigger>
            <Accordion.Content className="h-[150px]">
              <motion.div
                variants={OpenAccordionContentAnimate}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-full bg-gray-400"
              ></motion.div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="c6-mei">
            <Accordion.Header></Accordion.Header>
            <Accordion.Trigger className="flex w-full justify-between item-center py-sm border-b border-gray-100 group transition-opacity  data-state-open:opacity-90">
              <span className="text-lg">C6 MEI</span>{" "}
              <CaretDown
                aria-hidden
                size={18}
                className="transition-transform data-state-opened:rotate-180"
              />{" "}
            </Accordion.Trigger>
            <Accordion.Content className="h-[100px]">
              <motion.div
                variants={OpenAccordionContentAnimate}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-full bg-gray-400"
              ></motion.div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="blog">
            <Accordion.Header></Accordion.Header>
            <Accordion.Trigger className="w-full py-sm text-start border-b border-gray-100">
              <a href="#" className="text-lg">
                Blog
              </a>
            </Accordion.Trigger>
          </Accordion.Item>

          <Accordion.Item value="duvidas">
            <Accordion.Header></Accordion.Header>
            <Accordion.Trigger className="w-full py-sm text-start border-b border-gray-100">
              <a href="#" className="text-lg">
                Tire suas dúvidas
              </a>
            </Accordion.Trigger>
          </Accordion.Item>
        </Accordion.Root>
      </nav>
    </motion.div>
  );
};

export default MobileMenu;
