"use client";

import { Mail, ShieldCheck, FileText, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/data";
import { Brand } from "./ui";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-bg-soft" id="about">
      <div className="container-page pb-10 pt-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          <div>
            <a href="#top" aria-label="INRIDE AI">
              <Brand />
            </a>
            <p className="mt-4 max-w-[34ch] text-[0.95rem] text-ink-mute">{t("footer.tagline")}</p>
            <h3 className="mt-6 block text-[0.95rem] font-extrabold text-ink">{t("footer.aboutTitle")}</h3>
            <p className="mt-2 max-w-[38ch] text-[0.95rem] text-ink-mute">{t("footer.aboutText")}</p>
            <a
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-bold text-primary"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              <span dir="ltr">{t("footer.officialSite")}</span>
            </a>
          </div>

          <nav aria-label={t("aria.services")} className="flex flex-col gap-2.5">
            <h3 className="mb-2 text-[0.95rem] font-extrabold text-ink">{t("footer.servicesTitle")}</h3>
            <a href="#services" className="font-semibold text-ink-soft transition hover:text-primary">
              {t("footer.cityRides")}
            </a>
            <a href="#services" className="font-semibold text-ink-soft transition hover:text-primary">
              {t("footer.interRides")}
            </a>
            <a href="#services" className="font-semibold text-ink-soft transition hover:text-primary">
              {t("footer.express")}
            </a>
            <a href="#services" className="font-semibold text-ink-soft transition hover:text-primary">
              {t("footer.airport")}
            </a>
          </nav>

          <nav aria-label={t("aria.safety")} className="flex flex-col gap-2.5">
            <h3 className="mb-2 text-[0.95rem] font-extrabold text-ink">{t("footer.safetyTitle")}</h3>
            <a href="#safety" className="font-semibold text-ink-soft transition hover:text-primary">
              {t("footer.riderSafety")}
            </a>
            <a href="#safety" className="font-semibold text-ink-soft transition hover:text-primary">
              {t("footer.driverSafety")}
            </a>
            <a href="#safety" className="font-semibold text-ink-soft transition hover:text-primary">
              {t("footer.docCheck")}
            </a>
          </nav>

          <nav aria-label={t("aria.support")} className="flex flex-col gap-2.5">
            <h3 className="mb-2 text-[0.95rem] font-extrabold text-ink">{t("footer.supportTitle")}</h3>
            <a
              href={`mailto:${SITE.supportEmail}`}
              className="inline-flex items-center gap-2 font-bold text-primary"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>{t("footer.supportEmail")}</span>
            </a>
            <a href="/legal#privacy" className="font-semibold text-ink-soft transition hover:text-primary">
              {t("footer.privacy")}
            </a>
            <a href="/legal#privacy" className="font-semibold text-ink-soft transition hover:text-primary">
              {t("footer.deletion")}
            </a>
            <a href="/legal#terms" className="inline-flex items-center gap-2 font-semibold text-ink-soft transition hover:text-primary">
              <FileText className="h-4 w-4" aria-hidden="true" />
              {t("footer.generalTerms")}
            </a>
            <a href="/legal#privacy" className="inline-flex items-center gap-2 font-semibold text-ink-soft transition hover:text-primary">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              {t("footer.privacyPolicy")}
            </a>
          </nav>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-white p-4 text-center text-sm text-ink-mute">
          {t("footer.legalNote")}
        </div>

        <p className="mt-8 border-t border-border pt-6 text-center text-[0.86rem] text-ink-faint">
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
