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
    <div className="relative min-h-screen w-full flex items-center justify-start overflow-hidden font-sans my-auto">
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
      <header className="absolute top-0 left-0 w-full z-20 p-8 mt-16 md:mt-0 md:p-12 lg:p-16">
        <Image
          src="/logo.svg"
          alt="Luxe Car Detailing Logo"
          width={150}
          height={70}
          className="h-6 md:h-8 w-auto animate-fade-in-down"
          priority
        />
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 w-full ml-3 2xl:ml-20 max-w-4xl px-6 md:px-12 lg:px-16 text-left">
        {/* New Hero Section */}

        {/* New Promotional Content and CTA */}
        <div className="mb-10 animate-fade-in-down ml-1">
          <p className="text-white/90 text-[1.5rem] font-light tracking-[0.2em] uppercase mb-6 flex flex-col">
            <span>Say Goodbye</span>
            <span className="font-bold text-[#FD7400]">To Dullness</span>
          </p>
          <div className="inline-block px-10 py-4 bg-transparent border-2 border-[#FD7400] text-[#FD7400] text-xs font-bold tracking-[0.4em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#FD7400] hover:text-black">
            Stay Tuned
          </div>
        </div>

        <h1
          className="text-4xl md:text-[4rem] font-bold text-white mb-8 tracking-tighter uppercase italic drop-shadow-2xl flex flex-col leading-[0.85]"
          style={{ fontFamily: "'Serpentine', sans-serif" }}
        >
          <span>Gurugram</span>
          <span style={{ color: colors.brand }}>Coming Soon</span>
        </h1>

        <div className="mt-8 xl:mt-12 max-w-xs md:max-w-md">
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

        <div className="mt-8 xl:mt-12 animate-fade-in-down">
          <h2 className="text-[#FD7400] text-xs font-bold tracking-[0.3em] uppercase mb-2 opacity-80">
            Contact
          </h2>
          <a
            href="tel:9999636629"
            className="text-white text-xl md:text-2xl font-bold tracking-[0.1em] hover:text-[#FD7400] transition-colors duration-300"
          >
            +91 9999636629
          </a>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="absolute bottom-8 left-6 md:left-16 lg:left-24 z-10 text-white/40 text-sm tracking-widest uppercase">
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
