"use client";

import { useInView } from "react-intersection-observer";
import { Users, Music2, Sparkles, Bot } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  {
    icon: Users,
    title: "Innovation Labs",
    description:
      "Join specialized labs where entrepreneurs and innovators collaborate on groundbreaking projects and ideas.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
  },
  {
    icon: Music2,
    title: "Focus Playlists",
    description:
      "Discover curated soundtracks that boost productivity and spark creativity during intense work sessions.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=400&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Expert Insights",
    description:
      "Access premium content curated by industry leaders in technology, entrepreneurship, and innovation.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
  },
  {
    icon: Bot,
    title: "AI Enhancement",
    description:
      "Leverage cutting-edge AI features that amplify your productivity and decision-making capabilities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  },
];

export function LandingFeatures() {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 500], [0, -50]);
  const titleOpacity = useTransform(scrollY, [0, 300], [0.5, 1]);

  return (
    <div className="py-32 relative" id="features">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 [text-wrap:balance]">
            Built for{" "}
            <span className="gradient-text">visionary</span>{" "}
            <span className="gradient-text">creators</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium [text-wrap:balance]">
            Tools and features that empower the next generation of innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ 
  feature, 
  index 
}: { 
  feature: typeof features[0]; 
  index: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollY } = useScroll();
  const cardY = useTransform(scrollY, [0, 1000], [100, -20]);
  const cardScale = useTransform(scrollY, [0, 1000], [0.8, 1]);
  const cardOpacity = useTransform(scrollY, [0, 500], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y: cardY, scale: cardScale, opacity: cardOpacity }}
      initial={{ y: 40, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[2rem] border border-border overflow-hidden hover:border-primary/20 transition-all duration-500"
    >
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <motion.img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover"
          whileInView={{ scale: [1.2, 1] }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      
      <div className="relative p-10 backdrop-blur-sm">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff3b30] to-[#ff9500] flex items-center justify-center mb-8">
          <feature.icon className="w-7 h-7 text-white" />
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold mb-4">{feature.title}</h3>
        <p className="text-lg text-muted-foreground font-medium">{feature.description}</p>
      </div>
    </motion.div>
  );
}