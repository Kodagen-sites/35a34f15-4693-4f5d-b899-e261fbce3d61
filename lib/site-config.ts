// Shim so legal-page templates (Privacy / Terms) that import
// `@/lib/site-config` still resolve to our source of truth in `content/`.
import { siteConfig as base } from "@/content/site-config";
export const siteConfig: any = base;
export type SiteConfig = typeof base;
