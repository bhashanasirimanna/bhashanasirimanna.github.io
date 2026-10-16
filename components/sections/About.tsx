import Image from "next/image";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

const details: Array<{ label: string; value: string }> = [
  { label: "First Name", value: "Induwara" },
  { label: "Last Name", value: "Sirimanna" },
  { label: "Age", value: "23 years" },
  { label: "Nationality", value: "Sri Lankan" },
  { label: "Email", value: siteConfig.email },
  { label: "Languages", value: "English, Sinhala" },
  { label: "Phone", value: "+94 77 49 43 294" },
  { label: "Address", value: "Irabadagama, Sandalankawa" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-ink px-6 py-20 sm:px-10 md:px-16 lg:px-[120px] lg:py-[78px]"
    >
      <div className="mx-auto grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-[50px]">
        <Reveal>
          <div className="flex flex-col items-start gap-[26px] rounded-[30.726px] bg-white/10 sm:p-[37.24px] backdrop-blur-[24px] p-6">
            <div
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
            <dl className="flex w-full flex-col gap-[15px]">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex flex-wrap items-center gap-x-[12px] gap-y-1 p-[8px]"
                >
                  <dt className="w-[150px] text-base font-semibold text-white sm:w-[179px] sm:text-[18.62px]">
                    {d.label} :
                  </dt>
                  <dd className="text-base font-normal text-white/70 sm:text-[18.62px]">
                    {d.value}
                  </dd>
                </div>
              ))}
              <div className="flex items-center gap-[12px] p-[8px]">
                <dt className="w-[150px] text-base font-semibold text-white sm:w-[179px] sm:text-[18.62px]">
                  Freelance :
                </dt>
                <dd>
                  <span className="rounded-full bg-white/[0.08] px-[16px] py-[8px] font-normal text-sm text-accent-soft-text sm:text-[16px]">
                    Available
                  </span>
                </dd>
              </div>
            </dl>

            <hr className="h-px w-full border-0 bg-linear-to-r from-white/0 via-white to-white/0" />

            <div className="flex flex-wrap items-center gap-[12px] p-[8px]">
              <span className="text-base font-bold text-white sm:text-[18.62px]">
                Connect directly:
              </span>
              <div className="flex flex-wrap items-center gap-[12px]">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[8px] rounded-full border-[0.36px] border-white/40 bg-white/[0.06] px-[12px] py-[8px] text-[12px] text-white/70 underline decoration-from-font underline-offset-2 transition-opacity hover:opacity-80"
                >
                  <GithubIcon className="size-[17px] text-accent" />
                  gh/bhashana
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[8px] rounded-full border-[0.36px] border-white/40 bg-white/[0.06] px-[12px] py-[8px] text-[12px] text-white/70 underline decoration-from-font underline-offset-2 transition-opacity hover:opacity-80"
                >
                  <LinkedinIcon className="size-[17px] text-accent" />
                  in/bhashana
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col items-start gap-0 lg:items-end">
          <div className="flex flex-col items-start gap-[40px] lg:items-end lg:text-right">
            <Reveal className="flex w-full flex-col items-start gap-4 lg:items-end">
              <h2 className="bg-gradient-to-r from-white to-white/90 bg-clip-text font-display text-[clamp(36px,7vw,82px)] font-bold leading-[0.9] text-transparent opacity-90">
                About Me
              </h2>
              <p className="font-display text-xl tracking-[1.2px] text-white sm:text-[24px]">
                Every exceptional journey begins with a{" "}
                <span className="text-accent">clear vision.</span>
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-left text-lg font-normal leading-[1.35] text-white/50 sm:text-2xl lg:text-justify lg:text-[28px]">
                &ldquo;I am a dedicated and enthusiastic software engineer with
                a deep love for technology and an unyielding drive to
                continuously improve. I thrive on challenges and am committed to
                delivering my best in every task. Learning and adapting are
                integral parts of my journey, and I am determined to overcome
                any obstacle to achieve excellence. Failure is never an option;
                I always find a way to succeed.&rdquo;
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <Image
              src="/images/profile/signature.png"
              alt="Induwara Sirimanna's signature"
              width={406}
              height={166}
              className="h-[166px] w-auto "
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
