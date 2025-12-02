import { apiClient } from "./core";

export const api = {
    apps: {
        list: () => apiClient.get("/apps"),
        create: (data: any) => apiClient.post("/apps", data),
        get: (id: string) => apiClient.get(`/apps/${id}`),
        update: (id: string, data: any) => apiClient.put(`/apps/${id}`, data),
        delete: (id: string) => apiClient.delete(`/apps/${id}`),
    },
    datasets: {
        list: () => apiClient.get("/datasets"),
        create: (data: any) => apiClient.post("/datasets", data),
    },
    // Add other modules here
};
