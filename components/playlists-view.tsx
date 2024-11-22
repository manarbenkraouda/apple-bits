"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaylistCard } from "@/components/playlist-card";
import { CreatePlaylistDialog } from "@/components/create-playlist-dialog";
import { Plus, Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { playlists } from "@/lib/playlists-data";

export function PlaylistsView() {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("featured");

  const filteredPlaylists = playlists.filter(playlist => {
    if (activeTab === "featured") return playlist.featured;
    if (activeTab === "trending") return playlist.trending;
    return true;
  });

  return (
    <div>
      <div className="sticky top-0 z-10 glass-effect border-b border-border">
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Community Playlists</h1>
            <p className="text-muted-foreground mt-1">
              Discover and collaborate on curated music collections
            </p>
          </div>
          <Button
            onClick={() => setShowCreateDialog(true)}
            className="bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Playlist
          </Button>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full h-12 bg-transparent p-0">
            <TabsTrigger
              value="featured"
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Featured
            </TabsTrigger>
            <TabsTrigger
              value="trending"
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Trending
            </TabsTrigger>
            <TabsTrigger
              value="all"
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              All Playlists
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="max-w-[800px] mx-auto p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-6"
          >
            {filteredPlaylists.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/50 flex items-center justify-center mx-auto mb-4">
                  <Music2 className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No playlists found</h3>
                <p className="text-muted-foreground">
                  Be the first to create a playlist in this category!
                </p>
              </div>
            ) : (
              filteredPlaylists.map((playlist, index) => (
                <motion.div
                  key={playlist.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PlaylistCard playlist={playlist} />
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <CreatePlaylistDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
      />
    </div>
  );
}