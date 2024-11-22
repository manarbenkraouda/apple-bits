import type { AutomatedBit } from "@/lib/types";

export const sampleAutomatedBits: AutomatedBit[] = [
  {
    id: 101,
    type: "automated",
    trigger: "achievement",
    author: {
      name: "AI Research Lab",
      handle: "@ai_research_lab",
      avatar: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
      verified: true
    },
    content: "🎉 Achievement Unlocked: Research Milestone! Our team has successfully completed the initial phase of our transformer architecture research, demonstrating exceptional progress in model optimization.",
    likes: 156,
    replies: 23,
    reposts: 45,
    timestamp: "2h",
    labId: "ai-research",
    metadata: {
      achievement: {
        title: "Research Pioneer",
        description: "Completed Phase 1 of transformer architecture research with outstanding results",
        icon: "trophy"
      }
    }
  },
  {
    id: 102,
    type: "automated",
    trigger: "daily_summary",
    author: {
      name: "Design Lab",
      handle: "@design_lab",
      avatar: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop",
      verified: true
    },
    content: "📊 Daily Lab Summary - March 19, 2024\n\nA productive day of innovation and collaboration in the Design Lab! Here's what we achieved today:",
    likes: 89,
    replies: 12,
    reposts: 34,
    timestamp: "6h",
    labId: "design-collective",
    metadata: {
      summary: {
        period: "daily",
        highlights: [
          "Completed 3 major design iterations for the new UI system",
          "Received positive feedback from user testing sessions",
          "Started work on the accessibility improvements"
        ],
        metrics: [
          {
            label: "Tasks Completed",
            value: "12",
            change: 20
          },
          {
            label: "Team Collaboration",
            value: "4.8/5",
            change: 5
          }
        ]
      }
    }
  },
  {
    id: 103,
    type: "automated",
    trigger: "milestone",
    author: {
      name: "Startup Lab",
      handle: "@startup_lab",
      avatar: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=400&fit=crop",
      verified: true
    },
    content: "📈 Milestone Alert: MVP Development Progress\n\nWe're making great strides in our MVP development! The team has completed 40% of planned features, staying right on schedule.",
    likes: 234,
    replies: 45,
    reposts: 67,
    timestamp: "12h",
    labId: "startup-founders",
    metadata: {
      milestone: {
        title: "MVP Development Progress",
        progress: 40,
        total: 100
      }
    }
  },
  {
    id: 104,
    type: "automated",
    trigger: "event",
    author: {
      name: "AI Research Lab",
      handle: "@ai_research_lab",
      avatar: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
      verified: true
    },
    content: "📅 Upcoming Event: Join us for an exciting research presentation where we'll showcase our latest findings in transformer architecture optimization.",
    likes: 178,
    replies: 34,
    reposts: 56,
    timestamp: "1d",
    labId: "ai-research",
    metadata: {
      event: {
        title: "Research Presentation",
        type: "Virtual Meeting",
        date: "March 21, 2024 at 2:00 PM"
      }
    }
  }
];