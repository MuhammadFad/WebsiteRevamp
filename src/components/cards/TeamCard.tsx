import Image from "next/image";

// lucide has no brand icons, so the LinkedIn logo is drawn here.
function LinkedinLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.5 9.5h5v12h-5v-12ZM10 9.5h4.8v1.6a5.2 5.2 0 0 1 4.7-2.4c3.4 0 4.5 2.2 4.5 5.6v7.2h-5v-6.4c0-1.5 0-3.5-2.2-3.5s-2.5 1.7-2.5 3.4v6.5h-4.3v-12Z" />
    </svg>
  );
}

export type TeamCardProps = {
  name: string;
  role: string;
  image?: string; 
  linkedin?: string;
  className?: string;
};

export default function TeamCard({
  name,
  role,
  image,
  linkedin,
  className = "",
}: TeamCardProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className={`h-full overflow-hidden rounded-2xl border border-slate-200 bg-white ${className}`}
    >
      <div className="relative aspect-4/3 w-full bg-[#E6F6F0]">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-[#16A97F]">
            {initials}
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-sm font-semibold text-[#0B1A2B] sm:text-base">
          {name}
        </h3>

        <p className="mt-1 text-[11px] leading-relaxed text-[#5B6B7C] sm:text-xs">
          {role}
        </p>

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-[#EAF1F8] px-2.5 py-1 text-[11px] font-medium text-[#0A66C2] transition-colors hover:bg-[#DCE8F4]"
          >
            <LinkedinLogo />
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
