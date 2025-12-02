import { apiClient } from "./core";
import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"), // Or username if you support both
    password: z.string().min(6, "Password must be at least 6 characters"),
    rememberMe: z.boolean().optional(),
});

export type LoginRequest = z.infer<typeof loginSchema>;

export interface AuthResponse {
    token: string;
    user: {
        id: string;
        email: string;
        name: string;
    };
}

export const authApi = {
    login: (data: LoginRequest) => apiClient.post<AuthResponse>("/auth/login", data),
    register: (data: any) => apiClient.post<AuthResponse>("/auth/register", data),
    logout: () => apiClient.post("/auth/logout", {}),
    me: () => apiClient.get("/auth/me"),
};
