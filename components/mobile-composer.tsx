"use client";

import { useState, useRef, useEffect } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image, Smile, Globe2, Lock, Users, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { currentUser } from "@/lib/profile-data";

interface MobileComposerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileComposer({ open, onClose }: MobileComposerProps) {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibility, setVisibility] = useState<"public" | "followers" | "private">("public");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [open]);

  const handleSubmit = () => {
    if (!content.trim()) return;
    // Handle bit creation
    setContent("");
    setSelectedImage(null);
    onClose();
  };

  const getVisibilityLabel = () => {
    switch (visibility) {
      case "public":
        return "Everyone can reply";
      case "followers":
        return "Followers can reply";
      case "private":
        return "Only mentioned people can reply";
    }
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

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 bg-background z-50 flex flex-col"
    >
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full w-8 h-8"
          onClick={onClose}
        >
          <X className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          className="bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90 transition-opacity rounded-full px-6"
          disabled={!content.trim()}
          onClick={handleSubmit}
        >
          Post
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="flex gap-3">
            <Avatar className="w-10 h-10 ring-2 ring-primary/20">
              <img src={currentUser.avatar} alt={currentUser.name} />
            </Avatar>
            <div className="flex-1 min-w-0">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary/80 rounded-full h-7 px-3 mb-2 -ml-2"
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
                <span className="ml-2 text-sm">{getVisibilityLabel()}</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>

              <Textarea
                ref={textareaRef}
                placeholder="What's happening?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[200px] bg-transparent border-none resize-none p-3 focus-visible:ring-0 text-xl"
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
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-border">
        <div className="flex items-center justify-between">
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

          <div className="text-sm text-muted-foreground">
            {content.length > 0 && (
              <span>{280 - content.length} characters remaining</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}