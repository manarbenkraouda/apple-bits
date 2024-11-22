"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LabCard } from "@/components/lab-card";
import { LabChallengeCard } from "@/components/lab-challenge-card";
import { LabSponsorshipCard } from "@/components/lab-sponsorship-card";
import { CreateLabDialog } from "@/components/create-lab-dialog";
import { Plus } from "lucide-react";
import { labs } from "@/lib/labs-data";
import { challenges, sponsorships } from "@/lib/challenges-data";

export function LabsView() {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("labs");

  return (
    <div>
      <div className="sticky top-0 z-10 glass-effect border-b border-border">
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Labs</h1>
            <p className="text-muted-foreground mt-1">
              Collaborate with your team in real-time
            </p>
          </div>
          <Button
            onClick={() => setShowCreateDialog(true)}
            className="bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Lab
          </Button>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full h-12 bg-transparent p-0">
            <TabsTrigger
              value="labs"
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              All Labs
            </TabsTrigger>
            <TabsTrigger
              value="challenges"
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Challenges
            </TabsTrigger>
            <TabsTrigger
              value="sponsorships"
              className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Sponsorships
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="max-w-[800px] mx-auto p-6">
        <AnimatePresence mode="wait">
          {activeTab === "labs" && (
            <motion.div
              key="labs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-6"
            >
              {labs.map((lab, index) => (
                <motion.div
                  key={lab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <LabCard lab={lab} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "challenges" && (
            <motion.div
              key="challenges"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              {/* Featured Challenges */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Featured Challenges</h2>
                {challenges
                  .filter((c) => c.status === "active")
                  .slice(0, 2)
                  .map((challenge, index) => (
                    <motion.div
                      key={challenge.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <LabChallengeCard
                        challenge={challenge}
                        featured={index === 0}
                      />
                    </motion.div>
                  ))}
              </div>

              {/* All Challenges */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">All Challenges</h2>
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <LabChallengeCard challenge={challenge} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "sponsorships" && (
            <motion.div
              key="sponsorships"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              {/* Featured Sponsorships */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Featured Sponsors</h2>
                {sponsorships
                  .filter((s) => s.featured)
                  .map((sponsorship, index) => (
                    <motion.div
                      key={sponsorship.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <LabSponsorshipCard sponsorship={sponsorship} />
                    </motion.div>
                  ))}
              </div>

              {/* All Sponsorships */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">All Sponsors</h2>
                {sponsorships
                  .filter((s) => !s.featured)
                  .map((sponsorship, index) => (
                    <motion.div
                      key={sponsorship.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <LabSponsorshipCard sponsorship={sponsorship} />
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <CreateLabDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
      />
    </div>
  );
}