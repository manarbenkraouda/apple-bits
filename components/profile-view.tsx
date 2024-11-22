"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeCheck, ArrowLeft, Link as LinkIcon, Calendar } from "lucide-react";
import { formatNumber } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { sampleBits } from "@/lib/data";
import { BitCard } from "@/components/bit-card";
import { CuratorBadge } from "@/components/curator-badge";
import type { Author } from "@/lib/types";

interface ProfileViewProps {
  user: Author;
}

export function ProfileView({ user }: ProfileViewProps) {
  const [activeTab, setActiveTab] = useState("bits");
  const userBits = sampleBits.filter(bit => bit.author.handle === user.handle);
  const likedBits = sampleBits.slice(0, 5); // Simulated liked bits
  const mediaBits = userBits.filter(bit => bit.image); // Bits with media

  return (
    <div>
      {/* Header */}
      <div className="sticky top-0 z-10 glass-effect border-b border-border">
        <div className="px-4 py-3 flex items-center">
          <Link 
            href="/"
            className="p-2 -ml-2 rounded-full hover:bg-accent/50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="ml-4">
            <h1 className="font-semibold text-xl">{user.name}</h1>
            <p className="text-sm text-muted-foreground">
              {formatNumber(userBits.length)} bits
            </p>
          </div>
        </div>
      </div>

      {/* Profile Header */}
      <div className="relative">
        <div className="h-32 bg-gradient-to-r from-[#ff3b30] to-[#ff9500] opacity-90" />
        <div className="px-4 pb-4">
          <div className="relative flex justify-between items-start">
            <Avatar className="w-32 h-32 border-4 border-background -mt-16 rounded-full">
              <img src={user.avatar} alt={user.name} className="object-cover" />
            </Avatar>
            <Button
              variant="outline"
              className="mt-4 rounded-full"
            >
              Edit profile
            </Button>
          </div>

          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              {user.verified && <BadgeCheck className="w-6 h-6 text-blue-500" />}
              {user.curator && <CuratorBadge />}
            </div>
            <p className="text-muted-foreground">{user.handle}</p>
          </div>

          {user.curator && (
            <div className="mt-4">
              <p className="text-[15px] leading-normal">{user.curator.description}</p>
            </div>
          )}

          <div className="flex items-center space-x-4 mt-4 text-muted-foreground text-sm">
            <div className="flex items-center space-x-1">
              <LinkIcon className="w-4 h-4" />
              <a href="#" className="text-primary hover:underline">apple.com</a>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>Joined September 2023</span>
            </div>
          </div>

          <div className="flex space-x-4 mt-4 text-sm">
            <Link href="#" className="hover:underline">
              <span className="font-semibold">{formatNumber(1234)}</span>
              <span className="text-muted-foreground ml-1">Following</span>
            </Link>
            <Link href="#" className="hover:underline">
              <span className="font-semibold">{formatNumber(5678)}</span>
              <span className="text-muted-foreground ml-1">Followers</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
          <TabsList className="w-full h-12 bg-transparent p-0">
            <TabsTrigger 
              value="bits" 
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Bits
            </TabsTrigger>
            <TabsTrigger 
              value="replies" 
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Replies
            </TabsTrigger>
            <TabsTrigger 
              value="media" 
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Media
            </TabsTrigger>
            <TabsTrigger 
              value="likes" 
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Likes
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "bits" && (
            <div className="divide-y divide-border">
              {userBits.map((bit) => (
                <BitCard key={bit.id} bit={bit} />
              ))}
            </div>
          )}

          {activeTab === "replies" && (
            <div className="divide-y divide-border">
              {userBits.filter(bit => bit.replyToBitId).map((bit) => (
                <BitCard key={bit.id} bit={bit} />
              ))}
            </div>
          )}

          {activeTab === "media" && (
            <div className="divide-y divide-border">
              {mediaBits.map((bit) => (
                <BitCard key={bit.id} bit={bit} />
              ))}
            </div>
          )}

          {activeTab === "likes" && (
            <div className="divide-y divide-border">
              {likedBits.map((bit) => (
                <BitCard key={bit.id} bit={bit} />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}