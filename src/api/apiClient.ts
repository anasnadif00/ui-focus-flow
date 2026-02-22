import axios from "axios";

/**
 * Pre-configured axios instance for all API calls.
 *
 * - Base URL is set once here (single source of truth)
 * - Auth token is attached via interceptor (set up by <AuthProvider>)
 * - Responses are unwrapped to return `response.data` directly
 *
 * Usage in API files:
 *   import api from "./apiClient";
 *   const blocks = await api.get<TimeBlock[]>("/blocks");
 */
const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: { "Content-Type": "application/json" },
});

// ─── Auth Interceptor ────────────────────────────────────────────
// The getToken function is injected at runtime by the AuthProvider
// via `setAuthTokenProvider`. This way, API files don't need hooks
// and can remain plain modules (no React dependency).

let _getToken: (() => Promise<string | null>) | null = null;

/**
 * Called once from the AuthProvider to wire up the Clerk token.
 * After this, every request automatically gets an Authorization header.
 */
export function setAuthTokenProvider(fn: () => Promise<string | null>) {
  _getToken = fn;
}

api.interceptors.request.use(async (config) => {
  if (_getToken) {
    try {
      const token = await _getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (err) {
      console.error("Failed to get auth token:", err);
      // Let the request proceed without token — backend will return 401
    }
  }
  return config;
});

// ─── Response Interceptor ────────────────────────────────────────
// Centralizes error handling so individual API calls stay clean.

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized — token may be expired or missing.");
      // Could redirect to login here if needed
    }
    return Promise.reject(error);
  }
);

export default api;
