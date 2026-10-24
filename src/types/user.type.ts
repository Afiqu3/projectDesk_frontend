export type UserRole =  "ADMIN" | "STUDENT";

export type UserStatus = "ACTIVE" | "BLOCKED";

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    isDeleted: boolean;
    deletedAt: null | string;
    createdAt: string;
    updatedAt: string;
}
