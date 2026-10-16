import ScrollLink from "@/components/ScrollLink";
import GlowOrb from "@/components/GlowOrb";

export default function Footer() {
  return (
    <footer className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-ink px-6 py-16 lg:min-h-[344px]">
      <GlowOrb className="left-1/2 top-1/2 size-[451px] -translate-x-1/2 -translate-y-1/2 opacity-20" color="#7de112" />

      <div aria-hidden className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-6 overflow-hidden opacity-[0.03]">
        {[0, 1, 2].map((i) => (
          <p
            key={i}
            className="whitespace-nowrap font-display text-[clamp(60px,14vw,199px)] font-bold leading-[0.9] text-white"
            style={{ transform: "rotate(12.43deg)" }}
          >
            Let&rsquo;s&nbsp;&nbsp;Work&nbsp;&nbsp;Together
          </p>
        ))}
      </div>

      <ScrollLink
        href="#contact"
        className="relative text-center font-display text-[clamp(26px,5vw,54px)] font-bold leading-[0.9] text-accent opacity-90 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        Let&rsquo;s Work Together
      </ScrollLink>
    </footer>
  );
}
