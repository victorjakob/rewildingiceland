"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Nature() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const text = "Nature is Healing";

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Fixed Sacred Geometry Overlay */}
      <motion.div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[-1]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isInView ? 0.3 : 0,
          scale: isInView ? 1 : 0,
        }}
        transition={{
          duration: 3,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
      >
        <div className="relative w-[40vw] aspect-square">
          <Image
            src="https://res.cloudinary.com/dy8q4hf0k/image/upload/v1743448065/sacredgeometry2_wsfo3u.png"
            alt="Sacred Geometry"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Animated Text Container */}
      <motion.div
        className="relative  h-full flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={textVariants}
          className="text-center font-instrument-serif"
        >
          <div className="overflow-hidden">
            <motion.div className="flex justify-center gap-[0.2em]  flex-wrap px-4">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="text-6xl md:text-8xl lg:text-9xl py-2 text-white  inline-block"
                  whileHover={{
                    scale: 1.2,
                    color: "#34d399",
                    transition: { duration: 0.2 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
