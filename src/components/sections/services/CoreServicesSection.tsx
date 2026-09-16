'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { coreServicesData, ServiceItem } from '@/data/servicesPageData';

const ServiceIcon: React.FC<{ type: ServiceItem['iconType'] }> = ({ type }) => {
  switch (type) {
    case 'code':
      return (
        <svg className="w-5 h-5 text-[#14B8A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case 'design':
      return (
        <svg className="w-5 h-5 text-[#14B8A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4 4 4 0 014-4c1.1 0 2.1.4 2.8 1.1L19 4.3a1 1 0 011.4 0l1.3 1.3a1 1 0 010 1.4L12.3 16.4c-.7.7-1.1 1.7-1.1 2.8a4 4 0 01-4 4z"
          />
        </svg>
      );
    case 'ai':
      return (
        <svg className="w-5 h-5 text-[#14B8A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      );
    case 'transform':
      return (
        <svg className="w-5 h-5 text-[#14B8A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      );
    case 'cloud':
      return (
        <svg className="w-5 h-5 text-[#14B8A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export const CoreServicesSection: React.FC = () => {
  const topRow = coreServicesData.slice(0, 3);
  const bottomRow = coreServicesData.slice(3, 5);

  return (
    <section className="relative w-full overflow-hidden bg-[#FFFFFF] py-20 lg:py-[100px] px-6 sm:px-8 lg:px-12">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
        {/* Header with smooth scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="font-['Poppins',sans-serif] font-bold text-[14px] text-[#14B8A6] tracking-widest uppercase block mb-2">
            DISCOVER MORE
          </span>
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[32px] sm:text-[40px] text-[#0F172A] tracking-tight">
            OUR CORE SERVICES
          </h2>
        </motion.div>

        {/* Top Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-8">
          {topRow.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full min-w-0 max-w-[384px] min-h-[281px] bg-white border border-[#E4E7EC] rounded-[12px] p-8 flex flex-col justify-between shadow-[0_4px_16px_rgba(15,35,42,0.06)] hover:shadow-xl hover:border-[#14B8A6]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* 44x44px teal tint icon box */}
                <div className="w-[44px] h-[44px] rounded-lg bg-[#F0FDFA] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ServiceIcon type={service.iconType} />
                </div>

                {/* Title (Poppins 600, 20px) */}
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[20px] text-[#0F172A] mb-3 group-hover:text-[#14B8A6] transition-colors">
                  {service.title}
                </h3>

                {/* Description (14px, #475467) */}
                <p className="font-['Inter',sans-serif] text-[14px] leading-[22px] text-[#475467]">
                  {service.description}
                </p>
              </div>

              {/* Footer link Learn more → (#14B8A6, Inter 600, 14px) pointing to /services/[slug] */}
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 font-['Inter',sans-serif] font-semibold text-[14px] text-[#14B8A6] hover:text-[#0D938C] transition-colors mt-6 pt-2"
              >
                <span>Learn more</span>
                <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row: 2 Cards Centered */}
        <div className="flex flex-wrap justify-center gap-8">
          {bottomRow.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="w-full min-w-0 max-w-[384px] min-h-[281px] bg-white border border-[#E4E7EC] rounded-[12px] p-8 flex flex-col justify-between shadow-[0_4px_16px_rgba(15,35,42,0.06)] hover:shadow-xl hover:border-[#14B8A6]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* 44x44px teal tint icon box */}
                <div className="w-[44px] h-[44px] rounded-lg bg-[#F0FDFA] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ServiceIcon type={service.iconType} />
                </div>

                {/* Title (Poppins 600, 20px) */}
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[20px] text-[#0F172A] mb-3 group-hover:text-[#14B8A6] transition-colors">
                  {service.title}
                </h3>

                {/* Description (14px, #475467) */}
                <p className="font-['Inter',sans-serif] text-[14px] leading-[22px] text-[#475467]">
                  {service.description}
                </p>
              </div>

              {/* Footer link Learn more → (#14B8A6, Inter 600, 14px) pointing to /services/[slug] */}
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 font-['Inter',sans-serif] font-semibold text-[14px] text-[#14B8A6] hover:text-[#0D938C] transition-colors mt-6 pt-2"
              >
                <span>Learn more</span>
                <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
