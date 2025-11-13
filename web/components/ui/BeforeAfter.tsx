"use client";
import { useState } from "react";

export default function BeforeAfter({
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-[url('/next.svg')] bg-center bg-cover" aria-label={beforeLabel} />
        <div
          className="absolute inset-0 bg-[url('/vercel.svg')] bg-center bg-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          aria-label={afterLabel}
        />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(parseInt(e.target.value))}
        aria-label="Before after slider"
        className="mt-3 w-full"
      />
    </div>
  );
}

