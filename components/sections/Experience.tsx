"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import Reveal from "@/components/Reveal";
import { RevealStaggerGroup, RevealStaggerItem } from "@/components/RevealStagger";
import GlowOrb from "@/components/GlowOrb";

const workExperience = [
  {
    period: "Dec 2024 - Jun 2025",
    org: "SLIIT Tech & Enterprise Labs",
    title: "Software Engineer Intern",
    description:
      "Developed full-stack web applications and scalable APIs utilizing Next.js, NestJS, and MERN. Enhanced application reliability by ...",
    tags: ["Next Jx", "PostgreSQL", "React"],
  },
  {
    period: "Dec 2024 - Jun 2025",
    org: "SLIIT Tech & Enterprise Labs",
    title: "Software Engineer Intern",
    description:
      "Developed full-stack web applications and scalable APIs utilizing Next.js, NestJS, and MERN. Enhanced application reliability by ...",
    tags: ["Next Jx", "PostgreSQL", "React"],
  },
];

const education = [
  {
    period: "2021 - 2025",
    title: "BSc (Hons) Software Engineering",
    org: "Sri Lanka Institute of Information Technology (SLIIT)",
    description:
      "Specialized in distributed systems, modern full-stack web architectures, database design, and intelligent software ...",
  },
];

const tabs = ["Overview", "Work Experience", "Education"] as const;

function TimelineCard({
  period,
  title,
  org,
  description,
  tags,
}: {
  period: string;
  title: string;
  org: string;
  description: string;
  tags?: string[];
}) {
  return (
    <div className="w-full rounded-[40px] bg-white/[0.07] p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="inline-flex w-fit items-center gap-3 rounded-full bg-white/[0.08] px-4 py-2 text-sm font-semibold text-white">
          <Calendar className="size-[18px]" strokeWidth={1.75} />
          {period}
        </span>
        <span className="text-sm font-semibold text-accent">{org}</span>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display text-2xl font-bold leading-[0.9] text-transparent opacity-90 sm:text-[26px]">
            {title}
          </p>
          <p className="font-body text-sm leading-[1.35] tracking-[0.8px] text-white/85 sm:text-base">
            {description}
          </p>
        </div>
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/[0.08] px-4 py-2 text-sm text-white/80">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TimelineGroup({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Briefcase;
  label: string;
  children: React.ReactNode[];
}) {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex items-center gap-4">
        <Icon className="size-[28px] text-white/70" strokeWidth={1.75} />
        <p className="font-body text-lg text-white/70 sm:text-xl">{label}</p>
      </div>
      <div className="relative w-full pl-8 sm:pl-11">
        <span aria-hidden className="absolute left-[7px] top-4 bottom-4 w-px bg-white/20 sm:left-[15px]" />
        <RevealStaggerGroup className="flex flex-col gap-6">
          {children.map((child, i) => (
            <RevealStaggerItem key={i} className="relative">
              <span
                aria-hidden
                className="absolute -left-8 top-9 size-4 rounded-full border-2 border-white/40 bg-ink sm:-left-11"
              />
              {child}
            </RevealStaggerItem>
          ))}
        </RevealStaggerGroup>
      </div>
    </div>
  );
}

export default function Experience() {
  const [active, setActive] = useState<(typeof tabs)[number]>("Overview");
  const showWork = active === "Overview" || active === "Work Experience";
  const showEducation = active === "Overview" || active === "Education";

  return (
    <section id="experience" className="relative overflow-hidden bg-ink px-6 py-20 sm:px-10 md:px-16 lg:px-[120px] lg:py-[99px]">
      <GlowOrb className="left-[-280px] top-[500px] size-[583px] opacity-50" color="#7de112" />
      <GlowOrb className="left-[-80px] top-[420px] size-[583px] opacity-30" color="#ffffff" />

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-14 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <Reveal className="order-2 hidden max-w-[538px] lg:order-1 lg:block lg:w-full">
          <div className="relative mt-20 aspect-[628/779] w-full overflow-hidden rounded-[32px]">
            <Image
              src="/images/profile/education.png"
              alt="Induwara Sirimanna, portrait"
              fill
              sizes="(min-width: 1024px) 480px, 0px"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <div className="order-1 flex w-full flex-col items-start gap-10 lg:order-2 lg:max-w-[656px] lg:items-end lg:gap-[60px]">
          <Reveal className="flex flex-col items-start gap-4 lg:items-end lg:text-right">
            <h2 className="bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display text-[clamp(32px,6vw,82px)] font-bold leading-[0.9] text-transparent opacity-90">
              Education &amp; Experience
            </h2>
            <p className="font-body text-xl leading-[1.35] tracking-[1.2px] text-white/85 sm:text-2xl">
              Academic foundation and professional trajectory in software engineering.
            </p>
          </Reveal>

          <div className="flex flex-wrap items-center gap-3" role="tablist" aria-label="Filter experience">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active === tab}
                onClick={() => setActive(tab)}
                className={`inline-flex items-center gap-3 rounded-full px-5 py-3 text-base font-normal transition-colors sm:px-6 sm:text-xl ${
                  active === tab
                    ? "bg-accent text-black"
                    : "border border-white/40 bg-white/[0.06] text-white/70 hover:bg-white/10"
                }`}
              >
                {tab === "Work Experience" && <Briefcase className="size-[22px]" strokeWidth={1.75} />}
                {tab === "Education" && <GraduationCap className="size-[22px]" strokeWidth={1.75} />}
                {tab}
              </button>
            ))}
          </div>

          <div className="flex w-full flex-col gap-11">
            {showWork && (
              <TimelineGroup icon={Briefcase} label="Work Experience">
                {workExperience.map((item) => (
                  <TimelineCard key={item.period + item.title} {...item} />
                ))}
              </TimelineGroup>
            )}
            {showEducation && (
              <TimelineGroup icon={GraduationCap} label="Education">
                {education.map((item) => (
                  <TimelineCard key={item.title} {...item} />
                ))}
              </TimelineGroup>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
