'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { ServiceHeroData } from '@/data/servicesData';
import { CloudTopologyGraphic } from './CloudTopologyGraphic';

export interface AiHeroSectionProps {
  data?: Partial<ServiceHeroData>;
}

export const AiHeroSection: React.FC<AiHeroSectionProps> = ({ data }) => {
  const badge = data?.badge || 'ARTIFICIAL INTELLIGENCE';
  const heading = data?.heading || 'AI That Ships to Production, Not Just to Slides.';
  const subtitle =
    data?.subtitle ||
    'Unlock true competitive advantage. We pair production-ready agentic workflows with bulletproof data foundations to deliver tangible business outcomes.';
  const ctaText = data?.ctaText || 'Explore AI Transformation';
  const ctaHref = data?.ctaHref || '#what-we-deliver';
  const activeBadgeText = data?.activeBadgeText;
  const hasGridBg = data?.hasGridBg || false;

  const [bgSrc, setBgSrc] = useState<string>(
    data?.bgSrc || '/images/services/hero-section-AI.png'
  );
  const [rightSrc, setRightSrc] = useState<string>(
    data?.imageSrc || '/images/services/hero-right-AI.png'
  );

  useEffect(() => {
    if (data?.bgSrc) setBgSrc(data.bgSrc);
  }, [data?.bgSrc]);

  useEffect(() => {
    if (data?.imageSrc) setRightSrc(data.imageSrc);
  }, [data?.imageSrc]);

  return (
    <section className="relative w-full min-h-[680px] bg-[#0F172A] overflow-hidden flex items-center justify-center pt-[110px] pb-16 lg:pt-[124px] lg:pb-16">
      {/* Background: Image or Ambient Dark Grid Background */}
      {hasGridBg ? (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#14B8A6]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#3B82F6]/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgSrc}
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
            onError={() => {
              if (bgSrc !== '/images/services/ai/hero-ai.jpg') {
                setBgSrc('/images/services/ai/hero-ai.jpg');
              }
            }}
          />
          {/* Subtle dark tint */}
          <div className="absolute inset-0 bg-black/20 z-0" />
        </div>
      )}

      <div className="relative w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-16">
          {/* Hero Left (w-full lg:max-w-[58%] xl:max-w-[62%]) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full lg:max-w-[58%] xl:max-w-[62%] flex flex-col items-start z-10"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-[rgba(20,184,166,0.1)] border border-[#14B8A6]/40 px-3.5 py-1 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[11px] uppercase tracking-[1px] text-[#14B8A6]">
                {badge}
              </span>
            </div>

            {/* Heading: (Poppins 700, 52px, line-height 60px, #FFFFFF) */}
            <h1 className="font-['Poppins',sans-serif] font-bold text-4xl sm:text-5xl lg:text-[52px] leading-[1.15] lg:leading-[60px] text-[#FFFFFF] tracking-tight mb-6">
              {heading}
            </h1>

            {/* Paragraph: (Poppins 400, 18px, line-height 28px) */}
            <p className="font-['Poppins',sans-serif] font-normal text-[16px] lg:text-[18px] leading-[28px] text-[#BEC9D7] mb-9 w-full max-w-2xl">
              {subtitle}
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center bg-[#14B8A6] hover:bg-[#0D938C] text-white font-['Poppins',sans-serif] font-semibold text-[14px] px-[24px] py-[12px] rounded-[24px] transition-all duration-200 shadow-lg shadow-[#14B8A6]/30 hover:scale-[1.02]"
              >
                {ctaText}
              </Link>
            </div>
          </motion.div>

          {/* Hero Right: w-full max-w-[440px] lg:max-w-[480px] xl:max-w-[520px] 2xl:max-w-[540px] aspect-square */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="w-full max-w-[440px] lg:max-w-[480px] xl:max-w-[520px] 2xl:max-w-[540px] aspect-square flex justify-center lg:justify-end z-10 shrink-0"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-[#14B8A6]/40 bg-[#0B1221] shadow-[0_0_50px_rgba(20,184,166,0.25)] group">
              {/* Graphic Visual */}
              {data?.heroGraphicType === 'cloud-topology' ? (
                <CloudTopologyGraphic activeBadgeText={activeBadgeText} />
              ) : (
                <>
                  <Image
                    src={rightSrc}
                    alt={heading}
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={() => {
                      if (data?.fallbackSrc && rightSrc !== data.fallbackSrc) {
                        setRightSrc(data.fallbackSrc);
                      } else if (rightSrc !== '/images/services/ai/hero-ai.jpg') {
                        setRightSrc('/images/services/ai/hero-ai.jpg');
                      }
                    }}
                  />
                  {/* System Active Badge (Optional) */}
                  {activeBadgeText && (
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1221]/80 border border-[#14B8A6]/60 backdrop-blur-md shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
                        <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[11px] uppercase tracking-wider text-[#14B8A6]">
                          {activeBadgeText}
                        </span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AiHeroSection;
