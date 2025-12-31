"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Here you would typically send the data to your backend
      console.log(data);
      // On success:
      reset();
      // You might want to show a success message here
    } catch (error) {
      console.error("Error submitting form:", error);
      // You might want to show an error message here
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-xl mx-auto 
                 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl 
                 bg-white/10 backdrop-blur-md
                 border border-white/20"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 sm:space-y-6"
      >
        {/* Name Input */}
        <div>
          <motion.label
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            htmlFor="name"
            className="block text-white text-base sm:text-sm font-light tracking-wide mb-2"
          >
            Name
          </motion.label>
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            className={`w-full px-4 py-4 sm:py-3 rounded-lg 
                       bg-white/10 border
                       text-white placeholder-white/50
                       focus:outline-none focus:ring-2 focus:ring-emerald-400/50
                       transition-all duration-300
                       backdrop-blur-sm
                       text-base sm:text-sm
                       ${errors.name ? "border-red-400" : "border-white/20"}
                       ${
                         errors.name
                           ? "focus:ring-red-400/50"
                           : "focus:ring-emerald-400/50"
                       }`}
            placeholder="Your name"
          />
          {errors.name && (
            <span className="text-red-400 text-sm mt-1 block">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Email Input */}
        <div>
          <motion.label
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            htmlFor="email"
            className="block text-white text-base sm:text-sm font-light tracking-wide mb-2"
          >
            Email
          </motion.label>
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`w-full px-4 py-4 sm:py-3 rounded-lg 
                       bg-white/10 border
                       text-white placeholder-white/50
                       focus:outline-none focus:ring-2
                       transition-all duration-300
                       backdrop-blur-sm
                       text-base sm:text-sm
                       ${errors.email ? "border-red-400" : "border-white/20"}
                       ${
                         errors.email
                           ? "focus:ring-red-400/50"
                           : "focus:ring-emerald-400/50"
                       }`}
            placeholder="your@email.com"
          />
          {errors.email && (
            <span className="text-red-400 text-sm mt-1 block">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Message Input */}
        <div>
          <motion.label
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            htmlFor="message"
            className="block text-white text-base sm:text-sm font-light tracking-wide mb-2"
          >
            Message
          </motion.label>
          <motion.textarea
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
            className={`w-full px-4 py-4 sm:py-3 rounded-lg 
                       bg-white/10 border
                       text-white placeholder-white/50
                       focus:outline-none focus:ring-2
                       transition-all duration-300
                       backdrop-blur-sm
                       h-40 sm:h-32 resize-none
                       text-base sm:text-sm
                       ${errors.message ? "border-red-400" : "border-white/20"}
                       ${
                         errors.message
                           ? "focus:ring-red-400/50"
                           : "focus:ring-emerald-400/50"
                       }`}
            placeholder="Your message..."
          />
          {errors.message && (
            <span className="text-red-400 text-sm mt-1 block">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 sm:py-4 rounded-lg
                     bg-emerald-500/80 hover:bg-emerald-500
                     text-white font-light tracking-wider
                     transition-all duration-300
                     backdrop-blur-sm
                     relative overflow-hidden
                     group
                     text-lg sm:text-base
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="relative z-10">
            {isSubmitting ? "Sending..." : "Send Message"}
          </span>
          <div
            className="absolute inset-0 bg-emerald-400/20 
                         transform scale-x-0 group-hover:scale-x-100 
                         transition-transform duration-300 origin-left"
          />
        </motion.button>
      </form>
    </motion.div>
  );
}
