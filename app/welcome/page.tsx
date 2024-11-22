"use client";

import { LandingHero } from "@/components/landing/hero";
import { LandingFeatures } from "@/components/landing/features";
import { LandingCTA } from "@/components/landing/cta";
import { LandingNav } from "@/components/landing/nav";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-background selection:bg-[#ff3b30] selection:text-white">
      <LandingNav />
      <LandingHero />
      <LandingFeatures />
      <LandingCTA />
    </main>
  );
}