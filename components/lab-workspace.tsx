"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { BitCard } from "@/components/bit-card";
import { AutomatedBit } from "@/components/automated-bit";
import { formatTimeAgo } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Image, Smile, Send, Users, FileText, MessageSquare } from "lucide-react";
import type { Lab, AutomatedBit as AutomatedBitType } from "@/lib/types";
import { sampleBits } from "@/lib/data";
import { sampleAutomatedBits } from "@/lib/automated-bits-data";

interface LabWorkspaceProps {
  lab: Lab;
}

export function LabWorkspace({ lab }: LabWorkspaceProps) {
  const [messageText, setMessageText] = useState("");
  const [showChat, setShowChat] = useState(false);

  // Filter bits and automated bits for this lab
  const labBits = sampleBits.filter(bit => bit.labId === lab.id);
  const labAutomatedBits = sampleAutomatedBits.filter(bit => bit.labId === lab.id);

  // Combine and sort all bits by timestamp
  const allBits = [...labBits, ...labAutomatedBits].sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    // In a real app, this would send the message to the server
    setMessageText("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-full flex flex-col">
      <ScrollArea className="flex-1">
        <AnimatePresence mode="wait">
          {showChat ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold">Lab Chat</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowChat(false)}
                >
                  View Lab Feed
                </Button>
              </div>

              <div className="space-y-4">
                {/* Example chat messages */}
                <div className="flex items-end space-x-2">
                  <Avatar className="w-8 h-8">
                    <img src={lab.members[0].avatar} alt={lab.members[0].name} />
                  </Avatar>
                  <div className="max-w-[80%]">
                    <div className="bg-accent rounded-2xl px-4 py-2">
                      <p className="text-[15px]">Hey team! How's everyone doing with the latest objectives?</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">2h ago</p>
                  </div>
                </div>

                <div className="flex items-end justify-end space-x-2">
                  <div className="max-w-[80%]">
                    <div className="bg-gradient-to-r from-[#ff3b30] to-[#ff9500] text-white rounded-2xl px-4 py-2">
                      <p className="text-[15px]">Making good progress! Just finished the research phase.</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-right">1h ago</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-6 space-y-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Lab Feed</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowChat(true)}
                  className="space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open Chat</span>
                </Button>
              </div>

              {/* Pinned Content */}
              {lab.pinnedBits.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-4">📌 Pinned</h3>
                  <div className="space-y-4">
                    {lab.pinnedBits.map((bit) => (
                      <BitCard key={bit.id} bit={bit} />
                    ))}
                  </div>
                </div>
              )}

              {/* Drafts */}
              {lab.drafts.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-4">📝 Shared Drafts</h3>
                  <div className="space-y-4">
                    {lab.drafts.map((draft) => (
                      <motion.div
                        key={draft.id}
                        className="p-4 rounded-xl border border-border hover:border-primary/20 transition-colors"
                      >
                        <div className="flex items-start space-x-3">
                          <Avatar className="w-10 h-10">
                            <img src={draft.author.avatar} alt={draft.author.name} />
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{draft.author.name}</span>
                              <Badge variant="secondary" className="text-xs">
                                {draft.status}
                              </Badge>
                            </div>
                            <p className="mt-2 text-muted-foreground">
                              {draft.content}
                            </p>
                            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                  <Users className="w-4 h-4" />
                                  <span>{draft.collaborators.length} collaborators</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <FileText className="w-4 h-4" />
                                  <span>Draft</span>
                                </div>
                              </div>
                              <span>Last edited {formatTimeAgo(draft.lastEditedAt)}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Lab Feed */}
              <div>
                <h3 className="font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {allBits.map((bit) => (
                    bit.type === "automated" ? (
                      <AutomatedBit key={bit.id} bit={bit as AutomatedBitType} />
                    ) : (
                      <BitCard key={bit.id} bit={bit} />
                    )
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </ScrollArea>

      {/* Message Input */}
      <div className="p-4 border-t border-border">
        <div className="flex items-end space-x-2">
          <div className="flex-1 bg-accent rounded-xl p-2">
            <Textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={showChat ? "Type a message..." : "Share your thoughts with the lab..."}
              className="bg-transparent border-0 focus-visible:ring-0 p-3 min-h-[80px]"
            />
            <div className="flex items-center justify-between mt-2 px-2">
              <div className="flex items-center space-x-2">
                <button className="text-primary hover:text-primary/80 transition-colors">
                  <Image className="w-5 h-5" />
                </button>
                <button className="text-primary hover:text-primary/80 transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <Button
            size="icon"
            className={`rounded-full w-10 h-10 ${
              messageText.trim()
                ? "bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90"
                : "bg-muted text-muted-foreground"
            }`}
            disabled={!messageText.trim()}
            onClick={handleSendMessage}
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}