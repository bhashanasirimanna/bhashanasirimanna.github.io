// Central source of truth for SEO + structured data.
// NOTE: siteUrl feeds metadataBase, canonical URLs, sitemap and JSON-LD.
// Update it if you move to a custom domain.
export const siteConfig = {
  name: "Induwara Sirimanna",
  title: "Induwara Sirimanna — Software Engineer",
  titleTemplate: "%s | Induwara Sirimanna",
  description:
    "Induwara Sirimanna is a software engineer specializing in high-availability distributed systems, multi-tenant SaaS platforms, and LLM / AI integrations.",
  siteUrl: "https://bhashanasirimanna.github.io",
  email: "bhashanasirimanna@gmail.com",
  birthDate: "2001-08-02",
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
    github: "https://github.com/bhashanasirimanna",
    linkedin: "https://www.linkedin.com/in/induwara-sirimanna",
  },
  themeColor: "#121212",
};

export type SiteConfig = typeof siteConfig;
