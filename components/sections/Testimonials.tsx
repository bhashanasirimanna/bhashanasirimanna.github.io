import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import GlowOrb from "@/components/GlowOrb";

const testimonial = {
  name: "Thimesha Ansar",
  role: "CEO:",
  company: "FOCUS Enterprise Solutions",
  quote:
    "Induwara has been instrumental in architecting our multi-tenant SaaS data isolation and AI agent workflows. His deep knowledge of backend scalability and proactive mindset deliver extraordinary results under tight deadlines.",
};

function TestimonialCard({ size = "lg" }: { size?: "lg" | "sm" }) {
  const isLarge = size === "lg";
  return (
    <div
      className={`flex flex-col items-start overflow-hidden rounded-[30px] bg-white ${
        isLarge
          ? "w-full max-w-[545px] p-6 sm:p-[34.756px]"
          : "hidden w-full max-w-[381px] p-6 opacity-40 md:flex"
      }`}
    >
      <div className="flex w-full flex-col gap-5">
        <div className="flex items-center gap-4">
          <div className="relative size-12 shrink-0 overflow-hidden rounded-full sm:size-[69.5px]">
            <Image src="/images/testimonials/avatar-main.png" alt="" fill sizes="70px" className="object-cover" />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <p className="font-display text-base text-testimonial-name sm:text-2xl">{testimonial.name}</p>
            <p className="font-body text-sm text-testimonial-role sm:text-lg">
              {testimonial.role} <span className="text-testimonial-link">{testimonial.company}</span>
            </p>
          </div>
        </div>
        <hr className="w-full border-black/10" />
        <p className="font-body text-sm leading-[1.35] tracking-[0.6px] text-black/85 sm:text-lg">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink px-6 py-20 sm:px-10 md:px-16 lg:px-[29px] lg:py-[118px]">
      <GlowOrb className="left-[-200px] top-[100px] hidden size-[451px] opacity-30 lg:block" color="#7de112" />
      <GlowOrb className="right-[-180px] top-[100px] hidden size-[451px] opacity-30 lg:block" color="#7de112" />

      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <Image src="/images/testimonials/avatar-2.png" alt="" width={72} height={72} className="absolute left-[23%] top-[200px] rounded-full opacity-20" />
        <Image src="/images/testimonials/avatar-3.png" alt="" width={72} height={72} className="absolute left-[33%] top-[174px] rounded-full opacity-10 blur-sm" />
        <Image src="/images/testimonials/avatar-4.png" alt="" width={43} height={43} className="absolute left-[33%] top-[95px] rounded-full opacity-10" />
        <Image src="/images/testimonials/avatar-5.png" alt="" width={43} height={43} className="absolute left-[16%] top-[373px] rounded-full opacity-10 blur-sm" />
      </div>

      <div className="relative mx-auto flex max-w-[1140px] flex-col items-center gap-14 text-center lg:gap-[118px]">
        <Reveal className="flex max-w-[623px] flex-col items-center gap-4 lg:gap-6">
          <h2 className="bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display text-[clamp(36px,7vw,82px)] font-bold leading-[0.9] text-transparent opacity-90">
            Client Testimonials
          </h2>
          <p className="font-body text-xl leading-[1.35] tracking-[1.2px] text-white/85 sm:text-2xl">
            What founders, engineering leads, and technical mentors say about working together.
          </p>
        </Reveal>

        <div className="flex w-full flex-col items-center gap-10">
          <Reveal delay={0.1} className="flex w-full items-end justify-center gap-6 lg:gap-9">
            <TestimonialCard size="sm" />
            <TestimonialCard size="lg" />
            <TestimonialCard size="sm" />
          </Reveal>

          <div className="flex items-center gap-6">
            <button
              type="button"
              disabled
              aria-label="Previous testimonial"
              className="flex size-12 items-center justify-center rounded-full bg-white/10 text-white disabled:opacity-50"
            >
              <ChevronLeft className="size-[22px]" strokeWidth={1.75} />
            </button>
            <div aria-hidden className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-white/30" />
              <span className="size-1.5 rounded-full bg-white/30" />
              <span className="h-1.5 w-5 rounded-full bg-accent" />
              <span className="size-1.5 rounded-full bg-white/30" />
            </div>
            <button
              type="button"
              disabled
              aria-label="Next testimonial"
              className="flex size-12 items-center justify-center rounded-full bg-white/10 text-white disabled:opacity-50"
            >
              <ChevronRight className="size-[22px]" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
