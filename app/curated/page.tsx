import { Sidebar } from "@/components/sidebar";
import { Trending } from "@/components/trending";
import { MobileNav } from "@/components/mobile-nav";
import { TopicCard } from "@/components/topic-card";
import { sampleTopics } from "@/lib/curated-data";

export default function CuratedPage() {
  return (
    <main className="flex min-h-screen relative">
      <Sidebar />
      <div className="flex-1 border-x border-border min-w-0">
        <div className="sticky top-0 z-10 glass-effect border-b border-border">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-semibold">Curated Topics</h1>
            <p className="text-muted-foreground mt-1">
              Premium content curated by experts
            </p>
          </div>
        </div>

        <div className="max-w-[800px] mx-auto p-6">
          <div className="grid gap-6">
            {sampleTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </div>
      </div>
      <Trending />
      <MobileNav />
    </main>
  );
}