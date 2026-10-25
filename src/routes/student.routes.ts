import type { SidebarItem, SidebarItems } from "@/types";
import { LayoutDashboard, Package, Plus, UserRound } from "lucide-react";

const prefix = "/dashboard";

/** The orange button at the top of the student sidebar. */
export const studentQuickAction: SidebarItem = {
    title: "New Project",
    url: `${prefix}/projects/new`,
    icon: Plus,
};

export const studentRoutes: SidebarItems = [
    {
        items: [{ title: "Dashboard", url: `${prefix}/my-projects`, icon: LayoutDashboard }],
    },
    {
        title: "Operations",
        items: [
            {
                title: "My projects",
                url: `${prefix}/my-projects`,
                icon: Package,
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
