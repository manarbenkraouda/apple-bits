"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Repeat2, Share, BadgeCheck } from "lucide-react";
import { QuotedBit } from "@/components/quoted-bit";
import { formatNumber } from "@/lib/utils";
import type { Bit } from "@/lib/types";
import Link from "next/link";
import { motion } from "framer-motion";

interface BitCardProps {
  bit: Bit;
}

export function BitCard({ bit }: BitCardProps) {
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
            <img 
              src={bit.author.avatar} 
              alt={bit.author.name} 
              className="object-cover"
            />
          </Avatar>
          <div className="flex-1 min-w-0">
            <Link href={`/bit/${bit.id}`} className="block">
              <div className="flex items-center space-x-1 flex-wrap">
                <span className="font-semibold">{bit.author.name}</span>
                {bit.author.verified && (
                  <BadgeCheck className="w-4 h-4 text-blue-500" />
                )}
                <span className="text-muted-foreground">{bit.author.handle}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">{bit.timestamp}</span>
              </div>
              <p className="mt-2 text-[15px] leading-normal">{bit.content}</p>

              {bit.image && (
                <div className="mt-3 rounded-xl overflow-hidden border border-border">
                  <img src={bit.image} alt="Bit content" className="w-full h-auto" />
                </div>
              )}
            </Link>

            {bit.quotedBitId && (
              <div className="mt-3">
                <QuotedBit quotedBitId={bit.quotedBitId} />
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