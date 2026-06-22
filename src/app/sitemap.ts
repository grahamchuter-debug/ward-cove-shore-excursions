import type { MetadataRoute } from "next";
import { excursions } from "@/lib/excursions";
import { SITE_URL } from "@/lib/site";

const staticPages = [
  "",
  "/excursions",
  "/ward-cove-cruise-port-guide",
  "/ward-cove-vs-ketchikan-cruise-port",
  "/things-to-do-from-ward-cove",
  "/best-ward-cove-shore-excursions",
  "/ward-cove-shuttle-guide",
  "/ward-cove-to-ketchikan",
  "/ward-cove-misty-fjords-excursions",
  "/faq",
  "/cruise-planner",
  "/book",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const excursionEntries = excursions.map((e) => ({
    url: `${SITE_URL}/excursions/${e.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...excursionEntries];
}
