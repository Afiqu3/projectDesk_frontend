import type { SidebarItem, SidebarItems } from "@/types";
import { FolderKanban, Plus, UserRound } from "lucide-react";

const prefix = "/dashboard";

/** The orange button at the top of the student sidebar. */
export const studentQuickAction: SidebarItem = {
    title: "New Project",
    url: `${prefix}/my-projects/new`,
    icon: Plus,
};

export const studentRoutes: SidebarItems = [
    {
        title: "Operations",
        items: [
            {
                title: "My projects",
                url: `${prefix}/my-projects`,
                icon: FolderKanban,
            },
        ],
    },
    {
        title: "Account",
        items: [
            { title: "Profile", url: `${prefix}/profile`, icon: UserRound },
        ],
    },
];
