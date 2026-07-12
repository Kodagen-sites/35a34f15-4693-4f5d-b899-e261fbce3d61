/**
 * Travel24hr Ltd — Landing build
 *
 * Generation manifest (variation axes — see references/variation-manifest.md):
 *   archetype: G  ·  style: S16 Organic Warm Dusk  ·  color_variant: warm-dusk-amber-brass
 *   voice_family: V1 Heritage Understated  ·  card_variant: CV4 Liquid Glass
 *   cta_variant: CTA1 Magnetic  ·  header_variant: pill-floating  ·  footer_variant: FT2
 *   hero_overlay: HO3 bottom-anchored  ·  hero_text: H2  ·  hero_entrance: E3
 *   scene_variant: V1  ·  motion_variant: M1  ·  g_render_mode: loop
 *   services_variant: SV1  ·  showcase_variant: PV1 gallery
 *   hero_composition: HC2  ·  manifesto_variant: MV5  ·  value_prop_variant: VV3
 *   process_variant: n/a  ·  booking_pattern: n/a (landing)
 *   hero_treatment: video-loop  ·  glass_material: liquid-glass-port-dots
 *   motion_vocabulary: ease-cinematic  ·  background_treatment: painterly-dusk
 *   card_material_variant: ken-burns-image
 *   motion_bg_pattern: gradient-mesh-flow  ·  motion_bg_density: subtle
 *   narrative_shape: place-portrait  ·  camera_vocabulary: static-hold
 *   composition_pattern: upper-third-with-floor-reflection  ·  subject_position: upper
 *   lighting_temperature: warm-dusk  ·  industry_video_tone: hospitality-warm-slow
 *   industry: travel  ·  auth_strategy: none  ·  buildMode: landing
 */

import assetManifest from "./asset-manifest.json";

const images = (assetManifest as unknown as { images: Record<string, string> }).images;
const videos = (assetManifest as unknown as { videos: Record<string, string> }).videos;

const heroImage = images["scene-1-start"] ?? images["section-about-hero"] ?? "";

