import type { ReactNode } from "react";
import Image from "next/image";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import Reveal from "@/components/Reveal";
import Age from "@/components/Age";
import { siteConfig } from "@/lib/site-config";

const details: Array<{ label: string; value: ReactNode }> = [
  { label: "First Name", value: "Induwara" },
  { label: "Last Name", value: "Sirimanna" },
  { label: "Age", value: <Age birthDate={siteConfig.birthDate} /> },
  { label: "Nationality", value: "Sri Lankan" },
  { label: "Email", value: siteConfig.email },
  { label: "Languages", value: "English, Sinhala" },
  { label: "Phone", value: "+94 77 49 43 294" },
  { label: "Address", value: "Irabadagama, Sandalankawa" },
];

const labelClass = `font-semibold leading-normal text-white
  w-[13.598vh] tp:w-[15.988vh] tl:w-[17.636vh] dt:w-[21.936vh] text-[1.674vh] tp:text-[1.744vh] tl:text-[1.841vh] dt:text-[2.282vh]`;
const valueClass = `font-normal leading-normal text-white/70 text-[1.674vh] tp:text-[1.744vh] tl:text-[1.841vh] dt:text-[2.282vh]`;
const linkClass = `flex items-center rounded-full border-white/40 bg-white/[0.06] text-white/70 underline decoration-from-font transition-opacity hover:opacity-80
  gap-[0.837vh] tp:gap-[0.727vh] tl:gap-[0.775vh] dt:gap-[0.98vh] border-[0.038vh] tp:border-[0.026vh] tl:border-[0.035vh] dt:border-[0.044vh] px-[1.464vh] tp:px-[1.308vh] tl:px-[1.357vh] dt:px-[1.471vh] py-[1.255vh] tp:py-[0.872vh] tl:py-[0.872vh] dt:py-[0.98vh] text-[1.464vh] tp:text-[1.308vh] tl:text-[1.357vh] dt:text-[1.471vh] underline-offset-[0.209vh] tp:underline-offset-[0.145vh] tl:underline-offset-[0.194vh] dt:underline-offset-[0.245vh]`;
const linkIconClass = `text-accent size-[1.883vh] tp:size-[1.599vh] tl:size-[1.841vh] dt:size-[2.083vh]`;
const cardRadius = `rounded-[2.301vh] tp:rounded-[2.326vh] tl:rounded-[2.907vh] dt:rounded-[3.765vh]`;

