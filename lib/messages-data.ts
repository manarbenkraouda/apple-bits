interface Message {
  id: number;
  content: string;
  timestamp: string;
  sender: "me" | "them";
}

interface Participant {
  name: string;
  avatar: string;
  verified?: boolean;
}

interface Conversation {
  id: number;
  participants: Participant[];
  messages: Message[];
  lastMessage: Message;
  unread: number;
  isGroup?: boolean;
  name?: string;
}

export const conversations: Conversation[] = [
  {
    id: 1,
    participants: [
      {
        name: "Alex Rivera",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        verified: true
      }
    ],
    messages: [
      {
        id: 1,
        content: "Hey! How's the new AI model coming along?",
        timestamp: "2024-03-19T10:30:00Z",
        sender: "them"
      },
      {
        id: 2,
        content: "Making great progress! Just fixed a major bug in the training pipeline.",
        timestamp: "2024-03-19T10:32:00Z",
        sender: "me"
      },
      {
        id: 3,
        content: "That's awesome! Would love to see a demo when you're ready.",
        timestamp: "2024-03-19T10:33:00Z",
        sender: "them"
      }
    ],
    lastMessage: {
      id: 3,
      content: "That's awesome! Would love to see a demo when you're ready.",
      timestamp: "2024-03-19T10:33:00Z",
      sender: "them"
    },
    unread: 1
  },
  {
    id: 2,
    isGroup: true,
    name: "AI Research Team",
    participants: [
      {
        name: "Emily Thompson",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        verified: true
      },
      {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
      }
    ],
    messages: [
      {
        id: 1,
        content: "Team, let's sync up on the latest research findings.",
        timestamp: "2024-03-19T09:15:00Z",
        sender: "them"
      },
      {
        id: 2,
        content: "I've prepared a summary of our experiments.",
        timestamp: "2024-03-19T09:20:00Z",
        sender: "me"
      }
    ],
    lastMessage: {
      id: 2,
      content: "I've prepared a summary of our experiments.",
      timestamp: "2024-03-19T09:20:00Z",
      sender: "me"
    },
    unread: 0
  },
  {
    id: 3,
    participants: [
      {
        name: "Maria Garcia",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
        verified: true
      }
    ],
    messages: [
      {
        id: 1,
        content: "Did you see the latest paper on transformer architectures?",
        timestamp: "2024-03-19T08:45:00Z",
        sender: "them"
      }
    ],
    lastMessage: {
      id: 1,
      content: "Did you see the latest paper on transformer architectures?",
      timestamp: "2024-03-19T08:45:00Z",
      sender: "them"
    },
    unread: 2
  },
  {
    id: 4,
    isGroup: true,
    name: "Conference Planning",
    participants: [
      {
        name: "James Wilson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        verified: true
      },
      {
        name: "Nina Patel",
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop"
      }
    ],
    messages: [
      {
        id: 1,
        content: "Let's finalize the presentation schedule.",
        timestamp: "2024-03-19T07:20:00Z",
        sender: "them"
      }
    ],
    lastMessage: {
      id: 1,
      content: "Let's finalize the presentation schedule.",
      timestamp: "2024-03-19T07:20:00Z",
      sender: "them"
    },
    unread: 0
  }
];