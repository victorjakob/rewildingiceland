import Image from "next/image";
import Form from "./Form";

export default function ContactPage() {
  return (
    <>
      {/* Fixed Background Container */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Image
          src="https://res.cloudinary.com/dy8q4hf0k/image/upload/v1743520518/iceland4_bnzog6.jpg"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Scrollable Content */}
      <main className="relative min-h-screen">
        <div className="relative z-10 flex flex-col items-center justify-center py-12 sm:py-20">
          <div className="text-center w-full max-w-4xl mx-auto px-4 sm:px-6">
            <h1 className="pt-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-cormorant mb-3 sm:mb-4">
              Let’s Reconnect
            </h1>
            <p className="text-white/80 text-base sm:text-lg mb-8 sm:mb-12 font-light max-w-2xl mx-auto px-4">
              Feel the call of the wild? Reach out to us and let’s begin
              crafting your next great adventure together. We’ll be in touch as
              soon as we can.
            </p>

            <Form />
          </div>
        </div>
      </main>
    </>
  );
}
