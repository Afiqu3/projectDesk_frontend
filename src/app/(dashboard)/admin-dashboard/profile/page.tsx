import { ProfilePage } from "@/components/modules/profile/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile · ProjectDesk",
    description: "Your identity",
};

export default function page() {
    return <ProfilePage />;
}
