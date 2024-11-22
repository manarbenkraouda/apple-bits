"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CuratorBadgeProps {
  className?: string;
  mini?: boolean;
}

export function CuratorBadge({ className, mini = false }: CuratorBadgeProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={cn(
        "inline-flex items-center space-x-1 rounded-full",
        "bg-gradient-to-r from-[#ff3b30] to-[#ff9500]",
        "text-white font-medium",
        mini ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm",
        className
      )}
    >
      <Star className={cn("fill-current", mini ? "w-3 h-3" : "w-4 h-4")} />
      <span>Curator</span>
    </motion.div>
  );
}