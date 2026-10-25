"use client";

import { useForm } from "@tanstack/react-form";
import { Check, FileText, X } from "lucide-react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import type { FetchError } from "ofetch";
import { useState } from "react";
import { toast } from "sonner";
import type z from "zod";
import {
  containerVariants,
  errorMotion,
  itemVariants,
  labelSwapMotion,
  useShake,
} from "@/components/form/form-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { useReviewProject } from "@/hooks";
import type { Project, ReviewedProjectPayload } from "@/types";
import { reviewProjectSchema } from "@/validation";

type ReviewValues = z.input<typeof reviewProjectSchema>;

type ReviewProjectDialogProps = {
  project: Project | null;
  onClose: () => void;
};

const defaultValues: ReviewValues = {
  status: "APPROVED",
  reviewNote: "",
};

export default function ReviewProjectDialog({
  project,
  onClose,
}: ReviewProjectDialogProps) {
  const [decision, setDecision] = useState<ReviewValues["status"]>("APPROVED");
  const [formScope, shakeForm] = useShake<HTMLFormElement>();
  const { mutate: reviewProject, isPending } = useReviewProject();

  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: reviewProjectSchema,
    },
    onSubmitInvalid: () => shakeForm(),
    onSubmit: ({ value }) => {
      if (!project) return;

      const payload: ReviewedProjectPayload = {
        status: value.status,
        reviewNote: value.reviewNote?.trim() || null,
      };

      reviewProject(
        { id: project.id, payload },
        {
          onSuccess: () => {
            toast.success(
              payload.status === "APPROVED"
                ? "Project approved"
                : "Project rejected",
              {
                description: `${project.name} has been reviewed.`,
              },
            );
            closeDialog();
          },
          onError: (error: FetchError) => {
            shakeForm();
            toast.error("Could not review project", {
              description:
                error.data?.message ||
                error.message ||
                "Something went wrong. Please try again.",
            });
          },
        },
      );
    },
  });

  const closeDialog = () => {
    form.reset();
    setDecision("APPROVED");
    onClose();
  };

  return (
    <MotionConfig reducedMotion="user">
      <Dialog
        open={project !== null}
        onOpenChange={(open) => {
          if (!open && !isPending) closeDialog();
        }}
      >
        {project ? (
          <DialogContent className="grid max-h-[min(90dvh,44rem)] w-[calc(100%-1.5rem)] max-w-xl grid-rows-[auto_minmax(0,1fr)] gap-0 overflow-hidden rounded-3xl border border-secondary/10 bg-card p-0 text-secondary shadow-2xl sm:w-full sm:max-w-xl">
            <DialogHeader className="relative overflow-hidden border-b border-white/10 bg-brand px-5 py-5 pr-14 text-white sm:px-7 sm:py-6 sm:pr-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-12 size-48 rounded-full bg-brand-orange/15 blur-3xl"
              />
              <p className="relative inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 font-heading text-[11px] font-bold tracking-wide text-brand-orange uppercase">
                <FileText aria-hidden="true" className="size-3.5" />
                Pending review
              </p>
              <DialogTitle className="relative mt-3 max-w-lg wrap-break-word font-heading text-xl leading-tight font-extrabold tracking-tight text-white sm:text-2xl">
                Review {project.name}
              </DialogTitle>
              <DialogDescription className="relative text-sm text-white/70">
                Choose a decision. A review note is required when rejecting a
                project.
              </DialogDescription>
            </DialogHeader>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="min-h-0 overflow-y-auto overscroll-contain"
            >
              <motion.form
                ref={formScope}
                onSubmit={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  form.handleSubmit();
                }}
                className="p-5 sm:p-7"
              >
                <FieldGroup className="gap-5">
                  <motion.div variants={itemVariants}>
                    <p className="mb-2 font-heading text-sm font-bold text-secondary">
                      Decision
                    </p>
                    <form.Field name="status">
                      {(field) => (
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <button
                            type="button"
                            aria-pressed={field.state.value === "APPROVED"}
                            onClick={() => {
                              field.handleChange("APPROVED");
                              setDecision("APPROVED");
                            }}
                            className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border px-4 py-3 font-heading text-sm font-bold outline-none transition-colors focus-visible:ring-3 focus-visible:ring-brand-orange/40 ${
                              field.state.value === "APPROVED"
                                ? "border-emerald-600/40 bg-emerald-600/10 text-emerald-800 dark:text-emerald-300"
                                : "border-secondary/15 bg-background text-secondary/70 hover:border-emerald-600/30 hover:bg-emerald-600/5"
                            }`}
                          >
                            <Check aria-hidden="true" className="size-4" />
                            Approve project
                          </button>
                          <button
                            type="button"
                            aria-pressed={field.state.value === "REJECTED"}
                            onClick={() => {
                              field.handleChange("REJECTED");
                              setDecision("REJECTED");
                            }}
                            className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border px-4 py-3 font-heading text-sm font-bold outline-none transition-colors focus-visible:ring-3 focus-visible:ring-brand-orange/40 ${
                              field.state.value === "REJECTED"
                                ? "border-destructive/40 bg-destructive/10 text-destructive"
                                : "border-secondary/15 bg-background text-secondary/70 hover:border-destructive/30 hover:bg-destructive/5"
                            }`}
                          >
                            <X aria-hidden="true" className="size-4" />
                            Reject project
                          </button>
                        </div>
                      )}
                    </form.Field>
                  </motion.div>

                  <form.Field name="reviewNote">
                    {(field) => {
                      const hasError = field.state.meta.errors.length > 0;
                      const isRequired = decision === "REJECTED";
                      const reviewNote = field.state.value ?? "";

                      return (
                        <motion.div variants={itemVariants}>
                          <Field data-invalid={hasError}>
                            <div className="flex items-center justify-between gap-3">
                              <FieldLabel
                                htmlFor={field.name}
                                className="font-heading font-bold text-secondary"
                              >
                                Review note
                                {isRequired ? (
                                  <span className="text-destructive"> *</span>
                                ) : null}
                              </FieldLabel>
                              <span className="text-xs text-secondary/50">
                                {reviewNote.length}
                                /500
                              </span>
                            </div>
                            <Textarea
                              id={field.name}
                              name={field.name}
                              value={reviewNote}
                              onChange={(event) =>
                                field.handleChange(event.target.value)
                              }
                              onBlur={field.handleBlur}
                              aria-invalid={hasError}
                              maxLength={500}
                              rows={5}
                              placeholder={
                                isRequired
                                  ? "Explain why this project is being rejected..."
                                  : "Add optional feedback for the student..."
                              }
                              className="min-h-32 resize-y rounded-xl border-secondary/15 bg-background px-3.5 py-3 text-secondary shadow-none placeholder:text-secondary/40 focus-visible:border-brand-orange focus-visible:ring-brand-orange/25"
                            />
                            <AnimatePresence>
                              {hasError ? (
                                <motion.div
                                  key="review-note-error"
                                  {...errorMotion}
                                  className="overflow-hidden"
                                >
                                  <FieldError
                                    errors={field.state.meta.errors}
                                  />
                                </motion.div>
                              ) : null}
                            </AnimatePresence>
                          </Field>
                        </motion.div>
                      );
                    }}
                  </form.Field>

                  <DialogFooter className="mt-1 flex-col-reverse gap-3 border-t border-secondary/10 bg-transparent px-0 pt-5 pb-0 sm:flex-row sm:justify-end">
                    <DialogClose asChild>
                      <Button
                        type="button"
                        variant="outline"
                        disabled={isPending}
                        className="h-11 rounded-xl border-secondary/15 px-5 font-heading font-bold text-secondary"
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      type="submit"
                      disabled={isPending}
                      className="h-11 rounded-xl bg-brand-orange px-5 font-heading font-bold text-brand-ink shadow-[0_12px_28px_-12px_var(--color-brand-orange)] transition hover:brightness-110 focus-visible:ring-brand-orange/40"
                    >
                      <AnimatePresence initial={false} mode="popLayout">
                        {isPending ? (
                          <motion.span
                            key="pending"
                            {...labelSwapMotion}
                            className="inline-flex items-center gap-2"
                          >
                            <Spinner />
                            Saving review
                          </motion.span>
                        ) : (
                          <motion.span
                            key="idle"
                            {...labelSwapMotion}
                            className="inline-flex items-center gap-2"
                          >
                            Submit review
                            <Check aria-hidden="true" className="size-4" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Button>
                  </DialogFooter>
                </FieldGroup>
              </motion.form>
            </motion.div>
          </DialogContent>
        ) : null}
      </Dialog>
    </MotionConfig>
  );
}