export const siteConfig = {
  company: {
    name: "Travel24hr Ltd",
    tagline: "Always on. Everywhere you go.",
    description:
      "Round-the-clock flight bookings, visa assistance, holiday packages, and airport transfers — for travellers who won't wait until morning.",
    email: "concierge@travel24hr.com",
    phone: "+44 20 7946 0000",
    location: "24/7 · Global",
  },

  templateId: "travel-v1",
  industry: "travel",
  headerVariant: "pill-floating" as const,
  footerVariant: "FT2" as const,

  brand: {
    primary: "#e8a86a",
    accent: "#d4a24c",
    bg: "#2a1f1a",
    favicon: "/favicon.svg",
  },

  typography: {
    display: "Cormorant Garamond",
    body: "Inter",
    mono: "JetBrains Mono",
  },

  seo: {
    siteUrl: "https://travel24hr.com",
    ogImage: images["og-image"] ?? "",
  },

  socials: {
    facebook: "https://facebook.com/travel24hrltd",
    instagram: "https://instagram.com/travel24hrltd",
    linkedin: "https://linkedin.com/company/travel24hrltd",
    x: "https://x.com/travel24hrltd",
    whatsapp: "https://wa.me/442079460000",
  },

  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],

  nav: {
    items: [
      { href: "#services", label: "Services" },
      { href: "#about", label: "About" },
      { href: "#why", label: "Why us" },
      { href: "#gallery", label: "Destinations" },
      { href: "#contact", label: "Contact" },
    ],
    ctaHref: "#contact",
    ctaLabel: "Reach the concierge",
  },

  hero: {
    h1: [
      { text: "Anywhere you need to be.", accent: false },
      { text: "Anytime you need to go.", accent: true },
    ],
    videoSlot: "scene-1",
    posterSlot: "scene-1-start",
  },

  cta: {
    primary: "Book with the concierge",
    secondary: "See services",
  },

  scrollHero: {
    archetype: "G" as const,
    styleId: "S16" as const,
    assetMode: (videos["scene-1"] ? "live-generate" : "prompt-only") as
      | "live-generate"
      | "prompt-only",
    imageUrl: heroImage,
    frameCount: 0,
    scrollDistance: 1,
  },

  servicesHeading: "What we handle. 24 hours a day.",
  services: [
    {
      slug: "flight-bookings",
      name: "Flight bookings",
      description:
        "Search, compare, and confirm across 500+ airlines — with a real concierge on the line for every fare change, seat swap, or emergency rebook.",
    },
    {
      slug: "visa-assistance",
      name: "Visa assistance",
      description:
        "Documentation, embassy scheduling, and eligibility checks for 150+ countries. Priority queues for last-minute departures.",
    },
    {
      slug: "holiday-packages",
      name: "Holiday packages",
      description:
        "Curated itineraries with flights, hotels, transfers and experiences bundled — designed around how you actually travel.",
    },
    {
      slug: "airport-transfers",
      name: "Airport transfers",
      description:
        "Meet-and-greet chauffeur service in 90+ cities. Live flight tracking included — your driver waits, whatever the delay.",
    },
  ],

  features: [
    {
      title: "A concierge line that never sleeps.",
      description:
        "Every booking, every itinerary, every emergency — answered in under three minutes, at any hour. Your travel doesn't wait for business hours, and neither do we.",
    },
    {
      title: "One team. Every leg of the journey.",
      description:
        "Flights, visas, hotels, transfers — handled by one dedicated concierge who knows your itinerary end-to-end.",
    },
    {
      title: "Priority queues for last-minute bookings.",
      description:
        "Late-night visa applications, emergency rebookings, dawn departures — we hold direct lines with airlines and consulates.",
    },
    {
      title: "Discreet. Human. Genuinely helpful.",
      description:
        "No chatbots, no scripts. Just travel specialists who speak your language and remember your preferences.",
    },
  ],

  sectionThemeWord: "Always.",
  whyUs: {
    heading: "Why we exist",
    items: [
      {
        title: "Because travel doesn't wait.",
        description:
          "A cancelled flight at 3 AM. A visa hiccup on the way to the airport. A last-minute business trip. Every one of those moments needs a human answer — not a hold queue.",
      },
      {
        title: "Because trust is earned in the details.",
        description:
          "We track your flights before you do. We remember your seat preference. We know which embassies open at 6 AM.",
      },
      {
        title: "Because premium isn't a category. It's a promise.",
        description:
          "Concierge service is what we do at every price point — from a single flight change to a fully bespoke itinerary.",
      },
    ],
  },

  gallery: [
    { imageSlot: "section-showcase-1", caption: "Coastal escapes" },
    { imageSlot: "section-showcase-2", caption: "Terminal to terminal" },
    { imageSlot: "section-showcase-3", caption: "European city breaks" },
    { imageSlot: "section-showcase-4", caption: "Late-night arrivals" },
  ],

  stats: [
    { value: 24, unit: "/7", label: "Concierge availability" },
    { value: 500, unit: "+", label: "Airlines partnered" },
    { value: 150, unit: "+", label: "Countries for visa support" },
    { value: 90, unit: "+", label: "Cities with airport transfers" },
  ],

  manifesto:
    "Travel is trust, made visible. We answer at 3 AM so you can sleep on the flight.",

  mixedMedia: {
    skipSecondaryVideo: true,
    accentEyebrow: "The outcome",
    accentLine: "Trust that answers the phone.",
  },

  ctaBlock: {
    heading: "Book with the concierge, not the queue.",
    description:
      "Every service on this page — one call, one concierge, one team of specialists. Reach us any hour, any day, any timezone.",
  },

  trustBar: [
    "IATA-accredited · Since 2018",
    "ABTA-protected packages",
    "PCI-DSS secure payments",
    "24/7 SLA · < 3 min response",
  ],

  motion: {
    intensity: "medium" as const,
    cursorFollower: false,
    scrollProgress: false,
  },

  // Aliases for legal-page templates (they read siteConfig.contact and siteConfig.footer)
  contact: {
    email: "concierge@travel24hr.com",
    phone: "+44 20 7946 0000",
    location: "London, United Kingdom",
  },
  footer: {
    contactEmail: "concierge@travel24hr.com",
    address: "London, United Kingdom",
  },
} as const;

export type SiteConfig = typeof siteConfig;
