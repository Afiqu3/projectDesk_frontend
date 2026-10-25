"use client";

import { ROUTES } from "@/constants";
import { useGetMe } from "@/hooks";
import { usePathname, useRouter } from "next/navigation";
import { type ReactNode, useEffect, useState } from "react";
import AuthLoading from "./AuthLoading";

export default function AuthGuard({ children }: { children: ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    const { data: user, isPending, isError, refetch, isFetching } = useGetMe();
    // Network blips get exactly one silent retry before we give up.
    const [retried, setRetried] = useState(false);

    useEffect(() => {
        if (isPending || isFetching) {
            return;
        }

        if (isError && !retried) {
            setRetried(true);
            refetch();
            return;
        }

        if (!user) {
            router.replace(
                `${ROUTES.login}?next=${encodeURIComponent(pathname)}`,
            );
            return;
        }
    }, [
        isPending,
        isFetching,
        isError,
        retried,
        user,
        pathname,
        router,
        refetch,
    ]);

    if (isPending || (isError && !retried)) {
        return <AuthLoading />;
    }

    if (!user) {
        return <AuthLoading />;
    }

    return <>{children}</>;
}
