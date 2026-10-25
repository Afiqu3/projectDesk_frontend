import { ProfilePage } from "@/components/modules/profile/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile · ParcelFlow",
    description: "Your admin identity — photo and contact details.",
};

export default function page() {
    return <ProfilePage />;
}
