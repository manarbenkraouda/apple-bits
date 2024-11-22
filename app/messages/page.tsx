import { Sidebar } from "@/components/sidebar";
import { Trending } from "@/components/trending";
import { MobileNav } from "@/components/mobile-nav";
import { MessagesView } from "@/components/messages-view";

export default function MessagesPage() {
  return (
    <main className="flex min-h-screen relative">
      <Sidebar />
      <div className="flex-1 border-x border-border min-w-0">
        <MessagesView />
      </div>
      <Trending />
      <MobileNav />
    </main>
  );
}