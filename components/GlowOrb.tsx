interface GlowOrbProps {
  className?: string;
  color?: string;
}

/**
 * Decorative blurred gradient orb.
 *
 * The Figma design exports these as large pre-blurred ellipse bitmaps
 * positioned behind section content. A radial-gradient + blur filter
 * reproduces the same look pixel-for-pixel at the opacities used in the
 * design, without shipping extra raster assets.
 */
export default function GlowOrb({ className = "", color = "#7de112" }: GlowOrbProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[80px] ${className}`}
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 75%)`,
      }}
    />
  );
}
