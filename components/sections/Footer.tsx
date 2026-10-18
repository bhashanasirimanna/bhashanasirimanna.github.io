import ScrollLink from "@/components/ScrollLink";
import GlowOrb from "@/components/GlowOrb";

export default function Footer() {
  return (
    <footer className="relative flex items-center justify-center overflow-hidden bg-ink min-h-[23.013vh] tp:min-h-[21.802vh] tl:min-h-[25.194vh] dt:min-h-[42.157vh] px-[2.51vh] tp:px-[2.907vh] tl:px-[4.651vh] dt:px-[2.941vh] py-[6.695vh] tp:py-[5.814vh] tl:py-[6.202vh] dt:py-[7.843vh]">
      <GlowOrb className="left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 opacity-100 size-[33.473vh] tp:size-[30.523vh] tl:size-[38.76vh] dt:size-[55.27vh]" color="#424242" />

      <div aria-hidden className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center overflow-hidden opacity-[0.03] gap-[2.51vh] tp:gap-[1.744vh] tl:gap-[2.326vh] dt:gap-[2.941vh]">
        {[0, 1, 2].map((i) => (
          <p
            key={i}
            className="whitespace-nowrap font-display text-[clamp(6.276vh,14vw,20.816vh)] tp:text-[clamp(6.541vh,14vw,15.988vh)] tl:text-[clamp(8.721vh,14vw,19.283vh)] dt:text-[clamp(7.353vh,14vw,24.387vh)] font-bold leading-[0.9] text-white"
            style={{ transform: "rotate(12.43deg)" }}
          >
            Let&rsquo;s&nbsp;&nbsp;Work&nbsp;&nbsp;Together
          </p>
        ))}
      </div>

      <ScrollLink
        href="#contact"
        className="relative text-center font-display text-[clamp(2.72vh,5vw,5.649vh)] tp:text-[clamp(2.616vh,5vw,4.651vh)] tl:text-[clamp(3.876vh,5vw,5.233vh)] dt:text-[clamp(3.186vh,5vw,6.618vh)] font-bold leading-[0.9] text-accent opacity-90 transition-opacity hover:opacity-100 focus-visible:outline-accent focus-visible:outline-[0.209vh] tp:focus-visible:outline-[0.145vh] tl:focus-visible:outline-[0.194vh] dt:focus-visible:outline-[0.245vh] focus-visible:outline-offset-[0.418vh] tp:focus-visible:outline-offset-[0.291vh] tl:focus-visible:outline-offset-[0.388vh] dt:focus-visible:outline-offset-[0.49vh]"
      >
        Let&rsquo;s Work Together
      </ScrollLink>
    </footer>
  );
}
