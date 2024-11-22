import type { Author } from "@/lib/types";

export const currentUser: Author = {
  name: "Sarah Chen",
  handle: "@sarahcodes",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  verified: true,
  curator: {
    topics: ["tech", "ai", "innovation"],
    followers: 125000,
    description: "AI researcher & tech enthusiast | Building the future of machine learning | Previously @OpenAI, @DeepMind"
  }
};