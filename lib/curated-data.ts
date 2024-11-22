import type { Topic } from "@/lib/types";

export const sampleTopics: Topic[] = [
  {
    id: "tech-innovation",
    name: "Tech Innovation",
    description: "Latest breakthroughs in technology, AI, and future innovations",
    curator: {
      name: "Sarah Chen",
      handle: "@sarahcodes",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      verified: true,
      curator: {
        topics: ["tech", "ai", "innovation"],
        followers: 125000,
        description: "AI researcher & tech enthusiast"
      }
    },
    followers: 245000,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    color: "#5856D6"
  },
  {
    id: "sustainable-future",
    name: "Sustainable Future",
    description: "Exploring solutions for a more sustainable and eco-friendly world",
    curator: {
      name: "Marcus Johnson",
      handle: "@marcusj",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      verified: true,
      curator: {
        topics: ["sustainability", "climate", "future"],
        followers: 98000,
        description: "Climate scientist & sustainability advocate"
      }
    },
    followers: 189000,
    image: "https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=800",
    color: "#34C759"
  },
  {
    id: "creative-arts",
    name: "Creative Arts",
    description: "Celebrating visual arts, photography, and digital creativity",
    curator: {
      name: "Sophie Laurent",
      handle: "@sophiel",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      verified: true,
      curator: {
        topics: ["art", "photography", "design"],
        followers: 156000,
        description: "Visual artist & photographer"
      }
    },
    followers: 312000,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
    color: "#FF2D55"
  },
  {
    id: "future-health",
    name: "Future of Health",
    description: "Medical breakthroughs and wellness innovations",
    curator: {
      name: "Dr. Emily Thompson",
      handle: "@emilywrites",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      verified: true,
      curator: {
        topics: ["health", "medicine", "wellness"],
        followers: 178000,
        description: "Medical researcher & health advocate"
      }
    },
    followers: 276000,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
    color: "#30B0C7"
  },
  {
    id: "startup-insights",
    name: "Startup Insights",
    description: "Expert analysis and insights from the startup ecosystem",
    curator: {
      name: "Nina Patel",
      handle: "@ninapatels",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
      verified: true,
      curator: {
        topics: ["startups", "business", "entrepreneurship"],
        followers: 143000,
        description: "Serial entrepreneur & startup advisor"
      }
    },
    followers: 198000,
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800",
    color: "#FF9500"
  }
];