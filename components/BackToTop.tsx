"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function BackToTop() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t("common.backTop")}
      className="fixed bottom-6 end-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-border bg-white text-ink shadow-lg transition hover:bg-primary hover:text-white"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
