"use client";

import { type ReactNode } from "react";
import { Calendar, CheckCircle2, FileText, Info, Mail, ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LEGAL, type LegalBlock } from "@/lib/legal";
import { SITE } from "@/lib/data";

function BlockView({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case "p":
      return <p className="leading-relaxed text-ink-soft">{block.text}</p>;
    case "li":
      return (
        <li className="flex gap-3 text-ink-soft">
          <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-primary" aria-hidden="true" />
          <span>{block.text}</span>
        </li>
      );
    case "flow":
      return (
        <p
          dir="ltr"
          className="rounded-xl border border-primary/20 bg-primary-tint px-4 py-3 text-center text-sm font-bold leading-relaxed text-primary"
        >
          {block.text}
        </p>
      );
    case "badge":
      return <span className="badge-primary">{block.text}</span>;
    case "cta":
      return (
        <a
          href={block.href}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-brand transition hover:-translate-y-0.5 hover:bg-primary-strong hover:shadow-glow"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {block.text}
        </a>
      );
    case "sub":
      return (
        <div className="rounded-2xl border border-border bg-bg-soft p-5">
          <h4 className="text-lg font-extrabold text-ink">{block.title}</h4>
          {block.lead ? <p className="mt-1 text-[0.95rem] text-ink-soft">{block.lead}</p> : null}
          <ul className="mt-3 space-y-2.5">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-[0.95rem] text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

function BlockList({ blocks }: { blocks: LegalBlock[] }) {
  const out: ReactNode[] = [];
  let i = 0;
  while (i < blocks.length) {
    const block = blocks[i];
    if (block.kind === "li") {
      const items: string[] = [];
      while (i < blocks.length && blocks[i].kind === "li") {
        items.push((blocks[i] as { text: string }).text);
        i++;
      }
      out.push(
        <ul key={out.length} className="space-y-2.5">
          {items.map((text, j) => (
            <li key={j} className="flex gap-3 text-ink-soft">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-primary" aria-hidden="true" />
              <span>{text}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }
    out.push(<BlockView key={out.length} block={block} />);
    i++;
  }
  return <div className="space-y-5">{out}</div>;
}

function Section({
  id,
  title,
  blocks,
}: {
  id?: string;
  title: string;
  blocks: LegalBlock[];
}) {
  return (
    <section id={id} className="scroll-mt-24 rounded-3xl border border-border bg-white p-6 md:p-10">
      <h3 className="mb-6 text-xl font-extrabold leading-snug text-ink md:text-2xl">{title}</h3>
      <BlockList blocks={blocks} />
    </section>
  );
}

function PartHeader({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 flex-none place-items-center rounded-2xl bg-primary text-white shadow-brand">
        {icon}
      </span>
      <h2 className="text-2xl font-extrabold leading-tight text-ink md:text-3xl">{title}</h2>
    </div>
  );
}

export default function LegalContent() {
  const { lang } = useI18n();
  const L = LEGAL[lang];

  return (
    <div className="container-page py-14 md:py-20">
      <header className="max-w-3xl">
        <span className="eyebrow">INRIDE AI</span>
        <h1 className="text-4xl font-extrabold leading-tight text-ink md:text-5xl">{L.legal.title}</h1>
        <p className="mt-5 text-lg text-ink-mute">{L.legal.intro}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <span className="badge-pill">
            <Calendar className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            {L.updatedLabel}: {L.updatedDate}
          </span>
          <span className="badge-pill">
            <Calendar className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            {L.effectiveLabel}: {L.effectiveDate}
          </span>
        </div>
      </header>

      <nav aria-label={L.legal.title} className="mt-10 grid gap-3 sm:grid-cols-3">
        <a
          href="#mentions"
          className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 font-bold text-ink transition hover:border-primary/40 hover:text-primary"
        >
          <Info className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
          {L.legal.mentionsPartTitle}
        </a>
        <a
          href="#terms"
          className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 font-bold text-ink transition hover:border-primary/40 hover:text-primary"
        >
          <FileText className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
          {L.legal.termsPartTitle}
        </a>
        <a
          href="#privacy"
          className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 font-bold text-ink transition hover:border-primary/40 hover:text-primary"
        >
          <ShieldCheck className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
          {L.legal.privacyPartTitle}
        </a>
      </nav>

      <section id="mentions" className="mt-16 space-y-6">
        <PartHeader icon={<Info className="h-5 w-5" aria-hidden="true" />} title={L.legal.mentionsPartTitle} />
        <p className="max-w-3xl text-ink-mute">{L.legal.mentionsIntro}</p>
        <div className="rounded-3xl border border-border bg-white p-6 md:p-10">
          <ul className="space-y-4">
            {L.legal.mentions.map((text, i) => (
              <li key={i} className="flex gap-3 text-ink-soft">
                <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-primary-soft text-xs font-extrabold text-primary">
                  {i + 1}
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="terms" className="mt-16 space-y-6">
        <PartHeader icon={<FileText className="h-5 w-5" aria-hidden="true" />} title={L.legal.termsPartTitle} />
        <p className="max-w-3xl text-ink-mute">{L.terms.intro}</p>
        <div className="rounded-3xl border border-primary/20 bg-primary-tint p-5 md:p-7">
          <h3 className="font-extrabold text-ink">{L.terms.legalTitle}</h3>
          <p className="mt-2 leading-relaxed text-ink-soft">{L.terms.legal}</p>
        </div>
        <div className="space-y-6">
          {L.terms.sections.map((section) => (
            <Section key={section.title} title={section.title} blocks={section.blocks} />
          ))}
        </div>
        <div className="flex flex-col items-start gap-5 rounded-3xl bg-primary p-6 text-white md:flex-row md:items-center md:justify-between md:p-9">
          <div>
            <h3 className="text-xl font-extrabold">{L.terms.contact.title}</h3>
            <p className="mt-1 text-white/85">{L.terms.contact.text}</p>
          </div>
          <a
            href={`mailto:${SITE.supportEmail}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {L.terms.contact.button}
          </a>
        </div>
      </section>

      <section id="privacy" className="mt-16 space-y-6">
        <PartHeader icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />} title={L.legal.privacyPartTitle} />
        <div className="max-w-3xl space-y-4">
          {L.privacy.intro.map((text, i) => (
            <p key={i} className="text-ink-mute">
              {text}
            </p>
          ))}
        </div>
        <div className="rounded-3xl border border-primary/20 bg-primary-tint p-5 md:p-7">
          <h3 className="font-extrabold text-ink">{L.privacy.legalTitle}</h3>
          <p className="mt-2 leading-relaxed text-ink-soft">{L.privacy.legal}</p>
        </div>
        <div className="space-y-6">
          {L.privacy.sections.map((section) => (
            <Section key={section.title} title={section.title} blocks={section.blocks} />
          ))}
        </div>
        <p className="rounded-3xl border border-primary/20 bg-primary-tint p-6 text-center font-bold leading-relaxed text-primary">
          {L.privacy.closing}
        </p>
      </section>
    </div>
  );
}
