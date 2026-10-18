"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { RevealStaggerGroup, RevealStaggerItem } from "@/components/RevealStagger";
import GlowOrb from "@/components/GlowOrb";

type Category = "Languages" | "Frontend" | "Backend" | "Mobile" | "Database" | "Cloud & Dev-ops";

const filters: Array<"All" | Category> = ["All", "Languages", "Frontend", "Backend", "Mobile", "Database", "Cloud & Dev-ops"];

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
  { name: "AWS", logo: "/images/tech/aws.svg", category: "Cloud & Dev-ops", description: "Cognito, Bedrock, Aurora DB, S3, EC2 & Amplify" },
  { name: "Docker", logo: "/images/tech/docker.svg", category: "Cloud & Dev-ops", description: "Multi-stage containerization, Compose & Isolated" },
  { name: "Kubernetes", logo: "/images/tech/kubernetes.svg", category: "Cloud & Dev-ops", description: "Cluster orchestration, Pod deployment & Scaling policies" },
  { name: "JavaScript", logo: "/images/tech/javascript.svg", category: "Languages", description: "Core language for web, Node.js services & algorithms" },
  { name: "TypeScript", logo: "/images/tech/typescript.svg", category: "Languages", description: "Typed full-stack development across Next.js & NestJS" },
  { name: "Java", logo: "/images/tech/java.svg", category: "Languages", description: "OOP, Android SDK & Apache Tomcat web applications" },
  { name: "C", logo: "/images/tech/c.svg", category: "Languages", description: "Systems fundamentals, data structures & algorithms" },
  { name: "C++", logo: "/images/tech/cpp.svg", category: "Languages", description: "Object-oriented design, data structures & algorithms" },
  { name: "HTML", logo: "/images/tech/html5.svg", category: "Frontend", description: "Semantic, accessible markup for responsive interfaces" },
  { name: "Tailwind CSS", logo: "/images/tech/tailwindcss.svg", category: "Frontend", description: "Utility-first styling for responsive, consistent UIs" },
  { name: "Express.js", logo: "/images/tech/express.svg", category: "Backend", description: "RESTful APIs and middleware on Node.js" },
  { name: "PHP", logo: "/images/tech/php.svg", category: "Backend", description: "Server-side web development with PHP, HTML & SQL" },
  { name: "React Native", logo: "/images/tech/react.svg", category: "Mobile", description: "Cross-platform mobile apps with live map tracking" },
  { name: "Kotlin", logo: "/images/tech/kotlin.svg", category: "Mobile", description: "Native Android apps and game development" },
  { name: "Swift", logo: "/images/tech/swift.svg", category: "Mobile", description: "SwiftUI apps for iOS, macOS & visionOS" },
  { name: "SQL & MySQL", logo: "/images/tech/mysql.svg", category: "Database", description: "Relational modelling, queries & database concepts" },
  { name: "Git", logo: "/images/tech/git.svg", category: "Cloud & Dev-ops", description: "Version control and collaborative code management" },
  { name: "CI/CD", logo: "/images/tech/cicd.svg", category: "Cloud & Dev-ops", description: "Automated build, test and deployment pipelines" },
];

const GRID_CLASS =
  "grid grid-cols-2 tp:grid-cols-3 tl:grid-cols-5 dt:grid-cols-5 gap-x-[1.674vh] tp:gap-x-[1.453vh] tl:gap-x-[1.938vh] dt:gap-x-[1.961vh] gap-y-[3.347vh] tp:gap-y-[3.198vh] tl:gap-y-[4.264vh] dt:gap-y-[5.392vh]";

const CARD_CLASS =
  "flex flex-col items-center gap-[1.464vh] tp:gap-[1.163vh] tl:gap-[1.55vh] dt:gap-[1.961vh] rounded-[2.51vh] tp:rounded-[2.035vh] tl:rounded-[2.713vh] dt:rounded-[3.489vh] bg-skill-card p-[1.674vh] tp:p-[1.744vh] tl:p-[1.938vh] dt:p-[2.537vh] text-center";

