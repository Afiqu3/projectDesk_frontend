"use client";

import { ROUTES } from "@/constants";
import { useGetMe } from "@/hooks";
import { usePathname, useRouter } from "next/navigation";
import { type ReactNode, useEffect } from "react";
import AuthLoading from "./AuthLoading";

const AUTH_ROUTES: string[] = [ROUTES.login, ROUTES.register];

export default function PublicGuard({ children }: { children: ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    const { data, isPending, isError } = useGetMe();

    useEffect(() => {
        if (isPending) return;

        if (data && AUTH_ROUTES.includes(pathname)) {
            if (data.role === "STUDENT") {
                router.push(ROUTES.studentDashboard);
            } else if (data.role === "ADMIN") {
                router.push(ROUTES.adminDashboard);
            }
        }
    }, [data, isPending, pathname, router]);

    if (isPending) {
        return <AuthLoading />;
    }

    if (isError) {
        return <>{children}</>;
    }

    return <>{children}</>;
}
