import { useState } from "react";
import { createTimeBlock } from "../../api/timeBlocksApi";
import type { TimeBlock } from "../../types/TimeBlock";

interface Props {
  userId: string;
  onCreated: (block?: TimeBlock | null, tempId?: string) => void;
}

export default function CreateTimeBlockForm({ userId, onCreated }: Props) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState<number>(25);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle || loading) return;

    const tempId = `tmp-${Date.now()}`;

    const optimisticBlock: TimeBlock = {
      id: tempId,
      userId: userId,
      title: trimmedTitle,
      durationMinutes: duration,
      status: "SCHEDULED",
      optimistic: true,
    };

    // 1️⃣ optimistic UI update
    onCreated(optimisticBlock);

    // reset form immediately
    setTitle("");
    setDuration(25);
    setLoading(true);

    try {
      // 2️⃣ backend call
      const created = await createTimeBlock(userId, trimmedTitle, duration);

      // 3️⃣ replace temp block with real one
      onCreated(created, tempId);
    } catch (err) {
      console.error(err);

      // rollback optimistic insert
      onCreated(null, tempId);
      alert("Failed to create block");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      style={{ display: "flex", gap: 8, alignItems: "center" }}
    >
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={loading}
        style={{ padding: 8, minWidth: 200 }}
      />

      <input
        type="number"
        min={1}
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        disabled={loading}
        style={{ width: 80, padding: 8 }}
      />

      <button
        disabled={loading || !title.trim()}
        type="submit"
        style={{ padding: "8px 12px" }}
      >
        {loading ? "Creating…" : "Create"}
      </button>
    </form>
  );
}
