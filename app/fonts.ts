import localFont from "next/font/local";
import { DM_Sans, Boldonse, Manrope } from "next/font/google";

// Cal Sans — self-hosted locally (OFL licensed, sourced from the `cal-sans` npm
// package: https://github.com/calcom/sans). Not distributed via Google Fonts,
// so next/font/local is used instead of next/font/google.
export const calSans = localFont({
  src: "../src/fonts/CalSansVF.woff2",
  variable: "--font-cal-sans",
  display: "swap",
  weight: "400 700",
});

// Decorative oversized background wordmarks (Hero, My Skills, Footer CTA).
export const boldonse = Boldonse({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-boldonse",
  display: "swap",
});

// Body copy, buttons, badges, nav-style labels.
export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Figma spec calls for "NeoGram Trial" for paragraph copy and card
// descriptions. It is a commercial/trial typeface not published on Google
// Fonts or any licensable CDN, so it cannot be legally bundled here.
// Manrope is used as the closest-matching geometric sans substitute
// (see README for details on this deviation).
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
