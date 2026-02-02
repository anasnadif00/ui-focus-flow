export type TimeBlockStatus = "SCHEDULED" | "RUNNING" | "COMPLETED" | "SKIPPED";

export interface TimeBlock {
  id: string;
  userId: string;
  title: string;
  durationMinutes: number;
  status: TimeBlockStatus;
  optimistic?: boolean;
}
