export type ProjectStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface CreatedProjectPayload {
    name: string;
    repoUrl: string;
    liveUrl: string;
    description: string;
}

export interface Project {
    id: string;
    name: string;
    repoUrl: string;
    liveUrl: string;
    description: string;
    status: ProjectStatus;
    reviewNote?: string;
    createdAt: string;
}

export interface MyProjectsParams {
    status?: ProjectStatus;
    page?: number; // defaults to 1
    limit?: number; // defaults to 10
    searchTerm?: string;
    sortOrder?: "desc" | "asc";
}

export interface ReviewedProjectPayload {
    status: ProjectStatus;
    reviewNote: string | null;
}
