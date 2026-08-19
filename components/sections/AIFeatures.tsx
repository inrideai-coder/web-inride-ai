"use client";

import { Wallet, Clock, ShieldAlert, Route, Radar, BotMessageSquare } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading, Reveal } from "@/components/ui";

export default function AIFeatures() {
  const { t } = useI18n();
  const features = [
    { icon: Wallet, title: t("ai.f1T"), desc: t("ai.f1D") },
    { icon: Clock, title: t("ai.f2T"), desc: t("ai.f2D") },
    { icon: ShieldAlert, title: t("ai.f3T"), desc: t("ai.f3D") },
    { icon: Route, title: t("ai.f4T"), desc: t("ai.f4D") },
    { icon: Radar, title: t("ai.f5T"), desc: t("ai.f5D") },
    { icon: BotMessageSquare, title: t("ai.f6T"), desc: t("ai.f6D") },
  ];

  return (
    <section id="ai" className="bg-[#F7F8FC] py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={t("ai.kicker")} title={t("ai.title")} subtitle={t("ai.subtitle")} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100}>
              <article className="group h-full rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-sm transition hover:-translate-y-1.5 hover:border-[#4346EE]/30 hover:shadow-lg">
                <div className="relative">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#4346EE]/10 text-[#4346EE] transition group-hover:scale-110 group-hover:-rotate-3">
                    <f.icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  {i === 0 && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4346EE] opacity-40" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-[#4346EE]" />
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-[#111827]">{f.title}</h3>
                <p className="mt-2 text-[0.95rem] text-[#6B7280]">{f.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
