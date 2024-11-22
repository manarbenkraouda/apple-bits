"use client";

import { AppleLogo } from "@/components/apple-logo";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export function LandingNav() {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]
  );

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{ background }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border/10"
    >
      <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/welcome" className="flex items-center space-x-2">
          <AppleLogo className="w-6 h-6 logo-gradient" />
          <span className="text-xl font-semibold gradient-text">Bits</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/welcome#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/welcome#labs" className="text-sm font-medium hover:text-primary transition-colors">
            Labs
          </Link>
          <Link href="/welcome#playlists" className="text-sm font-medium hover:text-primary transition-colors">
            Playlists
          </Link>
          <Link href="/">
            <Button className="bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90 transition-opacity rounded-xl">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}