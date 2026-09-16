'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { innovationTabsData, InnovationTab } from '@/data/serviceAiData';

export interface InnovationServicesSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  tabs?: InnovationTab[];
}

export const InnovationServicesSection: React.FC<InnovationServicesSectionProps> = ({
  eyebrow = 'WHAT WE DELIVER',
  title = 'AI & Data Innovation Services',
  subtitle = 'We embed intelligence deep into your engineering workflow, moving you past generic chatbots.',
  tabs = innovationTabsData,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0]?.id || 'data-engineering');
  const [activeDot, setActiveDot] = useState<number>(0);

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section id="what-we-deliver" className="relative w-full overflow-hidden bg-white py-20 lg:py-[100px] px-6 sm:px-8 lg:px-12">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
        {/* Section Header with smooth scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 max-w-[840px] mx-auto"
        >
          <span className="font-['Poppins',sans-serif] font-semibold text-[14px] uppercase tracking-wider text-brand-teal-hover block mb-3">
            {eyebrow}
          </span>
          <h2 className="font-['Poppins',sans-serif] font-semibold text-3xl sm:text-[40px] leading-tight sm:leading-[52px] text-brand-card mb-4">
            {title}
          </h2>
          <p className="font-['Inter',sans-serif] text-[15px] sm:text-[16px] leading-[26px] text-slate-600">
            {subtitle}
          </p>
        </motion.div>

        {/* Interactive Filter Pills with scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-14 lg:mb-16"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTabId(tab.id);
                  setActiveDot(0);
                }}
                className={`px-6 py-2.5 rounded-full font-['Inter',sans-serif] font-medium text-[14px] transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-brand-teal-fill text-white shadow-md shadow-[var(--color-brand-teal-hover)]/25'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-200 hover:text-brand-card'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Two-Column Feature Split matching User Spec */}
        <div className="w-full">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6 w-full min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-2xl sm:text-[32px] leading-tight text-brand-card mb-5">
                    {activeTab.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] text-[15px] leading-[26px] text-slate-600 mb-8 w-full max-w-xl">
                    {activeTab.description}
                  </p>

                  {/* 3 bullet items with teal checkmarks */}
                  <ul className="space-y-4">
                    {activeTab.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="w-4 h-4 text-brand-teal-hover shrink-0 mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[22px] text-brand-card">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center w-full min-w-0">
              <div className="relative w-full h-[380px] lg:h-[420px] rounded-2xl overflow-hidden bg-brand-card shadow-lg group">
                <Image
                  src={activeTab.imageSrc}
                  alt={activeTab.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationServicesSection;
