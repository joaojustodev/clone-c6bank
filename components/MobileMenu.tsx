import { useContext, useState } from "react";
import { motion, Variants } from "framer-motion";
import { MobileMenuContext } from "../context/MobileMenuContext";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { KeyboardArrowDown } from "@mui/icons-material";

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
      className="xl:hidden fixed top-0 right-0 z-[190] left-0 bottom-0 h-screen bg-white"
    >
      <div className="pt-[60px]"></div>
      <nav className="px-6 py-8">
        <Accordion
          sx={{ boxShadow: "none" }}
          expanded={expanded === "painel1"}
          onChange={handleChange("painel1")}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            sx={{
              borderBottom: "1px solid #c6c6c6",
              padding: 0,
              margin: 0,
              opacity: 1,
            }}
            expandIcon={<KeyboardArrowDown />}
          >
            <h2 className="text-lg mb-4 mt-6 ">Pessoas Físicas</h2>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <div className="w-full h-[120px] bg-gray-100 mt-2" />
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ boxShadow: "none" }}
          TransitionProps={{ unmountOnExit: true }}
          expanded={expanded === "painel2"}
          onChange={handleChange("painel2")}
        >
          <AccordionSummary
            sx={{
              borderBottom: "1px solid #c6c6c6",
              padding: 0,
              margin: 0,
              opacity: 1,
            }}
            expandIcon={<KeyboardArrowDown />}
          >
            <h2 className="text-lg mb-4 mt-6">Pessoas Jurídicas</h2>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <div className="w-full h-[120px] bg-gray-100 mt-2" />
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{ boxShadow: "none", margin: 0 }}
          TransitionProps={{ unmountOnExit: true }}
          expanded={expanded === "painel3"}
          onChange={handleChange("painel3")}
        >
          <AccordionSummary
            sx={{
              borderBottom: "1px solid #c6c6c6",
              padding: 0,
              margin: 0,
              opacity: 1,
            }}
            expandIcon={<KeyboardArrowDown />}
          >
            <h2 className="text-lg mb-4 mt-6">C6 MEI</h2>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <div className="w-full h-[120px] bg-gray-100 mt-2" />
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{ boxShadow: "none", margin: 0 }}
          TransitionProps={{ unmountOnExit: true }}
          expanded={false}
        >
          <AccordionSummary
            sx={{
              borderBottom: "1px solid #c6c6c6",
              padding: 0,
              margin: 0,
              opacity: 1,
            }}
          >
            <a href="#" className="text-lg mb-4 mt-6">
              Blog
            </a>
          </AccordionSummary>
        </Accordion>

        <Accordion
          sx={{ boxShadow: "none", margin: 0 }}
          TransitionProps={{ unmountOnExit: true }}
          expanded={false}
        >
          <AccordionSummary
            sx={{
              borderBottom: "1px solid #c6c6c6",
              padding: 0,
              margin: 0,
              opacity: 1,
            }}
          >
            <a href="#" className="text-lg mb-4 mt-6">
              Tire suas dúvidas
            </a>
          </AccordionSummary>
        </Accordion>
      </nav>
    </motion.div>
  );
};

export default MobileMenu;
