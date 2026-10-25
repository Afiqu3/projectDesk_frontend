import { useQuery } from "@tanstack/react-query";
import { adminStats } from "@/api";

export const useAdminStats = () =>
  useQuery({
    queryKey: ["stats", "admin"],
    queryFn: async () => {
      const response = await adminStats();
      return response.data;
    },
  });
