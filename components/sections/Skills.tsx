"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { RevealStaggerGroup, RevealStaggerItem } from "@/components/RevealStagger";
import GlowOrb from "@/components/GlowOrb";

type Category = "Frontend" | "Backend" | "Database" | "Cloud & Dev-ops";

const filters: Array<"All" | Category> = ["All", "Frontend", "Backend", "Database", "Cloud & Dev-ops"];

const skills: Array<{
  name: string;
  logo: string;
  description: string;
  category: Category;
}> = [
  { name: "Next Js", logo: "/images/tech/nextjs.svg", category: "Frontend", description: "SSR, App Router, React Server Components & API" },
  { name: "React", logo: "/images/tech/react.svg", category: "Frontend", description: "Event-driven asynchronous services, Express &" },
  { name: "Node.js", logo: "/images/tech/nodejs.svg", category: "Backend", description: "Event-driven asynchronous services, Express &" },
  { name: "Python (FastAPI)", logo: "/images/tech/python.svg", category: "Backend", description: "Enterprise modular TypeScript APIs &" },
  { name: "Nest Js", logo: "/images/tech/nestjs.svg", category: "Backend", description: "Enterprise modular TypeScript APIs &" },
  { name: "PostgreSQL", logo: "/images/tech/postgresql.svg", category: "Database", description: "Complex schemas, Index optimization, Multi-tenancy &" },
  { name: "MongoDB", logo: "/images/tech/mongodb.svg", category: "Database", description: "Document stores, Aggregation pipelines & Distributed caching" },
  { name: "AWS", logo: "/images/tech/aws.svg", category: "Cloud & Dev-ops", description: "S3, EC2, Lambda, IAM & Cloud Architecture deployment" },
  { name: "Docker", logo: "/images/tech/docker.svg", category: "Cloud & Dev-ops", description: "Multi-stage containerization, Compose & Isolated" },
  { name: "Kubernetes", logo: "/images/tech/kubernetes.svg", category: "Cloud & Dev-ops", description: "Cluster orchestration, Pod deployment & Scaling policies" },
];

export default function Skills() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visibleSkills = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative overflow-hidden bg-ink px-6 py-20 sm:px-10 md:px-16 lg:px-[123px] lg:py-[107px]">
      <p
        aria-hidden
        className="pointer-events-none absolute -left-4 -top-16 hidden select-none whitespace-nowrap bg-gradient-to-b from-white from-[37%] to-white/0 bg-clip-text font-display text-[clamp(120px,24vw,346.96px)] font-bold leading-[0.9] text-transparent opacity-[0.02] sm:block"
      >
        Induwara
      </p>
      <GlowOrb
        className="right-[-40px] top-[186px] size-[560px] rotate-[85deg] opacity-30"
        color="#7de112"
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-start gap-10 lg:items-end lg:gap-[60px]">
        <Reveal className="flex max-w-[612px] flex-col items-start gap-4 lg:items-end lg:gap-6 lg:text-right">
          <h2 className="bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display text-[clamp(36px,7vw,82px)] font-bold leading-[0.9] text-transparent opacity-90">
            My Skills
          </h2>
          <p className="font-body text-xl leading-[1.35] tracking-[1.2px] text-white/85 sm:text-2xl">
            Core technical proficiencies, frameworks, cloud infrastructure, and database ecosystems.
          </p>
        </Reveal>

        <div className="flex w-full flex-col gap-10 lg:gap-14">
          <div className="flex flex-wrap items-center gap-3" role="tablist" aria-label="Filter skills by category">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={active === filter}
                onClick={() => setActive(filter)}
                className={`rounded-full px-5 py-3 text-base font-normal transition-colors sm:px-6 sm:text-xl ${
                  active === filter
                    ? "bg-accent text-black"
                    : "border border-white/40 bg-white/[0.06] text-white/70 hover:bg-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <RevealStaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {visibleSkills.map((skill) => (
              <RevealStaggerItem
                key={skill.name}
                className="flex flex-col items-center gap-4 rounded-[28.467px] bg-skill-card p-5 text-center"
              >
                <div className="flex size-[90px] items-center justify-center">
                  <Image src={skill.logo} alt={`${skill.name} logo`} width={64} height={64} className="h-auto max-h-16 w-auto max-w-16" />
                </div>
                <span className="rounded-full bg-white/[0.08] px-4 py-2 text-base font-medium text-white">
                  {skill.name}
                </span>
                <p className="font-body text-xs leading-[1.35] text-white/80">{skill.description}</p>
              </RevealStaggerItem>
            ))}
          </RevealStaggerGroup>
        </div>
      </div>
    </section>
  );
}
