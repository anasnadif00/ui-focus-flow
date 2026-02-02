import type { TimeBlock } from "../types/TimeBlock";

const BASE = "http://localhost:8080";

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json();
}

export async function listTimeBlocks(userId: string): Promise<TimeBlock[]> {
  const res = await fetch(
    `${BASE}/api/blocks?userId=${encodeURIComponent(userId)}`
  );
  return handleResponse<TimeBlock[]>(res);
}

export async function createTimeBlock(
  userId: string,
  title: string,
  durationMinutes: number
): Promise<TimeBlock> {
  const res = await fetch(
    `${BASE}/api/blocks?userId=${encodeURIComponent(
      userId
    )}&title=${encodeURIComponent(title)}&durationMinutes=${durationMinutes}`,
    {
      method: "POST",
    }
  );

  return handleResponse<TimeBlock>(res);
}

export async function startTimeBlock(
  id: string,
  userId: string
): Promise<void> {
  const res = await fetch(
    `${BASE}/api/blocks/${encodeURIComponent(
      id
    )}/start?userId=${encodeURIComponent(userId)}`,
    {
      method: "POST",
    }
  );
  if (!res.ok) throw new Error(await res.text());
}

export async function completeTimeBlock(
  id: string,
  userId: string
): Promise<void> {
  const res = await fetch(
    `${BASE}/api/blocks/${encodeURIComponent(
      id
    )}/complete?userId=${encodeURIComponent(userId)}`,
    {
      method: "POST",
    }
  );
  if (!res.ok) throw new Error(await res.text());
}

export async function deleteTimeBlock(id: string): Promise<void> {
  const res = await fetch(`${BASE}/api/blocks/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Delete failed: ${res.status}`);
  }
}
