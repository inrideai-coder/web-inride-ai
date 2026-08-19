"use client";

import {
  ShieldCheck,
  MapPin,
  Phone,
  Clock,
  HeartPulse,
  UserCheck,
  Lock,
  Camera,
  Headphones,
  AlertTriangle,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading, Reveal } from "@/components/ui";

export default function Safety() {
  const { t } = useI18n();
  const checks = [
    { icon: ShieldCheck, text: t("safety.c1") },
    { icon: MapPin, text: t("safety.c2") },
    { icon: Phone, text: t("safety.c3") },
    { icon: Clock, text: t("safety.c4") },
    { icon: HeartPulse, text: t("safety.c5") },
    { icon: UserCheck, text: t("safety.c6") },
    { icon: Lock, text: t("safety.c7") },
    { icon: Camera, text: t("safety.c8") },
    { icon: Headphones, text: t("safety.c9") },
  ];

  return (
    <section id="safety" className="relative overflow-hidden bg-gradient-to-br from-[#0B1020] to-[#111827] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-[5%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#4346EE]/10 blur-[100px]" />
        <div className="absolute bottom-[5%] left-[8%] h-[200px] w-[200px] rounded-full bg-[#4346EE]/8 blur-[80px]" />
      </div>

      <div className="container-page relative">
        <div className="mb-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#4346EE]/20 bg-[#4346EE]/10 px-4 py-2 text-xs font-bold text-[#4346EE]">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            {t("safety.kicker")}
          </span>
        </div>
        <SectionHeading
          title={t("safety.title")}
          subtitle={t("safety.subtitle")}
          className="[&_h2]:text-white [&_p]:text-white/70 [&_span]:border-white/10 [&_span]:text-white"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {checks.map((c, i) => (
            <Reveal key={c.text} delay={(i % 3) * 90}>
              <div className="flex h-full items-start gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-[#4346EE]/30 hover:bg-white/8">
                <span className="mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-lg bg-[#4346EE]/15 text-[#4346EE]">
                  <c.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="font-semibold text-white/80">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 text-center">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0B1020] shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              {t("safety.cta")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
