"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatTimeAgo } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { Sponsorship } from "@/lib/types";

interface LabSponsorshipCardProps {
  sponsorship: Sponsorship;
}

export function LabSponsorshipCard({ sponsorship }: LabSponsorshipCardProps) {
  const getTierColor = (tier: string) => {
    switch (tier) {
      case "gold":
        return "from-yellow-500 to-yellow-600";
      case "silver":
        return "from-gray-400 to-gray-500";
      case "bronze":
        return "from-orange-600 to-orange-700";
      default:
        return "from-muted to-muted-foreground";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="group relative rounded-2xl border border-border overflow-hidden hover:border-primary/20 transition-colors"
    >
      {sponsorship.featured && (
        <div className="absolute top-4 right-4">
          <Badge
            className="bg-gradient-to-r from-[#ff3b30] to-[#ff9500] text-white border-none"
          >
            Featured Sponsor
          </Badge>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden border border-border">
            <img
              src={sponsorship.sponsor.logo}
              alt={sponsorship.sponsor.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-semibold">
                {sponsorship.sponsor.name}
              </h3>
              <Badge
                className={`bg-gradient-to-r ${getTierColor(
                  sponsorship.tier
                )} text-white border-none capitalize`}
              >
                {sponsorship.tier} Sponsor
              </Badge>
            </div>
            <p className="mt-2 text-muted-foreground">
              {sponsorship.sponsor.description}
            </p>

            <div className="mt-4">
              <div className="text-sm font-medium mb-2">Benefits</div>
              <div className="grid grid-cols-2 gap-4">
                {sponsorship.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium">{benefit.title}</div>
                      <div className="text-muted-foreground">
                        {benefit.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                {formatTimeAgo(sponsorship.duration.start)} -{" "}
                {formatTimeAgo(sponsorship.duration.end)}
              </div>

              <Button
                className="opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[#ff3b30] to-[#ff9500] text-white hover:opacity-90"
              >
                Apply for Sponsorship
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}