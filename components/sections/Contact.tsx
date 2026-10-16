"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import Reveal from "@/components/Reveal";
import GlowOrb from "@/components/GlowOrb";
import { siteConfig } from "@/lib/site-config";

const PHONE = "+94 77 49 43 294";

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — fail silently, value is still visible as text.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied" : `Copy ${value}`}
      className="flex size-5 shrink-0 items-center justify-center text-white/60 transition-colors hover:text-accent"
    >
      {copied ? <Check className="size-[18px]" strokeWidth={1.75} /> : <Copy className="size-[18px]" strokeWidth={1.75} />}
    </button>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const subject = formData.get("subject")?.toString() || "New message from portfolio site";
    const message = formData.get("message")?.toString() ?? "";

    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink px-6 py-20 sm:px-10 md:px-16 lg:px-[59px] lg:py-[95px]">
      <GlowOrb className="left-1/3 top-[-345px] size-[451px] opacity-30" color="#7de112" />

      <div className="relative mx-auto flex max-w-[1321px] flex-col items-center gap-14 lg:gap-[60px]">
        <Reveal className="flex max-w-[790px] flex-col items-center gap-4 text-center lg:gap-6">
          <h2 className="bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display text-[clamp(36px,7vw,82px)] font-bold leading-[0.9] text-transparent opacity-90">
            Let&rsquo;s Talk
          </h2>
          <p className="font-body text-xl leading-[1.35] tracking-[1.2px] text-white/50 sm:text-2xl">
            Available for enterprise engineering roles, distributed systems projects, and high-impact
            software development.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="w-full rounded-[32px] bg-white/[0.04] p-6 sm:p-10 lg:rounded-[48px] lg:p-16">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="flex w-full flex-col gap-7 lg:max-w-[406px]">
              <div className="flex items-start gap-4 rounded-[28.467px] bg-white/10 p-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-[10.352px] bg-chip">
                  <MapPin className="size-[30px] text-black/87" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col gap-0.5 text-white">
                  <p className="font-body text-lg leading-[1.35]">Irabadagama, Sandalankawa</p>
                  <p className="font-body text-xs leading-[1.35]">Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[28.467px] bg-white/10 p-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-[10.352px] bg-chip">
                  <Phone className="size-[30px] text-black/87" strokeWidth={1.75} />
                </div>
                <div className="flex flex-1 flex-col gap-0.5 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="font-body text-lg leading-[1.35] hover:text-accent">
                      {PHONE}
                    </a>
                    <CopyButton value={PHONE} />
                  </div>
                  <p className="font-body text-xs leading-[1.35]">Direct &amp; WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[28.467px] bg-white/10 p-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-[10.352px] bg-chip">
                  <Mail className="size-[30px] text-black/87" strokeWidth={1.75} />
                </div>
                <div className="flex flex-1 flex-col gap-0.5 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <a href={`mailto:${siteConfig.email}`} className="break-all font-body text-lg leading-[1.35] hover:text-accent">
                      {siteConfig.email}
                    </a>
                    <CopyButton value={siteConfig.email} />
                  </div>
                  <p className="font-body text-xs leading-[1.35]">Fast Response Time</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center gap-3 rounded-full border border-white/40 bg-white/[0.06] px-5 py-5 text-base text-white/70 underline decoration-from-font underline-offset-2 transition-colors hover:bg-white/10"
                >
                  <GithubIcon className="size-[27px]" />
                  gh/bhashana
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center gap-3 rounded-full border border-white/40 bg-white/[0.06] px-5 py-5 text-base text-white/70 underline decoration-from-font underline-offset-2 transition-colors hover:bg-white/10"
                >
                  <LinkedinIcon className="size-[27px]" />
                  in/bhashana
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex w-full flex-col items-end gap-8 rounded-[43.445px] bg-white/[0.04] p-6 sm:p-9 lg:max-w-[753px]">
              <div className="flex w-full flex-col gap-3">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="flex-1">
                    <label htmlFor="name" className="sr-only">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your Name"
                      className="h-[66px] w-full rounded-[25px] bg-white/[0.14] px-6 text-xl text-white placeholder:text-white/30 focus:outline-2 focus:outline-accent"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Email"
                      className="h-[66px] w-full rounded-[25px] bg-white/[0.14] px-6 text-xl text-white placeholder:text-white/30 focus:outline-2 focus:outline-accent"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="flex-1">
                    <label htmlFor="phone" className="sr-only">
                      Your Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your Phone"
                      className="h-[66px] w-full rounded-[25px] bg-white/[0.14] px-6 text-xl text-white placeholder:text-white/30 focus:outline-2 focus:outline-accent"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="subject" className="sr-only">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      className="h-[66px] w-full rounded-[25px] bg-white/[0.14] px-6 text-xl text-white placeholder:text-white/30 focus:outline-2 focus:outline-accent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Start write your message here"
                    className="w-full resize-none rounded-[25px] bg-white/[0.14] px-6 py-[15px] text-xl text-white placeholder:text-white/30 focus:outline-2 focus:outline-accent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 rounded-[13.859px] bg-accent py-5 pl-6 pr-5 text-xl font-medium text-black transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Submit Message
                <ArrowUpRight className="size-[22px]" strokeWidth={1.75} />
              </button>
              <p role="status" className="sr-only" aria-live="polite">
                {status === "sent" ? "Opening your email client to send the message." : ""}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
