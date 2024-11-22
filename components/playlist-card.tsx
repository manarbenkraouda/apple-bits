"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { formatNumber } from "@/lib/utils";
import { Music2, ThumbsUp, ThumbsDown, Share2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Playlist } from "@/lib/types";

interface PlaylistCardProps {
  playlist: Playlist;
}

export function PlaylistCard({ playlist }: PlaylistCardProps) {
  return (
    <Link href={`/playlists/${playlist.id}`}>
      <motion.div
        whileHover={{ y: -2 }}
        className="group relative rounded-2xl border border-border overflow-hidden hover:border-primary/20 transition-colors"
      >
        <div 
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
          style={{ 
            backgroundColor: playlist.color,
            backgroundImage: `url(${playlist.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)'
          }}
        />
        
        <div className="relative p-6">
          <div className="flex items-start space-x-4">
            <div className="w-24 h-24 rounded-xl overflow-hidden border border-border shrink-0">
              <img
                src={playlist.coverImage}
                alt={playlist.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-semibold">{playlist.name}</h3>
                {playlist.featured && (
                  <Badge
                    className="bg-gradient-to-r from-[#ff3b30] to-[#ff9500] text-white border-none"
                  >
                    Featured
                  </Badge>
                )}
              </div>
              <p className="mt-2 text-muted-foreground line-clamp-2">
                {playlist.description}
              </p>

              <div className="mt-4 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {playlist.contributors.slice(0, 3).map((contributor) => (
                    <Avatar key={contributor.handle} className="w-8 h-8 ring-2 ring-background">
                      <img src={contributor.avatar} alt={contributor.name} />
                    </Avatar>
                  ))}
                  {playlist.contributors.length > 3 && (
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center ring-2 ring-background">
                      <span className="text-xs">+{playlist.contributors.length - 3}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Music2 className="w-4 h-4" />
                    <span>{playlist.trackCount} tracks</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{formatNumber(playlist.votes.up)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ThumbsDown className="w-4 h-4" />
                    <span>{formatNumber(playlist.votes.down)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Completion</span>
                  <span className="text-sm text-muted-foreground">
                    {playlist.trackCount}/{playlist.targetTrackCount} tracks
                  </span>
                </div>
                <Progress 
                  value={(playlist.trackCount / playlist.targetTrackCount) * 100} 
                  className="h-1.5" 
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {playlist.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-accent/50"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <Share2 className="w-4 h-4" />
              </Button>
              <Button
                className="opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[#ff3b30] to-[#ff9500] text-white hover:opacity-90"
              >
                View Playlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}