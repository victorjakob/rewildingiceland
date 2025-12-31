import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Content Container */}
      <div className="relative flex items-center justify-center min-h-screen px-4">
        {/* Mobile Version (No Circle) */}
        <div className="md:hidden">
          <div className="text-center space-y-6 transform transition-all duration-500">
            <h2 className="text-white text-6xl sm:text-7xl tracking-wider">
              Rewilding
            </h2>
            <h2 className="text-emerald-400 text-5xl sm:text-6xl tracking-wider">
              Iceland
            </h2>

            {/* Elegant Mobile Link */}
            <div className="mt-12 relative inline-block group">
              <span
                className="absolute inset-0 bg-emerald-400/20 rounded-full blur-md 
                             group-hover:bg-emerald-400/30 transition-all duration-500"
              />
              <Link
                href="/expeditions"
                className="relative px-4 py-2 border border-white/20 rounded-full 
                         text-white/90 text-lg tracking-[0.2em] 
                         backdrop-blur-sm bg-black/10
                         transition-all duration-500
                         group-hover:border-emerald-400/50
                         group-hover:text-emerald-400/90
                         group-hover:tracking-[0.25em]
                         inline-block"
              >
                Book Your Expedition
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Version (With Circle) - Hidden on Mobile */}
        <Link href="/expeditions" className="hidden md:block group">
          <div
            className="w-[500px] h-[500px] rounded-full border-4 border-white/80 relative 
                         flex flex-col items-center justify-center 
                         transition-all duration-700 cursor-pointer
                         hover:border-emerald-400/80"
          >
            <div className="text-center space-y-4 transform transition-all duration-500 group-hover:scale-105">
              <h2 className="text-white text-7xl tracking-wider">Rewilding</h2>
              <h2 className="text-emerald-400 text-6xl tracking-wider">
                Iceland
              </h2>
              <div className="flex items-center justify-center gap-3 mt-6">
                <p
                  className="text-white/70 text-sm tracking-[0.3em] uppercase 
                             group-hover:text-emerald-400/90 transition-colors duration-300"
                >
                  Book Your Expedition
                </p>
                <span
                  className="text-white/70 group-hover:text-emerald-400/90 
                              transition-all duration-300 
                              transform translate-x-0 group-hover:translate-x-2"
                >
                  →
                </span>
              </div>
            </div>

            {/* Decorative ring */}
            <div
              className="absolute inset-0 rounded-full border border-white/20 scale-110 
                           transition-transform duration-700 group-hover:scale-105
                           group-hover:border-emerald-400/20"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
