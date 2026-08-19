"use client";

import { MessageSquareQuote, Timer, CheckCircle2, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading, Reveal } from "@/components/ui";

export default function FairPrice() {
  const { t } = useI18n();
  const steps = [
    { icon: MessageSquareQuote, title: t("fair.step1T"), desc: t("fair.step1D") },
    { icon: Timer, title: t("fair.step2T"), desc: t("fair.step2D") },
    { icon: CheckCircle2, title: t("fair.step3T"), desc: t("fair.step3D") },
  ];

  return (
    <section id="pricing" className="bg-[#F7F8FC] py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={t("fair.kicker")} title={t("fair.title")} subtitle={t("fair.subtitle")} />

        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 md:flex-row md:gap-0">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="flex flex-1 items-center">
                <article className="group flex-1 rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-sm transition hover:-translate-y-1.5 hover:border-[#4346EE]/30 hover:shadow-lg">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#4346EE]/10 text-[#4346EE] transition group-hover:scale-110 group-hover:-rotate-3">
                    <s.icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <span className="mt-5 block text-xs font-extrabold uppercase tracking-widest text-[#9CA3AF]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-xl font-extrabold text-[#111827]">{s.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-[#6B7280]">{s.desc}</p>
                </article>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex md:px-3">
                    <ArrowRight className="h-6 w-6 flex-none text-[#4346EE]/40" aria-hidden="true" />
                  </div>
                )}
                {i < steps.length - 1 && (
                  <div className="block border-b-2 border-dashed border-[#E5E7EB] md:hidden" />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-2xl rounded-2xl border border-[#4346EE]/15 bg-[#4346EE]/5 px-6 py-4 text-center text-[0.95rem] font-semibold text-[#374151]">
            {t("fair.note")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
