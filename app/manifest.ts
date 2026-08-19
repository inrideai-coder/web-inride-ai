import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "INRIDE AI",
    short_name: "INRIDE AI",
    description:
      "Smart mobility platform for Algeria — fair negotiated pricing, city rides, inter-wilaya travel, express delivery and real-time GPS safety.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4346EE",
    dir: "rtl",
    lang: "ar",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
