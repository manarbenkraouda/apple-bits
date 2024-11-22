interface Notification {
  id: number;
  type: "like" | "repost" | "mention" | "follow";
  user: {
    name: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  preview?: string;
  timestamp: string;
  link: string;
}

export const notifications: Notification[] = [
  {
    id: 1,
    type: "like",
    user: {
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      verified: true
    },
    content: "liked your bit",
    preview: "Just deployed my first machine learning model to production! The endless debugging was worth it 🎉",
    timestamp: "2024-03-19T10:30:00Z",
    link: "/bit/1"
  },
  {
    id: 2,
    type: "repost",
    user: {
      name: "Emily Thompson",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      verified: true
    },
    content: "reposted your bit",
    preview: "The sunset in Barcelona tonight is absolutely unreal. Sometimes you just have to stop and appreciate these moments. ✨",
    timestamp: "2024-03-19T09:15:00Z",
    link: "/bit/2"
  },
  {
    id: 3,
    type: "mention",
    user: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    content: "mentioned you in a bit",
    preview: "Hey @sarahcodes, what do you think about the new developments in quantum computing?",
    timestamp: "2024-03-19T08:45:00Z",
    link: "/bit/3"
  },
  {
    id: 4,
    type: "follow",
    user: {
      name: "Maria Garcia",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      verified: true
    },
    content: "followed you",
    timestamp: "2024-03-19T07:20:00Z",
    link: "/profile/mariag"
  },
  {
    id: 5,
    type: "mention",
    user: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      verified: true
    },
    content: "mentioned you in a bit",
    preview: "Excited to collaborate with @sarahcodes on our upcoming AI project!",
    timestamp: "2024-03-19T06:10:00Z",
    link: "/bit/4"
  },
  {
    id: 6,
    type: "like",
    user: {
      name: "Nina Patel",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop"
    },
    content: "liked your bit",
    preview: "Just finished implementing the new neural network architecture. Results are promising! 📊",
    timestamp: "2024-03-19T05:30:00Z",
    link: "/bit/5"
  },
  {
    id: 7,
    type: "repost",
    user: {
      name: "Tom Anderson",
      avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&h=400&fit=crop",
      verified: true
    },
    content: "reposted your bit",
    preview: "Check out our latest research paper on reinforcement learning!",
    timestamp: "2024-03-19T04:15:00Z",
    link: "/bit/6"
  },
  {
    id: 8,
    type: "follow",
    user: {
      name: "Sophie Laurent",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
    },
    content: "followed you",
    timestamp: "2024-03-19T03:45:00Z",
    link: "/profile/sophiel"
  },
  {
    id: 9,
    type: "like",
    user: {
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      verified: true
    },
    content: "liked your bit",
    preview: "Sharing my thoughts on the future of AI and ethics in tech...",
    timestamp: "2024-03-19T02:30:00Z",
    link: "/bit/7"
  },
  {
    id: 10,
    type: "mention",
    user: {
      name: "Liam Brown",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
    },
    content: "mentioned you in a bit",
    preview: "Great discussion with @sarahcodes about the latest developments in machine learning!",
    timestamp: "2024-03-19T01:15:00Z",
    link: "/bit/8"
  }
];