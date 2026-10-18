"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import Reveal from "@/components/Reveal";
import GlowOrb from "@/components/GlowOrb";
import { siteConfig } from "@/lib/site-config";

const PHONE = "+94 78 87 73 936";
// Injected at build time from .env.local locally, or the WEB3FORMS_ACCESS_KEY GitHub secret in CI.
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

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

  const iconCls = "size-[1.883vh] tp:size-[1.453vh] tl:size-[1.744vh] dt:size-[2.206vh]";

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied" : `Copy ${value}`}
      className="flex shrink-0 items-center justify-center text-white/60 transition-colors hover:text-accent size-[4.603vh] tp:size-[3.488vh] tl:size-[2.713vh] dt:size-[2.451vh] -my-[1.151vh] tp:-my-[0.763vh] tl:-my-[0vh] dt:-my-[0vh]"
    >
      {copied ? <Check className={iconCls} strokeWidth={1.75} /> : <Copy className={iconCls} strokeWidth={1.75} />}
    </button>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: "Portfolio contact form",
          subject: data.subject || "New message from portfolio site",
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message ?? "Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-x-clip px-[2.092vh] tp:px-[2.907vh] tl:px-[4.651vh] dt:px-[7.23vh] py-[7.531vh] tp:py-[7.267vh] tl:py-[8.721vh] dt:py-[11.642vh]">
      <GlowOrb className="left-1/2 -translate-x-1/2 opacity-50 -top-[16.737vh] tp:-top-[15.262vh] tl:-top-[19.38vh] dt:-top-[27.635vh] size-[33.473vh] tp:size-[30.523vh] tl:size-[38.76vh] dt:size-[55.27vh]" color="#424242" />

      <div className="relative mx-auto flex w-full flex-col items-center max-w-[62.762vh] tp:max-w-[65.407vh] tl:max-w-[124.031vh] dt:max-w-[161.887vh] gap-[5.021vh] tp:gap-[4.07vh] tl:gap-[5.426vh] dt:gap-[7.353vh]">
        <Reveal className="flex w-full flex-col items-center text-center max-w-[46.025vh] tp:max-w-[50.872vh] tl:max-w-[67.829vh] dt:max-w-[96.814vh] gap-[1.674vh] tp:gap-[1.453vh] tl:gap-[1.938vh] dt:gap-[2.941vh]">
          <h2 className="bg-gradient-to-r from-white from-[0.1%] to-white/90 to-[74%] bg-clip-text font-display text-[clamp(3.766vh,7vw,8.577vh)] tp:text-[clamp(3.488vh,7vw,6.977vh)] tl:text-[clamp(4.651vh,7vw,7.946vh)] dt:text-[clamp(4.412vh,7vw,10.049vh)] font-bold leading-[0.9] text-transparent opacity-90">
            Let&rsquo;s Talk
          </h2>
          <p className="font-body leading-[1.35] text-white/50 text-[1.883vh] tp:text-[1.744vh] tl:text-[1.938vh] dt:text-[2.941vh] tracking-[0.105vh] tp:tracking-[0.087vh] tl:tracking-[0.107vh] dt:tracking-[0.147vh]">
            Available for enterprise engineering roles, distributed systems projects, and high-impact
            software development.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="w-full tp:bg-white/[0.04] tl:bg-white/[0.04] dt:bg-white/[0.04] rounded-[3.347vh] tp:rounded-[2.907vh] tl:rounded-[3.876vh] dt:rounded-[5.882vh] p-0 tp:p-[2.907vh] tl:p-[3.488vh] dt:p-[7.843vh]">
          <div className="flex flex-col tl:flex-row tl:items-start tl:justify-between dt:flex-row dt:items-start dt:justify-between gap-[4.184vh] tp:gap-[3.488vh] tl:gap-[3.101vh] dt:gap-[4.902vh]">
            <div className="flex w-full flex-col tl:max-w-[38.76vh] dt:max-w-[49.755vh] gap-[2.092vh] tp:gap-[1.744vh] tl:gap-[2.132vh] dt:gap-[3.431vh]">
              <div className="flex items-start bg-white/10 gap-[1.464vh] tp:gap-[1.163vh] tl:gap-[1.357vh] dt:gap-[1.961vh] p-[1.674vh] tp:p-[1.453vh] tl:p-[1.744vh] dt:p-[2.451vh] rounded-[2.51vh] tp:rounded-[2.035vh] tl:rounded-[2.326vh] dt:rounded-[3.489vh]">
                <div className="flex shrink-0 items-center justify-center bg-chip size-[4.603vh] tp:size-[3.779vh] tl:size-[4.264vh] dt:size-[5.882vh] rounded-[0.941vh] tp:rounded-[0.727vh] tl:rounded-[0.872vh] dt:rounded-[1.269vh]">
                  <MapPin className="text-black/87 size-[2.72vh] tp:size-[2.18vh] tl:size-[2.519vh] dt:size-[3.676vh]" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col text-white gap-[0.209vh] tp:gap-[0.145vh] tl:gap-[0.194vh] dt:gap-[0.245vh]">
                  <p className="font-body text-[1.674vh] tp:text-[1.453vh] tl:text-[1.55vh] dt:text-[2.206vh] leading-[1.35]">Irabadagama, Sandalankawa</p>
                  <p className="font-body text-[1.255vh] tp:text-[1.017vh] tl:text-[1.163vh] dt:text-[1.471vh] leading-[1.35]">Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start bg-white/10 gap-[1.464vh] tp:gap-[1.163vh] tl:gap-[1.357vh] dt:gap-[1.961vh] p-[1.674vh] tp:p-[1.453vh] tl:p-[1.744vh] dt:p-[2.451vh] rounded-[2.51vh] tp:rounded-[2.035vh] tl:rounded-[2.326vh] dt:rounded-[3.489vh]">
                <div className="flex shrink-0 items-center justify-center bg-chip size-[4.603vh] tp:size-[3.779vh] tl:size-[4.264vh] dt:size-[5.882vh] rounded-[0.941vh] tp:rounded-[0.727vh] tl:rounded-[0.872vh] dt:rounded-[1.269vh]">
                  <Phone className="text-black/87 size-[2.72vh] tp:size-[2.18vh] tl:size-[2.519vh] dt:size-[3.676vh]" strokeWidth={1.75} />
                </div>
                <div className="flex min-w-0 flex-1 flex-col text-white gap-[0.209vh] tp:gap-[0.145vh] tl:gap-[0.194vh] dt:gap-[0.245vh]">
                  <div className="flex items-center justify-between gap-[0.837vh] tp:gap-[0.581vh] tl:gap-[0.775vh] dt:gap-[0.98vh]">
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="font-body hover:text-accent text-[1.674vh] tp:text-[1.453vh] tl:text-[1.55vh] dt:text-[2.206vh] leading-[1.35]">
                      {PHONE}
                    </a>
                    <CopyButton value={PHONE} />
                  </div>
                  <p className="font-body text-[1.255vh] tp:text-[1.017vh] tl:text-[1.163vh] dt:text-[1.471vh] leading-[1.35]">Direct &amp; WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start bg-white/10 gap-[1.464vh] tp:gap-[1.163vh] tl:gap-[1.357vh] dt:gap-[1.961vh] p-[1.674vh] tp:p-[1.453vh] tl:p-[1.744vh] dt:p-[2.451vh] rounded-[2.51vh] tp:rounded-[2.035vh] tl:rounded-[2.326vh] dt:rounded-[3.489vh]">
                <div className="flex shrink-0 items-center justify-center bg-chip size-[4.603vh] tp:size-[3.779vh] tl:size-[4.264vh] dt:size-[5.882vh] rounded-[0.941vh] tp:rounded-[0.727vh] tl:rounded-[0.872vh] dt:rounded-[1.269vh]">
                  <Mail className="text-black/87 size-[2.72vh] tp:size-[2.18vh] tl:size-[2.519vh] dt:size-[3.676vh]" strokeWidth={1.75} />
                </div>
                <div className="flex min-w-0 flex-1 flex-col text-white gap-[0.209vh] tp:gap-[0.145vh] tl:gap-[0.194vh] dt:gap-[0.245vh]">
                  <div className="flex items-center justify-between gap-[0.837vh] tp:gap-[0.581vh] tl:gap-[0.775vh] dt:gap-[0.98vh]">
                    <a href={`mailto:${siteConfig.email}`} className="min-w-0 break-all font-body hover:text-accent text-[1.674vh] tp:text-[1.453vh] tl:text-[1.55vh] dt:text-[2.206vh] leading-[1.35]">
                      {siteConfig.email}
                    </a>
                    <CopyButton value={siteConfig.email} />
                  </div>
                  <p className="font-body text-[1.255vh] tp:text-[1.017vh] tl:text-[1.163vh] dt:text-[1.471vh] leading-[1.35]">Fast Response Time</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-[1.255vh] tp:gap-[1.163vh] tl:gap-[1.55vh] dt:gap-[2.451vh]">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center rounded-full border-white/40 bg-white/[0.06] leading-[1.5] text-white/70 underline decoration-from-font transition-colors hover:bg-white/10 border-[0.105vh] tp:border-[0.073vh] tl:border-[0.097vh] dt:border-[0.123vh] gap-[1.046vh] tp:gap-[0.872vh] tl:gap-[1.163vh] dt:gap-[1.471vh] px-[2.092vh] tp:px-[1.744vh] tl:px-[1.938vh] dt:px-[2.451vh] py-[1.674vh] tp:py-[1.453vh] tl:py-[1.744vh] dt:py-[2.451vh] text-[1.674vh] tp:text-[1.308vh] tl:text-[1.55vh] dt:text-[1.961vh] underline-offset-[0.209vh] tp:underline-offset-[0.145vh] tl:underline-offset-[0.194vh] dt:underline-offset-[0.245vh]"
                >
                  <GithubIcon className="shrink-0 size-[2.51vh] tp:size-[2.035vh] tl:size-[2.326vh] dt:size-[3.309vh]" />
                  gh/bhashana
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center rounded-full border-white/40 bg-white/[0.06] leading-[1.5] text-white/70 underline decoration-from-font transition-colors hover:bg-white/10 border-[0.105vh] tp:border-[0.073vh] tl:border-[0.097vh] dt:border-[0.123vh] gap-[1.046vh] tp:gap-[0.872vh] tl:gap-[1.163vh] dt:gap-[1.471vh] px-[2.092vh] tp:px-[1.744vh] tl:px-[1.938vh] dt:px-[2.451vh] py-[1.674vh] tp:py-[1.453vh] tl:py-[1.744vh] dt:py-[2.451vh] text-[1.674vh] tp:text-[1.308vh] tl:text-[1.55vh] dt:text-[1.961vh] underline-offset-[0.209vh] tp:underline-offset-[0.145vh] tl:underline-offset-[0.194vh] dt:underline-offset-[0.245vh]"
                >
                  <LinkedinIcon className="shrink-0 size-[2.51vh] tp:size-[2.035vh] tl:size-[2.326vh] dt:size-[3.309vh]" />
                  in/bhashana
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex w-full flex-col items-end bg-white/[0.04] tl:max-w-[67.829vh] dt:max-w-[92.279vh] gap-[2.51vh] tp:gap-[2.326vh] tl:gap-[2.713vh] dt:gap-[3.922vh] rounded-[2.929vh] tp:rounded-[2.907vh] tl:rounded-[3.488vh] dt:rounded-[5.324vh] p-[2.092vh] tp:p-[2.616vh] tl:p-[3.101vh] dt:p-[4.412vh]">
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <div className="flex w-full flex-col gap-[1.255vh] tp:gap-[1.017vh] tl:gap-[1.163vh] dt:gap-[1.471vh]">
                <div className="flex flex-col tp:flex-row tl:flex-row dt:flex-row gap-[1.255vh] tp:gap-[1.017vh] tl:gap-[1.163vh] dt:gap-[1.471vh]">
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
                      className="w-full bg-white/[0.14] leading-[1.4] text-white placeholder:text-white/30 focus:outline-accent focus:outline-[0.209vh] tp:focus:outline-[0.145vh] tl:focus:outline-[0.194vh] dt:focus:outline-[0.245vh] h-[5.858vh] tp:h-[4.651vh] tl:h-[5.814vh] dt:h-[8.088vh] rounded-[1.883vh] tp:rounded-[1.817vh] tl:rounded-[2.132vh] dt:rounded-[3.064vh] px-[2.092vh] tp:px-[1.744vh] tl:px-[2.132vh] dt:px-[2.941vh] text-[1.883vh] tp:text-[1.599vh] tl:text-[1.744vh] dt:text-[2.451vh]"
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
                      className="w-full bg-white/[0.14] leading-[1.4] text-white placeholder:text-white/30 focus:outline-accent focus:outline-[0.209vh] tp:focus:outline-[0.145vh] tl:focus:outline-[0.194vh] dt:focus:outline-[0.245vh] h-[5.858vh] tp:h-[4.651vh] tl:h-[5.814vh] dt:h-[8.088vh] rounded-[1.883vh] tp:rounded-[1.817vh] tl:rounded-[2.132vh] dt:rounded-[3.064vh] px-[2.092vh] tp:px-[1.744vh] tl:px-[2.132vh] dt:px-[2.941vh] text-[1.883vh] tp:text-[1.599vh] tl:text-[1.744vh] dt:text-[2.451vh]"
                    />
                  </div>
                </div>
                <div className="flex flex-col tp:flex-row tl:flex-row dt:flex-row gap-[1.255vh] tp:gap-[1.017vh] tl:gap-[1.163vh] dt:gap-[1.471vh]">
                  <div className="flex-1">
                    <label htmlFor="phone" className="sr-only">
                      Your Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full bg-white/[0.14] leading-[1.4] text-white placeholder:text-white/30 focus:outline-accent focus:outline-[0.209vh] tp:focus:outline-[0.145vh] tl:focus:outline-[0.194vh] dt:focus:outline-[0.245vh] h-[5.858vh] tp:h-[4.651vh] tl:h-[5.814vh] dt:h-[8.088vh] rounded-[1.883vh] tp:rounded-[1.817vh] tl:rounded-[2.132vh] dt:rounded-[3.064vh] px-[2.092vh] tp:px-[1.744vh] tl:px-[2.132vh] dt:px-[2.941vh] text-[1.883vh] tp:text-[1.599vh] tl:text-[1.744vh] dt:text-[2.451vh]"
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
                      className="w-full bg-white/[0.14] leading-[1.4] text-white placeholder:text-white/30 focus:outline-accent focus:outline-[0.209vh] tp:focus:outline-[0.145vh] tl:focus:outline-[0.194vh] dt:focus:outline-[0.245vh] h-[5.858vh] tp:h-[4.651vh] tl:h-[5.814vh] dt:h-[8.088vh] rounded-[1.883vh] tp:rounded-[1.817vh] tl:rounded-[2.132vh] dt:rounded-[3.064vh] px-[2.092vh] tp:px-[1.744vh] tl:px-[2.132vh] dt:px-[2.941vh] text-[1.883vh] tp:text-[1.599vh] tl:text-[1.744vh] dt:text-[2.451vh]"
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
                    className="w-full resize-none bg-white/[0.14] leading-[1.4] text-white placeholder:text-white/30 focus:outline-accent focus:outline-[0.209vh] tp:focus:outline-[0.145vh] tl:focus:outline-[0.194vh] dt:focus:outline-[0.245vh] rounded-[1.883vh] tp:rounded-[1.817vh] tl:rounded-[2.132vh] dt:rounded-[3.064vh] px-[2.092vh] tp:px-[1.744vh] tl:px-[2.132vh] dt:px-[2.941vh] py-[1.569vh] tp:py-[1.308vh] tl:py-[1.55vh] dt:py-[1.838vh] text-[1.883vh] tp:text-[1.599vh] tl:text-[1.744vh] dt:text-[2.451vh]"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center disabled:cursor-not-allowed disabled:opacity-60 bg-accent font-medium leading-[1.4] text-black transition-transform hover:scale-[1.03] focus-visible:outline-accent focus-visible:outline-[0.209vh] tp:focus-visible:outline-[0.145vh] tl:focus-visible:outline-[0.194vh] dt:focus-visible:outline-[0.245vh] focus-visible:outline-offset-[0.209vh] tp:focus-visible:outline-offset-[0.145vh] tl:focus-visible:outline-offset-[0.194vh] dt:focus-visible:outline-offset-[0.245vh] gap-[0.837vh] tp:gap-[0.581vh] tl:gap-[0.775vh] dt:gap-[0.98vh] rounded-[1.464vh] tp:rounded-[1.017vh] tl:rounded-[1.26vh] dt:rounded-[1.698vh] py-[1.674vh] tp:py-[1.453vh] tl:py-[1.744vh] dt:py-[2.451vh] pl-[2.51vh] tp:pl-[2.035vh] tl:pl-[2.326vh] dt:pl-[2.941vh] pr-[2.092vh] tp:pr-[1.744vh] tl:pr-[1.938vh] dt:pr-[2.451vh] text-[1.883vh] tp:text-[1.599vh] tl:text-[1.744vh] dt:text-[2.451vh]"
              >
                {status === "sending" ? "Sending…" : "Submit Message"}
                <ArrowUpRight className="size-[2.301vh] tp:size-[1.744vh] tl:size-[2.132vh] dt:size-[2.696vh]" strokeWidth={1.75} />
              </button>
              <p
                role="status"
                aria-live="polite"
                className={`self-end text-right font-body leading-[1.35] text-[1.464vh] tp:text-[1.308vh] tl:text-[1.55vh] dt:text-[1.961vh] ${
                  status === "error" ? "text-red-400" : "text-accent"
                } ${status === "sent" || status === "error" ? "" : "sr-only"}`}
              >
                {status === "sent" && "Message sent. Thank you, I will get back to you soon."}
                {status === "error" && (
                  <>
                    Something went wrong. Please email me at{" "}
                    <a href={`mailto:${siteConfig.email}`} className="underline">
                      {siteConfig.email}
                    </a>
                    .
                  </>
                )}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
