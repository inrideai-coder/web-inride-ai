"use client";

import { ShieldCheck, FileCheck, Headphones, CreditCard } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Counter, Reveal } from "@/components/ui";

export default function TrustBar() {
  const { t } = useI18n();

  const stats = [
    { value: 15000, prefix: "+", label: t("trust.stat1") },
    { value: 4.9, decimals: 1, suffix: " / 5", label: t("trust.stat2") },
    { value: 58, label: t("trust.stat3") },
    { value: 1000, prefix: "+", label: t("trust.stat4") },
  ];

  const badges = [
    { icon: ShieldCheck, text: t("trust.trust1") },
    { icon: FileCheck, text: t("trust.trust2") },
    { icon: Headphones, text: t("trust.trust3") },
    { icon: CreditCard, text: t("trust.trust4") },
  ];

  return (
    <section className="border-y border-[#E5E7EB] bg-[#F7F8FC] py-12 md:py-16">
      <div className="container-page">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <strong className="block text-3xl font-black text-[#111827] md:text-4xl">
                  <Counter
                    value={s.value}
                    decimals={s.decimals}
                    prefix={s.prefix}
                    suffix={s.suffix}
                  />
                </strong>
                <span className="mt-1 block text-sm font-semibold text-[#6B7280]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {badges.map((b) => (
              <span
                key={b.text}
                className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#374151]"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#4346EE]/10 text-[#4346EE]">
                  <b.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {b.text}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
