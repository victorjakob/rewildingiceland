"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TakeTheJourney() {
  return (
    <div className="relative w-full py-32 overflow-hidden bg-gradient-to-b from-background/50 to-background">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl text-center font-cormorant mb-16 text-white/90"
      >
        Begin Your Journey
      </motion.h2>

      {/* Image Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-[1080px] max-h-screen aspect-square rounded-3xl overflow-hidden
                   shadow-2xl hover:shadow-3xl transition-shadow duration-500
                   border border-white/10"
      >
        <Image
          src="https://res.cloudinary.com/dy8q4hf0k/image/upload/v1743451373/take-the-journey_si8dpw.jpg"
          alt="Person walking into epic landscape"
          fill
          className="object-cover scale-[1.02] hover:scale-[1.05] transition-transform duration-[2s]"
          priority
          sizes="(max-width: 1080px) 100vw, 1080px"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide mb-4">
              Your adventure awaits
            </p>
            <p className="text-base text-white/70 max-w-md mx-auto px-4">
              Experience the transformative power of nature
            </p>
          </motion.div>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              y: -2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-12 py-6 bg-emerald-500/90 hover:bg-emerald-500 
                     text-xl text-white font-light tracking-widest uppercase
                     rounded-full shadow-xl hover:shadow-2xl
                     transition-all duration-300 ease-out
                     border border-emerald-400/30"
          >
            <span className="relative z-10">Book My Journey</span>
            <motion.div
              className="absolute inset-0 rounded-full bg-emerald-400/20"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
