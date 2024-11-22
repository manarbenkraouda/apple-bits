"use client";

import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function LandingCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);
  const backgroundOpacity = useTransform(scrollY, [0, 300], [0.1, 0.05]);

  const contentY = useTransform(scrollY, [0, 500], [100, -50]);
  const contentOpacity = useTransform(scrollY, [0, 300], [0.5, 1]);

  return (
    <div className="py-32 relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#ff3b30] to-[#ff9500] blur-3xl"
        style={{
          maskImage: "radial-gradient(circle at center, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black, transparent 80%)",
          y: backgroundY,
          opacity: backgroundOpacity,
        }}
      />

      <div
        ref={ref}
        className="relative max-w-[800px] mx-auto px-6 text-center"
      >
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl font-bold mb-8 [text-wrap:balance]"
          >
            Join the future of innovation
          </motion.h2>
        </motion.div>

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-muted-foreground font-medium mb-12 [text-wrap:balance]"
          >
            Connect with visionary entrepreneurs and creators who are shaping tomorrow's technology.
          </motion.p>
        </motion.div>

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90 transition-opacity text-lg px-8 h-14 rounded-2xl"
              >
                Start Creating Impact
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-sm text-muted-foreground font-medium"
          >
            Join the community of innovators · Free to get started
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}