"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import type { ReactNode } from "react";
import QueryProvider from "./query.provider";
import ThemeProvider from "./theme.provider";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <QueryProvider>
                <TooltipProvider>{children}</TooltipProvider>
            </QueryProvider>
        </ThemeProvider>
    );
}
