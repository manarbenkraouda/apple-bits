import type { Challenge, Sponsorship } from "@/lib/types";

export const challenges: Challenge[] = [
  {
    id: "ar-future",
    title: "Design the Future of AR",
    description: "Create innovative AR experiences that push the boundaries of what's possible with spatial computing.",
    issuer: {
      name: "Apple",
      logo: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=400&h=400&fit=crop",
      verified: true
    },
    reward: {
      type: "mentorship",
      description: "One-on-one mentorship with Apple's AR/VR team"
    },
    requirements: [
      "Experience with AR/VR development",
      "Strong understanding of UX principles",
      "Portfolio of previous work",
      "Team of 2-5 members"
    ],
    deadline: "2024-05-01T00:00:00Z",
    participants: 234,
    status: "active",
    mentors: [
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
      }
    ],
    resources: [
      {
        title: "AR Design Guidelines",
        type: "document",
        url: "https://example.com/ar-guidelines"
      },
      {
        title: "Introduction to Vision Pro",
        type: "video",
        url: "https://example.com/vision-pro-intro"
      }
    ]
  },
  {
    id: "eco-tech",
    title: "Sustainable Tech Innovation",
    description: "Develop eco-friendly technology solutions that address environmental challenges.",
    issuer: {
      name: "GreenTech Initiative",
      logo: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=400&h=400&fit=crop",
      verified: true
    },
    reward: {
      type: "monetary",
      value: "$50,000",
      description: "Funding for project development and implementation"
    },
    requirements: [
      "Focus on environmental impact",
      "Scalable solution",
      "Clear implementation plan",
      "Measurable results"
    ],
    deadline: "2024-06-15T00:00:00Z",
    participants: 156,
    status: "active"
  },
  {
    id: "ai-ethics",
    title: "Ethical AI Development",
    description: "Create AI solutions with a strong focus on ethics and responsible development.",
    issuer: {
      name: "AI Ethics Board",
      logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
      verified: true
    },
    reward: {
      type: "recognition",
      description: "Featured at the Global AI Ethics Summit"
    },
    requirements: [
      "Strong understanding of AI ethics",
      "Innovative approach to ethical AI",
      "Documentation of methodology",
      "Impact assessment"
    ],
    deadline: "2024-07-30T00:00:00Z",
    participants: 89,
    status: "upcoming"
  }
];

export const sponsorships: Sponsorship[] = [
  {
    id: "apple-dev",
    sponsor: {
      name: "Apple Developer Academy",
      logo: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=400&h=400&fit=crop",
      verified: true,
      description: "Supporting the next generation of app developers and entrepreneurs"
    },
    tier: "gold",
    benefits: [
      {
        title: "Development Resources",
        description: "Access to latest Apple development tools and hardware",
        icon: "laptop"
      },
      {
        title: "Expert Mentorship",
        description: "1:1 mentoring with Apple engineers",
        icon: "users"
      },
      {
        title: "Financial Support",
        description: "$50,000 in development funding",
        icon: "dollar"
      },
      {
        title: "App Store Feature",
        description: "Featured placement opportunity",
        icon: "star"
      }
    ],
    duration: {
      start: "2024-04-01T00:00:00Z",
      end: "2025-04-01T00:00:00Z"
    },
    amount: "$50,000",
    featured: true
  },
  {
    id: "tech-accelerator",
    sponsor: {
      name: "Innovation Hub",
      logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
      verified: true,
      description: "Accelerating breakthrough technologies"
    },
    tier: "silver",
    benefits: [
      {
        title: "Workspace Access",
        description: "Access to innovation hub facilities",
        icon: "building"
      },
      {
        title: "Network Access",
        description: "Connect with industry leaders",
        icon: "network"
      }
    ],
    duration: {
      start: "2024-05-01T00:00:00Z",
      end: "2024-11-01T00:00:00Z"
    },
    amount: "$25,000",
    featured: false
  },
  {
    id: "startup-boost",
    sponsor: {
      name: "TechStars",
      logo: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=400&h=400&fit=crop",
      verified: true,
      description: "Empowering early-stage startups"
    },
    tier: "bronze",
    benefits: [
      {
        title: "Seed Funding",
        description: "Initial funding for development",
        icon: "seedling"
      },
      {
        title: "Mentorship",
        description: "Weekly mentorship sessions",
        icon: "users"
      }
    ],
    duration: {
      start: "2024-06-01T00:00:00Z",
      end: "2024-09-01T00:00:00Z"
    },
    amount: "$10,000",
    featured: false
  }
];