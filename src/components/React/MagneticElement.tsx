// This component create by oliverlarose
// Here is his github link https://github.com/olivierlarose/magnetic-button

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticElement({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e;
    const {
      height = 0,
      width = 0,
      left = 0,
      top = 0,
    } = ref.current?.getBoundingClientRect() ?? {};
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
