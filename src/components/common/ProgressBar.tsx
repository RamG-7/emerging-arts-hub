import * as React from "react";

export const ProgressBar = ({ value }: { value: number }) => {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full h-3 rounded-full bg-secondary/60 overflow-hidden">
      <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
    </div>
  );
};
