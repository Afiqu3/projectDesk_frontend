"use client";

import {
  CalendarDays,
  CodeXml,
  ExternalLink,
  FileText,
  Globe2,
  type LucideIcon,
  MessageSquareText,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/types";
import {
  formatProjectDate,
  PROJECT_STATUS_META,
  statusDot,
  statusPill,
} from "./project-status";

type ProjectDetailsDialogProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectDetailsDialog({
  project,
  onClose,
}: ProjectDetailsDialogProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Dialog
      open={project !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      {project ? (
        <DialogContent className="grid max-h-[min(88dvh,48rem)] max-w-2xl grid-rows-[auto_minmax(0,1fr)] gap-0 overflow-hidden rounded-3xl border border-secondary/10 bg-card p-0 text-secondary shadow-2xl sm:max-w-2xl">
          <DialogHeader className="relative overflow-hidden border-b border-white/10 bg-brand px-5 py-5 pr-14 text-white sm:px-7 sm:py-6 sm:pr-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-12 size-48 rounded-full bg-brand-orange/15 blur-3xl"
            />
            <div className="relative flex flex-wrap items-center gap-2">
              <span
                className={`${statusPill(project.status)} ${
                  project.status === "PENDING"
                    ? "bg-white/10 text-brand-orange ring-white/15 dark:text-brand-orange"
                    : project.status === "APPROVED"
                      ? "dark:text-amber-300"
                      : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`${statusDot(project.status)} ${
                    project.status === "PENDING" ? "bg-brand-orange" : ""
                  }`}
                />
                {PROJECT_STATUS_META[project.status].label}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-white/70">
                <CalendarDays aria-hidden="true" className="size-3.5" />
                Submitted {formatProjectDate(project.createdAt)}
              </span>
            </div>
            <DialogTitle className="relative mt-3 max-w-xl wrap-break-word font-heading text-xl leading-tight font-extrabold tracking-tight text-white sm:text-2xl">
              {project.name}
            </DialogTitle>
            <DialogDescription className="relative text-sm text-white/70">
              Project details and review status
            </DialogDescription>
          </DialogHeader>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="min-h-0 overflow-y-auto overscroll-contain"
          >
            <div className="grid gap-5 p-5 sm:gap-6 sm:p-7">
              <section aria-labelledby="project-description-heading">
                <h3
                  id="project-description-heading"
                  className="flex items-center gap-2 font-heading text-sm font-bold text-secondary"
                >
                  <FileText
                    aria-hidden="true"
                    className="size-4 text-brand-orange-ink dark:text-brand-orange"
                  />
                  About this project
                </h3>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed wrap-break-word text-secondary/75">
                  {project.description}
                </p>
              </section>

              {project.reviewNote ? (
                <section
                  aria-labelledby="project-review-heading"
                  className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-4 sm:p-5"
                >
                  <h3
                    id="project-review-heading"
                    className="flex items-center gap-2 font-heading text-sm font-bold text-secondary"
                  >
                    <MessageSquareText
                      aria-hidden="true"
                      className="size-4 text-brand-orange-ink dark:text-brand-orange"
                    />
                    Review feedback
                  </h3>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed wrap-break-word text-secondary/75">
                    {project.reviewNote}
                  </p>
                </section>
              ) : null}

              <section aria-labelledby="project-links-heading">
                <h3
                  id="project-links-heading"
                  className="font-heading text-sm font-bold text-secondary"
                >
                  Project links
                </h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <ProjectLink
                    href={project.repoUrl}
                    label="Source code"
                    icon={CodeXml}
                  />
                  <ProjectLink
                    href={project.liveUrl}
                    label="Live project"
                    icon={Globe2}
                  />
                </div>
              </section>
            </div>
          </motion.div>
        </DialogContent>
      ) : null}
    </Dialog>
  );
}

function ProjectLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-w-0 items-center gap-3 rounded-2xl border border-secondary/10 bg-background p-3.5 text-secondary outline-none transition-[border-color,background-color,box-shadow] hover:border-brand-orange/40 hover:bg-brand-orange/5 focus-visible:ring-3 focus-visible:ring-brand-orange/40 sm:p-4"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/8 text-brand dark:bg-brand-orange/10 dark:text-brand-orange">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-semibold text-secondary/60">
          {label}
        </span>
        <span className="mt-0.5 block truncate text-sm font-semibold">
          {href}
        </span>
      </span>
      <ExternalLink
        aria-hidden="true"
        className="size-4 shrink-0 text-secondary/45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-orange"
      />
    </a>
  );
}
