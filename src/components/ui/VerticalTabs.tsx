"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface VerticalTabsProps {
  items: TabItem[];
  className?: string;
}

export const VerticalTabs: React.FC<VerticalTabsProps> = ({ items, className }) => {
  const [activeTab, setActiveTab] = useState(items[0]?.id);

  const activeContent = items.find((item) => item.id === activeTab)?.content;

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-12 gap-8 items-start", className)}>
      {/* Side List */}
      <div className="md:col-span-4 flex flex-col divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
        {items.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "relative flex items-center justify-between p-4 text-left text-sm font-semibold transition-colors duration-150",
                isActive
                  ? "bg-slate-50 text-emerald-600"
                  : "text-slate-700 hover:bg-slate-50/70"
              )}
            >
              {/* Active Green Bar */}
              {isActive && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600" />
              )}
              <span className={cn(isActive && "pl-2")}>{item.label}</span>
              <svg
                className={cn("w-4 h-4 transition-transform", isActive ? "text-emerald-600 translate-x-0.5" : "text-slate-400")}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          );
        })}
      </div>

      {/* Detail Panel */}
      <div className="md:col-span-8 bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl min-h-[300px]">
        {activeContent}
      </div>
    </div>
  );
};