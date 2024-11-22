import type { Lab } from "@/lib/types";

export const labs: Lab[] = [
  {
    id: "ai-research",
    name: "AI Research Lab",
    description: "A collaborative lab for discussing and sharing the latest developments in artificial intelligence and machine learning.",
    category: "Research",
    creator: {
      name: "Sarah Chen",
      handle: "@sarahcodes",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      verified: true
    },
    members: [
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
      },
      {
        name: "David Kim",
        handle: "@davidkim",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
      }
    ],
    pinnedBits: [],
    drafts: [
      {
        id: "draft-1",
        content: "Working on a comprehensive overview of transformer architectures...",
        author: {
          name: "Sarah Chen",
          handle: "@sarahcodes",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
          verified: true
        },
        collaborators: [],
        lastEditedAt: "2024-03-19T10:30:00Z",
        status: "draft"
      }
    ],
    polls: [],
    objectives: [
      {
        id: "obj-1",
        title: "Research Phase",
        description: "Complete initial research on transformer architectures",
        status: "completed",
        dueDate: "2024-04-01T00:00:00Z",
        assignees: [],
        tasks: [],
        progress: 100,
        createdAt: "2024-03-01T00:00:00Z",
        updatedAt: "2024-03-19T00:00:00Z"
      },
      {
        id: "obj-2",
        title: "Implementation",
        description: "Implement prototype model",
        status: "in_progress",
        dueDate: "2024-04-15T00:00:00Z",
        assignees: [],
        tasks: [],
        progress: 60,
        createdAt: "2024-03-01T00:00:00Z",
        updatedAt: "2024-03-19T00:00:00Z"
      }
    ],
    color: "#5856D6",
    icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    visibility: "gated",
    memberCount: 8,
    createdAt: "2024-03-01T00:00:00Z",
    updatedAt: "2024-03-19T12:00:00Z",
    status: "active"
  },
  {
    id: "design-collective",
    name: "Design Lab",
    description: "A lab for designers to share work in progress, gather feedback, and collaborate on projects.",
    category: "Design",
    creator: {
      name: "Sophie Laurent",
      handle: "@sophiel",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      verified: true
    },
    members: [
      {
        name: "Sophie Laurent",
        handle: "@sophiel",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        verified: true
      },
      {
        name: "Maria Garcia",
        handle: "@chefmaria",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
        verified: true
      }
    ],
    pinnedBits: [],
    drafts: [],
    polls: [
      {
        id: "poll-1",
        question: "Which color scheme should we use for the new project?",
        options: [
          { id: "1", text: "Monochrome", votes: 5 },
          { id: "2", text: "Vibrant", votes: 3 },
          { id: "3", text: "Pastel", votes: 7 }
        ],
        author: {
          name: "Sophie Laurent",
          handle: "@sophiel",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
          verified: true
        },
        expiresAt: "2024-03-20T00:00:00Z",
        createdAt: "2024-03-19T00:00:00Z",
        totalVotes: 15
      }
    ],
    objectives: [
      {
        id: "obj-1",
        title: "Design System",
        description: "Create a comprehensive design system",
        status: "in_progress",
        dueDate: "2024-04-01T00:00:00Z",
        assignees: [],
        tasks: [],
        progress: 75,
        createdAt: "2024-03-05T00:00:00Z",
        updatedAt: "2024-03-19T00:00:00Z"
      }
    ],
    color: "#FF2D55",
    icon: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
    visibility: "private",
    memberCount: 12,
    createdAt: "2024-03-05T00:00:00Z",
    updatedAt: "2024-03-19T14:30:00Z",
    status: "active"
  },
  {
    id: "startup-founders",
    name: "Startup Lab",
    description: "A private lab for founders to share experiences, ask questions, and support each other.",
    category: "Business",
    creator: {
      name: "Nina Patel",
      handle: "@ninapatels",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
      verified: true
    },
    members: [
      {
        name: "Nina Patel",
        handle: "@ninapatels",
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
        verified: true
      },
      {
        name: "James Wilson",
        handle: "@jwilson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        verified: true
      }
    ],
    pinnedBits: [],
    drafts: [],
    polls: [],
    objectives: [
      {
        id: "obj-1",
        title: "Market Research",
        description: "Complete market analysis",
        status: "completed",
        dueDate: "2024-03-15T00:00:00Z",
        assignees: [],
        tasks: [],
        progress: 100,
        createdAt: "2024-02-15T00:00:00Z",
        updatedAt: "2024-03-15T00:00:00Z"
      },
      {
        id: "obj-2",
        title: "MVP Development",
        description: "Build and launch MVP",
        status: "in_progress",
        dueDate: "2024-04-15T00:00:00Z",
        assignees: [],
        tasks: [],
        progress: 40,
        createdAt: "2024-02-15T00:00:00Z",
        updatedAt: "2024-03-19T00:00:00Z"
      }
    ],
    color: "#FF9500",
    icon: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800",
    visibility: "private",
    memberCount: 25,
    createdAt: "2024-02-15T00:00:00Z",
    updatedAt: "2024-03-19T16:45:00Z",
    status: "active"
  }
];