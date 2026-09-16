'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { techBadgesRows } from '@/data/serviceAiData';

export interface ToolsTechnologiesSectionProps {
  eyebrow?: string;
  title?: string;
  rows?: string[][];
}

export const ToolsTechnologiesSection: React.FC<ToolsTechnologiesSectionProps> = ({
  eyebrow = 'TOOLS & TECHNOLOGIES',
  title = 'Equipped with the latest tools.',
  rows = techBadgesRows,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 lg:py-[90px] px-6 sm:px-8 lg:px-12">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
        {/* Header with smooth scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 lg:mb-16 max-w-[700px] mx-auto"
        >
          <span className="font-['Poppins',sans-serif] font-semibold text-[14px] uppercase tracking-wider text-brand-teal-hover block mb-3">
            {eyebrow}
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-3xl sm:text-[40px] leading-tight text-brand-card">
            {title}
          </h2>
        </motion.div>

        {/* 3 Centered Rows of Tech Badges */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 max-w-5xl mx-auto">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: rowIndex * 0.15 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              {row.map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-200 bg-white text-brand-card font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[13px] sm:text-[14px] shadow-sm hover:border-brand-teal-hover hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default group"
                >
                  {/* 6px Teal Dot */}
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-fill group-hover:scale-125 transition-transform" />
                  <span>{tech}</span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsTechnologiesSection;
