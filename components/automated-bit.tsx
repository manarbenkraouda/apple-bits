"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, MessageCircle, Repeat2, Share, BadgeCheck, Bot, TrendingUp, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";
import { formatNumber } from "@/lib/utils";
import type { AutomatedBit } from "@/lib/types";
import Link from "next/link";

interface AutomatedBitProps {
  bit: AutomatedBit;
}

export function AutomatedBit({ bit }: AutomatedBitProps) {
  const renderMetadata = () => {
    switch (bit.trigger) {
      case "achievement":
        return (
          <div className="mt-3 p-4 rounded-xl bg-accent/50 border border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff3b30] to-[#ff9500] flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-medium">{bit.metadata.achievement?.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {bit.metadata.achievement?.description}
                </p>
              </div>
            </div>
          </div>
        );

      case "milestone":
        return (
          <div className="mt-3 p-4 rounded-xl bg-accent/50 border border-border">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">{bit.metadata.milestone?.title}</h4>
                <span className="text-sm font-medium">
                  {bit.metadata.milestone?.progress} / {bit.metadata.milestone?.total}
                </span>
              </div>
              <Progress 
                value={(bit.metadata.milestone?.progress || 0) / (bit.metadata.milestone?.total || 1) * 100} 
                className="h-2"
              />
            </div>
          </div>
        );

      case "daily_summary":
        return (
          <div className="mt-3 p-4 rounded-xl bg-accent/50 border border-border">
            <div className="space-y-4">
              {bit.metadata.summary?.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="flex-1 text-sm">{highlight}</p>
                </div>
              ))}
              
              {bit.metadata.summary?.metrics && (
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-border">
                  {bit.metadata.summary.metrics.map((metric, index) => (
                    <div key={index} className="space-y-1">
                      <div className="text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{metric.value}</span>
                        {metric.change && (
                          <span className={`text-xs ${metric.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {metric.change > 0 ? '+' : ''}{metric.change}%
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case "event":
        return (
          <div className="mt-3 p-4 rounded-xl bg-accent/50 border border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff3b30] to-[#ff9500] flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-medium">{bit.metadata.event?.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {bit.metadata.event?.type} · {bit.metadata.event?.date}
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff3b30] to-[#ff9500] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="px-4 py-3 hover:bg-accent/5">
        <div className="flex space-x-4">
          <Avatar className="w-12 h-12 ring-2 ring-primary/20">
            <div className="w-full h-full bg-gradient-to-br from-[#ff3b30] to-[#ff9500] flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
          </Avatar>
          <div className="flex-1 min-w-0">
            <Link href={`/bit/${bit.id}`} className="block">
              <div className="flex items-center space-x-1 flex-wrap">
                <span className="font-semibold">{bit.author.name}</span>
                <BadgeCheck className="w-4 h-4 text-blue-500" />
                <span className="text-muted-foreground">{bit.author.handle}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">{bit.timestamp}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-xs bg-accent/50 px-2 py-0.5 rounded-full">
                  Automated Update
                </span>
              </div>
              <p className="mt-2 text-[15px] leading-normal">{bit.content}</p>
            </Link>

            {renderMetadata()}

            {bit.image && (
              <div className="mt-3 rounded-xl overflow-hidden border border-border">
                <img src={bit.image} alt="Bit content" className="w-full h-auto" />
              </div>
            )}

            <div className="flex justify-between w-full mt-3 -ml-2">
              <Button variant="ghost" size="sm" className="space-x-2 hover:text-primary">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">{formatNumber(bit.replies)}</span>
              </Button>
              <Button variant="ghost" size="sm" className="space-x-2 hover:text-green-500">
                <Repeat2 className="w-4 h-4" />
                <span className="text-sm">{formatNumber(bit.reposts)}</span>
              </Button>
              <Button variant="ghost" size="sm" className="space-x-2 hover:text-red-500">
                <Heart className="w-4 h-4" />
                <span className="text-sm">{formatNumber(bit.likes)}</span>
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Share className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}