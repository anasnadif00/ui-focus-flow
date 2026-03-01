export type TimeBlockStatus = "SCHEDULED" | "RUNNING" | "COMPLETED" | "SKIPPED";

export interface TimeBlock {
  id: string;
  userId: string;
  title: string;
  category?: string;
  durationMinutes: number;
  breakCount?: number;
  breakDuration?: number;
  scheduledStart?: string;
  scheduledEnd?: string;
  actualStart?: string;
  actualEnd?: string;
  status: TimeBlockStatus;
  optimistic?: boolean;
}
