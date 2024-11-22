import type { StaticImageData } from "next/image";

export interface Author {
  name: string;
  handle: string;
  avatar: string;
  verified?: boolean;
  curator?: {
    topics: string[];
    followers: number;
    description: string;
  };
}

export interface Bit {
  id: number;
  author: Author;
  content: string;
  likes: number;
  replies: number;
  reposts: number;
  timestamp: string;
  image?: string;
  replyToBitId?: number;
  quotedBitId?: number;
  topics?: string[];
  curatedBy?: Author;
  labId?: string;
  type: 'automated' | 'normal';
}

export interface AutomatedBit extends Bit {
  type: 'automated';
  trigger: 'achievement' | 'milestone' | 'daily_summary' | 'event';
  metadata: {
    achievement?: {
      title: string;
      description: string;
      icon: string;
    };
    milestone?: {
      title: string;
      progress: number;
      total: number;
    };
    summary?: {
      period: 'daily' | 'weekly' | 'monthly';
      highlights: string[];
      metrics?: {
        label: string;
        value: string;
        change?: number;
      }[];
    };
    event?: {
      title: string;
      type: string;
      date: string;
    };
  };
}

export interface Lab {
  id: string;
  name: string;
  description: string;
  category: string;
  creator: Author;
  members: Author[];
  pinnedBits: Bit[];
  drafts: Draft[];
  polls: Poll[];
  objectives: Objective[];
  color: string;
  icon: string;
  visibility: "open" | "gated" | "private" | "invite-only";
  memberCount: number;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
  requirements?: string;
  status: "active" | "completed" | "archived";
  dueDate?: string;
  challenge?: Challenge;
  sponsorship?: Sponsorship;
}

export interface Draft {
  id: string;
  content: string;
  author: Author;
  collaborators: Author[];
  lastEditedAt: string;
  status: "draft" | "review" | "approved";
}

export interface Poll {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    votes: number;
  }[];
  author: Author;
  expiresAt: string;
  createdAt: string;
  totalVotes: number;
}

export interface Objective {
  id: string;
  title: string;
  description: string;
  status: "not_started" | "in_progress" | "completed";
  dueDate: string;
  assignees: Author[];
  tasks: Task[];
  progress: number;
  createdAt: string;
  updatedAt: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "not_started" | "in_progress" | "completed";
  assignee?: Author;
  dueDate?: string;
  comments: Comment[];
  attachments: Attachment[];
}

export interface Comment {
  id: string;
  content: string;
  author: Author;
  createdAt: string;
  updatedAt?: string;
}

export interface Attachment {
  id: string;
  name: string;
  type: string;
  url: string;
  size: number;
  uploadedBy: Author;
  uploadedAt: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  issuer: {
    name: string;
    logo: string;
    verified: boolean;
  };
  reward: {
    type: "monetary" | "mentorship" | "resources" | "recognition";
    value?: string;
    description: string;
  };
  requirements: string[];
  deadline: string;
  participants: number;
  status: "active" | "completed" | "upcoming";
  winners?: {
    lab: Lab;
    position: number;
    testimonial?: string;
  }[];
  resources?: {
    title: string;
    type: "document" | "video" | "link";
    url: string;
  }[];
  mentors?: Author[];
}

export interface Sponsorship {
  id: string;
  sponsor: {
    name: string;
    logo: string;
    verified: boolean;
    description: string;
  };
  tier: "gold" | "silver" | "bronze";
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  duration: {
    start: string;
    end: string;
  };
  amount?: string;
  featured: boolean;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  curator: Author;
  followers: number;
  image: string;
  color: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  color: string;
  creator: Author;
  contributors: Author[];
  trackCount: number;
  targetTrackCount: number;
  votes: {
    up: number;
    down: number;
  };
  tags: string[];
  featured: boolean;
  trending: boolean;
  tracks: Track[];
  pendingTracks: Track[];
  theme?: {
    name: string;
    description: string;
    endDate: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  coverArt: string;
  previewUrl?: string;
  addedBy: Author;
  addedAt: string;
  votes: {
    up: number;
    down: number;
    voters: Author[];
  };
  status: "pending" | "approved" | "rejected";
}