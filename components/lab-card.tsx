"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { formatTimeAgo } from "@/lib/utils";
import { Lock, Users, ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Lab } from "@/lib/types";

interface LabCardProps {
  lab: Lab;
}

export function LabCard({ lab }: LabCardProps) {
  // Calculate overall progress from objectives with fallback
  const progress = lab.objectives?.length 
    ? lab.objectives.reduce((acc, obj) => acc + obj.progress, 0) / lab.objectives.length
    : 0;

  return (
    <Link href={`/labs/${lab.id}`}>
      <motion.div
        whileHover={{ y: -2 }}
        className="group relative rounded-2xl border border-border overflow-hidden hover:border-primary/20 transition-colors"
      >
        <div 
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
          style={{ 
            backgroundColor: lab.color,
            backgroundImage: `url(${lab.icon})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)'
          }}
        />
        
        <div className="relative p-6 backdrop-blur-sm">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-semibold">{lab.name}</h3>
                <Badge variant="outline" className="text-xs">
                  {lab.category}
                </Badge>
                {lab.visibility === "private" && (
                  <Lock className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
              <p className="mt-2 text-muted-foreground line-clamp-2">{lab.description}</p>

              {lab.tags && lab.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {lab.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs bg-accent/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-1.5" />
              </div>
            </div>
            <div className="flex -space-x-2">
              {lab.members.slice(0, 3).map((member) => (
                <Avatar key={member.handle} className="w-8 h-8 ring-2 ring-background">
                  <img src={member.avatar} alt={member.name} />
                </Avatar>
              ))}
              {lab.members.length > 3 && (
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center ring-2 ring-background">
                  <span className="text-xs">+{lab.members.length - 3}</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{lab.memberCount} members</span>
              </div>
              {lab.dueDate && (
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Due {formatTimeAgo(lab.dueDate)}</span>
                </div>
              )}
            </div>

            <Button
              className="opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[#ff3b30] to-[#ff9500] text-white hover:opacity-90"
            >
              {lab.visibility === "gated" ? (
                "Apply to Join"
              ) : (
                <>
                  Join Lab
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}