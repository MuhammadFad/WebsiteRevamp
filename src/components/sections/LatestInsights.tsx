import Link from "next/link";
import { latestInsights } from "@/data/servicesPageData";

export default function LatestInsights() {
  return (
    <section className="w-full bg-[#F8FAFC] py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-12">
        <h2 className="text-[#0F172A] font-bold text-3xl sm:text-[32px] leading-[48px] font-['Poppins']">
          Latest Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestInsights.map((item, idx) => (
            <article
              key={idx}
              className="bg-[#FFFFFF] border border-[#E4E7EC] rounded-[16px] overflow-hidden shadow-[0px_4px_16px_rgba(15,35,42,0.06)] flex flex-col justify-between"
            >
              <div className="w-full h-[220px] bg-slate-900/10 border-b border-[#E4E7EC]" />
              <div className="p-7 flex flex-col gap-5 flex-grow justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#F0FDFA] text-[#14B8A6] text-[11px] font-bold uppercase px-2.5 py-1 rounded-[12px] font-['Plus_Jakarta_Sans']">
                      {item.tag}
                    </span>
                    <span className="text-[#94A3B8] text-[13px] font-['Inter']">{item.date}</span>
                  </div>
                  <h3 className="text-[#0F172A] font-semibold text-[18px] leading-[26px] font-['Poppins']">
                    {item.title}
                  </h3>
                  <p className="text-[#475467] text-[14px] leading-[22px] font-['Poppins']">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4E7EC] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200" />
                    <span className="text-[#0F172A] font-semibold text-[13px] font-['Inter']">
                      {item.author}
                    </span>
                  </div>
                  <Link
                    href="#"
                    className="text-[#14B8A6] font-bold text-[14px] font-['Plus_Jakarta_Sans'] hover:underline"
                  >
                    Read Transmission &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}