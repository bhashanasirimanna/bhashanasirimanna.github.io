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
      className="relative bg-ink px-[2.51vh] tp:px-[4.651vh] tl:px-[6.202vh] dt:px-[14.706vh] pt-[8.368vh] tp:pt-[7.267vh] tl:pt-[9.69vh] dt:pt-[13.848vh] pb-[8.368vh] tp:pb-[7.267vh] tl:pb-[9.69vh] dt:pb-[15.319vh]"
    >
      <GlowOrb
        className="right-[-27.197vh] tp:right-[-21.802vh] tl:right-[-38.76vh] dt:right-[-63.725vh] top-[-12.552vh] tp:top-[-10.901vh] tl:top-[-19.38vh] dt:top-[-32.843vh] size-[41.841vh] tp:size-[43.605vh] tl:size-[62.984vh] dt:size-[87.01vh] rotate-[23deg] opacity-[0.26]"
        color="#7de112"
      />

      <div className="relative mx-auto flex flex-col gap-[5.021vh] tp:gap-[4.651vh] tl:gap-[7.752vh] dt:gap-[13.971vh]">
        <Reveal className="flex max-w-[64.017vh] tp:max-w-[44.477vh] tl:max-w-[59.302vh] dt:max-w-[75vh] flex-col items-start gap-[1.674vh] tp:gap-[1.453vh] tl:gap-[1.938vh] dt:gap-[2.941vh]">
          <h2 className="bg-gradient-to-r from-white to-white/90 bg-clip-text font-display text-[clamp(3.766vh,7vw,8.577vh)] tp:text-[clamp(4.07vh,7vw,5.959vh)] tl:text-[clamp(3.488vh,7vw,7.946vh)] dt:text-[clamp(4.412vh,7vw,10.049vh)] font-bold leading-[0.9] text-transparent">
            Why Me
          </h2>
          <p className="font-body text-[2.092vh] tp:text-[1.744vh] tl:text-[2.132vh] dt:text-[2.941vh] leading-[1.35] tracking-[0.126vh] tp:tracking-[0.087vh] tl:tracking-[0.116vh] dt:tracking-[0.147vh] text-white/85">
            Engineering advantages and core values I bring to enterprise
            software engineering teams.
          </p>
        </Reveal>

        <RevealStaggerGroup className="grid grid-cols-1 tp:grid-cols-2 tl:grid-cols-4 dt:grid-cols-4 gap-[2.51vh] tp:gap-[1.744vh] tl:gap-[1.938vh] dt:gap-[3.309vh]">
          {values.map(({ icon: Icon, title, subtitle, description, tint }) => (
            <RevealStaggerItem
              key={title}
              className={`flex h-full flex-col items-start gap-[2.092vh] tp:gap-[1.744vh] tl:gap-[2.132vh] dt:gap-[3.309vh] rounded-[2.51vh] tp:rounded-[2.035vh] tl:rounded-[2.713vh] dt:rounded-[3.489vh] backdrop-blur-[2.51vh] tp:backdrop-blur-[1.744vh] tl:backdrop-blur-[2.326vh] dt:backdrop-blur-[2.941vh] p-[2.092vh] tp:p-[2.035vh] tl:p-[2.132vh] dt:p-[2.451vh] ${
                tint ? "bg-white/10" : "bg-white/[0.03]"
              }`}
            ><div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[2.72vh] tp:rounded-[2.18vh] tl:rounded-[2.907vh] dt:rounded-[3.765vh] p-[0.105vh] tp:p-[0.073vh] tl:p-[0.097vh] dt:p-[0.123vh]"
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
              className="pointer-events-none absolute inset-0 rounded-[2.72vh] tp:rounded-[2.18vh] tl:rounded-[2.907vh] dt:rounded-[3.765vh] bg-[length:20.921vh_20.921vh] tp:bg-[length:14.535vh_14.535vh] tl:bg-[length:19.38vh_19.38vh] dt:bg-[length:24.51vh_24.51vh] opacity-25"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1.5 -0.2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />
              <div className="flex size-[5.021vh] tp:size-[4.07vh] tl:size-[5.039vh] dt:size-[5.882vh] items-center justify-center rounded-[1.046vh] tp:rounded-[0.872vh] tl:rounded-[1.066vh] dt:rounded-[1.269vh] bg-chip">
                <Image
                  className="size-[3.138vh] tp:size-[2.471vh] tl:size-[3.101vh] dt:size-[3.676vh] text-[#1C1F21]"
                  width={30}
                  height={30}
                  src={Icon}
                  alt={`${title} icon`}
                />
              </div>
              <div className="flex flex-col gap-[0.209vh] tp:gap-[0.145vh] tl:gap-[0.194vh] dt:gap-[0.245vh]">
                <p className="font-display text-[2.51vh] tp:text-[2.035vh] tl:text-[2.519vh] dt:text-[3.676vh] font-bold text-accent leading-[1.35]">
                  {title}
                </p>
                <p className="font-body text-[1.883vh] tp:text-[1.453vh] tl:text-[1.647vh] dt:text-[2.206vh] leading-[1.35] text-white">
                  {subtitle}
                </p>
              </div>
              <p className="font-body text-[1.883vh] tp:text-[1.453vh] tl:text-[1.647vh] dt:text-[2.206vh] leading-[1.35] text-white/75">
                {description}
              </p>
            </RevealStaggerItem>
          ))}
        </RevealStaggerGroup>
      </div>
    </section>
  );
}
