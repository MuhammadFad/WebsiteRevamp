'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { latestInsightsData, InsightItem } from '@/data/servicesPageData';

const InsightCard: React.FC<{ insight: InsightItem; index: number }> = ({ insight, index }) => {
  const [imageSrc, setImageSrc] = useState<string>(insight.imageUrl);

  const authorName = typeof insight.author === 'string' ? insight.author : insight.author.name;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full min-w-0 max-w-[384px] min-h-[556px] bg-white border border-[#E4E7EC] rounded-[16px] overflow-hidden flex flex-col justify-between shadow-[0px_4px_16px_rgba(15,35,42,0.06)] hover:shadow-xl hover:border-[#14B8A6]/40 hover:-translate-y-1 transition-all duration-300 group"
    >
      <div>
        {/* Card Thumbnail Image (384px x 220px) */}
        <div className="relative w-full h-[220px] bg-[#0F172A] overflow-hidden">
          <Image
            src={imageSrc}
            alt={insight.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            onError={() => {
              if (imageSrc.endsWith('.jpg')) {
                setImageSrc(imageSrc.replace('.jpg', '.png'));
              } else if (imageSrc.endsWith('.png')) {
                setImageSrc(imageSrc.replace('.png', '.jpg'));
              }
            }}
          />
        </div>

        {/* Content Body */}
        <div className="p-7">
          {/* Badge & Date */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="bg-[#F0FDFA] text-[#14B8A6] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-[12px]">
              {insight.badge}
            </span>
            <span className="font-['Inter',sans-serif] text-[13px] text-[#94A3B8] font-normal">
              {insight.date}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] leading-[26px] text-[#0F172A] mb-3 group-hover:text-[#14B8A6] transition-colors line-clamp-2">
            {insight.title}
          </h3>

          {/* Description / Excerpt */}
          <p className="font-['Poppins',sans-serif] text-[14px] leading-[22px] text-[#475467] line-clamp-3 mb-4">
            {insight.excerpt}
          </p>
        </div>
      </div>

      {/* Footer: Author & Read Transmission Link */}
      <div className="px-7 pb-7 pt-2 border-t border-[#E4E7EC] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#111A2E] border border-[#14B8A6]/30 flex items-center justify-center text-xs font-bold text-[#14B8A6]">
            {authorName
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
          <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#0F172A]">
            {authorName}
          </span>
        </div>

        {/* Bottom link: Read Transmission › (#14B8A6, Plus Jakarta Sans 700, 14px) */}
        <Link
          href={insight.transmissionHref}
          className="inline-flex items-center gap-1 font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] text-[#14B8A6] hover:text-[#0D938C] hover:underline transition-colors"
        >
          <span>Read Transmission</span>
          <span className="text-base group-hover:translate-x-1 transition-transform">›</span>
        </Link>
      </div>
    </motion.article>
  );
};

export const LatestInsightsSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC] py-20 lg:py-[100px] px-6 sm:px-8 lg:px-12">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
        {/* Header: Latest Insights (Poppins 700, 32px, #0F172A) with smooth scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <h2 className="font-['Poppins',sans-serif] font-bold text-[28px] sm:text-[32px] leading-[48px] text-[#0F172A] tracking-tight">
            Latest Insights
          </h2>
        </motion.div>

        {/* 3 Cards (384px x 556px, bg white, border #E4E7EC, rounded-16px, shadow) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {latestInsightsData.map((insight, index) => (
            <InsightCard key={insight.id} insight={insight} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsightsSection;
