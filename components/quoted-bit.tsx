import { BadgeCheck } from "lucide-react";
import { sampleBits } from "@/lib/data";
import type { Bit } from "@/lib/types";
import Link from "next/link";

interface QuotedBitProps {
  quotedBitId: number;
}

export function QuotedBit({ quotedBitId }: QuotedBitProps) {
  const quotedBit = sampleBits.find((bit) => bit.id === quotedBitId);

  if (!quotedBit) return null;

  return (
    <div className="rounded-xl border border-border overflow-hidden transition-all duration-100 hover:border-primary/20">
      <div className="p-3 hover:bg-accent/5">
        <Link href={`/bit/${quotedBitId}`} className="block">
          <div className="flex items-center space-x-1 flex-wrap">
            <span className="font-medium">{quotedBit.author.name}</span>
            {quotedBit.author.verified && (
              <BadgeCheck className="w-4 h-4 text-blue-500" />
            )}
            <span className="text-muted-foreground">
              {quotedBit.author.handle}
            </span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{quotedBit.timestamp}</span>
          </div>

          <p className="mt-1 text-[15px] leading-normal text-muted-foreground">
            {quotedBit.content}
          </p>

          {quotedBit.image && (
            <div className="mt-2 rounded-lg overflow-hidden border border-border/20">
              <img
                src={quotedBit.image}
                alt="Quoted bit content"
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}
