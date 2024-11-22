import { Sidebar } from '@/components/sidebar';
import { Timeline } from '@/components/timeline';
import { Trending } from '@/components/trending';
import { MobileNav } from '@/components/mobile-nav';

export default function Home() {
  return (
    <main className="flex min-h-screen relative">
      <Sidebar />
      <div className="flex-1 border-x border-border min-w-0">
        <Timeline />
      </div>
      <Trending />
      <MobileNav />
    </main>
  );
}