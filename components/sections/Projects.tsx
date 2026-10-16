"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { RevealStaggerGroup, RevealStaggerItem } from "@/components/RevealStagger";
import GlowOrb from "@/components/GlowOrb";

type Category = "AI & Enterprise" | "Web" | "Mobile";

const filters: Array<"All" | Category> = ["All", "AI & Enterprise", "Web", "Mobile"];

const projects: Array<{
  name: string;
  description: string;
  tags: string[];
  category: Category;
  featured?: boolean;
}> = [
  {
    name: "BrineX",
    description:
      "Developed full-stack web applications and scalable APIs utilizing Next.js, NestJS, and MERN. Enhanced application reliability by ...",
    tags: ["Next Jx", "PostgreSQL", "React"],
    category: "AI & Enterprise",
  },
  {
    name: "BrineX",
    description:
      "Developed full-stack web applications and scalable APIs utilizing Next.js, NestJS, and MERN. Enhanced application reliability by ...",
    tags: ["Next Jx", "PostgreSQL", "React"],
    category: "Web",
    featured: true,
  },
  {
    name: "BrineX",
    description:
      "Developed full-stack web applications and scalable APIs utilizing Next.js, NestJS, and MERN. Enhanced application reliability by ...",
    tags: ["Next Jx", "PostgreSQL", "React"],
    category: "Web",
  },
  {
    name: "BrineX",
    description:
      "Developed full-stack web applications and scalable APIs utilizing Next.js, NestJS, and MERN. Enhanced application reliability by ...",
    tags: ["Next Jx", "PostgreSQL", "React"],
    category: "Mobile",
  },
];

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative overflow-hidden bg-ink px-6 py-20 sm:px-10 md:px-16 lg:px-[120px] lg:py-[97px]">
      <GlowOrb className="right-[60px] top-[-120px] size-[583px] opacity-30" color="#7de112" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-14 lg:items-end lg:gap-[97px]">
        <Reveal className="flex max-w-[534px] flex-col items-start gap-4 lg:items-end lg:gap-6 lg:text-right">
          <h2 className="bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display text-[clamp(36px,7vw,82px)] font-bold leading-[0.9] text-transparent opacity-90">
            My Projects
          </h2>
          <p className="font-body text-xl leading-[1.35] tracking-[1.2px] text-white/85 sm:text-2xl">
            A comprehensive catalog of 13 engineering works across Enterprise AI, full-stack web, and mobile
            ecosystems.
          </p>
        </Reveal>

        <div className="flex w-full flex-col gap-10 lg:max-w-[1200px] lg:gap-16">
          <div className="flex flex-wrap items-center gap-3" role="tablist" aria-label="Filter projects by category">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={active === filter}
                onClick={() => setActive(filter)}
                className={`rounded-full px-5 py-3 text-base font-normal transition-colors sm:px-6 sm:py-4 sm:text-xl ${
                  active === filter
                    ? "bg-accent text-black"
                    : "border border-white/40 bg-white/[0.04] text-white/70 hover:bg-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <RevealStaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {visible.map((project, i) => (
              <RevealStaggerItem
                key={project.name + i}
                className={`rounded-[46px] bg-white/5 p-2.5 ${
                  project.featured ? "border border-accent shadow-[0_0_37.6px_0_rgba(125,225,18,0.31)]" : ""
                }`}
              >
                <div
                  className="h-[240px] w-full rounded-t-[40px] bg-[#888]"
                  role="img"
                  aria-label={`${project.name} project preview`}
                />
                <div className="relative overflow-hidden rounded-b-[40px] bg-white/[0.07] p-6 sm:p-8">
                  <div className="flex flex-col gap-4 pr-16">
                    <div className="flex flex-col gap-2">
                      <p className="bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display text-2xl font-bold leading-[0.9] text-transparent opacity-90 sm:text-[26px]">
                        {project.name}
                      </p>
                      <p className="font-body text-sm leading-[1.35] tracking-[0.8px] text-white/85 sm:text-base">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/[0.08] px-4 py-2 text-sm text-white/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className={`absolute bottom-6 right-6 flex size-16 items-center justify-center rounded-full ${
                      project.featured ? "bg-accent text-black" : "bg-white/10 text-white"
                    }`}
                  >
                    <ArrowUpRight className="size-6" strokeWidth={1.75} />
                  </span>
                </div>
              </RevealStaggerItem>
            ))}
          </RevealStaggerGroup>
        </div>
      </div>
    </section>
  );
}
