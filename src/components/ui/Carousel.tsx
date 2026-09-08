"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({ children, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === children.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Slide Item Container */}
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, idx) => (
          <div key={idx} className="w-full shrink-0 px-2">
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6">
        {/* Left Arrow */}
        <button
          onClick={prev}
          aria-label="Previous Slide"
          className="p-2.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-emerald-600 transition-colors shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Indicators / Dots */}
        <div className="flex gap-2">
          {children.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={cn(
                "h-2.5 rounded-full transition-all duration-200",
                currentIndex === dotIdx ? "w-7 bg-emerald-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              )}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          aria-label="Next Slide"
          className="p-2.5 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-emerald-600 transition-colors shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};