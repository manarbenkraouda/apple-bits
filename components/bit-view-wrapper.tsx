"use client";

import { BitView } from "@/components/bit-view";
import type { Bit } from "@/lib/types";

interface BitViewWrapperProps {
  bit: Bit;
  replies: Bit[];
}

export function BitViewWrapper({ bit, replies }: BitViewWrapperProps) {
  return <BitView bit={bit} replies={replies} />;
}