import type { AutomatedBit } from "@/lib/types";

export const extraAutomatedBits: AutomatedBit[] = [
  {
    id: 105,
    type: "automated",
    trigger: "achievement",
    author: {
      name: "Design Lab",
      handle: "@design_lab",
      avatar: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop",
      verified: true
    },
    content: "🏆 Achievement Unlocked: Design Excellence! Our team's innovative UI system has been recognized for its exceptional user experience and accessibility features.",
    likes: 342,
    replies: 56,
    reposts: 89,
    timestamp: "3h",
    labId: "design-collective",
    metadata: {
      achievement: {
        title: "Design Excellence Award",
        description: "Recognized for outstanding contribution to accessible design",
        icon: "award"
      }
    }
  },
  {
    id: 106,
    type: "automated",
    trigger: "milestone",
    author: {
      name: "AI Research Lab",
      handle: "@ai_research_lab",
      avatar: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
      verified: true
    },
    content: "🎯 Major Milestone: Our research paper on transformer architecture optimization has been accepted for publication! This represents months of dedicated work by our incredible team.",
    likes: 567,
    replies: 89,
    reposts: 123,
    timestamp: "5h",
    labId: "ai-research",
    metadata: {
      milestone: {
        title: "Research Publication",
        progress: 100,
        total: 100
      }
    }
  },
  {
    id: 107,
    type: "automated",
    trigger: "daily_summary",
    author: {
      name: "Startup Lab",
      handle: "@startup_lab",
      avatar: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=400&fit=crop",
      verified: true
    },
    content: "📊 Daily Lab Update - March 19, 2024\n\nAnother dynamic day at the Startup Lab! Here's what our founders accomplished:",
    likes: 234,
    replies: 45,
    reposts: 67,
    timestamp: "8h",
    labId: "startup-founders",
    metadata: {
      summary: {
        period: "daily",
        highlights: [
          "Successfully pitched to 3 potential investors",
          "Completed market analysis for new target segment",
          "Onboarded 2 new team members"
        ],
        metrics: [
          {
            label: "User Growth",
            value: "28%",
            change: 15
          },
          {
            label: "Team Velocity",
            value: "4.9/5",
            change: 12
          }
        ]
      }
    }
  },
  {
    id: 108,
    type: "automated",
    trigger: "event",
    author: {
      name: "Design Lab",
      handle: "@design_lab",
      avatar: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop",
      verified: true
    },
    content: "🎨 Workshop Alert: Join us tomorrow for an interactive session on 'Designing for Accessibility' with industry experts. Don't miss this opportunity to enhance your design skills!",
    likes: 289,
    replies: 56,
    reposts: 78,
    timestamp: "10h",
    labId: "design-collective",
    metadata: {
      event: {
        title: "Accessibility Design Workshop",
        type: "Hybrid Event",
        date: "March 20, 2024 at 3:00 PM"
      }
    }
  },
  {
    id: 109,
    type: "automated",
    trigger: "achievement",
    author: {
      name: "Startup Lab",
      handle: "@startup_lab",
      avatar: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=400&fit=crop",
      verified: true
    },
    content: "🚀 Breakthrough Achievement: One of our startup teams has secured $1M in seed funding! This marks a significant milestone in their entrepreneurial journey.",
    likes: 678,
    replies: 123,
    reposts: 234,
    timestamp: "15h",
    labId: "startup-founders",
    metadata: {
      achievement: {
        title: "Funding Success",
        description: "First startup in the cohort to secure major funding",
        icon: "trophy"
      }
    }
  }
];