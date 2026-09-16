import Link from "next/link";
import { coreServices } from "@/data/servicesPageData";

export default function CoreServicesGrid() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-[#14B8A6] font-bold text-[14px] leading-[21px] tracking-wider uppercase font-['Poppins']">
            DISCOVER MORE
          </span>
          <h2 className="text-[#0F172A] font-semibold text-3xl sm:text-[40px] leading-[60px] font-['Poppins']">
            OUR CORE SERVICES
          </h2>
        </div>

        {/* Grid: 3 top row, 2 bottom row centered */}
        <div className="w-full flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.slice(0, 3).map((svc) => (
              <ServiceCard key={svc.slug} service={svc} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-[792px] mx-auto w-full gap-6">
            {coreServices.slice(3, 5).map((svc) => (
              <ServiceCard key={svc.slug} service={svc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof coreServices)[0] }) {
  return (
    <div className="bg-[#FFFFFF] border border-[#E4E7EC] rounded-[12px] p-8 flex flex-col justify-between shadow-[0px_4px_16px_rgba(15,35,42,0.06)] min-h-[281px] hover:border-[#14B8A6]/60 hover:shadow-lg transition-all">
      <div className="flex flex-col gap-6">
        <div className="w-11 h-11 rounded-[10px] bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] font-bold">
          ✦
        </div>
        <div>
          <h3 className="text-[#0F172A] font-semibold text-[20px] leading-[30px] font-['Poppins'] mb-3">
            {service.title}
          </h3>
          <p className="text-[#475467] font-normal text-[14px] leading-[22px] font-['Poppins']">
            {service.desc}
          </p>
        </div>
      </div>
      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center gap-1.5 text-[#14B8A6] font-semibold text-[14px] font-['Inter'] mt-4 hover:gap-2.5 transition-all"
      >
        Learn more <span>&rarr;</span>
      </Link>
    </div>
  );
}