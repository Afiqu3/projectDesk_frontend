import apiClient from "@/lib/apiClient";
import type { ApiResponse, User } from "@/types";
import type { LoginPayload, RegisterStudentPayload } from "@/types/auth.type";

export const userLogin = (payload: LoginPayload) => {
    return apiClient("/auth/login", { method: "POST", body: payload });
};

export const userRegistration = (payload: RegisterStudentPayload) => {
    return apiClient("/auth/register", { method: "POST", body: payload });
};
export const userLogout = () => {
    return apiClient("/auth/logout", { method: "POST" });
};

export const getMe = () => {
    return apiClient<ApiResponse<User>>("/auth/me");
};
