import type { GrowthFeature } from "@/data/growthFeatures";

type GrowthFeatureProps = {
  feature: GrowthFeature;
};

export default function GrowthFeature({
  feature,
}: GrowthFeatureProps) {
  return (
    <article className="group border-b border-white/15 pb-7 last:border-b-0 last:pb-0">
      <div className="flex gap-5">
        {/* Icon */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#B8FF3D] text-sm font-black text-slate-950 shadow-lg transition duration-300 group-hover:rotate-3 group-hover:scale-105">
          {feature.icon}
        </div>

        {/* Content */}
        <div className="pt-1">
          <h3 className="text-lg font-black tracking-tight text-white sm:text-xl">
            {feature.title}
          </h3>

          <p className="mt-2 max-w-lg text-sm leading-6 text-blue-100">
            {feature.description}
          </p>
        </div>
      </div>
    </article>
  );
}