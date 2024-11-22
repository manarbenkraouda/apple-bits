import { Sidebar } from "@/components/sidebar";
import { Trending } from "@/components/trending";
import { MobileNav } from "@/components/mobile-nav";
import { LabView } from "@/components/lab-view";
import { labs } from "@/lib/labs-data";

export function generateStaticParams() {
  return labs.map((lab) => ({
    id: lab.id,
  }));
}

export default async function LabPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const lab = labs.find(l => l.id === params.id);

  if (!lab) return null;

  return (
    <main className="flex min-h-screen relative">
      <Sidebar />
      <div className="flex-1 border-x border-border min-w-0">
        <LabView lab={lab} />
      </div>
      <Trending />
      <MobileNav />
    </main>
  );
}