import React from "react";

const BASE = "http://localhost:8080";

export async function login<T>(username: string, password: string): Promise<T> {
  const res = await fetch(
    `${BASE}/api/auth/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
    {
      method: "POST",
    },
  );
  return handleResponse(res);
}

export async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json();
}
