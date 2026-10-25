import CreateProjectForm from "@/components/form/create-project-from";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create project · ProjectDesk",
};

export default function ProjectCreatePage() {
    return (
        <div className="flex flex-col gap-5 sm:gap-6">
            {/* Page header */}
            <div className="flex flex-col gap-3 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-300 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0">
                    <h1 className="mt-2.5 font-heading text-2xl font-extrabold tracking-tight text-balance text-secondary sm:text-[28px] sm:leading-[1.15]">
                        Create project
                    </h1>
                </div>
            </div>

            <CreateProjectForm />
        </div>
    );
}
