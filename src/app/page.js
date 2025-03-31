import Image from "next/image";
import Hero from "./(home)/Hero";
import Banner from "./(home)/Banner";
import Services from "./(home)/Services";
import Healing from "./(home)/Healing";
import AdventuresHero from "./(home)/AdventuresHero";
import WhatIsRewilding from "./(home)/WhatIsRewilding";
import TakeTheJourney from "./(home)/TakeTheJourney";
export default function Home() {
  return (
    <>
      {/* Fixed Background Container */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Image
          src="https://res.cloudinary.com/dy8q4hf0k/image/upload/v1743445323/iceland2_ncnbog.jpg"
          alt="Nature Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Scrollable Content */}
      <main className="relative">
        <div className="relative z-10">
          <Hero />
          <Banner />
          <Healing />
          <Services />
          <AdventuresHero />
          <WhatIsRewilding />
          <TakeTheJourney />
        </div>
      </main>
    </>
  );
}
