"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-7xl font-black text-primary">404</p>
      <h1 className="mt-4 text-3xl font-extrabold text-ink">{t("common.notFoundTitle")}</h1>
      <p className="mt-3 max-w-md text-ink-mute">{t("common.notFoundDesc")}</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-primary px-8 py-3.5 font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-primary-strong"
      >
        {t("common.notFoundCta")}
      </Link>
    </section>
  );
}
