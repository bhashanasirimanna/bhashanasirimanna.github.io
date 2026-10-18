"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FileText, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import { RevealStaggerGroup, RevealStaggerItem } from "@/components/RevealStagger";
import GlowOrb from "@/components/GlowOrb";
import GithubIcon from "@/components/icons/GithubIcon";
import { projectImage, projects, type Category, type Project } from "@/lib/projects";

const filters: Array<"All" | Category> = ["All", "AI & Enterprise", "Web", "Mobile"];

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative overflow-hidden bg-ink px-6 py-20 sm:px-10 md:px-16 lg:px-[120px] lg:pt-[97px] lg:pb-[113px]">
      <GlowOrb className="-right-[140px] top-[51px] size-[583px] opacity-[0.12]" color="#96FF26" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-14 lg:items-end lg:gap-[97px]">
        <Reveal className="flex max-w-[534px] flex-col items-start gap-4 lg:items-end lg:gap-6 lg:text-right">
          <h2 className="bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display text-[clamp(36px,7vw,82px)] font-bold leading-[0.9] text-transparent opacity-90">
            My Projects
          </h2>
          <p className="font-body text-xl leading-[1.35] tracking-[1.2px] text-white/85 sm:text-2xl">
            A comprehensive catalog of {projects.length} engineering works across Enterprise AI, full-stack web, and mobile
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
            {visible.map((project) => (
              <RevealStaggerItem
                key={project.name}
                className={`cursor-pointer rounded-[46px] bg-white/5 p-2.5 transition-colors hover:bg-white/[0.08] ${
                  project.featured ? "border border-accent shadow-[0_0_37.6px_0_rgba(125,225,18,0.31)]" : ""
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
                  className="rounded-[40px] outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div
                    className={`relative h-[240px] w-full overflow-hidden rounded-t-[40px] ${
                      project.logoCover ? "bg-white" : "bg-white/[0.06]"
                    }`}
                  >
                    {project.images?.[0] ? (
                      <Image
                        src={projectImage(project.images[0])}
                        alt={`${project.name} project preview`}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className={project.logoCover ? "object-contain p-10" : "object-cover object-top"}
                      />
                    ) : (
                      <div className="flex size-full items-center justify-center px-6 text-center font-display text-3xl font-bold text-white/30">
                        {project.name}
                      </div>
                    )}
                  </div>
                  <div className="relative overflow-hidden rounded-b-[40px] bg-white/[0.07] p-6 sm:p-8">
                    <div className="flex flex-col gap-4 pr-16">
                      <div className="flex flex-col gap-2">
                        <p className="bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display text-2xl font-bold leading-[0.9] text-transparent opacity-90 sm:text-[26px]">
                          {project.name}
                        </p>
                        <p className="line-clamp-3 font-body text-sm leading-[1.35] tracking-[0.8px] text-white/85 sm:text-base">
                          {project.summary}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tag) => (
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
                </div>
              </RevealStaggerItem>
            ))}
          </RevealStaggerGroup>
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
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
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative max-h-[90vh] w-full max-w-[840px] overflow-y-auto overscroll-contain rounded-[28px] border border-white/10 bg-ink p-6 shadow-[0_0_37.6px_0_rgba(125,225,18,0.15)] sm:p-10"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-white transition-colors hover:bg-white/15 sm:right-7 sm:top-7"
            >
              <X className="size-5" />
            </button>

            <div className="flex flex-wrap items-center gap-3 pr-14">
              <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm text-accent">
                {project.category}
              </span>
              <span className="font-mono text-sm text-white/60">{project.period}</span>
            </div>

            <h3
              id="project-modal-title"
              className="mt-5 font-display text-4xl font-bold leading-none text-white sm:text-5xl"
            >
              {project.title ?? project.name}
            </h3>

            {project.intro.map((para) => (
              <p key={para} className="mt-6 font-body text-base leading-[1.6] text-white/80 sm:text-xl">
                {para}
              </p>
            ))}

            {project.sections?.map((section) => (
              <div key={section.heading} className="mt-8">
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-white/50">{section.heading}</p>
                <ul className="mt-3 flex flex-col gap-3">
                  {section.items.map((item) => {
                    const label = typeof item === "string" ? null : item.label;
                    const text = typeof item === "string" ? item : item.text;
                    return (
                      <li key={text} className="flex gap-3 font-body text-base leading-[1.55] text-white/80">
                        <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
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
              <div className={`mt-8 grid gap-3 ${project.images.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {project.images.map((file) => (
                  <div
                    key={file}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05]"
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

            <p className="mt-8 font-mono text-xs uppercase tracking-[0.1em] text-white/50">
              Technologies &amp; Architecture
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.07] px-4 py-1.5 text-sm text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-medium text-black shadow-[0_0_20px_0_rgba(125,225,18,0.35)] transition-opacity hover:opacity-90"
                >
                  Visit Live Site <ExternalLink className="size-4" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.07] px-6 py-3.5 font-medium text-white transition-colors hover:bg-white/15"
                >
                  <GithubIcon className="size-5" /> View Repository
                </a>
              )}
              {project.paperUrl && (
                <a
                  href={project.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-6 py-3.5 font-medium text-accent transition-colors hover:bg-accent/20"
                >
                  <FileText className="size-5" /> Read Research Paper
                  <Image
                    src={projectImage("ieee-xplore.png")}
                    alt="IEEE Xplore"
                    width={64}
                    height={28}
                    className="h-6 w-auto rounded bg-white object-contain"
                  />
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="ml-auto px-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
