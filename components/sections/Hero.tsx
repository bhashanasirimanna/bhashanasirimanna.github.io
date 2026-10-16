import Image from "next/image";
import { Download, Mail, MailCheck } from "lucide-react";
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

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-ink px-[120px] pt-[97px] pb-[80px] h-dvh"
    >
      <GlowOrb
        className=" h-[449px] w-[451px] right-[258px] bottom-[7px]"
        color="#424242"
      />

      <p
        aria-hidden
        className="pointer-events-none absolute left-[32px] top-[26px] select-none whitespace-nowrap font-decorative text-[clamp(80px,16vw,230.775px)] uppercase leading-[1.49] text-white opacity-[0.02]"
      >
        Induwara Sirimanna
      </p>

      <div className="flex items-center justify-end gap-[12px] absolute right-[120px] top-[97px] pb-0">
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Induwara Sirimanna on GitHub"
          className="flex size-[44px] items-center justify-center rounded-full border-[0.49px] border-white/40 bg-white/[0.06] text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          <GithubIcon className="size-[23.46px]" />
        </a>
        <a
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Induwara Sirimanna on LinkedIn"
          className="flex size-[44px] items-center justify-center rounded-full border-[0.49px] border-white/40 bg-white/[0.06] text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          <LinkedinIcon className="size-[23.46px]" />
        </a>
      </div>

      <Reveal
        delay={0.1}
        className="w-full absolute top-[37px] max-w-[779px] right-[187px]"
      >
        <div className=" aspect-square w-full overflow-hidden ">
          <Image
            src="/images/profile/hero.png"
            alt="Portrait of Induwara Sirimanna, software engineer"
            fill
            priority
            className="object-cover object-top pointer-events-none select-none"
          />
        </div>
      </Reveal>

      <div className="absolute bottom-[68.12px] max-w-[396px] right-[120px] gap-[24px] flex flex-col justify-end items-start">
        <Reveal delay={0.2} className="w-full">
          <div className="flex w-full items-center gap-[12.08px]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-1 flex-col items-start gap-0 rounded-[10.352px] bg-chip p-3 first:max-w-[106.1px] last:min-w-[151.87px]"
              >
                <p className="font-display text-[22px] leading-tight text-black/87 sm:text-[26px] lg:text-[30px]">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-[16px] sm:text-[18px]">
                      {" "}
                      {stat.suffix}
                    </span>
                  )}
                </p>
                <p className="text-xs text-black/75">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.3} className="w-full">
          <div className="relative w-full overflow-hidden rounded-[16px] bg-white/10 p-[20px] backdrop-blur-[24px]">
            {/* Gradient 1px border: bright at top-left and bottom-right, faded in between */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[16px] p-px"
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
              className="pointer-events-none absolute inset-0 rounded-[16px] opacity-25"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1.5 -0.2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                backgroundSize: "200px 200px",
              }}
            />
            <p className="relative font-body leading-[1.35] text-white text-[18px]">
              Specializing in high-availability distributed systems,
              multi-tenant SaaS platforms, and cutting-edge LLM / AI
              integrations.
            </p>
          </div>
        </Reveal>
      </div>

      <div className=" flex flex-col justify-between items-start h-full">
        <div className="flex flex-col items-start gap-[16px]">
          <div className="flex flex-col items-start gap-[32px]">
            <Reveal>
              <p className="font-display text-xl text-white/50 sm:text-2xl lg:text-[28px]">
                Hello I&rsquo;m
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display text-[clamp(44px,9vw,116px)] font-bold leading-[0.9] text-transparent opacity-90">
                Induwara
                <br />
                Sirimanna
              </h1>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="text-xl font-normal fontd text-white sm:text-2xl lg:text-[28px]">
              A Passionate{" "}
              <span className="font-bold text-accent">Software Engineer</span>
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.24}>
          <div className="flex flex-wrap items-center justify-start gap-[16px]">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-[12px] rounded-[13.859px] bg-accent p-[20px] text-lg font-medium text-black transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-[20px]"
            >
              Download CV
              <Download className="size-[28px]" strokeWidth={1.75} />
            </a>
            <ScrollLink
              href="#contact"
              className="flex items-center gap-[12px] rounded-[13.859px] border border-white/40 bg-white/[0.06] p-[20px] text-lg font-medium text-accent transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-[20px]"
            >
              Say hello
              <MailCheck className="size-[28px]" strokeWidth={1.75} />
            </ScrollLink>
          </div>
        </Reveal>
      </div>
      {/* <p
        aria-hidden
        className="pointer-events-none absolute left-[32px] top-[8px] hidden select-none whitespace-nowrap font-decorative text-[clamp(80px,16vw,230.775px)] uppercase leading-[1.49] text-white opacity-[0.02] sm:block"
      >
        Induwara Sirimanna
      </p>

      <GlowOrb
        className="left-1/2 top-[300px] size-[451px] -translate-x-1/2 opacity-60 min-[1440px]:left-[757px] min-[1440px]:top-[360px] min-[1440px]:translate-x-0"
        color="#7de112"
      />

      <div className="relative flex items-center justify-end gap-3 pb-10 lg:absolute lg:right-[120px] lg:top-[97px] lg:pb-0">
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Induwara Sirimanna on GitHub"
          className="flex size-11 items-center justify-center rounded-full border border-white/40 bg-white/[0.06] text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          <GithubIcon className="size-5" />
        </a>
        <a
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Induwara Sirimanna on LinkedIn"
          className="flex size-11 items-center justify-center rounded-full border border-white/40 bg-white/[0.06] text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          <LinkedinIcon className="size-5" />
        </a>
      </div>

      <div className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col items-start gap-10 lg:max-w-[525px]">
          <div className="flex flex-col items-start gap-6 lg:gap-8">
            <Reveal>
              <p className="font-display text-xl text-white/50 sm:text-2xl lg:text-[28px]">Hello I&rsquo;m</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display text-[clamp(44px,9vw,116px)] font-bold leading-[0.9] text-transparent opacity-90">
                Induwara
                <br />
                Sirimanna
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-xl font-normal text-white sm:text-2xl lg:text-[28px]">
                A Passionate <span className="font-bold text-accent">Software Engineer</span>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.24}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-3 rounded-[13.859px] bg-accent px-5 py-5 text-lg font-medium text-black transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-xl"
              >
                Download CV
                <Download className="size-6" strokeWidth={1.75} />
              </a>
              <ScrollLink
                href="#contact"
                className="flex items-center gap-3 rounded-[13.859px] border border-white/40 bg-white/[0.06] px-5 py-5 text-lg font-medium text-accent transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-xl"
              >
                Say hello
                <Mail className="size-6" strokeWidth={1.75} />
              </ScrollLink>
            </div>
          </Reveal>
        </div>

        <div className="relative mx-auto flex w-full max-w-[396px] flex-col items-center gap-6 lg:mx-0 lg:ml-auto">
          <Reveal delay={0.1} className="w-full">
            <div className="relative aspect-square w-full max-w-[420px] overflow-hidden rounded-[32px]">
              <Image
                src="/images/profile/hero.png"
                alt="Portrait of Induwara Sirimanna, software engineer"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 80vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={0.2} className="w-full">
            <div className="flex w-full items-center gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-1 flex-col items-start gap-0 rounded-[10.352px] bg-chip p-3"
                >
                  <p className="font-display text-[22px] leading-tight text-black/87 sm:text-[26px] lg:text-[30px]">
                    {stat.value}
                    {stat.suffix && <span className="text-[16px] sm:text-[18px]"> {stat.suffix}</span>}
                  </p>
                  <p className="text-xs text-black/75">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3} className="w-full">
            <div className="w-full rounded-2xl bg-white/10 p-5">
              <p className="font-body text-base leading-[1.35] text-white sm:text-lg">
                Specializing in high-availability distributed systems, multi-tenant SaaS platforms, and
                cutting-edge LLM / AI integrations.
              </p>
            </div>
          </Reveal>
        </div>
      </div> */}
    </section>
  );
}
