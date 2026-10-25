import apiClient from "@/lib/apiClient";
import type {
    ApiResponse,
    CreatedProjectPayload,
    MyProjectsParams,
    Project,
    ReviewedProjectPayload,
} from "@/types";

export const createProject = (payload: CreatedProjectPayload) => {
    return apiClient("/project", {
        method: "POST",
        body: payload,
    });
};

export const getAllMyProjects = async (params: MyProjectsParams) => {
    const res = await apiClient<ApiResponse<Project[]>>(
        "/project/my-projects",
        {
            params,
        },
    );
    return {
        ...res,
        data: res.data,
    };
};

export const getAllProjects = async (params: MyProjectsParams) => {
    const res = await apiClient<ApiResponse<Project[]>>("/project", {
        params,
    });
    return {
        ...res,
        data: res.data,
    };
};

export const reviewProject = (payload: ReviewedProjectPayload, id: string) => {
    return apiClient(`/project/${id}/review`, {
        method: "PATCH",
        body: payload,
    });
};
