"use client";

import { Car, MapPinned, Navigation, Wallet, Handshake, Clock, UserCheck, Phone, Star, CreditCard } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading, Reveal } from "@/components/ui";

function RiderPhone() {
  return (
    <div className="relative w-[280px]">
      <div className="absolute -inset-6 rounded-[50%] bg-[#4346EE]/10 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[40px] border-8 border-[#0B1020] bg-[#0B1020] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]">
        <div className="absolute left-1/2 top-3 z-30 h-4 w-24 -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
        <div className="flex h-[520px] flex-col justify-end bg-gradient-to-b from-[#4346EE]/5 via-indigo-50 to-slate-100 p-3 pt-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 rounded-xl bg-white/90 p-2.5 shadow-sm">
              <MapPinned className="h-4 w-4 text-[#4346EE]" />
              <span className="flex-1 truncate text-[10px] font-bold text-[#374151]">Centre-ville, Alger</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/90 p-2.5 shadow-sm">
              <Navigation className="h-4 w-4 text-[#16A34A]" />
              <span className="flex-1 truncate text-[10px] font-bold text-[#374151]">Bab Ezzouar</span>
            </div>
          </div>
          <div className="mt-3 rounded-2xl border border-[#E5E7EB] bg-white p-3 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-[#9CA3AF]">Estimated fare</p>
                <p className="text-base font-black text-[#111827]">350 DZD</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#4346EE]/10 px-2 py-1 text-[10px] font-bold text-[#4346EE]">
                <Car className="h-3 w-3" /> Voiture
              </span>
            </div>
            <button type="button" className="mt-2 w-full rounded-xl bg-[#4346EE] py-2 text-xs font-bold text-white shadow-md">
              Request ride
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DriverPhone() {
  return (
    <div className="relative w-[280px]">
      <div className="absolute -inset-6 rounded-[50%] bg-[#16A34A]/10 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[40px] border-8 border-[#0B1020] bg-[#0B1020] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]">
        <div className="absolute left-1/2 top-3 z-30 h-4 w-24 -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
        <div className="flex h-[520px] flex-col justify-between bg-gradient-to-b from-[#16A34A]/5 via-emerald-50 to-slate-100 p-3 pt-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 rounded-xl bg-white/90 p-2.5 shadow-sm">
              <Car className="h-4 w-4 text-[#16A34A]" />
              <span className="flex-1 truncate text-[10px] font-bold text-[#374151]">New ride request</span>
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#16A34A]" />
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/90 p-2.5 shadow-sm">
              <UserCheck className="h-4 w-4 text-[#4346EE]" />
              <span className="flex-1 truncate text-[10px] font-bold text-[#374151]">Amine K. · ⭐ 4.8</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/90 p-2.5 shadow-sm">
              <Clock className="h-4 w-4 text-[#F59E0B]" />
              <span className="flex-1 truncate text-[10px] font-bold text-[#374151]">Pickup in 4 min</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/90 p-2.5 shadow-sm">
              <CreditCard className="h-4 w-4 text-[#16A34A]" />
              <span className="flex-1 truncate text-[10px] font-bold text-[#374151]">480 DZD</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button type="button" className="flex-1 rounded-xl bg-[#16A34A] py-2.5 text-xs font-bold text-white shadow-md">
              Accept
            </button>
            <button type="button" className="rounded-xl bg-white/80 px-4 py-2.5 text-xs font-bold text-[#374151] shadow-sm">
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppShowcase() {
  const { t } = useI18n();

  return (
    <section id="app" className="bg-[#F7F8FC] py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={t("showcase.kicker")} title={t("showcase.title")} subtitle={t("showcase.subtitle")} />

        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-16">
          <Reveal delay={0}>
            <div className="text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4346EE]/15 bg-[#4346EE]/5 px-4 py-2 text-xs font-bold text-[#4346EE]">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {t("showcase.riderApp")}
              </span>
              <RiderPhone />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#16A34A]/15 bg-[#16A34A]/5 px-4 py-2 text-xs font-bold text-[#16A34A]">
                <Car className="h-3.5 w-3.5" aria-hidden="true" />
                {t("showcase.driverApp")}
              </span>
              <DriverPhone />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
