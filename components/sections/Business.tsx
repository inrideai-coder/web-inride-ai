"use client";

import {
  Building2,
  ReceiptText,
  Blocks,
  Users,
  BarChart3,
  LifeBuoy,
  Percent,
  ArrowUpRight,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading, Reveal } from "@/components/ui";

export default function Business() {
  const { t } = useI18n();
  const items = [
    { icon: Building2, text: t("business.i1") },
    { icon: ReceiptText, text: t("business.i2") },
    { icon: Blocks, text: t("business.i3") },
    { icon: Users, text: t("business.i4") },
    { icon: BarChart3, text: t("business.i5") },
    { icon: LifeBuoy, text: t("business.i6") },
    { icon: Percent, text: t("business.i7") },
  ];

  return (
    <section id="business" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={t("business.kicker")} title={t("business.title")} subtitle={t("business.subtitle")} />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((b, i) => (
            <Reveal key={b.text} delay={(i % 4) * 80}>
              <div className="flex h-full items-start gap-3.5 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm transition hover:border-[#4346EE]/30 hover:shadow-md">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-[#4346EE]/10 text-[#4346EE]">
                  <b.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="font-semibold text-[#374151]">{b.text}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={240}>
            <a
              href="mailto:inrideai@gmail.com"
              className="flex h-full min-h-[76px] items-center justify-between gap-2 rounded-2xl bg-gradient-to-r from-[#4346EE] to-[#3639D6] p-5 text-white shadow-glow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="font-extrabold">{t("business.cta")}</span>
              <ArrowUpRight className="h-5 w-5 flex-none" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
