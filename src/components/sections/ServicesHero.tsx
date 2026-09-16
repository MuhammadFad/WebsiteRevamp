"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedHeroVisual from "./AnimatedHeroVisual"; // <-- Import yahan hoga

export default function ServicesHero() {
  return (
    <div className="w-full bg-[#0F172A] relative overflow-hidden">
      {/* ================= NAVBAR ================= */}
      <header className="w-full max-w-[1440px] h-[80px] mx-auto px-8 md:px-[60px] flex items-center justify-between relative z-30">
        <Link href="/" className="relative w-[150px] h-[32px] block">
          <Image
            src="/images/logo.svg"
            alt="DevLogix Logo"
            width={150}
            height={32}
            priority
            className="object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-white text-[14px] font-semibold font-['Inter']">Services</span>
            <span className="text-white text-[10px]">▾</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer text-white/90 hover:text-white">
            <span className="text-[14px] font-medium font-['Inter']">Industries</span>
            <span className="text-[10px]">▾</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer text-white/90 hover:text-white">
            <span className="text-[14px] font-medium font-['Inter']">Insights</span>
            <span className="text-[10px]">▾</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer text-white/90 hover:text-white">
            <span className="text-[14px] font-medium font-['Inter']">About</span>
            <span className="text-[10px]">▾</span>
          </div>
        </nav>

        <div className="flex items-center gap-5">
          <Link href="/careers" className="text-white text-[14px] font-medium font-['Inter'] hidden sm:block">
            Careers
          </Link>

          <Link
            href="/contact"
            className="h-[40.5px] px-5 bg-[#14B8A6] hover:bg-[#0D938C] text-white rounded-[20px] flex items-center gap-1.5 transition-all"
          >
            <span className="text-[14px] font-semibold uppercase tracking-wider font-['Inter']">GET IN TOUCH</span>
            <span className="text-sm font-bold rotate-[-12deg]">&nearr;</span>
          </Link>

          <div className="hidden sm:flex items-center gap-3 pl-1">
            <div className="w-8 h-8 rounded-full bg-[#F5F6F8] flex items-center justify-center cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* ================= HERO CONTENT ================= */}
      <section className="relative w-full max-w-[1440px] mx-auto min-h-[625px] flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:pl-[120px] lg:pr-[80px] pt-8 pb-16 lg:py-0">
        
        {/* Left Side: Headline stack */}
        <div className="w-full lg:max-w-[628px] flex flex-col items-start gap-8 z-20">
          <div className="flex items-center gap-2 text-[13px] h-[20px]">
            <Link href="/" className="text-[#94A3B8] hover:text-white font-normal font-['Poppins']">Home</Link>
            <span className="text-[#64748B] text-[13px] font-['Inter']">&gt;</span>
            <span className="text-[#14B8A6] font-medium font-['Poppins']">Services</span>
          </div>

          <div className="flex flex-col items-start gap-5">
            <span className="text-[#14B8A6] font-semibold text-[14px] leading-[21px] tracking-wider uppercase font-['Poppins']">
              OUR SERVICES
            </span>
            <h1 className="text-[#F8FAFC] font-semibold text-4xl sm:text-5xl lg:text-[52px] leading-[1.15] tracking-tight font-['Poppins']">
              Technology That Drives Results
            </h1>
            <p className="text-[#94A3B8] text-[17px] leading-[28px] font-normal font-['Poppins']">
              We don&apos;t just build software; we build the future of your business. Our services are designed to bridge the gap between your current state and your vision for tomorrow.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-1">
            <Link
              href="/contact"
              className="h-[41px] px-6 bg-[#187666] hover:bg-[#14B8A6] text-white rounded-[20px] text-[14px] font-semibold font-['Inter'] flex items-center justify-center transition-all shadow-[0_4px_16px_rgba(24,118,102,0.3)]"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/contact"
              className="h-[41px] px-6 bg-white/[0.06] hover:bg-white/10 text-[#CBD5E1] border-[1.5px] border-[#334155] rounded-[20px] text-[14px] font-semibold font-['Inter'] flex items-center justify-center transition-all"
            >
              Partner with us
            </Link>
          </div>
        </div>

        {/* Right Side: Animated Hero Visual Replace */}
        <div className="w-full lg:w-[648px] relative mt-12 lg:mt-0 z-10 flex items-center justify-center">
          <AnimatedHeroVisual />
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="w-full bg-[#0B1221] py-14 lg:py-16 border-t border-[#334155]/50">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[120px] grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-0 items-center">
          <div className="flex flex-col items-center text-center">
            <span className="text-white font-extrabold text-5xl lg:text-[64px] leading-none font-['Plus_Jakarta_Sans']">12+</span>
            <span className="text-[#64748B] text-[12px] font-medium uppercase tracking-wider font-['Inter'] mt-2.5">INDUSTRIES VERTICALIZED</span>
          </div>

          <div className="flex flex-col items-center text-center relative after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-20 after:bg-[#334155] before:hidden md:before:block before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-20 before:bg-[#334155]">
            <span className="text-white font-extrabold text-5xl lg:text-[64px] leading-none font-['Plus_Jakarta_Sans']">7+</span>
            <span className="text-[#64748B] text-[12px] font-medium uppercase tracking-wider font-['Inter'] mt-2.5">REGIONAL HUBS</span>
          </div>

          <div className="flex flex-col items-center text-center relative md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-20 after:bg-[#334155] hidden md:flex">
            <span className="text-white font-extrabold text-5xl lg:text-[64px] leading-none font-['Plus_Jakarta_Sans']">15+</span>
            <span className="text-[#64748B] text-[12px] font-medium uppercase tracking-wider font-['Inter'] mt-2.5">INDUSTRY EXPERTS</span>
          </div>

          <div className="flex md:hidden flex-col items-center text-center">
            <span className="text-white font-extrabold text-5xl leading-none font-['Plus_Jakarta_Sans']">15+</span>
            <span className="text-[#64748B] text-[12px] font-medium uppercase tracking-wider font-['Inter'] mt-2.5">INDUSTRY EXPERTS</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-white font-extrabold text-5xl lg:text-[64px] leading-none font-['Plus_Jakarta_Sans']">50+</span>
            <span className="text-[#64748B] text-[12px] font-medium uppercase tracking-wider font-['Inter'] mt-2.5">PROJECTS DELIVERED</span>
          </div>
        </div>
      </section>
    </div>
  );
}