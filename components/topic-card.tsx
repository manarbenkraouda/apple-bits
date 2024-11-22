"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { CuratorBadge } from "@/components/curator-badge";
import { formatNumber } from "@/lib/utils";
import type { Topic } from "@/lib/types";
import Link from "next/link";

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative rounded-2xl border border-border overflow-hidden hover:border-primary/20 transition-colors"
    >
      <div 
        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
        style={{ 
          backgroundColor: topic.color,
          backgroundImage: `url(${topic.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px)'
        }}
      />
      
      <div className="relative p-6 backdrop-blur-sm">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-semibold">{topic.name}</h3>
            <p className="mt-2 text-muted-foreground">{topic.description}</p>
          </div>
          <Avatar className="w-12 h-12 ring-2 ring-primary/20">
            <img src={topic.curator.avatar} alt={topic.curator.name} />
          </Avatar>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="font-medium">{topic.curator.name}</span>
              <CuratorBadge mini />
            </div>
            <p className="text-sm text-muted-foreground">
              {formatNumber(topic.followers)} followers
            </p>
          </div>

          <Link href={`/topic/${topic.id}`}>
            <Button
              className="bg-gradient-to-r from-[#ff3b30] to-[#ff9500] text-white hover:opacity-90 transition-opacity"
            >
              Follow Topic
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}