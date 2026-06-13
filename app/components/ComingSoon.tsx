"use client";

import React from "react";
import Image from "next/image";

const ComingSoon = () => {
  const colors = {
    brand: "#FD7400",
    brandHover: "#E06600",
    dark: "#0A0A0A",
  };

  return (
    <div className="relative h-screen w-full flex flex-col overflow-hidden font-sans">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_bg.jpg"
          alt="Luxury Car Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20 z-10" />
      </div>

      {/* Header Branding - Top Left */}
      <header className="absolute top-0 left-0 w-full z-20 px-6 md:px-8 lg:px-12 py-12 md:py-8 lg:py-12">
        <Image
          src="/logo.svg"
          alt="Luxe Car Detailing Logo"
          width={150}
          height={70}
          className="h-7 md:h-9 w-auto animate-fade-in-down"
          priority
        />
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 grow w-full 2xl:max-w-480 lg:mx-auto px-10 md:px-12 lg:px-16 pt-32 pb-20 md:pt-30 2xl:pt-40 md:pb-28 text-left flex flex-col justify-center space-y-10 md:space-y-6 lg:space-y-4 2xl:space-y-2">
        {/* New Hero Section */}

        {/* New Promotional Content and CTA */}
        <div className="mb-8 md:mb-6 animate-fade-in-down">
          <p className="text-white/90 text-xl sm:text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2em] uppercase mb-6 flex flex-col">
            <span>Say Goodbye</span>
            <span className="font-bold text-[#FD7400]">To Dullness</span>
          </p>
          <div className="inline-block px-8 py-3 md:px-9 md:py-3.5 bg-transparent border-2 border-[#FD7400] text-[#FD7400] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#FD7400] hover:text-black">
            Stay Tuned
          </div>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tighter uppercase italic drop-shadow-2xl flex flex-col leading-[0.85]"
          style={{ fontFamily: "'Serpentine', sans-serif" }}
        >
          <span>Gurugram</span>
          <span style={{ color: colors.brand }}>Coming Soon</span>
        </h1>

        <div className="mt-2 md:mt-4 max-w-xs md:max-w-md">
          <h2 className="text-[#FD7400] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-80">
            Featured Services
          </h2>
          <div className="flex flex-wrap justify-start gap-2">
            {[
              "Steam Wash",
              "Interior Deep Detailing",
              "Rubbing & Polishing",
              "Ceramic Coating",
              "Graphene Coating",
              "PPF (Paint Protection Film)",
            ].map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-sm text-white text-[9px] md:text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:border-[#FD7400]/50 hover:bg-white/10"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 md:mt-6 animate-fade-in-down">
          <h2 className="text-[#FD7400] text-xs font-bold tracking-[0.3em] uppercase mb-2 opacity-80">
            Contact
          </h2>
          <a
            href="tel:9999636629"
            className="text-white text-lg md:text-xl font-bold tracking-widest hover:text-[#FD7400] transition-colors duration-300"
          >
            +91 9999636629
          </a>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="absolute bottom-4 left-6 md:left-8 lg:left-12 z-10 text-white/40 text-[9px] md:text-[10px] tracking-widest uppercase">
        © 2006 Luxury Detailing Studio • Coming Fall 2026
      </footer>

      {/* Features Section - Moved to bottom left */}

      {/* Simple Animation Styles */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 1.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
