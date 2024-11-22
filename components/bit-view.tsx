"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle, Repeat2, Share, Image, Smile, BadgeCheck } from "lucide-react";
import { QuotedBit } from "@/components/quoted-bit";
import { formatNumber } from "@/lib/utils";
import type { Bit } from "@/lib/types";
import { motion } from "framer-motion";

interface BitViewProps {
  bit: Bit;
  replies: Bit[];
}

export function BitView({ bit, replies }: BitViewProps) {
  const [replyText, setReplyText] = useState("");

  return (
    <div className="divide-y divide-border">
      <div className="p-4">
        <div className="flex space-x-4">
          <Avatar className="w-12 h-12 ring-2 ring-primary/20">
            <img 
              src={bit.author.avatar || `https://avatar.vercel.sh/${bit.author.handle}`} 
              alt={bit.author.name} 
              className="object-cover"
            />
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-1 flex-wrap">
              <span className="font-semibold text-lg">{bit.author.name}</span>
              {bit.author.verified && (
                <BadgeCheck className="w-5 h-5 text-blue-500" />
              )}
              <span className="text-muted-foreground">{bit.author.handle}</span>
            </div>
            <p className="mt-4 text-xl leading-normal">{bit.content}</p>

            {bit.image && (
              <div className="mt-4 rounded-xl overflow-hidden border border-border">
                <img src={bit.image} alt="Bit content" className="w-full h-auto" />
              </div>
            )}

            {bit.quotedBitId && (
              <div className="mt-4">
                <QuotedBit quotedBitId={bit.quotedBitId} />
              </div>
            )}

            <div className="flex items-center space-x-4 mt-4 pt-4 text-muted-foreground text-sm">
              <span>{bit.timestamp}</span>
              <span>·</span>
              <span><strong>{formatNumber(bit.reposts)}</strong> reposts</span>
              <span>·</span>
              <span><strong>{formatNumber(bit.likes)}</strong> likes</span>
            </div>

            <div className="flex justify-between w-full pt-4 mt-4 border-t border-border">
              <button className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <div className="p-2 rounded-full group-hover:bg-primary/10">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span>{formatNumber(bit.replies)}</span>
              </button>
              
              <button className="group flex items-center space-x-2 text-muted-foreground hover:text-green-500 transition-colors">
                <div className="p-2 rounded-full group-hover:bg-green-500/10">
                  <Repeat2 className="w-5 h-5" />
                </div>
                <span>{formatNumber(bit.reposts)}</span>
              </button>
              
              <button className="group flex items-center space-x-2 text-muted-foreground hover:text-red-500 transition-colors">
                <div className="p-2 rounded-full group-hover:bg-red-500/10">
                  <Heart className="w-5 h-5" />
                </div>
                <span>{formatNumber(bit.likes)}</span>
              </button>
              
              <button className="group flex items-center text-muted-foreground hover:text-primary transition-colors">
                <div className="p-2 rounded-full group-hover:bg-primary/10">
                  <Share className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reply Box */}
      <div className="p-4">
        <div className="flex items-start space-x-4">
          <Avatar className="w-10 h-10">
            <img src="https://avatar.vercel.sh/current-user" alt="Your avatar" />
          </Avatar>
          <div className="flex-1 min-w-0">
            <Textarea
              placeholder="Post your reply"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="min-h-[100px] bg-transparent border-none resize-none p-3 focus-visible:ring-0 text-lg"
            />
            <div className="flex items-center justify-between mt-4 border-t border-border pt-4">
              <div className="flex items-center space-x-2 text-primary">
                <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                  <Image className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
              </div>
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90 transition-opacity text-white rounded-full px-6"
                disabled={!replyText.trim()}
              >
                Reply
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Replies */}
      <div className="divide-y divide-border">
        {replies.map((reply) => (
          <motion.div
            key={reply.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 hover:bg-accent/5"
          >
            <div className="flex space-x-4">
              <Avatar className="w-10 h-10 ring-2 ring-primary/20">
                <img 
                  src={reply.author.avatar || `https://avatar.vercel.sh/${reply.author.handle}`} 
                  alt={reply.author.name} 
                  className="object-cover"
                />
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1 flex-wrap">
                  <span className="font-semibold">{reply.author.name}</span>
                  {reply.author.verified && (
                    <BadgeCheck className="w-4 h-4 text-blue-500" />
                  )}
                  <span className="text-muted-foreground">{reply.author.handle}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{reply.timestamp}</span>
                </div>
                <p className="mt-1 text-[15px] leading-normal">{reply.content}</p>

                {reply.image && (
                  <div className="mt-2 rounded-xl overflow-hidden border border-border">
                    <img src={reply.image} alt="Reply content" className="w-full h-auto" />
                  </div>
                )}

                {reply.quotedBitId && (
                  <div className="mt-3">
                    <QuotedBit quotedBitId={reply.quotedBitId} />
                  </div>
                )}

                <div className="flex justify-between w-full mt-2 -ml-2">
                  <button className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                    <div className="p-1.5 rounded-full group-hover:bg-primary/10">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{formatNumber(reply.replies)}</span>
                  </button>
                  
                  <button className="group flex items-center space-x-2 text-muted-foreground hover:text-green-500 transition-colors">
                    <div className="p-1.5 rounded-full group-hover:bg-green-500/10">
                      <Repeat2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{formatNumber(reply.reposts)}</span>
                  </button>
                  
                  <button className="group flex items-center space-x-2 text-muted-foreground hover:text-red-500 transition-colors">
                    <div className="p-1.5 rounded-full group-hover:bg-red-500/10">
                      <Heart className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{formatNumber(reply.likes)}</span>
                  </button>
                  
                  <button className="group flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <div className="p-1.5 rounded-full group-hover:bg-primary/10">
                      <Share className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}