const NAME_CLASS =
  "rounded-full bg-white/[0.08] px-[1.255vh] tp:px-[1.308vh] tl:px-[1.357vh] dt:px-[1.961vh] py-[0.837vh] tp:py-[0.654vh] tl:py-[0.775vh] dt:py-[0.98vh] text-[1.569vh] tp:text-[1.453vh] tl:text-[1.647vh] dt:text-[2.206vh] font-medium text-white";

const DESC_CLASS =
  "font-body text-[1.36vh] tp:text-[1.09vh] tl:text-[1.26vh] dt:text-[1.471vh] leading-[1.35] text-white/80";

const INITIAL_COUNT = 10;

export default function Skills() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [expanded, setExpanded] = useState(false);
  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);
  const visibleSkills = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hiddenCount = filtered.length - INITIAL_COUNT;

  return (
    <section id="skills"
      className="relative overflow-hidden bg-ink px-[2.51vh] tp:px-[4.651vh] tl:px-[6.202vh] dt:px-[14.706vh] pt-[8.368vh] tp:pt-[7.267vh] tl:pt-[9.69vh] dt:pt-[13.113vh] pb-[8.368vh] tp:pb-[7.267vh] tl:pb-[9.69vh] dt:pb-[12.745vh]"
    >
      <p
        aria-hidden
        className="pointer-events-none absolute left-[-1.778vh] tp:left-[-1.235vh] tl:left-[-1.647vh] dt:left-[-2.083vh] top-[-7.531vh] tp:top-[-5.233vh] tl:top-[-6.977vh] dt:top-[-8.824vh] hidden tp:block tl:block dt:block select-none whitespace-nowrap bg-gradient-to-b from-white to-white/0 bg-clip-text font-display text-[clamp(12.552vh,24vw,36.293vh)] tp:text-[clamp(11.628vh,24vw,25.215vh)] tl:text-[clamp(11.628vh,24vw,33.62vh)] dt:text-[clamp(14.706vh,24vw,42.52vh)] font-bold leading-[0.9] text-transparent opacity-[0.02]"
      >
        Induwara
      </p>

      <GlowOrb
        className="right-[-31.381vh] tp:right-[-25.436vh] tl:right-[-43.605vh] dt:right-[-72.304vh] top-[6.276vh] tp:top-[7.267vh] tl:top-[7.752vh] dt:top-[8.088vh] size-[50.209vh] tp:size-[50.872vh] tl:size-[73.643vh] dt:size-[105.882vh] rotate-[85deg] opacity-30"
        color="#7de112"
      />

      <div className="relative mx-auto flex max-w-[125.523vh] tp:max-w-[101.744vh] tl:max-w-[116.279vh] dt:max-w-none flex-col items-start tl:items-end dt:items-end gap-[4.184vh] tp:gap-[4.07vh] tl:gap-[5.426vh] dt:gap-[7.353vh]">
        <Reveal className="flex max-w-[64.017vh] tp:max-w-[44.477vh] tl:max-w-[59.302vh] dt:max-w-[75vh] flex-col items-start gap-[1.674vh] tp:gap-[1.453vh] tl:gap-[1.938vh] dt:gap-[2.941vh] tl:items-end tl:text-right dt:items-end dt:text-right">
          <h2 className="bg-gradient-to-r from-white to-white/90 bg-clip-text font-display text-[clamp(3.766vh,7vw,8.577vh)] tp:text-[clamp(4.07vh,7vw,5.959vh)] tl:text-[clamp(3.488vh,7vw,7.946vh)] dt:text-[clamp(4.412vh,7vw,10.049vh)] font-bold leading-[0.9] text-transparent">
            My Skills
          </h2>
          <p className="font-body text-[2.092vh] tp:text-[1.744vh] tl:text-[2.132vh] dt:text-[2.941vh] leading-[1.35] tracking-[0.126vh] tp:tracking-[0.087vh] tl:tracking-[0.116vh] dt:tracking-[0.147vh] text-white/85">
            Core technical proficiencies, frameworks, cloud infrastructure, and database ecosystems.
          </p>
        </Reveal>

        <div className="flex w-full flex-col gap-[4.184vh] tp:gap-[4.07vh] tl:gap-[5.426vh] dt:gap-[6.863vh]">
          <div className="flex flex-wrap items-center gap-[1.255vh] tp:gap-[1.163vh] tl:gap-[1.938vh] dt:gap-[2.819vh]" role="tablist" aria-label="Filter skills by category">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={active === filter}
                onClick={() => {
                  setActive(filter);
                  setExpanded(false);
                }}
                className={`rounded-full px-[2.092vh] tp:px-[1.744vh] tl:px-[2.132vh] dt:px-[2.874vh] py-[1.464vh] tp:py-[1.163vh] tl:py-[1.453vh] dt:py-[1.915vh] text-[1.674vh] tp:text-[1.599vh] tl:text-[1.841vh] dt:text-[2.451vh] font-normal transition-colors ${
                  active === filter
                    ? "bg-accent text-black border-[0.105vh] tp:border-[0.073vh] tl:border-[0.097vh] dt:border-[0.123vh] border-accent"
                    : "border-[0.105vh] tp:border-[0.073vh] tl:border-[0.097vh] dt:border-[0.123vh] border-white/40 bg-white/[0.06] text-white/70 hover:bg-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full">
            {/* Invisible copy of the first 10 cards: reserves the collapsed height so filtering never shifts the page */}
            <div aria-hidden className={`${GRID_CLASS} pointer-events-none invisible ${expanded ? "hidden" : ""}`}>
              {skills.slice(0, INITIAL_COUNT).map((skill) => (
                <div key={skill.name} className={CARD_CLASS}>
                  <div className="flex size-[7.95vh] tp:size-[7.267vh] tl:size-[8.721vh] dt:size-[11.029vh] items-center justify-center" />
                  <span className={NAME_CLASS}>{skill.name}</span>
                  <p className={DESC_CLASS}>{skill.description}</p>
                </div>
              ))}
            </div>
          <RevealStaggerGroup key={`${active}-${expanded}`} className={`${GRID_CLASS} ${expanded ? "" : "absolute inset-x-0 top-0"}`}>
            {visibleSkills.map((skill) => (
              <RevealStaggerItem
                key={skill.name}
                className={CARD_CLASS}
              >
                <div className="flex size-[7.95vh] tp:size-[7.267vh] tl:size-[8.721vh] dt:size-[11.029vh] items-center justify-center">
                  <Image src={skill.logo} alt={`${skill.name} logo`} width={64} height={64} className="h-auto max-h-[5.649vh] tp:max-h-[5.087vh] tl:max-h-[6.202vh] dt:max-h-[7.843vh] w-auto max-w-[4.812vh] tp:max-w-[4.36vh] tl:max-w-[5.233vh] dt:max-w-[6.618vh]" />
                </div>
                <span className={NAME_CLASS}>
                  {skill.name}
                </span>
                <p className={DESC_CLASS}>{skill.description}</p>
              </RevealStaggerItem>
            ))}
          </RevealStaggerGroup>
          </div>

          {(
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-hidden={hiddenCount <= 0}
              tabIndex={hiddenCount <= 0 ? -1 : 0}
              className={`${hiddenCount <= 0 ? "pointer-events-none invisible" : ""} self-center rounded-full border-white/40 bg-white/[0.06] text-white/80 transition-colors hover:bg-white/10
                border-[0.105vh] tp:border-[0.073vh] tl:border-[0.097vh] dt:border-[0.123vh]
                px-[2.929vh] tp:px-[2.616vh] tl:px-[3.101vh] dt:px-[3.922vh]
                py-[1.464vh] tp:py-[1.163vh] tl:py-[1.453vh] dt:py-[1.915vh]
                text-[1.674vh] tp:text-[1.599vh] tl:text-[1.841vh] dt:text-[2.451vh]`}
            >
              {expanded ? "Show less" : `Show ${hiddenCount} more`}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
