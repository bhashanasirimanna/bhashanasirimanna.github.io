import Image from "next/image";
import { Download, MailCheck } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import ScrollLink from "@/components/ScrollLink";
import Reveal from "@/components/Reveal";
import GlowOrb from "@/components/GlowOrb";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { value: "13+", label: "Projects" },
  { value: "2+", suffix: "Years", label: "Experience" },
  { value: "AI & SaaS", label: "Core Focus" },
];

/*
 * Layout tiers (see app/globals.css): base = mobile, tp: = tablet portrait,
 * tl: = tablet landscape, dt: = desktop. Mobile and tablet portrait stack
 * vertically; tablet landscape and desktop use the absolute Figma composition.
 */
const socialLink = `flex items-center justify-center rounded-full border-white/40 bg-white/[0.06] text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline-accent
  size-[5.021vh] tp:size-[4.07vh] tl:size-[4.264vh] dt:size-[5.392vh] border-[0.051vh] tp:border-[0.036vh] tl:border-[0.047vh] dt:border-[0.06vh] focus-visible:outline-[0.209vh] tp:focus-visible:outline-[0.145vh] tl:focus-visible:outline-[0.194vh] dt:focus-visible:outline-[0.245vh]`;

const glassNoiseBg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1.5 -0.2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function Hero() {
  return (
    <section
      id="hero"
      className={`relative flex min-h-dvh flex-col overflow-hidden bg-ink tl:block tl:h-dvh dt:block dt:h-dvh
        gap-[2.929vh] tp:gap-[2.907vh] px-[2.51vh] tp:px-[4.651vh] tl:px-[7.752vh] dt:px-[14.706vh] pt-[2.092vh] tp:pt-[4.07vh] tl:pt-[6.977vh] dt:pt-[11.887vh] pb-[4.184vh] tp:pb-[5.233vh] tl:pb-[5.814vh] dt:pb-[9.804vh]`}
    >
      <GlowOrb
        className={`left-1/2 top-[55%] -translate-x-1/2 tl:left-auto tl:top-auto tl:translate-x-0 dt:left-auto dt:top-auto dt:translate-x-0
          h-[31.381vh] tp:h-[40.698vh] tl:h-[54.264vh] dt:h-[55.025vh] w-[31.381vh] tp:w-[40.698vh] tl:w-[54.264vh] dt:w-[55.27vh] tl:right-[29.07vh] dt:right-[31.618vh] tl:bottom-[0.969vh] dt:bottom-[0.858vh]`}
        color="#424242"
      />

      <p
        aria-hidden
        className={`pointer-events-none absolute select-none whitespace-nowrap font-decorative uppercase leading-[1.49] text-white opacity-[0.02]
          left-[1.674vh] tp:left-[1.744vh] tl:left-[2.713vh] dt:left-[3.922vh] top-[1.464vh] tp:top-[1.744vh] tl:top-[2.132vh] dt:top-[3.186vh] text-[clamp(8.368vh,16vw,24.14vh)] tp:text-[clamp(5.814vh,16vw,18.895vh)] tl:text-[clamp(9.69vh,16vw,28.101vh)] dt:text-[clamp(9.804vh,16vw,28.281vh)]`}
      >
        Induwara Sirimanna
      </p>

      <div
        className={`relative z-30 order-1 flex items-center justify-end self-end tl:absolute tl:self-auto dt:absolute dt:self-auto
          gap-[1.255vh] tp:gap-[1.017vh] tl:gap-[1.163vh] dt:gap-[1.471vh] tl:top-[6.977vh] dt:top-[11.887vh] tl:right-[7.752vh] dt:right-[14.706vh]`}
      >
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Induwara Sirimanna on GitHub"
          className={socialLink}
        >
          <GithubIcon className={`size-[2.51vh] tp:size-[2.035vh] tl:size-[2.326vh] dt:size-[2.875vh]`} />
        </a>
        <a
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Induwara Sirimanna on LinkedIn"
          className={socialLink}
        >
          <LinkedinIcon className={`size-[2.51vh] tp:size-[2.035vh] tl:size-[2.326vh] dt:size-[2.875vh]`} />
        </a>
      </div>

      <Reveal
        delay={0.1}
        className={`relative order-3 w-full self-center tl:absolute tl:bottom-0 dt:absolute dt:max-w-[min(95.466vh,54vw)]
          max-w-[46.025vh] tp:max-w-[55.233vh] tl:max-w-[69.767vh] dt:top-[4.534vh] tl:right-[19.38vh] dt:right-[22.917vh]`}
      >
        <div className="relative aspect-square w-full overflow-hidden [mask-image:linear-gradient(to_bottom,#000_82%,transparent)] tl:[mask-image:none] dt:[mask-image:none]">
          <div className="absolute z-10 bottom-0 left-0 w-full aspect-[634/584] bg-linear-to-t from-[#121212] via-[#121212]/5 to-[#121212]/0" />
          <Image
            src="/images/profile/hero.png"
            alt="Portrait of Induwara Sirimanna, software engineer"
            fill
            priority
            className="object-cover object-top pointer-events-none select-none"
          />
        </div>
      </Reveal>

      <div
        className={`relative order-4 z-20 flex w-full flex-col items-start justify-end self-center tl:absolute tl:self-auto dt:absolute dt:self-auto
          max-w-[46.025vh] tp:max-w-[55.233vh] tl:max-w-[46.512vh] dt:max-w-[48.529vh] gap-[2.092vh] tp:gap-[1.744vh] tl:gap-[2.713vh] dt:gap-[2.941vh] tl:bottom-[8.333vh] dt:bottom-[8.348vh] tl:right-[7.752vh] dt:right-[14.706vh]`}
      >
        <Reveal delay={0.2} className="w-full">
          <div className={`flex w-full items-center gap-[1.046vh] tp:gap-[1.163vh] tl:gap-[1.357vh] dt:gap-[1.48vh]`}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`flex flex-1 flex-col items-start gap-0 bg-chip
                  rounded-[1.046vh] tp:rounded-[1.017vh] tl:rounded-[1.26vh] dt:rounded-[1.269vh] p-[1.255vh] tp:p-[1.308vh] tl:p-[1.453vh] dt:p-[1.471vh]
                  first:max-w-[10.46vh] tp:first:max-w-[10.901vh] tl:first:max-w-[12.597vh] dt:first:max-w-[13.002vh] last:min-w-[14.644vh] tp:last:min-w-[15.625vh] tl:last:min-w-[18.217vh] dt:last:min-w-[18.612vh]`}
              >
                <p
                  className={`font-display leading-tight text-black/87 text-[2.51vh] tp:text-[2.907vh] tl:text-[3.488vh] dt:text-[3.676vh]`}
                >
                  {stat.value}
                  {stat.suffix && (
                    <span className={`text-[1.464vh] tp:text-[1.744vh] tl:text-[1.938vh] dt:text-[2.206vh]`}>
                      {" "}
                      {stat.suffix}
                    </span>
                  )}
                </p>
                <p
                  className={`leading-[1.333] text-black/75 text-[1.36vh] tp:text-[1.308vh] tl:text-[1.453vh] dt:text-[1.471vh]`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.3} className="w-full">
          <div
            className={`relative w-full overflow-hidden bg-white/10
              rounded-[1.674vh] tp:rounded-[1.744vh] tl:rounded-[1.938vh] dt:rounded-[1.961vh] p-[2.092vh] tp:p-[2.035vh] tl:p-[2.326vh] dt:p-[2.451vh] backdrop-blur-[2.51vh] tp:backdrop-blur-[1.744vh] tl:backdrop-blur-[2.326vh] dt:backdrop-blur-[2.941vh]`}
          >
            {/* Gradient 1px border: bright at top-left and bottom-right, faded in between */}
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-0
                rounded-[1.674vh] tp:rounded-[1.744vh] tl:rounded-[1.938vh] dt:rounded-[1.961vh] p-[0.105vh] tp:p-[0.073vh] tl:p-[0.097vh] dt:p-[0.123vh]`}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0.08) 65%, rgba(255,255,255,0.35) 100%)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                mask: "linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)",
              }}
            />
            {/* Figma effect: monotone noise, size 0.09, density 100%, #000000 @ 25% */}
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-0 opacity-25
                rounded-[1.674vh] tp:rounded-[1.744vh] tl:rounded-[1.938vh] dt:rounded-[1.961vh] bg-[length:20.921vh_20.921vh] tp:bg-[length:14.535vh_14.535vh] tl:bg-[length:19.38vh_19.38vh] dt:bg-[length:24.51vh_24.51vh]`}
              style={{ backgroundImage: glassNoiseBg }}
            />
            <p
              className={`relative font-body leading-[1.35] text-white text-[1.883vh] tp:text-[1.89vh] tl:text-[2.132vh] dt:text-[2.206vh]`}
            >
              Specializing in high-availability distributed systems,
              multi-tenant SaaS platforms, and cutting-edge LLM / AI
              integrations.
            </p>
          </div>
        </Reveal>
      </div>

      <div
        className={`relative order-2 flex flex-col items-start justify-between tl:h-full dt:h-full
          gap-[2.929vh] tp:gap-[2.907vh]`}
      >
        <div className={`flex flex-col items-start gap-[1.255vh] tp:gap-[1.163vh] tl:gap-[1.938vh] dt:gap-[1.961vh]`}>
          <div className={`flex flex-col items-start gap-[1.255vh] tp:gap-[1.453vh] tl:gap-[3.876vh] dt:gap-[3.922vh]`}>
            <Reveal>
              <p
                className={`font-display leading-[1.333] text-white/50 text-[2.301vh] tp:text-[2.18vh] tl:text-[2.907vh] dt:text-[3.431vh]`}
              >
                Hello I&rsquo;m
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1
                className={`bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display font-bold leading-[0.9] text-transparent opacity-90
                  text-[clamp(4.603vh,15vw,7.531vh)] tp:text-[clamp(4.651vh,10vw,8.721vh)] tl:text-[clamp(7.752vh,9.3vw,12.403vh)] dt:text-[clamp(5.392vh,9vw,14.216vh)]`}
              >
                Induwara
                <br />
                Sirimanna
              </h1>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p
              className={`font-normal leading-[1.333] fontd text-white text-[2.301vh] tp:text-[2.18vh] tl:text-[3.101vh] dt:text-[3.431vh]`}
            >
              A Passionate{" "}
              <span className="font-bold text-accent">Software Engineer</span>
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.24}>
          <div
            className={`flex flex-wrap items-center justify-start gap-[1.255vh] tp:gap-[1.453vh] tl:gap-[1.938vh] dt:gap-[1.961vh]`}
          >
            <a
              href="/resume.pdf"
              download
              className={`flex items-center bg-accent font-medium leading-[1.556] text-black transition-transform hover:scale-[1.03] focus-visible:outline-accent focus-visible:outline-offset-[0.209vh] tp:focus-visible:outline-offset-[0.218vh] tl:focus-visible:outline-offset-[0.291vh] dt:focus-visible:outline-offset-[0.245vh]
                gap-[1.046vh] tp:gap-[1.017vh] tl:gap-[1.453vh] dt:gap-[1.471vh] rounded-[1.464vh] tp:rounded-[1.163vh] tl:rounded-[1.647vh] dt:rounded-[1.698vh] p-[1.674vh] tp:p-[1.599vh] tl:p-[2.326vh] dt:p-[2.451vh] text-[1.883vh] tp:text-[1.744vh] tl:text-[2.422vh] dt:text-[2.451vh] focus-visible:outline-[0.209vh] tp:focus-visible:outline-[0.145vh] tl:focus-visible:outline-[0.194vh] dt:focus-visible:outline-[0.245vh]`}
            >
              Download CV
              <Download className={`size-[2.51vh] tp:size-[2.326vh] tl:size-[3.391vh] dt:size-[3.431vh]`} strokeWidth={1.75} />
            </a>
            <ScrollLink
              href="#contact"
              className={`flex items-center border-white/40 bg-white/[0.06] font-medium leading-[1.556] text-accent transition-colors hover:bg-white/10 focus-visible:outline-accent focus-visible:outline-offset-[0.209vh] tp:focus-visible:outline-offset-[0.218vh] tl:focus-visible:outline-offset-[0.291vh] dt:focus-visible:outline-offset-[0.245vh]
                gap-[1.046vh] tp:gap-[1.017vh] tl:gap-[1.453vh] dt:gap-[1.471vh] rounded-[1.464vh] tp:rounded-[1.163vh] tl:rounded-[1.647vh] dt:rounded-[1.698vh] p-[1.674vh] tp:p-[1.599vh] tl:p-[2.326vh] dt:p-[2.451vh] text-[1.883vh] tp:text-[1.744vh] tl:text-[2.422vh] dt:text-[2.451vh] border-[0.105vh] tp:border-[0.073vh] tl:border-[0.097vh] dt:border-[0.123vh] focus-visible:outline-[0.209vh] tp:focus-visible:outline-[0.145vh] tl:focus-visible:outline-[0.194vh] dt:focus-visible:outline-[0.245vh]`}
            >
              Say hello
              <MailCheck className={`size-[2.51vh] tp:size-[2.326vh] tl:size-[3.391vh] dt:size-[3.431vh]`} strokeWidth={1.75} />
            </ScrollLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
