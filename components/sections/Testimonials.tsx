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
      className={`flex flex-col items-start overflow-hidden bg-white rounded-[2.51vh] tp:rounded-[2.18vh] tl:rounded-[2.713vh] dt:rounded-[3.676vh] ${
        isLarge
          ? "w-full max-w-[46.025vh] tp:max-w-[46.512vh] tl:max-w-[46.512vh] dt:max-w-[66.789vh] p-[2.51vh] tp:p-[2.907vh] tl:p-[3.101vh] dt:p-[4.259vh]"
          : "w-full hidden tl:flex dt:flex opacity-40 tl:max-w-[29.07vh] dt:max-w-[46.691vh] tl:p-[2.132vh] dt:p-[2.941vh]"
      }`}
    >
      <div className="flex w-full flex-col gap-[1.674vh] tp:gap-[1.599vh] tl:gap-[1.744vh] dt:gap-[2.451vh]">
        <div className="flex items-center gap-[1.464vh] tp:gap-[1.308vh] tl:gap-[1.55vh] dt:gap-[1.961vh]">
          <div className="relative shrink-0 overflow-hidden rounded-full size-[5.021vh] tp:size-[5.523vh] tl:size-[6.202vh] dt:size-[8.517vh]">
            <Image src="/images/testimonials/avatar-main.png" alt="" fill sizes="70px" className="object-cover" />
          </div>
          <div className="flex flex-1 flex-col gap-[0.418vh] tp:gap-[0.291vh] tl:gap-[0.388vh] dt:gap-[0.49vh]">
            <p className="font-display leading-[1.333] text-testimonial-name text-[1.883vh] tp:text-[2.035vh] tl:text-[2.132vh] dt:text-[2.941vh]">{testimonial.name}</p>
            <p className="font-body leading-[1.5] text-testimonial-role text-[1.464vh] tp:text-[1.453vh] tl:text-[1.55vh] dt:text-[2.206vh]">
              {testimonial.role} <span className="text-testimonial-link">{testimonial.company}</span>
            </p>
          </div>
        </div>
        <hr className="w-full border-black/10 border-t-[0.105vh] tp:border-t-[0.073vh] tl:border-t-[0.097vh] dt:border-t-[0.123vh]" />
        <p className="font-body leading-[1.35] text-black/85 text-[1.569vh] tp:text-[1.453vh] tl:text-[1.55vh] dt:text-[2.206vh] tracking-[0.052vh] tp:tracking-[0.044vh] tl:tracking-[0.048vh] dt:tracking-[0.074vh]">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-x-clip px-[2.51vh] tp:px-[2.907vh] tl:px-[3.876vh] dt:px-[3.554vh] py-[8.368vh] tp:py-[7.267vh] tl:py-[8.721vh] dt:py-[14.461vh]"
    >
      <GlowOrb className="hidden opacity-30 tl:block dt:block tl:-left-[16.473vh] dt:-left-[24.51vh] tl:top-[8.721vh] dt:top-[12.255vh] tl:size-[38.76vh] dt:size-[55.27vh]" color="#7de112" />
      <GlowOrb className="hidden opacity-30 tl:block dt:block tl:-right-[14.535vh] dt:-right-[22.059vh] tl:top-[8.721vh] dt:top-[12.255vh] tl:size-[38.76vh] dt:size-[55.27vh]" color="#7de112" />

      <div aria-hidden className="pointer-events-none absolute inset-0 hidden tl:block dt:block">
        <Image src="/images/testimonials/avatar-2.png" alt="" width={72} height={72} className="absolute left-[23%] rounded-full opacity-20 tl:top-[16.957vh] dt:top-[24.51vh] tl:size-[6.202vh] dt:size-[8.824vh]" />
        <Image src="/images/testimonials/avatar-3.png" alt="" width={72} height={72} className="absolute left-[33%] rounded-full opacity-10 tl:blur-[0.678vh] dt:blur-[0.98vh] tl:top-[14.535vh] dt:top-[21.324vh] tl:size-[6.202vh] dt:size-[8.824vh]" />
        <Image src="/images/testimonials/avatar-4.png" alt="" width={43} height={43} className="absolute left-[33%] rounded-full opacity-10 tl:top-[7.752vh] dt:top-[11.642vh] tl:size-[3.682vh] dt:size-[5.27vh]" />
        <Image src="/images/testimonials/avatar-5.png" alt="" width={43} height={43} className="absolute left-[16%] rounded-full opacity-10 tl:blur-[0.678vh] dt:blur-[0.98vh] tl:top-[31.008vh] dt:top-[45.711vh] tl:size-[3.682vh] dt:size-[5.27vh]" />
      </div>

      <div className="relative mx-auto flex w-full flex-col items-center text-center max-w-[46.025vh] tp:max-w-[65.407vh] tl:max-w-[106.589vh] dt:max-w-[139.706vh] gap-[5.858vh] tp:gap-[4.651vh] tl:gap-[6.977vh] dt:gap-[14.461vh]">
        <Reveal className="flex w-full flex-col items-center max-w-[46.025vh] tp:max-w-[50.872vh] tl:max-w-[58.14vh] dt:max-w-[76.348vh] gap-[1.674vh] tp:gap-[1.453vh] tl:gap-[1.938vh] dt:gap-[2.941vh]">
          <h2 className="bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display text-[clamp(3.766vh,7vw,8.577vh)] tp:text-[clamp(3.488vh,7vw,6.977vh)] tl:text-[clamp(4.651vh,7vw,7.946vh)] dt:text-[clamp(4.412vh,7vw,10.049vh)] font-bold leading-[1.3] text-transparent opacity-90">
            Client Testimonials
          </h2>
          <p className="font-body leading-[1.35] text-white/85 text-[1.883vh] tp:text-[1.744vh] tl:text-[1.938vh] dt:text-[2.941vh] tracking-[0.105vh] tp:tracking-[0.087vh] tl:tracking-[0.107vh] dt:tracking-[0.147vh]">
            What founders, engineering leads, and technical mentors say about working together.
          </p>
        </Reveal>

        <div className="flex w-full flex-col items-center gap-[3.347vh] tp:gap-[2.907vh] tl:gap-[3.488vh] dt:gap-[4.902vh]">
          <Reveal delay={0.1} className="flex w-full items-end justify-center gap-[2.51vh] tp:gap-[1.744vh] tl:gap-[2.713vh] dt:gap-[4.412vh]">
            <TestimonialCard size="sm" />
            <TestimonialCard size="lg" />
            <TestimonialCard size="sm" />
          </Reveal>

          <div className="flex items-center gap-[2.092vh] tp:gap-[1.744vh] tl:gap-[1.938vh] dt:gap-[2.941vh]">
            <button
              type="button"
              disabled
              aria-label="Previous testimonial"
              className="flex items-center justify-center rounded-full bg-white/10 text-white disabled:opacity-50 size-[5.021vh] tp:size-[4.07vh] tl:size-[4.651vh] dt:size-[5.882vh]"
            >
              <ChevronLeft className="size-[2.301vh] tp:size-[1.89vh] tl:size-[2.132vh] dt:size-[2.696vh]" strokeWidth={1.75} />
            </button>
            <div aria-hidden className="flex items-center gap-[0.628vh] tp:gap-[0.436vh] tl:gap-[0.581vh] dt:gap-[0.735vh]">
              <span className="rounded-full bg-white/30 size-[0.628vh] tp:size-[0.581vh] tl:size-[0.581vh] dt:size-[0.735vh]" />
              <span className="rounded-full bg-white/30 size-[0.628vh] tp:size-[0.581vh] tl:size-[0.581vh] dt:size-[0.735vh]" />
              <span className="rounded-full bg-accent h-[0.628vh] tp:h-[0.581vh] tl:h-[0.581vh] dt:h-[0.735vh] w-[2.092vh] tp:w-[2.035vh] tl:w-[1.938vh] dt:w-[2.451vh]" />
              <span className="rounded-full bg-white/30 size-[0.628vh] tp:size-[0.581vh] tl:size-[0.581vh] dt:size-[0.735vh]" />
            </div>
            <button
              type="button"
              disabled
              aria-label="Next testimonial"
              className="flex items-center justify-center rounded-full bg-white/10 text-white disabled:opacity-50 size-[5.021vh] tp:size-[4.07vh] tl:size-[4.651vh] dt:size-[5.882vh]"
            >
              <ChevronRight className="size-[2.301vh] tp:size-[1.89vh] tl:size-[2.132vh] dt:size-[2.696vh]" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
