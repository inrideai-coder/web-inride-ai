"use client";

import { Smartphone, PhoneCall, MapPin, Wallet, Handshake, Radar, Star, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading, Reveal } from "@/components/ui";

export default function RiderExperience() {
  const { t } = useI18n();
  const steps = [
    { icon: Smartphone, title: t("rider.s1"), desc: t("rider.s1D") },
    { icon: PhoneCall, title: t("rider.s2"), desc: t("rider.s2D") },
    { icon: MapPin, title: t("rider.s3"), desc: t("rider.s3D") },
    { icon: Wallet, title: t("rider.s4"), desc: t("rider.s4D") },
    { icon: Handshake, title: t("rider.s5"), desc: t("rider.s5D") },
    { icon: Radar, title: t("rider.s6"), desc: t("rider.s6D") },
    { icon: Star, title: t("rider.s7"), desc: t("rider.s7D") },
  ];

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={t("rider.kicker")} title={t("rider.title")} subtitle={t("rider.subtitle")} />

        <div className="mx-auto max-w-6xl overflow-x-auto pb-4">
          <ol className="flex min-w-[700px] items-start gap-2">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={(i % 7) * 80}>
                <li className="relative flex flex-1 flex-col items-center text-center">
                  <div className="relative">
                    <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border-2 border-[#4346EE]/20 bg-[#4346EE]/10 text-[#4346EE]">
                      <s.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="absolute -top-2 -right-2 z-20 grid h-6 w-6 place-items-center rounded-full bg-[#4346EE] text-[0.6rem] font-black text-white">
                      {i + 1}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="absolute left-[calc(50%+32px)] top-7 hidden h-0.5 w-[calc(100%-64px)] bg-gradient-to-r from-[#4346EE]/30 to-[#4346EE]/10 md:block" />
                  )}
                  <h3 className="mt-4 text-sm font-extrabold text-[#111827]">{s.title}</h3>
                  <p className="mt-1.5 max-w-[140px] text-[0.8rem] text-[#6B7280]">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={200}>
          <div className="mt-8 flex justify-center">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-[#4346EE] px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#3639D6]"
            >
              INRIDE AI
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
