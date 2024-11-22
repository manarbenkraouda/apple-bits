"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Image, Smile, Globe2, Lock, Users, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { currentUser } from "@/lib/profile-data";

interface BitComposerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BitComposer({ open, onOpenChange }: BitComposerProps) {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibility, setVisibility] = useState<"public" | "followers" | "private">("public");

  const handleSubmit = () => {
    if (!content.trim()) return;
    // Handle bit creation
    setContent("");
    setSelectedImage(null);
    onOpenChange(false);
  };

  const getVisibilityIcon = () => {
    switch (visibility) {
      case "public":
        return <Globe2 className="w-4 h-4" />;
      case "followers":
        return <Users className="w-4 h-4" />;
      case "private":
        return <Lock className="w-4 h-4" />;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0">
        <div className="flex items-center justify-between p-3 border-b border-border">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-8 h-8"
            onClick={() => onOpenChange(false)}
          >
            <X className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90 transition-opacity rounded-full px-4"
            disabled={!content.trim()}
            onClick={handleSubmit}
          >
            Post
          </Button>
        </div>

        <div className="p-4">
          <div className="flex gap-3">
            <Avatar className="w-10 h-10 ring-2 ring-primary/20">
              <img src={currentUser.avatar} alt={currentUser.name} />
            </Avatar>
            <div className="flex-1 min-w-0">
              <Textarea
                placeholder="What's happening?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[120px] bg-transparent border-none resize-none p-3 focus-visible:ring-0 text-lg"
              />

              <AnimatePresence>
                {selectedImage && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-3 relative"
                  >
                    <div className="rounded-xl overflow-hidden border border-border">
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-full h-auto"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-full w-8 h-8"
                      onClick={() => setSelectedImage(null)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
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
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary/80 rounded-full h-8 px-3"
                  onClick={() => {
                    setVisibility(
                      visibility === "public"
                        ? "followers"
                        : visibility === "followers"
                        ? "private"
                        : "public"
                    );
                  }}
                >
                  {getVisibilityIcon()}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}