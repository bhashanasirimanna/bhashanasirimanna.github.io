"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  CalendarDaysIcon,
  ChevronDown,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  RevealStaggerGroup,
  RevealStaggerItem,
} from "@/components/RevealStagger";
import GlowOrb from "@/components/GlowOrb";

type TimelineItem = {
  id: string;
  period: string;
  title: string;
  org: string;
  orgUrl?: string;
  summary: string;
  details: string[];
  tags?: string[];
};

const workExperience: TimelineItem[] = [
  {
    id: "coullax-ase",
    period: "Jun 2025 - Present",
    title: "Associate Software Engineer",
    org: "Coullax",
    orgUrl: "https://www.coullax.com",
    summary:
      "Building high-availability distributed systems, multi-tenant architecture and AI-powered features on AWS.",
    details: [
      "Implement high-availability distributed systems using advanced data structures & algorithm design.",
      "Participate in peer code reviews and integration testing to ensure adherence to architectural standards.",
      "Identify and remediate performance bottlenecks and contribute to technical debt reduction strategies.",
      "Design and integrate blockchain-based solutions to enhance data integrity and transparency across distributed application layers.",
      "Develop and maintain multi-tenant architecture, ensuring secure tenant isolation and scalable onboarding workflows using AWS Cognito, ABAC/RBAC, and custom permission models.",
      "Implement AI-powered features and integrations using AWS Bedrock, including guardrail configuration for safe, responsible AI output, to extend application intelligence and automate core business processes.",
      "Work with AWS Aurora DB and S3 for scalable data storage and persistence across distributed application layers.",
    ],
    tags: ["AWS Cognito", "AWS Bedrock", "Aurora DB", "Multi-tenancy"],
  },
  {
    id: "coullax-intern",
    period: "Dec 2024 - Jun 2025",
    title: "Software Engineering Intern",
    org: "Coullax",
    orgUrl: "https://www.coullax.com",
    summary:
      "Developed full-stack web applications and scalable APIs using Next.js, NestJS, and the MERN stack.",
    details: [
      "Developed and maintained full-stack web applications using Next.js, NestJS, and the MERN stack.",
      "Built scalable APIs and integrated modern frontend technologies to enhance user experience.",
      "Worked with Docker and Kubernetes for containerization and deployment of applications, with foundational AWS experience (EC2, Amplify) from university coursework.",
      "Integrated AI technologies to add intelligent features to projects.",
      "Collaborated in agile sprints and followed best practices in code management and software development.",
    ],
    tags: ["Next.js", "NestJS", "MERN", "Docker", "Kubernetes"],
  },
  {
    id: "freelance",
    period: "Aug 2020 - Present",
    title: "Web Developer",
    org: "Self-employed",
    summary: "Freelance web development for client and community projects.",
    details: [
      "Web Development project for Pluss Internationals PVT(LTD).",
      "Web Development for a real-time Flood Warning and Monitoring System.",
      "Web Development project for THK Electrical Engineering PVT(LTD).",
    ],
  },
];

const education: TimelineItem[] = [
  {
    id: "sliit",
    period: "Jun 2020 - Jun 2026",
    title: "BSc (Hons) Information Technology",
    org: "Sri Lanka Institute of Information Technology (SLIIT)",
    orgUrl: "https://www.sliit.lk",
    summary: "Specializing in Software Engineering (WGPA 3.09 / CGPA 3.14).",
    details: [
      "BSc (Hons) in Information Technology specializing in Software Engineering.",
      "WGPA – 3.09 / CGPA – 3.14.",
      "Group leader of university projects (2023 – 2024).",
      "Presented a research paper at the ICHORA 2026 International Conference.",
    ],
  }
];

const tabs = ["Overview", "Work Experience", "Education"] as const;

