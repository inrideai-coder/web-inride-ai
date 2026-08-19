"use client";

import { Download, FileCheck2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui";

export default function FinalCTA() {
  const { t } = useI18n();

  return (
    <div className="container-page pb-20 md:pb-28">
      <Reveal>
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#4346EE] via-[#3639D6] to-indigo-500 px-6 py-16 text-center text-white shadow-[0_30px_60px_-25px_rgba(67,70,238,0.55)] md:px-16 md:py-24">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute right-[12%] top-[8%] h-64 w-64 rounded-full bg-white/15 blur-2xl" />
            <div className="absolute bottom-[6%] left-[8%] h-52 w-52 rounded-full bg-white/8 blur-2xl" />
          </div>

          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
              {t("finalCta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">{t("finalCta.subtitle")}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://inride.ai.dz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-bold text-[#4346EE] shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-50"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                {t("finalCta.cta")}
              </a>
              <a
                href="https://inride.ai.dz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/15 px-8 py-4 text-base font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/25"
              >
                <FileCheck2 className="h-5 w-5" aria-hidden="true" />
                {t("finalCta.ctaDriver")}
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
