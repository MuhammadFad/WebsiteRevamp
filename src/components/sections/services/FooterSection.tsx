'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { footerColumnsData } from '@/data/servicesPageData';

export const FooterSection: React.FC = () => {
  const [logoSrc, setLogoSrc] = useState<string>('/images/services/DevLogix-Logo-Footer.svg');
  const [fallbackActive, setFallbackActive] = useState<boolean>(false);

  return (
    <footer className="w-full bg-[#0B1221] pt-[80px] pb-[40px] px-6 sm:px-8 lg:px-12 text-white">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
        {/* 5-Column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Col 1 (Brand): Logo, company bio text (#94A3B8, 14px), and 4 circular social icon buttons (LinkedIn, Facebook, Instagram, Twitter) styled with bg-[#111A2E], border #334155, icon color #14B8A6 */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-6 focus:outline-none">
                {!fallbackActive ? (
                  <Image
                    src={logoSrc}
                    alt="DevLogix Logo"
                    width={150}
                    height={38}
                    className="h-8 w-auto object-contain"
                    onError={() => {
                      if (logoSrc !== '/images/logo-footer.svg') {
                        setLogoSrc('/images/logo-footer.svg');
                      } else {
                        setFallbackActive(true);
                      }
                    }}
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-md bg-[#14B8A6] flex items-center justify-center text-white font-bold text-base shadow-sm">
                      D
                    </span>
                    <span className="font-['Poppins',sans-serif] font-bold text-xl tracking-tight text-[#FFFFFF]">
                      DEVLOGIX
                    </span>
                  </div>
                )}
              </Link>
              <p className="font-['Inter',sans-serif] text-[14px] leading-[24px] text-[#94A3B8] max-w-[320px] mb-8">
                We help businesses innovate, grow, and stay ahead with custom digital
                solutions and AI powered technology.
              </p>
            </div>

            {/* 4 circular social icon buttons (LinkedIn, Facebook, Instagram, Twitter) styled with bg-[#111A2E], border #334155, icon color #14B8A6 */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#111A2E] border border-[#334155] flex items-center justify-center text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white hover:border-[#14B8A6] transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#111A2E] border border-[#334155] flex items-center justify-center text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white hover:border-[#14B8A6] transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#111A2E] border border-[#334155] flex items-center justify-center text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white hover:border-[#14B8A6] transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-[#111A2E] border border-[#334155] flex items-center justify-center text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white hover:border-[#14B8A6] transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columns 2-5: Services, Industries, Insights, Quick Links */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerColumnsData.map((column) => (
              <div key={column.title}>
                <h4 className="font-['Poppins',sans-serif] font-semibold text-[13px] tracking-wider text-[#FFFFFF] uppercase mb-5">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-['Inter',sans-serif] text-[14px] text-[#94A3B8] hover:text-[#14B8A6] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: Horizontal line (border-[#334155]) with centered copyright */}
        <div className="pt-8 border-t border-[#334155] flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          {/* Left spacer to ensure mathematical centering of copyright on desktop */}
          <div className="hidden md:flex items-center gap-6 invisible pointer-events-none" aria-hidden="true">
            <span className="text-[13px]">Privacy Policy</span>
            <span className="text-[13px]">Terms of Service</span>
          </div>

          {/* Centered Copyright Line */}
          <p className="font-['Inter',sans-serif] text-[14px] text-[#94A3B8] text-center">
            &copy; 2024 DevLogix. All rights reserved.
          </p>

          {/* Right Links */}
          <div className="flex items-center justify-center gap-6">
            <Link
              href="/privacy-policy"
              className="font-['Inter',sans-serif] text-[13px] text-[#94A3B8] hover:text-[#14B8A6] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="font-['Inter',sans-serif] text-[13px] text-[#94A3B8] hover:text-[#14B8A6] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