function TimelineCard({
  item,
  open,
  onToggle,
}: {
  item: TimelineItem;
  open: boolean;
  onToggle: () => void;
}) {
  const { period, title, org, orgUrl, summary, details, tags } = item;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      const card = ref.current;
      const area = card?.closest<HTMLElement>("[data-scroll-area]");
      if (!card || !area) return;
      const top = area.scrollTop + card.getBoundingClientRect().top - area.getBoundingClientRect().top;
      area.scrollTo({ top: Math.max(0, top - area.clientHeight * 0.08), behavior: "smooth" });
    }, 350);
    return () => clearTimeout(t);
  }, [open]);

  const orgClass = `min-w-0 font-semibold text-accent tp:text-right tl:text-right dt:text-right text-[1.36vh] tp:text-[1.163vh] tl:text-[1.357vh] dt:text-[1.716vh]`;

  return (
    <div
      ref={ref}
      className={`w-full transition-colors ${open ? "bg-white/[0.1]" : "bg-white/[0.07]"}
        rounded-[2.929vh] tp:rounded-[2.616vh] tl:rounded-[3.488vh] dt:rounded-[4.902vh]
        p-[2.092vh] tp:p-[2.326vh] tl:p-[2.713vh] dt:p-[3.922vh]`}
    >
      <div
        className={`flex flex-col
          gap-[0.837vh] tp:gap-[0.581vh] tl:gap-[0.775vh] dt:gap-[0.98vh]
          tp:flex-row tp:items-center tp:justify-between tl:flex-row tl:items-center tl:justify-between dt:flex-row dt:items-center dt:justify-between`}
      >
        <span
          className={`inline-flex w-fit shrink-0 items-center whitespace-nowrap rounded-full bg-white/[0.08] font-semibold text-white
            gap-[0.837vh] tp:gap-[0.872vh] tl:gap-[1.163vh] dt:gap-[1.471vh]
            px-[1.464vh] tp:px-[1.308vh] tl:px-[1.55vh] dt:px-[1.961vh]
            py-[0.837vh] tp:py-[0.727vh] tl:py-[0.775vh] dt:py-[0.98vh]
            text-[1.36vh] tp:text-[1.163vh] tl:text-[1.357vh] dt:text-[1.716vh]`}
        >
          <CalendarDaysIcon
            className={`size-[2.092vh] tp:size-[1.89vh] tl:size-[2.326vh] dt:size-[2.941vh]`}
            strokeWidth={1.75}
          />
          {period}
        </span>
        {orgUrl ? (
          <a
            href={orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${orgClass} underline-offset-[0.4vh] hover:underline focus-visible:underline`}
          >
            {org}
          </a>
        ) : (
          <span className={orgClass}>{org}</span>
        )}
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`flex w-full cursor-pointer items-start text-left outline-none focus-visible:ring-2 focus-visible:ring-accent
          mt-[2.092vh] tp:mt-[2.326vh] tl:mt-[3.101vh] dt:mt-[3.922vh]
          gap-[1.464vh] tp:gap-[1.163vh] tl:gap-[1.55vh] dt:gap-[1.961vh]
          rounded-[1.255vh] tp:rounded-[1.017vh] tl:rounded-[1.357vh] dt:rounded-[1.716vh]`}
      >
        <div className={`flex min-w-0 flex-1 flex-col gap-[0.837vh] tp:gap-[0.727vh] tl:gap-[0.872vh] dt:gap-[1.103vh]`}>
          <p
            className={`bg-gradient-to-r from-white to-white/90 bg-clip-text font-display font-bold leading-[1.231] text-transparent opacity-90
              text-[2.51vh] tp:text-[2.18vh] tl:text-[2.519vh] dt:text-[3.186vh]`}
          >
            {title}
          </p>
          <p
            className={`font-body leading-[1.35] text-white/85 ${open ? "" : "line-clamp-2"}
              text-[1.464vh] tp:text-[1.308vh] tl:text-[1.55vh] dt:text-[1.961vh]
              tracking-[0.063vh] tp:tracking-[0.073vh] tl:tracking-[0.078vh] dt:tracking-[0.098vh]`}
          >
            {summary}
          </p>
        </div>
        <span
          aria-hidden
          className={`flex shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-white transition-transform duration-300 ${open ? "rotate-180" : ""}
            size-[4.603vh] tp:size-[3.924vh] tl:size-[4.651vh] dt:size-[5.882vh]`}
        >
          <ChevronDown
            className={`size-[2.51vh] tp:size-[2.18vh] tl:size-[2.519vh] dt:size-[3.186vh]`}
            strokeWidth={1.75}
          />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={`flex flex-col
              pt-[1.464vh] tp:pt-[1.163vh] tl:pt-[1.55vh] dt:pt-[1.961vh]
              gap-[1.464vh] tp:gap-[1.163vh] tl:gap-[1.55vh] dt:gap-[1.961vh]`}
          >
            <ul className={`flex flex-col gap-[0.837vh] tp:gap-[0.727vh] tl:gap-[0.872vh] dt:gap-[1.103vh]`}>
              {details.map((line) => (
                <li
                  key={line}
                  className={`flex font-body leading-[1.35] text-white/85
                    gap-[1.046vh] tp:gap-[0.872vh] tl:gap-[1.163vh] dt:gap-[1.471vh]
                    text-[1.464vh] tp:text-[1.308vh] tl:text-[1.55vh] dt:text-[1.961vh]
                    tracking-[0.063vh] tp:tracking-[0.073vh] tl:tracking-[0.078vh] dt:tracking-[0.098vh]`}
                >
                  <span
                    aria-hidden
                    className={`shrink-0 rounded-full bg-accent
                      mt-[0.69vh] tp:mt-[0.581vh] tl:mt-[0.775vh] dt:mt-[0.98vh]
                      size-[0.628vh] tp:size-[0.436vh] tl:size-[0.581vh] dt:size-[0.735vh]`}
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            {tags && (
              <div className={`flex flex-wrap gap-[0.837vh] tp:gap-[0.727vh] tl:gap-[0.775vh] dt:gap-[0.98vh]`}>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full bg-white/[0.08] text-white/80
                      px-[1.464vh] tp:px-[1.308vh] tl:px-[1.55vh] dt:px-[1.961vh]
                      py-[0.732vh] tp:py-[0.727vh] tl:py-[0.775vh] dt:py-[0.98vh]
                      text-[1.36vh] tp:text-[1.163vh] tl:text-[1.357vh] dt:text-[1.716vh]`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollArea({ scrollable, children }: { scrollable: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [fade, setFade] = useState({ top: false, bottom: false });

  useEffect(() => {
    const el = ref.current;
    if (!el || !scrollable) return;
    const update = () =>
      setFade({
        top: el.scrollTop > 2,
        bottom: el.scrollTop + el.clientHeight < el.scrollHeight - 2,
      });
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    if (el.firstElementChild) ro.observe(el.firstElementChild);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [scrollable]);

  if (!scrollable) return <div className="relative w-full">{children}</div>;

  const edge = "7vh";
  const mask = `linear-gradient(to bottom, ${fade.top ? `transparent 0, #000 ${edge}` : "#000 0"}, ${
    fade.bottom ? `#000 calc(100% - ${edge}), transparent 100%` : "#000 100%"
  })`;

  return (
    <div
      ref={ref}
      data-scroll-area
      data-lenis-prevent
      style={{ maskImage: mask, WebkitMaskImage: mask }}
      className="relative max-h-[60dvh] w-full overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {children}
    </div>
  );
}

function TimelineGroup({
  icon: Icon,
  label,
  scrollable,
  children,
}: {
  icon: typeof Briefcase;
  label: string;
  scrollable?: boolean;
  children: React.ReactNode[];
}) {
  return (
    <div
      className={`flex flex-col items-start gap-[1.674vh] tp:gap-[1.744vh] tl:gap-[1.938vh] dt:gap-[2.451vh]`}
    >
      <div className={`flex items-center gap-[1.255vh] tp:gap-[1.163vh] tl:gap-[1.55vh] dt:gap-[1.961vh]`}>
        <Icon
          className={`text-white size-[2.929vh] tp:size-[2.616vh] tl:size-[3.198vh] dt:size-[4.044vh]`}
          strokeWidth={1.75}
        />
        <p
          className={`font-body leading-[1.4] text-white/70
            text-[1.883vh] tp:text-[1.744vh] tl:text-[1.938vh] dt:text-[2.451vh]`}
        >
          {label}
        </p>
      </div>
      <ScrollArea scrollable={!!scrollable}>
        <div className="relative w-full">
          <span
            aria-hidden
            className={`absolute z-10 bottom-0 bg-white/50
              left-[1.255vh] tp:left-[1.017vh] tl:left-[1.55vh] dt:left-[1.961vh]
              top-[2.72vh] tp:top-[2.98vh] tl:top-[3.101vh] dt:top-[4.412vh]
              w-[0.105vh] tp:w-[0.073vh] tl:w-[0.097vh] dt:w-[0.123vh]`}
          />
          <RevealStaggerGroup
            className={`flex flex-col gap-[1.674vh] tp:gap-[1.744vh] tl:gap-[2.326vh] dt:gap-[2.941vh]`}
          >
            {children.map((child, i) => (
              <RevealStaggerItem
                key={i}
                className={`relative pl-[4.184vh] tp:pl-[3.488vh] tl:pl-[5.233vh] dt:pl-[6.618vh]`}
              >
                <span
                  aria-hidden
                  className={`absolute z-20 -translate-x-1/2 rounded-full border-[#717171] ${i === 0 ? "bg-[#717171]" : "bg-ink"}
                    left-[1.255vh] tp:left-[1.017vh] tl:left-[1.55vh] dt:left-[1.961vh]
                    top-[2.72vh] tp:top-[2.98vh] tl:top-[3.101vh] dt:top-[4.412vh]
                    size-[2.51vh] tp:size-[2.035vh] tl:size-[3.101vh] dt:size-[3.922vh]
                    border-[0.209vh] tp:border-[0.145vh] tl:border-[0.194vh] dt:border-[0.245vh]`}
                />
                {child}
              </RevealStaggerItem>
            ))}
          </RevealStaggerGroup>
        </div>
      </ScrollArea>
    </div>
  );
}

export default function Experience() {
  const [active, setActive] = useState<(typeof tabs)[number]>("Overview");
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id));
  const showWork = active === "Overview" || active === "Work Experience";
  const showEducation = active === "Overview" || active === "Education";

  return (
    <section
      id="experience"
      className={`relative overflow-x-clip
        px-[2.092vh] tp:px-[4.651vh] tl:px-[7.752vh] dt:px-[14.706vh]
        pt-[6.695vh] tp:pt-[6.977vh] tl:pt-[7.752vh] dt:pt-[12.132vh]
        pb-[6.695vh] tp:pb-[6.977vh] tl:pb-[8.721vh] dt:pb-[13.48vh]
        dt:min-h-[159.069vh]`}
    >
      <GlowOrb
        className={`opacity-[0.2]
          left-[-12.552vh] tp:left-[-11.628vh] tl:left-[-14.535vh] dt:left-[-24.51vh]
          bottom-[4.184vh] tp:bottom-[5.814vh] tl:bottom-[5.814vh] dt:bottom-[8.578vh]
          size-[31.381vh] tp:size-[36.337vh] tl:size-[46.512vh] dt:size-[71.446vh]`}
        color="#96FF26"
      />

      <Reveal
        className={`absolute bottom-0 left-0 hidden w-full tl:block dt:block
          tl:max-w-[38.76vh] dt:max-w-[65.931vh]`}
      >
        <div className={`relative aspect-[628/779] w-full tl:mt-[5.814vh] dt:mt-[9.804vh]`}>
          <div className="absolute z-10 bottom-0 left-0 w-full aspect-[634/584] bg-linear-to-t from-[#121212] to-[#121212]/0" />
          <Image
            src="/images/profile/me-flip.png"
            alt="Induwara Sirimanna, portrait"
            fill
            sizes="(min-width: 1024px) 480px, 0px"
            className="object-cover object-top"
          />
        </div>
      </Reveal>

      <div
        className={`relative mx-auto flex w-full flex-col tl:flex-row dt:flex-row tl:justify-between dt:justify-between tl:items-start dt:items-start
          gap-[4.603vh] tp:gap-[4.07vh] tl:gap-[3.876vh] dt:gap-[4.902vh]
          tl:max-w-[117.829vh] dt:max-w-none`}
      >
        <Reveal
          className={`flex flex-col items-start tl:items-end dt:items-end
            gap-[1.674vh] tp:gap-[1.744vh] tl:gap-[1.938vh] dt:gap-[2.941vh]
            tp:max-w-[46.512vh] tl:max-w-[40.698vh] dt:max-w-[62.255vh]`}
        >
          <h2
            className={`bg-gradient-to-r from-white to-white/90 bg-clip-text font-display font-bold leading-[0.9] text-transparent
              text-[clamp(3.556vh,10vw,5.021vh)] tp:text-[clamp(4.07vh,10vw,6.105vh)] tl:text-[clamp(3.876vh,10vw,6.977vh)] dt:text-[clamp(3.922vh,10vw,10.049vh)]`}
          >
            Education &amp; Experience
          </h2>
          <p
            className={`font-body leading-[1.35] text-white/85
              text-[1.883vh] tp:text-[1.744vh] tl:text-[1.938vh] dt:text-[2.941vh]
              tracking-[0.084vh] tp:tracking-[0.087vh] tl:tracking-[0.097vh] dt:tracking-[0.147vh]`}
          >
            Academic foundation and professional trajectory in software
            engineering.
          </p>
        </Reveal>

        <div
          className={`flex w-full flex-col items-start tl:items-end dt:items-end
            gap-[2.929vh] tp:gap-[2.907vh] tl:gap-[4.651vh] dt:gap-[7.353vh]
            tl:max-w-[62.016vh] dt:max-w-[80.392vh]
            pt-[0vh] tp:pt-[0vh] tl:pt-[1.357vh] dt:pt-[2.206vh]`}
        >
          <div
            className={`flex flex-wrap items-center
              gap-[0.837vh] tp:gap-[1.163vh] tl:gap-[1.163vh] dt:gap-[2.819vh]`}
            role="tablist"
            aria-label="Filter experience"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active === tab}
                onClick={() => {
                  setActive(tab);
                  setOpenId(null);
                }}
                className={`inline-flex items-center rounded-full font-normal transition-colors
                  gap-[1.046vh] tp:gap-[0.872vh] tl:gap-[1.163vh] dt:gap-[1.882vh]
                  px-[1.674vh] tp:px-[1.599vh] tl:px-[2.132vh] dt:px-[2.874vh]
                  py-[1.151vh] tp:py-[1.017vh] tl:py-[1.357vh] dt:py-[1.915vh]
                  text-[1.569vh] tp:text-[1.308vh] tl:text-[1.744vh] dt:text-[2.451vh]
                  border-[0.105vh] tp:border-[0.073vh] tl:border-[0.097vh] dt:border-[0.123vh]
                  ${
                  active === tab
                    ? "bg-accent text-black border-accent"
                    : "border-white/40 bg-white/[0.06] text-white/70 hover:bg-white/10"
                }`}
              >
                {tab === "Work Experience" &&
                  (active === tab ? (
                    <Briefcase
                      className={`size-[2.092vh] tp:size-[1.89vh] tl:size-[2.132vh] dt:size-[3.064vh]`}
                      strokeWidth={1.75}
                    />
                  ) : (
                    <Image
                      src="/images/icon/work-experience-icon.png"
                      alt="Briefcase icon"
                      width={25}
                      height={25}
                      className={`size-[2.092vh] tp:size-[1.89vh] tl:size-[2.132vh] dt:size-[3.064vh]`}
                    />
                  ))}
                {tab === "Education" &&
                  (active === tab ? (
                    <GraduationCap
                      className={`size-[2.092vh] tp:size-[1.89vh] tl:size-[2.132vh] dt:size-[3.064vh]`}
                      strokeWidth={1.75}
                    />
                  ) : (
                    <Image
                      src="/images/icon/education-icon.png"
                      alt="Briefcase icon"
                      width={25}
                      height={25}
                      className={`size-[2.092vh] tp:size-[1.89vh] tl:size-[2.132vh] dt:size-[3.064vh]`}
                    />
                  ))}
                {tab}
              </button>
            ))}
          </div>

          <div className={`flex w-full flex-col gap-[3.347vh] tp:gap-[3.198vh] tl:gap-[4.264vh] dt:gap-[5.392vh]`}>
            {showWork && (
              <TimelineGroup icon={Briefcase} label="Work Experience" scrollable={workExperience.some((i) => i.id === openId)}>
                {workExperience.map((item) => (
                  <TimelineCard key={item.id} item={item} open={openId === item.id} onToggle={() => toggle(item.id)} />
                ))}
              </TimelineGroup>
            )}
            {showEducation && (
              <TimelineGroup icon={GraduationCap} label="Education" scrollable={education.some((i) => i.id === openId)}>
                {education.map((item) => (
                  <TimelineCard key={item.id} item={item} open={openId === item.id} onToggle={() => toggle(item.id)} />
                ))}
              </TimelineGroup>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