export default function About() {
  return (
    <section
      id="about"
      className={`relative
        px-[2.092vh] tp:px-[3.488vh] tl:px-[7.752vh] dt:px-[14.706vh] py-[5.858vh] tp:py-[5.233vh] tl:py-[6.202vh] dt:py-[9.559vh]`}
    >
      <div
        className={`mx-auto grid grid-cols-1 items-start tl:grid-cols-2 dt:grid-cols-2
          gap-[4.184vh] tp:gap-[4.07vh] tl:gap-[3.876vh] dt:gap-[6.127vh]`}
      >
        <Reveal className="order-2 tl:order-1 dt:order-1">
          <div
            className={`relative flex flex-col items-start bg-white/10
              ${cardRadius} p-[2.092vh] tp:p-[2.907vh] tl:p-[3.101vh] dt:p-[4.564vh] gap-[2.092vh] tp:gap-[2.18vh] tl:gap-[2.519vh] dt:gap-[3.186vh] backdrop-blur-[2.51vh] tp:backdrop-blur-[1.744vh] tl:backdrop-blur-[2.326vh] dt:backdrop-blur-[2.941vh]`}
          >
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-0 ${cardRadius} p-[0.105vh] tp:p-[0.073vh] tl:p-[0.097vh] dt:p-[0.123vh]`}
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
              className={`pointer-events-none absolute inset-0 opacity-25 ${cardRadius} bg-[length:20.921vh_20.921vh] tp:bg-[length:14.535vh_14.535vh] tl:bg-[length:19.38vh_19.38vh] dt:bg-[length:24.51vh_24.51vh]`}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1.5 -0.2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />
            <dl className={`flex w-full flex-col gap-[0.837vh] tp:gap-[1.308vh] tl:gap-[1.55vh] dt:gap-[1.838vh]`}>
              {details.map((d) => (
                <div
                  key={d.label}
                  className={`flex flex-wrap items-center
                    gap-x-[1.046vh] tp:gap-x-[1.163vh] tl:gap-x-[1.163vh] dt:gap-x-[1.471vh] gap-y-[0.209vh] tp:gap-y-[0.291vh] tl:gap-y-[0.388vh] dt:gap-y-[0.49vh] p-[0.628vh] tp:p-[0.727vh] tl:p-[0.775vh] dt:p-[0.98vh]`}
                >
                  <dt className={labelClass}>{d.label} :</dt>
                  <dd className={valueClass}>{d.value}</dd>
                </div>
              ))}
              <div
                className={`flex items-center gap-[1.046vh] tp:gap-[1.163vh] tl:gap-[1.163vh] dt:gap-[1.471vh] p-[0.628vh] tp:p-[0.727vh] tl:p-[0.775vh] dt:p-[0.98vh]`}
              >
                <dt className={labelClass}>Freelance :</dt>
                <dd>
                  <span
                    className={`rounded-full bg-white/[0.08] font-normal leading-[1.429] text-accent-soft-text
                      px-[1.464vh] tp:px-[1.453vh] tl:px-[1.55vh] dt:px-[1.961vh] py-[0.837vh] tp:py-[0.727vh] tl:py-[0.775vh] dt:py-[0.98vh] text-[1.464vh] tp:text-[1.453vh] tl:text-[1.55vh] dt:text-[1.961vh]`}
                  >
                    Available
                  </span>
                </dd>
              </div>
            </dl>

            <hr
              className={`w-full border-0 bg-linear-to-r from-white/0 via-white to-white/0 h-[0.105vh] tp:h-[0.073vh] tl:h-[0.097vh] dt:h-[0.123vh]`}
            />

            <div
              className={`flex flex-wrap items-center gap-[1.046vh] tp:gap-[1.163vh] tl:gap-[1.163vh] dt:gap-[1.471vh] p-[0.628vh] tp:p-[0.727vh] tl:p-[0.775vh] dt:p-[0.98vh]`}
            >
              <span
                className={`font-bold leading-normal text-white text-[1.674vh] tp:text-[1.744vh] tl:text-[1.841vh] dt:text-[2.282vh]`}
              >
                Connect directly:
              </span>
              <div
                className={`flex flex-wrap items-center gap-[1.046vh] tp:gap-[1.163vh] tl:gap-[1.163vh] dt:gap-[1.471vh]`}
              >
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <GithubIcon className={linkIconClass} />
                  gh/bhashana
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <LinkedinIcon className={linkIconClass} />
                  in/bhashana
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div
          className={`order-1 flex flex-col items-start gap-0 tl:order-2 tl:items-end dt:order-2 dt:items-end`}
        >
          <div
            className={`flex flex-col items-start tl:items-end tl:text-right dt:items-end dt:text-right
              gap-[2.929vh] tp:gap-[2.907vh] tl:gap-[3.876vh] dt:gap-[4.902vh]`}
          >
            <Reveal
              className={`flex w-full flex-col items-start tl:items-end dt:items-end gap-[1.046vh] tp:gap-[1.163vh] tl:gap-[1.744vh] dt:gap-[1.961vh]`}
            >
              <h2
                className={`bg-gradient-to-r from-white to-white/90 bg-clip-text font-display font-bold leading-[0.9] text-transparent opacity-90
                  text-[clamp(3.766vh,12vw,5.858vh)] tp:text-[clamp(4.36vh,9vw,6.977vh)] tl:text-[clamp(6.202vh,6vw,9.69vh)] dt:text-[clamp(4.412vh,7vw,10.049vh)]`}
              >
                About Me
              </h2>
              <p
                className={`font-display leading-[1.4] text-white
                  tracking-[0.084vh] tp:tracking-[0.109vh] tl:tracking-[0.136vh] dt:tracking-[0.147vh] text-[2.092vh] tp:text-[2.035vh] tl:text-[2.519vh] dt:text-[2.941vh]`}
              >
                Every exceptional journey begins with a{" "}
                <span className="text-accent">clear vision.</span>
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p
                className={`text-left font-normal leading-[1.35] text-white/50 tl:text-justify dt:text-justify
                  text-[1.883vh] tp:text-[2.035vh] tl:text-[2.519vh] dt:text-[3.431vh]`}
              >
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
              className={`w-auto h-[10.46vh] tp:h-[10.901vh] tl:h-[14.535vh] dt:h-[20.343vh]`}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
