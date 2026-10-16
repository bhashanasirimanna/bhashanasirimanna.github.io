import { Zap, CheckCircle2, SlidersHorizontal, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { RevealStaggerGroup, RevealStaggerItem } from "@/components/RevealStagger";
import GlowOrb from "@/components/GlowOrb";

const values = [
  {
    icon: Zap,
    title: "Dedicated",
    subtitle: "Performance & Reliability",
    description: "Focused on resolving performance bottlenecks and reducing technical debt.",
    tint: true,
  },
  {
    icon: CheckCircle2,
    title: "Committed",
    subtitle: "Long-term Vision",
    description: "Ensuring long-term scalability of critical application components.",
    tint: false,
  },
  {
    icon: SlidersHorizontal,
    title: "Adaptable",
    subtitle: "Cross-domain Agility",
    description:
      "Seamlessly transitioning between frontend, backend, AI integrations, and mobile development.",
    tint: true,
  },
  {
    icon: Sparkles,
    title: "Dynamic",
    subtitle: "Continuous Innovation",
    description: "Continuously learning and integrating modern tech like Web3 and LLMs into enterprise solutions.",
    tint: false,
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="relative overflow-hidden bg-ink px-6 py-20 sm:px-10 md:px-16 lg:px-[119px] lg:py-[113px]">
      <GlowOrb
        className="right-[-120px] top-[-180px] size-[710px] rotate-[23deg] opacity-40"
        color="#7de112"
      />

      <div className="relative mx-auto flex max-w-[1201px] flex-col gap-14 lg:gap-[114px]">
        <Reveal className="flex max-w-[612px] flex-col items-start gap-4 lg:gap-6">
          <h2 className="bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display text-[clamp(36px,7vw,82px)] font-bold leading-[0.9] text-transparent opacity-90">
            Why Me
          </h2>
          <p className="font-body text-xl leading-[1.35] tracking-[1.2px] text-white/85 sm:text-2xl">
            Engineering advantages and core values I bring to enterprise software engineering teams.
          </p>
        </Reveal>

        <RevealStaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[27px]">
          {values.map(({ icon: Icon, title, subtitle, description, tint }) => (
            <RevealStaggerItem
              key={title}
              className={`flex h-full flex-col items-start gap-4 rounded-[28.467px] p-5 ${
                tint ? "bg-white/10" : "bg-white/[0.03]"
              }`}
            >
              <div className="flex size-12 items-center justify-center rounded-[10.352px] bg-chip">
                <Icon className="size-[30px] text-black/87" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="font-display text-2xl font-bold text-accent sm:text-[30px]">{title}</p>
                <p className="font-body text-lg text-white">{subtitle}</p>
              </div>
              <p className="font-body text-lg leading-[1.35] text-white/75">{description}</p>
            </RevealStaggerItem>
          ))}
        </RevealStaggerGroup>
      </div>
    </section>
  );
}
