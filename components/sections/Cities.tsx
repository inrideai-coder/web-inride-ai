"use client";

import { useState } from "react";
import { MapPin, Check, Clock, Search } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading, Reveal } from "@/components/ui";

export default function Cities() {
  const { t, dict } = useI18n();
  const [search, setSearch] = useState("");

  const cities = dict.cities.cities;
  const filtered = cities.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  const liveCount = cities.filter((c) => c.status === "live").length;

  return (
    <section id="cities" className="bg-[#F7F8FC] py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={t("cities.kicker")} title={t("cities.title")} subtitle={t("cities.subtitle")} />

        <Reveal delay={100}>
          <div className="mx-auto mb-10 flex max-w-xl items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-sm">
            <Search className="h-5 w-5 flex-none text-[#9CA3AF]" aria-hidden="true" />
            <input
              type="text"
              placeholder={t("cities.search")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-sm font-semibold text-[#111827] outline-none placeholder:text-[#9CA3AF]"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mb-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 text-center shadow-sm">
              <p className="text-2xl font-black text-[#4346EE]">{t("cities.totalWilayas")}</p>
              <p className="mt-1 text-xs font-bold text-[#6B7280]">{t("cities.title")}</p>
            </div>
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 text-center shadow-sm">
              <p className="text-2xl font-black text-[#16A34A]">{liveCount}</p>
              <p className="mt-1 text-xs font-bold text-[#6B7280]">{t("cities.available")}</p>
            </div>
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 text-center shadow-sm">
              <p className="text-2xl font-black text-[#F59E0B]">{cities.length - liveCount}</p>
              <p className="mt-1 text-xs font-bold text-[#6B7280]">{t("cities.soon")}</p>
            </div>
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 text-center shadow-sm">
              <p className="text-2xl font-black text-[#111827]">15K+</p>
              <p className="mt-1 text-xs font-bold text-[#6B7280]">{t("hero.statsRides")}</p>
            </div>
          </div>
        </Reveal>

        <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c, i) => {
            const live = c.status === "live";
            return (
              <Reveal key={c.name} delay={(i % 3) * 80}>
                <li className="flex items-center justify-between gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm transition hover:border-[#4346EE]/30 hover:shadow-md">
                  <span className="flex items-center gap-3">
                    <span className="relative flex h-5 w-5 flex-none items-center justify-center">
                      <MapPin className="h-4 w-4 text-[#4346EE]" aria-hidden="true" />
                      {live && (
                        <span className="absolute h-2 w-2 rounded-full bg-[#16A34A] animate-ping" />
                      )}
                    </span>
                    <span className="font-bold text-[#111827]">{c.name}</span>
                  </span>
                  <span
                    className={`inline-flex flex-none items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold ${
                      live
                        ? "bg-[#DCFCE7] text-[#16A34A]"
                        : "bg-[#FEF3C7] text-[#D97706]"
                    }`}
                  >
                    {live ? (
                      <>
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        {t("cities.available")}
                      </>
                    ) : (
                      <>
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {t("cities.soon")}
                      </>
                    )}
                  </span>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
