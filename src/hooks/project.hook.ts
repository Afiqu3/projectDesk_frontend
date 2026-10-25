import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProject, getAllMyProjects } from "@/api";
import type { MyProjectsParams } from "@/types";

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
    },
  });
};

export const useGetAllMyProject = (params: MyProjectsParams) => {
  return useQuery({
    queryKey: ["my-projects", params],
    queryFn: () => getAllMyProjects(params),
  });
};
