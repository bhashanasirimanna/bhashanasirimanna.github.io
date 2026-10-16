"use client";

import { useLenis } from "lenis/react";
import type { AnchorHTMLAttributes, MouseEvent } from "react";

interface ScrollLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: `#${string}`;
}

export default function ScrollLink({ href, onClick, children, ...props }: ScrollLinkProps) {
  const lenis = useLenis();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, { offset: -24 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    onClick?.(e);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
