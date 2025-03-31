"use client";
import { motion } from "framer-motion";

export default function AdventuresHero() {
  return (
    <div className="relative py-20 w-full overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-12"
          animate={{
            transform: ["translateX(0%)", "translateX(-50%)"],
          }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Double the text to ensure smooth infinite loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12">
              {[...Array(4)].map((_, index) => (
                <span
                  key={index}
                  className="text-7xl md:text-8xl lg:text-9xl font-light tracking-wider  inline-block"
                >
                  Adventures for the Soul
                  <span className="text-white/20 mx-8">●</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
