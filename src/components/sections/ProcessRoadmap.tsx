import { processSteps } from "@/data/servicesPageData";

export default function ProcessRoadmap() {
  return (
    <section className="w-full bg-[#0F172A] py-[100px] text-white">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-16">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-white font-bold text-3xl sm:text-[52px] leading-[78px] font-['Poppins']">
            The DevLogix Way
          </h2>
          <p className="text-[#94A3B8] text-[18px] leading-[28px] font-['Poppins']">
            A structured approach to chaos. We build, you scale.
          </p>
        </div>

        {/* Process Steps */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.num} className="flex flex-col items-start gap-4">
              <div className="w-[110px] h-[110px] rounded-full bg-gradient-to-bl from-[#0D938C] to-[#0F172A] shadow-[0px_4px_16px_rgba(0,0,0,0.25)] flex items-center justify-center text-white font-extrabold text-[34px] font-['Plus_Jakarta_Sans'] border border-[#14B8A6]/20">
                {step.num}
              </div>
              <h3 className="text-white font-semibold text-[20px] leading-[30px] font-['Poppins'] mt-2">
                {step.title}
              </h3>
              <p className="text-[#94A3B8] text-[14px] leading-[22px] font-['Poppins']">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}