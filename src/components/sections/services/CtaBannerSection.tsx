'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const CtaBannerSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFFFFF] min-h-[273px] py-[70px] px-6 flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[860px] mx-auto flex flex-col items-center gap-4"
      >
        {/* Heading: HOW CAN WE HELP YOU? (Bold as requested) */}
        <h2 className="font-['Poppins',sans-serif] font-bold text-[30px] sm:text-[38px] lg:text-[42px] leading-tight uppercase tracking-tight text-[#000000]">
          HOW CAN WE HELP YOU?
        </h2>

        {/* Subtext: Are you ready to push boundaries... */}
        <p className="font-['Poppins',sans-serif] font-normal text-[17px] sm:text-[20px] lg:text-[22px] leading-relaxed text-[#1E293B] max-w-[760px]">
          Are you ready to push boundaries and explore new frontiers of innovation?
        </p>

        {/* CTA Button: LET’S WORK TOGETHER */}
        <Link
          href="/contact"
          className="mt-3 inline-flex items-center justify-center bg-[#14B8A6] hover:bg-[#0D938C] text-[#FFFFFF] font-['Poppins',sans-serif] font-bold text-[14px] sm:text-[15px] px-[36px] py-[14px] rounded-[6px] uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#14B8A6]/20 hover:scale-[1.02]"
        >
          LET’S WORK TOGETHER
        </Link>
      </motion.div>
    </section>
  );
};

export default CtaBannerSection;
