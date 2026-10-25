import apiClient from "@/lib/apiClient";
import type { AdminStats, ApiResponse } from "@/types";

export const adminStats = async () => {
    return  apiClient<ApiResponse<AdminStats>>("/stats/admin");
}