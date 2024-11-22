"use client";

import { useState } from "react";
import { Home, User, Bell, Mail, Settings, Star, Users, Music2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AppleLogo } from "@/components/apple-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Star, label: "Curated", href: "/curated" },
  { icon: Users, label: "Labs", href: "/labs" },
  { icon: Music2, label: "Playlists", href: "/playlists" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: Mail, label: "Messages", href: "/messages" },
  { icon: User, label: "Profile", href: "/profile" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export function Sidebar() {
  return (
    <div className="hidden md:flex w-[300px] xl:w-[350px] p-6 sticky top-0 h-screen flex-col justify-between">
      <motion.div
        className="space-y-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Link href="/" className="inline-flex items-center">
          <div className="w-6 h-6 flex items-center">
            <AppleLogo className="w-full h-full logo-gradient" />
          </div>
          <span className="text-2xl font-semibold gradient-text block">Bits</span>
        </Link>
        
        <nav className="space-y-3">
          {menuItems.map((item) => (
            <motion.div key={item.href} variants={itemVariant}>
              <Link
                href={item.href}
                className="flex items-center space-x-4 px-4 py-3 rounded-2xl hover:bg-accent/50 transition-colors"
              >
                <item.icon className="w-6 h-6" />
                <span className="text-lg font-medium">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
      
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="lg" className="flex-1 rounded-2xl hover:bg-accent/50">
          <Settings className="w-5 h-5 mr-2" />
          Settings
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
}