"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Banner() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -200px 0px", // Starts animation slightly before the element comes into view
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full z-0 bg-background py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-6xl md:text-7xl text-white text-center leading-relaxed tracking-wide"
        >
          <motion.span variants={item}>Adventure</motion.span>
          <motion.span variants={item}>, </motion.span>
          <motion.span variants={item} className="text-green-400">
            nature therapy
          </motion.span>
          <motion.span variants={item}>, </motion.span>
          <motion.span variants={item} className="text-emerald-400">
            herbal medicine
          </motion.span>
          <motion.span variants={item}>, </motion.span>
          <motion.span variants={item} className="text-teal-400">
            connection
          </motion.span>
          <motion.span variants={item}>, </motion.span>
          <motion.span variants={item} className="text-white/80">
            and more
          </motion.span>
          <motion.span variants={item}>.</motion.span>
        </motion.h2>
      </div>
    </div>
  );
}
