import { useEffect, useState, useCallback, useMemo } from "react";
import type { TimeBlock } from "../types/TimeBlock";
import {
  listTimeBlocks,
  startTimeBlock,
  completeTimeBlock,
  deleteTimeBlock,
  skipTimeBlock,
} from "../api/timeBlocksApi";
import { useAuth } from "./useAuth";

/**
 * Central hook for time-block state.
 * Every dashboard component shares this instead of fetching independently.
 */
export function useTimeBlocks() {
  const { user, isLoading: authLoading } = useAuth();
  const [blocks, setBlocks] = useState<TimeBlock[]>([]);
  const [loading, setLoading] = useState(false);

  // ── Fetch ────────────────────────────────────────────────────────
  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = await listTimeBlocks();
      setBlocks(data);
    } catch (err) {
      console.error("Failed to load blocks:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!authLoading && user) {
      refresh();
    }
  }, [authLoading, user, refresh]);

  // ── Actions ──────────────────────────────────────────────────────
  const handleStart = useCallback(
    async (id: string) => {
      try {
        await startTimeBlock(id);
        await refresh();
      } catch (err) {
        console.error("Failed to start block:", err);
      }
    },
    [refresh]
  );

  const handleComplete = useCallback(
    async (id: string) => {
      try {
        await completeTimeBlock(id);
        await refresh();
      } catch (err) {
        console.error("Failed to complete block:", err);
      }
    },
    [refresh]
  );

  const handleDelete = useCallback(
    async (id: string) => {
      // optimistic delete
      setBlocks((prev) => prev.filter((b) => b.id !== id));
      try {
        await deleteTimeBlock(id);
      } catch (err) {
        console.error("Delete failed, restoring:", err);
        await refresh();
      }
    },
    [refresh]
  );

  const handleSkip = useCallback(
    async (id: string) => {
      try {
        await skipTimeBlock(id);
        await refresh();
      } catch (err) {
        console.error("Failed to skip block:", err);
      }
    },
    [refresh]
  );

  // ── Derived data ─────────────────────────────────────────────────
  const activeBlock = useMemo(
    () => blocks.find((b) => b.status === "RUNNING") ?? null,
    [blocks]
  );

  const todayStart = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const todayBlocks = useMemo(
    () =>
      blocks.filter((b) => {
        // Blocks for today: scheduled for today or no scheduledStart
        if (!b.scheduledStart) return true;
        const blockDate = new Date(b.scheduledStart);
        return blockDate >= todayStart && blockDate < new Date(todayStart.getTime() + 86400000);
      }),
    [blocks, todayStart]
  );

  const tomorrowBlocks = useMemo(() => {
    const tomorrowStart = new Date(todayStart.getTime() + 86400000);
    const tomorrowEnd = new Date(tomorrowStart.getTime() + 86400000);
    return blocks.filter((b) => {
      if (!b.scheduledStart) return false;
      const blockDate = new Date(b.scheduledStart);
      return blockDate >= tomorrowStart && blockDate < tomorrowEnd;
    });
  }, [blocks, todayStart]);

  const completedToday = useMemo(
    () => todayBlocks.filter((b) => b.status === "COMPLETED"),
    [todayBlocks]
  );

  const totalPlannedMinutes = useMemo(
    () => todayBlocks.reduce((sum, b) => sum + b.durationMinutes, 0),
    [todayBlocks]
  );

  const totalCompletedMinutes = useMemo(
    () => completedToday.reduce((sum, b) => sum + b.durationMinutes, 0),
    [completedToday]
  );

  const recentCompleted = useMemo(
    () =>
      blocks
        .filter((b) => b.status === "COMPLETED")
        .sort((a, b) => {
          const aTime = a.actualEnd ? new Date(a.actualEnd).getTime() : 0;
          const bTime = b.actualEnd ? new Date(b.actualEnd).getTime() : 0;
          return bTime - aTime;
        })
        .slice(0, 4),
    [blocks]
  );

  return {
    blocks,
    loading,
    authLoading,
    user,
    refresh,

    // actions
    handleStart,
    handleComplete,
    handleDelete,
    handleSkip,

    // derived
    activeBlock,
    todayBlocks,
    tomorrowBlocks,
    completedToday,
    totalPlannedMinutes,
    totalCompletedMinutes,
    recentCompleted,
  };
}
