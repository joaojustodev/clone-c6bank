import { useContext, useState } from "react";
import { motion, Variants } from "framer-motion";
import { MobileMenuContext } from "../contexts/MobileMenuContext";

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

const MobileMenu = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const { mobileMenuVisible } = useContext(MobileMenuContext);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <motion.div
      variants={MobileMenuAnimate}
      initial="hidden"
      animate={mobileMenuVisible ? "visible" : "hidden"}
      className="xl:hidden fixed overflow-auto top-0 right-0 z-[190] left-0 bottom-0 h-screen bg-white"
    >
      <div className="pt-[60px]"></div>
      <nav className="px-6 py-8"></nav>
    </motion.div>
  );
};

export default MobileMenu;
