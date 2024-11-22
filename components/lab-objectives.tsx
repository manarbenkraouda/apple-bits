"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { formatTimeAgo } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  Plus,
  Users,
  ChevronRight,
  MessageSquare,
  Paperclip
} from "lucide-react";
import type { Objective, Task } from "@/lib/types";

interface LabObjectivesProps {
  objectives: Objective[];
  onCreateObjective?: () => void;
}

export function LabObjectives({ objectives, onCreateObjective }: LabObjectivesProps) {
  const [selectedObjective, setSelectedObjective] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "not_started":
        return "bg-muted-foreground/50";
      case "in_progress":
        return "bg-blue-500";
      case "completed":
        return "bg-green-500";
      default:
        return "bg-muted-foreground/50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "not_started":
        return <Circle className="w-4 h-4" />;
      case "in_progress":
        return <Clock className="w-4 h-4 text-blue-500" />;
      case "completed":
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      default:
        return <Circle className="w-4 h-4" />;
    }
  };

  return (
    <div className="h-full flex divide-x divide-border">
      {/* Objectives List */}
      <div className="w-1/3 flex flex-col">
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">Objectives</h2>
            <Button
              size="sm"
              onClick={onCreateObjective}
              className="bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90"
            >
              <Plus className="w-4 h-4 mr-2" />
              New
            </Button>
          </div>
          <Progress value={75} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2">
            75% completed · 3 of 4 objectives done
          </p>
        </div>

        <ScrollArea className="flex-1">
          <div className="divide-y divide-border">
            {objectives.map((objective) => (
              <motion.button
                key={objective.id}
                onClick={() => setSelectedObjective(objective.id)}
                className={`w-full p-4 text-left hover:bg-accent/5 transition-colors ${
                  selectedObjective === objective.id ? "bg-accent/10" : ""
                }`}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(objective.status)}
                      <span className="font-medium">{objective.title}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {objective.description}
                    </p>
                    
                    <div className="mt-3 flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatTimeAgo(objective.dueDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{objective.assignees.length}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground mt-1" />
                </div>
                <Progress value={objective.progress} className="h-1.5 mt-3" />
              </motion.button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Tasks List */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {selectedObjective ? (
            <motion.div
              key={selectedObjective}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col"
            >
              {objectives.map((objective) => {
                if (objective.id !== selectedObjective) return null;
                
                return (
                  <div key={objective.id} className="h-full flex flex-col">
                    <div className="p-4 border-b border-border">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-lg font-semibold">{objective.title}</h2>
                          <p className="text-muted-foreground mt-1">
                            {objective.description}
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          className={`${getStatusColor(objective.status)} text-white`}
                        >
                          {objective.status.replace("_", " ")}
                        </Badge>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {objective.assignees.map((assignee) => (
                            <Avatar
                              key={assignee.handle}
                              className="w-8 h-8 border-2 border-background"
                            >
                              <img src={assignee.avatar} alt={assignee.name} />
                            </Avatar>
                          ))}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>Due {formatTimeAgo(objective.dueDate)}</span>
                          </div>
                          <Progress value={objective.progress} className="w-24 h-2" />
                          <span>{objective.progress}%</span>
                        </div>
                      </div>
                    </div>

                    <ScrollArea className="flex-1 p-4">
                      <div className="space-y-2">
                        {objective.tasks.map((task) => (
                          <TaskCard key={task.id} task={task} />
                        ))}
                      </div>
                    </ScrollArea>

                    <div className="p-4 border-t border-border">
                      <Button
                        className="w-full bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Task
                      </Button>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex items-center justify-center text-center p-8"
            >
              <div className="max-w-sm">
                <h3 className="text-lg font-semibold mb-2">Select an objective</h3>
                <p className="text-muted-foreground">
                  Choose an objective from the list to view its tasks and track progress
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

interface TaskCardProps {
  task: Task;
}

function TaskCard({ task }: TaskCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 rounded-lg border border-border hover:border-primary/20 transition-colors"
    >
      <div className="flex items-start space-x-3">
        <Checkbox
          checked={task.status === "completed"}
          className="mt-1"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-medium">{task.title}</h4>
              {task.description && (
                <p className="text-sm text-muted-foreground mt-1">
                  {task.description}
                </p>
              )}
            </div>
            {task.assignee && (
              <Avatar className="w-6 h-6">
                <img src={task.assignee.avatar} alt={task.assignee.name} />
              </Avatar>
            )}
          </div>

          <div className="mt-3 flex items-center space-x-4 text-sm text-muted-foreground">
            {task.dueDate && (
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatTimeAgo(task.dueDate)}</span>
              </div>
            )}
            {task.comments.length > 0 && (
              <div className="flex items-center space-x-1">
                <MessageSquare className="w-4 h-4" />
                <span>{task.comments.length}</span>
              </div>
            )}
            {task.attachments.length > 0 && (
              <div className="flex items-center space-x-1">
                <Paperclip className="w-4 h-4" />
                <span>{task.attachments.length}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}