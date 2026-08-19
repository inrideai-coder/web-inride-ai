"use client";

import { useEffect, useState } from "react";
import {
  Wallet,
  Banknote,
  CalendarCheck,
  Headphones,
  Sparkles,
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  Car,
  Navigation,
  MapPin,
  Clock,
  Star,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui";

export default function Driver() {
  const { t } = useI18n();
  const benefits = [
    { icon: Wallet, text: t("driver.b1") },
    { icon: Banknote, text: t("driver.b2") },
    { icon: CalendarCheck, text: t("driver.b3") },
    { icon: Banknote, text: t("driver.b4") },
    { icon: Headphones, text: t("driver.b5") },
    { icon: Sparkles, text: t("driver.b6") },
  ];

  const steps = [
    t("driver.verStep1"),
    t("driver.verStep2"),
    t("driver.verStep3"),
    t("driver.verStep4"),
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setActive((v) => Math.min(v + 1, steps.length - 1)),
      2400,
    );
    return () => window.clearInterval(id);
  }, [steps.length]);

  return (
    <section id="drivers" className="bg-[#F7F8FC] py-20 md:py-28">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#4346EE]/15 bg-[#4346EE]/5 px-4 py-2 text-xs font-bold text-[#4346EE]">
            {t("driver.kicker")}
          </span>
          <h2 className="mb-4 mt-4 text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            {t("driver.title")}
          </h2>
          <p className="mb-8 max-w-xl text-lg text-[#6B7280]">{t("driver.subtitle")}</p>

          <ul className="grid gap-3">
            {benefits.map((b, i) => (
              <Reveal key={b.text} delay={i * 60}>
                <li className="flex items-start gap-3.5 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm transition hover:border-[#4346EE]/30 hover:shadow-md">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-[#4346EE]/10 text-[#4346EE]">
                    <b.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-semibold text-[#374151]">{b.text}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <a
              href="https://inride.ai.dz/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#4346EE] px-7 py-4 text-base font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#3639D6]"
            >
              <FileCheck2 className="h-5 w-5" aria-hidden="true" />
              {t("driver.cta")}
            </a>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[50%] bg-[#4346EE]/10 blur-2xl" aria-hidden="true" />

            <div className="relative rounded-3xl border-8 border-[#0B1020] bg-[#0B1020] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]">
              <div className="absolute left-1/2 top-3 z-30 h-4 w-28 -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
              <div className="flex h-[420px] flex-col justify-between bg-gradient-to-b from-[#4346EE]/5 via-indigo-50 to-slate-100 p-4 pt-12">
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-2xl bg-white/90 p-3 shadow-sm backdrop-blur">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#16A34A] text-white">
                        <Car className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-bold text-[#111827]">Yacine B.</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-[#F59E0B] text-[#F59E0B]" />
                          <span className="text-[10px] font-bold text-[#6B7280]">4.9</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-black text-[#111827]">2,450 DZD</span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-white/80 p-2.5 text-[10px] font-bold text-[#374151] shadow-sm">
                    <Navigation className="h-4 w-4 text-[#4346EE]" />
                    <span className="flex-1 truncate">Centre-ville → Bab Ezzouar</span>
                    <span className="text-[#6B7280]">8.2 km</span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-white/80 p-2.5 text-[10px] font-bold text-[#374151] shadow-sm">
                    <Clock className="h-4 w-4 text-[#4346EE]" />
                    <span className="flex-1 truncate">Est. arrival</span>
                    <span className="font-black text-[#4346EE]">12 min</span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-white/80 p-2.5 text-[10px] font-bold text-[#374151] shadow-sm">
                    <MapPin className="h-4 w-4 text-[#4346EE]" />
                    <span className="flex-1 truncate">Today&apos;s earnings</span>
                    <span className="font-black text-[#16A34A]">8,200 DZD</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button type="button" className="flex-1 rounded-xl bg-[#16A34A] py-2.5 text-xs font-bold text-white shadow-md">
                    Accept Ride
                  </button>
                  <button type="button" className="rounded-xl bg-white/80 px-4 py-2.5 text-xs font-bold text-[#374151] shadow-sm">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
