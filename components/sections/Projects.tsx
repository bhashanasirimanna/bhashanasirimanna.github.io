"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FileText, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import { RevealStaggerGroup, RevealStaggerItem } from "@/components/RevealStagger";
import GlowOrb from "@/components/GlowOrb";
import GithubIcon from "@/components/icons/GithubIcon";
import { projectImage, projects, type Category, type Project } from "@/lib/projects";

const filters: Array<"All" | Category> = ["All", "AI & Enterprise", "Web", "Mobile"];

const INITIAL_COUNT = 6;

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [reservedHeight, setReservedHeight] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hiddenCount = filtered.length - INITIAL_COUNT;

  // Remember the height of the collapsed "All" grid so filtering never shifts the page.
  useEffect(() => {
    const el = gridRef.current;
    if (!el || active !== "All" || expanded) return;
    const ro = new ResizeObserver(() => setReservedHeight(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, [active, expanded]);

  return (
    <section
      id="projects"
      className={`relative overflow-x-clip
        px-[2.092vh] tp:px-[4.651vh] tl:px-[7.752vh] dt:px-[14.706vh]
        pt-[6.695vh] tp:pt-[6.977vh] tl:pt-[8.721vh] dt:pt-[11.887vh]
        pb-[6.695vh] tp:pb-[6.977vh] tl:pb-[9.69vh] dt:pb-[13.848vh]`}
    >
      <GlowOrb
        className={`opacity-[0.12]
          -right-[14.644vh] tp:-right-[13.081vh] tl:-right-[15.504vh] dt:-right-[17.157vh]
          top-[4.184vh] tp:top-[4.36vh] tl:top-[4.845vh] dt:top-[6.25vh]
          size-[33.473vh] tp:size-[37.791vh] tl:size-[48.45vh] dt:size-[71.446vh]`}
        color="#96FF26"
      />

      <div
        className={`relative mx-auto flex w-full flex-col tl:items-end dt:items-end
          gap-[4.184vh] tp:gap-[4.07vh] tl:gap-[6.977vh] dt:gap-[11.887vh]
          tl:max-w-[117.829vh] dt:max-w-none`}
      >
        <Reveal
          className={`flex flex-col items-start tl:items-end dt:items-end tl:text-right dt:text-right
            gap-[1.674vh] tp:gap-[1.453vh] tl:gap-[1.938vh] dt:gap-[2.941vh]
            tp:max-w-[46.512vh] tl:max-w-[48.45vh] dt:max-w-[65.441vh]`}
        >
          <h2
            className={`bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display font-bold leading-[1.3] text-transparent opacity-90
              text-[clamp(3.766vh,11vw,5.021vh)] tp:text-[clamp(4.07vh,11vw,6.105vh)] tl:text-[clamp(5.426vh,11vw,6.977vh)] dt:text-[clamp(4.412vh,11vw,10.049vh)]`}
          >
            My Projects
          </h2>
          <p
            className={`font-body leading-[1.35] text-white/85
              text-[1.883vh] tp:text-[1.744vh] tl:text-[1.938vh] dt:text-[2.941vh]
              tracking-[0.084vh] tp:tracking-[0.087vh] tl:tracking-[0.097vh] dt:tracking-[0.147vh]`}
          >
            A comprehensive catalog of {projects.length} engineering works across Enterprise AI, full-stack web, and mobile
            ecosystems.
          </p>
        </Reveal>

        <div
          className={`flex w-full flex-col
            gap-[2.929vh] tp:gap-[2.907vh] tl:gap-[4.651vh] dt:gap-[7.843vh]
            tl:max-w-[117.829vh] dt:max-w-none`}
        >
          <div
            className={`flex flex-wrap items-center gap-[0.837vh] tp:gap-[0.872vh] tl:gap-[1.163vh] dt:gap-[1.471vh]`}
            role="tablist"
            aria-label="Filter projects by category"
          >
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
                className={`rounded-full font-normal leading-[1.4] transition-colors
                  px-[2.092vh] tp:px-[1.744vh] tl:px-[2.326vh] dt:px-[2.941vh]
                  py-[1.151vh] tp:py-[1.017vh] tl:py-[1.357vh] dt:py-[1.961vh]
                  text-[1.569vh] tp:text-[1.308vh] tl:text-[1.744vh] dt:text-[2.451vh]
                  ${
                  active === filter
                    ? "bg-accent text-black"
                    : `bg-white/[0.04] text-white/70 hover:bg-white/10 border-[0.105vh] tp:border-[0.073vh] tl:border-[0.097vh] dt:border-[0.123vh] border-white/40`
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div style={{ minHeight: expanded ? undefined : reservedHeight || undefined }}>
          <div ref={gridRef}>
          <RevealStaggerGroup key={`${active}-${expanded}`}
            className={`grid grid-cols-1 tp:grid-cols-2 tl:grid-cols-2 dt:grid-cols-2
              gap-[2.092vh] tp:gap-[2.035vh] tl:gap-[3.101vh] dt:gap-[3.922vh]`}
          >
            {visible.map((project) => (
              <RevealStaggerItem
                key={project.name}
                className={`cursor-pointer bg-white/5 transition-colors hover:bg-white/[0.08]
                  rounded-[3.138vh] tp:rounded-[2.616vh] tl:rounded-[4.264vh] dt:rounded-[5.637vh]
                  p-[0.628vh] tp:p-[0.581vh] tl:p-[0.969vh] dt:p-[1.225vh]
                  ${
                  project.featured
                    ? `border-[0.105vh] tp:border-[0.073vh] tl:border-[0.097vh] dt:border-[0.123vh] border-accent shadow-[0_0_2.615vh_0_rgba(125,225,18,0.31)] tp:shadow-[0_0_2.18vh_0_rgba(125,225,18,0.31)] tl:shadow-[0_0_3.391vh_0_rgba(125,225,18,0.31)] dt:shadow-[0_0_4.608vh_0_rgba(125,225,18,0.31)]`
                    : ""
                }`}
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-haspopup="dialog"
                  aria-label={`View details for ${project.name}`}
                  onClick={() => setSelected(project)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(project);
                    }
                  }}
                  className={`outline-none focus-visible:ring-accent
                    rounded-[2.51vh] tp:rounded-[2.035vh] tl:rounded-[3.488vh] dt:rounded-[4.902vh]
                    focus-visible:ring-[0.209vh] tp:focus-visible:ring-[0.145vh] tl:focus-visible:ring-[0.194vh] dt:focus-visible:ring-[0.245vh]`}
                >
                  <div
                    className={`relative w-full overflow-hidden ${
                      project.logoCover ? "bg-white" : "bg-white/[0.06]"
                    }
                    h-[20.921vh] tp:h-[17.442vh] tl:h-[24.225vh] dt:h-[29.412vh]
                    rounded-t-[2.51vh] tp:rounded-t-[2.035vh] tl:rounded-t-[3.488vh] dt:rounded-t-[4.902vh]`}
                  >
                    {project.images?.[0] ? (
                      <Image
                        src={projectImage(project.images[0])}
                        alt={`${project.name} project preview`}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className={
                          project.logoCover
                            ? `object-contain p-[2.929vh] tp:p-[2.907vh] tl:p-[3.876vh] dt:p-[4.902vh]`
                            : "object-cover object-top"
                        }
                      />
                    ) : (
                      <div
                        className={`flex size-full items-center justify-center text-center font-display font-bold text-white/30
                          px-[2.092vh] tp:px-[1.744vh] tl:px-[2.326vh] dt:px-[2.941vh]
                          text-[2.72vh] tp:text-[2.18vh] tl:text-[2.907vh] dt:text-[3.676vh]`}
                      >
                        {project.name}
                      </div>
                    )}
                  </div>
                  <div
                    className={`relative overflow-hidden bg-white/[0.07]
                      rounded-b-[2.51vh] tp:rounded-b-[2.035vh] tl:rounded-b-[3.488vh] dt:rounded-b-[4.902vh]
                      p-[2.092vh] tp:p-[1.744vh] tl:p-[2.713vh] dt:p-[3.922vh]`}
                  >
                    <div
                      className={`flex flex-col
                        gap-[1.464vh] tp:gap-[1.163vh] tl:gap-[1.55vh] dt:gap-[1.961vh]
                        pr-[5.858vh] tp:pr-[4.942vh] tl:pr-[6.977vh] dt:pr-[7.843vh]`}
                    >
                      <div className={`flex flex-col gap-[0.837vh] tp:gap-[0.581vh] tl:gap-[0.775vh] dt:gap-[0.98vh]`}>
                        <p
                          className={`bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display font-bold leading-[0.9] text-transparent opacity-90
                            text-[2.51vh] tp:text-[1.744vh] tl:text-[2.519vh] dt:text-[3.186vh]`}
                        >
                          {project.name}
                        </p>
                        <p
                          className={`line-clamp-3 font-body leading-[1.35] text-white/85
                            text-[1.464vh] tp:text-[1.09vh] tl:text-[1.55vh] dt:text-[1.961vh]
                            tracking-[0.063vh] tp:tracking-[0.051vh] tl:tracking-[0.078vh] dt:tracking-[0.098vh]`}
                        >
                          {project.summary}
                        </p>
                      </div>
                      <div className={`flex flex-wrap gap-[0.837vh] tp:gap-[0.581vh] tl:gap-[0.775vh] dt:gap-[0.98vh]`}>
                        {project.technologies.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-full bg-white/[0.08] text-white/80
                              px-[1.464vh] tp:px-[1.017vh] tl:px-[1.55vh] dt:px-[1.961vh]
                              py-[0.732vh] tp:py-[0.509vh] tl:py-[0.775vh] dt:py-[0.98vh]
                              text-[1.36vh] tp:text-[1.017vh] tl:text-[1.357vh] dt:text-[1.716vh]`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span
                      aria-hidden
                      className={`absolute flex items-center justify-center rounded-full ${
                        project.featured ? "bg-accent text-black" : "bg-white/10 text-white"
                      }
                      bottom-[1.674vh] tp:bottom-[1.453vh] tl:bottom-[2.132vh] dt:bottom-[2.941vh]
                      right-[1.674vh] tp:right-[1.453vh] tl:right-[2.132vh] dt:right-[2.941vh]
                      size-[5.021vh] tp:size-[4.07vh] tl:size-[5.814vh] dt:size-[7.843vh]`}
                    >
                      <ArrowUpRight className={`size-[2.092vh] tp:size-[1.599vh] tl:size-[2.326vh] dt:size-[2.941vh]`} strokeWidth={1.75} />
                    </span>
                  </div>
                </div>
              </RevealStaggerItem>
            ))}
          </RevealStaggerGroup>
          </div>
          </div>

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
            {expanded ? "Show less" : `Show ${Math.max(hiddenCount, 0)} more`}
          </button>
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/70
            p-[1.255vh] tp:p-[1.744vh] tl:p-[2.326vh] dt:p-[1.961vh]
            backdrop-blur-[0.418vh] tp:backdrop-blur-[0.291vh] tl:backdrop-blur-[0.388vh] dt:backdrop-blur-[0.49vh]`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            data-lenis-prevent
            aria-labelledby="project-modal-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: "2.941vh", scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: "2.941vh", scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`relative flex max-h-[90dvh] w-full flex-col overflow-hidden border-white/10 bg-ink
              tp:max-w-[55.233vh] tl:max-w-[81.395vh] dt:max-w-[102.941vh]
              rounded-[2.092vh] tp:rounded-[2.035vh] tl:rounded-[2.713vh] dt:rounded-[3.431vh]
              border-[0.105vh] tp:border-[0.073vh] tl:border-[0.097vh] dt:border-[0.123vh]
              shadow-[0_0_2.615vh_0_rgba(125,225,18,0.15)] tp:shadow-[0_0_2.18vh_0_rgba(125,225,18,0.15)] tl:shadow-[0_0_3.391vh_0_rgba(125,225,18,0.15)] dt:shadow-[0_0_4.608vh_0_rgba(125,225,18,0.15)]`}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className={`absolute z-10 flex items-center justify-center rounded-full border-white/10 bg-ink/80 text-white backdrop-blur-sm transition-colors hover:bg-white/15
                right-[1.255vh] tp:right-[1.453vh] tl:right-[2.713vh] dt:right-[3.431vh]
                top-[1.255vh] tp:top-[1.453vh] tl:top-[2.713vh] dt:top-[3.431vh]
                size-[4.812vh] tp:size-[3.488vh] tl:size-[4.264vh] dt:size-[5.392vh]
                border-[0.105vh] tp:border-[0.073vh] tl:border-[0.097vh] dt:border-[0.123vh]`}
            >
              <X className={`size-[2.092vh] tp:size-[1.599vh] tl:size-[1.938vh] dt:size-[2.451vh]`} />
            </button>

            <div
              data-lenis-prevent
              className={`min-h-0 flex-1 overflow-y-auto overscroll-contain
                p-[2.092vh] tp:p-[2.616vh] tl:p-[3.488vh] dt:p-[4.902vh]`}
            >
              <div
                className={`flex flex-wrap items-center
                  gap-[0.837vh] tp:gap-[0.872vh] tl:gap-[1.163vh] dt:gap-[1.471vh]
                  pr-[5.439vh] tp:pr-[4.651vh] tl:pr-[5.426vh] dt:pr-[6.863vh]`}
              >
                <span
                  className={`rounded-full border-accent/40 bg-accent/10 text-accent
                    border-[0.105vh] tp:border-[0.073vh] tl:border-[0.097vh] dt:border-[0.123vh]
                    px-[1.464vh] tp:px-[1.163vh] tl:px-[1.55vh] dt:px-[1.961vh]
                    py-[0.628vh] tp:py-[0.436vh] tl:py-[0.581vh] dt:py-[0.735vh]
                    text-[1.36vh] tp:text-[1.017vh] tl:text-[1.357vh] dt:text-[1.716vh]`}
                >
                  {project.category}
                </span>
                <span className={`font-mono text-white/60 text-[1.36vh] tp:text-[1.017vh] tl:text-[1.357vh] dt:text-[1.716vh]`}>{project.period}</span>
              </div>

              <h3
                id="project-modal-title"
                className={`font-display font-bold leading-none text-white
                  mt-[1.674vh] tp:mt-[1.453vh] tl:mt-[1.938vh] dt:mt-[2.451vh]
                  text-[3.347vh] tp:text-[3.198vh] tl:text-[4.651vh] dt:text-[5.882vh]`}
              >
                {project.title ?? project.name}
              </h3>

              {project.intro.map((para) => (
                <p
                  key={para}
                  className={`font-body leading-[1.6] text-white/80
                    mt-[2.092vh] tp:mt-[1.744vh] tl:mt-[2.326vh] dt:mt-[2.941vh]
                    text-[1.569vh] tp:text-[1.381vh] tl:text-[1.938vh] dt:text-[2.451vh]`}
                >
                  {para}
                </p>
              ))}

              {project.sections?.map((section) => (
                <div key={section.heading} className={`mt-[2.929vh] tp:mt-[2.326vh] tl:mt-[3.101vh] dt:mt-[3.922vh]`}>
                  <p
                    className={`font-mono uppercase tracking-[0.1em] text-white/50
                      text-[1.151vh] tp:text-[0.872vh] tl:text-[1.163vh] dt:text-[1.471vh]`}
                  >
                    {section.heading}
                  </p>
                  <ul className={`flex flex-col mt-[1.046vh] tp:mt-[0.872vh] tl:mt-[1.163vh] dt:mt-[1.471vh] gap-[1.046vh] tp:gap-[0.872vh] tl:gap-[1.163vh] dt:gap-[1.471vh]`}>
                    {section.items.map((item) => {
                      const label = typeof item === "string" ? null : item.label;
                      const text = typeof item === "string" ? item : item.text;
                      return (
                        <li
                          key={text}
                          className={`flex font-body leading-[1.55] text-white/80
                            gap-[1.046vh] tp:gap-[0.872vh] tl:gap-[1.163vh] dt:gap-[1.471vh]
                            text-[1.569vh] tp:text-[1.235vh] tl:text-[1.55vh] dt:text-[1.961vh]`}
                        >
                          <span
                            aria-hidden
                            className={`shrink-0 rounded-full bg-accent
                              mt-[0.941vh] tp:mt-[0.727vh] tl:mt-[0.969vh] dt:mt-[1.225vh]
                              size-[0.628vh] tp:size-[0.436vh] tl:size-[0.581vh] dt:size-[0.735vh]`}
                          />
                          <span>
                            {label && <strong className="font-semibold text-white">{label}: </strong>}
                            {text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}

              {project.images && project.images.length > 0 && !project.logoCover && (
                <div
                  className={`grid ${
                    project.images.length > 1 ? "tp:grid-cols-2 tl:grid-cols-2 dt:grid-cols-2" : ""
                  }
                  mt-[2.929vh] tp:mt-[2.326vh] tl:mt-[3.101vh] dt:mt-[3.922vh]
                  gap-[1.046vh] tp:gap-[0.872vh] tl:gap-[1.163vh] dt:gap-[1.471vh]`}
                >
                  {project.images.map((file) => (
                    <div
                      key={file}
                      className={`relative aspect-[4/3] overflow-hidden border-white/10 bg-white/[0.05]
                        rounded-[1.464vh] tp:rounded-[1.163vh] tl:rounded-[1.55vh] dt:rounded-[1.961vh]
                        border-[0.105vh] tp:border-[0.073vh] tl:border-[0.097vh] dt:border-[0.123vh]`}
                    >
                      <Image
                        src={projectImage(file)}
                        alt={`${project.name} screenshot`}
                        fill
                        sizes="(min-width: 840px) 380px, 90vw"
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}

              <p
                className={`font-mono uppercase tracking-[0.1em] text-white/50
                  mt-[2.929vh] tp:mt-[2.326vh] tl:mt-[3.101vh] dt:mt-[3.922vh]
                  text-[1.151vh] tp:text-[0.872vh] tl:text-[1.163vh] dt:text-[1.471vh]`}
              >
                Technologies &amp; Architecture
              </p>
              <div className={`flex flex-wrap mt-[1.046vh] tp:mt-[0.872vh] tl:mt-[1.163vh] dt:mt-[1.471vh] gap-[0.837vh] tp:gap-[0.581vh] tl:gap-[0.775vh] dt:gap-[0.98vh]`}>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full border-white/10 bg-white/[0.07] text-accent
                      border-[0.105vh] tp:border-[0.073vh] tl:border-[0.097vh] dt:border-[0.123vh]
                      px-[1.464vh] tp:px-[1.163vh] tl:px-[1.55vh] dt:px-[1.961vh]
                      py-[0.628vh] tp:py-[0.436vh] tl:py-[0.581vh] dt:py-[0.735vh]
                      text-[1.36vh] tp:text-[1.017vh] tl:text-[1.357vh] dt:text-[1.716vh]`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className={`flex flex-wrap items-center border-white/10
                  mt-[2.929vh] tp:mt-[2.326vh] tl:mt-[3.101vh] dt:mt-[3.922vh]
                  gap-[1.046vh] tp:gap-[0.872vh] tl:gap-[1.163vh] dt:gap-[1.471vh]
                  border-t-[0.105vh] tp:border-t-[0.073vh] tl:border-t-[0.097vh] dt:border-t-[0.123vh]
                  pt-[2.929vh] tp:pt-[2.326vh] tl:pt-[3.101vh] dt:pt-[3.922vh]`}
              >
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center bg-accent font-medium text-black transition-opacity hover:opacity-90
                      gap-[0.837vh] tp:gap-[0.581vh] tl:gap-[0.775vh] dt:gap-[0.98vh]
                      rounded-[1.255vh] tp:rounded-[0.872vh] tl:rounded-[1.163vh] dt:rounded-[1.471vh]
                      px-[2.092vh] tp:px-[1.744vh] tl:px-[2.326vh] dt:px-[2.941vh]
                      py-[1.36vh] tp:py-[1.017vh] tl:py-[1.357vh] dt:py-[1.716vh]
                      text-[1.569vh] tp:text-[1.163vh] tl:text-[1.55vh] dt:text-[1.961vh]
                      shadow-[0_0_1.569vh_0_rgba(125,225,18,0.35)] tp:shadow-[0_0_1.308vh_0_rgba(125,225,18,0.35)] tl:shadow-[0_0_1.938vh_0_rgba(125,225,18,0.35)] dt:shadow-[0_0_2.451vh_0_rgba(125,225,18,0.35)]`}
                  >
                    Visit Live Site <ExternalLink className={`size-[1.674vh] tp:size-[1.163vh] tl:size-[1.55vh] dt:size-[1.961vh]`} />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center border-white/10 bg-white/[0.07] font-medium text-white transition-colors hover:bg-white/15
                      gap-[0.837vh] tp:gap-[0.581vh] tl:gap-[0.775vh] dt:gap-[0.98vh]
                      rounded-[1.255vh] tp:rounded-[0.872vh] tl:rounded-[1.163vh] dt:rounded-[1.471vh]
                      border-[0.105vh] tp:border-[0.073vh] tl:border-[0.097vh] dt:border-[0.123vh]
                      px-[2.092vh] tp:px-[1.744vh] tl:px-[2.326vh] dt:px-[2.941vh]
                      py-[1.36vh] tp:py-[1.017vh] tl:py-[1.357vh] dt:py-[1.716vh]
                      text-[1.569vh] tp:text-[1.163vh] tl:text-[1.55vh] dt:text-[1.961vh]`}
                  >
                    <GithubIcon className={`size-[2.092vh] tp:size-[1.453vh] tl:size-[1.938vh] dt:size-[2.451vh]`} /> View Repository
                  </a>
                )}
                {project.paperUrl && (
                  <a
                    href={project.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center border-accent/40 bg-accent/10 font-medium text-accent transition-colors hover:bg-accent/20
                      gap-[0.837vh] tp:gap-[0.581vh] tl:gap-[0.775vh] dt:gap-[0.98vh]
                      rounded-[1.255vh] tp:rounded-[0.872vh] tl:rounded-[1.163vh] dt:rounded-[1.471vh]
                      border-[0.105vh] tp:border-[0.073vh] tl:border-[0.097vh] dt:border-[0.123vh]
                      px-[2.092vh] tp:px-[1.744vh] tl:px-[2.326vh] dt:px-[2.941vh]
                      py-[1.36vh] tp:py-[1.017vh] tl:py-[1.357vh] dt:py-[1.716vh]
                      text-[1.569vh] tp:text-[1.163vh] tl:text-[1.55vh] dt:text-[1.961vh]`}
                  >
                    <FileText className={`size-[2.092vh] tp:size-[1.453vh] tl:size-[1.938vh] dt:size-[2.451vh]`} /> Read Research Paper
                    <Image
                      src={projectImage("ieee-xplore.png")}
                      alt="IEEE Xplore"
                      width={64}
                      height={28}
                      className={`w-auto bg-white object-contain
                        h-[2.51vh] tp:h-[1.744vh] tl:h-[2.326vh] dt:h-[2.941vh]
                        rounded-[0.418vh] tp:rounded-[0.291vh] tl:rounded-[0.388vh] dt:rounded-[0.49vh]`}
                    />
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className={`ml-auto text-white/60 transition-colors hover:text-white
                    px-[1.255vh] tp:px-[0.581vh] tl:px-[0.775vh] dt:px-[0.98vh]
                    py-[1.255vh] tp:py-[0.727vh] tl:py-[0vh] dt:py-[0vh]
                    text-[1.464vh] tp:text-[1.017vh] tl:text-[1.357vh] dt:text-[1.716vh]`}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
