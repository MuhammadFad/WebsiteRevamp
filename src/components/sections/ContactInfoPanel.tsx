import { Mail, MapPin, Phone } from "lucide-react";

export type ContactInfoPanelProps = {
  kicker: string;
  className?: string;
};

const CONTACT_DETAILS = [
  { icon: MapPin, label: "Global HQ", value: "Gujranwala, Pakistan" },
  { icon: Mail, label: "Electronic Mail", value: "global@devlogix.com.pk" },
  { icon: Phone, label: "Secure Line", value: "+92 332 000 5121" },
];

/**
 * "Reach us directly" contact details — pulled out of ContactHero so it sits beside the form
 * instead of on the hero. Same white-card-on-elevated-section treatment as the form card next to
 * it (not the earlier dark glass panel) so the two read as one consistent pairing.
 */
export default function ContactInfoPanel({ kicker, className = "" }: ContactInfoPanelProps) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-6 sm:p-8 ${className}`}
    >
      <p className="text-2xl font-bold text-slate-900">{kicker}</p>
      {/* text-slate-600, not the "Body Mid" slate-500 token — slate-500 on white measures
          3.58-3.67:1 under axe, well under the 4.5:1 AA threshold; slate-600 clears it. */}
      <p className="mt-1 text-sm font-semibold text-slate-600">Reach us directly</p>

      <div className="mt-6 flex flex-col gap-5">
        {CONTACT_DETAILS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal-dark">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <div>
              {/* text-slate-600 — slate-500 fails AA contrast on white at this size, see the
                  note on the "Reach us directly" line above */}
              <p className="text-xs font-semibold tracking-[0.14em] text-slate-600 uppercase">
                {label}
              </p>
              <p className="mt-0.5 text-sm text-slate-900">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
