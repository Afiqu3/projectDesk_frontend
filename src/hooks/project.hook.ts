import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createProject,
  getAllMyProjects,
  getAllProjects,
  reviewProject,
} from "@/api";
import type { MyProjectsParams, ReviewedProjectPayload } from "@/types";

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

export const useGetAllProject = (params: MyProjectsParams) => {
  return useQuery({
    queryKey: ["projects", params],
    queryFn: () => getAllProjects(params),
  });
};

export const useReviewProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      payload,
      id,
    }: {
      payload: ReviewedProjectPayload;
      id: string;
    }) => reviewProject(payload, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
    },
  });
};
