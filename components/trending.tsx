"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const trendingTopics = [
  {
    category: "Technology",
    topic: "#AppleVision",
    posts: "255K",
  },
  {
    category: "Business",
    topic: "#WWDC24",
    posts: "155K",
  },
  {
    category: "Technology",
    topic: "iOS 18",
    posts: "98K",
  },
];

export function Trending() {
  return (
    <div className="hidden lg:block w-[350px] xl:w-[400px] p-4 sticky top-0 h-screen">
      <div className="glass-effect rounded-2xl p-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search"
            className="pl-10 bg-transparent border-none text-lg"
          />
        </div>
      </div>

      <div className="glass-effect rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-6 gradient-text">Trending</h2>
        <div className="space-y-8">
          {trendingTopics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="space-y-2 hover-scale cursor-pointer"
            >
              <p className="text-sm text-muted-foreground font-medium">{item.category}</p>
              <p className="text-lg font-semibold">{item.topic}</p>
              <p className="text-sm text-muted-foreground">{item.posts} posts</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}