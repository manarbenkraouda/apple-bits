import { Sidebar } from "@/components/sidebar";
import { Trending } from "@/components/trending";
import { MobileNav } from "@/components/mobile-nav";
import { BitViewWrapper } from "@/components/bit-view-wrapper";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { sampleBits } from "@/lib/data";
import { sampleAutomatedBits } from "@/lib/automated-bits-data";
import { extraAutomatedBits } from "@/lib/automated-bits-data-extra";

// Get all bits for static paths
const allBits = [
  ...sampleBits,
  ...sampleAutomatedBits,
  ...extraAutomatedBits
];

export function generateStaticParams() {
  return allBits.map((bit) => ({
    id: bit.id.toString(),
  }));
}

export default async function BitPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const bitId = Number(params.id);
  const bit = allBits.find(b => b.id === bitId);
  const replies = sampleBits.filter(b => b.replyToBitId === bitId);

  if (!bit) return null;

  return (
    <main className="flex min-h-screen relative">
      <Sidebar />
      <div className="flex-1 border-x border-border min-w-0">
        <div className="sticky top-0 z-10 glass-effect border-b border-border">
          <Link 
            href="/" 
            className="flex items-center space-x-4 px-4 py-3 text-lg hover:bg-accent/5 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </Link>
        </div>
        <BitViewWrapper bit={bit} replies={replies} />
      </div>
      <Trending />
      <MobileNav />
    </main>
  );
}