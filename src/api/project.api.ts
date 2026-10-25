import apiClient from "@/lib/apiClient";
import type {
    ApiResponse,
    CreatedProjectPayload,
    MyProjectsParams,
    Project,
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
