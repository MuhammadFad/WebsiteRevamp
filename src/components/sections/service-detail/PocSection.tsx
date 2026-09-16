'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { pocCardsData, PocItem } from '@/data/serviceAiData';

const PocIcon: React.FC<{ type: PocItem['iconType'] | string }> = ({ type }) => {
  switch (type) {
    case 'message':
    case 'message-square':
      return (
        <svg className="w-6 h-6 text-[#14B8A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      );
    case 'chart':
    case 'bar-chart':
      return (
        <svg className="w-6 h-6 text-[#14B8A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      );
    case 'database':
      return (
        <svg className="w-6 h-6 text-[#14B8A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      );
    case 'file':
    case 'file-text':
      return (
        <svg className="w-6 h-6 text-[#14B8A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export interface PocSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cards?: PocItem[];
  ctaText?: string;
  ctaHref?: string;
}

export const PocSection: React.FC<PocSectionProps> = ({
  eyebrow = 'PROOF OF CONCEPT',
  title = 'Prove it on your data before you scale it.',
  subtitle = 'De-risk your investment with a 4-to-6 week target pilot designed to test accuracy, user adoption, and system latency on real workloads.',
  cards = pocCardsData,
  ctaText = 'Scope a proof of concept',
  ctaHref = '/contact',
}) => {

  return (
    <section className="relative w-full overflow-hidden bg-[#F5F7FA] py-20 lg:py-[100px] px-6 sm:px-8 lg:px-12">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
        {/* Header with smooth scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 lg:mb-16 max-w-[800px] mx-auto"
        >
          <span className="font-['Poppins',sans-serif] font-semibold text-[14px] uppercase tracking-wider text-[#14B8A6] block mb-3">
            {eyebrow}
          </span>
          <h2 className="font-['Poppins',sans-serif] font-semibold text-3xl sm:text-[40px] leading-tight sm:leading-[52px] text-[#0F172A] mb-4">
            {title}
          </h2>
          <p className="font-['Inter',sans-serif] text-[16px] leading-[26px] text-[#475467]">
            {subtitle}
          </p>
        </motion.div>

        {/* 4 POC Cards (Fluid responsive 4-column grid with min-w-0) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 w-full mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="w-full min-w-0 h-full min-h-[356px] bg-white border border-[#E4E7EC] rounded-[16px] p-6 sm:p-7 xl:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 hover:border-[#14B8A6]/40 transition-all duration-300 group"
            >
              <div>
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-[#F0FDFA] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <PocIcon type={card.iconType} />
                </div>

                {/* Title */}
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] text-[#0F172A] mb-3 group-hover:text-[#14B8A6] transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-['Inter',sans-serif] text-[13px] leading-[21px] text-[#475467]">
                  {card.description}
                </p>
              </div>

              {/* Timeline Pill */}
              <div className="pt-4 border-t border-[#E4E7EC] mt-6">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12px] uppercase text-[#14B8A6] tracking-wider">
                  Timeline: {card.timeline}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Pill CTA */}
        <div className="text-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center bg-[#14B8A6] hover:bg-[#0D938C] text-white font-['Poppins',sans-serif] font-semibold text-[15px] px-[32px] py-[14px] rounded-[24px] transition-all duration-200 shadow-lg shadow-[#14B8A6]/20 hover:scale-[1.02]"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PocSection;
