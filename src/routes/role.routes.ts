import type { UserRole } from "@/types";

/** Where each role's dashboard lives. */
export const ROLE_HOME: Record<UserRole, string> = {
    ADMIN: "/admin-dashboard",
    STUDENT: "/dashboard",
};

export const ROLE_LABEL: Record<UserRole, string> = {
    ADMIN: "Admin",
    STUDENT: "Merchant",
};

// export const SIDEBAR_ROUTES: Record<UserRole, SidebarItems> = {
//     ADMIN: adminRoutes,
//     STUDENT: merchantRoutes,
// };

// /** Optional primary action pinned above a role's navigation. */
// export const QUICK_ACTIONS: Partial<Record<UserRole, SidebarItem>> = {
//     STUDENT: merchantQuickAction,
// };
