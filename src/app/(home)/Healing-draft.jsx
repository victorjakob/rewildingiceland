"use client";
import { motion } from "framer-motion";

export default function Healing() {
  return (
    <div className="w-full bg-background py-20 relative">
      <div className="absolute inset-0 pointer-events-none" />

      {/* First row */}
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-12"
          animate={{
            transform: ["translateX(0%)", "translateX(-50%)"],
          }}
          transition={{
            duration: 30,
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
                  className="text-7xl md:text-8xl font-light tracking-tight text-emerald-400/90 inline-block"
                >
                  Nature is Healing
                  <span className="text-white/20 mx-8">●</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second row */}
      <div className="relative flex overflow-x-hidden mt-8">
        <motion.div
          className="flex whitespace-nowrap gap-12"
          animate={{
            transform: ["translateX(-50%)", "translateX(0%)"],
          }}
          transition={{
            duration: 30,
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
                  className="text-7xl md:text-8xl font-light tracking-tight text-white/90 inline-block"
                >
                  Nature is Healing
                  <span className="text-emerald-400/20 mx-8">●</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
