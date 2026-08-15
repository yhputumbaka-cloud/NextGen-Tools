import { TIER_CONFIG, type GuideTier } from "@/lib/guide-constants";

export default function TierTag({ tier }: { tier: GuideTier }) {
  const { label, color } = TIER_CONFIG[tier];

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-body-soft">
      <span
        className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[4px] text-[10px] font-semibold text-white"
        style={{ backgroundColor: color }}
      >
        {tier}
      </span>
      {label}
    </span>
  );
}
