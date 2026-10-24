import Header from "@/components/layout/public/Header";
import { MotionProvider } from "@/components/modules/landing/motion";
import type { ReactNode } from "react";

export default function MarketingLayout({ children }: { children: ReactNode }) {
    return (
        <MotionProvider>
            <div className="flex min-h-screen flex-col font-sans">
                <Header />
                <main className="flex-1">{children}</main>
            </div>
        </MotionProvider>
    );
}
