'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData, FaqItem } from '@/data/serviceAiData';

const AccordionItem: React.FC<{
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[#E4E7EC] py-5">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group focus:outline-none"
      >
        <span className="font-['Poppins',sans-serif] font-medium text-[16px] sm:text-[17px] text-[#0F172A] group-hover:text-[#14B8A6] transition-colors">
          {item.question}
        </span>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
            isOpen
              ? 'bg-[#14B8A6] border-[#14B8A6] text-white rotate-45'
              : 'bg-white border-[#CBD5E1] text-[#64748B] group-hover:border-[#14B8A6]'
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-['Inter',sans-serif] text-[14px] leading-[24px] text-[#64748B] pt-4 pr-6">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export interface FaqSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: FaqItem[];
  ctaText?: string;
  ctaHref?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  eyebrow = 'FAQ',
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about our AI engineering methodology, data sovereignty, and delivery timelines.',
  items = faqData,
  ctaText = "Let's Talk",
  ctaHref = '/contact',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F5F7FA] py-20 lg:py-[100px] px-6 sm:px-8 lg:px-12">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column with scroll reveal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 w-full max-w-lg min-w-0"
          >
            <span className="font-['Poppins',sans-serif] font-semibold text-[14px] uppercase tracking-wider text-[#14B8A6] block mb-3">
              {eyebrow}
            </span>
            <h2 className="font-['Poppins',sans-serif] font-semibold text-3xl sm:text-[38px] leading-tight text-[#0F172A] mb-4">
              {title}
            </h2>
            <p className="font-['Inter',sans-serif] text-[15px] leading-[25px] text-[#64748B] mb-8">
              {subtitle}
            </p>

            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center bg-[#14B8A6] hover:bg-[#0D938C] text-white font-['Poppins',sans-serif] font-semibold text-[14px] px-7 py-3 rounded-[24px] transition-all duration-200 shadow-md shadow-[#14B8A6]/20 hover:scale-[1.02]"
            >
              {ctaText}
            </Link>
          </motion.div>

          {/* Right Column (720px equivalent): Accordion Items with min-w-0 and scroll reveal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-7 w-full min-w-0 bg-white border border-[#E4E7EC] rounded-[20px] p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
          >
            {items.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                item={faq}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
