import type { SidebarItem, SidebarItems, UserRole } from "@/types";
import { adminRoutes } from "./admin.routes";
import { studentQuickAction, studentRoutes } from "./student.routes";

/** Where each role's dashboard lives. */
export const ROLE_HOME: Record<UserRole, string> = {
    ADMIN: "/admin-dashboard",
    STUDENT: "/dashboard/profile",
};

export const ROLE_LABEL: Record<UserRole, string> = {
    ADMIN: "Admin",
    STUDENT: "Merchant",
};

export const SIDEBAR_ROUTES: Record<UserRole, SidebarItems> = {
    ADMIN: adminRoutes,
    STUDENT: studentRoutes,
};

/** Optional primary action pinned above a role's navigation. */
export const QUICK_ACTIONS: Partial<Record<UserRole, SidebarItem>> = {
    STUDENT: studentQuickAction,
};
