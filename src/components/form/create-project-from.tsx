"use client";

import { useForm } from "@tanstack/react-form";
import {
  ArrowLeft,
  ArrowRight,
  CodeXml,
  Globe2,
  Lightbulb,
} from "lucide-react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FetchError } from "ofetch";
import { toast } from "sonner";
import type z from "zod";
import { useCreateProject } from "@/hooks";
import { createProjectSchema } from "@/validation";
import { Button } from "../ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Spinner } from "../ui/spinner";
import { Textarea } from "../ui/textarea";
import {
  containerVariants,
  errorMotion,
  itemVariants,
  labelSwapMotion,
  useShake,
} from "./form-motion";

type CreateProjectValues = z.input<typeof createProjectSchema>;

const defaultValues: CreateProjectValues = {
  name: "",
  repoUrl: "",
  liveUrl: "",
  description: "",
};

export default function CreateProjectForm() {
  const router = useRouter();
  const [formScope, shakeForm] = useShake<HTMLFormElement>();
  const { mutate: createProject, isPending } = useCreateProject();

  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: createProjectSchema,
    },
    onSubmitInvalid: () => shakeForm(),
    onSubmit: ({ value }) => {
      createProject(value, {
        onSuccess: () => {
          toast.success("Project submitted", {
            description:
              "Your project has been created and is ready for review.",
          });
          router.push("/dashboard/my-projects");
        },
        onError: (error: FetchError) => {
          shakeForm();
          toast.error("Could not create project", {
            description:
              error.data?.message ||
              error.message ||
              "Something went wrong. Please try again.",
          });
        },
      });
    },
  });

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-3xl"
      >
        <motion.div
          variants={itemVariants}
          className="mb-5 flex items-start gap-3 rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-4 text-secondary sm:mb-6 sm:p-5"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-orange/15 text-brand-orange-ink dark:text-brand-orange">
            <Lightbulb aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h2 className="font-heading text-sm font-bold">
              Ready to share your work?
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-secondary/70">
              Add your project details and links. Once submitted, it will be
              available for administrator review.
            </p>
          </div>
        </motion.div>

        <motion.form
          ref={formScope}
          variants={itemVariants}
          onSubmit={(event) => {
            event.preventDefault();
            event.stopPropagation();
            form.handleSubmit();
          }}
          className="rounded-3xl border border-secondary/10 bg-card p-4 shadow-sm sm:p-6 lg:p-8"
        >
          <FieldGroup className="gap-5 sm:gap-6">
            <form.Field name="name">
              {(field) => (
                <motion.div variants={itemVariants}>
                  <Field
                    data-invalid={
                      field.state.meta.isTouched && !field.state.meta.isValid
                    }
                  >
                    <FieldLabel
                      htmlFor={field.name}
                      className="font-heading font-bold text-secondary"
                    >
                      Project name
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(event) =>
                        field.handleChange(event.target.value)
                      }
                      onBlur={field.handleBlur}
                      aria-invalid={
                        field.state.meta.isTouched && !field.state.meta.isValid
                      }
                      maxLength={80}
                      placeholder="e.g. Campus Event Planner"
                      className="h-11 rounded-xl border-secondary/15 bg-background px-3.5 text-secondary shadow-none placeholder:text-secondary/40 focus-visible:border-brand-orange focus-visible:ring-brand-orange/25"
                    />
                    <AnimatePresence>
                      {field.state.meta.isTouched &&
                      !field.state.meta.isValid ? (
                        <motion.div
                          key={`${field.name}-error`}
                          {...errorMotion}
                          className="overflow-hidden"
                        >
                          <FieldError errors={field.state.meta.errors} />
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </Field>
                </motion.div>
              )}
            </form.Field>

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
              <form.Field name="repoUrl">
                {(field) => (
                  <motion.div variants={itemVariants}>
                    <Field
                      data-invalid={
                        field.state.meta.isTouched && !field.state.meta.isValid
                      }
                    >
                      <FieldLabel
                        htmlFor={field.name}
                        className="font-heading font-bold text-secondary"
                      >
                        Repository URL
                      </FieldLabel>
                      <div className="relative">
                        <CodeXml
                          aria-hidden="true"
                          className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-secondary/45"
                        />
                        <Input
                          id={field.name}
                          name={field.name}
                          type="url"
                          inputMode="url"
                          autoComplete="url"
                          value={field.state.value}
                          onChange={(event) =>
                            field.handleChange(event.target.value)
                          }
                          onBlur={field.handleBlur}
                          aria-invalid={
                            field.state.meta.isTouched &&
                            !field.state.meta.isValid
                          }
                          placeholder="https://github.com/you/project"
                          className="h-11 rounded-xl border-secondary/15 bg-background pr-3 pl-10 text-secondary shadow-none placeholder:text-secondary/40 focus-visible:border-brand-orange focus-visible:ring-brand-orange/25"
                        />
                      </div>
                      <AnimatePresence>
                        {field.state.meta.isTouched &&
                        !field.state.meta.isValid ? (
                          <motion.div
                            key={`${field.name}-error`}
                            {...errorMotion}
                            className="overflow-hidden"
                          >
                            <FieldError errors={field.state.meta.errors} />
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </Field>
                  </motion.div>
                )}
              </form.Field>

              <form.Field name="liveUrl">
                {(field) => (
                  <motion.div variants={itemVariants}>
                    <Field
                      data-invalid={
                        field.state.meta.isTouched && !field.state.meta.isValid
                      }
                    >
                      <FieldLabel
                        htmlFor={field.name}
                        className="font-heading font-bold text-secondary"
                      >
                        Live project URL
                      </FieldLabel>
                      <div className="relative">
                        <Globe2
                          aria-hidden="true"
                          className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-secondary/45"
                        />
                        <Input
                          id={field.name}
                          name={field.name}
                          type="url"
                          inputMode="url"
                          autoComplete="url"
                          value={field.state.value}
                          onChange={(event) =>
                            field.handleChange(event.target.value)
                          }
                          onBlur={field.handleBlur}
                          aria-invalid={
                            field.state.meta.isTouched &&
                            !field.state.meta.isValid
                          }
                          placeholder="https://your-project.example"
                          className="h-11 rounded-xl border-secondary/15 bg-background pr-3 pl-10 text-secondary shadow-none placeholder:text-secondary/40 focus-visible:border-brand-orange focus-visible:ring-brand-orange/25"
                        />
                      </div>
                      <AnimatePresence>
                        {field.state.meta.isTouched &&
                        !field.state.meta.isValid ? (
                          <motion.div
                            key={`${field.name}-error`}
                            {...errorMotion}
                            className="overflow-hidden"
                          >
                            <FieldError errors={field.state.meta.errors} />
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </Field>
                  </motion.div>
                )}
              </form.Field>
            </div>

            <form.Field name="description">
              {(field) => (
                <motion.div variants={itemVariants}>
                  <Field
                    data-invalid={
                      field.state.meta.isTouched && !field.state.meta.isValid
                    }
                  >
                    <div className="flex items-center justify-between gap-3">
                      <FieldLabel
                        htmlFor={field.name}
                        className="font-heading font-bold text-secondary"
                      >
                        Project description
                      </FieldLabel>
                      <span className="text-xs text-secondary/50">
                        {field.state.value.length}/1000
                      </span>
                    </div>
                    <Textarea
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(event) =>
                        field.handleChange(event.target.value)
                      }
                      onBlur={field.handleBlur}
                      aria-invalid={
                        field.state.meta.isTouched && !field.state.meta.isValid
                      }
                      maxLength={1000}
                      rows={6}
                      placeholder="Describe what your project does, who it helps, and any important features..."
                      className="min-h-36 resize-y rounded-xl border-secondary/15 bg-background px-3.5 py-3 text-secondary shadow-none placeholder:text-secondary/40 focus-visible:border-brand-orange focus-visible:ring-brand-orange/25"
                    />
                    <AnimatePresence>
                      {field.state.meta.isTouched &&
                      !field.state.meta.isValid ? (
                        <motion.div
                          key={`${field.name}-error`}
                          {...errorMotion}
                          className="overflow-hidden"
                        >
                          <FieldError errors={field.state.meta.errors} />
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </Field>
                </motion.div>
              )}
            </form.Field>

            <motion.div
              variants={itemVariants}
              className="flex flex-col-reverse gap-3 border-t border-secondary/10 pt-5 sm:flex-row sm:justify-between"
            >
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-xl border-secondary/15 px-4 font-heading font-bold text-secondary"
              >
                <Link href="/dashboard/my-projects">
                  <ArrowLeft aria-hidden="true" />
                  Back to my projects
                </Link>
              </Button>
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
                      Submitting project
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      {...labelSwapMotion}
                      className="inline-flex items-center gap-2"
                    >
                      Submit project
                      <ArrowRight
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover/button:translate-x-1"
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </FieldGroup>
        </motion.form>
      </motion.div>
    </MotionConfig>
  );
}
