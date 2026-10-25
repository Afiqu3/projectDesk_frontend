import type { LucideIcon } from "lucide-react";
import { UserRound } from "lucide-react";
import type { ReactNode } from "react";
import Profile from "./Profile";

type DashboardPageProps = {
    eyebrow: string;
    title: string;
    description?: string;
    icon: LucideIcon;
    actions?: ReactNode;
    children: ReactNode;
};

function DashboardPage({
    eyebrow,
    title,
    description,
    icon: Icon,
    actions,
    children,
}: DashboardPageProps) {
    return (
        <div className="flex flex-col gap-5 sm:gap-6">
            <div className="flex flex-col gap-3 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-300 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0">
                    <p className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 font-heading text-[11px] font-bold tracking-[0.14em] text-white uppercase">
                        <Icon
                            className="size-3.5 text-brand-orange"
                            strokeWidth={2.5}
                        />
                        {eyebrow}
                    </p>
                    <h1 className="mt-2.5 font-heading text-2xl font-extrabold tracking-tight text-balance text-secondary sm:text-[28px] sm:leading-[1.15]">
                        {title}
                    </h1>
                    {description ? (
                        <p className="mt-1.5 max-w-xl text-sm text-pretty text-secondary/70">
                            {description}
                        </p>
                    ) : null}
                </div>
                {actions}
            </div>
            {children}
        </div>
    );
}

export function ProfilePage() {
    return (
        <DashboardPage
            eyebrow="Account · Profile"
            title="Profile"
            icon={UserRound}
        >
            <Profile />
        </DashboardPage>
    );
}
