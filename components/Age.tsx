"use client";

import { useSyncExternalStore } from "react";
import { calculateAge } from "@/lib/age";

const subscribe = () => () => {};

/**
 * Renders the current age. The static export bakes in the age at build time
 * (server snapshot); in the visitor's browser it is recomputed from today's
 * date, so it never goes stale between deploys.
 */
export default function Age({ birthDate }: { birthDate: string }) {
  const age = useSyncExternalStore(
    subscribe,
    () => calculateAge(birthDate),
    () => calculateAge(birthDate),
  );

  return <>{age} years</>;
}
