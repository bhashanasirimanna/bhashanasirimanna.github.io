import Reveal from "@/components/Reveal";
import {
  RevealStaggerGroup,
  RevealStaggerItem,
} from "@/components/RevealStagger";
import GlowOrb from "@/components/GlowOrb";
import Image from "next/image";

const values = [
  {
    icon: "/images/icon/dedicated-icon.png",
    title: "Dedicated",
    subtitle: "Performance & Reliability",
    description:
      "Focused on resolving performance bottlenecks and reducing technical debt.",
    tint: true,
  },
  {
    icon: "/images/icon/committed-icon.png",
    title: "Committed",
    subtitle: "Long-term Vision",
    description:
      "Ensuring long-term scalability of critical application components.",
    tint: false,
  },
  {
    icon: "/images/icon/adaptable-icon.png",
    title: "Adaptable",
    subtitle: "Cross-domain Agility",
    description:
      "Seamlessly transitioning between frontend, backend, AI integrations, and mobile development.",
    tint: true,
  },
  {
    icon: "/images/icon/dynamic-icon.png",
    title: "Dynamic",
    subtitle: "Continuous Innovation",
    description:
      "Continuously learning and integrating modern tech like Web3 and LLMs into enterprise solutions.",
    tint: false,
  },
];

export default function WhyMe() {
  return (
    <section
      id="why-me"
      className="relative bg-ink px-6 py-20 sm:px-10 md:px-16 lg:px-[120px] lg:pt-[113px] lg:pb-[125px]"
    >
      <GlowOrb
        className="right-[-520px] top-[-268px] size-[710px] rotate-[23deg] opacity-[0.26]"
        color="#7de112"
      />

      <div className="relative mx-auto flex flex-col gap-14 lg:gap-[114px]">
        <Reveal className="flex max-w-[612px] flex-col items-start gap-4 lg:gap-[24px]">
          <h2 className="bg-gradient-to-r from-white to-white/90 bg-clip-text font-display text-[clamp(36px,7vw,82px)] font-bold leading-[0.9] text-transparent">
            Why Me
          </h2>
          <p className="font-body text-xl leading-[1.35] tracking-[1.2px] text-white/85 sm:text-[24px]">
            Engineering advantages and core values I bring to enterprise
            software engineering teams.
          </p>
        </Reveal>

        <RevealStaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[27px]">
          {values.map(({ icon: Icon, title, subtitle, description, tint }) => (
            <RevealStaggerItem
              key={title}
              className={`flex h-full flex-col items-start gap-[27px] rounded-[28.467px] backdrop-blur-[24px] p-[20px] ${
                tint ? "bg-white/10" : "bg-white/[0.03]"
              }`}
            ><div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[30.726px] p-px"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0.08) 65%, rgba(255,255,255,0.35) 100%)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                mask: "linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[30.726px] opacity-25"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1.5 -0.2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                backgroundSize: "200px 200px",
              }}
            />
              <div className="flex size-[48px] items-center justify-center rounded-[10.352px] bg-chip">
                <Image
                  className="size-[30px] text-[#1C1F21]"
                  width={30}
                  height={30}
                  src={Icon}
                  alt={`${title} icon`}
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-display text-2xl font-bold text-accent sm:text-[30px] leading-[1.35]">
                  {title}
                </p>
                <p className="font-body text-[18px] leading-[1.35] text-white">
                  {subtitle}
                </p>
              </div>
              <p className="font-body text-[18px] leading-[1.35] text-white/75">
                {description}
              </p>
            </RevealStaggerItem>
          ))}
        </RevealStaggerGroup>
      </div>
    </section>
  );
}
