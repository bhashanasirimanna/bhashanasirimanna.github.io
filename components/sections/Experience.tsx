"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  CalendarDaysIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  RevealStaggerGroup,
  RevealStaggerItem,
} from "@/components/RevealStagger";
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
    <div className="w-full rounded-[40px] bg-white/[0.07] p-6 sm:p-[32px]">
      <div className="flex flex-col gap-[8px] sm:flex-row sm:items-center sm:justify-between">
        <span className="inline-flex w-fit items-center gap-[12px] rounded-full bg-white/[0.08] px-[16px] py-[8px] text-[14px] font-semibold text-white">
          <CalendarDaysIcon className="size-[24px]" strokeWidth={1.75} />
          {period}
        </span>
        <span className="text-[14px] font-semibold text-accent">{org}</span>
      </div>
      <div className="mt-[32px] flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[9px]">
          <p className="bg-gradient-to-r from-white to-white/90 bg-clip-text font-display text-2xl font-bold text-transparent opacity-90 sm:text-[26px]">
            {title}
          </p>
          <p className="font-body text-sm leading-[1.35] tracking-[0.8px] text-white/85 sm:text-[16px]">
            {description}
          </p>
        </div>
        {tags && (
          <div className="flex flex-wrap gap-[8px]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/[0.08] px-[16px] py-[8px] text-[14px] text-white/80"
              >
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
    <div className="flex flex-col items-start gap-[20px]">
      <div className="flex items-center gap-[16px]">
        <Icon className="size-[33px] text-white" strokeWidth={1.75} />
        <p className="font-body text-lg text-white/70 sm:text-[20px]">
          {label}
        </p>
      </div>
      <div className="relative w-full">
        <span
          aria-hidden
          className="absolute left-[7px] z-10 top-[36px] bottom-0 w-[1px] bg-white/50 sm:left-[16px]"
        />
        <RevealStaggerGroup className="flex flex-col gap-[24px]">
          {children.map((child, i) => (
            <RevealStaggerItem
              key={i}
              className="relative gap-[22px] pl-[54px]"
            >
              <span
                aria-hidden
                className={`absolute left-[16px] z-20 -translate-x-1/2 top-[36px] size-[32px] rounded-full border-2 border-[#717171] ${i === 0 ? "bg-[#717171]" : "bg-ink"}`}
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
    <section
      id="experience"
      className="relative min-h-[1298px] overflow-hidden bg-ink px-6 py-20 sm:px-10 md:px-16 lg:px-[120px] lg:pt-[99px] lg:pb-[110px]"
    >
      <GlowOrb
        className="left-[-200px] bottom-[70px] size-[583px] opacity-[0.2]"
        color="#96FF26"
      />
      {/* <GlowOrb
        className="left-[-80px] top-[420px] size-[583px] opacity-30"
        color="#ffffff"
      /> */}

      <Reveal className=" absolute bottom-0 left-0  hidden max-w-[538px] lg:block lg:w-full">
        <div className="relative mt-20 aspect-[628/779] w-full">
        <div className=" absolute z-10 bottom-0 left-0 w-full aspect-[634/584] bg-linear-to-t from-[#121212] to-[#121212]/0" />
          <Image
            src="/images/profile/me-flip.png"
            alt="Induwara Sirimanna, portrait"
            fill
            sizes="(min-width: 1024px) 480px, 0px"
            className="object-cover object-top"
          />
        </div>
      </Reveal>

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-14 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <Reveal className="flex flex-col max-w-[508px] items-start gap-[24px] lg:items-end lg:text-left">
          <h2 className="bg-gradient-to-r from-white to-white/90 bg-clip-text font-display text-[clamp(32px,6vw,82px)] font-bold leading-[0.9] text-transparent">
            Education &amp; Experience
          </h2>
          <p className="font-body text-xl leading-[1.35] tracking-[1.2px] text-white/85 sm:text-[24px]">
            Academic foundation and professional trajectory in software
            engineering.
          </p>
        </Reveal>

        <div className="order-1 flex w-full flex-col items-start gap-10 lg:order-2 lg:max-w-[656px] lg:items-end lg:gap-[60px] lg:pt-[18px]">
          <div
            className="flex flex-wrap items-center gap-3 sm:gap-[23px]"
            role="tablist"
            aria-label="Filter experience"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active === tab}
                onClick={() => setActive(tab)}
                className={`inline-flex items-center gap-[15.36px] rounded-full px-[23.45px] py-[15.63px] text-base font-normal transition-colors sm:px-[23.45px] sm:text-[20px] ${
                  active === tab
                    ? "bg-accent text-black border border-accent"
                    : "border border-white/40 bg-white/[0.06] text-white/70 hover:bg-white/10"
                }`}
              >
                {tab === "Work Experience" &&
                  (active === tab ? (
                    <Briefcase className="size-[25px]" strokeWidth={1.75} />
                  ) : (
                    <Image
                      src="/images/icon/work-experience-icon.png"
                      alt="Briefcase icon"
                      width={25}
                      height={25}
                      className="size-[25px]"
                    />
                  ))}
                {tab === "Education" &&
                  (active === tab ? (
                    <GraduationCap className="size-[25px]" strokeWidth={1.75} />
                  ) : (
                    <Image
                      src="/images/icon/education-icon.png"
                      alt="Briefcase icon"
                      width={25}
                      height={25}
                      className="size-[25px]"
                    />
                  ))}
                {tab}
              </button>
            ))}
          </div>

          <div className="flex w-full flex-col gap-[44px]">
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
