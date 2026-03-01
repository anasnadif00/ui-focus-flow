import type { TimeBlock } from "../types/TimeBlock";
import api from "./apiClient";

/**
 * Time-block API layer.
 *
 * All auth is handled automatically by the apiClient interceptor —
 * no need to pass userId or tokens here. The backend reads the
 * authenticated user from the JWT.
 */

export async function listTimeBlocks(): Promise<TimeBlock[]> {
  const { data } = await api.get<TimeBlock[]>("/blocks");
  return data;
}

export async function createTimeBlock(
  payload: {
    title: string;
    category?: string;
    durationMinutes: number;
    breakCount?: number;
    breakDuration?: number;
    scheduledStart?: string;
  }
): Promise<TimeBlock> {
  const { data } = await api.post<TimeBlock>("/blocks", payload);
  return data;
}

export async function startTimeBlock(id: string): Promise<void> {
  await api.post(`/blocks/${encodeURIComponent(id)}/start`);
}

export async function completeTimeBlock(id: string): Promise<void> {
  await api.post(`/blocks/${encodeURIComponent(id)}/complete`);
}

export async function deleteTimeBlock(id: string): Promise<void> {
  await api.delete(`/blocks/${encodeURIComponent(id)}`);
}

export async function skipTimeBlock(id: string): Promise<void> {
  await api.post(`/blocks/${encodeURIComponent(id)}/skip`);
}

export async function updateTimeBlock(
  id: string,
  payload: {
    title: string;
    category?: string;
    durationMinutes: number;
    breakCount?: number;
    breakDuration?: number;
    scheduledStart?: string;
  }
): Promise<void> {
  await api.put(`/blocks/${encodeURIComponent(id)}`, payload);
}
