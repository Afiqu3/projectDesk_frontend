import type { ProjectStatus } from "@/types";
import { formatBackendDate } from "@/utils";

export const PROJECT_STATUS_ORDER: ProjectStatus[] = [
    "PENDING",
    "APPROVED",
    "REJECTED",
];

type StatusTone = "brand" | "amber" | "destructive";

export const PROJECT_STATUS_META: Record<
    ProjectStatus,
    { label: string; short: string; tone: StatusTone }
> = {
    PENDING: { label: "Pending", short: "Pending", tone: "brand" },
    APPROVED: { label: "Approved", short: "Approved", tone: "amber" },
    REJECTED: { label: "Rejected", short: "Rejected", tone: "destructive" },
};

const tonePill: Record<StatusTone, string> = {
    brand: "bg-brand/8 text-brand ring-brand/15",
    amber: "bg-amber-500/10 text-amber-800 ring-amber-600/25",
    destructive: "bg-destructive/10 text-destructive ring-destructive/20",
};

const toneDot: Record<StatusTone, string> = {
    brand: "bg-brand",
    amber: "bg-amber-500",
    destructive: "bg-destructive",
};

export function statusPill(status: ProjectStatus) {
    return `inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-heading text-[11px] font-bold tracking-wide uppercase ring-1 ring-inset ${tonePill[PROJECT_STATUS_META[status].tone]}`;
}

export function statusDot(status: ProjectStatus) {
    return `size-1.5 rounded-full ${toneDot[PROJECT_STATUS_META[status].tone]}`;
}

export function formatProjectDate(iso: string | undefined) {
    return formatBackendDate(iso);
}
