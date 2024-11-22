"use client";

import { Home, User, Bell, Mail, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { MobileComposer } from "@/components/mobile-composer";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: Mail, label: "Messages", href: "/messages" },
  { icon: User, label: "Profile", href: "/profile" },
];

export function MobileNav() {
  const [showComposer, setShowComposer] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 glass-effect border-t border-border/20 md:hidden z-50">
        <div className="flex items-center justify-around p-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-2"
            >
              <item.icon className="w-6 h-6" />
            </Link>
          ))}
          <Button
            size="icon"
            className={cn(
              "rounded-full w-12 h-12 bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90 transition-opacity",
              "flex items-center justify-center shadow-lg"
            )}
            onClick={() => setShowComposer(true)}
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <MobileComposer 
        open={showComposer} 
        onClose={() => setShowComposer(false)} 
      />
    </>
  );
}