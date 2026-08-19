"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Globe, Handshake, ShieldCheck, Car, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Counter } from "@/components/ui";

type NegStep = "offer" | "counter" | "agreed";

export default function Hero() {
  const { t, lang } = useI18n();
  const [step, setStep] = useState<NegStep>("offer");

  useEffect(() => {
    const order: NegStep[] = ["offer", "counter", "agreed"];
    let idx = 0;
    const id = window.setInterval(() => {
      idx = (idx + 1) % order.length;
      setStep(order[idx]);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  const active = step === "agreed";

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(17,24,39,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,24,39,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
          }}
        />
        <span className="absolute -top-40 -start-28 h-[520px] w-[520px] rounded-full bg-[#4346EE]/15 blur-[70px]" />
        <span className="absolute -top-24 -end-36 h-[460px] w-[460px] rounded-full bg-indigo-400/10 blur-[70px]" />
      </div>

      <div className="container-page relative grid grid-cols-1 items-center gap-12 py-14 md:py-20 lg:grid-cols-12">
        <div className="space-y-7 lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#4346EE]/15 bg-[#4346EE]/5 px-4 py-2 text-xs font-bold text-[#4346EE]">
            {t("hero.badge")}
          </span>

          <h1 className="text-4xl font-black leading-[1.15] text-[#111827] md:text-6xl">
            {t("hero.titleA")}
            <br />
            <span className="grad-text">{t("hero.titleB")}</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-[#6B7280]">{t("hero.subtitle")}</p>

          <div className="flex flex-wrap gap-4 pt-1" id="download">
            <a
              href="https://inride.ai.dz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#4346EE] px-7 py-4 text-base font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#3639D6]"
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              {t("hero.ctaPwa")}
            </a>
            <a
              href="https://inride.ai.dz/?lang=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-[#E5E7EB] bg-white px-7 py-4 text-base font-bold text-[#111827] shadow-sm transition hover:-translate-y-0.5 hover:border-[#4346EE] hover:text-[#4346EE]"
            >
              <Globe className="h-5 w-5" aria-hidden="true" />
              {t("hero.ctaWeb")}
            </a>
          </div>

          <div className="grid max-w-xl grid-cols-3 gap-6 border-t border-[#E5E7EB] pt-8">
            <div>
              <strong className="block text-2xl font-black text-[#111827] md:text-3xl">
                <Counter value={15000} prefix="+" />
              </strong>
              <span className="text-sm font-semibold text-[#6B7280]">{t("hero.statsRides")}</span>
            </div>
            <div>
              <strong className="block text-2xl font-black text-[#111827] md:text-3xl">
                <Counter value={4.9} decimals={1} suffix=" / 5" />
              </strong>
              <span className="text-sm font-semibold text-[#6B7280]">{t("hero.statsRating")}</span>
            </div>
            <div>
              <strong className="block text-2xl font-black text-[#111827] md:text-3xl">
                <Counter value={58} />
              </strong>
              <span className="text-sm font-semibold text-[#6B7280]">{t("hero.statsWilayas")}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:col-span-5">
          <div className="relative w-[340px]">
            <div className="absolute -inset-8 rounded-[50%] bg-[#4346EE]/8 blur-3xl" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-[44px] border-8 border-[#0B1020] bg-[#0B1020] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3),0_10px_20px_-10px_rgba(67,70,238,0.15)]">
              <div className="absolute left-1/2 top-3 z-30 h-4 w-28 -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />

              <div className="flex h-[600px] flex-col justify-end bg-gradient-to-b from-[#4346EE]/5 via-indigo-50 to-slate-100 p-3 pt-12">
                <div className="mb-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[0.68rem] font-bold text-[#111827] shadow-sm backdrop-blur">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#16A34A]" aria-hidden="true" />
                  <span className="text-[#16A34A]">{t("hero.phoneSos")}</span>
                </div>

                <div className="rounded-3xl border border-[#E5E7EB] bg-white p-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-[#4346EE] shadow-sm overflow-hidden">
                        <img src="/LOGO.png" alt="INRIDE AI" className="h-full w-full object-cover" width={36} height={36} />
                      </span>
                      <div>
                        <h3 className="text-xs font-bold text-[#111827]">{t("hero.phoneTitle")}</h3>
                        <p className="text-[10px] text-[#6B7280]">{t("hero.phoneSub")}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#4346EE]/10 px-2.5 py-1 text-[10px] font-bold text-[#4346EE]">
                      <Car className="h-3 w-3" aria-hidden="true" />
                      4 min
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-[#E5E7EB]/70 pt-3">
                    <div>
                      <span className="block text-[10px] text-[#9CA3AF]">{t("hero.phoneFareLabel")}</span>
                      <span className="text-base font-black text-[#111827]">{t("hero.negDone")}</span>
                    </div>
                    <button
                      type="button"
                      className="rounded-xl bg-[#DC2626]/5 px-3 py-1.5 text-[11px] font-bold text-[#DC2626] transition hover:bg-[#DC2626]/10"
                    >
                      {t("hero.phoneCancel")}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -start-4 top-[16%] z-30 rounded-2xl border border-[#E5E7EB] bg-white/90 p-3 shadow-lg backdrop-blur">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#4346EE]/10 text-[#4346EE]">
                  <Handshake className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-wide text-[#9CA3AF]">{t("hero.negChip")}</p>
                  <p className="text-[0.72rem] font-extrabold text-[#111827]" key={lang}>{t("hero.negYou")}</p>
                </div>
              </div>

              <div className="mt-2 min-h-[84px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-1.5"
                  >
                    <p className="text-[0.72rem] font-bold text-[#374151]">
                      {step === "offer" && t("hero.negYouOffer")}
                      {step === "counter" && t("hero.negDriverOffer")}
                      {step === "agreed" && `${t("hero.negAgreedLabel")} · ${t("hero.negDone")}`}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.62rem] font-extrabold ${
                        active ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#4346EE]/10 text-[#4346EE]"
                      }`}
                    >
                      {active ? (
                        <>
                          <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                          {t("hero.negAgreed")}
                        </>
                      ) : (
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" aria-hidden="true" />
                      )}
                      {!active && (step === "offer" ? t("hero.negProposed") : t("hero.negCounter"))}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="absolute -end-2 bottom-[12%] z-30 inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white/85 px-3 py-2 text-[0.7rem] font-bold text-[#111827] shadow-md backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-[#4346EE]" aria-hidden="true" />
              <span>{t("hero.phoneSos")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
