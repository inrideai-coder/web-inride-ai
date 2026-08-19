"use client";

import { Newspaper, ArrowUpRight, Calendar } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading, Reveal } from "@/components/ui";

export default function News() {
  const { t } = useI18n();
  const posts = [
    {
      title: t("news.n1T"),
      desc: t("news.n1D"),
      cat: t("news.n1Cat"),
      date: t("news.n1Date"),
    },
    {
      title: t("news.n2T"),
      desc: t("news.n2D"),
      cat: t("news.n2Cat"),
      date: t("news.n2Date"),
    },
    {
      title: t("news.n3T"),
      desc: t("news.n3D"),
      cat: t("news.n3Cat"),
      date: t("news.n3Date"),
    },
  ];

  return (
    <section id="news" className="bg-[#F7F8FC] py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={t("news.kicker")} title={t("news.title")} subtitle={t("news.subtitle")} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm transition hover:-translate-y-1.5 hover:border-[#4346EE]/30 hover:shadow-lg">
                <div className="h-1.5 bg-gradient-to-r from-[#4346EE] to-[#6366F1]" />
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[#4346EE]/10 px-3 py-1 text-[0.7rem] font-bold text-[#4346EE]">
                      {p.cat}
                    </span>
                    <span className="flex items-center gap-1 text-[0.7rem] text-[#9CA3AF]">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      {p.date}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold leading-snug text-[#111827]">{p.title}</h3>
                  <p className="mt-2 flex-1 text-[0.92rem] text-[#6B7280]">{p.desc}</p>
                  <a
                    href="#news"
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-[#4346EE]"
                  >
                    {t("news.readMore")}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
