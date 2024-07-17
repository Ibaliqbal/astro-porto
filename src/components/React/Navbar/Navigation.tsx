// This component create by oliverlarose
// Here is his github link https://github.com/olivierlarose/curved-menu

import { motion } from "framer-motion";
import { menuSlide } from "@/utils/navbar/anim";
import "../style.css";
import FooterNav from "./FooterNav";
import Curve from "./Curve";

const navItems = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
];

export default function Navigation() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu z-40"
    >
      <div className="body lg:p-[100px] pb-[100px] lg:pb-0 px-[55px]">
        <div className="nav items-start">
          <div className="header">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return data.title === "Home" ? (
              <p
                className="cursor-pointer z-30 href"
                onClick={() =>
                  scrollTo({
                    top: 0,
                  })
                }
                key={index}
              >
                {data.title}
              </p>
            ) : (
              <a href={data.href} key={index} className="z-30">
                {data.title}
              </a>
            );
          })}
        </div>
        <FooterNav />
      </div>
      <Curve />
    </motion.div>
  );
}
