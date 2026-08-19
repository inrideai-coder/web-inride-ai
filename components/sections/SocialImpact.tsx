"use client";

import { HandCoins, GraduationCap, Leaf, Cpu } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading, Reveal } from "@/components/ui";

export default function SocialImpact() {
  const { t } = useI18n();
  const items = [
    { icon: HandCoins, title: t("impact.i1"), desc: t("impact.i1D") },
    { icon: GraduationCap, title: t("impact.i2"), desc: t("impact.i2D") },
    { icon: Leaf, title: t("impact.i3"), desc: t("impact.i3D") },
    { icon: Cpu, title: t("impact.i4"), desc: t("impact.i4D") },
  ];

  return (
    <section id="impact" className="relative overflow-hidden bg-gradient-to-br from-[#0B1020] to-[#111827] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-[8%] top-[15%] h-[250px] w-[250px] rounded-full bg-[#4346EE]/8 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] h-[180px] w-[180px] rounded-full bg-emerald-500/8 blur-[80px]" />
      </div>

      <div className="container-page relative">
        <div className="mb-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#4346EE]/20 bg-[#4346EE]/10 px-4 py-2 text-xs font-bold text-[#4346EE]">
            🇩🇿 Algeria
          </span>
        </div>
        <SectionHeading
          title={t("impact.title")}
          subtitle={t("impact.subtitle")}
          className="[&_h2]:text-white [&_p]:text-white/70 [&_span]:border-white/10 [&_span]:text-white"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 90}>
              <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur transition hover:-translate-y-1.5 hover:border-[#4346EE]/30 hover:bg-white/8">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#4346EE]/15 text-[#4346EE]">
                  <it.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-white">{it.title}</h3>
                <p className="mt-2 text-[0.92rem] text-white/60">{it.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
