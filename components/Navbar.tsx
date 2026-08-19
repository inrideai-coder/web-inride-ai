"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { useI18n, LANGS } from "@/lib/i18n";
import { NAV_ANCHORS } from "@/lib/data";
import { Brand } from "./ui";

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/75 backdrop-blur-xl transition-all ${
        scrolled ? "border-border shadow-md shadow-slate-900/5" : "border-transparent"
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <a href="#top" aria-label="INRIDE AI" className="shrink-0">
          <Brand />
        </a>

        <nav
          className={`fixed inset-x-4 top-[84px] z-50 flex-col gap-1 rounded-3xl border border-border bg-white/95 p-3 shadow-lg backdrop-blur-xl md:static md:inset-auto md:z-auto md:flex md:flex-row md:items-center md:gap-1 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            open ? "flex" : "hidden"
          }`}
          aria-label={t("aria.nav")}
        >
          {NAV_ANCHORS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-ink-soft transition hover:bg-primary-tint hover:text-primary md:py-2.5"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
          <a
            href="mailto:inrideai@gmail.com"
            onClick={() => setOpen(false)}
            className="rounded-full px-3.5 py-2 text-sm font-semibold text-ink-soft transition hover:bg-primary-tint hover:text-primary md:py-2.5"
          >
            {t("nav.support")}
          </a>
        </nav>

        <div className="flex items-center gap-2.5">
          <div
            className="hidden items-center gap-0.5 rounded-full border border-border bg-bg-soft p-1 sm:flex"
            role="group"
            aria-label={t("aria.lang")}
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                lang={l.code}
                aria-pressed={lang === l.code}
                className={`rounded-full px-2.5 py-1 text-[0.72rem] font-bold leading-none transition ${
                  lang === l.code ? "bg-primary text-white shadow-sm" : "text-ink-mute hover:text-ink"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href="#download"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-brand transition hover:-translate-y-0.5 hover:bg-primary-strong hover:shadow-glow md:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {t("nav.cta")}
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-xl border border-border bg-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("common.close") : t("common.menu")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5 text-ink" /> : <Menu className="h-5 w-5 text-ink" />}
          </button>
        </div>
      </div>
    </header>
  );
}
