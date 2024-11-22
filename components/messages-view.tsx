"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BadgeCheck, Search, Edit, Image, Smile, Send, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { formatTimeAgo } from "@/lib/utils";
import { conversations } from "@/lib/messages-data";
import { cn } from "@/lib/utils";

export function MessagesView() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [messageText, setMessageText] = useState("");

  const currentChat = conversations.find(chat => chat.id === selectedChat);

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
    (<div className="h-[calc(100vh-4rem)] md:h-screen">
      <AnimatePresence mode="wait">
        {!selectedChat ? (
          // Conversations List
          (<motion.div
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-full flex flex-col"
          >
            <div className="sticky top-0 z-10 glass-effect border-b border-border">
              <div className="p-4">
                <h1 className="text-2xl font-semibold mb-4">Messages</h1>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search messages"
                    className="pl-10 bg-transparent"
                  />
                </div>
              </div>
            </div>
            <ScrollArea className="flex-1">
              <div className="divide-y divide-border">
                {conversations.map((chat) => (
                  <motion.button
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className="w-full p-4 flex items-start space-x-4 hover:bg-accent/5 transition-colors text-left"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative">
                      {chat.isGroup ? (
                        <div className="relative w-12 h-12">
                          <Avatar className="absolute top-0 left-0 w-9 h-9 ring-2 ring-background">
                            <img src={chat.participants[0].avatar} alt={chat.participants[0].name} />
                          </Avatar>
                          <Avatar className="absolute bottom-0 right-0 w-9 h-9 ring-2 ring-background">
                            <img src={chat.participants[1].avatar} alt={chat.participants[1].name} />
                          </Avatar>
                        </div>
                      ) : (
                        <Avatar className="w-12 h-12 ring-2 ring-primary/20">
                          <img src={chat.participants[0].avatar} alt={chat.participants[0].name} />
                        </Avatar>
                      )}
                      {chat.unread > 0 && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <span className="font-semibold">
                            {chat.isGroup ? chat.name : chat.participants[0].name}
                          </span>
                          {!chat.isGroup && chat.participants[0].verified && (
                            <BadgeCheck className="w-4 h-4 text-blue-500" />
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {formatTimeAgo(chat.lastMessage.timestamp)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {chat.lastMessage.content}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t border-border">
              <Button
                className="w-full bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90 transition-opacity"
              >
                <Edit className="w-4 h-4 mr-2" />
                New Message
              </Button>
            </div>
          </motion.div>)
        ) : currentChat ? (
          // Chat View
          (<motion.div
            key="chat"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="h-full flex flex-col"
          >
            <div className="sticky top-0 z-10 glass-effect border-b border-border">
              <div className="p-4 flex items-center space-x-4">
                <button
                  onClick={() => setSelectedChat(null)}
                  className="p-2 -ml-2 hover:bg-accent/50 rounded-full transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-3">
                  {currentChat.isGroup ? (
                    <div className="relative w-10 h-10">
                      <Avatar className="absolute top-0 left-0 w-8 h-8 ring-2 ring-background">
                        <img src={currentChat.participants[0].avatar} alt={currentChat.participants[0].name} />
                      </Avatar>
                      <Avatar className="absolute bottom-0 right-0 w-8 h-8 ring-2 ring-background">
                        <img src={currentChat.participants[1].avatar} alt={currentChat.participants[1].name} />
                      </Avatar>
                    </div>
                  ) : (
                    <Avatar className="w-10 h-10">
                      <img src={currentChat.participants[0].avatar} alt={currentChat.participants[0].name} />
                    </Avatar>
                  )}
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold">
                        {currentChat.isGroup ? currentChat.name : currentChat.participants[0].name}
                      </span>
                      {!currentChat.isGroup && currentChat.participants[0].verified && (
                        <BadgeCheck className="w-4 h-4 text-blue-500" />
                      )}
                    </div>
                    {currentChat.isGroup && (
                      <p className="text-sm text-muted-foreground">
                        {currentChat.participants.length} members
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {currentChat.messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className={cn(
                      "flex",
                      message.sender === "me" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div className={cn(
                      "max-w-[70%] flex items-end space-x-2",
                      message.sender === "me" && "flex-row-reverse space-x-reverse"
                    )}>
                      {message.sender !== "me" && (
                        <Avatar className="w-8 h-8">
                          <img src={currentChat.participants[0].avatar} alt={currentChat.participants[0].name} />
                        </Avatar>
                      )}
                      <div>
                        <div className={cn(
                          "rounded-2xl px-4 py-2",
                          message.sender === "me"
                            ? "bg-gradient-to-r from-[#ff3b30] to-[#ff9500] text-white"
                            : "bg-accent"
                        )}>
                          <p className="text-[15px]">{message.content}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatTimeAgo(message.timestamp)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t border-border">
              <div className="flex items-end space-x-2">
                <div className="flex-1 bg-accent rounded-xl p-2">
                  <Input
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type a message"
                    className="bg-transparent border-0 focus-visible:ring-0 px-2"
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
                  className={cn(
                    "rounded-full w-10 h-10",
                    messageText.trim()
                      ? "bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90"
                      : "bg-muted text-muted-foreground"
                  )}
                  disabled={!messageText.trim()}
                  onClick={handleSendMessage}
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>)
        ) : null}
      </AnimatePresence>
    </div>)
  );
}