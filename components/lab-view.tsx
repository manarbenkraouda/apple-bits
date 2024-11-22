"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LabObjectives } from "@/components/lab-objectives";
import { LabWorkspace } from "@/components/lab-workspace";
import { ArrowLeft, Lock, Users, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { formatTimeAgo } from "@/lib/utils";
import type { Lab } from "@/lib/types";

interface LabViewProps {
  lab: Lab;
}

export function LabView({ lab }: LabViewProps) {
  const [activeTab, setActiveTab] = useState("workspace");

  // Calculate overall progress
  const progress = lab.objectives?.length 
    ? lab.objectives.reduce((acc, obj) => acc + obj.progress, 0) / lab.objectives.length
    : 0;

  return (
    <div className="h-[calc(100vh-4rem)] md:h-screen flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 glass-effect border-b border-border">
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <Link 
              href="/labs"
              className="p-2 -ml-2 hover:bg-accent/50 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-semibold">{lab.name}</h1>
                <Badge variant="outline" className="text-xs">
                  {lab.category}
                </Badge>
                {lab.visibility === "private" && (
                  <Lock className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
              <p className="text-muted-foreground mt-1">{lab.description}</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-2">
                {lab.members.slice(0, 3).map((member) => (
                  <Avatar key={member.handle} className="w-8 h-8 ring-2 ring-background">
                    <img src={member.avatar} alt={member.name} />
                  </Avatar>
                ))}
                {lab.members.length > 3 && (
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center ring-2 ring-background">
                    <span className="text-xs">+{lab.members.length - 3}</span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{lab.memberCount} members</span>
                </div>
                {lab.dueDate && (
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Due {formatTimeAgo(lab.dueDate)}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-sm text-right">
                <div className="font-medium">{Math.round(progress)}% completed</div>
                <div className="text-muted-foreground">
                  {lab.objectives?.filter(o => o.status === "completed").length || 0} of {lab.objectives?.length || 0} objectives
                </div>
              </div>
              <div className="w-20">
                <Progress value={progress} className="h-2" />
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full h-12 bg-transparent p-0">
            <TabsTrigger
              value="workspace"
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Workspace
            </TabsTrigger>
            <TabsTrigger
              value="objectives"
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Objectives
            </TabsTrigger>
            <TabsTrigger
              value="files"
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Files
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Settings
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === "workspace" && <LabWorkspace lab={lab} />}
        {activeTab === "objectives" && <LabObjectives objectives={lab.objectives || []} />}
        {activeTab === "files" && (
          <div className="h-full flex items-center justify-center text-muted-foreground">
            Files tab content coming soon
          </div>
        )}
        {activeTab === "settings" && (
          <div className="h-full flex items-center justify-center text-muted-foreground">
            Settings tab content coming soon
          </div>
        )}
      </div>
    </div>
  );
}