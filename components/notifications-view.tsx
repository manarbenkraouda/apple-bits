"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Repeat2, AtSign, BadgeCheck, UserPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { formatTimeAgo } from "@/lib/utils";
import { notifications } from "@/lib/notifications-data";

export function NotificationsView() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === "mentions") return notification.type === "mention";
    if (activeTab === "verified") return notification.user.verified;
    return true;
  });

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="w-4 h-4 text-red-500" />;
      case "repost":
        return <Repeat2 className="w-4 h-4 text-green-500" />;
      case "mention":
        return <AtSign className="w-4 h-4 text-blue-500" />;
      case "follow":
        return <UserPlus className="w-4 h-4 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="sticky top-0 z-10 glass-effect border-b border-border">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-semibold">Notifications</h1>
        </div>
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full h-12 bg-transparent p-0">
            <TabsTrigger
              value="all"
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="mentions"
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Mentions
            </TabsTrigger>
            <TabsTrigger
              value="verified"
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Verified
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="divide-y divide-border"
        >
          {filteredNotifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff3b30] to-[#ff9500] opacity-0 group-hover:opacity-100 transition-opacity" />
              <Link
                href={notification.link}
                className="block px-6 py-3 hover:bg-accent/5 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <Avatar className="w-10 h-10 ring-2 ring-primary/20">
                    <img
                      src={notification.user.avatar}
                      alt={notification.user.name}
                      className="object-cover"
                    />
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-1 flex-wrap">
                      <span className="font-medium">{notification.user.name}</span>
                      {notification.user.verified && (
                        <BadgeCheck className="w-4 h-4 text-blue-500" />
                      )}
                      <span className="text-muted-foreground text-sm">
                        {formatTimeAgo(notification.timestamp)}
                      </span>
                    </div>
                    <p className="mt-1 text-[15px] leading-normal">
                      {notification.content}
                    </p>
                    {notification.preview && (
                      <p className="mt-2 text-muted-foreground text-sm">
                        {notification.preview}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}