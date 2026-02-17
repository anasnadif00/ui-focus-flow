import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const authApi = {
  login: (username: string, password: string) =>
    axios.post(
      `${API_BASE_URL}/api/auth/login`,
      { username, password },
      { withCredentials: true },
    ),

  register: (username: string, password: string) =>
    axios.post(
      `${API_BASE_URL}/api/auth/register`,
      { username, password },
      { withCredentials: true },
    ),

  getCurrentUser: () =>
    axios.get(`${API_BASE_URL}/api/auth/me`, {
      withCredentials: true,
    }),

  logout: () =>
    axios.post(
      `${API_BASE_URL}/api/auth/logout`,
      {},
      { withCredentials: true },
    ),
};
