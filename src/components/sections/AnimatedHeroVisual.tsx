"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedHeroVisual() {
  return (
    <div className="relative w-full h-[460px] flex items-center justify-center select-none">
      {/* 1. Ambient Background Glows */}
      <div className="absolute w-[320px] h-[320px] bg-[#14B8A6]/20 blur-[90px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute -bottom-10 -right-10 w-[240px] h-[240px] bg-[#3B82F6]/20 blur-[80px] rounded-full pointer-events-none" />

      {/* 2. Outer Rotating Dashed Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-[#14B8A6]/30 pointer-events-none"
      />

      {/* 3. Reverse Rotating Inner Geometric Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[290px] h-[290px] rounded-full border border-[#14B8A6]/20 pointer-events-none"
      >
        <div className="w-3 h-3 bg-[#14B8A6] rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_12px_#14B8A6]" />
        <div className="w-2.5 h-2.5 bg-[#3B82F6] rounded-full absolute -bottom-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#3B82F6]" />
      </motion.div>

      {/* 4. Center Framed Base Visual with Subtle Floating Motion */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-[360px] h-[360px] rounded-2xl p-[1px] bg-gradient-to-br from-[#14B8A6]/60 via-[#334155]/40 to-transparent shadow-[0_0_50px_rgba(20,184,166,0.15)]"
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0B1221]/90 backdrop-blur-md">
          {/* Main Hero Visual Graphic */}
          <Image
            src="/images/services/hero-graphic.png"
            alt="DevLogix Hero Visual"
            fill
            className="object-cover opacity-85 hover:scale-105 transition-transform duration-700"
            priority
          />

          {/* Cyan Grid Scanline Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#14B8A608_1px,transparent_1px),linear-gradient(to_bottom,#14B8A608_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Gradient Edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-transparent to-transparent opacity-70" />
        </div>
      </motion.div>

      {/* 5. Floating Modern Glass HUD Badges */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-4 bottom-14 z-20 bg-[#0F172A]/90 border border-[#14B8A6]/40 px-4 py-2.5 rounded-xl backdrop-blur-md shadow-xl flex items-center gap-3"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6] animate-ping" />
        <span className="text-[12px] font-semibold tracking-wider text-slate-200 uppercase font-['Plus_Jakarta_Sans']">
          Sovereign AI Ready
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-4 top-12 z-20 bg-[#0F172A]/90 border border-slate-700/80 px-4 py-2 rounded-xl backdrop-blur-md shadow-xl flex items-center gap-2.5"
      >
        <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
        <span className="text-[12px] font-medium text-slate-300">
          Latency: &lt;14ms
        </span>
      </motion.div>
    </div>
  );
}