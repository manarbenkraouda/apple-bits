"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { motion, AnimatePresence } from "framer-motion";
import { Image, Sparkles, Users, CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface CreateLabDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateLabDialog({ open, onOpenChange }: CreateLabDialogProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    visibility: "open" as "open" | "gated" | "private",
    coverImage: "",
    requirements: "",
    tags: [] as string[],
    objectives: [] as { title: string; description: string; dueDate?: Date }[],
    dueDate: undefined as Date | undefined
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle lab creation
    onOpenChange(false);
    setStep(1);
  };

  const addObjective = () => {
    setFormData({
      ...formData,
      objectives: [
        ...formData.objectives,
        { title: "", description: "", dueDate: undefined }
      ]
    });
  };

  const updateObjective = (index: number, field: string, value: any) => {
    const newObjectives = [...formData.objectives];
    newObjectives[index] = { ...newObjectives[index], [field]: value };
    setFormData({ ...formData, objectives: newObjectives });
  };

  const removeObjective = (index: number) => {
    setFormData({
      ...formData,
      objectives: formData.objectives.filter((_, i) => i !== index)
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span>Create a new lab</span>
          </DialogTitle>
          <DialogDescription>
            Create a collaborative space for innovation and creativity
          </DialogDescription>
        </DialogHeader>

        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-border overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-[#ff3b30] to-[#ff9500]"
              initial={{ width: "25%" }}
              animate={{ width: `${(step / 4) * 100}%` }}
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
                  <Label htmlFor="name">Lab name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., AR Design Innovation"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g., Design, Technology, Research"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="What's the purpose and goal of this lab?"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Due Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.dueDate ? (
                          format(formData.dueDate, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.dueDate}
                        onSelect={(date) => setFormData({ ...formData, dueDate: date })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90"
                  disabled={!formData.name || !formData.category || !formData.description}
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
                  <Label>Lab Access</Label>
                  <RadioGroup
                    value={formData.visibility}
                    onValueChange={(value: "open" | "gated" | "private") => 
                      setFormData({ ...formData, visibility: value })
                    }
                    className="space-y-4"
                  >
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="open" id="open" className="mt-1" />
                      <div className="space-y-1">
                        <Label htmlFor="open" className="font-medium">Open Access</Label>
                        <p className="text-sm text-muted-foreground">
                          Anyone can join and participate in the lab
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="gated" id="gated" className="mt-1" />
                      <div className="space-y-1">
                        <Label htmlFor="gated" className="font-medium">Application Required</Label>
                        <p className="text-sm text-muted-foreground">
                          Members must apply and be approved to join
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="private" id="private" className="mt-1" />
                      <div className="space-y-1">
                        <Label htmlFor="private" className="font-medium">Private</Label>
                        <p className="text-sm text-muted-foreground">
                          Only invited members can join
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Join Requirements</Label>
                  <Textarea
                    id="requirements"
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="What are the requirements or expectations for members?"
                    rows={2}
                  />
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
                  <div className="flex items-center justify-between">
                    <Label>Objectives</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addObjective}
                    >
                      Add Objective
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {formData.objectives.map((objective, index) => (
                      <div key={index} className="space-y-3 p-4 border border-border rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 space-y-3">
                            <Input
                              value={objective.title}
                              onChange={(e) => updateObjective(index, "title", e.target.value)}
                              placeholder="Objective title"
                            />
                            <Textarea
                              value={objective.description}
                              onChange={(e) => updateObjective(index, "description", e.target.value)}
                              placeholder="Objective description"
                              rows={2}
                            />
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="w-full justify-start text-left font-normal"
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {objective.dueDate ? (
                                    format(objective.dueDate, "PPP")
                                  ) : (
                                    <span>Set due date</span>
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={objective.dueDate}
                                  onSelect={(date) => updateObjective(index, "dueDate", date)}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive/90"
                            onClick={() => removeObjective(index)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div> ))}
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
                    type="button"
                    onClick={() => setStep(4)}
                    className="flex-1 bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90"
                  >
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
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
                    onClick={() => setStep(3)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[#ff3b30] to-[#ff9500] hover:opacity-90"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Create Lab
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