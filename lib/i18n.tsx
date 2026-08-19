"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { DICTS, LANGS, type Dict, type Lang } from "./translations";

const LS_KEY = "inride_lang";

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "ar";
  try {
    const url = new URL(window.location.href);
    const q = url.searchParams.get("lang");
    if (q && q in DICTS) return q as Lang;
    const stored = window.localStorage.getItem(LS_KEY);
    if (stored && stored in DICTS) return stored as Lang;
  } catch {
    /* ignore */
  }
  return "ar";
}

interface I18nCtx {
  lang: Lang;
  dir: "ltr" | "rtl";
  dict: Dict;
  setLang: (l: Lang) => void;
  t: (path: string) => string;
}

const Ctx = createContext<I18nCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    setLangState(readStoredLang());
  }, []);

  useEffect(() => {
    const meta = DICTS[lang].meta;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.description);
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(LS_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback(
    (path: string): string => {
      let node: unknown = DICTS[lang];
      for (const part of path.split(".")) {
        if (node && typeof node === "object" && part in (node as Record<string, unknown>)) {
          node = (node as Record<string, unknown>)[part];
        } else {
          return path;
        }
      }
      return typeof node === "string" ? node : path;
    },
    [lang],
  );

  const value = useMemo<I18nCtx>(
    () => ({ lang, dir: lang === "ar" ? "rtl" : "ltr", dict: DICTS[lang], setLang, t }),
    [lang, setLang, t],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n(): I18nCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}

export { LANGS };
export type { Lang };
