const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

interface RequestOptions extends RequestInit {
    params?: Record<string, string>;
}

class ApiClient {
    private async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
        const { params, ...init } = options;

        let url = `${BASE_URL}${endpoint}`;
        if (params) {
            const searchParams = new URLSearchParams(params);
            url += `?${searchParams.toString()}`;
        }

        const headers = {
            "Content-Type": "application/json",
            ...init.headers,
        };

        // TODO: Add Auth Token Interceptor here
        // const token = getToken();
        // if (token) {
        //   headers['Authorization'] = `Bearer ${token}`;
        // }

        const response = await fetch(url, {
            ...init,
            headers,
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.message || "API Request Failed");
        }

        return response.json();
    }

    get<T>(endpoint: string, params?: Record<string, string>) {
        return this.request<T>(endpoint, { method: "GET", params });
    }

    post<T>(endpoint: string, body: any) {
        return this.request<T>(endpoint, { method: "POST", body: JSON.stringify(body) });
    }

    put<T>(endpoint: string, body: any) {
        return this.request<T>(endpoint, { method: "PUT", body: JSON.stringify(body) });
    }

    delete<T>(endpoint: string) {
        return this.request<T>(endpoint, { method: "DELETE" });
    }
}

export const apiClient = new ApiClient();
