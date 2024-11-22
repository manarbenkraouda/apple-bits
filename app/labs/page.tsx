import { Sidebar } from "@/components/sidebar";
import { Trending } from "@/components/trending";
import { MobileNav } from "@/components/mobile-nav";
import { LabsView } from "@/components/labs-view";

export default function LabsPage() {
  return (
    <main className="flex min-h-screen relative">
      <Sidebar />
      <div className="flex-1 border-x border-border min-w-0">
        <LabsView />
      </div>
      <Trending />
      <MobileNav />
    </main>
  );
}