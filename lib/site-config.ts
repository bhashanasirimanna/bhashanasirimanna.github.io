// Central source of truth for SEO + structured data.
// NOTE: siteUrl is a placeholder — update it to the real deployed domain
// before shipping (it feeds metadataBase, canonical URLs, sitemap and JSON-LD).
export const siteConfig = {
  name: "Induwara Sirimanna",
  title: "Induwara Sirimanna — Software Engineer",
  titleTemplate: "%s | Induwara Sirimanna",
  description:
    "Induwara Sirimanna is a software engineer specializing in high-availability distributed systems, multi-tenant SaaS platforms, and LLM / AI integrations.",
  siteUrl: "https://induwarasirimanna.dev",
  email: "bhashanasirimanna@gmail.com",
  jobTitle: "Software Engineer",
  keywords: [
    "Induwara Sirimanna",
    "Software Engineer",
    "Full-Stack Developer Sri Lanka",
    "Next.js Developer",
    "NestJS Developer",
    "Distributed Systems Engineer",
    "SaaS Engineer",
    "AI Integration Engineer",
  ],
  social: {
    github: "https://github.com/bhashana",
    linkedin: "https://linkedin.com/in/bhashana",
  },
  themeColor: "#121212",
};

export type SiteConfig = typeof siteConfig;
