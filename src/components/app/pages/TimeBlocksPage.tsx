import { useEffect, useState, useCallback } from "react";
import type { TimeBlock } from "../../../types/TimeBlock";
import {
  listTimeBlocks,
  startTimeBlock,
  completeTimeBlock,
  deleteTimeBlock,
} from "../../../api/timeBlocksApi";
import CreateTimeBlockForm from "../CreateTimeBlockForm";
import { useAuth } from "../../../hooks/useAuth";

export default function TimeBlocksPage() {
  const { user, isLoading: authLoading } = useAuth();
  const [blocks, setBlocks] = useState<TimeBlock[]>([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await listTimeBlocks();
      setBlocks(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load time blocks");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!authLoading && user) {
      load();
    }
  }, [authLoading, user, load]);

  const handleStart = async (id: string) => {
    try {
      await startTimeBlock(id);
      await load();
    } catch (err) {
      console.error(err);
      alert("Failed to start block");
    }
  };

  const handleComplete = async (id: string) => {
    try {
      await completeTimeBlock(id);
      await load();
    } catch (err) {
      console.error(err);
      alert("Failed to complete block");
    }
  };

  const handleDelete = async (id: string) => {
    // optimistic delete
    setBlocks((prev) => prev.filter((b) => b.id !== id));

    try {
      await deleteTimeBlock(id);
    } catch (err) {
      console.error(err);
      alert("Delete failed, restoring");

      // rollback
      await load();
    }
  };

  if (authLoading) {
    return <div style={{ padding: 20 }}>Loading authentication…</div>;
  }

  if (!user) {
    return (
      <div style={{ padding: 20 }}>Please sign in to view your time blocks.</div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Time Blocks</h1>

      <div style={{ marginBottom: 16 }}>
        <CreateTimeBlockForm onCreated={load} />
      </div>

      {loading ? (
        <div>Loading…</div>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, maxWidth: 760 }}>
          {blocks.map((b) => (
            <li
              key={b.id}
              style={{
                padding: 12,
                borderBottom: "1px solid #eee",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{b.title}</div>
                <div style={{ color: "#555", fontSize: 13 }}>
                  {b.durationMinutes} min • {b.status}
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {b.status === "SCHEDULED" && (
                  <button
                    onClick={() => handleStart(b.id)}
                    style={{ padding: "6px 10px" }}
                  >
                    Start
                  </button>
                )}
                {b.status === "SCHEDULED" && (
                  <button
                    onClick={() => handleDelete(b.id)}
                    style={{
                      padding: "6px 10px",
                      color: "red",
                      background: "transparent",
                      border: "none",
                    }}
                  >
                    x
                  </button>
                )}
                {b.status === "RUNNING" && (
                  <button
                    onClick={() => handleComplete(b.id)}
                    style={{ padding: "6px 10px" }}
                  >
                    Complete
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
