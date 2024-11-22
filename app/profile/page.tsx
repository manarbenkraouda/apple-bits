import { Sidebar } from "@/components/sidebar";
import { Trending } from "@/components/trending";
import { MobileNav } from "@/components/mobile-nav";
import { ProfileView } from "@/components/profile-view";
import { currentUser } from "@/lib/profile-data";

export default function ProfilePage() {
  return (
    <main className="flex min-h-screen relative">
      <Sidebar />
      <div className="flex-1 border-x border-border min-w-0">
        <ProfileView user={currentUser} />
      </div>
      <Trending />
      <MobileNav />
    </main>
  );
}