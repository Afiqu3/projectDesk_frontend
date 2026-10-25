import Projects from "@/components/modules/admin-dashboard/projects/Projects";
import { FolderKanban } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects · ProjectDesk",
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col gap-5 sm:gap-6">
            <div className="min-w-0 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-300">
                <p className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 font-heading text-[11px] font-bold tracking-[0.14em] text-white uppercase">
                    <FolderKanban
                        className="size-3.5 text-brand-orange"
                        strokeWidth={2.5}
                    />
                    Operations · Projects
                </p>
                <h1 className="mt-2.5 font-heading text-2xl font-extrabold tracking-tight text-balance text-secondary sm:text-[28px] sm:leading-[1.15]">
                    Projects
                </h1>
            </div>

            <Projects />
        </div>
    );
}
