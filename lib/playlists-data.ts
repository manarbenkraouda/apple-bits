import type { Playlist } from "@/lib/types";

export const playlists: Playlist[] = [
  {
    id: "focus-flow",
    name: "Focus Flow",
    description: "A collaborative playlist for deep work and concentration. Perfect for coding sessions, writing, or any task that requires intense focus.",
    coverImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
    color: "#5856D6",
    creator: {
      name: "Sarah Chen",
      handle: "@sarahcodes",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      verified: true
    },
    contributors: [
      {
        name: "Sarah Chen",
        handle: "@sarahcodes",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        verified: true
      },
      {
        name: "Alex Rivera",
        handle: "@arivera",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        verified: true
      },
      {
        name: "Emily Thompson",
        handle: "@emilywrites",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        verified: true
      }
    ],
    trackCount: 42,
    targetTrackCount: 50,
    votes: {
      up: 1234,
      down: 56
    },
    tags: ["Focus", "Productivity", "Ambient"],
    featured: true,
    trending: true,
    tracks: [],
    pendingTracks: [],
    theme: {
      name: "Deep Focus",
      description: "Music for maximum productivity",
      endDate: "2024-03-31T00:00:00Z"
    },
    createdAt: "2024-03-01T00:00:00Z",
    updatedAt: "2024-03-19T12:00:00Z"
  },
  {
    id: "weekend-vibes",
    name: "Weekend Vibes",
    description: "The perfect soundtrack for your weekend. From chill morning tunes to upbeat evening tracks, this community-curated playlist has it all.",
    coverImage: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800",
    color: "#FF9500",
    creator: {
      name: "Alex Rivera",
      handle: "@arivera",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      verified: true
    },
    contributors: [
      {
        name: "Alex Rivera",
        handle: "@arivera",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        verified: true
      },
      {
        name: "Maria Garcia",
        handle: "@chefmaria",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
        verified: true
      }
    ],
    trackCount: 35,
    targetTrackCount: 40,
    votes: {
      up: 892,
      down: 34
    },
    tags: ["Weekend", "Chill", "Upbeat"],
    featured: false,
    trending: true,
    tracks: [],
    pendingTracks: [],
    createdAt: "2024-03-05T00:00:00Z",
    updatedAt: "2024-03-19T14:30:00Z"
  },
  {
    id: "coding-beats",
    name: "Coding Beats",
    description: "Electronic and ambient tracks perfect for coding sessions. No lyrics, just pure focus-enhancing beats selected by developers.",
    coverImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    color: "#30B0C7",
    creator: {
      name: "David Kim",
      handle: "@davidkim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      verified: true
    },
    contributors: [
      {
        name: "David Kim",
        handle: "@davidkim",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        verified: true
      },
      {
        name: "Sarah Chen",
        handle: "@sarahcodes",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        verified: true
      }
    ],
    trackCount: 28,
    targetTrackCount: 30,
    votes: {
      up: 567,
      down: 23
    },
    tags: ["Coding", "Electronic", "Focus"],
    featured: true,
    trending: false,
    tracks: [],
    pendingTracks: [],
    createdAt: "2024-03-10T00:00:00Z",
    updatedAt: "2024-03-19T16:45:00Z"
  }
];