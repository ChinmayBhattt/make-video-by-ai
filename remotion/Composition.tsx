import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const MyComp: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const scale = interpolate(frame, [0, 30], [0.8, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0f172a",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          fontSize: 72,
          fontWeight: 800,
          color: "#38bdf8",
          letterSpacing: "-0.02em",
        }}
      >
        Remotion Test Successful
      </div>
      <div
        style={{
          opacity,
          fontSize: 28,
          color: "#94a3b8",
          marginTop: 16,
        }}
      >
        Frame {frame} / 60 (30 fps)
      </div>
    </AbsoluteFill>
  );
};

