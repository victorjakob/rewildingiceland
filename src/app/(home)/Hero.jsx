export default function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Content Container */}
      <div className="relative flex items-center justify-center min-h-screen">
        {/* Circle with text */}
        <div className="w-[500px] h-[500px] rounded-full border-4 border-white/80 relative flex items-center justify-center group transition-all duration-700">
          <div className="text-center space-y-2 transform transition-all duration-500 group-hover:scale-110">
            <h2 className="text-white  text-7xl  tracking-wider">Rewilding</h2>
            <h2 className="text-emerald-400 text-6xl tracking-wider">
              Iceland
            </h2>
          </div>

          {/* Optional decorative ring */}
          <div className="absolute inset-0 rounded-full border border-white/20 scale-110 transition-transform duration-700 group-hover:scale-105" />
        </div>
      </div>
    </div>
  );
}
