import type { GrowthFeature } from "@/data/growthFeatures";

type GrowthFeatureProps = {
  feature: GrowthFeature;
};

export default function GrowthFeature({
  feature,
}: GrowthFeatureProps) {
  return (
    <article className="group border-b border-white/15 pb-6 last:border-b-0">
      <div className="flex gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime-300 text-sm font-black text-slate-950 transition group-hover:scale-105">
          {feature.icon}
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">
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