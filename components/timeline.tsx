"use client";

import { useState, useRef, useEffect } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle, Repeat2, Share, BadgeCheck, Loader2, Image, Smile } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { formatNumber } from "@/lib/utils";
import { sampleBits } from "@/lib/data";
import { sampleAutomatedBits } from "@/lib/automated-bits-data";
import { extraAutomatedBits } from "@/lib/automated-bits-data-extra";
import { QuotedBit } from "@/components/quoted-bit";
import { AutomatedBit } from "@/components/automated-bit";
import { currentUser } from "@/lib/profile-data";
import { AutomatedBit as AutomatedBitType } from "@/lib/types";

const BITS_PER_PAGE = 10;

export function Timeline() {
  const [activeTab, setActiveTab] = useState("foryou");
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [content, setContent] = useState("");
  const loaderRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Combine all bits and automated bits
  const allBits = [
    ...sampleBits,
    ...sampleAutomatedBits,
    ...extraAutomatedBits
  ].sort((a, b) => {
    const parseTimestamp = (timestamp: string) => {
      if (timestamp.includes('ago')) {
        const now = new Date();
        const value = parseInt(timestamp);
        const unit = timestamp.replace(/[0-9]/g, '').trim();
        
        switch (unit) {
          case 's':
            return new Date(now.getTime() - value * 1000);
          case 'm':
            return new Date(now.getTime() - value * 60 * 1000);
          case 'h':
            return new Date(now.getTime() - value * 60 * 60 * 1000);
          case 'd':
            return new Date(now.getTime() - value * 24 * 60 * 60 * 1000);
          case 'w':
            return new Date(now.getTime() - value * 7 * 24 * 60 * 60 * 1000);
          case 'mo':
            return new Date(now.getTime() - value * 30 * 24 * 60 * 60 * 1000);
          case 'y':
            return new Date(now.getTime() - value * 365 * 24 * 60 * 60 * 1000);
          default:
            return new Date(0);
        }
      }
      return new Date(timestamp);
    };

    const dateA = parseTimestamp(a.timestamp);
    const dateB = parseTimestamp(b.timestamp);
    
    return dateB.getTime() - dateA.getTime();
  });

  const [displayedBits, setDisplayedBits] = useState(allBits.slice(0, BITS_PER_PAGE));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && hasMore && !isLoading) {
          loadMoreBits();
        }
      },
      { 
        rootMargin: '100px',
        threshold: 0.1 
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [displayedBits.length, hasMore, isLoading]);

  const loadMoreBits = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const startIndex = displayedBits.length;
      const endIndex = startIndex + BITS_PER_PAGE;
      const nextBits = allBits.slice(startIndex, endIndex);
      
      if (nextBits.length > 0) {
        setDisplayedBits(prev => [...prev, ...nextBits]);
        setHasMore(endIndex < allBits.length);
      } else {
        setHasMore(false);
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const handleSubmit = () => {
    if (!content.trim()) return;
    // Handle bit creation
    setContent("");
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const adjustTextareaHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
    setContent(textarea.value);
  };

  return (
    <div className="pb-16 md:pb-0">
      <div className="sticky top-0 z-10 glass-effect border-b border-border">
        <div className="max-w-[800px] mx-auto px-4">
          <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full h-14 bg-transparent">
              <TabsTrigger value="foryou" className="flex-1 text-lg data-[state=active]:gradient-text">
                For You
              </TabsTrigger>
              <TabsTrigger value="following" className="flex-1 text-lg data-[state=active]:gradient-text">
                Following
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto">
        {/* Composer */}
        <div className="p-4 border-b border-border">
          <div className="flex gap-3">
            <Avatar className="w-10 h-10 ring-2 ring-primary/20">
              <img src={currentUser.avatar} alt={currentUser.name} />
            </Avatar>
            <div className="flex-1 min-w-0">
              <Textarea
                ref={textareaRef}
                placeholder="What's happening?"
                value={content}
                onChange={adjustTextareaHeight}
                onKeyDown={handleKeyPress}
                className="max-h-[300px] bg-transparent border-none resize-none p-3 focus-visible:ring-0 text-xl placeholder:text-xl"
              />
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center -ml-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-primary hover:text-primary/80 rounded-full w-8 h-8"
                  >
                    <Image className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-primary hover:text-primary/80 rounded-full w-8 h-8"
                  >
                    <Smile className="w-4 h-4" />
                  </Button>
                </div>
                <Button
                  size="sm"
                  onClick={handleSubmit}
                  disabled={!content.trim()}
                  className="bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90 transition-opacity rounded-full px-4"
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bits Feed */}
        <AnimatePresence mode="popLayout">
          {displayedBits.map((bit) => (
            <motion.div
              key={bit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="border-b border-border"
            >
              {"type" in bit && bit.type === "automated" ? (
                <AutomatedBit bit={bit as AutomatedBitType} />
              ) : (
                <div className="group relative">
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
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        <div ref={loaderRef} className="py-4 flex justify-center">
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center space-x-2 text-muted-foreground"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Loading more bits...</span>
            </motion.div>
          )}
          {!hasMore && displayedBits.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-muted-foreground text-sm"
            >
              You've reached the end
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}