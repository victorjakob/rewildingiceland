"use client";
import { motion } from "framer-motion";

export default function AdventuresHero() {
  return (
    <div className="relative py-12 sm:py-16 md:py-20 w-full overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-6 sm:gap-8 md:gap-12"
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
            <div key={i} className="flex gap-6 sm:gap-8 md:gap-12">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex items-center">
                  <span
                    className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl 
                                 font-light tracking-wide sm:tracking-wider 
                                 inline-block"
                  >
                    Adventures for the Soul
                  </span>
                  <span className="text-white/20 mx-4 sm:mx-6 md:mx-8">●</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
