'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const StatsSection: React.FC = () => {
  return (
    <section className="w-full min-h-[217px] bg-brand-navy py-14 lg:py-16 border-t border-slate-700/50 flex items-center justify-center">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 items-center justify-between">
          {/* 12+ INDUSTRIES VERTICALIZED */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center px-4"
          >
            <span className="font-jakarta font-extrabold text-5xl lg:text-[64px] leading-none text-white tracking-tight">
              12+
            </span>
            <span className="font-medium text-[12px] uppercase text-slate-500 tracking-wider mt-2.5">
              INDUSTRIES VERTICALIZED
            </span>
          </motion.div>

          {/* 7+ REGIONAL HUBS with dividers */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center px-4 relative after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-20 after:bg-slate-700 before:hidden md:before:block before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-20 before:bg-slate-700"
          >
            <span className="font-jakarta font-extrabold text-5xl lg:text-[64px] leading-none text-white tracking-tight">
              7+
            </span>
            <span className="font-medium text-[12px] uppercase text-slate-500 tracking-wider mt-2.5">
              REGIONAL HUBS
            </span>
          </motion.div>

          {/* 15+ INDUSTRY EXPERTS with right divider */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center px-4 relative md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-20 after:bg-slate-700"
          >
            <span className="font-jakarta font-extrabold text-5xl lg:text-[64px] leading-none text-white tracking-tight">
              15+
            </span>
            <span className="font-medium text-[12px] uppercase text-slate-500 tracking-wider mt-2.5">
              INDUSTRY EXPERTS
            </span>
          </motion.div>

          {/* 50+ PROJECTS DELIVERED */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center px-4"
          >
            <span className="font-jakarta font-extrabold text-5xl lg:text-[64px] leading-none text-white tracking-tight">
              50+
            </span>
            <span className="font-medium text-[12px] uppercase text-slate-500 tracking-wider mt-2.5">
              PROJECTS DELIVERED
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
