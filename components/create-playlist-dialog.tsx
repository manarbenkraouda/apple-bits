"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion, AnimatePresence } from "framer-motion";
import { Image, Music2, Users, Plus } from "lucide-react";

interface CreatePlaylistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreatePlaylistDialog({ open, onOpenChange }: CreatePlaylistDialogProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    visibility: "public" as "public" | "collaborative" | "private",
    coverImage: "",
    targetTrackCount: 30,
    tags: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle playlist creation
    onOpenChange(false);
    setStep(1);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Music2 className="w-5 h-5 text-primary" />
            <span>Create a new playlist</span>
          </DialogTitle>
          <DialogDescription>
            Create a collaborative playlist and invite others to contribute
          </DialogDescription>
        </DialogHeader>

        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-border overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-[#ff3b30] to-[#ff9500]"
              initial={{ width: "33%" }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 py-4 mt-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Playlist name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Coding Focus"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="What's this playlist about?"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Target track count</Label>
                  <Input
                    type="number"
                    value={formData.targetTrackCount}
                    onChange={(e) => setFormData({ ...formData, targetTrackCount: parseInt(e.target.value, 10) })}
                    min={1}
                    max={100}
                  />
                </div>

                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90"
                  disabled={!formData.name || !formData.description}
                >
                  Continue
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-4">
                  <Label>Playlist Access</Label>
                  <RadioGroup
                    value={formData.visibility}
                    onValueChange={(value: "public" | "collaborative" | "private") => 
                      setFormData({ ...formData, visibility: value })
                    }
                    className="space-y-4"
                  >
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="public" id="public" className="mt-1" />
                      <div className="space-y-1">
                        <Label htmlFor="public" className="font-medium">Public</Label>
                        <p className="text-sm text-muted-foreground">
                          Anyone can view and suggest tracks
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="collaborative" id="collaborative" className="mt-1" />
                      <div className="space-y-1">
                        <Label htmlFor="collaborative" className="font-medium">Collaborative</Label>
                        <p className="text-sm text-muted-foreground">
                          Approved members can add tracks directly
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="private" id="private" className="mt-1" />
                      <div className="space-y-1">
                        <Label htmlFor="private" className="font-medium">Private</Label>
                        <p className="text-sm text-muted-foreground">
                          Only invited members can view and contribute
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90"
                  >
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Cover Image</Label>
                    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
                      <div className="flex flex-col items-center space-y-2">
                        <Image className="w-8 h-8 text-muted-foreground" />
                        <div className="text-sm text-muted-foreground">
                          Drag and drop an image, or click to browse
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      placeholder="Add tags separated by commas"
                      className="bg-transparent"
                      onKeyDown={(e) => {
                        if (e.key === "," || e.key === "Enter") {
                          e.preventDefault();
                          const value = (e.target as HTMLInputElement).value.trim();
                          if (value) {
                            setFormData({
                              ...formData,
                              tags: [...formData.tags, value]
                            });
                            (e.target as HTMLInputElement).value = "";
                          }
                        }
                      }}
                    />
                    {formData.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {formData.tags.map((tag, index) => (
                          <div
                            key={index}
                            className="px-2 py-1 rounded-full bg-accent text-sm flex items-center space-x-1"
                          >
                            <span>{tag}</span>
                            <button
                              type="button"
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  tags: formData.tags.filter((_, i) => i !== index)
                                });
                              }}
                              className="w-4 h-4 rounded-full hover:bg-accent-foreground/20 flex items-center justify-center"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create Playlist
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </DialogContent>
    </Dialog>
  );
}