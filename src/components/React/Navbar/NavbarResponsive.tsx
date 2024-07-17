// This component create by oliverlarose
// Here is his github link https://github.com/olivierlarose/curved-menu

import React, { useState } from "react";
import "../style.css";
import { AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import MagneticElement from "../MagneticElement";

const NavbarResponsive = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="p-[30px] fixed right-0 z-50 top-0">
        <MagneticElement>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className="w-16 h-16 rounded-[50%] bg-cyan-300 cursor-pointer flex items-center justify-center"
          >
            <div className={`w-full hamburger ${open ? "active" : ""}`}></div>
          </div>
        </MagneticElement>
      </div>

      <AnimatePresence mode="wait">{open && <Navigation />}</AnimatePresence>
    </>
  );
};

export default NavbarResponsive;
