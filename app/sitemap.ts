import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

const SITE = "https://www.astanasoapfactory.com";

/** Страницы сайта для поисковиков. Новую страницу — добавлять сюда. */
const routes = [
  "",
  "/optom",
  "/opt-zavod",
  "/zavod",
  "/bezkontakt",
  "/salon",
  "/dvigatel",
  "/vosk",
  "/privacy",
  ...articles.map((a) => `/stati/${a.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${SITE}${r}`,
    lastModified: now,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r === "/privacy" ? 0.3 : 0.8,
  }));
}
