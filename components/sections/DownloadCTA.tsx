"use client";

import { QrCode } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading, Reveal } from "@/components/ui";

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3.6 1.8 13.7 12 3.6 22.2c-.4-.2-.6-.6-.6-1.2V3c0-.6.2-1 .6-1.2Zm12 8.9L4.2 1.3 14.2 11.3l1.4-1.4Zm2.2 1.2c.5.5.5 1.3 0 1.8l-3 3-1.8-1.8 1.9-1.9-1.9-1.9 1.8-1.8 3 3.6ZM4.2 22.7l11.4-8.8-1.4-1.4L4.2 22.7Z"
      />
    </svg>
  );
}

function AppleStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M16.7 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.8 2.5 3 2.4 1.2-.1 1.7-.8 3.1-.8 1.4 0 1.8.8 3.1.8 1.3 0 2.1-1.2 2.9-2.4.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.5-1-2.7-3.5ZM14.4 5.3c.7-.8 1.1-1.9 1-3-.9 0-2.1.6-2.8 1.4-.6.7-1.2 1.9-1 3 1.1.1 2.1-.5 2.8-1.4Z" />
    </svg>
  );
}

function HuaweiIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 1.8A7.2 7.2 0 1 1 4.8 12 7.2 7.2 0 0 1 12 4.8Zm0 3.6a3.6 3.6 0 1 0 3.6 3.6A3.6 3.6 0 0 0 12 8.4Zm0 1.8a1.8 1.8 0 1 1-1.8 1.8A1.8 1.8 0 0 1 12 10.2Z" />
    </svg>
  );
}

function FakeQr() {
  const cells: [number, number][] = [];
  for (let y = 0; y < 11; y++) {
    for (let x = 0; x < 11; x++) {
      const border3 = (x < 3 && y < 3) || (x > 7 && y < 3) || (x < 3 && y > 7);
      if (border3) continue;
      cells.push([x, y]);
    }
  }
  return (
    <svg viewBox="0 0 13 13" className="h-full w-full" aria-hidden="true">
      <rect x="0.5" y="0.5" width="2.5" height="2.5" rx="0.4" fill="currentColor" />
      <rect x="1" y="1" width="1.5" height="1.5" rx="0.2" fill="white" />
      <rect x="1.3" y="1.3" width="0.9" height="0.9" rx="0.1" fill="currentColor" />
      <rect x="10" y="0.5" width="2.5" height="2.5" rx="0.4" fill="currentColor" />
      <rect x="10.5" y="1" width="1.5" height="1.5" rx="0.2" fill="white" />
      <rect x="10.8" y="1.3" width="0.9" height="0.9" rx="0.1" fill="currentColor" />
      <rect x="0.5" y="10" width="2.5" height="2.5" rx="0.4" fill="currentColor" />
      <rect x="1" y="10.5" width="1.5" height="1.5" rx="0.2" fill="white" />
      <rect x="1.3" y="10.8" width="0.9" height="0.9" rx="0.1" fill="currentColor" />
      {cells.map(([x, y], i) =>
        (i * 7 + x + y) % 3 !== 0 ? (
          <rect key={`${x}-${y}`} x={x + 0.5} y={y + 0.5} width={0.7} height={0.7} rx="0.1" fill="currentColor" />
        ) : null,
      )}
    </svg>
  );
}

export default function DownloadCTA() {
  const { t } = useI18n();
  const stores = [
    { top: t("download.playTop"), name: t("download.playName"), icon: PlayStoreIcon, href: "https://play.google.com/store" },
    { top: t("download.appleTop"), name: t("download.appleName"), icon: AppleStoreIcon, href: "https://apps.apple.com" },
    { top: t("download.huaweiTop"), name: t("download.huaweiName"), icon: HuaweiIcon, href: "https://appgallery.huawei.com" },
  ];

  return (
    <section id="download" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={t("download.kicker")} title={t("download.title")} subtitle={t("download.subtitle")} />

        <Reveal delay={100}>
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-xl md:flex-row md:p-12">
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-6 rounded-[50%] bg-[#4346EE]/8 blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[40px] border-[6px] border-[#0B1020] bg-[#0B1020] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3),0_8px_20px_-8px_rgba(67,70,238,0.15)]">
                <div className="absolute left-1/2 top-3 z-30 h-4 w-24 -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
                <div className="flex h-[380px] w-[200px] flex-col items-center justify-center bg-gradient-to-b from-[#4346EE]/8 via-indigo-50 to-slate-100 pt-8">
                  <img
                    src="/LOGO.png"
                    alt="INRIDE AI"
                    className="h-20 w-20 object-contain"
                    width={80}
                    height={80}
                  />
                  <span className="mt-3 text-2xl font-black tracking-tight text-[#111827]">INRIDE</span>
                  <span className="text-xs font-bold text-[#4346EE]">AI</span>
                  <div className="mt-4 flex gap-2">
                    <span className="h-1.5 w-8 rounded-full bg-[#4346EE]/20" />
                    <span className="h-1.5 w-3 rounded-full bg-[#4346EE]/40" />
                    <span className="h-1.5 w-8 rounded-full bg-[#4346EE]/20" />
                  </div>
                  <div className="mt-4 space-y-2 px-4">
                    <div className="h-2 w-full rounded-full bg-[#E5E7EB]" />
                    <div className="h-2 w-3/4 rounded-full bg-[#E5E7EB]" />
                    <div className="h-2 w-5/6 rounded-full bg-[#E5E7EB]" />
                  </div>
                  <div className="mt-auto mb-4 flex w-[calc(100%-24px)] gap-2 rounded-2xl bg-white p-3 shadow-md">
                    <div className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-[#4346EE]/10 text-[#4346EE]">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                        <polygon points="12 15 17 21 7 21 12 15" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 w-20 rounded-full bg-[#111827]/20" />
                      <div className="mt-1.5 h-1.5 w-14 rounded-full bg-[#9CA3AF]/40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col items-center gap-8">
              <div className="flex flex-col gap-3">
                {stores.map((s, i) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-72 items-center gap-3.5 rounded-2xl bg-[#0B1020] px-5 py-3.5 text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#1a1f36]"
                  >
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-white/10 text-white transition group-hover:bg-white/15">
                      <s.icon />
                    </span>
                    <span className="flex flex-col items-start leading-tight">
                      <small className="text-[0.62rem] font-semibold uppercase tracking-wider text-white/50">{s.top}</small>
                      <strong className="text-[0.95rem] font-bold">{s.name}</strong>
                    </span>
                  </a>
                ))}
              </div>

              <div className="flex flex-col items-center gap-3">
                <div
                  role="img"
                  aria-label={t("download.qrAria")}
                  className="group relative grid h-36 w-36 place-items-center rounded-2xl border border-[#E5E7EB] bg-white p-3 shadow-sm transition hover:shadow-md"
                >
                  <span className="absolute inset-0 rounded-2xl bg-[#4346EE]/5 opacity-0 transition group-hover:opacity-100" />
                  <span className="relative h-full w-full text-[#111827]">
                    <FakeQr />
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-sm font-bold text-[#374151]">
                  <QrCode className="h-4 w-4 text-[#4346EE]" aria-hidden="true" />
                  {t("download.qrTitle")}
                </span>
                <span className="text-xs text-[#9CA3AF]">{t("download.qrSub")}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
