import React from "react";
import {
  AbsoluteFill,
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
  interpolate,
  Img
} from "remotion";

interface SubtitleBeat {
  start: number;
  end: number;
  lines: { text: string; color?: string }[];
}

const subtitleBeats: SubtitleBeat[] = [
  {
    start: 0,
    end: 153,
    lines: [
      { text: "IF YOU WANT TO " },
      { text: "STAY POOR,", color: "#ef4444" },
      { text: " KEEP WATCHING THE NEWS." }
    ]
  },
  {
    start: 154,
    end: 324,
    lines: [
      { text: "NEWS IS " },
      { text: "PROPAGANDA", color: "#facc15" }
    ]
  },
  {
    start: 325,
    end: 504,
    lines: [
      { text: "SIMPLY THERE TO KEEP YOU " },
      { text: "ARGUING", color: "#facc15" },
      { text: " ABOUT THE SAME OLD SH*T." }
    ]
  },
  {
    start: 505,
    end: 705,
    lines: [
      { text: "WHY DO YOU CARE ABOUT " },
      { text: "QATAR", color: "#38bdf8" },
      { text: " AND THEIR LAWS?" }
    ]
  },
  {
    start: 706,
    end: 868,
    lines: [
      { text: "YOUR MOTHER " },
      { text: "STILL WORKS,", color: "#38bdf8" },
      { text: " SHE'S NOT RETIRED." }
    ]
  },
  {
    start: 869,
    end: 1027,
    lines: [
      { text: "SHE SHOULD BE ENJOYING HER " },
      { text: "LAST FEW DECADES", color: "#facc15" },
      { text: " ON THIS EARTH." }
    ]
  },
  {
    start: 1028,
    end: 1209,
    lines: [
      { text: "AND INSTEAD YOU SIT THERE AND WRITE " },
      { text: "STUPID TWEETS", color: "#ef4444" },
      { text: " ABOUT QATAR" }
    ]
  },
  {
    start: 1210,
    end: 1410,
    lines: [
      { text: "AND ALL OF THESE " },
      { text: "GEOPOLITICAL ISSUES...", color: "#94a3b8" }
    ]
  },
  {
    start: 1411,
    end: 1617,
    lines: [
      { text: "SHUT THE F*CK UP, ", color: "#ef4444" },
      { text: "SHAME ON YOU, " },
      { text: "KING, WAKE UP!", color: "#facc15" }
    ]
  },
  {
    start: 1618,
    end: 1706,
    lines: [
      { text: "YOU HAVE " },
      { text: "REAL WORK", color: "#22c55e" },
      { text: " TO DO." }
    ]
  }
];

export const ImanEditComp: React.FC = () => {
  const frame = useCurrentFrame();

  // B-Roll card selection
  let currentCard = "broll/card1_breaking_news.png";
  if (frame >= 154 && frame <= 504) {
    currentCard = "broll/card2_propaganda.png";
  } else if (frame > 504 && frame <= 705) {
    currentCard = "broll/card3_qatar_laws.png";
  } else if (frame > 705 && frame <= 1027) {
    currentCard = "broll/card4_mother_retire.png";
  } else if (frame > 1027 && frame <= 1209) {
    currentCard = "broll/card5_angry_tweets.png";
  } else if (frame > 1209) {
    currentCard = "broll/card6_wake_up_king.png";
  }

  // Active Subtitle
  const activeSub = subtitleBeats.find(s => frame >= s.start && frame <= s.end);

  // Dynamic A-Roll Zoom pulses
  let zoomScale = 1.0;
  if (frame >= 706 && frame <= 868) {
    // "Your mother still works" punch-in
    zoomScale = 1.12;
  } else if (frame >= 1411 && frame <= 1617) {
    // "Shut the f*ck up, king, wake up" punch-in
    zoomScale = 1.15;
  } else if (frame >= 1618) {
    zoomScale = 1.08;
  }

  // Card entrance bounce/opacity on change
  const cardRelFrame = frame % 150;
  const cardScale = interpolate(cardRelFrame, [0, 8], [0.97, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#05070a",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        overflow: "hidden"
      }}
    >
      {/* 1. TOP HALF: Dynamic B-Roll Cards (0 - 960px) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 960,
          overflow: "hidden",
          backgroundColor: "#000"
        }}
      >
        <Img
          src={staticFile(currentCard)}
          style={{
            width: 1080,
            height: 960,
            objectFit: "cover",
            transform: `scale(${cardScale})`
          }}
        />
        {/* Subtle vignette border at top */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 80,
            background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
          }}
        />
      </div>

      {/* 2. SPLIT DIVIDER SEAM LINE (at y = 960px) */}
      <div
        style={{
          position: "absolute",
          top: 958,
          left: 0,
          width: 1080,
          height: 4,
          backgroundColor: "rgba(255, 255, 255, 0.18)",
          zIndex: 20,
          boxShadow: "0 0 16px rgba(255, 255, 255, 0.2)"
        }}
      />

      {/* 3. BOTTOM HALF: A-Roll Presenter (Iman Gadzhi) (960px - 1920px) */}
      <div
        style={{
          position: "absolute",
          top: 960,
          left: 0,
          width: 1080,
          height: 960,
          overflow: "hidden",
          backgroundColor: "#000"
        }}
      >
        <div
          style={{
            width: 1920,
            height: 1080,
            transform: `translate(-420px, -60px) scale(${zoomScale})`,
            transformOrigin: "960px 480px",
            transition: "transform 0.1s ease-out"
          }}
        >
          <OffthreadVideo
            src={staticFile("raw.mp4")}
            style={{
              width: 1920,
              height: 1080
            }}
          />
        </div>
      </div>

      {/* 4. CENTER SEAM SUBTITLE PILL */}
      {activeSub && (
        <div
          style={{
            position: "absolute",
            top: 928,
            left: 0,
            width: 1080,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 30,
            pointerEvents: "none"
          }}
        >
          <div
            style={{
              maxWidth: 960,
              padding: "16px 28px",
              backgroundColor: "rgba(0, 0, 0, 0.92)",
              border: "1.5px solid rgba(255, 255, 255, 0.25)",
              borderRadius: 18,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)",
              textAlign: "center",
              fontSize: 34,
              fontWeight: 900,
              letterSpacing: "-0.01em",
              lineHeight: 1.25,
              textTransform: "uppercase"
            }}
          >
            {activeSub.lines.map((part, idx) => (
              <span
                key={idx}
                style={{
                  color: part.color || "#ffffff",
                  textShadow: part.color
                    ? `0 0 20px ${part.color}66`
                    : "0 2px 4px rgba(0,0,0,0.5)"
                }}
              >
                {part.text}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 5. PERSISTENT LOWER-THIRD BRAND PILL */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 0,
          width: 1080,
          display: "flex",
          justifyContent: "center",
          zIndex: 25,
          pointerEvents: "none"
        }}
      >
        <div
          style={{
            padding: "10px 24px",
            backgroundColor: "rgba(10, 15, 25, 0.88)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: 100,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            gap: 10
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#ef4444",
              boxShadow: "0 0 10px #ef4444"
            }}
          />
          <span
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#e2e8f0",
              letterSpacing: "1.5px",
              textTransform: "uppercase"
            }}
          >
            The News Is Propaganda 👁️
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

