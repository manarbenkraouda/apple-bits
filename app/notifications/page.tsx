import { Sidebar } from "@/components/sidebar";
import { Trending } from "@/components/trending";
import { MobileNav } from "@/components/mobile-nav";
import { NotificationsView } from "@/components/notifications-view";

export default function NotificationsPage() {
  return (
    <main className="flex min-h-screen relative">
      <Sidebar />
      <div className="flex-1 border-x border-border min-w-0">
        <NotificationsView />
      </div>
      <Trending />
      <MobileNav />
    </main>
  );
}