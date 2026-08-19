import type { Metadata } from "next";
import LegalContent from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "المعلومات القانونية — شروط الاستخدام وسياسة الخصوصية",
  description:
    "الوثائق القانونية لمنصة INRIDE AI: البيانات القانونية، شروط الاستخدام العامة، وسياسة الخصوصية وفق القانون الجزائري رقم 18-07 لسنة 2018.",
  alternates: {
    canonical: "/legal",
    languages: {
      ar: "/legal?lang=ar",
      fr: "/legal?lang=fr",
      en: "/legal?lang=en",
    },
  },
};

export default function LegalPage() {
  return <LegalContent />;
}
