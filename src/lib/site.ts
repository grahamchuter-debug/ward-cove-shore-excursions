import type { Metadata } from "next";

export const SITE_NAME = "Ward Cove Shore Excursions";
export const SITE_URL = "https://wardcoveshoreexcursions.com";
export const SITE_EMAIL = "hello@wardcoveshoreexcursions.com";
export const SITE_DESCRIPTION =
  "Shore excursions and port guides for cruise passengers arriving at Ward Cove, Alaska — near Ketchikan on Revillagigedo Island.";

export function absoluteUrl(path: string): string {
  if (path === "/" || path === "") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  robots,
  absoluteTitle,
}: {
  title: string;
  description: string;
  path: string;
  robots?: Metadata["robots"];
  absoluteTitle?: string;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    ...(robots ? { robots } : {}),
  };
}
