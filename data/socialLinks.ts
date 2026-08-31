import { BrandSocials } from "@/types";

// Centralized social configuration.
// Replace every "#" placeholder below with the real profile URL for
// each platform. Nothing here is invented — fill in as accounts go live.
// Any link left as "#" is automatically treated as "not yet live" by
// the SocialLinks component and rendered in a muted, non-clickable state.

export const socialLinks: BrandSocials[] = [
  {
    brand: "bhavatu-sarvam",
    label: "Bhavatu Sarvam",
    links: [
      { platform: "YouTube", url: "#" },
      { platform: "Instagram", url: "#" },
      { platform: "Facebook", url: "#" },
      { platform: "TikTok", url: "#" },
    ],
  },
  {
    brand: "storykahani",
    label: "StoryKahani",
    links: [
      { platform: "YouTube", url: "#" },
      { platform: "Instagram", url: "#" },
      { platform: "Facebook", url: "#" },
      { platform: "TikTok", url: "#" },
    ],
  },
  {
    brand: "smart-finds",
    label: "Yog M Smart Finds",
    links: [
      { platform: "Pinterest", url: "#" },
      { platform: "Instagram", url: "#" },
      { platform: "Facebook", url: "#" },
    ],
  },
];

export const getSocialsByBrand = (brand: BrandSocials["brand"]) =>
  socialLinks.find((s) => s.brand === brand);
