import {
  Activity,
  Award,
  Building2,
  ConciergeBell,
  GraduationCap,
  Landmark,
  Layers,
  Lightbulb,
  PhoneCall,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  Star,
  Target,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Name -> component lookup for icons referenced from `src/data/*.ts`. Data files store the
 * string key (serializable, CMS/API-safe) rather than the icon component itself, so that data
 * shape stays a drop-in match for a real backend response — components can't travel over JSON.
 * Resolve a key to a component with `getIcon()` at the point a page passes data into a section.
 */
export const ICONS = {
  activity: Activity,
  award: Award,
  "building-2": Building2,
  "concierge-bell": ConciergeBell,
  "graduation-cap": GraduationCap,
  landmark: Landmark,
  layers: Layers,
  lightbulb: Lightbulb,
  "phone-call": PhoneCall,
  "refresh-cw": RefreshCw,
  "shield-check": ShieldCheck,
  "shopping-bag": ShoppingBag,
  star: Star,
  target: Target,
  users: Users,
  zap: Zap,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

export function getIcon(name: IconName): LucideIcon {
  return ICONS[name];
}
