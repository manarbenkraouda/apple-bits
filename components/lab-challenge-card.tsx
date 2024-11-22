"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { formatTimeAgo } from "@/lib/utils";
import { Trophy, Clock, Users, ArrowRight, Gift } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Challenge } from "@/lib/types";

interface LabChallengeCardProps {
  challenge: Challenge;
  featured?: boolean;
}

export function LabChallengeCard({ challenge, featured }: LabChallengeCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "completed":
        return "bg-blue-500";
      case "upcoming":
        return "bg-orange-500";
      default:
        return "bg-muted";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`group relative rounded-2xl border border-border overflow-hidden hover:border-primary/20 transition-colors ${
        featured ? "bg-gradient-to-br from-background to-accent/20" : ""
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4">
          <Badge
            className="bg-gradient-to-r from-[#ff3b30] to-[#ff9500] text-white border-none"
          >
            Featured Challenge
          </Badge>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden border border-border">
            <img
              src={challenge.issuer.logo}
              alt={challenge.issuer.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-semibold">{challenge.title}</h3>
              <Badge
                variant="secondary"
                className={`${getStatusColor(challenge.status)} text-white`}
              >
                {challenge.status}
              </Badge>
            </div>
            <p className="mt-2 text-muted-foreground">{challenge.description}</p>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Reward</div>
                <div className="flex items-center space-x-2">
                  <Gift className="w-4 h-4 text-primary" />
                  <span className="font-medium">
                    {challenge.reward.type === "monetary"
                      ? challenge.reward.value
                      : challenge.reward.type}
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Deadline</div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-medium">
                    {formatTimeAgo(challenge.deadline)}
                  </span>
                </div>
              </div>
            </div>

            {challenge.requirements && (
              <div className="mt-4">
                <div className="text-sm font-medium mb-2">Requirements</div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {challenge.requirements.map((req, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {challenge.mentors && challenge.mentors.length > 0 && (
              <div className="mt-4">
                <div className="text-sm font-medium mb-2">Mentors</div>
                <div className="flex items-center space-x-2">
                  {challenge.mentors.map((mentor) => (
                    <Avatar key={mentor.handle} className="w-8 h-8">
                      <img src={mentor.avatar} alt={mentor.name} />
                    </Avatar>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{challenge.participants} participants</span>
                </div>
                {challenge.winners && (
                  <div className="flex items-center space-x-1">
                    <Trophy className="w-4 h-4" />
                    <span>{challenge.winners.length} winners</span>
                  </div>
                )}
              </div>

              <Button
                className="opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[#ff3b30] to-[#ff9500] text-white hover:opacity-90"
              >
                Join Challenge
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}