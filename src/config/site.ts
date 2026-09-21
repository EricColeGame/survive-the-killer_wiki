export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Survive the Killer Wiki",
  shortName: "Survive the Killer",
  logoText: "SK",
  tagline: "Complete Guides, Codes, Weapons & Killers",
  description: "Complete Survive the Killer Wiki with Roblox codes, weapon guides, killer tips, maps, skins, and survival strategies to help players escape every round.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://survive-the-killer.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://survive-the-killer.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/5498015838/Survive-the-Killer",
  heroVideoId: "t4SamdiIQZk", // Roblox Survive the Killer gameplay video
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
