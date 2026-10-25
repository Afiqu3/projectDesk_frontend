import type { Metadata } from "next";
import Stats from "@/components/modules/admin-dashboard/stats/Stats";

export const metadata: Metadata = {
  title: "Admin dashboard · ProjectDesk",
};

export default function AdminDashboardPage() {
  return <Stats />;
}
