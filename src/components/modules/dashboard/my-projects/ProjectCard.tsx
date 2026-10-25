import { ClipboardCheck, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";
import {
  formatProjectDate,
  PROJECT_STATUS_META,
  statusDot,
  statusPill,
} from "./project-status";

export default function ProjectCard({
  project,
  index,
  onView,
  onReview,
}: {
  project: Project;
  index: number;
  onView: (projectId: string) => void;
  onReview?: (project: Project) => void;
}) {
  return (
    <article
      aria-label={`project ${project.id}`}
      className="flex min-w-0 flex-col rounded-2xl bg-card p-4 ring-1 ring-secondary/10 transition-[box-shadow,transform] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-300 motion-safe:fill-mode-backwards hover:shadow-[0_20px_40px_-28px_rgba(15,32,86,0.5)] sm:p-5"
      style={{ animationDelay: `${Math.min(index, 7) * 50}ms` }}
    >
      {/* Status + category */}
      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
        <span className={statusPill(project.status)}>
          <span aria-hidden className={statusDot(project.status)} />
          {PROJECT_STATUS_META[project.status].label}
        </span>
      </div>

      {/* Route */}
      <p className="mt-3 flex min-w-0 items-start gap-1.5 text-[13px] text-secondary/70">
        <span className="min-w-0">
          <span className="block truncate font-semibold text-secondary">
            {project.name}
          </span>
          <span className="block truncate">
            {formatProjectDate(project.createdAt)}
          </span>
        </span>
      </p>

      {/* Charge + date */}
      <div className="mt-3 flex flex-wrap items-center justify-end gap-2 border-t border-secondary/8 pt-3">
        {onReview && project.status === "PENDING" ? (
          <Button
            type="button"
            onClick={() => onReview(project)}
            className="h-9 rounded-xl bg-brand-orange px-3 font-heading text-xs font-bold text-brand-ink transition hover:brightness-110 focus-visible:ring-brand-orange/40"
          >
            <ClipboardCheck aria-hidden="true" className="size-4" />
            Review
          </Button>
        ) : null}
        <Button
          type="button"
          variant="outline"
          onClick={() => onView(project.id)}
          className="h-9 shrink-0 rounded-xl border-secondary/15 px-3 font-heading text-xs font-bold text-secondary hover:bg-brand hover:text-white hover:ring-brand"
        >
          <Eye aria-hidden="true" className="size-4" />
          View details
        </Button>
      </div>
    </article>
  );
}
