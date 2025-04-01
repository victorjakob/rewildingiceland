import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dy8q4hf0k/image/upload/v1743520518/iceland4_bnzog6.jpg"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl text-white font-cormorant">Hello World</h1>
      </div>
    </div>
  );
}
