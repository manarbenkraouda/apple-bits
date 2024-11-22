"use client";

import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export function LandingHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const backgroundScale = useTransform(scrollY, [0, 500], [1, 1.5]);
  const backgroundOpacity = useTransform(scrollY, [0, 500], [0.1, 0.05]);
  
  const contentY = useTransform(scrollY, [0, 500], [0, 100]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const imageY = useTransform(scrollY, [0, 500], [0, 200]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 0.8]);
  const imageOpacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  return (
    <div className="relative min-h-[140vh] flex flex-col items-center justify-start pt-32 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#ff3b30] to-[#ff9500] blur-3xl"
        style={{
          y: backgroundY,
          scale: backgroundScale,
          opacity: backgroundOpacity,
          maskImage: "radial-gradient(circle at center, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black, transparent 80%)",
        }}
      />

      <div ref={ref} className="relative w-full max-w-[1200px] mx-auto px-6">
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="text-center"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6 mb-8">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                Where ideas<br />transform into
              </h1>
              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight gradient-text">
                  innovation
                </h1>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight gradient-text">
                  impact
                </h1>
              </div>
            </div>

            <p className="mt-12 text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto">
              A new era of social connection that empowers entrepreneurs and innovators to shape the future together.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="mt-12"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center space-x-4"
          >
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90 transition-opacity text-lg px-8 h-14 rounded-2xl"
              >
                Join the Innovation
              </Button>
            </Link>
            <Link href="#features">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-14 rounded-2xl"
              >
                Explore Features
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
          className="mt-24"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto w-full max-w-[1200px] rounded-[2rem] border border-border/50 shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2400&h=1200&fit=crop"
                alt="Apple Bits Interface"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}