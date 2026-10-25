import type { SidebarItems } from "@/types";
import { FolderKanban, LayoutDashboard, UserRound } from "lucide-react";

const prefix = "/admin-dashboard";

export const adminRoutes: SidebarItems = [
    {
        items: [{ title: "Dashboard", url: prefix, icon: LayoutDashboard }],
    },
    {
        title: "Operations",
        items: [
            { title: "Projects", url: `${prefix}/projects`, icon: FolderKanban },
        ],
    },
    {
        title: "Account",
        items: [
            { title: "Profile", url: `${prefix}/profile`, icon: UserRound },
        ],
    },
];
