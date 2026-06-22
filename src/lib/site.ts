export const SITE_NAME = "Ward Cove Shore Excursions";
export const SITE_URL = "https://wardcoveshoreexcursions.com";
export const SITE_DESCRIPTION =
  "Shore excursions and port guides for cruise passengers arriving at Ward Cove, Alaska — near Ketchikan on Revillagigedo Island.";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageTitle(title: string): string {
  return title;
}
