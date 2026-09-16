'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="relative w-full max-w-[1440px] 2xl:max-w-[1600px] h-[90px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo: White Logo when at top, Dark Text + Green Mark Logo when scrolled */}
        <Link href="/" className="relative flex items-center shrink-0 focus:outline-none">
          {!logoError ? (
            <div className="relative w-[170px] h-[36px]">
              <Image
                src={
                  isScrolled
                    ? '/images/services/DevLogix-Logo-Dark.svg'
                    : '/images/services/DevLogix-Logo-Primary-White 1.svg'
                }
                alt="DevLogix Logo"
                width={170}
                height={36}
                priority
                className="w-[170px] h-[36px] object-contain object-left transition-opacity duration-300"
                onError={() => setLogoError(true)}
              />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="font-['Poppins',sans-serif] font-bold text-[26px] text-[#14B8A6]">D</span>
              <span
                className={`font-['Poppins',sans-serif] font-bold text-[26px] tracking-tight ${
                  isScrolled ? 'text-[#0F172A]' : 'text-[#FFFFFF]'
                }`}
              >
                EVLOGIX
              </span>
            </div>
          )}
        </Link>

        {/* Center Desktop Nav Links (gap: 36px, text-[15px]) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-9">
          {/* Services with Dropdown */}
          <div className="relative group py-2">
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Link
                href="/services"
                className={`font-['Inter',sans-serif] text-[15px] font-medium transition-colors ${
                  isScrolled
                    ? 'text-slate-800 hover:text-teal-600'
                    : 'text-slate-200 hover:text-teal-400'
                }`}
              >
                Services
              </Link>
              <span
                className={`font-['Inter',sans-serif] text-[11px] transition-transform duration-200 group-hover:translate-y-0.5 ${
                  isScrolled
                    ? 'text-slate-500 group-hover:text-teal-600'
                    : 'text-slate-400 group-hover:text-teal-400'
                }`}
              >
                ▾
              </span>
            </div>

            {/* Desktop Dropdown Flyout */}
            <div className="absolute top-full left-0 pt-2 w-[280px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-[#0B1221] border border-[#334155]/60 rounded-xl shadow-2xl p-2.5 backdrop-blur-xl">
                <Link
                  href="/services/artificial-intelligence"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] text-slate-200 hover:bg-white/10 hover:text-[#14B8A6] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                  <span>Artificial Intelligence</span>
                </Link>
                <Link
                  href="/services/software-development"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] text-slate-200 hover:bg-white/10 hover:text-[#14B8A6] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                  <span>Software Development</span>
                </Link>
                <Link
                  href="/services/ui-ux-design"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] text-slate-200 hover:bg-white/10 hover:text-[#14B8A6] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                  <span>UI/UX Design</span>
                </Link>
                <Link
                  href="/services/cloud-solutions"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] text-slate-200 hover:bg-white/10 hover:text-[#14B8A6] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                  <span>Cloud Solutions</span>
                </Link>
                <Link
                  href="/services/digital-transformation"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] text-slate-200 hover:bg-white/10 hover:text-[#14B8A6] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                  <span>Digital Transformation</span>
                </Link>
                <div className="my-1 border-t border-slate-700/60" />
                <Link
                  href="/services"
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-[12px] font-semibold text-[#14B8A6] hover:bg-[#14B8A6]/10 transition-colors"
                >
                  <span>Explore All Services</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div className="flex items-center gap-1.5 cursor-pointer group py-2">
            <Link
              href="/industries"
              className={`font-['Inter',sans-serif] text-[15px] font-medium transition-colors ${
                isScrolled
                  ? 'text-slate-800 hover:text-teal-600'
                  : 'text-slate-200 hover:text-teal-400'
              }`}
            >
              Industries
            </Link>
            <span
              className={`font-['Inter',sans-serif] text-[11px] transition-transform duration-200 group-hover:translate-y-0.5 ${
                isScrolled
                  ? 'text-slate-500 group-hover:text-teal-600'
                  : 'text-slate-400 group-hover:text-teal-400'
              }`}
            >
              ▾
            </span>
          </div>

          {/* Insights */}
          <div className="flex items-center gap-1.5 cursor-pointer group py-2">
            <Link
              href="/insights"
              className={`font-['Inter',sans-serif] text-[15px] font-medium transition-colors ${
                isScrolled
                  ? 'text-slate-800 hover:text-teal-600'
                  : 'text-slate-200 hover:text-teal-400'
              }`}
            >
              Insights
            </Link>
            <span
              className={`font-['Inter',sans-serif] text-[11px] transition-transform duration-200 group-hover:translate-y-0.5 ${
                isScrolled
                  ? 'text-slate-500 group-hover:text-teal-600'
                  : 'text-slate-400 group-hover:text-teal-400'
              }`}
            >
              ▾
            </span>
          </div>

          {/* About */}
          <div className="flex items-center gap-1.5 cursor-pointer group py-2">
            <Link
              href="/about"
              className={`font-['Inter',sans-serif] text-[15px] font-medium transition-colors ${
                isScrolled
                  ? 'text-slate-800 hover:text-teal-600'
                  : 'text-slate-200 hover:text-teal-400'
              }`}
            >
              About
            </Link>
            <span
              className={`font-['Inter',sans-serif] text-[11px] transition-transform duration-200 group-hover:translate-y-0.5 ${
                isScrolled
                  ? 'text-slate-500 group-hover:text-teal-600'
                  : 'text-slate-400 group-hover:text-teal-400'
              }`}
            >
              ▾
            </span>
          </div>
        </nav>

        {/* Right Links & Actions */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7">
          {/* Careers */}
          <Link
            href="/careers"
            className={`font-['Inter',sans-serif] text-[15px] font-medium transition-colors ${
              isScrolled
                ? 'text-slate-800 hover:text-teal-600'
                : 'text-slate-200 hover:text-teal-400'
            }`}
          >
            Careers
          </Link>

          {/* GET IN TOUCH Button (154px x 40.5px, bg: #14B8A6, rounded: 20px) */}
          <Link
            href="/contact"
            className="w-[154px] h-[40.5px] bg-[#14B8A6] hover:bg-[#0D938C] text-white rounded-[20px] flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-[#14B8A6]/20 hover:scale-[1.02]"
          >
            <span className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] text-[#FFFFFF] uppercase tracking-wide">
              GET IN TOUCH
            </span>
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>

          {/* Header Action Circular Buttons */}
          <div className="flex items-center gap-[12px]">
            {/* Search Icon: 32px x 32px */}
            <button
              type="button"
              aria-label="Search"
              className={`w-[32px] h-[32px] rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                isScrolled
                  ? 'bg-[#F1F5F9] hover:bg-slate-200 text-[#0F172A]'
                  : 'bg-[#F5F6F8] hover:bg-white text-[#0F172A]'
              }`}
            >
              <svg
                className="w-[14px] h-[14px]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Globe Icon: 32px x 32px */}
            <button
              type="button"
              aria-label="Language"
              className={`w-[32px] h-[32px] rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                isScrolled
                  ? 'bg-[#F1F5F9] hover:bg-slate-200 text-[#0F172A]'
                  : 'bg-[#FFFFFF] hover:bg-[#F5F6F8] text-[#0F172A]'
              }`}
            >
              <svg
                className="w-[14px] h-[14px]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className={`lg:hidden p-2 rounded-lg border transition-colors ${
            isScrolled
              ? 'text-slate-900 bg-slate-100 border-slate-200'
              : 'text-white bg-[#111A2E] border-[#334155]'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-6 py-6 space-y-4 transition-colors ${
            isScrolled
              ? 'bg-white border-slate-200 text-slate-900'
              : 'bg-[#0F172A] border-[#334155] text-white'
          }`}
        >
          {/* Services with direct slug links */}
          <div className="space-y-1">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`block font-['Inter',sans-serif] font-semibold text-base hover:text-[#14B8A6] py-1 ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              Services
            </Link>
            <div className={`pl-3 space-y-1.5 border-l my-1.5 ${isScrolled ? 'border-slate-200' : 'border-slate-700/60'}`}>
              <Link
                href="/services/artificial-intelligence"
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-[13px] hover:text-[#14B8A6] py-0.5 ${isScrolled ? 'text-slate-600' : 'text-slate-400'}`}
              >
                • Artificial Intelligence
              </Link>
              <Link
                href="/services/software-development"
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-[13px] hover:text-[#14B8A6] py-0.5 ${isScrolled ? 'text-slate-600' : 'text-slate-400'}`}
              >
                • Software Development
              </Link>
              <Link
                href="/services/ui-ux-design"
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-[13px] hover:text-[#14B8A6] py-0.5 ${isScrolled ? 'text-slate-600' : 'text-slate-400'}`}
              >
                • UI/UX Design
              </Link>
              <Link
                href="/services/cloud-solutions"
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-[13px] hover:text-[#14B8A6] py-0.5 ${isScrolled ? 'text-slate-600' : 'text-slate-400'}`}
              >
                • Cloud Solutions
              </Link>
              <Link
                href="/services/digital-transformation"
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-[13px] hover:text-[#14B8A6] py-0.5 ${isScrolled ? 'text-slate-600' : 'text-slate-400'}`}
              >
                • Digital Transformation
              </Link>
            </div>
          </div>
          <Link
            href="/industries"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-['Inter',sans-serif] text-base hover:text-[#14B8A6] py-1 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
          >
            Industries
          </Link>
          <Link
            href="/insights"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-['Inter',sans-serif] text-base hover:text-[#14B8A6] py-1 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
          >
            Insights
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-['Inter',sans-serif] text-base hover:text-[#14B8A6] py-1 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
          >
            About
          </Link>
          <Link
            href="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-['Inter',sans-serif] text-base hover:text-[#14B8A6] py-1 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
          >
            Careers
          </Link>
          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full h-[44px] bg-[#14B8A6] text-white rounded-[20px] flex items-center justify-center gap-2 font-['Inter',sans-serif] font-semibold text-sm uppercase tracking-wider"
            >
              <span>GET IN TOUCH</span>
              <span className="text-base">&nearr;</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
