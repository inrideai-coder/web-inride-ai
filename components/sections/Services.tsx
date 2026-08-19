"use client";

import { Car, MapPinned, Package, Plane, CalendarClock, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading, Reveal } from "@/components/ui";

export default function Services() {
  const { t } = useI18n();
  const services = [
    {
      icon: Car,
      title: t("services.s1T"),
      tag: t("services.s1Tag"),
      desc: t("services.s1D"),
      rider: t("services.s1R"),
      driver: t("services.s1Dr"),
      featured: true,
    },
    {
      icon: CalendarClock,
      title: t("services.s5T"),
      tag: t("services.s5Tag"),
      desc: t("services.s5D"),
      rider: t("services.s5R"),
      driver: t("services.s5Dr"),
      featured: false,
    },
    {
      icon: MapPinned,
      title: t("services.s2T"),
      tag: t("services.s2Tag"),
      desc: t("services.s2D"),
      rider: t("services.s2R"),
      driver: t("services.s2Dr"),
      featured: false,
    },
    {
      icon: Package,
      title: t("services.s3T"),
      tag: t("services.s3Tag"),
      desc: t("services.s3D"),
      rider: t("services.s3R"),
      driver: t("services.s3Dr"),
      featured: false,
    },
    {
      icon: Plane,
      title: t("services.s4T"),
      tag: t("services.s4Tag"),
      desc: t("services.s4D"),
      rider: t("services.s4R"),
      driver: t("services.s4Dr"),
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={t("services.kicker")} title={t("services.title")} subtitle={t("services.subtitle")} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <article
                className={`group flex h-full flex-col rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-sm transition hover:-translate-y-1.5 hover:border-[#4346EE]/30 hover:shadow-lg ${
                  s.featured ? "md:col-span-2 xl:col-span-2 border-[#4346EE]/20" : ""
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-gradient-to-br from-[#4346EE] to-[#3639D6] text-white shadow-sm">
                    <s.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold leading-tight text-[#111827]">{s.title}</h3>
                    <span className="mt-1 inline-block rounded-full bg-[#4346EE]/10 px-2.5 py-0.5 text-[0.7rem] font-bold text-[#4346EE]">
                      {s.tag}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-[0.95rem] text-[#6B7280]">{s.desc}</p>

                <div className="mt-5 border-t border-dashed border-[#E5E7EB] pt-4">
                  <span className="block text-[0.7rem] font-extrabold uppercase tracking-wide text-[#4346EE]">
                    {t("services.riderTitle")}
                  </span>
                  <p className="mt-1 text-[0.88rem] text-[#374151]">{s.rider}</p>
                </div>
                <div className="mt-3 border-t border-dashed border-[#E5E7EB] pt-4">
                  <span className="block text-[0.7rem] font-extrabold uppercase tracking-wide text-[#4346EE]">
                    {t("services.driverTitle")}
                  </span>
                  <p className="mt-1 text-[0.88rem] text-[#374151]">{s.driver}</p>
                </div>

                <a
                  href="#download"
                  className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-bold text-[#4346EE]"
                >
                  {t("common.learnMore")}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
