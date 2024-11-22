import { Sidebar } from "@/components/sidebar";
import { Trending } from "@/components/trending";
import { MobileNav } from "@/components/mobile-nav";
import { PlaylistsView } from "@/components/playlists-view";

export default function PlaylistsPage() {
  return (
    <main className="flex min-h-screen relative">
      <Sidebar />
      <div className="flex-1 border-x border-border min-w-0">
        <PlaylistsView />
      </div>
      <Trending />
      <MobileNav />
    </main>
  );
}