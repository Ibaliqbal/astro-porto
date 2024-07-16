import React, { useState } from "react";
import "../style.css";
import { AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";

const NavbarResponsive = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="p-[30px] fixed right-0 z-50 top-0">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="w-16 h-16 rounded-[50%] bg-cyan-300 cursor-pointer flex items-center justify-center"
        >
          <div className={`w-full hamburger ${open ? "active" : ""}`}></div>
        </div>
      </div>

      <AnimatePresence mode="wait">{open && <Navigation />}</AnimatePresence>
    </>
  );
};

export default NavbarResponsive;
